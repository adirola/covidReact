// /*


//  SoundManager 2: JavaScript Sound for the Web
//  ----------------------------------------------
//  http://schillmania.com/projects/soundmanager2/

//  Copyright (c) 2007, Scott Schiller. All rights reserved.
//  Code provided under the BSD License:
//  http://schillmania.com/projects/soundmanager2/license.txt

//  V2.97a.20170601
// */


// (function(a, b) {
//     function d(d, f) {
//         function k(a) {
//             return e.preferFlash && I && !e.ignoreFlash && e.flash[a] !== b && e.flash[a]
//         }
//         function l(a) {
//             return function(b) {
//                 var d = this._s;
//                 d && d._a ? b = a.call(this, b) : (d && d.id ? e._wD(d.id + ": Ignoring " + b.type) : e._wD(sb + "Ignoring " + b.type),
//                 b = null);
//                 return b
//             }
//         }
//         this.setupOptions = {
//             url: d || null,
//             flashVersion: 8,
//             debugMode: !0,
//             debugFlash: !1,
//             useConsole: !0,
//             consoleOnly: !0,
//             waitForWindowLoad: !1,
//             bgColor: "#ffffff",
//             useHighPerformance: !1,
//             flashPollingInterval: null,
//             html5PollingInterval: null,
//             flashLoadTimeout: 1E3,
//             wmode: null,
//             allowScriptAccess: "always",
//             useFlashBlock: !1,
//             useHTML5Audio: !0,
//             forceUseGlobalHTML5Audio: !1,
//             ignoreMobileRestrictions: !1,
//             html5Test: /^(probably|maybe)$/i,
//             preferFlash: !1,
//             noSWFCache: !1,
//             idPrefix: "sound"
//         };
//         this.defaultOptions = {
//             autoLoad: !1,
//             autoPlay: !1,
//             from: null,
//             loops: 1,
//             onid3: null,
//             onerror: null,
//             onload: null,
//             whileloading: null,
//             onplay: null,
//             onpause: null,
//             onresume: null,
//             whileplaying: null,
//             onposition: null,
//             onstop: null,
//             onfinish: null,
//             multiShot: !0,
//             multiShotEvents: !1,
//             position: null,
//             pan: 0,
//             playbackRate: 1,
//             stream: !0,
//             to: null,
//             type: null,
//             usePolicyFile: !1,
//             volume: 100
//         };
//         this.flash9Options = {
//             onfailure: null,
//             isMovieStar: null,
//             usePeakData: !1,
//             useWaveformData: !1,
//             useEQData: !1,
//             onbufferchange: null,
//             ondataerror: null
//         };
//         this.movieStarOptions = {
//             bufferTime: 3,
//             serverURL: null,
//             onconnect: null,
//             duration: null
//         };
//         this.audioFormats = {
//             mp3: {
//                 type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
//                 required: !0
//             },
//             mp4: {
//                 related: ["aac", "m4a", "m4b"],
//                 type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
//                 required: !1
//             },
//             ogg: {
//                 type: ["audio/ogg; codecs=vorbis"],
//                 required: !1
//             },
//             opus: {
//                 type: ["audio/ogg; codecs=opus", "audio/opus"],
//                 required: !1
//             },
//             wav: {
//                 type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
//                 required: !1
//             },
//             flac: {
//                 type: ["audio/flac"],
//                 required: !1
//             }
//         };
//         this.movieID = "sm2-container";
//         this.id = f || "sm2movie";
//         this.debugID = "soundmanager-debug";
//         this.debugURLParam = /([#?&])debug=1/i;
//         this.versionNumber = "V2.97a.20170601";
//         this.altURL = this.movieURL = this.version = null;
//         this.enabled = this.swfLoaded = !1;
//         this.oMC = null;
//         this.sounds = {};
//         this.soundIDs = [];
//         this.didFlashBlock = this.muted = !1;
//         this.filePattern = null;
//         this.filePatterns = {
//             flash8: /\.mp3(\?.*)?$/i,
//             flash9: /\.mp3(\?.*)?$/i
//         };
//         this.features = {
//             buffering: !1,
//             peakData: !1,
//             waveformData: !1,
//             eqData: !1,
//             movieStar: !1
//         };
//         this.sandbox = {
//             type: null,
//             types: {
//                 remote: "remote (domain-based) rules",
//                 localWithFile: "local with file access (no internet access)",
//                 localWithNetwork: "local with network (internet access only, no local access)",
//                 localTrusted: "local, trusted (local+internet access)"
//             },
//             description: null,
//             noRemote: null,
//             noLocal: null
//         };
//         this.html5 = {
//             usingFlash: null
//         };
//         this.flash = {};
//         this.ignoreFlash = this.html5Only = !1;
//         var z, e = this, Ya = null, n = null, sb = "HTML5::", H, v = navigator.userAgent, ga = a.location.href.toString(), p = document, xa, Za, ya, m, J = [], za = !0, F, W = !1, X = !1, s = !1, B = !1, ha = !1, r, tb = 0, Y, D, Aa, R, Ba, P, S, T, $a, Ca, Da, ia, C, ja, Q, Ea, Z, ka, la, U, ab, Fa, bb = ["log", "info", "warn", "error"], Ga, Ha, cb, $ = null, Ia = null, t, Ja, V, db, ma, na, L, w, aa = !1, Ka = !1, eb, fb, gb, oa = 0, ba = null, pa, M = [], ca, u = null, hb, qa, da, ib, N, ra, La, jb, A, kb = Array.prototype.slice, E = !1, Ma, I, Na, lb, K, mb, Oa, ea, nb = 0, Pa, Qa = v.match(/(ipad|iphone|ipod)/i), Ra = v.match(/android/i), O = v.match(/msie|trident/i), ub = v.match(/webkit/i), sa = v.match(/safari/i) && !v.match(/chrome/i), Sa = v.match(/opera/i), ta = v.match(/(mobile|pre\/|xoom)/i) || Qa || Ra, Ta = !ga.match(/usehtml5audio/i) && !ga.match(/sm2-ignorebadua/i) && sa && !v.match(/silk/i) && v.match(/OS\sX\s10_6_([3-7])/i), Ua = a.console !== b && console.log !== b, Va = p.hasFocus !== b ? p.hasFocus() : null, ua = sa && (p.hasFocus === b || !p.hasFocus()), ob = !ua, pb = /(mp3|mp4|mpa|m4a|m4b)/i, fa = p.location ? p.location.protocol.match(/http/i) : null, vb = fa ? "" : "//", qb = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4|m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i, rb = "mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "), wb = new RegExp("\\.(" + rb.join("|") + ")(\\?.*)?$","i");
//         this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
//         this.useAltURL = !fa;
//         ib = [null, "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED"];
//         var Wa;
//         try {
//             Wa = Audio !== b && (Sa && opera !== b && 10 > opera.version() ? new Audio(null) : new Audio).canPlayType !== b
//         } catch (xb) {
//             Wa = !1
//         }
//         this.hasHTML5 = Wa;
//         this.setup = function(a) {
//             var d = !e.url;
//             a !== b && s && u && e.ok() && (a.flashVersion !== b || a.url !== b || a.html5Test !== b) && L(t("setupLate"));
//             Aa(a);
//             if (!E)
//                 if (ta) {
//                     if (!e.setupOptions.ignoreMobileRestrictions || e.setupOptions.forceUseGlobalHTML5Audio)
//                         M.push(C.globalHTML5),
//                         E = !0
//                 } else
//                     e.setupOptions.forceUseGlobalHTML5Audio && (M.push(C.globalHTML5),
//                     E = !0);
//             if (!Pa && ta)
//                 if (e.setupOptions.ignoreMobileRestrictions)
//                     M.push(C.ignoreMobile);
//                 else if (e.setupOptions.useHTML5Audio && !e.setupOptions.preferFlash || e._wD(C.mobileUA),
//                 e.setupOptions.useHTML5Audio = !0,
//                 e.setupOptions.preferFlash = !1,
//                 Qa)
//                     e.ignoreFlash = !0;
//                 else if (Ra && !v.match(/android\s2\.3/i) || !Ra)
//                     e._wD(C.globalHTML5),
//                     E = !0;
//             a && (d && Z && a.url !== b && e.beginDelayedInit(),
//             Z || a.url === b || "complete" !== p.readyState || setTimeout(Q, 1));
//             Pa = !0;
//             return e
//         }
//         ;
//         this.supported = this.ok = function() {
//             return u ? s && !B : e.useHTML5Audio && e.hasHTML5
//         }
//         ;
//         this.getMovie = function(b) {
//             return H(b) || p[b] || a[b]
//         }
//         ;
//         this.createSound = function(a, d) {
//             function f() {
//                 g = ma(g);
//                 e.sounds[g.id] = new z(g);
//                 e.soundIDs.push(g.id);
//                 return e.sounds[g.id]
//             }
//             var c, g;
//             c = null;
//             c = "soundManager.createSound(): " + t(s ? "notOK" : "notReady");
//             if (!s || !e.ok())
//                 return L(c),
//                 !1;
//             d !== b && (a = {
//                 id: a,
//                 url: d
//             });
//             g = D(a);
//             g.url = pa(g.url);
//             g.id === b && (g.id = e.setupOptions.idPrefix + nb++);
//             g.id.toString().charAt(0).match(/^[0-9]$/) && e._wD("soundManager.createSound(): " + t("badID", g.id), 2);
//             e._wD("soundManager.createSound(): " + g.id + (g.url ? " (" + g.url + ")" : ""), 1);
//             if (w(g.id, !0))
//                 return e._wD("soundManager.createSound(): " + g.id + " exists", 1),
//                 e.sounds[g.id];
//             if (qa(g))
//                 c = f(),
//                 e.html5Only || e._wD(g.id + ": Using HTML5"),
//                 c._setup_html5(g);
//             else {
//                 if (e.html5Only)
//                     return e._wD(g.id + ": No HTML5 support for this sound, and no Flash. Exiting."),
//                     f();
//                 if (e.html5.usingFlash && g.url && g.url.match(/data:/i))
//                     return e._wD(g.id + ": data: URIs not supported via Flash. Exiting."),
//                     f();
//                 8 < m && (null === g.isMovieStar && (g.isMovieStar = !!(g.serverURL || g.type && g.type.match(qb) || g.url && g.url.match(wb))),
//                 g.isMovieStar && (e._wD("soundManager.createSound(): using MovieStar handling"),
//                 1 < g.loops && r("noNSLoop")));
//                 g = na(g, "soundManager.createSound(): ");
//                 c = f();
//                 8 === m ? n._createSound(g.id, g.loops || 1, g.usePolicyFile) : (n._createSound(g.id, g.url, g.usePeakData, g.useWaveformData, g.useEQData, g.isMovieStar, g.isMovieStar ? g.bufferTime : !1, g.loops || 1, g.serverURL, g.duration || null, g.autoPlay, !0, g.autoLoad, g.usePolicyFile),
//                 g.serverURL || (c.connected = !0,
//                 g.onconnect && g.onconnect.apply(c)));
//                 g.serverURL || !g.autoLoad && !g.autoPlay || c.load(g)
//             }
//             !g.serverURL && g.autoPlay && c.play();
//             return c
//         }
//         ;
//         this.destroySound = function(a, b) {
//             if (!w(a))
//                 return !1;
//             var d = e.sounds[a], c;
//             d.stop();
//             d._iO = {};
//             d.unload();
//             for (c = 0; c < e.soundIDs.length; c++)
//                 if (e.soundIDs[c] === a) {
//                     e.soundIDs.splice(c, 1);
//                     break
//                 }
//             b || d.destruct(!0);
//             delete e.sounds[a];
//             return !0
//         }
//         ;
//         this.load = function(a, b) {
//             return w(a) ? e.sounds[a].load(b) : !1
//         }
//         ;
//         this.unload = function(a) {
//             return w(a) ? e.sounds[a].unload() : !1
//         }
//         ;
//         this.onposition = this.onPosition = function(a, b, d, c) {
//             return w(a) ? e.sounds[a].onposition(b, d, c) : !1
//         }
//         ;
//         this.clearOnPosition = function(a, b, d) {
//             return w(a) ? e.sounds[a].clearOnPosition(b, d) : !1
//         }
//         ;
//         this.start = this.play = function(a, b) {
//             var d = null
//               , c = b && !(b instanceof Object);
//             if (!s || !e.ok())
//                 return L("soundManager.play(): " + t(s ? "notOK" : "notReady")),
//                 !1;
//             if (w(a, c))
//                 c && (b = {
//                     url: b
//                 });
//             else {
//                 if (!c)
//                     return !1;
//                 c && (b = {
//                     url: b
//                 });
//                 b && b.url && (e._wD('soundManager.play(): Attempting to create "' + a + '"', 1),
//                 b.id = a,
//                 d = e.createSound(b).play())
//             }
//             null === d && (d = e.sounds[a].play(b));
//             return d
//         }
//         ;
//         this.setPlaybackRate = function(a, b, d) {
//             return w(a) ? e.sounds[a].setPlaybackRate(b, d) : !1
//         }
//         ;
//         this.setPosition = function(a, b) {
//             return w(a) ? e.sounds[a].setPosition(b) : !1
//         }
//         ;
//         this.stop = function(a) {
//             if (!w(a))
//                 return !1;
//             e._wD("soundManager.stop(" + a + ")", 1);
//             return e.sounds[a].stop()
//         }
//         ;
//         this.stopAll = function() {
//             var a;
//             e._wD("soundManager.stopAll()", 1);
//             for (a in e.sounds)
//                 e.sounds.hasOwnProperty(a) && e.sounds[a].stop()
//         }
//         ;
//         this.pause = function(a) {
//             return w(a) ? e.sounds[a].pause() : !1
//         }
//         ;
//         this.pauseAll = function() {
//             var a;
//             for (a = e.soundIDs.length - 1; 0 <= a; a--)
//                 e.sounds[e.soundIDs[a]].pause()
//         }
//         ;
//         this.resume = function(a) {
//             return w(a) ? e.sounds[a].resume() : !1
//         }
//         ;
//         this.resumeAll = function() {
//             var a;
//             for (a = e.soundIDs.length - 1; 0 <= a; a--)
//                 e.sounds[e.soundIDs[a]].resume()
//         }
//         ;
//         this.togglePause = function(a) {
//             return w(a) ? e.sounds[a].togglePause() : !1
//         }
//         ;
//         this.setPan = function(a, b) {
//             return w(a) ? e.sounds[a].setPan(b) : !1
//         }
//         ;
//         this.setVolume = function(a, d) {
//             var f, c;
//             if (a !== b && !isNaN(a) && d === b) {
//                 f = 0;
//                 for (c = e.soundIDs.length; f < c; f++)
//                     e.sounds[e.soundIDs[f]].setVolume(a);
//                 return !1
//             }
//             return w(a) ? e.sounds[a].setVolume(d) : !1
//         }
//         ;
//         this.mute = function(a) {
//             var b = 0;
//             a instanceof String && (a = null);
//             if (a) {
//                 if (!w(a))
//                     return !1;
//                 e._wD('soundManager.mute(): Muting "' + a + '"');
//                 return e.sounds[a].mute()
//             }
//             e._wD("soundManager.mute(): Muting all sounds");
//             for (b = e.soundIDs.length - 1; 0 <= b; b--)
//                 e.sounds[e.soundIDs[b]].mute();
//             return e.muted = !0
//         }
//         ;
//         this.muteAll = function() {
//             e.mute()
//         }
//         ;
//         this.unmute = function(a) {
//             a instanceof String && (a = null);
//             if (a) {
//                 if (!w(a))
//                     return !1;
//                 e._wD('soundManager.unmute(): Unmuting "' + a + '"');
//                 return e.sounds[a].unmute()
//             }
//             e._wD("soundManager.unmute(): Unmuting all sounds");
//             for (a = e.soundIDs.length - 1; 0 <= a; a--)
//                 e.sounds[e.soundIDs[a]].unmute();
//             e.muted = !1;
//             return !0
//         }
//         ;
//         this.unmuteAll = function() {
//             e.unmute()
//         }
//         ;
//         this.toggleMute = function(a) {
//             return w(a) ? e.sounds[a].toggleMute() : !1
//         }
//         ;
//         this.getMemoryUse = function() {
//             var a = 0;
//             n && 8 !== m && (a = parseInt(n._getMemoryUse(), 10));
//             return a
//         }
//         ;
//         this.disable = function(d) {
//             var f;
//             d === b && (d = !1);
//             if (B)
//                 return !1;
//             B = !0;
//             r("shutdown", 1);
//             for (f = e.soundIDs.length - 1; 0 <= f; f--)
//                 Ga(e.sounds[e.soundIDs[f]]);
//             Ga(e);
//             Y(d);
//             A.remove(a, "load", S);
//             return !0
//         }
//         ;
//         this.canPlayMIME = function(a) {
//             var b;
//             e.hasHTML5 && (b = da({
//                 type: a
//             }));
//             !b && u && (b = a && e.ok() ? !!(8 < m && a.match(qb) || a.match(e.mimePattern)) : null);
//             return b
//         }
//         ;
//         this.canPlayURL = function(a) {
//             var b;
//             e.hasHTML5 && (b = da({
//                 url: a
//             }));
//             !b && u && (b = a && e.ok() ? !!a.match(e.filePattern) : null);
//             return b
//         }
//         ;
//         this.canPlayLink = function(a) {
//             return a.type !== b && a.type && e.canPlayMIME(a.type) ? !0 : e.canPlayURL(a.href)
//         }
//         ;
//         this.getSoundById = function(a, b) {
//             if (!a)
//                 return null;
//             var d = e.sounds[a];
//             d || b || e._wD('soundManager.getSoundById(): Sound "' + a + '" not found.', 2);
//             return d
//         }
//         ;
//         this.onready = function(b, d) {
//             if ("function" === typeof b)
//                 s && e._wD(t("queue", "onready")),
//                 d || (d = a),
//                 Ba("onready", b, d),
//                 P();
//             else
//                 throw t("needFunction", "onready");
//             return !0
//         }
//         ;
//         this.ontimeout = function(b, d) {
//             if ("function" === typeof b)
//                 s && e._wD(t("queue", "ontimeout")),
//                 d || (d = a),
//                 Ba("ontimeout", b, d),
//                 P({
//                     type: "ontimeout"
//                 });
//             else
//                 throw t("needFunction", "ontimeout");
//             return !0
//         }
//         ;
//         this._writeDebug = function(a, d) {
//             var f, c;
//             if (!e.setupOptions.debugMode)
//                 return !1;
//             if (Ua && e.useConsole) {
//                 if (d && "object" === typeof d)
//                     console.log(a, d);
//                 else if (bb[d] !== b)
//                     console[bb[d]](a);
//                 else
//                     console.log(a);
//                 if (e.consoleOnly)
//                     return !0
//             }
//             f = H("soundmanager-debug");
//             if (!f)
//                 return !1;
//             c = p.createElement("div");
//             0 === ++tb % 2 && (c.className = "sm2-alt");
//             d = d === b ? 0 : parseInt(d, 10);
//             c.appendChild(p.createTextNode(a));
//             d && (2 <= d && (c.style.fontWeight = "bold"),
//             3 === d && (c.style.color = "#ff3333"));
//             f.insertBefore(c, f.firstChild);
//             return !0
//         }
//         ;
//         -1 !== ga.indexOf("sm2-debug=alert") && (this._writeDebug = function(b) {
//             a.alert(b)
//         }
//         );
//         this._wD = this._writeDebug;
//         this._debug = function() {
//             var a, b;
//             r("currentObj", 1);
//             a = 0;
//             for (b = e.soundIDs.length; a < b; a++)
//                 e.sounds[e.soundIDs[a]]._debug()
//         }
//         ;
//         this.reboot = function(b, d) {
//             e.soundIDs.length && e._wD("Destroying " + e.soundIDs.length + " SMSound object" + (1 !== e.soundIDs.length ? "s" : "") + "...");
//             var f, c, g;
//             for (f = e.soundIDs.length - 1; 0 <= f; f--)
//                 e.sounds[e.soundIDs[f]].destruct();
//             if (n)
//                 try {
//                     O && (Ia = n.innerHTML),
//                     $ = n.parentNode.removeChild(n)
//                 } catch (h) {
//                     r("badRemove", 2)
//                 }
//             Ia = $ = u = n = null;
//             e.enabled = Z = s = aa = Ka = W = X = B = E = e.swfLoaded = !1;
//             e.soundIDs = [];
//             e.sounds = {};
//             nb = 0;
//             Pa = !1;
//             if (b)
//                 J = [];
//             else
//                 for (f in J)
//                     if (J.hasOwnProperty(f))
//                         for (c = 0,
//                         g = J[f].length; c < g; c++)
//                             J[f][c].fired = !1;
//             d || e._wD("soundManager: Rebooting...");
//             e.html5 = {
//                 usingFlash: null
//             };
//             e.flash = {};
//             e.html5Only = !1;
//             e.ignoreFlash = !1;
//             a.setTimeout(function() {
//                 d || e.beginDelayedInit()
//             }, 20);
//             return e
//         }
//         ;
//         this.reset = function() {
//             r("reset");
//             return e.reboot(!0, !0)
//         }
//         ;
//         this.getMoviePercent = function() {
//             return n && "PercentLoaded"in n ? n.PercentLoaded() : null
//         }
//         ;
//         this.beginDelayedInit = function() {
//             ha = !0;
//             Q();
//             setTimeout(function() {
//                 if (Ka)
//                     return !1;
//                 la();
//                 ja();
//                 return Ka = !0
//             }, 20);
//             T()
//         }
//         ;
//         this.destruct = function() {
//             e._wD("soundManager.destruct()");
//             e.disable(!0)
//         }
//         ;
//         z = function(a) {
//             var d, f, c = this, g, h, k, l, p, s, v = !1, G = [], z = 0, Xa, B, u = null, C;
//             f = d = null;
//             this.sID = this.id = a.id;
//             this.url = a.url;
//             this._iO = this.instanceOptions = this.options = D(a);
//             this.pan = this.options.pan;
//             this.volume = this.options.volume;
//             this.isHTML5 = !1;
//             this._a = null;
//             C = !this.url;
//             this.id3 = {};
//             this._debug = function() {
//                 e._wD(c.id + ": Merged options:", c.options)
//             }
//             ;
//             this.load = function(a) {
//                 var d = null, f;
//                 a !== b ? c._iO = D(a, c.options) : (a = c.options,
//                 c._iO = a,
//                 u && u !== c.url && (r("manURL"),
//                 c._iO.url = c.url,
//                 c.url = null));
//                 c._iO.url || (c._iO.url = c.url);
//                 c._iO.url = pa(c._iO.url);
//                 f = c.instanceOptions = c._iO;
//                 e._wD(c.id + ": load (" + f.url + ")");
//                 if (!f.url && !c.url)
//                     return e._wD(c.id + ": load(): url is unassigned. Exiting.", 2),
//                     c;
//                 c.isHTML5 || 8 !== m || c.url || f.autoPlay || e._wD(c.id + ": Flash 8 load() limitation: Wait for onload() before calling play().", 1);
//                 if (f.url === c.url && 0 !== c.readyState && 2 !== c.readyState)
//                     return r("onURL", 1),
//                     3 === c.readyState && f.onload && ea(c, function() {
//                         f.onload.apply(c, [!!c.duration])
//                     }),
//                     c;
//                 c.loaded = !1;
//                 c.readyState = 1;
//                 c.playState = 0;
//                 c.id3 = {};
//                 if (qa(f))
//                     d = c._setup_html5(f),
//                     d._called_load ? e._wD(c.id + ": Ignoring request to load again") : (c._html5_canplay = !1,
//                     c.url !== f.url && (e._wD(r("manURL") + ": " + f.url),
//                     c._a.src = f.url,
//                     c.setPosition(0)),
//                     c._a.autobuffer = "auto",
//                     c._a.preload = "auto",
//                     c._a._called_load = !0);
//                 else {
//                     if (e.html5Only)
//                         return e._wD(c.id + ": No flash support. Exiting."),
//                         c;
//                     if (c._iO.url && c._iO.url.match(/data:/i))
//                         return e._wD(c.id + ": data: URIs not supported via Flash. Exiting."),
//                         c;
//                     try {
//                         c.isHTML5 = !1,
//                         c._iO = na(ma(f)),
//                         c._iO.autoPlay && (c._iO.position || c._iO.from) && (e._wD(c.id + ": Disabling autoPlay because of non-zero offset case"),
//                         c._iO.autoPlay = !1),
//                         f = c._iO,
//                         8 === m ? n._load(c.id, f.url, f.stream, f.autoPlay, f.usePolicyFile) : n._load(c.id, f.url, !!f.stream, !!f.autoPlay, f.loops || 1, !!f.autoLoad, f.usePolicyFile)
//                     } catch (q) {
//                         r("smError", 2),
//                         F("onload", !1),
//                         U({
//                             type: "SMSOUND_LOAD_JS_EXCEPTION",
//                             fatal: !0
//                         })
//                     }
//                 }
//                 c.url = f.url;
//                 return c
//             }
//             ;
//             this.unload = function() {
//                 0 !== c.readyState && (e._wD(c.id + ": unload()"),
//                 c.isHTML5 ? (l(),
//                 c._a && (c._a.pause(),
//                 u = ra(c._a))) : 8 === m ? n._unload(c.id, "about:blank") : n._unload(c.id),
//                 g());
//                 return c
//             }
//             ;
//             this.destruct = function(a) {
//                 e._wD(c.id + ": Destruct");
//                 c.isHTML5 ? (l(),
//                 c._a && (c._a.pause(),
//                 ra(c._a),
//                 E || k(),
//                 c._a._s = null,
//                 c._a = null)) : (c._iO.onfailure = null,
//                 n._destroySound(c.id));
//                 a || e.destroySound(c.id, !0)
//             }
//             ;
//             this.start = this.play = function(a, d) {
//                 var f, q, g, va, wa;
//                 q = !0;
//                 f = c.id + ": play(): ";
//                 d = d === b ? !0 : d;
//                 a || (a = {});
//                 c.url && (c._iO.url = c.url);
//                 c._iO = D(c._iO, c.options);
//                 c._iO = D(a, c._iO);
//                 c._iO.url = pa(c._iO.url);
//                 c.instanceOptions = c._iO;
//                 if (!c.isHTML5 && c._iO.serverURL && !c.connected)
//                     return c.getAutoPlay() || (e._wD(f + " Netstream not connected yet - setting autoPlay"),
//                     c.setAutoPlay(!0)),
//                     c;
//                 qa(c._iO) && (c._setup_html5(c._iO),
//                 p());
//                 if (1 === c.playState && !c.paused) {
//                     q = c._iO.multiShot;
//                     if (!q)
//                         return e._wD(f + "Already playing (one-shot)", 1),
//                         c.isHTML5 && c.setPosition(c._iO.position),
//                         c;
//                     e._wD(f + "Already playing (multi-shot)", 1)
//                 }
//                 a.url && a.url !== c.url && (c.readyState || c.isHTML5 || 8 !== m || !C ? c.load(c._iO) : C = !1);
//                 if (c.loaded)
//                     e._wD(f.substr(0, f.lastIndexOf(":")));
//                 else if (0 === c.readyState) {
//                     e._wD(f + "Attempting to load");
//                     if (c.isHTML5 || e.html5Only)
//                         if (c.isHTML5)
//                             c.load(c._iO);
//                         else
//                             return e._wD(f + "Unsupported type. Exiting."),
//                             c;
//                     else
//                         c._iO.autoPlay = !0,
//                         c.load(c._iO);
//                     c.instanceOptions = c._iO
//                 } else {
//                     if (2 === c.readyState)
//                         return e._wD(f + "Could not load - exiting", 2),
//                         c;
//                     e._wD(f + "Loading - attempting to play...")
//                 }
//                 !c.isHTML5 && 9 === m && 0 < c.position && c.position === c.duration && (e._wD(f + "Sound at end, resetting to position: 0"),
//                 a.position = 0);
//                 c.paused && 0 <= c.position && (!c._iO.serverURL || 0 < c.position) ? (e._wD(f + "Resuming from paused state", 1),
//                 c.resume()) : (c._iO = D(a, c._iO),
//                 (!c.isHTML5 && null !== c._iO.position && 0 < c._iO.position || null !== c._iO.from && 0 < c._iO.from || null !== c._iO.to) && 0 === c.instanceCount && 0 === c.playState && !c._iO.serverURL && (q = function() {
//                     c._iO = D(a, c._iO);
//                     c.play(c._iO)
//                 }
//                 ,
//                 c.isHTML5 && !c._html5_canplay ? (e._wD(f + "Beginning load for non-zero offset case"),
//                 c.load({
//                     _oncanplay: q
//                 })) : c.isHTML5 || c.loaded || c.readyState && 2 === c.readyState || (e._wD(f + "Preloading for non-zero offset case"),
//                 c.load({
//                     onload: q
//                 })),
//                 c._iO = B()),
//                 (!c.instanceCount || c._iO.multiShotEvents || c.isHTML5 && c._iO.multiShot && !E || !c.isHTML5 && 8 < m && !c.getAutoPlay()) && c.instanceCount++,
//                 c._iO.onposition && 0 === c.playState && s(c),
//                 c.playState = 1,
//                 c.paused = !1,
//                 c.position = c._iO.position === b || isNaN(c._iO.position) ? 0 : c._iO.position,
//                 c.isHTML5 || (c._iO = na(ma(c._iO))),
//                 c._iO.onplay && d && (c._iO.onplay.apply(c),
//                 v = !0),
//                 c.setVolume(c._iO.volume, !0),
//                 c.setPan(c._iO.pan, !0),
//                 1 !== c._iO.playbackRate && c.setPlaybackRate(c._iO.playbackRate),
//                 c.isHTML5 ? 2 > c.instanceCount ? (p(),
//                 f = c._setup_html5(),
//                 c.setPosition(c._iO.position),
//                 f.play()) : (e._wD(c.id + ": Cloning Audio() for instance #" + c.instanceCount + "..."),
//                 g = new Audio(c._iO.url),
//                 va = function() {
//                     A.remove(g, "ended", va);
//                     c._onfinish(c);
//                     ra(g);
//                     g = null
//                 }
//                 ,
//                 wa = function() {
//                     A.remove(g, "canplay", wa);
//                     try {
//                         g.currentTime = c._iO.position / 1E3
//                     } catch (a) {
//                         L(c.id + ": multiShot play() failed to apply position of " + c._iO.position / 1E3)
//                     }
//                     g.play()
//                 }
//                 ,
//                 A.add(g, "ended", va),
//                 c._iO.volume !== b && (g.volume = Math.max(0, Math.min(1, c._iO.volume / 100))),
//                 c.muted && (g.muted = !0),
//                 c._iO.position ? A.add(g, "canplay", wa) : g.play()) : (q = n._start(c.id, c._iO.loops || 1, 9 === m ? c.position : c.position / 1E3, c._iO.multiShot || !1),
//                 9 !== m || q || (e._wD(f + "No sound hardware, or 32-sound ceiling hit", 2),
//                 c._iO.onplayerror && c._iO.onplayerror.apply(c))));
//                 return c
//             }
//             ;
//             this.stop = function(a) {
//                 var b = c._iO;
//                 1 === c.playState && (e._wD(c.id + ": stop()"),
//                 c._onbufferchange(0),
//                 c._resetOnPosition(0),
//                 c.paused = !1,
//                 c.isHTML5 || (c.playState = 0),
//                 Xa(),
//                 b.to && c.clearOnPosition(b.to),
//                 c.isHTML5 ? c._a && (a = c.position,
//                 c.setPosition(0),
//                 c.position = a,
//                 c._a.pause(),
//                 c.playState = 0,
//                 c._onTimer(),
//                 l()) : (n._stop(c.id, a),
//                 b.serverURL && c.unload()),
//                 c.instanceCount = 0,
//                 c._iO = {},
//                 b.onstop && b.onstop.apply(c));
//                 return c
//             }
//             ;
//             this.setAutoPlay = function(a) {
//                 e._wD(c.id + ": Autoplay turned " + (a ? "on" : "off"));
//                 c._iO.autoPlay = a;
//                 c.isHTML5 || (n._setAutoPlay(c.id, a),
//                 a && !c.instanceCount && 1 === c.readyState && (c.instanceCount++,
//                 e._wD(c.id + ": Incremented instance count to " + c.instanceCount)))
//             }
//             ;
//             this.getAutoPlay = function() {
//                 return c._iO.autoPlay
//             }
//             ;
//             this.setPlaybackRate = function(a) {
//                 var b = Math.max(0.5, Math.min(4, a));
//                 b !== a && e._wD(c.id + ": setPlaybackRate(" + a + "): limiting rate to " + b, 2);
//                 if (c.isHTML5)
//                     try {
//                         c._iO.playbackRate = b,
//                         c._a.playbackRate = b
//                     } catch (d) {
//                         e._wD(c.id + ": setPlaybackRate(" + b + ") failed: " + d.message, 2)
//                     }
//                 return c
//             }
//             ;
//             this.setPosition = function(a) {
//                 a === b && (a = 0);
//                 var d = c.isHTML5 ? Math.max(a, 0) : Math.min(c.duration || c._iO.duration, Math.max(a, 0));
//                 c.position = d;
//                 a = c.position / 1E3;
//                 c._resetOnPosition(c.position);
//                 c._iO.position = d;
//                 if (!c.isHTML5)
//                     a = 9 === m ? c.position : a,
//                     c.readyState && 2 !== c.readyState && n._setPosition(c.id, a, c.paused || !c.playState, c._iO.multiShot);
//                 else if (c._a) {
//                     if (c._html5_canplay) {
//                         if (c._a.currentTime.toFixed(3) !== a.toFixed(3)) {
//                             e._wD(c.id + ": setPosition(" + a + ")");
//                             try {
//                                 c._a.currentTime = a,
//                                 (0 === c.playState || c.paused) && c._a.pause()
//                             } catch (f) {
//                                 e._wD(c.id + ": setPosition(" + a + ") failed: " + f.message, 2)
//                             }
//                         }
//                     } else if (a)
//                         return e._wD(c.id + ": setPosition(" + a + "): Cannot seek yet, sound not ready", 2),
//                         c;
//                     c.paused && c._onTimer(!0)
//                 }
//                 return c
//             }
//             ;
//             this.pause = function(a) {
//                 if (c.paused || 0 === c.playState && 1 !== c.readyState)
//                     return c;
//                 e._wD(c.id + ": pause()");
//                 c.paused = !0;
//                 c.isHTML5 ? (c._setup_html5().pause(),
//                 l()) : (a || a === b) && n._pause(c.id, c._iO.multiShot);
//                 c._iO.onpause && c._iO.onpause.apply(c);
//                 return c
//             }
//             ;
//             this.resume = function() {
//                 var a = c._iO;
//                 if (!c.paused)
//                     return c;
//                 e._wD(c.id + ": resume()");
//                 c.paused = !1;
//                 c.playState = 1;
//                 c.isHTML5 ? (c._setup_html5().play(),
//                 p()) : (a.isMovieStar && !a.serverURL && c.setPosition(c.position),
//                 n._pause(c.id, a.multiShot));
//                 !v && a.onplay ? (a.onplay.apply(c),
//                 v = !0) : a.onresume && a.onresume.apply(c);
//                 return c
//             }
//             ;
//             this.togglePause = function() {
//                 e._wD(c.id + ": togglePause()");
//                 if (0 === c.playState)
//                     return c.play({
//                         position: 9 !== m || c.isHTML5 ? c.position / 1E3 : c.position
//                     }),
//                     c;
//                 c.paused ? c.resume() : c.pause();
//                 return c
//             }
//             ;
//             this.setPan = function(a, e) {
//                 a === b && (a = 0);
//                 e === b && (e = !1);
//                 c.isHTML5 || n._setPan(c.id, a);
//                 c._iO.pan = a;
//                 e || (c.pan = a,
//                 c.options.pan = a);
//                 return c
//             }
//             ;
//             this.setVolume = function(a, d) {
//                 a === b && (a = 100);
//                 d === b && (d = !1);
//                 c.isHTML5 ? c._a && (e.muted && !c.muted && (c.muted = !0,
//                 c._a.muted = !0),
//                 c._a.volume = Math.max(0, Math.min(1, a / 100))) : n._setVolume(c.id, e.muted && !c.muted || c.muted ? 0 : a);
//                 c._iO.volume = a;
//                 d || (c.volume = a,
//                 c.options.volume = a);
//                 return c
//             }
//             ;
//             this.mute = function() {
//                 c.muted = !0;
//                 c.isHTML5 ? c._a && (c._a.muted = !0) : n._setVolume(c.id, 0);
//                 return c
//             }
//             ;
//             this.unmute = function() {
//                 c.muted = !1;
//                 var a = c._iO.volume !== b;
//                 c.isHTML5 ? c._a && (c._a.muted = !1) : n._setVolume(c.id, a ? c._iO.volume : c.options.volume);
//                 return c
//             }
//             ;
//             this.toggleMute = function() {
//                 return c.muted ? c.unmute() : c.mute()
//             }
//             ;
//             this.onposition = this.onPosition = function(a, e, d) {
//                 G.push({
//                     position: parseInt(a, 10),
//                     method: e,
//                     scope: d !== b ? d : c,
//                     fired: !1
//                 });
//                 return c
//             }
//             ;
//             this.clearOnPosition = function(a, c) {
//                 var b;
//                 a = parseInt(a, 10);
//                 if (!isNaN(a))
//                     for (b = 0; b < G.length; b++)
//                         a !== G[b].position || c && c !== G[b].method || (G[b].fired && z--,
//                         G.splice(b, 1))
//             }
//             ;
//             this._processOnPosition = function() {
//                 var a, b;
//                 a = G.length;
//                 if (!a || !c.playState || z >= a)
//                     return !1;
//                 for (a -= 1; 0 <= a; a--)
//                     b = G[a],
//                     !b.fired && c.position >= b.position && (b.fired = !0,
//                     z++,
//                     b.method.apply(b.scope, [b.position]));
//                 return !0
//             }
//             ;
//             this._resetOnPosition = function(a) {
//                 var c, b;
//                 c = G.length;
//                 if (!c)
//                     return !1;
//                 for (c -= 1; 0 <= c; c--)
//                     b = G[c],
//                     b.fired && a <= b.position && (b.fired = !1,
//                     z--);
//                 return !0
//             }
//             ;
//             B = function() {
//                 var a = c._iO, b = a.from, d = a.to, f, q;
//                 q = function() {
//                     e._wD(c.id + ': "To" time of ' + d + " reached.");
//                     c.clearOnPosition(d, q);
//                     c.stop()
//                 }
//                 ;
//                 f = function() {
//                     e._wD(c.id + ': Playing "from" ' + b);
//                     if (null !== d && !isNaN(d))
//                         c.onPosition(d, q)
//                 }
//                 ;
//                 null === b || isNaN(b) || (a.position = b,
//                 a.multiShot = !1,
//                 f());
//                 return a
//             }
//             ;
//             s = function() {
//                 var a, b = c._iO.onposition;
//                 if (b)
//                     for (a in b)
//                         if (b.hasOwnProperty(a))
//                             c.onPosition(parseInt(a, 10), b[a])
//             }
//             ;
//             Xa = function() {
//                 var a, b = c._iO.onposition;
//                 if (b)
//                     for (a in b)
//                         b.hasOwnProperty(a) && c.clearOnPosition(parseInt(a, 10))
//             }
//             ;
//             p = function() {
//                 c.isHTML5 && eb(c)
//             }
//             ;
//             l = function() {
//                 c.isHTML5 && fb(c)
//             }
//             ;
//             g = function(a) {
//                 a || (G = [],
//                 z = 0);
//                 v = !1;
//                 c._hasTimer = null;
//                 c._a = null;
//                 c._html5_canplay = !1;
//                 c.bytesLoaded = null;
//                 c.bytesTotal = null;
//                 c.duration = c._iO && c._iO.duration ? c._iO.duration : null;
//                 c.durationEstimate = null;
//                 c.buffered = [];
//                 c.eqData = [];
//                 c.eqData.left = [];
//                 c.eqData.right = [];
//                 c.failures = 0;
//                 c.isBuffering = !1;
//                 c.instanceOptions = {};
//                 c.instanceCount = 0;
//                 c.loaded = !1;
//                 c.metadata = {};
//                 c.readyState = 0;
//                 c.muted = !1;
//                 c.paused = !1;
//                 c.peakData = {
//                     left: 0,
//                     right: 0
//                 };
//                 c.waveformData = {
//                     left: [],
//                     right: []
//                 };
//                 c.playState = 0;
//                 c.position = null;
//                 c.id3 = {}
//             }
//             ;
//             g();
//             this._onTimer = function(a) {
//                 var b, e = !1, q = {};
//                 (c._hasTimer || a) && c._a && (a || (0 < c.playState || 1 === c.readyState) && !c.paused) && (b = c._get_html5_duration(),
//                 b !== d && (d = b,
//                 c.duration = b,
//                 e = !0),
//                 c.durationEstimate = c.duration,
//                 b = 1E3 * c._a.currentTime || 0,
//                 b !== f && (f = b,
//                 e = !0),
//                 (e || a) && c._whileplaying(b, q, q, q, q));
//                 return e
//             }
//             ;
//             this._get_html5_duration = function() {
//                 var a = c._iO;
//                 return (a = c._a && c._a.duration ? 1E3 * c._a.duration : a && a.duration ? a.duration : null) && !isNaN(a) && Infinity !== a ? a : null
//             }
//             ;
//             this._apply_loop = function(a, c) {
//                 !a.loop && 1 < c && e._wD("Note: Native HTML5 looping is infinite.", 1);
//                 a.loop = 1 < c ? "loop" : ""
//             }
//             ;
//             this._setup_html5 = function(a) {
//                 a = D(c._iO, a);
//                 var b = E ? Ya : c._a, e = decodeURI(a.url), d;
//                 E ? e === decodeURI(Ma) && (d = !0) : e === decodeURI(u) && (d = !0);
//                 if (b) {
//                     if (b._s)
//                         if (E)
//                             b._s && b._s.playState && !d && b._s.stop();
//                         else if (!E && e === decodeURI(u))
//                             return c._apply_loop(b, a.loops),
//                             b;
//                     d || (u && g(!1),
//                     b.src = a.url,
//                     Ma = u = c.url = a.url,
//                     b._called_load = !1)
//                 } else
//                     a.autoLoad || a.autoPlay ? (c._a = new Audio(a.url),
//                     c._a.load()) : c._a = Sa && 10 > opera.version() ? new Audio(null) : new Audio,
//                     b = c._a,
//                     b._called_load = !1,
//                     E && (Ya = b);
//                 c.isHTML5 = !0;
//                 c._a = b;
//                 b._s = c;
//                 h();
//                 c._apply_loop(b, a.loops);
//                 a.autoLoad || a.autoPlay ? c.load() : (b.autobuffer = !1,
//                 b.preload = "auto");
//                 return b
//             }
//             ;
//             h = function() {
//                 if (c._a._added_events)
//                     return !1;
//                 var a;
//                 c._a._added_events = !0;
//                 for (a in K)
//                     K.hasOwnProperty(a) && c._a && c._a.addEventListener(a, K[a], !1);
//                 return !0
//             }
//             ;
//             k = function() {
//                 var a;
//                 e._wD(c.id + ": Removing event listeners");
//                 c._a._added_events = !1;
//                 for (a in K)
//                     K.hasOwnProperty(a) && c._a && c._a.removeEventListener(a, K[a], !1)
//             }
//             ;
//             this._onload = function(a) {
//                 var b = !!a || !c.isHTML5 && 8 === m && c.duration;
//                 a = c.id + ": ";
//                 e._wD(a + (b ? "onload()" : "Failed to load / invalid sound?" + (c.duration ? " -" : " Zero-length duration reported.") + " (" + c.url + ")"), b ? 1 : 2);
//                 b || c.isHTML5 || (!0 === e.sandbox.noRemote && e._wD(a + t("noNet"), 1),
//                 !0 === e.sandbox.noLocal && e._wD(a + t("noLocal"), 1));
//                 c.loaded = b;
//                 c.readyState = b ? 3 : 2;
//                 c._onbufferchange(0);
//                 b || c.isHTML5 || c._onerror();
//                 c._iO.onload && ea(c, function() {
//                     c._iO.onload.apply(c, [b])
//                 });
//                 return !0
//             }
//             ;
//             this._onerror = function(a, b) {
//                 c._iO.onerror && ea(c, function() {
//                     c._iO.onerror.apply(c, [a, b])
//                 })
//             }
//             ;
//             this._onbufferchange = function(a) {
//                 if (0 === c.playState || a && c.isBuffering || !a && !c.isBuffering)
//                     return !1;
//                 c.isBuffering = 1 === a;
//                 c._iO.onbufferchange && (e._wD(c.id + ": Buffer state change: " + a),
//                 c._iO.onbufferchange.apply(c, [a]));
//                 return !0
//             }
//             ;
//             this._onsuspend = function() {
//                 c._iO.onsuspend && (e._wD(c.id + ": Playback suspended"),
//                 c._iO.onsuspend.apply(c));
//                 return !0
//             }
//             ;
//             this._onfailure = function(a, b, d) {
//                 c.failures++;
//                 e._wD(c.id + ": Failure (" + c.failures + "): " + a);
//                 if (c._iO.onfailure && 1 === c.failures)
//                     c._iO.onfailure(a, b, d);
//                 else
//                     e._wD(c.id + ": Ignoring failure")
//             }
//             ;
//             this._onwarning = function(a, b, e) {
//                 if (c._iO.onwarning)
//                     c._iO.onwarning(a, b, e)
//             }
//             ;
//             this._onfinish = function() {
//                 var a = c._iO.onfinish;
//                 c._onbufferchange(0);
//                 c._resetOnPosition(0);
//                 c.instanceCount && (c.instanceCount--,
//                 c.instanceCount || (Xa(),
//                 c.playState = 0,
//                 c.paused = !1,
//                 c.instanceCount = 0,
//                 c.instanceOptions = {},
//                 c._iO = {},
//                 l(),
//                 c.isHTML5 && (c.position = 0)),
//                 c.instanceCount && !c._iO.multiShotEvents || !a || (e._wD(c.id + ": onfinish()"),
//                 ea(c, function() {
//                     a.apply(c)
//                 })))
//             }
//             ;
//             this._whileloading = function(a, b, e, d) {
//                 var f = c._iO;
//                 c.bytesLoaded = a;
//                 c.bytesTotal = b;
//                 c.duration = Math.floor(e);
//                 c.bufferLength = d;
//                 c.durationEstimate = c.isHTML5 || f.isMovieStar ? c.duration : f.duration ? c.duration > f.duration ? c.duration : f.duration : parseInt(c.bytesTotal / c.bytesLoaded * c.duration, 10);
//                 c.isHTML5 || (c.buffered = [{
//                     start: 0,
//                     end: c.duration
//                 }]);
//                 (3 !== c.readyState || c.isHTML5) && f.whileloading && f.whileloading.apply(c)
//             }
//             ;
//             this._whileplaying = function(a, e, d, f, q) {
//                 var g = c._iO;
//                 if (isNaN(a) || null === a)
//                     return !1;
//                 c.position = Math.max(0, a);
//                 c._processOnPosition();
//                 !c.isHTML5 && 8 < m && (g.usePeakData && e !== b && e && (c.peakData = {
//                     left: e.leftPeak,
//                     right: e.rightPeak
//                 }),
//                 g.useWaveformData && d !== b && d && (c.waveformData = {
//                     left: d.split(","),
//                     right: f.split(",")
//                 }),
//                 g.useEQData && q !== b && q && q.leftEQ && (a = q.leftEQ.split(","),
//                 c.eqData = a,
//                 c.eqData.left = a,
//                 q.rightEQ !== b && q.rightEQ && (c.eqData.right = q.rightEQ.split(","))));
//                 1 === c.playState && (c.isHTML5 || 8 !== m || c.position || !c.isBuffering || c._onbufferchange(0),
//                 g.whileplaying && g.whileplaying.apply(c));
//                 return !0
//             }
//             ;
//             this._oncaptiondata = function(a) {
//                 e._wD(c.id + ": Caption data received.");
//                 c.captiondata = a;
//                 c._iO.oncaptiondata && c._iO.oncaptiondata.apply(c, [a])
//             }
//             ;
//             this._onmetadata = function(a, b) {
//                 e._wD(c.id + ": Metadata received.");
//                 var d = {}, f, q;
//                 f = 0;
//                 for (q = a.length; f < q; f++)
//                     d[a[f]] = b[f];
//                 c.metadata = d;
//                 c._iO.onmetadata && c._iO.onmetadata.call(c, c.metadata)
//             }
//             ;
//             this._onid3 = function(a, b) {
//                 e._wD(c.id + ": ID3 data received.");
//                 var d = [], f, q;
//                 f = 0;
//                 for (q = a.length; f < q; f++)
//                     d[a[f]] = b[f];
//                 c.id3 = D(c.id3, d);
//                 c._iO.onid3 && c._iO.onid3.apply(c)
//             }
//             ;
//             this._onconnect = function(a) {
//                 a = 1 === a;
//                 e._wD(c.id + ": " + (a ? "Connected." : "Failed to connect? - " + c.url), a ? 1 : 2);
//                 if (c.connected = a)
//                     c.failures = 0,
//                     w(c.id) && (c.getAutoPlay() ? c.play(b, c.getAutoPlay()) : c._iO.autoLoad && c.load()),
//                     c._iO.onconnect && c._iO.onconnect.apply(c, [a])
//             }
//             ;
//             this._ondataerror = function(a) {
//                 0 < c.playState && (e._wD(c.id + ": Data error: " + a),
//                 c._iO.ondataerror && c._iO.ondataerror.apply(c))
//             }
//             ;
//             this._debug()
//         }
//         ;
//         ka = function() {
//             return p.body || p.getElementsByTagName("div")[0]
//         }
//         ;
//         H = function(a) {
//             return p.getElementById(a)
//         }
//         ;
//         D = function(a, d) {
//             var f = a || {}, c, g;
//             c = d === b ? e.defaultOptions : d;
//             for (g in c)
//                 try {
//                     c.hasOwnProperty(g) && f[g] === b && (f[g] = "object" !== typeof c[g] || null === c[g] ? c[g] : D(f[g], c[g]))
//                 } catch (h) {}
//             return f
//         }
//         ;
//         ea = function(b, d) {
//             b.isHTML5 || 8 !== m ? d() : a.setTimeout(d, 0)
//         }
//         ;
//         R = {
//             onready: 1,
//             ontimeout: 1,
//             defaultOptions: 1,
//             flash9Options: 1,
//             movieStarOptions: 1
//         };
//         Aa = function(a, d) {
//             var f, c = !0, g = d !== b, h = e.setupOptions;
//             if (a === b) {
//                 c = [];
//                 for (f in h)
//                     h.hasOwnProperty(f) && c.push(f);
//                 for (f in R)
//                     R.hasOwnProperty(f) && ("object" === typeof e[f] ? c.push(f + ": {...}") : e[f]instanceof Function ? c.push(f + ": function() {...}") : c.push(f));
//                 e._wD(t("setup", c.join(", ")));
//                 return !1
//             }
//             for (f in a)
//                 if (a.hasOwnProperty(f))
//                     if ("object" !== typeof a[f] || null === a[f] || a[f]instanceof Array || a[f]instanceof RegExp)
//                         g && R[d] !== b ? e[d][f] = a[f] : h[f] !== b ? (e.setupOptions[f] = a[f],
//                         e[f] = a[f]) : R[f] === b ? (L(t(e[f] === b ? "setupUndef" : "setupError", f), 2),
//                         c = !1) : e[f]instanceof Function ? e[f].apply(e, a[f]instanceof Array ? a[f] : [a[f]]) : e[f] = a[f];
//                     else if (R[f] === b)
//                         L(t(e[f] === b ? "setupUndef" : "setupError", f), 2),
//                         c = !1;
//                     else
//                         return Aa(a[f], f);
//             return c
//         }
//         ;
//         A = function() {
//             function b(a) {
//                 a = kb.call(a);
//                 var c = a.length;
//                 e ? (a[1] = "on" + a[1],
//                 3 < c && a.pop()) : 3 === c && a.push(!1);
//                 return a
//             }
//             function d(a, b) {
//                 var f = a.shift()
//                   , q = [c[b]];
//                 if (e)
//                     f[q](a[0], a[1]);
//                 else
//                     f[q].apply(f, a)
//             }
//             var e = a.attachEvent
//               , c = {
//                 add: e ? "attachEvent" : "addEventListener",
//                 remove: e ? "detachEvent" : "removeEventListener"
//             };
//             return {
//                 add: function() {
//                     d(b(arguments), "add")
//                 },
//                 remove: function() {
//                     d(b(arguments), "remove")
//                 }
//             }
//         }();
//         K = {
//             abort: l(function() {
//                 e._wD(this._s.id + ": abort")
//             }),
//             canplay: l(function() {
//                 var a = this._s, d;
//                 if (!a._html5_canplay) {
//                     a._html5_canplay = !0;
//                     e._wD(a.id + ": canplay");
//                     a._onbufferchange(0);
//                     d = a._iO.position === b || isNaN(a._iO.position) ? null : a._iO.position / 1E3;
//                     if (this.currentTime !== d) {
//                         e._wD(a.id + ": canplay: Setting position to " + d);
//                         try {
//                             this.currentTime = d
//                         } catch (f) {
//                             e._wD(a.id + ": canplay: Setting position of " + d + " failed: " + f.message, 2)
//                         }
//                     }
//                     a._iO._oncanplay && a._iO._oncanplay()
//                 }
//             }),
//             canplaythrough: l(function() {
//                 var a = this._s;
//                 a.loaded || (a._onbufferchange(0),
//                 a._whileloading(a.bytesLoaded, a.bytesTotal, a._get_html5_duration()),
//                 a._onload(!0))
//             }),
//             durationchange: l(function() {
//                 var a = this._s, b;
//                 b = a._get_html5_duration();
//                 isNaN(b) || b === a.duration || (e._wD(this._s.id + ": durationchange (" + b + ")" + (a.duration ? ", previously " + a.duration : "")),
//                 a.durationEstimate = a.duration = b)
//             }),
//             ended: l(function() {
//                 var a = this._s;
//                 e._wD(a.id + ": ended");
//                 a._onfinish()
//             }),
//             error: l(function() {
//                 var a = ib[this.error.code] || null;
//                 e._wD(this._s.id + ": HTML5 error, code " + this.error.code + (a ? " (" + a + ")" : ""));
//                 this._s._onload(!1);
//                 this._s._onerror(this.error.code, a)
//             }),
//             loadeddata: l(function() {
//                 var a = this._s;
//                 e._wD(a.id + ": loadeddata");
//                 a._loaded || sa || (a.duration = a._get_html5_duration())
//             }),
//             loadedmetadata: l(function() {
//                 e._wD(this._s.id + ": loadedmetadata")
//             }),
//             loadstart: l(function() {
//                 e._wD(this._s.id + ": loadstart");
//                 this._s._onbufferchange(1)
//             }),
//             play: l(function() {
//                 this._s._onbufferchange(0)
//             }),
//             playing: l(function() {
//                 e._wD(this._s.id + ": playing " + String.fromCharCode(9835));
//                 this._s._onbufferchange(0)
//             }),
//             progress: l(function(a) {
//                 var b = this._s, d, c, f;
//                 d = 0;
//                 var g = "progress" === a.type
//                   , h = a.target.buffered
//                   , k = a.loaded || 0
//                   , l = a.total || 1;
//                 b.buffered = [];
//                 if (h && h.length) {
//                     d = 0;
//                     for (c = h.length; d < c; d++)
//                         b.buffered.push({
//                             start: 1E3 * h.start(d),
//                             end: 1E3 * h.end(d)
//                         });
//                     d = 1E3 * (h.end(0) - h.start(0));
//                     k = Math.min(1, d / (1E3 * a.target.duration));
//                     if (g && 1 < h.length) {
//                         f = [];
//                         c = h.length;
//                         for (d = 0; d < c; d++)
//                             f.push(1E3 * a.target.buffered.start(d) + "-" + 1E3 * a.target.buffered.end(d));
//                         e._wD(this._s.id + ": progress, timeRanges: " + f.join(", "))
//                     }
//                     g && !isNaN(k) && e._wD(this._s.id + ": progress, " + Math.floor(100 * k) + "% loaded")
//                 }
//                 isNaN(k) || (b._whileloading(k, l, b._get_html5_duration()),
//                 k && l && k === l && K.canplaythrough.call(this, a))
//             }),
//             ratechange: l(function() {
//                 e._wD(this._s.id + ": ratechange")
//             }),
//             suspend: l(function(a) {
//                 var b = this._s;
//                 e._wD(this._s.id + ": suspend");
//                 K.progress.call(this, a);
//                 b._onsuspend()
//             }),
//             stalled: l(function() {
//                 e._wD(this._s.id + ": stalled")
//             }),
//             timeupdate: l(function() {
//                 this._s._onTimer()
//             }),
//             waiting: l(function() {
//                 var a = this._s;
//                 e._wD(this._s.id + ": waiting");
//                 a._onbufferchange(1)
//             })
//         };
//         qa = function(a) {
//             return a && (a.type || a.url || a.serverURL) ? a.serverURL || a.type && k(a.type) ? !1 : a.type ? da({
//                 type: a.type
//             }) : da({
//                 url: a.url
//             }) || e.html5Only || a.url.match(/data:/i) : !1
//         }
//         ;
//         ra = function(a) {
//             var d;
//             a && (d = sa ? "about:blank" : e.html5.canPlayType("audio/wav") ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==" : "about:blank",
//             a.src = d,
//             a._called_unload !== b && (a._called_load = !1));
//             E && (Ma = null);
//             return d
//         }
//         ;
//         da = function(a) {
//             if (!e.useHTML5Audio || !e.hasHTML5)
//                 return !1;
//             var d = a.url || null;
//             a = a.type || null;
//             var f = e.audioFormats, c;
//             if (a && e.html5[a] !== b)
//                 return e.html5[a] && !k(a);
//             if (!N) {
//                 N = [];
//                 for (c in f)
//                     f.hasOwnProperty(c) && (N.push(c),
//                     f[c].related && (N = N.concat(f[c].related)));
//                 N = new RegExp("\\.(" + N.join("|") + ")(\\?.*)?$","i")
//             }
//             (c = d ? d.toLowerCase().match(N) : null) && c.length ? c = c[1] : a && (d = a.indexOf(";"),
//             c = (-1 !== d ? a.substr(0, d) : a).substr(6));
//             c && e.html5[c] !== b ? d = e.html5[c] && !k(c) : (a = "audio/" + c,
//             d = e.html5.canPlayType({
//                 type: a
//             }),
//             d = (e.html5[c] = d) && e.html5[a] && !k(a));
//             return d
//         }
//         ;
//         jb = function() {
//             function a(b) {
//                 var c, f = c = !1;
//                 if (!d || "function" !== typeof d.canPlayType)
//                     return c;
//                 if (b instanceof Array) {
//                     k = 0;
//                     for (c = b.length; k < c; k++)
//                         if (e.html5[b[k]] || d.canPlayType(b[k]).match(e.html5Test))
//                             f = !0,
//                             e.html5[b[k]] = !0,
//                             e.flash[b[k]] = !!b[k].match(pb);
//                     c = f
//                 } else
//                     b = d && "function" === typeof d.canPlayType ? d.canPlayType(b) : !1,
//                     c = !(!b || !b.match(e.html5Test));
//                 return c
//             }
//             if (!e.useHTML5Audio || !e.hasHTML5)
//                 return u = e.html5.usingFlash = !0,
//                 !1;
//             var d = Audio !== b ? Sa && 10 > opera.version() ? new Audio(null) : new Audio : null, f, c, g = {}, h, k;
//             h = e.audioFormats;
//             for (f in h)
//                 if (h.hasOwnProperty(f) && (c = "audio/" + f,
//                 g[f] = a(h[f].type),
//                 g[c] = g[f],
//                 f.match(pb) ? (e.flash[f] = !0,
//                 e.flash[c] = !0) : (e.flash[f] = !1,
//                 e.flash[c] = !1),
//                 h[f] && h[f].related))
//                     for (k = h[f].related.length - 1; 0 <= k; k--)
//                         g["audio/" + h[f].related[k]] = g[f],
//                         e.html5[h[f].related[k]] = g[f],
//                         e.flash[h[f].related[k]] = g[f];
//             g.canPlayType = d ? a : null;
//             e.html5 = D(e.html5, g);
//             e.html5.usingFlash = hb();
//             u = e.html5.usingFlash;
//             return !0
//         }
//         ;
//         C = {
//             notReady: "Unavailable - wait until onready() has fired.",
//             notOK: "Audio support is not available.",
//             domError: "soundManagerexception caught while appending SWF to DOM.",
//             spcWmode: "Removing wmode, preventing known SWF loading issue(s)",
//             swf404: "soundManager: Verify that %s is a valid path.",
//             tryDebug: "Try soundManager.debugFlash = true for more security details (output goes to SWF.)",
//             checkSWF: "See SWF output for more debug info.",
//             localFail: "soundManager: Non-HTTP page (" + p.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
//             waitFocus: "soundManager: Special case: Waiting for SWF to load with window focus...",
//             waitForever: "soundManager: Waiting indefinitely for Flash (will recover if unblocked)...",
//             waitSWF: "soundManager: Waiting for 100% SWF load...",
//             needFunction: "soundManager: Function object expected for %s",
//             badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
//             currentObj: "soundManager: _debug(): Current sound objects",
//             waitOnload: "soundManager: Waiting for window.onload()",
//             docLoaded: "soundManager: Document already loaded",
//             onload: "soundManager: initComplete(): calling soundManager.onload()",
//             onloadOK: "soundManager.onload() complete",
//             didInit: "soundManager: init(): Already called?",
//             secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
//             badRemove: "soundManager: Failed to remove Flash node.",
//             shutdown: "soundManager.disable(): Shutting down",
//             queue: "soundManager: Queueing %s handler",
//             smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
//             fbTimeout: "No flash response, applying .swf_timedout CSS...",
//             fbLoaded: "Flash loaded",
//             fbHandler: "soundManager: flashBlockHandler()",
//             manURL: "SMSound.load(): Using manually-assigned URL",
//             onURL: "soundManager.load(): current URL already assigned.",
//             badFV: 'soundManager.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
//             as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
//             noNSLoop: "Note: Looping not implemented for MovieStar formats",
//             needfl9: "Note: Switching to flash 9, required for MP4 formats.",
//             mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
//             needFlash: "soundManager: Fatal error: Flash is needed to play some required formats, but is not available.",
//             gotFocus: "soundManager: Got window focus.",
//             policy: "Enabling usePolicyFile for data access",
//             setup: "soundManager.setup(): allowed parameters: %s",
//             setupError: 'soundManager.setup(): "%s" cannot be assigned with this method.',
//             setupUndef: 'soundManager.setup(): Could not find option "%s"',
//             setupLate: "soundManager.setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
//             noURL: "soundManager: Flash URL required. Call soundManager.setup({url:...}) to get started.",
//             sm2Loaded: "SoundManager 2: Ready. " + String.fromCharCode(10003),
//             reset: "soundManager.reset(): Removing event callbacks",
//             mobileUA: "Mobile UA detected, preferring HTML5 by default.",
//             globalHTML5: "Using singleton HTML5 Audio() pattern for this device.",
//             ignoreMobile: "Ignoring mobile restrictions for this device."
//         };
//         t = function() {
//             var a, b, d, c;
//             a = kb.call(arguments);
//             b = a.shift();
//             if ((c = C && C[b] ? C[b] : "") && a && a.length)
//                 for (b = 0,
//                 d = a.length; b < d; b++)
//                     c = c.replace("%s", a[b]);
//             return c
//         }
//         ;
//         ma = function(a) {
//             8 === m && 1 < a.loops && a.stream && (r("as2loop"),
//             a.stream = !1);
//             return a
//         }
//         ;
//         na = function(a, b) {
//             a && !a.usePolicyFile && (a.onid3 || a.usePeakData || a.useWaveformData || a.useEQData) && (e._wD((b || "") + t("policy")),
//             a.usePolicyFile = !0);
//             return a
//         }
//         ;
//         L = function(a) {
//             Ua && console.warn !== b ? console.warn(a) : e._wD(a)
//         }
//         ;
//         xa = function() {
//             return !1
//         }
//         ;
//         Ga = function(a) {
//             for (var b in a)
//                 a.hasOwnProperty(b) && "function" === typeof a[b] && (a[b] = xa)
//         }
//         ;
//         Ha = function(a) {
//             a === b && (a = !1);
//             (B || a) && e.disable(a)
//         }
//         ;
//         cb = function(a) {
//             var b = null;
//             if (a)
//                 if (a.match(/\.swf(\?.*)?$/i)) {
//                     if (b = a.substr(a.toLowerCase().lastIndexOf(".swf?") + 4))
//                         return a
//                 } else
//                     a.lastIndexOf("/") !== a.length - 1 && (a += "/");
//             a = (a && -1 !== a.lastIndexOf("/") ? a.substr(0, a.lastIndexOf("/") + 1) : "./") + e.movieURL;
//             e.noSWFCache && (a += "?ts=" + (new Date).getTime());
//             return a
//         }
//         ;
//         Da = function() {
//             m = parseInt(e.flashVersion, 10);
//             8 !== m && 9 !== m && (e._wD(t("badFV", m, 8)),
//             e.flashVersion = m = 8);
//             var a = e.debugMode || e.debugFlash ? "_debug.swf" : ".swf";
//             e.useHTML5Audio && !e.html5Only && e.audioFormats.mp4.required && 9 > m && (e._wD(t("needfl9")),
//             e.flashVersion = m = 9);
//             e.version = e.versionNumber + (e.html5Only ? " (HTML5-only mode)" : 9 === m ? " (AS3/Flash 9)" : " (AS2/Flash 8)");
//             8 < m ? (e.defaultOptions = D(e.defaultOptions, e.flash9Options),
//             e.features.buffering = !0,
//             e.defaultOptions = D(e.defaultOptions, e.movieStarOptions),
//             e.filePatterns.flash9 = new RegExp("\\.(mp3|" + rb.join("|") + ")(\\?.*)?$","i"),
//             e.features.movieStar = !0) : e.features.movieStar = !1;
//             e.filePattern = e.filePatterns[8 !== m ? "flash9" : "flash8"];
//             e.movieURL = (8 === m ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", a);
//             e.features.peakData = e.features.waveformData = e.features.eqData = 8 < m
//         }
//         ;
//         ab = function(a, b) {
//             n && n._setPolling(a, b)
//         }
//         ;
//         Fa = function() {
//             e.debugURLParam.test(ga) && (e.setupOptions.debugMode = e.debugMode = !0);
//             if (!H(e.debugID)) {
//                 var a, b, d, c;
//                 if (e.debugMode && !(H(e.debugID) || Ua && e.useConsole && e.consoleOnly)) {
//                     a = p.createElement("div");
//                     a.id = e.debugID + "-toggle";
//                     b = {
//                         position: "fixed",
//                         bottom: "0px",
//                         right: "0px",
//                         width: "1.2em",
//                         height: "1.2em",
//                         lineHeight: "1.2em",
//                         margin: "2px",
//                         textAlign: "center",
//                         border: "1px solid #999",
//                         cursor: "pointer",
//                         background: "#fff",
//                         color: "#333",
//                         zIndex: 10001
//                     };
//                     a.appendChild(p.createTextNode("-"));
//                     a.onclick = db;
//                     a.title = "Toggle SM2 debug console";
//                     v.match(/msie 6/i) && (a.style.position = "absolute",
//                     a.style.cursor = "hand");
//                     for (c in b)
//                         b.hasOwnProperty(c) && (a.style[c] = b[c]);
//                     b = p.createElement("div");
//                     b.id = e.debugID;
//                     b.style.display = e.debugMode ? "block" : "none";
//                     if (e.debugMode && !H(a.id)) {
//                         try {
//                             d = ka(),
//                             d.appendChild(a)
//                         } catch (f) {
//                             throw Error(t("domError") + " \n" + f.toString());
//                         }
//                         d.appendChild(b)
//                     }
//                 }
//             }
//         }
//         ;
//         w = this.getSoundById;
//         r = function(a, b) {
//             return a ? e._wD(t(a), b) : ""
//         }
//         ;
//         db = function() {
//             var a = H(e.debugID)
//               , b = H(e.debugID + "-toggle");
//             a && (za ? (b.innerHTML = "+",
//             a.style.display = "none") : (b.innerHTML = "-",
//             a.style.display = "block"),
//             za = !za)
//         }
//         ;
//         F = function(d, e, f) {
//             if (a.sm2Debugger !== b)
//                 try {
//                     sm2Debugger.handleEvent(d, e, f)
//                 } catch (c) {
//                     return !1
//                 }
//             return !0
//         }
//         ;
//         V = function() {
//             var a = [];
//             e.debugMode && a.push("sm2_debug");
//             e.debugFlash && a.push("flash_debug");
//             e.useHighPerformance && a.push("high_performance");
//             return a.join(" ")
//         }
//         ;
//         Ja = function() {
//             var a = t("fbHandler")
//               , b = e.getMoviePercent()
//               , d = {
//                 type: "FLASHBLOCK"
//             };
//             e.html5Only || (e.ok() ? (e.didFlashBlock && e._wD(a + ": Unblocked"),
//             e.oMC && (e.oMC.className = [V(), "movieContainer", "swf_loaded" + (e.didFlashBlock ? " swf_unblocked" : "")].join(" "))) : (u && (e.oMC.className = V() + " movieContainer " + (null === b ? "swf_timedout" : "swf_error"),
//             e._wD(a + ": " + t("fbTimeout") + (b ? " (" + t("fbLoaded") + ")" : ""))),
//             e.didFlashBlock = !0,
//             P({
//                 type: "ontimeout",
//                 ignoreInit: !0,
//                 error: d
//             }),
//             U(d)))
//         }
//         ;
//         Ba = function(a, d, e) {
//             J[a] === b && (J[a] = []);
//             J[a].push({
//                 method: d,
//                 scope: e || null,
//                 fired: !1
//             })
//         }
//         ;
//         P = function(a) {
//             a || (a = {
//                 type: e.ok() ? "onready" : "ontimeout"
//             });
//             if (!s && a && !a.ignoreInit || "ontimeout" === a.type && (e.ok() || B && !a.ignoreInit))
//                 return !1;
//             var b = {
//                 success: a && a.ignoreInit ? e.ok() : !B
//             }, d = a && a.type ? J[a.type] || [] : [], c = [], f, b = [b], g = u && !e.ok();
//             a.error && (b[0].error = a.error);
//             a = 0;
//             for (f = d.length; a < f; a++)
//                 !0 !== d[a].fired && c.push(d[a]);
//             if (c.length)
//                 for (a = 0,
//                 f = c.length; a < f; a++)
//                     c[a].scope ? c[a].method.apply(c[a].scope, b) : c[a].method.apply(this, b),
//                     g || (c[a].fired = !0);
//             return !0
//         }
//         ;
//         S = function() {
//             a.setTimeout(function() {
//                 e.useFlashBlock && Ja();
//                 P();
//                 "function" === typeof e.onload && (r("onload", 1),
//                 e.onload.apply(a),
//                 r("onloadOK", 1));
//                 e.waitForWindowLoad && A.add(a, "load", S)
//             }, 1)
//         }
//         ;
//         Na = function() {
//             if (I !== b)
//                 return I;
//             var d = !1, e = navigator, f, c = a.ActiveXObject, g;
//             try {
//                 g = e.plugins
//             } catch (h) {
//                 g = void 0
//             }
//             if (g && g.length)
//                 (e = e.mimeTypes) && e["application/x-shockwave-flash"] && e["application/x-shockwave-flash"].enabledPlugin && e["application/x-shockwave-flash"].enabledPlugin.description && (d = !0);
//             else if (c !== b && !v.match(/MSAppHost/i)) {
//                 try {
//                     f = new c("ShockwaveFlash.ShockwaveFlash")
//                 } catch (k) {
//                     f = null
//                 }
//                 d = !!f
//             }
//             return I = d
//         }
//         ;
//         hb = function() {
//             var a, b, d = e.audioFormats;
//             Qa && v.match(/os (1|2|3_0|3_1)\s/i) ? (e.hasHTML5 = !1,
//             e.html5Only = !0,
//             e.oMC && (e.oMC.style.display = "none")) : e.useHTML5Audio && (e.html5 && e.html5.canPlayType || (e._wD("SoundManager: No HTML5 Audio() support detected."),
//             e.hasHTML5 = !1),
//             Ta && e._wD("soundManager: Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " + (I ? "will use flash fallback for MP3/MP4, if available" : " would use flash fallback for MP3/MP4, but none detected."), 1));
//             if (e.useHTML5Audio && e.hasHTML5)
//                 for (b in ca = !0,
//                 d)
//                     d.hasOwnProperty(b) && d[b].required && (e.html5.canPlayType(d[b].type) ? e.preferFlash && (e.flash[b] || e.flash[d[b].type]) && (a = !0) : (ca = !1,
//                     a = !0));
//             e.ignoreFlash && (a = !1,
//             ca = !0);
//             e.html5Only = e.hasHTML5 && e.useHTML5Audio && !a;
//             return !e.html5Only
//         }
//         ;
//         pa = function(a) {
//             var b, d, c = 0;
//             if (a instanceof Array) {
//                 b = 0;
//                 for (d = a.length; b < d; b++)
//                     if (a[b]instanceof Object) {
//                         if (e.canPlayMIME(a[b].type)) {
//                             c = b;
//                             break
//                         }
//                     } else if (e.canPlayURL(a[b])) {
//                         c = b;
//                         break
//                     }
//                 a[c].url && (a[c] = a[c].url);
//                 a = a[c]
//             }
//             return a
//         }
//         ;
//         eb = function(a) {
//             a._hasTimer || (a._hasTimer = !0,
//             !ta && e.html5PollingInterval && (null === ba && 0 === oa && (ba = setInterval(gb, e.html5PollingInterval)),
//             oa++))
//         }
//         ;
//         fb = function(a) {
//             a._hasTimer && (a._hasTimer = !1,
//             !ta && e.html5PollingInterval && oa--)
//         }
//         ;
//         gb = function() {
//             var a;
//             if (null === ba || oa)
//                 for (a = e.soundIDs.length - 1; 0 <= a; a--)
//                     e.sounds[e.soundIDs[a]].isHTML5 && e.sounds[e.soundIDs[a]]._hasTimer && e.sounds[e.soundIDs[a]]._onTimer();
//             else
//                 clearInterval(ba),
//                 ba = null
//         }
//         ;
//         U = function(d) {
//             d = d !== b ? d : {};
//             "function" === typeof e.onerror && e.onerror.apply(a, [{
//                 type: d.type !== b ? d.type : null
//             }]);
//             d.fatal !== b && d.fatal && e.disable()
//         }
//         ;
//         lb = function() {
//             if (Ta && Na()) {
//                 var a = e.audioFormats, b, d;
//                 for (d in a)
//                     if (a.hasOwnProperty(d) && ("mp3" === d || "mp4" === d) && (e._wD("soundManager: Using flash fallback for " + d + " format"),
//                     e.html5[d] = !1,
//                     a[d] && a[d].related))
//                         for (b = a[d].related.length - 1; 0 <= b; b--)
//                             e.html5[a[d].related[b]] = !1
//             }
//         }
//         ;
//         this._setSandboxType = function(a) {
//             var d = e.sandbox;
//             d.type = a;
//             d.description = d.types[d.types[a] !== b ? a : "unknown"];
//             "localWithFile" === d.type ? (d.noRemote = !0,
//             d.noLocal = !1,
//             r("secNote", 2)) : "localWithNetwork" === d.type ? (d.noRemote = !1,
//             d.noLocal = !0) : "localTrusted" === d.type && (d.noRemote = !1,
//             d.noLocal = !1)
//         }
//         ;
//         this._externalInterfaceOK = function(a) {
//             if (!e.swfLoaded) {
//                 var b;
//                 F("swf", !0);
//                 F("flashtojs", !0);
//                 e.swfLoaded = !0;
//                 ua = !1;
//                 Ta && lb();
//                 a && a.replace(/\+dev/i, "") === e.versionNumber.replace(/\+dev/i, "") ? setTimeout(ya, O ? 100 : 1) : (b = 'soundManager: Fatal: JavaScript file build "' + e.versionNumber + '" does not match Flash SWF build "' + a + '" at ' + e.url + ". Ensure both are up-to-date.",
//                 setTimeout(function() {
//                     throw Error(b);
//                 }, 0))
//             }
//         }
//         ;
//         la = function(a, d) {
//             function f() {
//                 var a = [], b, c = [];
//                 b = "SoundManager " + e.version + (!e.html5Only && e.useHTML5Audio ? e.hasHTML5 ? " + HTML5 audio" : ", no HTML5 audio support" : "");
//                 e.html5Only ? e.html5PollingInterval && a.push("html5PollingInterval (" + e.html5PollingInterval + "ms)") : (e.preferFlash && a.push("preferFlash"),
//                 e.useHighPerformance && a.push("useHighPerformance"),
//                 e.flashPollingInterval && a.push("flashPollingInterval (" + e.flashPollingInterval + "ms)"),
//                 e.html5PollingInterval && a.push("html5PollingInterval (" + e.html5PollingInterval + "ms)"),
//                 e.wmode && a.push("wmode (" + e.wmode + ")"),
//                 e.debugFlash && a.push("debugFlash"),
//                 e.useFlashBlock && a.push("flashBlock"));
//                 a.length && (c = c.concat([a.join(" + ")]));
//                 e._wD(b + (c.length ? " + " + c.join(", ") : ""), 1);
//                 mb()
//             }
//             function c(a, b) {
//                 return '<param name="' + a + '" value="' + b + '" />'
//             }
//             if (W && X)
//                 return !1;
//             if (e.html5Only)
//                 return Da(),
//                 f(),
//                 e.oMC = H(e.movieID),
//                 ya(),
//                 X = W = !0,
//                 !1;
//             var g = d || e.url, h = e.altURL || g, k = ka(), l = V(), n = null, n = p.getElementsByTagName("html")[0], m, r, s, n = n && n.dir && n.dir.match(/rtl/i);
//             a = a === b ? e.id : a;
//             Da();
//             e.url = cb(fa ? g : h);
//             d = e.url;
//             e.wmode = !e.wmode && e.useHighPerformance ? "transparent" : e.wmode;
//             null !== e.wmode && (v.match(/msie 8/i) || !O && !e.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (M.push(C.spcWmode),
//             e.wmode = null);
//             k = {
//                 name: a,
//                 id: a,
//                 src: d,
//                 quality: "high",
//                 allowScriptAccess: e.allowScriptAccess,
//                 bgcolor: e.bgColor,
//                 pluginspage: vb + "www.macromedia.com/go/getflashplayer",
//                 title: "JS/Flash audio component (SoundManager 2)",
//                 type: "application/x-shockwave-flash",
//                 wmode: e.wmode,
//                 hasPriority: "true"
//             };
//             e.debugFlash && (k.FlashVars = "debug=1");
//             e.wmode || delete k.wmode;
//             if (O)
//                 g = p.createElement("div"),
//                 r = ['<object id="' + a + '" data="' + d + '" type="' + k.type + '" title="' + k.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', c("movie", d), c("AllowScriptAccess", e.allowScriptAccess), c("quality", k.quality), e.wmode ? c("wmode", e.wmode) : "", c("bgcolor", e.bgColor), c("hasPriority", "true"), e.debugFlash ? c("FlashVars", k.FlashVars) : "", "</object>"].join("");
//             else
//                 for (m in g = p.createElement("embed"),
//                 k)
//                     k.hasOwnProperty(m) && g.setAttribute(m, k[m]);
//             Fa();
//             l = V();
//             if (k = ka())
//                 if (e.oMC = H(e.movieID) || p.createElement("div"),
//                 e.oMC.id)
//                     s = e.oMC.className,
//                     e.oMC.className = (s ? s + " " : "movieContainer") + (l ? " " + l : ""),
//                     e.oMC.appendChild(g),
//                     O && (m = e.oMC.appendChild(p.createElement("div")),
//                     m.className = "sm2-object-box",
//                     m.innerHTML = r),
//                     X = !0;
//                 else {
//                     e.oMC.id = e.movieID;
//                     e.oMC.className = "movieContainer " + l;
//                     m = l = null;
//                     e.useFlashBlock || (e.useHighPerformance ? l = {
//                         position: "fixed",
//                         width: "8px",
//                         height: "8px",
//                         bottom: "0px",
//                         left: "0px",
//                         overflow: "hidden"
//                     } : (l = {
//                         position: "absolute",
//                         width: "6px",
//                         height: "6px",
//                         top: "-9999px",
//                         left: "-9999px"
//                     },
//                     n && (l.left = Math.abs(parseInt(l.left, 10)) + "px")));
//                     ub && (e.oMC.style.zIndex = 1E4);
//                     if (!e.debugFlash)
//                         for (s in l)
//                             l.hasOwnProperty(s) && (e.oMC.style[s] = l[s]);
//                     try {
//                         O || e.oMC.appendChild(g),
//                         k.appendChild(e.oMC),
//                         O && (m = e.oMC.appendChild(p.createElement("div")),
//                         m.className = "sm2-object-box",
//                         m.innerHTML = r),
//                         X = !0
//                     } catch (u) {
//                         throw Error(t("domError") + " \n" + u.toString());
//                     }
//                 }
//             W = !0;
//             f();
//             return !0
//         }
//         ;
//         ja = function() {
//             if (e.html5Only)
//                 return la(),
//                 !1;
//             if (n)
//                 return !1;
//             if (!e.url)
//                 return r("noURL"),
//                 !1;
//             n = e.getMovie(e.id);
//             n || ($ ? (O ? e.oMC.innerHTML = Ia : e.oMC.appendChild($),
//             $ = null,
//             W = !0) : la(e.id, e.url),
//             n = e.getMovie(e.id));
//             "function" === typeof e.oninitmovie && setTimeout(e.oninitmovie, 1);
//             Oa();
//             return !0
//         }
//         ;
//         T = function() {
//             setTimeout($a, 1E3)
//         }
//         ;
//         Ca = function() {
//             a.setTimeout(function() {
//                 L("soundManager: useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...");
//                 e.setup({
//                     preferFlash: !1
//                 }).reboot();
//                 e.didFlashBlock = !0;
//                 e.beginDelayedInit()
//             }, 1)
//         }
//         ;
//         $a = function() {
//             var b, d = !1;
//             e.url && !aa && (aa = !0,
//             A.remove(a, "load", T),
//             I && ua && !Va ? r("waitFocus") : (s || (b = e.getMoviePercent(),
//             0 < b && 100 > b && (d = !0)),
//             setTimeout(function() {
//                 b = e.getMoviePercent();
//                 d ? (aa = !1,
//                 e._wD(t("waitSWF")),
//                 a.setTimeout(T, 1)) : (s || (e._wD("soundManager: No Flash response within expected time. Likely causes: " + (0 === b ? "SWF load failed, " : "") + "Flash blocked or JS-Flash security error." + (e.debugFlash ? " " + t("checkSWF") : ""), 2),
//                 !fa && b && (r("localFail", 2),
//                 e.debugFlash || r("tryDebug", 2)),
//                 0 === b && e._wD(t("swf404", e.url), 1),
//                 F("flashtojs", !1, ": Timed out" + (fa ? " (Check flash security or flash blockers)" : " (No plugin/missing SWF?)"))),
//                 !s && ob && (null === b ? e.useFlashBlock || 0 === e.flashLoadTimeout ? (e.useFlashBlock && Ja(),
//                 r("waitForever")) : !e.useFlashBlock && ca ? Ca() : (r("waitForever"),
//                 P({
//                     type: "ontimeout",
//                     ignoreInit: !0,
//                     error: {
//                         type: "INIT_FLASHBLOCK"
//                     }
//                 })) : 0 === e.flashLoadTimeout ? r("waitForever") : !e.useFlashBlock && ca ? Ca() : Ha(!0)))
//             }, e.flashLoadTimeout)))
//         }
//         ;
//         ia = function() {
//             if (Va || !ua)
//                 return A.remove(a, "focus", ia),
//                 !0;
//             Va = ob = !0;
//             r("gotFocus");
//             aa = !1;
//             T();
//             A.remove(a, "focus", ia);
//             return !0
//         }
//         ;
//         Oa = function() {
//             M.length && (e._wD("SoundManager 2: " + M.join(" "), 1),
//             M = [])
//         }
//         ;
//         mb = function() {
//             Oa();
//             var a, b = [];
//             if (e.useHTML5Audio && e.hasHTML5) {
//                 for (a in e.audioFormats)
//                     e.audioFormats.hasOwnProperty(a) && b.push(a + " = " + e.html5[a] + (!e.html5[a] && u && e.flash[a] ? " (using flash)" : e.preferFlash && e.flash[a] && u ? " (preferring flash)" : e.html5[a] ? "" : " (" + (e.audioFormats[a].required ? "required, " : "") + "and no flash support)"));
//                 e._wD("SoundManager 2 HTML5 support: " + b.join(", "), 1)
//             }
//         }
//         ;
//         Y = function(b) {
//             if (s)
//                 return !1;
//             if (e.html5Only)
//                 return r("sm2Loaded", 1),
//                 s = !0,
//                 S(),
//                 F("onload", !0),
//                 !0;
//             var d = !0, f;
//             e.useFlashBlock && e.flashLoadTimeout && !e.getMoviePercent() || (s = !0);
//             f = {
//                 type: !I && u ? "NO_FLASH" : "INIT_TIMEOUT"
//             };
//             e._wD("SoundManager 2 " + (B ? "failed to load" : "loaded") + " (" + (B ? "Flash security/load error" : "OK") + ") " + String.fromCharCode(B ? 10006 : 10003), B ? 2 : 1);
//             B || b ? (e.useFlashBlock && e.oMC && (e.oMC.className = V() + " " + (null === e.getMoviePercent() ? "swf_timedout" : "swf_error")),
//             P({
//                 type: "ontimeout",
//                 error: f,
//                 ignoreInit: !0
//             }),
//             F("onload", !1),
//             U(f),
//             d = !1) : F("onload", !0);
//             B || (e.waitForWindowLoad && !ha ? (r("waitOnload"),
//             A.add(a, "load", S)) : (e.waitForWindowLoad && ha && r("docLoaded"),
//             S()));
//             return d
//         }
//         ;
//         Za = function() {
//             var a, d = e.setupOptions;
//             for (a in d)
//                 d.hasOwnProperty(a) && (e[a] === b ? e[a] = d[a] : e[a] !== d[a] && (e.setupOptions[a] = e[a]))
//         }
//         ;
//         ya = function() {
//             if (s)
//                 return r("didInit"),
//                 !1;
//             if (e.html5Only)
//                 return s || (A.remove(a, "load", e.beginDelayedInit),
//                 e.enabled = !0,
//                 Y()),
//                 !0;
//             ja();
//             try {
//                 n._externalInterfaceTest(!1),
//                 ab(!0, e.flashPollingInterval || (e.useHighPerformance ? 10 : 50)),
//                 e.debugMode || n._disableDebug(),
//                 e.enabled = !0,
//                 F("jstoflash", !0),
//                 e.html5Only || A.add(a, "unload", xa)
//             } catch (b) {
//                 return e._wD("js/flash exception: " + b.toString()),
//                 F("jstoflash", !1),
//                 U({
//                     type: "JS_TO_FLASH_EXCEPTION",
//                     fatal: !0
//                 }),
//                 Ha(!0),
//                 Y(),
//                 !1
//             }
//             Y();
//             A.remove(a, "load", e.beginDelayedInit);
//             return !0
//         }
//         ;
//         Q = function() {
//             if (Z)
//                 return !1;
//             Z = !0;
//             Za();
//             Fa();
//             !I && e.hasHTML5 && (e._wD("SoundManager 2: No Flash detected" + (e.useHTML5Audio ? ". Trying HTML5-only mode." : ", enabling HTML5."), 1),
//             e.setup({
//                 useHTML5Audio: !0,
//                 preferFlash: !1
//             }));
//             jb();
//             !I && u && (M.push(C.needFlash),
//             e.setup({
//                 flashLoadTimeout: 1
//             }));
//             p.removeEventListener && p.removeEventListener("DOMContentLoaded", Q, !1);
//             ja();
//             return !0
//         }
//         ;
//         La = function() {
//             "complete" === p.readyState && (Q(),
//             p.detachEvent("onreadystatechange", La));
//             return !0
//         }
//         ;
//         Ea = function() {
//             ha = !0;
//             Q();
//             A.remove(a, "load", Ea)
//         }
//         ;
//         Na();
//         A.add(a, "focus", ia);
//         A.add(a, "load", T);
//         A.add(a, "load", Ea);
//         p.addEventListener ? p.addEventListener("DOMContentLoaded", Q, !1) : p.attachEvent ? p.attachEvent("onreadystatechange", La) : (F("onload", !1),
//         U({
//             type: "NO_DOM2_EVENTS",
//             fatal: !0
//         }))
//     }
//     if (!a || !a.document)
//         throw Error("SoundManager requires a browser with window and document objects.");
//     var f = null;
//     a.SM2_DEFER !== b && SM2_DEFER || (f = new d);
//     "object" === typeof module && module && "object" === typeof module.exports ? (module.exports.SoundManager = d,
//     module.exports.soundManager = f) : "function" === typeof define && define.amd && define(function() {
//         return {
//             constructor: d,
//             getInstance: function(b) {
//                 !a.soundManager && b instanceof Function && (b = b(d),
//                 b instanceof d && (a.soundManager = b));
//                 return a.soundManager
//             }
//         }
//     });
//     a.SoundManager = d;
//     a.soundManager = f
// }
// )(window);
// soundManager.url = "lib/soundmanager2/";
// soundManager.flashVersion = 9;
// soundManager.useHighPerformance = !0;
// soundManager.useFastPolling = !0;
// soundManager.autoLoad = !0;
// soundManager.debugMode = !1;
// soundManager.preferFlash = !1;
// soundManager.onready(function() {});
// soundManager.ontimeout(function() {});
var c123 = c123 || {};
c123.colors = {
    fieryrose: "#ff5470",
    sizzlingsunrise: "#ffdb00",
    heatwave: "#ff7a00",
    lemonglacier: "#fdff00",
    springfrost: "#87ff2a",
    absolutezero: "#0048ba",
    wintersky: "#ff007c",
    frostbite: "#e936a7",
    almond: "#efdecd",
    antiquebrass: "#cd9575",
    apricot: "#fdd9b5",
    aquamarine: "#78dbe2",
    asparagus: "#87a96b",
    atomictangerine: "#ffa474",
    bananamania: "#fae7b5",
    beaver: "#9f8170",
    bittersweet: "#fd7c6e",
    blizzardblue: "#ace5ee",
    blue: "#1f75fe",
    bluebell: "#a2a2d0",
    bluegray: "#6699cc",
    bluegreen: "#0d98ba",
    blueviolet: "#7366bd",
    blush: "#de5d83",
    brickred: "#cb4154",
    brown: "#b4674d",
    burntorange: "#ff7f49",
    burntsienna: "#ea7e5d",
    cadetblue: "#b0b7c6",
    canary: "#ffff99",
    caribbeangreen: "#00cc99",
    carnationpink: "#ffaacc",
    cerise: "#dd4492",
    cerulean: "#1dacd6",
    chestnut: "#bc5d58",
    copper: "#dd9475",
    cornflower: "#9aceeb",
    cottoncandy: "#ffbcd9",
    dandelion: "#fddb6d",
    denim: "#2b6cc4",
    desertsand: "#efcdb8",
    eggplant: "#6e5160",
    electriclime: "#ceff1d",
    fern: "#71bc78",
    forestgreen: "#6dae81",
    fuchsia: "#c364c5",
    fuzzywuzzy: "#cc6666",
    gold: "#e7c697",
    goldenrod: "#fcd975",
    grannysmithapple: "#a8e4a0",
    gray: "#95918c",
    green: "#1cac78",
    greenblue: "#1164b4",
    greenyellow: "#f0e891",
    hotmagenta: "#ff1dce",
    inchworm: "#b2ec5d",
    indigo: "#5d76cb",
    jazzberryjam: "#ca3767",
    junglegreen: "#3bb08f",
    laserlemon: "#fefe22",
    lavender: "#fcb4d5",
    lemonyellow: "#fff44f",
    macaroniandcheese: "#ffbd88",
    magenta: "#f664af",
    magicmint: "#aaf0d1",
    mahogany: "#cd4a4c",
    maize: "#edd19c",
    manatee: "#979aaa",
    mangotango: "#ff8243",
    maroon: "#c8385a",
    mauvelous: "#ef98aa",
    melon: "#fdbcb4",
    midnightblue: "#1a4876",
    mountainmeadow: "#30ba8f",
    mulberry: "#c54b8c",
    navyblue: "#1974d2",
    neoncarrot: "#ffa343",
    olivegreen: "#bab86c",
    orange: "#ff7538",
    orangered: "#ff2b2b",
    orangeyellow: "#f8d568",
    orchid: "#e6a8d7",
    outerspace: "#414a4c",
    outrageousorange: "#ff6e4a",
    pacificblue: "#1ca9c9",
    peach: "#ffcfab",
    periwinkle: "#c5d0e6",
    piggypink: "#fddde6",
    pinegreen: "#158078",
    pinkflamingo: "#fc74fd",
    pinksherbert: "#f78fa7",
    plum: "#8e4585",
    purple: "#926eae",
    purpleheart: "#7442c8",
    purplemountainsmajesty: "#9d81ba",
    purplepizzazz: "#fe4eda",
    radicalred: "#ff496c",
    rawsienna: "#d68a59",
    rawumber: "#714b23",
    razzledazzlerose: "#ff48d0",
    razzmatazz: "#e3256b",
    red: "#ee204d",
    redorange: "#ff5349",
    redviolet: "#c0448f",
    robinseggblue: "#1fcecb",
    royalpurple: "#7851a9",
    salmon: "#ff9baa",
    scarlet: "#fc2847",
    screamingreen: "#76ff7a",
    seagreen: "#93dfb8",
    sepia: "#a5694f",
    shadow: "#8a795d",
    shamrock: "#45cea2",
    shockingpink: "#fb7efd",
    silver: "#cdc5c2",
    skyblue: "#80daeb",
    springgreen: "#eceabe",
    sunglow: "#ffcf48",
    sunsetorange: "#fd5e53",
    tan: "#faa76c",
    tealblue: "#18a7b5",
    thistle: "#ebc7df",
    ticklemepink: "#fc89ac",
    timberwolf: "#dbd7d2",
    tropicalrainforest: "#17806d",
    tumbleweed: "#deaa88",
    turquoiseblue: "#77dde7",
    unmellowyellow: "#ffff66",
    violet: "#926eae",
    violetblue: "#324ab2",
    violetred: "#f75394",
    vividtangerine: "#ffa089",
    vividviolet: "#8f509d",
    white: "#ffffff",
    wildblueyonder: "#a2add0",
    wildstrawberry: "#ff43a4",
    wildwatermelon: "#fc6c85",
    wisteria: "#cda4de",
    yellow: "#fce883",
    yellowgreen: "#c5e384",
    yelloworange: "#ffae42",
    alienarmpit: "#84de02",
    bigfootfeet: "#e88e5a",
    boogerbuster: "#dde26a",
    dingydungeon: "#c53151",
    gargoylegas: "#ffdf46",
    giantsclub: "#b05c52",
    magicpotion: "#ff4466",
    mummystomb: "#828e84",
    ogreodor: "#fd5240",
    pixiepowder: "#391285",
    princessperfume: "#ff85cf",
    sasquatchsocks: "#ff4681",
    seaserpent: "#4bc7cf",
    smashedpumpkin: "#ff6d3a",
    sunburntcyclops: "#ff404c",
    winterwizard: "#a0e6ff",
    alloyorange: "#c46210",
    bdazzledblue: "#2e5894",
    bigdiporuby: "#9c2542",
    bittersweetshimmer: "#bf4f51",
    blastoffbronze: "#a57164",
    cybergrape: "#58427c",
    deepspacesparkle: "#4a646c",
    goldfusion: "#85754e",
    illuminatingemerald: "#319177",
    metallicseaweed: "#0a7e8c",
    metallicsunburst: "#9c7c38",
    razzmicberry: "#8d4e85",
    sheengreen: "#8fd400",
    shimmeringblush: "#d98695",
    sonicsilver: "#757575",
    steelblue: "#0081ab",
    aqua: "#5fbed7",
    blackcoral: "#54626f",
    caribbeangreen: "#6ada8e",
    pearl: "#f5f5f5",
    keylime: "#e8f48c",
    mandarin: "#f37a48",
    midnight: "#702670",
    mystic: "#d65282",
    oceanblue: "#4f42b5",
    oceangreen: "#48bf91",
    orchid: "#7b4259",
    rose: "#f03865",
    salmon: "#f1444a",
    sunny: "#f2f27a",
    sunset: "#f1cc79",
    turquoise: "#3bbcd0",
    amethyst: "#64609a",
    citrine: "#933709",
    emerald: "#14a989",
    jade: "#469a84",
    jasper: "#d05340",
    lapislazuli: "#436cb9",
    malachite: "#469496",
    moonstone: "#3aa8c1",
    onyx: "#353839",
    peridot: "#abad48",
    pinkpearl: "#b07080",
    rosequartz: "#bd559c",
    ruby: "#aa4069",
    sapphire: "#2d5da1",
    smokeytopaz: "#832a0d",
    tigerseye: "#b56917",
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
    clear: "rgba(0,0,0,0)",
    bitsboxyellow: "#fec111",
    lightpurple: "#c8b6d6",
    burgundy: "#900020"
};
c123 = c123 || {};
c123.googleFontsNames = "ABeeZee;Abel;Abhaya Libre;Abril Fatface;Aclonica;Acme;Actor;Adamina;Advent Pro;Aguafina Script;Akronim;Aladin;Alata;Alatsi;Aldrich;Alef;Alegreya;Alegreya SC;Alegreya Sans;Alegreya Sans SC;Aleo;Alex Brush;Alfa Slab One;Alice;Alike;Alike Angular;Allan;Allerta;Allerta Stencil;Allura;Almarai;Almendra;Almendra Display;Almendra SC;Amarante;Amaranth;Amatic SC;Amethysta;Amiko;Amiri;Amita;Anaheim;Andada;Andika;Angkor;Annie Use Your Telescope;Anonymous Pro;Antic;Antic Didone;Antic Slab;Anton;Arapey;Arbutus;Arbutus Slab;Architects Daughter;Archivo;Archivo Black;Archivo Narrow;Aref Ruqaa;Arima Madurai;Arimo;Arizonia;Armata;Arsenal;Artifika;Arvo;Arya;Asap;Asap Condensed;Asar;Asset;Assistant;Astloch;Asul;Athiti;Atma;Atomic Age;Aubrey;Audiowide;Autour One;Average;Average Sans;Averia Gruesa Libre;Averia Libre;Averia Sans Libre;Averia Serif Libre;B612;B612 Mono;Bad Script;Bahiana;Bahianita;Bai Jamjuree;Baloo;Baloo Bhai;Baloo Bhaijaan;Baloo Bhaina;Baloo Chettan;Baloo Da;Baloo Paaji;Baloo Tamma;Baloo Tammudu;Baloo Thambi;Balthazar;Bangers;Barlow;Barlow Condensed;Barlow Semi Condensed;Barriecito;Barrio;Basic;Baskervville;Battambang;Baumans;Bayon;Be Vietnam;Bebas Neue;Belgrano;Bellefair;Belleza;BenchNine;Bentham;Berkshire Swash;Beth Ellen;Bevan;Big Shoulders Display;Big Shoulders Text;Bigelow Rules;Bigshot One;Bilbo;Bilbo Swash Caps;BioRhyme;BioRhyme Expanded;Biryani;Bitter;Black And White Picture;Black Han Sans;Black Ops One;Blinker;Bokor;Bonbon;Boogaloo;Bowlby One;Bowlby One SC;Brawler;Bree Serif;Bubblegum Sans;Bubbler One;Buda;Buenard;Bungee;Bungee Hairline;Bungee Inline;Bungee Outline;Bungee Shade;Butcherman;Butterfly Kids;Cabin;Cabin Condensed;Cabin Sketch;Caesar Dressing;Cagliostro;Cairo;Calistoga;Calligraffitti;Cambay;Cambo;Candal;Cantarell;Cantata One;Cantora One;Capriola;Cardo;Carme;Carrois Gothic;Carrois Gothic SC;Carter One;Catamaran;Caudex;Caveat;Caveat Brush;Cedarville Cursive;Ceviche One;Chakra Petch;Changa;Changa One;Chango;Charm;Charmonman;Chathura;Chau Philomene One;Chela One;Chelsea Market;Chenla;Cherry Cream Soda;Cherry Swash;Chewy;Chicle;Chilanka;Chivo;Chonburi;Cinzel;Cinzel Decorative;Clicker Script;Coda;Coda Caption;Codystar;Coiny;Combo;Comfortaa;Coming Soon;Concert One;Condiment;Content;Contrail One;Convergence;Cookie;Copse;Corben;Cormorant;Cormorant Garamond;Cormorant Infant;Cormorant SC;Cormorant Unicase;Cormorant Upright;Courgette;Courier Prime;Cousine;Coustard;Covered By Your Grace;Crafty Girls;Creepster;Crete Round;Crimson Pro;Crimson Text;Croissant One;Crushed;Cuprum;Cute Font;Cutive;Cutive Mono;DM Sans;DM Serif Display;DM Serif Text;Damion;Dancing Script;Dangrek;Darker Grotesque;David Libre;Dawning of a New Day;Days One;Dekko;Delius;Delius Swash Caps;Delius Unicase;Della Respira;Denk One;Devonshire;Dhurjati;Didact Gothic;Diplomata;Diplomata SC;Do Hyeon;Dokdo;Domine;Donegal One;Doppio One;Dorsa;Dosis;Dr Sugiyama;Duru Sans;Dynalight;EB Garamond;Eagle Lake;East Sea Dokdo;Eater;Economica;Eczar;El Messiri;Electrolize;Elsie;Elsie Swash Caps;Emblema One;Emilys Candy;Encode Sans;Encode Sans Condensed;Encode Sans Expanded;Encode Sans Semi Condensed;Encode Sans Semi Expanded;Engagement;Englebert;Enriqueta;Erica One;Esteban;Euphoria Script;Ewert;Exo;Exo 2;Expletus Sans;Fahkwang;Fanwood Text;Farro;Farsan;Fascinate;Fascinate Inline;Faster One;Fasthand;Fauna One;Faustina;Federant;Federo;Felipa;Fenix;Finger Paint;Fira Code;Fira Mono;Fira Sans;Fira Sans Condensed;Fira Sans Extra Condensed;Fjalla One;Fjord One;Flamenco;Flavors;Fondamento;Fontdiner Swanky;Forum;Francois One;Frank Ruhl Libre;Freckle Face;Fredericka the Great;Fredoka One;Freehand;Fresca;Frijole;Fruktur;Fugaz One;GFS Didot;GFS Neohellenic;Gabriela;Gaegu;Gafata;Galada;Galdeano;Galindo;Gamja Flower;Gayathri;Gelasio;Gentium Basic;Gentium Book Basic;Geo;Geostar;Geostar Fill;Germania One;Gidugu;Gilda Display;Girassol;Give You Glory;Glass Antiqua;Glegoo;Gloria Hallelujah;Goblin One;Gochi Hand;Gorditas;Gothic A1;Goudy Bookletter 1911;Graduate;Grand Hotel;Gravitas One;Great Vibes;Grenze;Griffy;Gruppo;Gudea;Gugi;Gupter;Gurajada;Habibi;Halant;Hammersmith One;Hanalei;Hanalei Fill;Handlee;Hanuman;Happy Monkey;Harmattan;Headland One;Heebo;Henny Penny;Hepta Slab;Herr Von Muellerhoff;Hi Melody;Hind;Hind Guntur;Hind Madurai;Hind Siliguri;Hind Vadodara;Holtwood One SC;Homemade Apple;Homenaje;IBM Plex Mono;IBM Plex Sans;IBM Plex Sans Condensed;IBM Plex Serif;IM Fell DW Pica;IM Fell DW Pica SC;IM Fell Double Pica;IM Fell Double Pica SC;IM Fell English;IM Fell English SC;IM Fell French Canon;IM Fell French Canon SC;IM Fell Great Primer;IM Fell Great Primer SC;Ibarra Real Nova;Iceberg;Iceland;Imprima;Inconsolata;Inder;Indie Flower;Inika;Inknut Antiqua;Inria Serif;Irish Grover;Istok Web;Italiana;Italianno;Itim;Jacques Francois;Jacques Francois Shadow;Jaldi;Jim Nightshade;Jockey One;Jolly Lodger;Jomhuria;Jomolhari;Josefin Sans;Josefin Slab;Joti One;Jua;Judson;Julee;Julius Sans One;Junge;Jura;Just Another Hand;Just Me Again Down Here;K2D;Kadwa;Kalam;Kameron;Kanit;Kantumruy;Karla;Karma;Katibeh;Kaushan Script;Kavivanar;Kavoon;Kdam Thmor;Keania One;Kelly Slab;Kenia;Khand;Khmer;Khula;Kirang Haerang;Kite One;Knewave;KoHo;Kodchasan;Kosugi;Kosugi Maru;Kotta One;Koulen;Kranky;Kreon;Kristi;Krona One;Krub;Kulim Park;Kumar One;Kumar One Outline;Kurale;La Belle Aurore;Lacquer;Laila;Lakki Reddy;Lalezar;Lancelot;Lateef;Lato;League Script;Leckerli One;Ledger;Lekton;Lemon;Lemonada;Lexend Deca;Lexend Exa;Lexend Giga;Lexend Mega;Lexend Peta;Lexend Tera;Lexend Zetta;Libre Barcode 128;Libre Barcode 128 Text;Libre Barcode 39;Libre Barcode 39 Extended;Libre Barcode 39 Extended Text;Libre Barcode 39 Text;Libre Baskerville;Libre Caslon Display;Libre Caslon Text;Libre Franklin;Life Savers;Lilita One;Lily Script One;Limelight;Linden Hill;Literata;Liu Jian Mao Cao;Livvic;Lobster;Lobster Two;Londrina Outline;Londrina Shadow;Londrina Sketch;Londrina Solid;Long Cang;Lora;Love Ya Like A Sister;Loved by the King;Lovers Quarrel;Luckiest Guy;Lusitana;Lustria;M PLUS 1p;M PLUS Rounded 1c;Ma Shan Zheng;Macondo;Macondo Swash Caps;Mada;Magra;Maiden Orange;Maitree;Major Mono Display;Mako;Mali;Mallanna;Mandali;Manjari;Mansalva;Manuale;Marcellus;Marcellus SC;Marck Script;Margarine;Markazi Text;Marko One;Marmelad;Martel;Martel Sans;Marvel;Mate;Mate SC;Maven Pro;McLaren;Meddon;MedievalSharp;Medula One;Meera Inimai;Megrim;Meie Script;Merienda;Merienda One;Merriweather;Merriweather Sans;Metal;Metal Mania;Metamorphous;Metrophobic;Michroma;Milonga;Miltonian;Miltonian Tattoo;Mina;Miniver;Miriam Libre;Mirza;Miss Fajardose;Mitr;Modak;Modern Antiqua;Mogra;Molengo;Molle;Monda;Monofett;Monoton;Monsieur La Doulaise;Montaga;Montez;Montserrat;Montserrat Alternates;Montserrat Subrayada;Moul;Moulpali;Mountains of Christmas;Mouse Memoirs;Mr Bedfort;Mr Dafoe;Mr De Haviland;Mrs Saint Delafield;Mrs Sheppards;Mukta;Mukta Mahee;Mukta Malar;Mukta Vaani;Muli;Mystery Quest;NTR;Nanum Brush Script;Nanum Gothic;Nanum Gothic Coding;Nanum Myeongjo;Nanum Pen Script;Neucha;Neuton;New Rocker;News Cycle;Niconne;Niramit;Nixie One;Nobile;Nokora;Norican;Nosifer;Notable;Nothing You Could Do;Noticia Text;Noto Sans;Noto Sans HK;Noto Sans JP;Noto Sans KR;Noto Sans SC;Noto Sans TC;Noto Serif;Noto Serif JP;Noto Serif KR;Noto Serif SC;Noto Serif TC;Nova Cut;Nova Flat;Nova Mono;Nova Oval;Nova Round;Nova Script;Nova Slim;Nova Square;Numans;Nunito;Nunito Sans;Odibee Sans;Odor Mean Chey;Offside;Old Standard TT;Oldenburg;Oleo Script;Oleo Script Swash Caps;Open Sans;Open Sans Condensed;Oranienbaum;Orbitron;Oregano;Orienta;Original Surfer;Oswald;Over the Rainbow;Overlock;Overlock SC;Overpass;Overpass Mono;Ovo;Oxygen;Oxygen Mono;PT Mono;PT Sans;PT Sans Caption;PT Sans Narrow;PT Serif;PT Serif Caption;Pacifico;Padauk;Palanquin;Palanquin Dark;Pangolin;Paprika;Parisienne;Passero One;Passion One;Pathway Gothic One;Patrick Hand;Patrick Hand SC;Pattaya;Patua One;Pavanam;Paytone One;Peddana;Peralta;Permanent Marker;Petit Formal Script;Petrona;Philosopher;Piedra;Pinyon Script;Pirata One;Plaster;Play;Playball;Playfair Display;Playfair Display SC;Podkova;Poiret One;Poller One;Poly;Pompiere;Pontano Sans;Poor Story;Poppins;Port Lligat Sans;Port Lligat Slab;Pragati Narrow;Prata;Preahvihear;Press Start 2P;Pridi;Princess Sofia;Prociono;Prompt;Prosto One;Proza Libre;Public Sans;Puritan;Purple Purse;Quando;Quantico;Quattrocento;Quattrocento Sans;Questrial;Quicksand;Quintessential;Qwigley;Racing Sans One;Radley;Rajdhani;Rakkas;Raleway;Raleway Dots;Ramabhadra;Ramaraja;Rambla;Rammetto One;Ranchers;Rancho;Ranga;Rasa;Rationale;Ravi Prakash;Red Hat Display;Red Hat Text;Redressed;Reem Kufi;Reenie Beanie;Revalia;Rhodium Libre;Ribeye;Ribeye Marrow;Righteous;Risque;Roboto;Roboto Condensed;Roboto Mono;Roboto Slab;Rochester;Rock Salt;Rokkitt;Romanesco;Ropa Sans;Rosario;Rosarivo;Rouge Script;Rozha One;Rubik;Rubik Mono One;Ruda;Rufina;Ruge Boogie;Ruluko;Rum Raisin;Ruslan Display;Russo One;Ruthie;Rye;Sacramento;Sahitya;Sail;Saira;Saira Condensed;Saira Extra Condensed;Saira Semi Condensed;Saira Stencil One;Salsa;Sanchez;Sancreek;Sansita;Sarabun;Sarala;Sarina;Sarpanch;Satisfy;Sawarabi Gothic;Sawarabi Mincho;Scada;Scheherazade;Schoolbell;Scope One;Seaweed Script;Secular One;Sedgwick Ave;Sedgwick Ave Display;Sevillana;Seymour One;Shadows Into Light;Shadows Into Light Two;Shanti;Share;Share Tech;Share Tech Mono;Shojumaru;Short Stack;Shrikhand;Siemreap;Sigmar One;Signika;Signika Negative;Simonetta;Single Day;Sintony;Sirin Stencil;Six Caps;Skranji;Slabo 13px;Slabo 27px;Slackey;Smokum;Smythe;Sniglet;Snippet;Snowburst One;Sofadi One;Sofia;Solway;Song Myung;Sonsie One;Sorts Mill Goudy;Source Code Pro;Source Sans Pro;Source Serif Pro;Space Mono;Special Elite;Spectral;Spectral SC;Spicy Rice;Spinnaker;Spirax;Squada One;Sree Krushnadevaraya;Sriracha;Srisakdi;Staatliches;Stalemate;Stalinist One;Stardos Stencil;Stint Ultra Condensed;Stint Ultra Expanded;Stoke;Strait;Stylish;Sue Ellen Francisco;Suez One;Sulphur Point;Sumana;Sunflower;Sunshiney;Supermercado One;Sura;Suranna;Suravaram;Suwannaphum;Swanky and Moo Moo;Syncopate;Tajawal;Tangerine;Taprom;Tauri;Taviraj;Teko;Telex;Tenali Ramakrishna;Tenor Sans;Text Me One;Thasadith;The Girl Next Door;Tienne;Tillana;Timmana;Tinos;Titan One;Titillium Web;Tomorrow;Trade Winds;Trirong;Trocchi;Trochut;Trykker;Tulpen One;Turret Road;Ubuntu;Ubuntu Condensed;Ubuntu Mono;Ultra;Uncial Antiqua;Underdog;Unica One;UnifrakturCook;UnifrakturMaguntia;Unkempt;Unlock;Unna;VT323;Vampiro One;Varela;Varela Round;Vast Shadow;Vesper Libre;Vibes;Vibur;Vidaloka;Viga;Voces;Volkhov;Vollkorn;Vollkorn SC;Voltaire;Waiting for the Sunrise;Wallpoet;Walter Turncoat;Warnes;Wellfleet;Wendy One;Wire One;Work Sans;Yanone Kaffeesatz;Yantramanav;Yatra One;Yellowtail;Yeon Sung;Yeseva One;Yesteryear;Yrsa;ZCOOL KuaiLe;ZCOOL QingKe HuangYou;ZCOOL XiaoWei;Zeyada;Zhi Mang Xing;Zilla Slab;Zilla Slab Highlight".split(";");
c123 = c123 || {};
c123.fonts = {
    "Abril Fatface": {
        hideInAssetsPanel: !0
    },
    Buda: {
        hideInAssetsPanel: !0
    },
    "Coda Caption": {
        hideInAssetsPanel: !0
    },
    Fahkwang: {
        hideInAssetsPanel: !0
    },
    Molle: {
        hideInAssetsPanel: !0
    },
    "Open Sans Condensed": {
        hideInAssetsPanel: !0
    },
    Roboto: {
        hideInAssetsPanel: !0
    },
    "Stalinist One": {
        hideInAssetsPanel: !0
    },
    Sunflower: {
        hideInAssetsPanel: !0
    },
    UnifrakturCook: {
        hideInAssetsPanel: !0
    }
};
c123 = c123 || {};
c123.sounds = {
    a: "https://static.bitsbox.com/sounds/a.mp3",
    a3: "https://static.bitsbox.com/sounds/a3.mp3",
    achievement: "https://static.bitsbox.com/sounds/achievement.mp3",
    action: "https://static.bitsbox.com/sounds/action.mp3",
    agent: "https://static.bitsbox.com/sounds/agent.mp3",
    ah: "https://static.bitsbox.com/sounds/ah.mp3",
    ahh: "https://static.bitsbox.com/sounds/ahh.mp3",
    airhorn: "https://static.bitsbox.com/sounds/airhorn.mp3",
    airplane: "https://static.bitsbox.com/sounds/airplane.mp3",
    alarm: "https://static.bitsbox.com/sounds/alarm.mp3",
    alarm2: "https://static.bitsbox.com/sounds/alarm2.mp3",
    albertosaurus: "https://static.bitsbox.com/sounds/albertosaurus.mp3",
    alert: "https://static.bitsbox.com/sounds/alert.mp3",
    alerts: "https://static.bitsbox.com/sounds/alerts.mp3",
    alien: "https://static.bitsbox.com/sounds/alien.mp3",
    alien1: "https://static.bitsbox.com/sounds/alien1.mp3",
    alien10: "https://static.bitsbox.com/sounds/alien10.mp3",
    alien11: "https://static.bitsbox.com/sounds/alien11.mp3",
    alien12: "https://static.bitsbox.com/sounds/alien12.mp3",
    alien2: "https://static.bitsbox.com/sounds/alien2.mp3",
    alien3: "https://static.bitsbox.com/sounds/alien3.mp3",
    alien4: "https://static.bitsbox.com/sounds/alien4.mp3",
    alien5: "https://static.bitsbox.com/sounds/alien5.mp3",
    alien6: "https://static.bitsbox.com/sounds/alien6.mp3",
    alien7: "https://static.bitsbox.com/sounds/alien7.mp3",
    alien8: "https://static.bitsbox.com/sounds/alien8.mp3",
    alien9: "https://static.bitsbox.com/sounds/alien9.mp3",
    alligator: "https://static.bitsbox.com/sounds/alligator.mp3",
    allosaurus: "https://static.bitsbox.com/sounds/allosaurus.mp3",
    alone: "https://static.bitsbox.com/sounds/alone.mp3",
    ambulance: "https://static.bitsbox.com/sounds/ambulance.mp3",
    angry: "https://static.bitsbox.com/sounds/angry.mp3",
    animal: "https://static.bitsbox.com/sounds/animal.mp3",
    animals: "https://static.bitsbox.com/sounds/animals.mp3",
    ankylosaurus: "https://static.bitsbox.com/sounds/ankylosaurus.mp3",
    antenna: "https://static.bitsbox.com/sounds/antenna.mp3",
    antenna2: "https://static.bitsbox.com/sounds/antenna2.mp3",
    applause: "https://static.bitsbox.com/sounds/applause.mp3",
    archaeopteryx: "https://static.bitsbox.com/sounds/archaeopteryx.mp3",
    arrow: "https://static.bitsbox.com/sounds/arrow.mp3",
    artist: "https://static.bitsbox.com/sounds/artist.mp3",
    asteroid2: "https://static.bitsbox.com/sounds/asteroid2.mp3",
    atom: "https://static.bitsbox.com/sounds/atom.mp3",
    attack: "https://static.bitsbox.com/sounds/attack.mp3",
    audience: "https://static.bitsbox.com/sounds/audience.mp3",
    axe: "https://static.bitsbox.com/sounds/axe.mp3",
    b: "https://static.bitsbox.com/sounds/b.mp3",
    b3: "https://static.bitsbox.com/sounds/b3.mp3",
    baby: "https://static.bitsbox.com/sounds/baby.mp3",
    babycry: "https://static.bitsbox.com/sounds/babycry.mp3",
    babycrying: "https://static.bitsbox.com/sounds/babycrying.mp3",
    babylaugh: "https://static.bitsbox.com/sounds/babylaugh.mp3",
    back: "https://static.bitsbox.com/sounds/back.mp3",
    bad: "https://static.bitsbox.com/sounds/bad.mp3",
    ball: "https://static.bitsbox.com/sounds/ball.mp3",
    ballet: "https://static.bitsbox.com/sounds/ballet.mp3",
    ballgame: "https://static.bitsbox.com/sounds/ballgame.mp3",
    balloon: "https://static.bitsbox.com/sounds/balloon.mp3",
    ballpark: "https://static.bitsbox.com/sounds/ballpark.mp3",
    baloon: "https://static.bitsbox.com/sounds/baloon.mp3",
    bam: "https://static.bitsbox.com/sounds/bam.mp3",
    band: "https://static.bitsbox.com/sounds/band.mp3",
    bang: "https://static.bitsbox.com/sounds/bang.mp3",
    banjo: "https://static.bitsbox.com/sounds/banjo.mp3",
    baritone: "https://static.bitsbox.com/sounds/baritone.mp3",
    bark: "https://static.bitsbox.com/sounds/bark.mp3",
    bark2: "https://static.bitsbox.com/sounds/bark2.mp3",
    barking: "https://static.bitsbox.com/sounds/barking.mp3",
    barks: "https://static.bitsbox.com/sounds/barks.mp3",
    baseball: "https://static.bitsbox.com/sounds/baseball.mp3",
    baseballbat: "https://static.bitsbox.com/sounds/baseballbat.mp3",
    baseballgame: "https://static.bitsbox.com/sounds/baseballgame.mp3",
    basketball: "https://static.bitsbox.com/sounds/basketball.mp3",
    bass: "https://static.bitsbox.com/sounds/bass.mp3",
    bassdrum: "https://static.bitsbox.com/sounds/bassdrum.mp3",
    bat: "https://static.bitsbox.com/sounds/bat.mp3",
    bats: "https://static.bitsbox.com/sounds/bats.mp3",
    batter: "https://static.bitsbox.com/sounds/batter.mp3",
    batter2: "https://static.bitsbox.com/sounds/batter2.mp3",
    battery: "https://static.bitsbox.com/sounds/battery.mp3",
    beach: "https://static.bitsbox.com/sounds/beach.mp3",
    beam: "https://static.bitsbox.com/sounds/beam.mp3",
    bear: "https://static.bitsbox.com/sounds/bear.mp3",
    bear2: "https://static.bitsbox.com/sounds/bear2.mp3",
    bear4: "https://static.bitsbox.com/sounds/bear4.mp3",
    beat: "https://static.bitsbox.com/sounds/beat.mp3",
    beatbox: "https://static.bitsbox.com/sounds/beatbox.mp3",
    beep: "https://static.bitsbox.com/sounds/beep.mp3",
    beep1: "https://static.bitsbox.com/sounds/beep1.mp3",
    beep2: "https://static.bitsbox.com/sounds/beep2.mp3",
    beep3: "https://static.bitsbox.com/sounds/beep3.mp3",
    beepbeep: "https://static.bitsbox.com/sounds/beepbeep.mp3",
    beeps: "https://static.bitsbox.com/sounds/beeps.mp3",
    bees: "https://static.bitsbox.com/sounds/bees.mp3",
    belch: "https://static.bitsbox.com/sounds/belch.mp3",
    bell: "https://static.bitsbox.com/sounds/bell.mp3",
    bells: "https://static.bitsbox.com/sounds/bells.mp3",
    bigben: "https://static.bitsbox.com/sounds/bigben.mp3",
    bigfoot: "https://static.bitsbox.com/sounds/bigfoot.mp3",
    bigmunny: "https://static.bitsbox.com/sounds/bigmunny.mp3",
    bike: "https://static.bitsbox.com/sounds/bike.mp3",
    bing: "https://static.bitsbox.com/sounds/bing.mp3",
    bird: "https://static.bitsbox.com/sounds/bird.mp3",
    bird1: "https://static.bitsbox.com/sounds/bird1.mp3",
    bird2: "https://static.bitsbox.com/sounds/bird2.mp3",
    bird3: "https://static.bitsbox.com/sounds/bird3.mp3",
    bird4: "https://static.bitsbox.com/sounds/bird4.mp3",
    bird5: "https://static.bitsbox.com/sounds/bird5.mp3",
    birds: "https://static.bitsbox.com/sounds/birds.mp3",
    bite: "https://static.bitsbox.com/sounds/bite.mp3",
    blackhole: "https://static.bitsbox.com/sounds/blackhole.mp3",
    blast: "https://static.bitsbox.com/sounds/blast.mp3",
    blastoff: "https://static.bitsbox.com/sounds/blastoff.mp3",
    bleep: "https://static.bitsbox.com/sounds/bleep.mp3",
    blender: "https://static.bitsbox.com/sounds/blender.mp3",
    blip: "https://static.bitsbox.com/sounds/blip.mp3",
    blob: "https://static.bitsbox.com/sounds/blob.mp3",
    block: "https://static.bitsbox.com/sounds/block.mp3",
    bloop: "https://static.bitsbox.com/sounds/bloop.mp3",
    blop: "https://static.bitsbox.com/sounds/blop.mp3",
    blow: "https://static.bitsbox.com/sounds/blow.mp3",
    blowup: "https://static.bitsbox.com/sounds/blowup.mp3",
    blurp: "https://static.bitsbox.com/sounds/blurp.mp3",
    boat: "https://static.bitsbox.com/sounds/boat.mp3",
    boatwhistle: "https://static.bitsbox.com/sounds/boatwhistle.mp3",
    bobcat: "https://static.bitsbox.com/sounds/bobcat.mp3",
    boing: "https://static.bitsbox.com/sounds/boing.mp3",
    bolt: "https://static.bitsbox.com/sounds/bolt.mp3",
    bomb: "https://static.bitsbox.com/sounds/bomb.mp3",
    bomb2: "https://static.bitsbox.com/sounds/bomb2.mp3",
    bonk: "https://static.bitsbox.com/sounds/bonk.mp3",
    booing: "https://static.bitsbox.com/sounds/booing.mp3",
    boom: "https://static.bitsbox.com/sounds/boom.mp3",
    bop: "https://static.bitsbox.com/sounds/bop.mp3",
    bot: "https://static.bitsbox.com/sounds/bot.mp3",
    box: "https://static.bitsbox.com/sounds/box.mp3",
    brachiosaurus: "https://static.bitsbox.com/sounds/brachiosaurus.mp3",
    brain: "https://static.bitsbox.com/sounds/brain.mp3",
    "break": "https://static.bitsbox.com/sounds/break.mp3",
    breath: "https://static.bitsbox.com/sounds/breath.mp3",
    breathing: "https://static.bitsbox.com/sounds/breathing.mp3",
    breeze: "https://static.bitsbox.com/sounds/breeze.mp3",
    broccoli: "https://static.bitsbox.com/sounds/broccoli.mp3",
    bubble: "https://static.bitsbox.com/sounds/bubble.mp3",
    bubbles: "https://static.bitsbox.com/sounds/bubbles.mp3",
    bug: "https://static.bitsbox.com/sounds/bug.mp3",
    bugs: "https://static.bitsbox.com/sounds/bugs.mp3",
    bulb: "https://static.bitsbox.com/sounds/bulb.mp3",
    bull: "https://static.bitsbox.com/sounds/bull.mp3",
    bun: "https://static.bitsbox.com/sounds/bun.mp3",
    bunny: "https://static.bitsbox.com/sounds/bunny.mp3",
    bunny2: "https://static.bitsbox.com/sounds/bunny2.mp3",
    bunyanwalk: "https://static.bitsbox.com/sounds/bunyanwalk.mp3",
    burger3: "https://static.bitsbox.com/sounds/burger3.mp3",
    burn: "https://static.bitsbox.com/sounds/burn.mp3",
    burning: "https://static.bitsbox.com/sounds/burning.mp3",
    burp: "https://static.bitsbox.com/sounds/burp.mp3",
    busstop: "https://static.bitsbox.com/sounds/busstop.mp3",
    buttonred: "https://static.bitsbox.com/sounds/buttonred.mp3",
    buzz: "https://static.bitsbox.com/sounds/buzz.mp3",
    buzzer: "https://static.bitsbox.com/sounds/buzzer.mp3",
    c: "https://static.bitsbox.com/sounds/c.mp3",
    c3: "https://static.bitsbox.com/sounds/c3.mp3",
    c4: "https://static.bitsbox.com/sounds/c4.mp3",
    camel: "https://static.bitsbox.com/sounds/camel.mp3",
    canary: "https://static.bitsbox.com/sounds/canary.mp3",
    cannon: "https://static.bitsbox.com/sounds/cannon.mp3",
    car: "https://static.bitsbox.com/sounds/car.mp3",
    car1: "https://static.bitsbox.com/sounds/car1.mp3",
    car11: "https://static.bitsbox.com/sounds/car11.mp3",
    car2: "https://static.bitsbox.com/sounds/car2.mp3",
    car3: "https://static.bitsbox.com/sounds/car3.mp3",
    car6: "https://static.bitsbox.com/sounds/car6.mp3",
    car7: "https://static.bitsbox.com/sounds/car7.mp3",
    car8: "https://static.bitsbox.com/sounds/car8.mp3",
    car9: "https://static.bitsbox.com/sounds/car9.mp3",
    caralarm: "https://static.bitsbox.com/sounds/caralarm.mp3",
    carengine: "https://static.bitsbox.com/sounds/carengine.mp3",
    carhorn: "https://static.bitsbox.com/sounds/carhorn.mp3",
    cars: "https://static.bitsbox.com/sounds/cars.mp3",
    carstarting: "https://static.bitsbox.com/sounds/carstarting.mp3",
    cash: "https://static.bitsbox.com/sounds/cash.mp3",
    cat: "https://static.bitsbox.com/sounds/cat.mp3",
    cat1: "https://static.bitsbox.com/sounds/cat1.mp3",
    cat10: "https://static.bitsbox.com/sounds/cat10.mp3",
    cat2: "https://static.bitsbox.com/sounds/cat2.mp3",
    cat3: "https://static.bitsbox.com/sounds/cat3.mp3",
    cat5: "https://static.bitsbox.com/sounds/cat5.mp3",
    cat9: "https://static.bitsbox.com/sounds/cat9.mp3",
    catmeow: "https://static.bitsbox.com/sounds/catmeow.mp3",
    cats: "https://static.bitsbox.com/sounds/cats.mp3",
    caw: "https://static.bitsbox.com/sounds/caw.mp3",
    cello: "https://static.bitsbox.com/sounds/cello.mp3",
    chaching: "https://static.bitsbox.com/sounds/chaching.mp3",
    chaching2: "https://static.bitsbox.com/sounds/chaching2.mp3",
    chainsaw: "https://static.bitsbox.com/sounds/chainsaw.mp3",
    charge: "https://static.bitsbox.com/sounds/charge.mp3",
    cheer: "https://static.bitsbox.com/sounds/cheer.mp3",
    cheering: "https://static.bitsbox.com/sounds/cheering.mp3",
    cheering2: "https://static.bitsbox.com/sounds/cheering2.mp3",
    cheers: "https://static.bitsbox.com/sounds/cheers.mp3",
    cheetah: "https://static.bitsbox.com/sounds/cheetah.mp3",
    chicken: "https://static.bitsbox.com/sounds/chicken.mp3",
    chicken2: "https://static.bitsbox.com/sounds/chicken2.mp3",
    chicken3: "https://static.bitsbox.com/sounds/chicken3.mp3",
    chickens: "https://static.bitsbox.com/sounds/chickens.mp3",
    chime: "https://static.bitsbox.com/sounds/chime.mp3",
    chimes: "https://static.bitsbox.com/sounds/chimes.mp3",
    chirp: "https://static.bitsbox.com/sounds/chirp.mp3",
    chomp: "https://static.bitsbox.com/sounds/chomp.mp3",
    chomp2: "https://static.bitsbox.com/sounds/chomp2.mp3",
    chop: "https://static.bitsbox.com/sounds/chop.mp3",
    christmas: "https://static.bitsbox.com/sounds/christmas.mp3",
    christmasmusic: "https://static.bitsbox.com/sounds/christmasmusic.mp3",
    cicada: "https://static.bitsbox.com/sounds/cicada.mp3",
    clang: "https://static.bitsbox.com/sounds/clang.mp3",
    clank: "https://static.bitsbox.com/sounds/clank.mp3",
    clap: "https://static.bitsbox.com/sounds/clap.mp3",
    clapping: "https://static.bitsbox.com/sounds/clapping.mp3",
    claps: "https://static.bitsbox.com/sounds/claps.mp3",
    clarinet: "https://static.bitsbox.com/sounds/clarinet.mp3",
    classical: "https://static.bitsbox.com/sounds/classical.mp3",
    click: "https://static.bitsbox.com/sounds/click.mp3",
    click2: "https://static.bitsbox.com/sounds/click2.mp3",
    cloud: "https://static.bitsbox.com/sounds/cloud.mp3",
    cloud2: "https://static.bitsbox.com/sounds/cloud2.mp3",
    clown: "https://static.bitsbox.com/sounds/clown.mp3",
    cluck: "https://static.bitsbox.com/sounds/cluck.mp3",
    coelophysis: "https://static.bitsbox.com/sounds/coelophysis.mp3",
    coin: "https://static.bitsbox.com/sounds/coin.mp3",
    coins: "https://static.bitsbox.com/sounds/coins.mp3",
    comet: "https://static.bitsbox.com/sounds/comet.mp3",
    computer: "https://static.bitsbox.com/sounds/computer.mp3",
    conga: "https://static.bitsbox.com/sounds/conga.mp3",
    congadrum: "https://static.bitsbox.com/sounds/congadrum.mp3",
    congadrums: "https://static.bitsbox.com/sounds/congadrums.mp3",
    contraption: "https://static.bitsbox.com/sounds/contraption.mp3",
    cool: "https://static.bitsbox.com/sounds/cool.mp3",
    cough: "https://static.bitsbox.com/sounds/cough.mp3",
    cough2: "https://static.bitsbox.com/sounds/cough2.mp3",
    cow: "https://static.bitsbox.com/sounds/cow.mp3",
    cow2: "https://static.bitsbox.com/sounds/cow2.mp3",
    cow3: "https://static.bitsbox.com/sounds/cow3.mp3",
    cow4: "https://static.bitsbox.com/sounds/cow4.mp3",
    cowbell: "https://static.bitsbox.com/sounds/cowbell.mp3",
    crack: "https://static.bitsbox.com/sounds/crack.mp3",
    crackle: "https://static.bitsbox.com/sounds/crackle.mp3",
    crash: "https://static.bitsbox.com/sounds/crash.mp3",
    crashing: "https://static.bitsbox.com/sounds/crashing.mp3",
    crazy: "https://static.bitsbox.com/sounds/crazy.mp3",
    creepy: "https://static.bitsbox.com/sounds/creepy.mp3",
    cricket: "https://static.bitsbox.com/sounds/cricket.mp3",
    crickets: "https://static.bitsbox.com/sounds/crickets.mp3",
    croak: "https://static.bitsbox.com/sounds/croak.mp3",
    crow: "https://static.bitsbox.com/sounds/crow.mp3",
    crowd: "https://static.bitsbox.com/sounds/crowd.mp3",
    cruise: "https://static.bitsbox.com/sounds/cruise.mp3",
    crunch: "https://static.bitsbox.com/sounds/crunch.mp3",
    crush: "https://static.bitsbox.com/sounds/crush.mp3",
    cry: "https://static.bitsbox.com/sounds/cry.mp3",
    crying: "https://static.bitsbox.com/sounds/crying.mp3",
    cryolophosaurus: "https://static.bitsbox.com/sounds/cryolophosaurus.mp3",
    cuckoo: "https://static.bitsbox.com/sounds/cuckoo.mp3",
    cut: "https://static.bitsbox.com/sounds/cut.mp3",
    cyber: "https://static.bitsbox.com/sounds/cyber.mp3",
    cylon: "https://static.bitsbox.com/sounds/cylon.mp3",
    cymbal: "https://static.bitsbox.com/sounds/cymbal.mp3",
    d: "https://static.bitsbox.com/sounds/d.mp3",
    d3: "https://static.bitsbox.com/sounds/d3.mp3",
    damage: "https://static.bitsbox.com/sounds/damage.mp3",
    dance: "https://static.bitsbox.com/sounds/dance.mp3",
    danceparty: "https://static.bitsbox.com/sounds/danceparty.mp3",
    deer: "https://static.bitsbox.com/sounds/deer.mp3",
    demon: "https://static.bitsbox.com/sounds/demon.mp3",
    ding: "https://static.bitsbox.com/sounds/ding.mp3",
    dingdong: "https://static.bitsbox.com/sounds/dingdong.mp3",
    dino: "https://static.bitsbox.com/sounds/dino.mp3",
    dino1: "https://static.bitsbox.com/sounds/dino1.mp3",
    dino10: "https://static.bitsbox.com/sounds/dino10.mp3",
    dino11: "https://static.bitsbox.com/sounds/dino11.mp3",
    dino12: "https://static.bitsbox.com/sounds/dino12.mp3",
    dino13: "https://static.bitsbox.com/sounds/dino13.mp3",
    dino14: "https://static.bitsbox.com/sounds/dino14.mp3",
    dino15: "https://static.bitsbox.com/sounds/dino15.mp3",
    dino2: "https://static.bitsbox.com/sounds/dino2.mp3",
    dino3: "https://static.bitsbox.com/sounds/dino3.mp3",
    dino4: "https://static.bitsbox.com/sounds/dino4.mp3",
    dino5: "https://static.bitsbox.com/sounds/dino5.mp3",
    dino6: "https://static.bitsbox.com/sounds/dino6.mp3",
    dino7: "https://static.bitsbox.com/sounds/dino7.mp3",
    dino8: "https://static.bitsbox.com/sounds/dino8.mp3",
    dino9: "https://static.bitsbox.com/sounds/dino9.mp3",
    dinobones: "https://static.bitsbox.com/sounds/dinobones.mp3",
    dinobot: "https://static.bitsbox.com/sounds/dinobot.mp3",
    dinolove: "https://static.bitsbox.com/sounds/dinolove.mp3",
    dinopilot: "https://static.bitsbox.com/sounds/dinopilot.mp3",
    dinosaur: "https://static.bitsbox.com/sounds/dinosaur.mp3",
    dinosaur1: "https://static.bitsbox.com/sounds/dinosaur1.mp3",
    dinosaur2: "https://static.bitsbox.com/sounds/dinosaur2.mp3",
    dinosaur3: "https://static.bitsbox.com/sounds/dinosaur3.mp3",
    dinosaur4: "https://static.bitsbox.com/sounds/dinosaur4.mp3",
    dinosaur5: "https://static.bitsbox.com/sounds/dinosaur5.mp3",
    diplodocus: "https://static.bitsbox.com/sounds/diplodocus.mp3",
    disco: "https://static.bitsbox.com/sounds/disco.mp3",
    discoparty: "https://static.bitsbox.com/sounds/discoparty.mp3",
    "do": "https://static.bitsbox.com/sounds/do.mp3",
    dodo: "https://static.bitsbox.com/sounds/dodo.mp3",
    dodobird: "https://static.bitsbox.com/sounds/dodobird.mp3",
    dog: "https://static.bitsbox.com/sounds/dog.mp3",
    dog2: "https://static.bitsbox.com/sounds/dog2.mp3",
    dogbark: "https://static.bitsbox.com/sounds/dogbark.mp3",
    dogbarking: "https://static.bitsbox.com/sounds/dogbarking.mp3",
    dogs: "https://static.bitsbox.com/sounds/dogs.mp3",
    dolphin: "https://static.bitsbox.com/sounds/dolphin.mp3",
    donkey: "https://static.bitsbox.com/sounds/donkey.mp3",
    doom: "https://static.bitsbox.com/sounds/doom.mp3",
    door: "https://static.bitsbox.com/sounds/door.mp3",
    doorbell: "https://static.bitsbox.com/sounds/doorbell.mp3",
    dorygnathus: "https://static.bitsbox.com/sounds/dorygnathus.mp3",
    dragon: "https://static.bitsbox.com/sounds/dragon.mp3",
    dragon1: "https://static.bitsbox.com/sounds/dragon1.mp3",
    dragon2: "https://static.bitsbox.com/sounds/dragon2.mp3",
    dragon3: "https://static.bitsbox.com/sounds/dragon3.mp3",
    dragon4: "https://static.bitsbox.com/sounds/dragon4.mp3",
    dragon5: "https://static.bitsbox.com/sounds/dragon5.mp3",
    dragon6: "https://static.bitsbox.com/sounds/dragon6.mp3",
    dragonroar: "https://static.bitsbox.com/sounds/dragonroar.mp3",
    dream: "https://static.bitsbox.com/sounds/dream.mp3",
    drip: "https://static.bitsbox.com/sounds/drip.mp3",
    drive: "https://static.bitsbox.com/sounds/drive.mp3",
    driving: "https://static.bitsbox.com/sounds/driving.mp3",
    droid: "https://static.bitsbox.com/sounds/droid.mp3",
    droidfly: "https://static.bitsbox.com/sounds/droidfly.mp3",
    drone: "https://static.bitsbox.com/sounds/drone.mp3",
    drone2: "https://static.bitsbox.com/sounds/drone2.mp3",
    drop: "https://static.bitsbox.com/sounds/drop.mp3",
    drum: "https://static.bitsbox.com/sounds/drum.mp3",
    drumroll: "https://static.bitsbox.com/sounds/drumroll.mp3",
    drums: "https://static.bitsbox.com/sounds/drums.mp3",
    dubstep: "https://static.bitsbox.com/sounds/dubstep.mp3",
    duck: "https://static.bitsbox.com/sounds/duck.mp3",
    e: "https://static.bitsbox.com/sounds/e.mp3",
    e3: "https://static.bitsbox.com/sounds/e3.mp3",
    elephant: "https://static.bitsbox.com/sounds/elephant.mp3",
    engine: "https://static.bitsbox.com/sounds/engine.mp3",
    eudimorphodon: "https://static.bitsbox.com/sounds/eudimorphodon.mp3",
    evil: "https://static.bitsbox.com/sounds/evil.mp3",
    evillaugh: "https://static.bitsbox.com/sounds/evillaugh.mp3",
    explode: "https://static.bitsbox.com/sounds/explode.mp3",
    exploding: "https://static.bitsbox.com/sounds/exploding.mp3",
    explosion: "https://static.bitsbox.com/sounds/explosion.mp3",
    explosion2: "https://static.bitsbox.com/sounds/explosion2.mp3",
    f: "https://static.bitsbox.com/sounds/f.mp3",
    f3: "https://static.bitsbox.com/sounds/f3.mp3",
    fail: "https://static.bitsbox.com/sounds/fail.mp3",
    fairy: "https://static.bitsbox.com/sounds/fairy.mp3",
    fall: "https://static.bitsbox.com/sounds/fall.mp3",
    fancy: "https://static.bitsbox.com/sounds/fancy.mp3",
    fart: "https://static.bitsbox.com/sounds/fart.mp3",
    fart1: "https://static.bitsbox.com/sounds/fart1.mp3",
    fart2: "https://static.bitsbox.com/sounds/fart2.mp3",
    fart3: "https://static.bitsbox.com/sounds/fart3.mp3",
    farts: "https://static.bitsbox.com/sounds/farts.mp3",
    fido: "https://static.bitsbox.com/sounds/fido.mp3",
    fire: "https://static.bitsbox.com/sounds/fire.mp3",
    firetruck: "https://static.bitsbox.com/sounds/firetruck.mp3",
    firework: "https://static.bitsbox.com/sounds/firework.mp3",
    fireworks: "https://static.bitsbox.com/sounds/fireworks.mp3",
    fish: "https://static.bitsbox.com/sounds/fish.mp3",
    flame: "https://static.bitsbox.com/sounds/flame.mp3",
    flames: "https://static.bitsbox.com/sounds/flames.mp3",
    flap: "https://static.bitsbox.com/sounds/flap.mp3",
    flash: "https://static.bitsbox.com/sounds/flash.mp3",
    floortom: "https://static.bitsbox.com/sounds/floortom.mp3",
    flush: "https://static.bitsbox.com/sounds/flush.mp3",
    flush2: "https://static.bitsbox.com/sounds/flush2.mp3",
    flushing: "https://static.bitsbox.com/sounds/flushing.mp3",
    flushtoilet: "https://static.bitsbox.com/sounds/flushtoilet.mp3",
    flute: "https://static.bitsbox.com/sounds/flute.mp3",
    flying: "https://static.bitsbox.com/sounds/flying.mp3",
    foghorn: "https://static.bitsbox.com/sounds/foghorn.mp3",
    footsteps: "https://static.bitsbox.com/sounds/footsteps.mp3",
    force: "https://static.bitsbox.com/sounds/force.mp3",
    forest: "https://static.bitsbox.com/sounds/forest.mp3",
    fox: "https://static.bitsbox.com/sounds/fox.mp3",
    frog: "https://static.bitsbox.com/sounds/frog.mp3",
    frog2: "https://static.bitsbox.com/sounds/frog2.mp3",
    g: "https://static.bitsbox.com/sounds/g.mp3",
    g3: "https://static.bitsbox.com/sounds/g3.mp3",
    game: "https://static.bitsbox.com/sounds/game.mp3",
    gasp: "https://static.bitsbox.com/sounds/gasp.mp3",
    germbot: "https://static.bitsbox.com/sounds/germbot.mp3",
    ghost: "https://static.bitsbox.com/sounds/ghost.mp3",
    giant: "https://static.bitsbox.com/sounds/giant.mp3",
    giggle: "https://static.bitsbox.com/sounds/giggle.mp3",
    glass: "https://static.bitsbox.com/sounds/glass.mp3",
    glug: "https://static.bitsbox.com/sounds/glug.mp3",
    gnome: "https://static.bitsbox.com/sounds/gnome.mp3",
    goat: "https://static.bitsbox.com/sounds/goat.mp3",
    golfballinhole: "https://static.bitsbox.com/sounds/golfballinhole.mp3",
    goose: "https://static.bitsbox.com/sounds/goose.mp3",
    grand: "https://static.bitsbox.com/sounds/grand.mp3",
    groan: "https://static.bitsbox.com/sounds/groan.mp3",
    growl: "https://static.bitsbox.com/sounds/growl.mp3",
    grr: "https://static.bitsbox.com/sounds/grr.mp3",
    grunt: "https://static.bitsbox.com/sounds/grunt.mp3",
    guitar: "https://static.bitsbox.com/sounds/guitar.mp3",
    gun: "https://static.bitsbox.com/sounds/gun.mp3",
    guns: "https://static.bitsbox.com/sounds/guns.mp3",
    gunshot: "https://static.bitsbox.com/sounds/gunshot.mp3",
    hammer: "https://static.bitsbox.com/sounds/hammer.mp3",
    hamster: "https://static.bitsbox.com/sounds/hamster.mp3",
    hamster2: "https://static.bitsbox.com/sounds/hamster2.mp3",
    happy: "https://static.bitsbox.com/sounds/happy.mp3",
    harp: "https://static.bitsbox.com/sounds/harp.mp3",
    harrypotter: "https://static.bitsbox.com/sounds/harrypotter.mp3",
    hawk: "https://static.bitsbox.com/sounds/hawk.mp3",
    heart: "https://static.bitsbox.com/sounds/heart.mp3",
    heart2: "https://static.bitsbox.com/sounds/heart2.mp3",
    heartbeat: "https://static.bitsbox.com/sounds/heartbeat.mp3",
    hearts: "https://static.bitsbox.com/sounds/hearts.mp3",
    heavymetal: "https://static.bitsbox.com/sounds/heavymetal.mp3",
    hedgehog: "https://static.bitsbox.com/sounds/hedgehog.mp3",
    helicopter: "https://static.bitsbox.com/sounds/helicopter.mp3",
    helicoptor: "https://static.bitsbox.com/sounds/helicoptor.mp3",
    hello: "https://static.bitsbox.com/sounds/hello.mp3",
    hello2: "https://static.bitsbox.com/sounds/hello2.mp3",
    hero: "https://static.bitsbox.com/sounds/hero.mp3",
    hey: "https://static.bitsbox.com/sounds/hey.mp3",
    hi: "https://static.bitsbox.com/sounds/hi.mp3",
    hightom: "https://static.bitsbox.com/sounds/hightom.mp3",
    hihat: "https://static.bitsbox.com/sounds/hihat.mp3",
    hiphop: "https://static.bitsbox.com/sounds/hiphop.mp3",
    hiss: "https://static.bitsbox.com/sounds/hiss.mp3",
    hit: "https://static.bitsbox.com/sounds/hit.mp3",
    hits: "https://static.bitsbox.com/sounds/hits.mp3",
    hockeymonster: "https://static.bitsbox.com/sounds/hockeymonster.mp3",
    hockeymonster2: "https://static.bitsbox.com/sounds/hockeymonster2.mp3",
    hog: "https://static.bitsbox.com/sounds/hog.mp3",
    honk: "https://static.bitsbox.com/sounds/honk.mp3",
    hooray: "https://static.bitsbox.com/sounds/hooray.mp3",
    hooyah: "https://static.bitsbox.com/sounds/hooyah.mp3",
    hop: "https://static.bitsbox.com/sounds/hop.mp3",
    horn: "https://static.bitsbox.com/sounds/horn.mp3",
    horror: "https://static.bitsbox.com/sounds/horror.mp3",
    horse: "https://static.bitsbox.com/sounds/horse.mp3",
    horse2: "https://static.bitsbox.com/sounds/horse2.mp3",
    howl: "https://static.bitsbox.com/sounds/howl.mp3",
    howling: "https://static.bitsbox.com/sounds/howling.mp3",
    hurt: "https://static.bitsbox.com/sounds/hurt.mp3",
    iloveyou: "https://static.bitsbox.com/sounds/iloveyou.mp3",
    indycar: "https://static.bitsbox.com/sounds/indycar.mp3",
    jazz: "https://static.bitsbox.com/sounds/jazz.mp3",
    jet: "https://static.bitsbox.com/sounds/jet.mp3",
    jetkid: "https://static.bitsbox.com/sounds/jetkid.mp3",
    jingle: "https://static.bitsbox.com/sounds/jingle.mp3",
    jinglebells: "https://static.bitsbox.com/sounds/jinglebells.mp3",
    jump: "https://static.bitsbox.com/sounds/jump.mp3",
    jump2: "https://static.bitsbox.com/sounds/jump2.mp3",
    jumpscare: "https://static.bitsbox.com/sounds/jumpscare.mp3",
    jungle: "https://static.bitsbox.com/sounds/jungle.mp3",
    junglebird: "https://static.bitsbox.com/sounds/junglebird.mp3",
    kaboom: "https://static.bitsbox.com/sounds/kaboom.mp3",
    kick: "https://static.bitsbox.com/sounds/kick.mp3",
    kids: "https://static.bitsbox.com/sounds/kids.mp3",
    kidsthesedays: "https://static.bitsbox.com/sounds/kidsthesedays.mp3",
    kiss: "https://static.bitsbox.com/sounds/kiss.mp3",
    klaxon: "https://static.bitsbox.com/sounds/klaxon.mp3",
    knife: "https://static.bitsbox.com/sounds/knife.mp3",
    knock: "https://static.bitsbox.com/sounds/knock.mp3",
    lala: "https://static.bitsbox.com/sounds/lala.mp3",
    lamb: "https://static.bitsbox.com/sounds/lamb.mp3",
    landing: "https://static.bitsbox.com/sounds/landing.mp3",
    laser: "https://static.bitsbox.com/sounds/laser.mp3",
    laser3: "https://static.bitsbox.com/sounds/laser3.mp3",
    laugh: "https://static.bitsbox.com/sounds/laugh.mp3",
    laughing: "https://static.bitsbox.com/sounds/laughing.mp3",
    laughing2: "https://static.bitsbox.com/sounds/laughing2.mp3",
    laughter: "https://static.bitsbox.com/sounds/laughter.mp3",
    laughter2: "https://static.bitsbox.com/sounds/laughter2.mp3",
    laughter3: "https://static.bitsbox.com/sounds/laughter3.mp3",
    laughter4: "https://static.bitsbox.com/sounds/laughter4.mp3",
    lazer: "https://static.bitsbox.com/sounds/lazer.mp3",
    leprechaun: "https://static.bitsbox.com/sounds/leprechaun.mp3",
    lightning: "https://static.bitsbox.com/sounds/lightning.mp3",
    lightsaber: "https://static.bitsbox.com/sounds/lightsaber.mp3",
    lion: "https://static.bitsbox.com/sounds/lion.mp3",
    lion2: "https://static.bitsbox.com/sounds/lion2.mp3",
    lovebird: "https://static.bitsbox.com/sounds/lovebird.mp3",
    mad: "https://static.bitsbox.com/sounds/mad.mp3",
    maiasaura: "https://static.bitsbox.com/sounds/maiasaura.mp3",
    mammoth: "https://static.bitsbox.com/sounds/mammoth.mp3",
    maraca: "https://static.bitsbox.com/sounds/maraca.mp3",
    maracas: "https://static.bitsbox.com/sounds/maracas.mp3",
    mario: "https://static.bitsbox.com/sounds/mario.mp3",
    melody: "https://static.bitsbox.com/sounds/melody.mp3",
    meow: "https://static.bitsbox.com/sounds/meow.mp3",
    meow2: "https://static.bitsbox.com/sounds/meow2.mp3",
    mermaid: "https://static.bitsbox.com/sounds/mermaid.mp3",
    mermaid2: "https://static.bitsbox.com/sounds/mermaid2.mp3",
    mice: "https://static.bitsbox.com/sounds/mice.mp3",
    microwave: "https://static.bitsbox.com/sounds/microwave.mp3",
    mixing: "https://static.bitsbox.com/sounds/mixing.mp3",
    moan: "https://static.bitsbox.com/sounds/moan.mp3",
    mom: "https://static.bitsbox.com/sounds/mom.mp3",
    money: "https://static.bitsbox.com/sounds/money.mp3",
    monkey: "https://static.bitsbox.com/sounds/monkey.mp3",
    monster: "https://static.bitsbox.com/sounds/monster.mp3",
    moo: "https://static.bitsbox.com/sounds/moo.mp3",
    moose: "https://static.bitsbox.com/sounds/moose.mp3",
    motor: "https://static.bitsbox.com/sounds/motor.mp3",
    mouse: "https://static.bitsbox.com/sounds/mouse.mp3",
    moustache: "https://static.bitsbox.com/sounds/moustache.mp3",
    mrfancy: "https://static.bitsbox.com/sounds/mrfancy.mp3",
    mummy: "https://static.bitsbox.com/sounds/mummy.mp3",
    music: "https://static.bitsbox.com/sounds/music.mp3",
    music1: "https://static.bitsbox.com/sounds/music1.mp3",
    mustache: "https://static.bitsbox.com/sounds/mustache.mp3",
    mystery: "https://static.bitsbox.com/sounds/mystery.mp3",
    nanobot: "https://static.bitsbox.com/sounds/nanobot.mp3",
    nature: "https://static.bitsbox.com/sounds/nature.mp3",
    neigh: "https://static.bitsbox.com/sounds/neigh.mp3",
    night: "https://static.bitsbox.com/sounds/night.mp3",
    ninja: "https://static.bitsbox.com/sounds/ninja.mp3",
    noises: "https://static.bitsbox.com/sounds/noises.mp3",
    note: "https://static.bitsbox.com/sounds/note.mp3",
    nuke: "https://static.bitsbox.com/sounds/nuke.mp3",
    octopus: "https://static.bitsbox.com/sounds/octopus.mp3",
    ogre: "https://static.bitsbox.com/sounds/ogre.mp3",
    oink: "https://static.bitsbox.com/sounds/oink.mp3",
    oldcarhorn: "https://static.bitsbox.com/sounds/oldcarhorn.mp3",
    oldman: "https://static.bitsbox.com/sounds/oldman.mp3",
    opera: "https://static.bitsbox.com/sounds/opera.mp3",
    ow: "https://static.bitsbox.com/sounds/ow.mp3",
    owl: "https://static.bitsbox.com/sounds/owl.mp3",
    ox: "https://static.bitsbox.com/sounds/ox.mp3",
    pacman: "https://static.bitsbox.com/sounds/pacman.mp3",
    pan: "https://static.bitsbox.com/sounds/pan.mp3",
    pans: "https://static.bitsbox.com/sounds/pans.mp3",
    paper: "https://static.bitsbox.com/sounds/paper.mp3",
    park: "https://static.bitsbox.com/sounds/park.mp3",
    parrot: "https://static.bitsbox.com/sounds/parrot.mp3",
    parrot2: "https://static.bitsbox.com/sounds/parrot2.mp3",
    parrot3: "https://static.bitsbox.com/sounds/parrot3.mp3",
    party: "https://static.bitsbox.com/sounds/party.mp3",
    peekaboo: "https://static.bitsbox.com/sounds/peekaboo.mp3",
    peep: "https://static.bitsbox.com/sounds/peep.mp3",
    pellet: "https://static.bitsbox.com/sounds/pellet.mp3",
    penguin: "https://static.bitsbox.com/sounds/penguin.mp3",
    person: "https://static.bitsbox.com/sounds/person.mp3",
    phone: "https://static.bitsbox.com/sounds/phone.mp3",
    piano: "https://static.bitsbox.com/sounds/piano.mp3",
    piano2: "https://static.bitsbox.com/sounds/piano2.mp3",
    pianoa: "https://static.bitsbox.com/sounds/pianoa.mp3",
    pianob: "https://static.bitsbox.com/sounds/pianob.mp3",
    pianoc: "https://static.bitsbox.com/sounds/pianoc.mp3",
    pianod: "https://static.bitsbox.com/sounds/pianod.mp3",
    pianoe: "https://static.bitsbox.com/sounds/pianoe.mp3",
    pianof: "https://static.bitsbox.com/sounds/pianof.mp3",
    pianog: "https://static.bitsbox.com/sounds/pianog.mp3",
    pie: "https://static.bitsbox.com/sounds/pie.mp3",
    pig: "https://static.bitsbox.com/sounds/pig.mp3",
    pig5: "https://static.bitsbox.com/sounds/pig5.mp3",
    plane: "https://static.bitsbox.com/sounds/plane.mp3",
    playball: "https://static.bitsbox.com/sounds/playball.mp3",
    plop: "https://static.bitsbox.com/sounds/plop.mp3",
    plunger: "https://static.bitsbox.com/sounds/plunger.mp3",
    point: "https://static.bitsbox.com/sounds/point.mp3",
    police: "https://static.bitsbox.com/sounds/police.mp3",
    poop: "https://static.bitsbox.com/sounds/poop.mp3",
    pop: "https://static.bitsbox.com/sounds/pop.mp3",
    pop2: "https://static.bitsbox.com/sounds/pop2.mp3",
    popcoin: "https://static.bitsbox.com/sounds/popcoin.mp3",
    popcorn: "https://static.bitsbox.com/sounds/popcorn.mp3",
    pot: "https://static.bitsbox.com/sounds/pot.mp3",
    pow: "https://static.bitsbox.com/sounds/pow.mp3",
    power: "https://static.bitsbox.com/sounds/power.mp3",
    powerup: "https://static.bitsbox.com/sounds/powerup.mp3",
    princess: "https://static.bitsbox.com/sounds/princess.mp3",
    pteranodon: "https://static.bitsbox.com/sounds/pteranodon.mp3",
    pug: "https://static.bitsbox.com/sounds/pug.mp3",
    punch: "https://static.bitsbox.com/sounds/punch.mp3",
    purr: "https://static.bitsbox.com/sounds/purr.mp3",
    puttputt: "https://static.bitsbox.com/sounds/puttputt.mp3",
    quack: "https://static.bitsbox.com/sounds/quack.mp3",
    rabbit: "https://static.bitsbox.com/sounds/rabbit.mp3",
    race: "https://static.bitsbox.com/sounds/race.mp3",
    racecar: "https://static.bitsbox.com/sounds/racecar.mp3",
    racer: "https://static.bitsbox.com/sounds/racer.mp3",
    radio: "https://static.bitsbox.com/sounds/radio.mp3",
    rain: "https://static.bitsbox.com/sounds/rain.mp3",
    rainbow: "https://static.bitsbox.com/sounds/rainbow.mp3",
    raindrop: "https://static.bitsbox.com/sounds/raindrop.mp3",
    random: "https://static.bitsbox.com/sounds/random.mp3",
    rattle: "https://static.bitsbox.com/sounds/rattle.mp3",
    rawr: "https://static.bitsbox.com/sounds/rawr.mp3",
    rayshot: "https://static.bitsbox.com/sounds/rayshot.mp3",
    rewind: "https://static.bitsbox.com/sounds/rewind.mp3",
    ribbit: "https://static.bitsbox.com/sounds/ribbit.mp3",
    ricochet: "https://static.bitsbox.com/sounds/ricochet.mp3",
    ring: "https://static.bitsbox.com/sounds/ring.mp3",
    ringing: "https://static.bitsbox.com/sounds/ringing.mp3",
    rip: "https://static.bitsbox.com/sounds/rip.mp3",
    river: "https://static.bitsbox.com/sounds/river.mp3",
    roar: "https://static.bitsbox.com/sounds/roar.mp3",
    robot: "https://static.bitsbox.com/sounds/robot.mp3",
    robot2: "https://static.bitsbox.com/sounds/robot2.mp3",
    robot5: "https://static.bitsbox.com/sounds/robot5.mp3",
    rock: "https://static.bitsbox.com/sounds/rock.mp3",
    rockandroll: "https://static.bitsbox.com/sounds/rockandroll.mp3",
    rocket: "https://static.bitsbox.com/sounds/rocket.mp3",
    rocket2: "https://static.bitsbox.com/sounds/rocket2.mp3",
    rocket3: "https://static.bitsbox.com/sounds/rocket3.mp3",
    rocket5: "https://static.bitsbox.com/sounds/rocket5.mp3",
    rocket7: "https://static.bitsbox.com/sounds/rocket7.mp3",
    rockets: "https://static.bitsbox.com/sounds/rockets.mp3",
    rooster: "https://static.bitsbox.com/sounds/rooster.mp3",
    rumble: "https://static.bitsbox.com/sounds/rumble.mp3",
    runningwater: "https://static.bitsbox.com/sounds/runningwater.mp3",
    runway: "https://static.bitsbox.com/sounds/runway.mp3",
    sad: "https://static.bitsbox.com/sounds/sad.mp3",
    sax: "https://static.bitsbox.com/sounds/sax.mp3",
    saxophone: "https://static.bitsbox.com/sounds/saxophone.mp3",
    scared: "https://static.bitsbox.com/sounds/scared.mp3",
    scary: "https://static.bitsbox.com/sounds/scary.mp3",
    scratch: "https://static.bitsbox.com/sounds/scratch.mp3",
    scream: "https://static.bitsbox.com/sounds/scream.mp3",
    scream1: "https://static.bitsbox.com/sounds/scream1.mp3",
    scream2: "https://static.bitsbox.com/sounds/scream2.mp3",
    scream3: "https://static.bitsbox.com/sounds/scream3.mp3",
    screaming: "https://static.bitsbox.com/sounds/screaming.mp3",
    screams: "https://static.bitsbox.com/sounds/screams.mp3",
    screech: "https://static.bitsbox.com/sounds/screech.mp3",
    sea: "https://static.bitsbox.com/sounds/sea.mp3",
    select: "https://static.bitsbox.com/sounds/select.mp3",
    servo: "https://static.bitsbox.com/sounds/servo.mp3",
    shark: "https://static.bitsbox.com/sounds/shark.mp3",
    sharpen: "https://static.bitsbox.com/sounds/sharpen.mp3",
    sheep: "https://static.bitsbox.com/sounds/sheep.mp3",
    sheep2: "https://static.bitsbox.com/sounds/sheep2.mp3",
    shew: "https://static.bitsbox.com/sounds/shew.mp3",
    ship: "https://static.bitsbox.com/sounds/ship.mp3",
    shock: "https://static.bitsbox.com/sounds/shock.mp3",
    shot: "https://static.bitsbox.com/sounds/shot.mp3",
    shotgun: "https://static.bitsbox.com/sounds/shotgun.mp3",
    shots: "https://static.bitsbox.com/sounds/shots.mp3",
    shout: "https://static.bitsbox.com/sounds/shout.mp3",
    show: "https://static.bitsbox.com/sounds/show.mp3",
    shower: "https://static.bitsbox.com/sounds/shower.mp3",
    shriek: "https://static.bitsbox.com/sounds/shriek.mp3",
    sing: "https://static.bitsbox.com/sounds/sing.mp3",
    singing: "https://static.bitsbox.com/sounds/singing.mp3",
    sink: "https://static.bitsbox.com/sounds/sink.mp3",
    siren: "https://static.bitsbox.com/sounds/siren.mp3",
    sizzle: "https://static.bitsbox.com/sounds/sizzle.mp3",
    skitter: "https://static.bitsbox.com/sounds/skitter.mp3",
    sky: "https://static.bitsbox.com/sounds/sky.mp3",
    slam: "https://static.bitsbox.com/sounds/slam.mp3",
    slap: "https://static.bitsbox.com/sounds/slap.mp3",
    slapshot: "https://static.bitsbox.com/sounds/slapshot.mp3",
    slash: "https://static.bitsbox.com/sounds/slash.mp3",
    slice: "https://static.bitsbox.com/sounds/slice.mp3",
    slow: "https://static.bitsbox.com/sounds/slow.mp3",
    smack: "https://static.bitsbox.com/sounds/smack.mp3",
    smash: "https://static.bitsbox.com/sounds/smash.mp3",
    snap: "https://static.bitsbox.com/sounds/snap.mp3",
    snare: "https://static.bitsbox.com/sounds/snare.mp3",
    sneeze: "https://static.bitsbox.com/sounds/sneeze.mp3",
    snore: "https://static.bitsbox.com/sounds/snore.mp3",
    song: "https://static.bitsbox.com/sounds/song.mp3",
    songs: "https://static.bitsbox.com/sounds/songs.mp3",
    sound: "https://static.bitsbox.com/sounds/sound.mp3",
    spaceinvaders: "https://static.bitsbox.com/sounds/spaceinvaders.mp3",
    spaceship: "https://static.bitsbox.com/sounds/spaceship.mp3",
    sparkle: "https://static.bitsbox.com/sounds/sparkle.mp3",
    spider: "https://static.bitsbox.com/sounds/spider.mp3",
    spin: "https://static.bitsbox.com/sounds/spin.mp3",
    spinosaurus: "https://static.bitsbox.com/sounds/spinosaurus.mp3",
    splash: "https://static.bitsbox.com/sounds/splash.mp3",
    splash2: "https://static.bitsbox.com/sounds/splash2.mp3",
    splat: "https://static.bitsbox.com/sounds/splat.mp3",
    splat2: "https://static.bitsbox.com/sounds/splat2.mp3",
    splotch: "https://static.bitsbox.com/sounds/splotch.mp3",
    spring: "https://static.bitsbox.com/sounds/spring.mp3",
    sprite: "https://static.bitsbox.com/sounds/sprite.mp3",
    spy: "https://static.bitsbox.com/sounds/spy.mp3",
    squash: "https://static.bitsbox.com/sounds/squash.mp3",
    squawk: "https://static.bitsbox.com/sounds/squawk.mp3",
    squeak: "https://static.bitsbox.com/sounds/squeak.mp3",
    squeal: "https://static.bitsbox.com/sounds/squeal.mp3",
    squish: "https://static.bitsbox.com/sounds/squish.mp3",
    star: "https://static.bitsbox.com/sounds/star.mp3",
    stars: "https://static.bitsbox.com/sounds/stars.mp3",
    starwars: "https://static.bitsbox.com/sounds/starwars.mp3",
    stegosaurus: "https://static.bitsbox.com/sounds/stegosaurus.mp3",
    stomp: "https://static.bitsbox.com/sounds/stomp.mp3",
    stoplooking: "https://static.bitsbox.com/sounds/stoplooking.mp3",
    straw: "https://static.bitsbox.com/sounds/straw.mp3",
    suction: "https://static.bitsbox.com/sounds/suction.mp3",
    swim: "https://static.bitsbox.com/sounds/swim.mp3",
    swirl: "https://static.bitsbox.com/sounds/swirl.mp3",
    sword: "https://static.bitsbox.com/sounds/sword.mp3",
    takeoff: "https://static.bitsbox.com/sounds/takeoff.mp3",
    talarurus: "https://static.bitsbox.com/sounds/talarurus.mp3",
    talk: "https://static.bitsbox.com/sounds/talk.mp3",
    tap: "https://static.bitsbox.com/sounds/tap.mp3",
    teleport: "https://static.bitsbox.com/sounds/teleport.mp3",
    terminal: "https://static.bitsbox.com/sounds/terminal.mp3",
    thump: "https://static.bitsbox.com/sounds/thump.mp3",
    thump: "https://static.bitsbox.com/sounds/thump.wav",
    thunder: "https://static.bitsbox.com/sounds/thunder.mp3",
    thunder2: "https://static.bitsbox.com/sounds/thunder2.mp3",
    thunderstorm: "https://static.bitsbox.com/sounds/thunderstorm.mp3",
    tick: "https://static.bitsbox.com/sounds/tick.mp3",
    tiger: "https://static.bitsbox.com/sounds/tiger.mp3",
    toad: "https://static.bitsbox.com/sounds/toad.mp3",
    tock: "https://static.bitsbox.com/sounds/tock.mp3",
    toilet: "https://static.bitsbox.com/sounds/toilet.mp3",
    toiletflush: "https://static.bitsbox.com/sounds/toiletflush.mp3",
    tomtom: "https://static.bitsbox.com/sounds/tomtom.mp3",
    toot: "https://static.bitsbox.com/sounds/toot.mp3",
    topsecret: "https://static.bitsbox.com/sounds/topsecret.mp3",
    tornado: "https://static.bitsbox.com/sounds/tornado.mp3",
    train: "https://static.bitsbox.com/sounds/train.mp3",
    trash: "https://static.bitsbox.com/sounds/trash.mp3",
    treefrog: "https://static.bitsbox.com/sounds/treefrog.mp3",
    trex: "https://static.bitsbox.com/sounds/trex.mp3",
    trex2: "https://static.bitsbox.com/sounds/trex2.mp3",
    triceratops: "https://static.bitsbox.com/sounds/triceratops.mp3",
    troll: "https://static.bitsbox.com/sounds/troll.mp3",
    truck: "https://static.bitsbox.com/sounds/truck.mp3",
    trumpet: "https://static.bitsbox.com/sounds/trumpet.mp3",
    trumpet2: "https://static.bitsbox.com/sounds/trumpet2.mp3",
    turtle: "https://static.bitsbox.com/sounds/turtle.mp3",
    tv: "https://static.bitsbox.com/sounds/tv.mp3",
    tweet: "https://static.bitsbox.com/sounds/tweet.mp3",
    twinkle: "https://static.bitsbox.com/sounds/twinkle.mp3",
    type: "https://static.bitsbox.com/sounds/type.mp3",
    ufo: "https://static.bitsbox.com/sounds/ufo.mp3",
    ufo1: "https://static.bitsbox.com/sounds/ufo1.mp3",
    ufo2: "https://static.bitsbox.com/sounds/ufo2.mp3",
    ufo3: "https://static.bitsbox.com/sounds/ufo3.mp3",
    uh: "https://static.bitsbox.com/sounds/uh.mp3",
    underwater: "https://static.bitsbox.com/sounds/underwater.mp3",
    unicorn: "https://static.bitsbox.com/sounds/unicorn.mp3",
    velociraptor: "https://static.bitsbox.com/sounds/velociraptor.mp3",
    velociraptor2: "https://static.bitsbox.com/sounds/velociraptor2.mp3",
    victory: "https://static.bitsbox.com/sounds/victory.mp3",
    violin: "https://static.bitsbox.com/sounds/violin.mp3",
    virus: "https://static.bitsbox.com/sounds/virus.mp3",
    volcano: "https://static.bitsbox.com/sounds/volcano.mp3",
    vroom: "https://static.bitsbox.com/sounds/vroom.mp3",
    walk: "https://static.bitsbox.com/sounds/walk.mp3",
    walking: "https://static.bitsbox.com/sounds/walking.mp3",
    war: "https://static.bitsbox.com/sounds/war.mp3",
    warning: "https://static.bitsbox.com/sounds/warning.mp3",
    warp: "https://static.bitsbox.com/sounds/warp.mp3",
    water: "https://static.bitsbox.com/sounds/water.mp3",
    waterfall: "https://static.bitsbox.com/sounds/waterfall.mp3",
    wave: "https://static.bitsbox.com/sounds/wave.mp3",
    waves: "https://static.bitsbox.com/sounds/waves.mp3",
    whack: "https://static.bitsbox.com/sounds/whack.mp3",
    whale: "https://static.bitsbox.com/sounds/whale.mp3",
    wheeo: "https://static.bitsbox.com/sounds/wheeo.mp3",
    whip: "https://static.bitsbox.com/sounds/whip.mp3",
    whippersnappers: "https://static.bitsbox.com/sounds/whippersnappers.mp3",
    whoohoo: "https://static.bitsbox.com/sounds/whoohoo.mp3",
    whoosh: "https://static.bitsbox.com/sounds/whoosh.mp3",
    whoosh2: "https://static.bitsbox.com/sounds/whoosh2.mp3",
    wilhelm: "https://static.bitsbox.com/sounds/wilhelm.mp3",
    wind: "https://static.bitsbox.com/sounds/wind.mp3",
    witch: "https://static.bitsbox.com/sounds/witch.mp3",
    wolf: "https://static.bitsbox.com/sounds/wolf.mp3",
    wolf2: "https://static.bitsbox.com/sounds/wolf2.mp3",
    wonder: "https://static.bitsbox.com/sounds/wonder.mp3",
    woo: "https://static.bitsbox.com/sounds/woo.mp3",
    wood: "https://static.bitsbox.com/sounds/wood.mp3",
    woodchop: "https://static.bitsbox.com/sounds/woodchop.mp3",
    woodfish: "https://static.bitsbox.com/sounds/woodfish.mp3",
    woof: "https://static.bitsbox.com/sounds/woof.mp3",
    wooyah: "https://static.bitsbox.com/sounds/wooyah.mp3",
    yell: "https://static.bitsbox.com/sounds/yell.mp3",
    yelling: "https://static.bitsbox.com/sounds/yelling.mp3",
    yes: "https://static.bitsbox.com/sounds/yes.mp3",
    yeti: "https://static.bitsbox.com/sounds/yeti.mp3",
    yodel: "https://static.bitsbox.com/sounds/yodel.mp3",
    you: "https://static.bitsbox.com/sounds/you.mp3",
    yowl: "https://static.bitsbox.com/sounds/yowl.mp3",
    yum: "https://static.bitsbox.com/sounds/yum.mp3",
    zang: "https://static.bitsbox.com/sounds/zang.mp3",
    zap: "https://static.bitsbox.com/sounds/zap.mp3",
    zebra: "https://static.bitsbox.com/sounds/zebra.mp3",
    zoom: "https://static.bitsbox.com/sounds/zoom.mp3",
    zwoop: "https://static.bitsbox.com/sounds/zwoop.mp3"
};
c123 = c123 || {};
c123.songs = {
    1812: "https://static.bitsbox.com/songs/1812.mp3",
    achievement: "https://static.bitsbox.com/songs/achievement.mp3",
    alone: "https://static.bitsbox.com/songs/alone.mp3",
    america: "https://static.bitsbox.com/songs/america.mp3",
    anchors: "https://static.bitsbox.com/songs/anchors.mp3",
    angelo: "https://static.bitsbox.com/songs/angelo.mp3",
    anger: "https://static.bitsbox.com/songs/anger.mp3",
    assault: "https://static.bitsbox.com/songs/assault.mp3",
    auldlangsyne: "https://static.bitsbox.com/songs/auldlangsyne.mp3",
    babyblue: "https://static.bitsbox.com/songs/babyblue.mp3",
    bamboo: "https://static.bitsbox.com/songs/bamboo.mp3",
    battlehymn: "https://static.bitsbox.com/songs/battlehymn.mp3",
    bigrock: "https://static.bitsbox.com/songs/bigrock.mp3",
    bitsnboxn: "https://static.bitsbox.com/songs/bitsnboxn.mp3",
    boat: "https://static.bitsbox.com/songs/boat.mp3",
    borders: "https://static.bitsbox.com/songs/borders.mp3",
    brass: "https://static.bitsbox.com/songs/brass.mp3",
    brothers: "https://static.bitsbox.com/songs/brothers.mp3",
    brute: "https://static.bitsbox.com/songs/brute.mp3",
    bumblebee: "https://static.bitsbox.com/songs/bumblebee.mp3",
    cafe: "https://static.bitsbox.com/songs/cafe.mp3",
    caisson: "https://static.bitsbox.com/songs/caisson.mp3",
    canon: "https://static.bitsbox.com/songs/canon.mp3",
    carmen: "https://static.bitsbox.com/songs/carmen.mp3",
    castle: "https://static.bitsbox.com/songs/castle.mp3",
    catswing: "https://static.bitsbox.com/songs/catswing.mp3",
    chinasnow: "https://static.bitsbox.com/songs/chinasnow.mp3",
    clownaround: "https://static.bitsbox.com/songs/clownaround.mp3",
    countrywaltz: "https://static.bitsbox.com/songs/countrywaltz.mp3",
    cowboy: "https://static.bitsbox.com/songs/cowboy.mp3",
    crackling: "https://static.bitsbox.com/songs/crackling.mp3",
    crash: "https://static.bitsbox.com/songs/crash.mp3",
    crazyrun: "https://static.bitsbox.com/songs/crazyrun.mp3",
    critical: "https://static.bitsbox.com/songs/critical.mp3",
    cruising: "https://static.bitsbox.com/songs/cruising.mp3",
    cute: "https://static.bitsbox.com/songs/cute.mp3",
    dangerahead: "https://static.bitsbox.com/songs/dangerahead.mp3",
    danube: "https://static.bitsbox.com/songs/danube.mp3",
    darkhop: "https://static.bitsbox.com/songs/darkhop.mp3",
    dawn: "https://static.bitsbox.com/songs/dawn.mp3",
    deckthehalls: "https://static.bitsbox.com/songs/deckthehalls.mp3",
    demons: "https://static.bitsbox.com/songs/demons.mp3",
    despair: "https://static.bitsbox.com/songs/despair.mp3",
    dirt: "https://static.bitsbox.com/songs/dirt.mp3",
    downunder: "https://static.bitsbox.com/songs/downunder.mp3",
    dreaming: "https://static.bitsbox.com/songs/dreaming.mp3",
    drumpursuit: "https://static.bitsbox.com/songs/drumpursuit.mp3",
    duet: "https://static.bitsbox.com/songs/duet.mp3",
    dynasty: "https://static.bitsbox.com/songs/dynasty.mp3",
    east: "https://static.bitsbox.com/songs/east.mp3",
    easy: "https://static.bitsbox.com/songs/easy.mp3",
    energy: "https://static.bitsbox.com/songs/energy.mp3",
    entrance: "https://static.bitsbox.com/songs/entrance.mp3",
    evil: "https://static.bitsbox.com/songs/evil.mp3",
    explosions: "https://static.bitsbox.com/songs/explosions.mp3",
    faire: "https://static.bitsbox.com/songs/faire.mp3",
    falling: "https://static.bitsbox.com/songs/falling.mp3",
    fanfare: "https://static.bitsbox.com/songs/fanfare.mp3",
    farm: "https://static.bitsbox.com/songs/farm.mp3",
    fate: "https://static.bitsbox.com/songs/fate.mp3",
    feast: "https://static.bitsbox.com/songs/feast.mp3",
    finland: "https://static.bitsbox.com/songs/finland.mp3",
    flag: "https://static.bitsbox.com/songs/flag.mp3",
    forces: "https://static.bitsbox.com/songs/forces.mp3",
    funky: "https://static.bitsbox.com/songs/funky.mp3",
    furelise: "https://static.bitsbox.com/songs/furelise.mp3",
    grass: "https://static.bitsbox.com/songs/grass.mp3",
    greatness: "https://static.bitsbox.com/songs/greatness.mp3",
    greatparade: "https://static.bitsbox.com/songs/greatparade.mp3",
    greensleeves: "https://static.bitsbox.com/songs/greensleeves.mp3",
    gritty: "https://static.bitsbox.com/songs/gritty.mp3",
    happy: "https://static.bitsbox.com/songs/happy.mp3",
    heaven: "https://static.bitsbox.com/songs/heaven.mp3",
    heavy: "https://static.bitsbox.com/songs/heavy.mp3",
    hungarian: "https://static.bitsbox.com/songs/hungarian.mp3",
    hunter: "https://static.bitsbox.com/songs/hunter.mp3",
    jazzstrut: "https://static.bitsbox.com/songs/jazzstrut.mp3",
    lands: "https://static.bitsbox.com/songs/lands.mp3",
    latin: "https://static.bitsbox.com/songs/latin.mp3",
    lessons: "https://static.bitsbox.com/songs/lessons.mp3",
    longtrails: "https://static.bitsbox.com/songs/longtrails.mp3",
    love: "https://static.bitsbox.com/songs/love.mp3",
    lovebirds: "https://static.bitsbox.com/songs/lovebirds.mp3",
    madness: "https://static.bitsbox.com/songs/madness.mp3",
    madrid: "https://static.bitsbox.com/songs/madrid.mp3",
    march: "https://static.bitsbox.com/songs/march.mp3",
    matrix: "https://static.bitsbox.com/songs/matrix.mp3",
    menace: "https://static.bitsbox.com/songs/menace.mp3",
    menacing: "https://static.bitsbox.com/songs/menacing.mp3",
    menuscreen: "https://static.bitsbox.com/songs/menuscreen.mp3",
    mercury: "https://static.bitsbox.com/songs/mercury.mp3",
    merrygo: "https://static.bitsbox.com/songs/merrygo.mp3",
    moonlitpath: "https://static.bitsbox.com/songs/moonlitpath.mp3",
    mountain: "https://static.bitsbox.com/songs/mountain.mp3",
    obstacles: "https://static.bitsbox.com/songs/obstacles.mp3",
    ocean: "https://static.bitsbox.com/songs/ocean.mp3",
    panda: "https://static.bitsbox.com/songs/panda.mp3",
    panoramic: "https://static.bitsbox.com/songs/panoramic.mp3",
    parade: "https://static.bitsbox.com/songs/parade.mp3",
    paradise: "https://static.bitsbox.com/songs/paradise.mp3",
    patriotic: "https://static.bitsbox.com/songs/patriotic.mp3",
    patrol: "https://static.bitsbox.com/songs/patrol.mp3",
    polka: "https://static.bitsbox.com/songs/polka.mp3",
    predator: "https://static.bitsbox.com/songs/predator.mp3",
    psycho: "https://static.bitsbox.com/songs/psycho.wav",
    punk: "https://static.bitsbox.com/songs/punk.mp3",
    rave: "https://static.bitsbox.com/songs/rave.mp3",
    "return": "https://static.bitsbox.com/songs/return.mp3",
    rhythm: "https://static.bitsbox.com/songs/rhythm.mp3",
    rockparty: "https://static.bitsbox.com/songs/rockparty.mp3",
    rockrailroad: "https://static.bitsbox.com/songs/rockrailroad.mp3",
    royal: "https://static.bitsbox.com/songs/royal.mp3",
    run: "https://static.bitsbox.com/songs/run.mp3",
    runaway: "https://static.bitsbox.com/songs/runaway.mp3",
    silk: "https://static.bitsbox.com/songs/silk.mp3",
    silly: "https://static.bitsbox.com/songs/silly.mp3",
    skies: "https://static.bitsbox.com/songs/skies.mp3",
    sleep: "https://static.bitsbox.com/songs/sleep.mp3",
    snow: "https://static.bitsbox.com/songs/snow.mp3",
    sorrow: "https://static.bitsbox.com/songs/sorrow.mp3",
    space: "https://static.bitsbox.com/songs/space.mp3",
    spanish: "https://static.bitsbox.com/songs/spanish.mp3",
    spiral: "https://static.bitsbox.com/songs/spiral.mp3",
    spirited: "https://static.bitsbox.com/songs/spirited.mp3",
    sporting: "https://static.bitsbox.com/songs/sporting.mp3",
    spy: "https://static.bitsbox.com/songs/spy.mp3",
    square: "https://static.bitsbox.com/songs/square.mp3",
    squaredance: "https://static.bitsbox.com/songs/squaredance.mp3",
    starspangled: "https://static.bitsbox.com/songs/starspangled.mp3",
    storm: "https://static.bitsbox.com/songs/storm.mp3",
    style: "https://static.bitsbox.com/songs/style.mp3",
    tempo: "https://static.bitsbox.com/songs/tempo.mp3",
    tender: "https://static.bitsbox.com/songs/tender.mp3",
    tension: "https://static.bitsbox.com/songs/tension.mp3",
    time: "https://static.bitsbox.com/songs/time.mp3",
    timetoflight: "https://static.bitsbox.com/songs/timetoflight.mp3",
    traffic: "https://static.bitsbox.com/songs/traffic.mp3",
    ugly: "https://static.bitsbox.com/songs/ugly.mp3",
    unrelenting: "https://static.bitsbox.com/songs/unrelenting.mp3",
    unstable: "https://static.bitsbox.com/songs/unstable.mp3",
    urgent: "https://static.bitsbox.com/songs/urgent.mp3",
    valiant: "https://static.bitsbox.com/songs/valiant.mp3",
    village: "https://static.bitsbox.com/songs/village.mp3",
    vortex: "https://static.bitsbox.com/songs/vortex.mp3",
    walkingaround: "https://static.bitsbox.com/songs/walkingaround.mp3",
    waltz: "https://static.bitsbox.com/songs/waltz.mp3",
    warfare: "https://static.bitsbox.com/songs/warfare.mp3",
    warrior: "https://static.bitsbox.com/songs/warrior.mp3",
    washington: "https://static.bitsbox.com/songs/washington.mp3",
    western: "https://static.bitsbox.com/songs/western.mp3",
    westward: "https://static.bitsbox.com/songs/westward.mp3",
    whistle: "https://static.bitsbox.com/songs/whistle.mp3",
    winds: "https://static.bitsbox.com/songs/winds.mp3",
    wonders: "https://static.bitsbox.com/songs/wonders.mp3",
    world: "https://static.bitsbox.com/songs/world.mp3"
};
c123 = c123 || {};
c123.stamps = {
    codi: {
        hideInAssetsPanel: !0
    },
    amanda: {
        hideInAssetsPanel: !0
    },
    brandi: {
        hideInAssetsPanel: !0
    },
    kent: {
        hideInAssetsPanel: !0
    },
    vernon: {
        hideInAssetsPanel: !0
    },
    pit2: {
        hitWidth: 200,
        hitHeight: 200
    },
    mercury: {
        width: 39,
        height: 39
    },
    mercury2: {
        width: 39,
        height: 39
    },
    venus: {
        width: 90,
        height: 90
    },
    venus2: {
        width: 90,
        height: 90
    },
    earth: {
        width: 91,
        height: 91
    },
    earth3: {
        width: 91,
        height: 91
    },
    mars: {
        width: 48,
        height: 48
    },
    mars2: {
        width: 48,
        height: 48
    },
    jupiter: {
        width: 968,
        height: 968
    },
    jupiter2: {
        width: 968,
        height: 968
    },
    saturn: {
        width: 1960,
        height: 1960,
        hitWidth: 1E3,
        hitHeight: 1E3
    },
    saturn3: {
        width: 1960,
        height: 1960
    },
    uranus: {
        width: 364,
        height: 364
    },
    uranus2: {
        width: 364,
        height: 364
    },
    neptune: {
        width: 348,
        height: 348
    },
    neptune2: {
        width: 348,
        height: 348
    },
    pluto: {
        width: 16,
        height: 16
    },
    pluto8: {
        width: 16,
        height: 16
    },
    sun: {
        width: 300,
        height: 300
    },
    kerstman: {
        loops: 999
    },
    sint: {
        loops: 999
    },
    kerstboom: {
        hideInAssetsPanel: !0
    },
    kerstman: {
        hideInAssetsPanel: !0
    },
    cadeau: {
        hideInAssetsPanel: !0
    },
    pepernoot: {
        hideInAssetsPanel: !0
    },
    sint: {
        hideInAssetsPanel: !0
    },
    turkey5: {
        loops: 999
    },
    algeria: {
        thumbBackground: "#808080"
    },
    behrain: {
        thumbBackground: "#808080"
    },
    bulgaria: {
        thumbBackground: "#808080"
    },
    chile: {
        thumbBackground: "#808080"
    },
    cyprus: {
        thumbBackground: "#808080"
    },
    czechrepublic: {
        thumbBackground: "#808080"
    },
    estonia: {
        thumbBackground: "#808080"
    },
    finland: {
        thumbBackground: "#808080"
    },
    georgia: {
        thumbBackground: "#808080"
    },
    holysee: {
        thumbBackground: "#808080"
    },
    indonesia: {
        thumbBackground: "#808080"
    },
    japan: {
        thumbBackground: "#808080"
    },
    madagascar: {
        thumbBackground: "#808080"
    },
    malta: {
        thumbBackground: "#808080"
    },
    monaco: {
        thumbBackground: "#808080"
    },
    nepal: {
        thumbBackground: "#808080"
    },
    nigeria: {
        thumbBackground: "#808080"
    },
    oman: {
        thumbBackground: "#808080"
    },
    pakistan: {
        thumbBackground: "#808080"
    },
    panama: {
        thumbBackground: "#808080"
    },
    poland: {
        thumbBackground: "#808080"
    },
    qatar: {
        thumbBackground: "#808080"
    },
    russia: {
        thumbBackground: "#808080"
    },
    sanmarino: {
        thumbBackground: "#808080"
    },
    serbia: {
        thumbBackground: "#808080"
    },
    singapore: {
        thumbBackground: "#808080"
    },
    slovakia: {
        thumbBackground: "#808080"
    },
    slovenia: {
        thumbBackground: "#808080"
    },
    southkorea: {
        thumbBackground: "#808080"
    },
    tonga: {
        thumbBackground: "#808080"
    },
    uruguay: {
        thumbBackground: "#808080"
    },
    vaticancity: {
        thumbBackground: "#808080"
    },
    donut7: {
        loops: 999
    },
    donut8: {
        loops: 999
    },
    donut9: {
        loops: 999
    },
    donut10: {
        loops: 999
    },
    poisondonut: {
        loops: 999
    },
    "24phonewhite": {
        thumbBackground: "#808080"
    },
    bagwhite: {
        thumbBackground: "#808080"
    },
    bakesale2: {
        thumbBackground: "#808080"
    },
    basket2white: {
        thumbBackground: "#808080"
    },
    box2white: {
        thumbBackground: "#808080"
    },
    cardswhite: {
        thumbBackground: "#808080"
    },
    cart2white: {
        thumbBackground: "#808080"
    },
    cart3white: {
        thumbBackground: "#808080"
    },
    cartwhite: {
        thumbBackground: "#808080"
    },
    gift5white: {
        thumbBackground: "#808080"
    },
    heart6white: {
        thumbBackground: "#808080"
    },
    lock2white: {
        thumbBackground: "#808080"
    },
    messagewhite: {
        thumbBackground: "#808080"
    },
    money2white: {
        thumbBackground: "#808080"
    },
    newwhite: {
        thumbBackground: "#808080"
    },
    ribbon2white: {
        thumbBackground: "#808080"
    },
    salewhite: {
        thumbBackground: "#808080"
    },
    shippingwhite: {
        thumbBackground: "#808080"
    },
    statswhite: {
        thumbBackground: "#808080"
    },
    truck14white: {
        thumbBackground: "#808080"
    },
    umbrella3white: {
        thumbBackground: "#808080"
    },
    zoomwhite: {
        thumbBackground: "#808080"
    },
    ninja7: {
        loops: 999,
        hitWidth: 100,
        hitHeight: 100
    },
    donut6: {
        loops: 999
    },
    bird20: {
        loops: 999
    },
    desertcactus: {
        width: 1536,
        height: 1024
    },
    grayspires: {
        width: 1536,
        height: 1024
    },
    pinkcraters: {
        width: 1536,
        height: 1024
    },
    purplemountains: {
        width: 1536,
        height: 1024
    },
    reddishrocks: {
        width: 1536,
        height: 1024
    },
    yellowmountains: {
        width: 1536,
        height: 1024
    },
    bottletrees: {
        width: 1536,
        height: 1024
    },
    eyeballbushes: {
        width: 1536,
        height: 1024
    },
    grassyground: {
        width: 1536,
        height: 1024
    },
    greenmountains: {
        width: 1536,
        height: 1024
    },
    growythings: {
        width: 1536,
        height: 1024
    },
    mossyground: {
        width: 1536,
        height: 1024
    },
    orangecliffs: {
        width: 1536,
        height: 1024
    },
    purplecliffs: {
        width: 1536,
        height: 1024
    },
    purplecraters: {
        width: 1536,
        height: 1024
    },
    rootedground: {
        width: 1536,
        height: 1024
    },
    sandycliffs: {
        width: 1536,
        height: 1024
    },
    spiralbushes: {
        width: 1536,
        height: 1024
    },
    racoon: {
        hideInAssetsPanel: !0
    },
    racoon3: {
        hideInAssetsPanel: !0
    },
    falefel: {
        hideInAssetsPanel: !0
    },
    egg7: {
        hitWidth: 200,
        hitHeight: 200
    },
    firetruck2: {
        loops: 999
    },
    target6: {
        hitWidth: 50,
        hitHeight: 50
    },
    hoop: {
        hitWidth: 150,
        hitHeight: 40
    },
    electricstickmanvip: {
        hideInAssetsPanel: !0
    },
    flamingstickmanvip: {
        hideInAssetsPanel: !0
    },
    karategirlvip: {
        hideInAssetsPanel: !0
    },
    pikachuvip: {
        hideInAssetsPanel: !0
    },
    stickfigurevip: {
        hideInAssetsPanel: !0
    },
    stickfigure2vip: {
        hideInAssetsPanel: !0
    },
    stickghostvip: {
        hideInAssetsPanel: !0
    },
    stickheavenvip: {
        hideInAssetsPanel: !0
    },
    stickmustachemanvip: {
        hideInAssetsPanel: !0
    },
    sticksnowmanvip: {
        hideInAssetsPanel: !0
    },
    arrow8: {
        thumbBackground: "#808080"
    },
    ninjanickpants: {
        hideInAssetsPanel: !0
    },
    flyswatter: {
        hitWidth: 200,
        hitHeight: 120
    },
    bugcoin: {
        loops: 999,
        width: 100,
        height: 100
    },
    bird11: {
        loops: 999,
        width: 100,
        height: 100
    },
    bird12: {
        loops: 999,
        width: 100,
        height: 100
    },
    bird13: {
        loops: 999,
        width: 100,
        height: 100
    },
    bird14: {
        loops: 999,
        width: 100,
        height: 100
    },
    bird15: {
        loops: 999,
        width: 100,
        height: 100
    },
    bird16: {
        loops: 999,
        width: 100,
        height: 100
    },
    spaceship3: {
        hitWidth: 50,
        hitHeight: 50
    },
    apple: {
        width: 120,
        height: 120
    },
    pencil: {
        width: 120,
        height: 120
    },
    rainbow: {
        width: 120,
        height: 120
    },
    cherry: {
        width: 120,
        height: 120
    },
    cherries: {
        width: 120,
        height: 120
    },
    b: {
        width: 120,
        height: 120
    },
    cloud: {
        width: 120,
        height: 120
    },
    hamburger: {
        width: 120,
        height: 120
    },
    burger: {
        width: 120,
        height: 120
    },
    girl: {
        width: 120,
        height: 120
    },
    boy: {
        width: 120,
        height: 120
    },
    girl2: {
        width: 120,
        height: 120
    },
    popsicle: {
        width: 120,
        height: 120
    },
    phone: {
        width: 120,
        height: 120
    },
    cellphone: {
        width: 120,
        height: 120
    },
    icecream: {
        width: 120,
        height: 120
    },
    icecreamcone: {
        width: 120,
        height: 120
    },
    cola: {
        width: 120,
        height: 120
    },
    soda: {
        width: 120,
        height: 120
    },
    notebook: {
        width: 120,
        height: 120
    },
    diary: {
        width: 120,
        height: 120
    },
    cookie: {
        width: 120,
        height: 120
    },
    watermelon: {
        width: 120,
        height: 120
    },
    melon: {
        width: 120,
        height: 120
    },
    drink: {
        width: 120,
        height: 120
    },
    glass: {
        width: 120,
        height: 120
    },
    tree: {
        width: 120,
        height: 120
    },
    flower: {
        width: 120,
        height: 120
    },
    bow: {
        width: 120,
        height: 120
    },
    bowtie: {
        width: 120,
        height: 120
    },
    tie: {
        width: 120,
        height: 120
    },
    bandaid: {
        width: 120,
        height: 120
    },
    bandage: {
        width: 120,
        height: 120
    },
    heart: {
        width: 120,
        height: 120
    },
    love: {
        width: 120,
        height: 120
    },
    ball: {
        width: 120,
        height: 120
    },
    soccer: {
        width: 120,
        height: 120
    },
    strawberry: {
        width: 120,
        height: 120
    },
    dogbowl: {
        width: 120,
        height: 120
    },
    mug: {
        width: 120,
        height: 120
    },
    cup: {
        width: 120,
        height: 120
    },
    coffee: {
        width: 120,
        height: 120
    },
    paintbrush: {
        width: 120,
        height: 120
    },
    brush: {
        width: 120,
        height: 120
    },
    carrot: {
        width: 120,
        height: 120
    },
    note: {
        width: 120,
        height: 120
    },
    musicalnote: {
        width: 120,
        height: 120
    },
    brush2: {
        width: 120,
        height: 120
    },
    paintbrush2: {
        width: 120,
        height: 120
    },
    hat: {
        width: 120,
        height: 120
    },
    partyhat: {
        width: 120,
        height: 120
    },
    disk: {
        width: 120,
        height: 120
    },
    floppy: {
        width: 120,
        height: 120
    },
    floppydisk: {
        width: 120,
        height: 120
    },
    star: {
        width: 120,
        height: 120
    },
    bone: {
        width: 120,
        height: 120,
        hitHeight: 60,
        hitWidth: 120
    },
    lime: {
        width: 120,
        height: 120
    },
    pen: {
        width: 120,
        height: 120
    },
    letter: {
        width: 120,
        height: 120
    },
    envelope: {
        width: 120,
        height: 120
    },
    shirt: {
        width: 120,
        height: 120
    },
    tshirt: {
        width: 120,
        height: 120
    },
    tv: {
        width: 120,
        height: 120
    },
    television: {
        width: 120,
        height: 120
    },
    bowl: {
        width: 120,
        height: 120
    },
    book: {
        width: 120,
        height: 120
    },
    shoe: {
        width: 120,
        height: 120
    },
    cupcake: {
        width: 120,
        height: 120
    },
    can: {
        width: 120,
        height: 120
    },
    usbdrive: {
        width: 120,
        height: 120
    },
    jumpdrive: {
        width: 120,
        height: 120
    },
    drive: {
        width: 120,
        height: 120
    },
    pear: {
        width: 120,
        height: 120
    },
    beachball: {
        width: 120,
        height: 120
    },
    popsicle2: {
        width: 120,
        height: 120
    },
    orange: {
        width: 120,
        height: 120
    },
    moon2: {
        width: 120,
        height: 120
    },
    asteroid: {
        width: 120,
        height: 120
    },
    nova: {
        width: 120,
        height: 120
    },
    explosion: {
        width: 120,
        height: 120
    },
    email: {
        width: 120,
        height: 120
    },
    share: {
        width: 120,
        height: 120
    },
    beccabotvip: {
        hideInAssetsPanel: !0
    },
    bitsboxdrawingvip: {
        hideInAssetsPanel: !0
    },
    carsonbotvip: {
        hideInAssetsPanel: !0
    },
    finvip: {
        hideInAssetsPanel: !0
    },
    machamponmountainvip: {
        hideInAssetsPanel: !0
    },
    maildayvip: {
        hideInAssetsPanel: !0
    },
    smileyheartvip: {
        hideInAssetsPanel: !0
    },
    thumbsupvip: {
        hideInAssetsPanel: !0
    },
    happypottervip: {
        hideInAssetsPanel: !0
    },
    campgroundvip: {
        hideInAssetsPanel: !0
    },
    catfacevip: {
        hideInAssetsPanel: !0
    },
    chickenvip: {
        hideInAssetsPanel: !0
    },
    codersuperherovip: {
        hideInAssetsPanel: !0
    },
    colorsvip: {
        hideInAssetsPanel: !0
    },
    destroyervip: {
        hideInAssetsPanel: !0
    },
    dog4vip: {
        hideInAssetsPanel: !0
    },
    drawafacevip: {
        hideInAssetsPanel: !0
    },
    evelynvip: {
        hideInAssetsPanel: !0
    },
    happyfacevip: {
        hideInAssetsPanel: !0
    },
    jillianvip: {
        hideInAssetsPanel: !0
    },
    kingoffishvip: {
        hideInAssetsPanel: !0
    },
    letsgobitsboxvip: {
        hideInAssetsPanel: !0
    },
    mermaidsvssharksvip: {
        hideInAssetsPanel: !0
    },
    nofaceonelegwizzardvip: {
        hideInAssetsPanel: !0
    },
    riuvip: {
        hideInAssetsPanel: !0
    },
    stickmanvip: {
        hideInAssetsPanel: !0
    },
    theflashvip: {
        hideInAssetsPanel: !0
    },
    tocko1vip: {
        hideInAssetsPanel: !0
    },
    trixievip: {
        hideInAssetsPanel: !0
    },
    videogameredemptionvip: {
        hideInAssetsPanel: !0
    },
    wentenvip: {
        hideInAssetsPanel: !0
    },
    yourockvip: {
        hideInAssetsPanel: !0
    },
    bunny4: {
        width: 300,
        height: 300
    },
    snowball2: {
        width: 100,
        height: 100
    },
    yeti2: {
        width: 200,
        height: 200
    },
    crab4: {
        loops: 9999,
        hitWidth: 150,
        hitHeight: 150
    },
    jellyfish3: {
        loops: 9999,
        hitWidth: 250,
        hitHeight: 250
    },
    trampoline2: {
        hitHeight: 200,
        hitWidth: 300
    },
    dogasusvip: {
        hideInAssetsPanel: !0
    },
    lovingheartvip: {
        hideInAssetsPanel: !0
    },
    dragon2vip: {
        hideInAssetsPanel: !0
    },
    mermaidpaintingvip: {
        hideInAssetsPanel: !0
    },
    griffonvip: {
        hideInAssetsPanel: !0
    },
    pikminvip: {
        hideInAssetsPanel: !0
    },
    ilovemathvip: {
        hideInAssetsPanel: !0
    },
    poopvip: {
        hideInAssetsPanel: !0
    },
    lovingcatvip: {
        hideInAssetsPanel: !0
    },
    racetoinfinityvip: {
        hideInAssetsPanel: !0
    },
    lovingheart2vip: {
        hideInAssetsPanel: !0
    },
    rockeyvip: {
        hideInAssetsPanel: !0
    },
    dantdmvip: {
        hideInAssetsPanel: !0
    },
    dodo2: {
        loops: 999
    },
    rob: {
        hitWidth: 10
    },
    rob1: {
        hitWidth: 10
    },
    rob2: {
        hitWidth: 10
    },
    rob3: {
        hitWidth: 10
    },
    rob4: {
        hitWidth: 10
    },
    rob5: {
        hitWidth: 10
    },
    rob6: {
        hitWidth: 10
    },
    barbara: {
        hideInAssetsPanel: !0
    },
    chris: {
        hideInAssetsPanel: !0
    },
    daymond: {
        hideInAssetsPanel: !0
    },
    kevin: {
        hideInAssetsPanel: !0
    },
    lori: {
        hideInAssetsPanel: !0
    },
    mark: {
        hideInAssetsPanel: !0
    },
    robert: {
        hideInAssetsPanel: !0
    },
    toyboat: {
        loops: 999
    },
    toyboat2: {
        loops: 999
    },
    armyguy2vip: {
        hideInAssetsPanel: !0
    },
    armyguyvip: {
        hideInAssetsPanel: !0
    },
    dinosaurvip: {
        hideInAssetsPanel: !0
    },
    dragonvip: {
        hideInAssetsPanel: !0
    },
    jaguarvip: {
        hideInAssetsPanel: !0
    },
    swordvip: {
        hideInAssetsPanel: !0
    },
    chapman: {
        hideInAssetsPanel: !0
    },
    ship4: {
        width: 150,
        height: 150
    },
    ballicon2: {
        thumbBackground: "#808080"
    },
    boneicon2: {
        thumbBackground: "#808080"
    },
    cloud5: {
        thumbBackground: "#808080"
    },
    cloud6: {
        thumbBackground: "#808080"
    },
    dogtailicon2: {
        thumbBackground: "#808080"
    },
    hydranticon2: {
        thumbBackground: "#808080"
    },
    moon4: {
        thumbBackground: "#808080"
    },
    skull7: {
        thumbBackground: "#808080"
    },
    snow: {
        thumbBackground: "#808080"
    },
    squirrelicon2: {
        thumbBackground: "#808080"
    },
    star7: {
        thumbBackground: "#808080"
    },
    star8: {
        thumbBackground: "#808080"
    },
    star14: {
        thumbBackground: "#808080"
    },
    sun6: {
        thumbBackground: "#808080"
    },
    alien11vip: {
        hideInAssetsPanel: !0
    },
    cyborgvip: {
        hideInAssetsPanel: !0
    },
    gecko2vip: {
        hideInAssetsPanel: !0
    },
    goldenfinchvip: {
        hideInAssetsPanel: !0
    },
    karatemouse2vip: {
        hideInAssetsPanel: !0
    },
    rainbowblobvip: {
        hideInAssetsPanel: !0
    },
    topsecretvip: {
        hideInAssetsPanel: !0
    },
    babyvip: {
        hideInAssetsPanel: !0
    },
    dog2vip: {
        hideInAssetsPanel: !0
    },
    geckovip: {
        hideInAssetsPanel: !0
    },
    hampstervip: {
        hideInAssetsPanel: !0
    },
    karatemousevip: {
        hideInAssetsPanel: !0
    },
    supergirls2vip: {
        hideInAssetsPanel: !0
    },
    bffvip: {
        hideInAssetsPanel: !0
    },
    dog3vip: {
        hideInAssetsPanel: !0
    },
    ghostbustersvip: {
        hideInAssetsPanel: !0
    },
    hikariandkeivip: {
        hideInAssetsPanel: !0
    },
    kennedyvip: {
        hideInAssetsPanel: !0
    },
    supergirls3vip: {
        hideInAssetsPanel: !0
    },
    coolsunvip: {
        hideInAssetsPanel: !0
    },
    dogvip: {
        hideInAssetsPanel: !0
    },
    girlvip: {
        hideInAssetsPanel: !0
    },
    housevip: {
        hideInAssetsPanel: !0
    },
    palettevip: {
        hideInAssetsPanel: !0
    },
    supergirlsvip: {
        hideInAssetsPanel: !0
    },
    police2: {
        loops: 999
    },
    controller: {
        hitWidth: 620,
        hitHeight: 280
    },
    plumber: {
        hitWidth: 100,
        hitHeight: 50
    },
    platform: {
        hitWidth: 420,
        hitHeight: 150
    },
    haircolor: {
        hitHeight: 140
    },
    cymbal: {
        hitWidth: 280,
        hitHeight: 175
    },
    hihat: {
        hitWidth: 290,
        hitHeight: 130
    },
    snare: {
        hitWidth: 230,
        hitHeight: 190
    },
    bird10: {
        loops: 999,
        width: 100,
        height: 100
    },
    ninja: {
        width: 200,
        height: 200
    },
    cowbell: {
        width: 200,
        height: 200,
        hitWidth: 500,
        hitHeight: 340
    },
    dragon7: {
        hitWidth: 150,
        hitHeight: 150,
        loops: 999
    },
    atile: {
        width: 100,
        height: 100
    },
    btile: {
        width: 100,
        height: 100
    },
    ctile: {
        width: 100,
        height: 100
    },
    dtile: {
        width: 100,
        height: 100
    },
    etile: {
        width: 100,
        height: 100
    },
    ftile: {
        width: 100,
        height: 100
    },
    gtile: {
        width: 100,
        height: 100
    },
    htile: {
        width: 100,
        height: 100
    },
    itile: {
        width: 100,
        height: 100
    },
    jtile: {
        width: 100,
        height: 100
    },
    ktile: {
        width: 100,
        height: 100
    },
    ltile: {
        width: 100,
        height: 100
    },
    mtile: {
        width: 100,
        height: 100
    },
    ntile: {
        width: 100,
        height: 100
    },
    otile: {
        width: 100,
        height: 100
    },
    ptile: {
        width: 100,
        height: 100
    },
    qtile: {
        width: 100,
        height: 100
    },
    rtile: {
        width: 100,
        height: 100
    },
    stile: {
        width: 100,
        height: 100
    },
    ttile: {
        width: 100,
        height: 100
    },
    utile: {
        width: 100,
        height: 100
    },
    vtile: {
        width: 100,
        height: 100
    },
    wtile: {
        width: 100,
        height: 100
    },
    xtile: {
        width: 100,
        height: 100
    },
    ytile: {
        width: 100,
        height: 100
    },
    ztile: {
        width: 100,
        height: 100
    },
    bananas2: {
        width: 75,
        height: 75
    },
    crocodile: {
        width: 200,
        height: 200
    },
    hotdog5: {
        width: 300,
        height: 300
    },
    pie3: {
        width: 200,
        height: 200
    },
    soda2: {
        width: 200,
        height: 200
    },
    drone4: {
        hitWidth: 200,
        hitHeight: 100
    },
    cityblock3: {
        hitWidth: 325,
        hitHeight: 450,
        width: 125,
        height: 125
    },
    spintaxi2: {
        hitWidth: 40,
        hitHeight: 40
    },
    building5: {
        hitWidth: 350,
        hitHeight: 175,
        width: 200,
        height: 200
    },
    camper3: {
        hitWidth: 150,
        hitHeight: 150,
        width: 100,
        height: 100
    },
    train2: {
        hitWidth: 500,
        hitHeight: 100
    },
    cat6: {
        width: 150,
        height: 150
    },
    skeleton4: {
        hitWidth: 200,
        hitHeight: 500
    },
    skeleton5: {
        hitWidth: 200,
        hitHeight: 500
    },
    skeleton6: {
        hitWidth: 200,
        hitHeight: 500
    },
    zombie9: {
        loops: 10
    },
    mouth3: {
        width: 250,
        height: 250,
        hitWidth: 200,
        hitHeight: 200
    },
    monster4: {
        width: 175,
        height: 175
    },
    bed2: {
        width: 200,
        height: 200
    },
    sofa2: {
        width: 200,
        height: 200
    },
    planter2: {
        width: 150,
        height: 150
    },
    bed: {
        width: 200,
        height: 200
    },
    crib: {
        width: 150,
        height: 150
    },
    chair2: {
        width: 150,
        height: 150
    },
    sofa: {
        width: 200,
        height: 200
    },
    nightstand: {
        width: 150,
        height: 150
    },
    chair3: {
        width: 150,
        height: 150
    },
    bookshelf: {
        width: 200,
        height: 200
    },
    nightstand2: {
        width: 150,
        height: 150
    },
    chair4: {
        width: 120,
        height: 120
    },
    table: {
        width: 175,
        height: 175
    },
    cabinet: {
        width: 150,
        height: 150
    },
    planter: {
        width: 150,
        height: 150
    },
    chair5: {
        width: 150,
        height: 150
    },
    table2: {
        width: 150,
        height: 150
    },
    chair: {
        width: 130,
        height: 130
    },
    chair6: {
        width: 120,
        height: 120
    },
    tv3: {
        width: 175,
        height: 175
    },
    flare3: {
        width: 50,
        height: 50
    },
    kite3: {
        width: 300,
        height: 300
    },
    yoyo: {
        width: 200,
        height: 200
    },
    alien9: {
        width: 200,
        height: 200
    },
    eyeball2: {
        width: 80,
        height: 80
    },
    orange3: {
        width: 200,
        height: 200
    },
    brain3: {
        width: 100,
        height: 100
    },
    bubble2: {
        width: 400,
        height: 400
    },
    popcorn7: {
        width: 200,
        height: 200
    },
    hotdog3: {
        width: 400,
        height: 400
    },
    hotdog4: {
        width: 500,
        height: 500
    },
    rock10: {
        width: 200,
        height: 200
    },
    star6: {
        width: 500,
        height: 500
    },
    yarn: {
        width: 100,
        height: 100
    },
    kitty: {
        width: 400,
        height: 400
    },
    tiger4: {
        width: 555,
        height: 555
    },
    turtle2: {
        width: 275,
        height: 275
    },
    dog4: {
        width: 330,
        height: 330
    },
    shrimp: {
        width: 200,
        height: 200
    },
    pig3: {
        width: 180,
        height: 180
    },
    face2: {
        height: 300,
        width: 300,
        hitWidth: 250,
        hitHeight: 400
    },
    face3: {
        height: 300,
        width: 300
    },
    popcorn: {
        height: 150,
        width: 150,
        hitWidth: 140,
        hitHeight: 300
    },
    fish10: {
        width: 100,
        height: 100,
        hitWidth: 250,
        hitHeight: 250
    },
    jellyfish2: {
        width: 100,
        height: 100,
        hitWidth: 350,
        hitHeight: 350
    },
    zombie4: {
        hitWidth: 200,
        hitHeight: 200,
        width: 100,
        height: 100
    },
    truck11: {
        hitWidth: 500,
        hitHeight: 200,
        width: 200,
        height: 200
    },
    taxi: {
        hitWidth: 500,
        hitHeight: 200,
        width: 200,
        height: 200
    },
    ship3: {
        hitWidth: 879,
        hitHeight: 200,
        width: 300,
        height: 300
    },
    buttonup: {
        width: 60,
        height: 60
    },
    buttondown: {
        width: 60,
        height: 60
    },
    buttonleft: {
        width: 60,
        height: 60
    },
    buttonright: {
        width: 60,
        height: 60
    },
    zombie5: {
        width: 300,
        height: 300
    },
    alienbee: {
        width: 200,
        height: 200
    },
    resizer: {
        width: 300,
        height: 300,
        hitWidth: 500,
        hitHeight: 200
    },
    cupcake3: {
        width: 50,
        height: 50
    },
    trex: {
        width: 250,
        height: 250,
        hitWidth: 200,
        hitHeight: 200
    },
    meteor1: {
        width: 50,
        height: 50
    },
    meteor2: {
        width: 75,
        height: 75
    },
    meteor3: {
        width: 100,
        height: 100
    },
    meteor4: {
        width: 125,
        height: 125
    },
    meteor5: {
        width: 150,
        height: 150
    },
    meteor6: {
        width: 200,
        height: 200
    },
    dig: {
        width: 75,
        height: 75
    },
    fist: {
        width: 300,
        height: 300
    },
    fly2: {
        width: 50,
        height: 50
    },
    spider2: {
        width: 100,
        height: 100
    },
    hero: {
        width: 200,
        height: 200
    },
    cloud4: {
        width: 50,
        height: 50
    },
    kitten3: {
        width: 120,
        height: 120
    },
    hero2: {
        width: 350,
        height: 350,
        hitWidth: 200,
        hitHeight: 200
    },
    flare2: {
        width: 1400,
        height: 1400
    },
    ball2: {
        width: 100,
        height: 100,
        hitWidth: 300,
        hitHeight: 300
    },
    elffire: {
        width: 300,
        height: 300
    },
    elfwood: {
        width: 300,
        height: 300
    },
    elfwater: {
        width: 300,
        height: 300
    },
    coinfire: {
        width: 100,
        height: 100
    },
    coinwood: {
        width: 100,
        height: 100
    },
    coinwater: {
        width: 100,
        height: 100
    },
    watersprite: {
        width: 300,
        height: 300
    },
    poop: {
        hideInAssetsPanel: !0
    },
    poo: {
        hideInAssetsPanel: !0
    },
    circle: {
        width: 10,
        height: 10,
        thumbBackground: "#808080"
    },
    drone2: {
        width: 250,
        height: 250
    },
    rocket6: {
        width: 60,
        height: 60
    },
    drone: {
        width: 150,
        height: 150,
        hitWidth: 100,
        hitHeight: 50
    },
    pad: {
        width: 200,
        height: 200,
        hitWidth: 150,
        hitHeight: 50
    },
    pillar: {
        width: 100,
        height: 100
    },
    car7: {
        hitWidth: 200,
        hitHeight: 400
    },
    cone3: {
        hitWidth: 10,
        hitHeight: 100
    },
    kat: {
        hitWidth: 50,
        hitHeight: 50
    },
    laser2: {
        hitWidth: 350,
        hitHeight: 50
    },
    flame: {
        loops: 999
    },
    server: {
        hitWidth: 100,
        hitHeight: 100
    },
    mag: {
        hitWidth: 300,
        hitHeight: 300
    },
    bot: {
        width: 150,
        height: 150
    },
    swipe: {
        hitHeight: 10,
        hitWidth: 10
    },
    bizguy: {
        hitHeight: 60,
        hitWidth: 60
    },
    bizguy2: {
        hitHeight: 60,
        hitWidth: 60
    },
    chain: {
        hitHeight: 10,
        hitWidth: 10
    },
    claw: {
        hitHeight: 30,
        hitWidth: 30
    },
    cyclist: {
        hitHeight: 50,
        hitWidth: 50,
        thumbBackground: "#808080"
    },
    saucer: {
        hitHeight: 100,
        hitWidth: 100
    },
    whitekey: {
        hitWidth: 60,
        hitHeight: 350,
        thumbBackground: "#808080"
    },
    whitekey2: {
        hitWidth: 60,
        hitHeight: 350,
        thumbBackground: "#808080"
    },
    pianoa: {
        hitWidth: 74,
        hitHeight: 276,
        thumbBackground: "#808080"
    },
    pianob: {
        hitWidth: 74,
        hitHeight: 276,
        thumbBackground: "#808080"
    },
    pianoc: {
        hitWidth: 74,
        hitHeight: 276,
        thumbBackground: "#808080"
    },
    pianod: {
        hitWidth: 74,
        hitHeight: 276,
        thumbBackground: "#808080"
    },
    pianoe: {
        hitWidth: 74,
        hitHeight: 276,
        thumbBackground: "#808080"
    },
    pianof: {
        hitWidth: 74,
        hitHeight: 276,
        thumbBackground: "#808080"
    },
    pianog: {
        hitWidth: 74,
        hitHeight: 276,
        thumbBackground: "#808080"
    },
    trampoline: {
        hitHeight: 115,
        hitWidth: 354
    },
    jumper: {
        hitHeight: 200,
        hitWidth: 200
    },
    jumper2: {
        hitHeight: 200,
        hitWidth: 200
    },
    boyrun1: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyrun2: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyrun3: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyrun4: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyjump1: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyjump2: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyjump3: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyfall1: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyfall2: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyfall3: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyfall4: {
        hitWidth: 125,
        hitHeight: 125
    },
    boyfall5: {
        hitWidth: 125,
        hitHeight: 125
    },
    seamonster: {
        hitWidth: 300,
        hitHeight: 100
    },
    navalmine: {
        hitWidth: 200
    },
    pebble: {
        hitWidth: 25,
        hitHeight: 25
    },
    icespike: {
        hitWidth: 30
    },
    penguin3: {
        hitWidth: 200,
        hitHeight: 50
    },
    reef: {
        hitWidth: 325,
        hitHeight: 200
    },
    doghappy: {
        width: 700,
        height: 700
    },
    scope: {
        width: 200,
        height: 200
    },
    shot: {
        width: 200,
        height: 200
    },
    bone2: {
        width: 200,
        height: 200
    },
    chalk: {
        thumbBackground: "#808080"
    },
    quill2: {
        thumbBackground: "#808080"
    },
    coin: {
        loops: 999
    },
    fire: {
        loops: 999
    },
    "2mustangs": {
        hideInAssetsPanel: !0
    },
    annabanana: {
        hideInAssetsPanel: !0
    },
    evanhavingfun: {
        hideInAssetsPanel: !0
    },
    fracturedplanet: {
        hideInAssetsPanel: !0
    },
    happyallie: {
        hideInAssetsPanel: !0
    },
    happydevan: {
        hideInAssetsPanel: !0
    },
    happyelena: {
        hideInAssetsPanel: !0
    },
    happynolan: {
        hideInAssetsPanel: !0
    },
    jacker: {
        hideInAssetsPanel: !0
    },
    jamesbombed: {
        hideInAssetsPanel: !0
    },
    jeffreyfootball: {
        hideInAssetsPanel: !0
    },
    rinniebinnie: {
        hideInAssetsPanel: !0
    },
    ruinsinathens: {
        hideInAssetsPanel: !0
    },
    shadowedyellowcube: {
        hideInAssetsPanel: !0
    },
    smilingallie: {
        hideInAssetsPanel: !0
    },
    smilingjack: {
        hideInAssetsPanel: !0
    },
    smilingnature: {
        hideInAssetsPanel: !0
    },
    annafrozen: {
        hideInAssetsPanel: !0
    },
    brendanwithparrot: {
        hideInAssetsPanel: !0
    },
    brotherwake: {
        hideInAssetsPanel: !0
    },
    calliethedog: {
        hideInAssetsPanel: !0
    },
    cameronandclark: {
        hideInAssetsPanel: !0
    },
    claireinhawaii: {
        hideInAssetsPanel: !0
    },
    curtseychibi: {
        hideInAssetsPanel: !0
    },
    darkangel: {
        hideInAssetsPanel: !0
    },
    flyingsidekick: {
        hideInAssetsPanel: !0
    },
    garrettgreenshirt: {
        hideInAssetsPanel: !0
    },
    garretthead: {
        hideInAssetsPanel: !0
    },
    gavinandfriend: {
        hideInAssetsPanel: !0
    },
    gavinfishing: {
        hideInAssetsPanel: !0
    },
    gavinwithbaby: {
        hideInAssetsPanel: !0
    },
    happybrady: {
        hideInAssetsPanel: !0
    },
    happymaribella: {
        hideInAssetsPanel: !0
    },
    happynathan: {
        hideInAssetsPanel: !0
    },
    hayboys: {
        hideInAssetsPanel: !0
    },
    hinatahyuganaruto: {
        hideInAssetsPanel: !0
    },
    ionaswimming: {
        hideInAssetsPanel: !0
    },
    islariding: {
        hideInAssetsPanel: !0
    },
    lahti: {
        hideInAssetsPanel: !0
    },
    lani: {
        hideInAssetsPanel: !0
    },
    misspiggy: {
        hideInAssetsPanel: !0
    },
    misspiggy2: {
        hideInAssetsPanel: !0
    },
    prettymangagirl: {
        hideInAssetsPanel: !0
    },
    reba: {
        hideInAssetsPanel: !0
    },
    samandcousin: {
        hideInAssetsPanel: !0
    },
    samandfamily: {
        hideInAssetsPanel: !0
    },
    samrugby: {
        hideInAssetsPanel: !0
    },
    samrugby2: {
        hideInAssetsPanel: !0
    },
    sillysisters: {
        hideInAssetsPanel: !0
    },
    sirdaddy: {
        hideInAssetsPanel: !0
    },
    sistertori: {
        hideInAssetsPanel: !0
    },
    skyebiking: {
        hideInAssetsPanel: !0
    },
    smilingboys: {
        hideInAssetsPanel: !0
    },
    totoro: {
        hideInAssetsPanel: !0
    },
    unicorn2: {
        hideInAssetsPanel: !0
    },
    wizard: {
        hideInAssetsPanel: !0
    },
    archerben: {
        hideInAssetsPanel: !0
    },
    anthonywithcar: {
        hideInAssetsPanel: !0
    },
    bobby: {
        hideInAssetsPanel: !0
    },
    bobby2: {
        hideInAssetsPanel: !0
    },
    bobbyblue: {
        hideInAssetsPanel: !0
    },
    bobbypink: {
        hideInAssetsPanel: !0
    },
    trophy: {
        hideInAssetsPanel: !0
    },
    prize: {
        hideInAssetsPanel: !0
    },
    adventurekitty: {
        hideInAssetsPanel: !0
    },
    diykitty: {
        hideInAssetsPanel: !0
    },
    mariachikitty: {
        hideInAssetsPanel: !0
    },
    gearssoi: {
        hideInAssetsPanel: !0
    },
    logosoi: {
        hideInAssetsPanel: !0
    },
    smilinglauren: {
        hideInAssetsPanel: !0
    },
    kidrobotmunny: {
        hideInAssetsPanel: !0
    },
    munnylogos: {
        hideInAssetsPanel: !0
    },
    baritone: {
        thumbBackground: "#808080"
    },
    beam: {
        thumbBackground: "#808080"
    },
    bird4: {
        thumbBackground: "#808080"
    },
    bite: {
        thumbBackground: "#808080"
    },
    cow3: {
        thumbBackground: "#808080"
    },
    eye: {
        thumbBackground: "#808080"
    },
    flare: {
        thumbBackground: "#808080"
    },
    glasses: {
        thumbBackground: "#808080"
    },
    hud: {
        thumbBackground: "#808080"
    },
    iconreflection: {
        thumbBackground: "#808080"
    },
    lander: {
        thumbBackground: "#808080"
    },
    laser: {
        thumbBackground: "#808080"
    },
    lightning: {
        thumbBackground: "#808080"
    },
    maraca: {
        thumbBackground: "#808080"
    },
    maracas: {
        thumbBackground: "#808080"
    },
    pandakid: {
        thumbBackground: "#808080"
    },
    plunger: {
        thumbBackground: "#808080"
    },
    rayshot: {
        thumbBackground: "#808080"
    },
    rocket3: {
        thumbBackground: "#808080"
    },
    snowflake: {
        thumbBackground: "#808080"
    },
    soccernet: {
        thumbBackground: "#808080"
    },
    spacemandoll: {
        thumbBackground: "#808080"
    },
    tooth: {
        thumbBackground: "#808080"
    },
    trumpet: {
        thumbBackground: "#808080"
    },
    whitebox: {
        thumbBackground: "#808080"
    },
    _unit_test_do_not_delete: {
        loops: 5,
        hideInAssetsPanel: !0
    },
    coatofarms: {
        hideInAssetsPanel: !0
    },
    schoolrye: {
        hideInAssetsPanel: !0
    },
    celina: {
        hideInAssetsPanel: !0
    },
    corban: {
        hideInAssetsPanel: !0
    },
    dick: {
        hideInAssetsPanel: !0
    },
    booby: {
        hideInAssetsPanel: !0
    },
    marshmellow: {
        hideInAssetsPanel: !0
    },
    rock200x200: {
        hideInAssetsPanel: !0
    },
    scarlsen: {
        hideInAssetsPanel: !0
    },
    scarlsen2: {
        hideInAssetsPanel: !0
    },
    scarlsen3: {
        hideInAssetsPanel: !0
    },
    scarlsen4: {
        hideInAssetsPanel: !0
    },
    scarlsen5: {
        hideInAssetsPanel: !0
    },
    scarlsen6: {
        hideInAssetsPanel: !0
    },
    scarlsen7: {
        hideInAssetsPanel: !0
    },
    scarlsen8: {
        hideInAssetsPanel: !0
    }
};
c123 = c123 || {};
c123.stampList = {
    "24phone": {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    "24phonewhite": {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    "2mustangs": {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    "3dglasses": {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    _unit_test_do_not_delete: {
        width: 30,
        height: 30,
        isAnimated: !1
    },
    abrahamlincoln: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    abrahamlincolnchin: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    abrahamlincolntop: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    accordian: {
        width: 314,
        height: 314,
        isAnimated: !1
    },
    acid: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    acorn: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    acorn2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    adalovelace: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    adventurekitty: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    afghanistan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    agent: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    aidan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    airbrush: {
        width: 110,
        height: 110,
        isAnimated: !1
    },
    aircraftcarrier: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    airdrop: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    airdrop2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    airplane: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    airplane2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    airplane3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    airship: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    airship1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    akey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    akitainu: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    alarm: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    alarmclock: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    alarmclockanalog: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    alarmclockdigital: {
        width: 699,
        height: 699,
        isAnimated: !1
    },
    albania: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    alberteinstein: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    alberteinsteinchin: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    alberteinsteintop: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    albertosaurus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    alex: {
        width: 186,
        height: 186,
        isAnimated: !1
    },
    alexandria: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    algeria: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    alien: {
        width: 120,
        height: 120,
        isAnimated: !1
    },
    alien10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    alien11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    alien11vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    alien2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    alien3: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    alien4: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    alien5: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    alien6: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    alien7: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    alien8: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    alien9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    alienbee: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    alley: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    allhandsclock: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    alligator: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    alligator2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    allosaurus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    almond: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    almond2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    alpaca: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    amalthea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    amanda: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    ambulance: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ambulance1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    americangothic: {
        width: 752,
        height: 752,
        isAnimated: !1
    },
    anastasia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    andorra: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    andrea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    anemone: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    angelamerkel: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    angelwings: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    angola: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    animal: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    animalcracker: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ankylosaurus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    annabanana: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    annafrozen: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    ant: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ant2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    ant3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    anteater: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    antenna: {
        width: 130,
        height: 130,
        isAnimated: !1
    },
    antenna2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    antenna3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    antenna4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    antenna5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    anthonywithcar: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    antiquaandbarbuda: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    anvil: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    apaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    ape: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    apple: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    apple2: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    apple3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    apple4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    apple5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    applemacintosh: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    applewatch: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    aquariumgravel: {
        width: 768,
        height: 768,
        isAnimated: !1
    },
    archaeopteryx: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    archerben: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    archery: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    argentina: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arm: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    armadillo: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    armenia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    armyguy2vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    armyguyvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow: {
        width: 341,
        height: 341,
        isAnimated: !1
    },
    arrow10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow12: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    arrow13: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    arrow14: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    arrow15: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    arrow16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    arrow3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    arrow4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    arrow5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrow8: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    arrow9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    arrowpost: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    artist: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    artist2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    asterisk: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    asteroid: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    asteroid2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    asteroid3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    astro: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    astronaut: {
        width: 340,
        height: 340,
        isAnimated: !1
    },
    astronaut10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    astronaut2: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    astronaut3: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    astronaut4: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    astronaut5: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    astronaut6: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    astronaut7: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    astronaut8: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    astronaut9: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    atile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    atom: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    atrain: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    atv: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    audi: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    aungsansuukyi: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    australia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    austria: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    axe: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    azerbaijan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    b: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    b2bomber: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    baby: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    babyvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    backhoe: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    backhoe2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    backhoe3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    backpack: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    backpack2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    backpack3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    backpack4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    backpack5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    backpack6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    backpack7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bacon: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    bacon2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bacon3: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bacon4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    badge: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    badge2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    badge3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    badger: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bag: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    bagwhite: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    bahamas: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bakesale: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bakesale2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bakingsheet: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    baklava: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball25: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball26: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball3: {
        width: 1097,
        height: 1097,
        isAnimated: !1
    },
    ball4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ball9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballaqua: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballblue: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballet: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    ballet1: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    ballet2: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    ballet3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballet4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballet5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballet6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballet7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballet8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballgame: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballgray: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballgreen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballicon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballicon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    balloon: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    balloon2: {
        width: 78,
        height: 78,
        isAnimated: !1
    },
    balloon3: {
        width: 1097,
        height: 1097,
        isAnimated: !1
    },
    balloon4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    balloon5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    balloon6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    balloon7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    balloon8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    balloon9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballorange: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballpink: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballpurple: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballred: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ballyellow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    banana: {
        width: 480,
        height: 480,
        isAnimated: !1
    },
    banana2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    banana3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bananapeel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bananas: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    bananas2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bandage: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bandaid: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bang: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bangladesh: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    banker: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    banners: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    barackobama: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    barackobamachin: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    barackobamatop: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    barbados: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    barbell: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    baritone: {
        width: 260,
        height: 260,
        isAnimated: !1
    },
    barrel: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    baseball: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    baseball2: {
        width: 451,
        height: 451,
        isAnimated: !1
    },
    baseballbat: {
        width: 451,
        height: 451,
        isAnimated: !1
    },
    baseballcap: {
        width: 451,
        height: 451,
        isAnimated: !1
    },
    baseballfield2: {
        width: 451,
        height: 451,
        isAnimated: !1
    },
    baseballglove: {
        width: 451,
        height: 451,
        isAnimated: !1
    },
    baseballglove2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    baseballhelmet: {
        width: 451,
        height: 451,
        isAnimated: !1
    },
    baseballticket: {
        width: 451,
        height: 451,
        isAnimated: !1
    },
    basil: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    basket: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    basket2: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    basket2white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    basket3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    basketball: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    basketball2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    basketballplayer: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bassdrum: {
        width: 466,
        height: 466,
        isAnimated: !1
    },
    bat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bathtub: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    batkid: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    batter: {
        width: 247,
        height: 247,
        isAnimated: !1
    },
    batter2: {
        width: 247,
        height: 247,
        isAnimated: !1
    },
    battery: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    battery2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    battery3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    beachball: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    beachbreakers1: {
        width: 727,
        height: 727,
        isAnimated: !1
    },
    beachbreakers2: {
        width: 722,
        height: 722,
        isAnimated: !1
    },
    beachcloud1: {
        width: 230,
        height: 230,
        isAnimated: !1
    },
    beachcloud2: {
        width: 202,
        height: 202,
        isAnimated: !1
    },
    beachcloud3: {
        width: 120,
        height: 120,
        isAnimated: !1
    },
    beachcloud4: {
        width: 194,
        height: 194,
        isAnimated: !1
    },
    beachsand: {
        width: 2310,
        height: 2310,
        isAnimated: !1
    },
    beagle: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    beam: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    bear: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    bear2: {
        width: 478,
        height: 478,
        isAnimated: !1
    },
    bear3: {
        width: 478,
        height: 478,
        isAnimated: !1
    },
    bear4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bear5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bear6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bear7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bear8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bear9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    beard: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    beard2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    beard3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    beard4: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    beard5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bearhead: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    bearprint: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    beaver: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    beaver2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    beccabotvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bed: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bed2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bed3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bed4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bee: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bee2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bee3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bee4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    beethovenbottom: {
        width: 377,
        height: 377,
        isAnimated: !1
    },
    beethoventop: {
        width: 382,
        height: 382,
        isAnimated: !1
    },
    beetle: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    beetle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    behrain: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    belarus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    belgium: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    belize: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    benin: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    berry: {
        width: 86,
        height: 86,
        isAnimated: !1
    },
    betafish: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bffvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bhutan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bicep: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bicycle: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bigbadwolf: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bigben2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bigdayclock: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    bigmunny: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    bigsphero: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    bigsplotch: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    bike: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bike12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bikerider: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bikerider2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    billclinton: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    bingodot: {
        width: 119,
        height: 119,
        isAnimated: !1
    },
    bird: {
        width: 230,
        height: 230,
        isAnimated: !1
    },
    bird10: {
        width: 300,
        height: 300,
        isAnimated: !0
    },
    bird11: {
        width: 300,
        height: 300,
        isAnimated: !0
    },
    bird12: {
        width: 300,
        height: 300,
        isAnimated: !0
    },
    bird13: {
        width: 300,
        height: 300,
        isAnimated: !0
    },
    bird14: {
        width: 300,
        height: 300,
        isAnimated: !0
    },
    bird15: {
        width: 300,
        height: 300,
        isAnimated: !0
    },
    bird16: {
        width: 300,
        height: 300,
        isAnimated: !0
    },
    bird17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bird18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bird19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bird2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    bird20: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    bird3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bird4: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    bird5: {
        width: 312,
        height: 312,
        isAnimated: !1
    },
    bird6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bird7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bird8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bird9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    birthdaycake: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bishop: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bishop2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bison: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    bite: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bitsbox: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bitsboxdrawingvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bizguy: {
        width: 161,
        height: 161,
        isAnimated: !1
    },
    bizguy2: {
        width: 161,
        height: 161,
        isAnimated: !1
    },
    bizguy3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    black: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    blackkey: {
        width: 218,
        height: 218,
        isAnimated: !1
    },
    blackkey2: {
        width: 218,
        height: 218,
        isAnimated: !1
    },
    blam: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    blimp: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    block: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    block10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block15: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    block16: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    block17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block2: {
        width: 295,
        height: 295,
        isAnimated: !1
    },
    block20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block25: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block26: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block27: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block28: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block29: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block30: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block31: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block32: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block33: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block34: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block35: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block36: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block37: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block38: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block39: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    block9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    blue: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    bluecircle: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    bluecircle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bluecube: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    boat: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    boat10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    boat3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boat9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boatethan: {
        width: 133,
        height: 133,
        isAnimated: !1
    },
    boatfishing: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    boatshoe: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    boatshoe2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bob: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bob9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bobby: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bobby2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bobbyblue: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bobbypink: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bolivia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bomb: {
        width: 120,
        height: 120,
        isAnimated: !1
    },
    bomb2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bone: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bone2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bone3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bone4: {
        width: 2E3,
        height: 2E3,
        isAnimated: !1
    },
    bone5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bone6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boneicon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boneicon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    booby: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    book: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    book2: {
        width: 244,
        height: 244,
        isAnimated: !1
    },
    book3: {
        width: 199,
        height: 199,
        isAnimated: !1
    },
    book4: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    books: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    bookshelf: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boom: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boomtown: {
        width: 640,
        height: 640,
        isAnimated: !1
    },
    boot2: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    bosniaandherzegovina: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    botarm: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    botarm2: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    botbody: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    botleg: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    botleg2: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    botswana: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bottle: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bottle2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bottle3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bottletrees: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    bow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bowandarrow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bowl: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bowl2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bowl3: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    bowl4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bowtie: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    bowtie2: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    bowtie3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    box: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    box2: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    box2white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    boxer: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    boxing: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boy: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boy2: {
        width: 572,
        height: 572,
        isAnimated: !1
    },
    boy3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boy4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    boydrivingcar: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    boyfall1: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyfall2: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyfall3: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyfall4: {
        width: 351,
        height: 351,
        isAnimated: !1
    },
    boyfall5: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyjump1: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyjump2: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyjump3: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyrun1: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyrun2: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyrun3: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyrun4: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    boyscout: {
        width: 478,
        height: 478,
        isAnimated: !1
    },
    bpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    brachiosaurus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brad: {
        width: 820,
        height: 820,
        isAnimated: !1
    },
    braid: {
        width: 98,
        height: 98,
        isAnimated: !1
    },
    braid2: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    braidblack: {
        width: 98,
        height: 98,
        isAnimated: !1
    },
    braidbrown: {
        width: 98,
        height: 98,
        isAnimated: !1
    },
    braidlarge: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    braidred: {
        width: 98,
        height: 98,
        isAnimated: !1
    },
    brain: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    brain2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brain3: {
        width: 2914,
        height: 2914,
        isAnimated: !1
    },
    brain4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brandi: {
        width: 478,
        height: 478,
        isAnimated: !1
    },
    brazil: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bread: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    bread2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    bread3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bread4: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    bread5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    breakfast: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brendanwithparrot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bride: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bride2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    broccoli: {
        width: 309,
        height: 309,
        isAnimated: !1
    },
    broom: {
        width: 354,
        height: 354,
        isAnimated: !1
    },
    broom2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brotherwake: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brown: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    browncube: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    brownie: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brownie2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brownies: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    brunei: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brush: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brush1: {
        width: 3104,
        height: 3104,
        isAnimated: !1
    },
    brush2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brush3: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    brush4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    brush5: {
        width: 3104,
        height: 3104,
        isAnimated: !1
    },
    brusselsprout: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    btile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    bubble: {
        width: 120,
        height: 120,
        isAnimated: !1
    },
    bubble2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bubble3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bubble4: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    bubble5: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    bubble6: {
        width: 1200,
        height: 1200,
        isAnimated: !1
    },
    bubble7: {
        width: 1200,
        height: 1200,
        isAnimated: !1
    },
    bubble8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bubble9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buffalo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    bug10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bug20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug25: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug26: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug27: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug28: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug29: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug30: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bug9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bugcoin: {
        width: 120,
        height: 120,
        isAnimated: !0
    },
    buggy: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bugtimeclock: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    building: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    building2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    building3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    building4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    building5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bulgaria: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bull: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bull1: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bull2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bulldog: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bulldozer: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bun: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bun2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bunny: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bunny2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bunny3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bunny4: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    bunny5: {
        width: 499,
        height: 499,
        isAnimated: !1
    },
    bunny6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bunyan: {
        width: 445,
        height: 445,
        isAnimated: !1
    },
    bunyanchop: {
        width: 445,
        height: 445,
        isAnimated: !0
    },
    burger: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    burger2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    burger3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    burger4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    burgerpatty: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    burkinafaso: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    burrito: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    burundi: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    bus: {
        width: 175,
        height: 175,
        isAnimated: !1
    },
    bus1: {
        width: 175,
        height: 175,
        isAnimated: !1
    },
    bus2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    bush: {
        width: 361,
        height: 361,
        isAnimated: !1
    },
    bush2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    bush3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    bushel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    businessman: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    butt: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    butter: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    butterfly: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    butterfly2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    butterfly3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    butterfly4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    butterfly5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button1: {
        width: 506,
        height: 506,
        isAnimated: !1
    },
    button10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button1absolutezero: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1black: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1cerulean: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1crimson: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1darkorange: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1dimgray: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1forestgreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1junglegreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1midnight: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1midnightblue: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1red: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1sheengreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1silver: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1sizzlingsunrise: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1smokeytopaz: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button1violetred: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2: {
        width: 506,
        height: 506,
        isAnimated: !1
    },
    button2absolutezero: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2black: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2cerulean: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2crimson: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2darkorange: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2dimgray: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2forestgreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2junglegreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2midnight: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2midnightblue: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2red: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2sheengreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2silver: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2sizzlingsunrise: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2smokeytopaz: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button2violetred: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button3absolutezero: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3black: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3cerulean: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3crimson: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3darkorange: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3dimgray: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3forestgreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3junglegreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3midnight: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3midnightblue: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3red: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3sheengreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3silver: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3sizzlingsunrise: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3smokeytopaz: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button3violetred: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button4absolutezero: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4black: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4cerulean: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4crimson: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4darkorange: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4dimgray: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4forestgreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4junglegreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4midnight: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4midnightblue: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4red: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4sheengreen: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4silver: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4sizzlingsunrise: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4smokeytopaz: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button4violetred: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    button5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    button9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonblue: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttondown: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttongray: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttongreen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonleft: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonlime: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonorange: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonpink: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonpurple: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonred: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonright: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonup: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    buttonyellow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cabbage: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    cabin: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cabinet: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    caboverde: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cadeau: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cake: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cake2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cake3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cake4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cakepop: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    calliethedog: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    callisto: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cambodia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    camel: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    camel2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    camera: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    camera2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    camera3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    camera4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cameronandclark: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    cameroon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    camper: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    camper2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    camper3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    campgroundvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    can: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    canada: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    candle: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    candle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    candy: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    candy2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    candy3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    candy4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    candy5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    candybar: {
        width: 321,
        height: 321,
        isAnimated: !1
    },
    candycane: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    candycane2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    candycane3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    candycane4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cannon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cannonleft: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cannonright: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cap: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    cap2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    cappucino: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    capsule: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    capybara: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    car: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    car1: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    car10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car2: {
        width: 136,
        height: 136,
        isAnimated: !1
    },
    car20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    car4: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    car5: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    car6: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    car7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    car99: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    carblue: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card: {
        width: 2048,
        height: 2048,
        isAnimated: !1
    },
    card10c: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card10d: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card10h: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card10s: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card2c: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card2d: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card2h: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card2s: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card3c: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card3d: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card3h: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card3s: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card4c: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card4d: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card4h: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card4s: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card5c: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card5d: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card5h: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card5s: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card6c: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card6d: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card6h: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card6s: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card7c: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card7d: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card7h: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card7s: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card8c: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card8d: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card8h: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card8s: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card9c: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card9d: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card9h: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    card9s: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardac: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardad: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardah: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardas: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardjc: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardjd: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardjh: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardjs: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardkc: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardkd: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardkh: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardks: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardqc: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardqd: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardqh: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cardqs: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cards: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    cardswhite: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    carfast: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cargeneric: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cargreen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    caroffroad: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    carpenter: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    carred: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    carriage: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    carriage2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    carrot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    carrot2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    carrot3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    carrots: {
        width: 413,
        height: 413,
        isAnimated: !1
    },
    carsonbotvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cart: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cart2: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    cart2white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    cart3: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    cart3white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    cartwhite: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    caryellow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cashew: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cashewfruit: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cask: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cat: {
        width: 160,
        height: 160,
        isAnimated: !1
    },
    cat10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cat2: {
        width: 218,
        height: 218,
        isAnimated: !1
    },
    cat3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cat4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cat5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cat6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cat7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cat8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cat9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    caterpillar: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    caterpillar2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    catfacevip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cats: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cauldron: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cauliflower: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    caviar: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    celebrate: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    celina: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cell: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    cellphone: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    centipede: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    centralafricanrepublic: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chad: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chain: {
        width: 95,
        height: 95,
        isAnimated: !1
    },
    chain2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chair9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chalk: {
        width: 50,
        height: 50,
        isAnimated: !1
    },
    chalksquare: {
        width: 105,
        height: 105,
        isAnimated: !1
    },
    change: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chapman: {
        width: 230,
        height: 230,
        isAnimated: !1
    },
    chatbot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chatbot2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chatbubble: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    chatbubble2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    chatbubble8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    checker: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    checker2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cheese: {
        width: 80,
        height: 80,
        isAnimated: !1
    },
    cheese2: {
        width: 357,
        height: 357,
        isAnimated: !1
    },
    cheese3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    cheese4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cheeseburger: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    cheeseburger2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cheeseburger3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cheesecake: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cheesesteak: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    cheetah: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cheezit: {
        width: 232,
        height: 232,
        isAnimated: !1
    },
    chef: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cherries: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cherries2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cherry: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cherry2: {
        width: 432,
        height: 432,
        isAnimated: !1
    },
    chichenitza: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chick: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chick2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chick3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    chicken10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken2: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    chicken20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chicken9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chickennugget: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    chickennuggets: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    chickennuggets2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    chickensandwich: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    chickensandwich2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    chickenvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chihuahua: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chile: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chili: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    china: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chips: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    chocolate: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    chocolatecake: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    chocolatechicken: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    chocolatelab: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    chocolatemilk: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    chocolaterose: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    christie: {
        width: 529,
        height: 529,
        isAnimated: !1
    },
    christmascookie: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    christmascookie2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    christmascookie3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    christmascookie4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    christmascookie5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    christmascookie6: {
        width: 425,
        height: 425,
        isAnimated: !1
    },
    christmascookie7: {
        width: 425,
        height: 425,
        isAnimated: !1
    },
    christmascookie8: {
        width: 425,
        height: 425,
        isAnimated: !1
    },
    christmascookie9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    christmastree: {
        width: 290,
        height: 290,
        isAnimated: !1
    },
    christmastree2: {
        width: 290,
        height: 290,
        isAnimated: !1
    },
    christmastree3: {
        width: 290,
        height: 290,
        isAnimated: !1
    },
    christmastree4: {
        width: 290,
        height: 290,
        isAnimated: !1
    },
    christmastree5: {
        width: 290,
        height: 290,
        isAnimated: !1
    },
    christmastree6: {
        width: 290,
        height: 290,
        isAnimated: !1
    },
    christmastree7: {
        width: 290,
        height: 290,
        isAnimated: !1
    },
    christmastree8: {
        width: 290,
        height: 290,
        isAnimated: !1
    },
    cigarette: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cilantro: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    circle: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    circle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    circle3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cityblock: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cityblock2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cityblock3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ckey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    claireinhawaii: {
        width: 480,
        height: 480,
        isAnimated: !1
    },
    clapper: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    claw: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    cleats: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    cleverploy: {
        width: 420,
        height: 420,
        isAnimated: !1
    },
    clipboard: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    clock: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    clock10: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    clock11: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    clock12: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    clock13: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    clock14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    clock2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    clock3: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    clock4: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    clock5: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    clock6: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    clock7: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    clock8: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    clock9: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    clockcover: {
        width: 662,
        height: 662,
        isAnimated: !1
    },
    cloud: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cloud2: {
        width: 330,
        height: 330,
        isAnimated: !1
    },
    cloud3: {
        width: 249,
        height: 249,
        isAnimated: !1
    },
    cloud4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cloud5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cloud6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cloud7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cloud8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cloud9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    clown: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    clownfish: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    clownfish2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coastercar: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    coastercar2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coat: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    coatofarms: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cockerspaniel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cockpit: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    cockpit2: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    codersuperherovip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    codi: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coelophysis: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coffee: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    coffee2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coffee3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coffeetable: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coin: {
        width: 120,
        height: 120,
        isAnimated: !0
    },
    coin2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coin3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coin4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coin5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coin6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coinfire: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coinwater: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coinwood: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coke: {
        width: 388,
        height: 388,
        isAnimated: !1
    },
    cola: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    colombia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    colorbox: {
        width: 34,
        height: 34,
        isAnimated: !1
    },
    coloring10: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring11: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring12: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring13: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring14: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring15: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring16: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring17: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring18: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring19: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring2: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring20: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring21: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring22: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring23: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring24: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring25: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring3: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring4: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring5: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring6: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring7: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring8: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    coloring9: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    colorsvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    comet: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    comoros: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    compass: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    compass2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    compass3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    compass4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    computer: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cone: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cone2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cone3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    congadrum: {
        width: 346,
        height: 346,
        isAnimated: !1
    },
    congo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    constructionworker: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    constructionworker2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    contraption: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    controller: {
        width: 900,
        height: 900,
        isAnimated: !1
    },
    controller2: {
        width: 883,
        height: 883,
        isAnimated: !1
    },
    cookie: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie2: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    cookie3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cookie9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coolsunvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cop: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    coral: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coral2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coral3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coral4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    coralreef: {
        width: 1500,
        height: 1500,
        isAnimated: !1
    },
    corban: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    corn: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    corn2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    corn3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    corndog: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cornstalk: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    coronavirus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    costarica: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cotedivoire: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    couch: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    courierman: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    covid: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    covid19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cow: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    cow2: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    cow3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cow4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cow5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cow6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cow7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cow8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cowbell: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    crab: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crab2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crab3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crab4: {
        width: 256,
        height: 256,
        isAnimated: !0
    },
    crab5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crack: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cracker: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    crane: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    crane2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    crate: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crate2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crate3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crater: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    crayon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    creeper: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    crest: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crest2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crest3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crest4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crib: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    croatia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    croc: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crocodile: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    croissant: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    crossbones: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    crown: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    crown2: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    crown3: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    crown4: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    crown5: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    crown6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crown7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cryolophosaurus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crystal: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crystal2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crystal3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crystal4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    crystalball: {
        width: 756,
        height: 756,
        isAnimated: !1
    },
    crystals: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ctile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    cub: {
        width: 550,
        height: 550,
        isAnimated: !1
    },
    cub2: {
        width: 550,
        height: 550,
        isAnimated: !1
    },
    cuba: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cube: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cube2: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cube3: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cube4: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cube5: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cube6: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cube7: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cube8: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cube9: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cubeblue: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cubebrown: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cubegray: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cubegreen: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cubeorange: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cubepink: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cubepurple: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cubered: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cubeyellow: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    cuckooclock: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    cuckoodoor: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    cuckoodoor2: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    cucumber: {
        width: 202,
        height: 202,
        isAnimated: !1
    },
    cup: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake16: {
        width: 497,
        height: 497,
        isAnimated: !1
    },
    cupcake17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cupcake20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake5: {
        width: 870,
        height: 870,
        isAnimated: !1
    },
    cupcake6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cupcake9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    curry: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    curtseychibi: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    cyber: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    cyborgvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    cyclist: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    cyclops: {
        width: 105,
        height: 105,
        isAnimated: !1
    },
    cymbal: {
        width: 1200,
        height: 1200,
        isAnimated: !1
    },
    cyprus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    czechrepublic: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dab: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dab2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dab3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dab4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dab5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dagger: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dalmatian: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dancer: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dancer2: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    dancing: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    danger: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dantdmvip: {
        width: 849,
        height: 849,
        isAnimated: !1
    },
    darkangel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    daschund: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dashboard: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    deanna: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck25: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck26: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck27: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck28: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck29: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck30: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck31: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck32: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck33: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck34: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck35: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck36: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck37: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck38: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck39: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck40: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck41: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck42: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck43: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck44: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck45: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck46: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck47: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck48: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck49: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck50: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck51: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck52: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deck9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deer: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    deer2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deer3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deer4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deer5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    deerprint: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    democraticrepublicofthecongo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    denmark: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    desertcactus: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    desk2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    desk3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    destroyervip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    detector: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diary: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dick: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    die: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    die1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    die2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    die3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    die4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    die5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    die6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dieblack5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diegreen5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diered5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diewhite5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dig: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    digitaltime1: {
        width: 699,
        height: 699,
        isAnimated: !1
    },
    dino: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dino9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dinobody: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dinobones: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dinobot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dinohead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dinolove: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dinopilot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dinosaur: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dinosaur2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dinosaur3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dinosaur4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dinosaur5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dinosaurvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diplodocus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dipper: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    director: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    disk: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diver: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diver2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diver2ok: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diver2standing: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diver2up: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diverok: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diverstanding: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diverup: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    divingboard: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    divingboard2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    divingboard3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    divingboard4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    diykitty: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    djibouti: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    dna: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    doctor: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    doctor2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    doctor3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dodo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dodo2: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    dodo3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    dog1: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    dog10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog11body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog11head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog12body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog12head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog13body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog13head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog14body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog14head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog15body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog15head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog16body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog16head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog17body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog17head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog18body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog18head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog19body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog19head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog20body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog20head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog21body: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog21head: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog25: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog26: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog27: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog28: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog29: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog30: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog2vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog3vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog4vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dog9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dogasusvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dogbowl: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    doghappy: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    dogsad: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    dogtailicon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dogtailicon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dogvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dolphin: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dominica: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dominicanrepublic: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donaldtrump: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    donkey: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    donkey2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donkey3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donkeyking: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    donut: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    donut10: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    donut11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    donut20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut25: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut26: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut27: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut28: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut29: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut30: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut31: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut32: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut33: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut34: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    donut5: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    donut6: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    donut7: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    donut8: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    donut9: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    door2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    door3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    door4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    door5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    door6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    door7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dorygnathus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dot: {
        width: 80,
        height: 80,
        isAnimated: !1
    },
    doughnut: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    dozer: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    dragon: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dragon10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon11down: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon11left: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon11right: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon11up: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dragon2vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragon3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dragon4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dragon5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dragon6: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    dragon7: {
        width: 400,
        height: 400,
        isAnimated: !0
    },
    dragon8: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    dragon9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragonfire: {
        width: 54,
        height: 54,
        isAnimated: !1
    },
    dragonfly: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragonfly2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragonfly3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dragonhead: {
        width: 210,
        height: 210,
        isAnimated: !1
    },
    dragonvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drawafacevip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drdastardly: {
        width: 140,
        height: 140,
        isAnimated: !1
    },
    dreamcatcher: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    drifter: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    drink: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drive: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    droid: {
        width: 436,
        height: 436,
        isAnimated: !1
    },
    droidfly: {
        width: 426,
        height: 426,
        isAnimated: !1
    },
    drone: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drone1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drone2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drone3: {
        width: 630,
        height: 630,
        isAnimated: !1
    },
    drone4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drone5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drone6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drone7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drone8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    drum: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dtile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    duck: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    duck2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    duck3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    duck4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    dumpling: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    dumptruck: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    dumptruck2: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    dumptruck3: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    dumptruck4: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    dwarf: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    eagle: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    eagle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    eagle3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    eagle4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ear: {
        width: 440,
        height: 440,
        isAnimated: !1
    },
    ear2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    earth: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    earth2: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    earth3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    easterisland: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    echidna: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ecuador: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    egg10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    egg3: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    egg4: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    egg5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    egg9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    eggplant: {
        width: 362,
        height: 362,
        isAnimated: !1
    },
    egypt: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    eiffeltower: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ekey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    electricstickmanvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    elephant: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    elephant2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    elephant3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    elephant4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    elffire: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    elfwater: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    elfwood: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    elsalvador: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    email: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    emma: {
        width: 157,
        height: 157,
        isAnimated: !1
    },
    emoji: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojiangry: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojibigsmile: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojicrazy: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojicry: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojigirl: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    emojiglasses: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojigrin: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojihushed: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojilaugh: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojilisten: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojilove: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojiscared: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojisick: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojising: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojisleep: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojismile: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojisurprise: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojitear: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emojiwink: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    emu: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    engineer: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    eniac: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    envelope: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    envelope2: {
        width: 586,
        height: 586,
        isAnimated: !1
    },
    envelopeflap: {
        width: 583,
        height: 583,
        isAnimated: !1
    },
    epaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    equatorialguinea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    eritrea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    estonia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ethiopia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    etile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    eudimorphodon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    evanhavingfun: {
        width: 320,
        height: 320,
        isAnimated: !1
    },
    evelynvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    evilfairy: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    evillaugh: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    excavator: {
        width: 701,
        height: 701,
        isAnimated: !1
    },
    excavator2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    excavator3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    exit: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    explode: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    explosion: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    extruder: {
        width: 370,
        height: 370,
        isAnimated: !1
    },
    eye: {
        width: 35,
        height: 35,
        isAnimated: !1
    },
    eye2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    eye3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    eye4: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    eyeball: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    eyeball2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    eyeballbushes: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    f1car: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    face: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    face2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    face3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    facegraphics1: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    facenumbers1: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    fairy: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fairy2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fairybody: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    fairygodmother: {
        width: 418,
        height: 418,
        isAnimated: !1
    },
    fairyhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    falafel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    falafel2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    falefel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fan: {
        width: 560,
        height: 560,
        isAnimated: !1
    },
    fan2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    farmcow: {
        width: 192,
        height: 192,
        isAnimated: !1
    },
    farmer: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    farmer2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    farmhorse: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    farmpig: {
        width: 156,
        height: 156,
        isAnimated: !1
    },
    farmwars: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fart: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fatcat: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    feeling: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    fern: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    ferriswheel: {
        width: 385,
        height: 385,
        isAnimated: !1
    },
    ferriswheel2: {
        width: 524,
        height: 524,
        isAnimated: !1
    },
    fidgetspinner: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fidgetspinner2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fido: {
        width: 320,
        height: 320,
        isAnimated: !1
    },
    fiji: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    finger: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    finger2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    finish: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    finland: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    finvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fire: {
        width: 350,
        height: 350,
        isAnimated: !0
    },
    fire2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fireball: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    firefighter: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    firefly: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    firefly2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    firefly3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fireplace: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    firetruck: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    firetruck2: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    firework: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    firework2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    firework3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    firework4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish: {
        width: 325,
        height: 325,
        isAnimated: !1
    },
    fish10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    fish20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish25: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish26: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish27: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish28: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish29: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fish30: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish31: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish32: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish33: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish34: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish35: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish36: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish37: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish38: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish39: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fish40: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish41: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish42: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish43: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish44: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish45: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish46: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish47: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish48: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish49: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fish50: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish51: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish6: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fish7: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fish8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fish9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fist: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    flag: {
        width: 310,
        height: 310,
        isAnimated: !1
    },
    flag2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flagfrance: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flagspain: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flagunitedkingdom: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flagunitedstates: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flame: {
        width: 256,
        height: 256,
        isAnimated: !0
    },
    flames: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    flamingo: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    flamingo2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flamingstickmanvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flare: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    flare2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flare3: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    flareblue: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    flaregreen: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    flarered: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    flareyellow: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    flash: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    flashdrive: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flask: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    flask2: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    flats: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    flats2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    floaty: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floaty2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floaty3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floaty4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floaty5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floaty6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floaty7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floaty8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floaty9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floortom: {
        width: 480,
        height: 480,
        isAnimated: !1
    },
    floppy: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    floppydisk: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    florist: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flower: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flower2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    flower3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    flower4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    flower5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flower6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flower7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flower8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flower9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flowerinpot: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fly: {
        width: 60,
        height: 60,
        isAnimated: !0
    },
    fly2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fly3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fly4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fly5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fly6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fly7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flyer: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    flyingcookie: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    flyingsaucer: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    flyingsidekick: {
        width: 225,
        height: 225,
        isAnimated: !1
    },
    flyswatter: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    foamfinger: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    food: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    football: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    footballboard: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    footballhelmet: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    footballpads: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    footballtickets: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    footballtrophy: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    fox: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    fox2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fox3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    fox4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    foxboy: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    fpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    fracturedplanet: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    frameblue: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    framegray: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    framered: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    france: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    frankfurter: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    frenchfries: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fries: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fries2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    frog: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    frog2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    frog3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    frog4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    frog5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    frontloader: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    frosting: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fruit: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    fryingpan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ftile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    futbol: {
        width: 170,
        height: 170,
        isAnimated: !1
    },
    gabon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gagh: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    gal: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    galaxy: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gallop1: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop10: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop11: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop12: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop13: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop14: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop15: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop16: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop6: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop7: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop8: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gallop9: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gambia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gameboard: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameboard10: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameboard2: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameboard3: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameboard4: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameboard5: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameboard6: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameboard7: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameboard8: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameboard9: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gameover: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gameover2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gameover3: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    gameover4: {
        width: 560,
        height: 560,
        isAnimated: !1
    },
    garagedoor: {
        width: 171,
        height: 171,
        isAnimated: !1
    },
    garrettgreenshirt: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    garretthead: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    gavinandfriend: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gavinfishing: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    gavinwithbaby: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    gazelle: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gear: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    gear10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gear2: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    gear3: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    gear4: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    gear5: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    gear6: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    gear7: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    gear8: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    gear9: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    gearssoi: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gecko: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gecko2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gecko2vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gecko3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    geckoprint: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    geckovip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gem: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gem2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    georgehwbush: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    georgewashington: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    georgewashingtonchin: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    georgewashingtontop: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    georgewbush: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    georgia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    germany: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    germbot: {
        width: 160,
        height: 160,
        isAnimated: !1
    },
    ghana: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ghost1: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ghost10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghost9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ghostbustersvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    giant: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gift: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    gift2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gift3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gift4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gift5: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    gift5white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    gingerbreadman: {
        width: 425,
        height: 425,
        isAnimated: !1
    },
    gingerbreadwoman: {
        width: 425,
        height: 425,
        isAnimated: !1
    },
    giraffe: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    giraffe2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    giraffe3: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    giraffe4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    giraffe5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    girl: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    girl2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    girl3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    girl4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    girl5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    girlscout: {
        width: 378,
        height: 378,
        isAnimated: !1
    },
    girlvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    giza: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    glass: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    glasses: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    glasses2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    glasses3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    glasses4: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    glasses5: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    glasses6: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    glasses7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    glasses8: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    globe: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    glove: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    glove2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gnome: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    goalie: {
        width: 257,
        height: 257,
        isAnimated: !1
    },
    goalie2: {
        width: 257,
        height: 257,
        isAnimated: !1
    },
    goalie3: {
        width: 257,
        height: 257,
        isAnimated: !1
    },
    goat: {
        width: 251,
        height: 251,
        isAnimated: !1
    },
    goat2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    goat3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    goatbody: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    goathead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    godmotherbody: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    godmotherhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gokart: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gold: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gold2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    goldbot: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    goldenfinchvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    goldenrecord: {
        width: 4167,
        height: 4167,
        isAnimated: !1
    },
    goldfish: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    goldilocks: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    golfballethan: {
        width: 125,
        height: 125,
        isAnimated: !1
    },
    golfcart: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    golfholeethan: {
        width: 255,
        height: 255,
        isAnimated: !1
    },
    goose: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gopher: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    gorilla: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    gracehopper: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    grader: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    graduate: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    graduation: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    granolabar: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    grapes: {
        width: 421,
        height: 421,
        isAnimated: !1
    },
    grapewagon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    grasshopper: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    grassyground: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    grayspires: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    greece: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    greeksalad: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    green: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    greencircle: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    greendigitalclock: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    greenmountains: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    greenpepper: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    grenada: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    griffonvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    grilledcheese: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    grocerycart: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    groom: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    groom2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    growythings: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    gtile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    guatemala: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    guinea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    guineabissau: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    guineapig: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    guitar: {
        width: 566,
        height: 566,
        isAnimated: !1
    },
    guitar2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gull: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gum: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    gummyworm: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    guy: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    guy2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    guy3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    guyana: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gymnast: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    gymnast2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hair: {
        width: 275,
        height: 275,
        isAnimated: !1
    },
    hair10: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    hair11: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hair12: {
        width: 255,
        height: 255,
        isAnimated: !1
    },
    hair13: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    hair14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hair15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hair16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hair17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hair18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hair19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hair2: {
        width: 381,
        height: 381,
        isAnimated: !1
    },
    hair3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hair4: {
        width: 302,
        height: 302,
        isAnimated: !1
    },
    hair5: {
        width: 193,
        height: 193,
        isAnimated: !1
    },
    hair6: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hair7: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    hair8: {
        width: 212,
        height: 212,
        isAnimated: !1
    },
    hair9: {
        width: 310,
        height: 310,
        isAnimated: !1
    },
    haircolor: {
        width: 691,
        height: 691,
        isAnimated: !1
    },
    haiti: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hal: {
        width: 316,
        height: 316,
        isAnimated: !1
    },
    halhello: {
        width: 316,
        height: 316,
        isAnimated: !1
    },
    haljump: {
        width: 316,
        height: 316,
        isAnimated: !1
    },
    halparty: {
        width: 316,
        height: 316,
        isAnimated: !1
    },
    halpresents: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    halrocket: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    halsad: {
        width: 316,
        height: 316,
        isAnimated: !1
    },
    halscared: {
        width: 316,
        height: 316,
        isAnimated: !1
    },
    halsurprised: {
        width: 316,
        height: 316,
        isAnimated: !1
    },
    halwave: {
        width: 316,
        height: 316,
        isAnimated: !1
    },
    ham: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    ham2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ham3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hamburger: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hamburger2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hammer: {
        width: 643,
        height: 643,
        isAnimated: !1
    },
    hammerhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hampstervip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hamster: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    hamster2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    hamster3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hamster4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hand: {
        width: 182,
        height: 182,
        isAnimated: !1
    },
    hand10: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand11: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand12: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand13: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand14: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand15: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand16: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand17: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand18: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand2: {
        width: 330,
        height: 330,
        isAnimated: !1
    },
    hand3: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand4: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand5: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand6: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand7: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand8: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    hand9: {
        width: 750,
        height: 750,
        isAnimated: !1
    },
    handbroom: {
        width: 180,
        height: 180,
        isAnimated: !1
    },
    hands1: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    hank: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hannah: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    happyallie: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    happybrady: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    happydevan: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    happyelena: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    happyfacevip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    happymaribella: {
        width: 321,
        height: 321,
        isAnimated: !1
    },
    happynathan: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    happynolan: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    happypottervip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hat1: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    hat10: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat11: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat12: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat13: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat14: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat15: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat16: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    hat17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hat18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hat19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hat2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    hat20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hat21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hat3: {
        width: 199,
        height: 199,
        isAnimated: !1
    },
    hat4: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat5: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat6: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat7: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat8: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hat9: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hayboys: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    headstand: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    heart: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    heart2: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    heart3: {
        width: 270,
        height: 270,
        isAnimated: !1
    },
    heart4: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    heart5: {
        width: 616,
        height: 616,
        isAnimated: !1
    },
    heart6: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    heart6white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    heartbot: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    hearts: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hedgehog: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    hedgehog2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hedgehog3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hedgehog4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    heel: {
        width: 307,
        height: 307,
        isAnimated: !1
    },
    heel2: {
        width: 307,
        height: 307,
        isAnimated: !1
    },
    heel3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    heel4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    heli: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    heli2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    helicopter: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    helicopter1: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    helicopter2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    helicopter3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    helicopter4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    helmet: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hero: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hero2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hero3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hero4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hero5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hero6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hi: {
        width: 120,
        height: 120,
        isAnimated: !1
    },
    hightom: {
        width: 236,
        height: 236,
        isAnimated: !1
    },
    hightopshoe: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    hightopshoe2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    highway: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hihat: {
        width: 1300,
        height: 1300,
        isAnimated: !1
    },
    hikariandkeivip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hillaryclinton: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hinatahyuganaruto: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hippo: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    hippo2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    hockeymonster: {
        width: 640,
        height: 640,
        isAnimated: !1
    },
    hockeynet: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hockeystick: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    hologram: {
        width: 760,
        height: 760,
        isAnimated: !1
    },
    holysee: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    homework: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    honduras: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    honey: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    hoop: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hoop2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    horn: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hornet: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    horror: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    horror2: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    horse: {
        width: 283,
        height: 283,
        isAnimated: !1
    },
    horse2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    horse3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    horse4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    horse5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    horse6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hotairballoon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hotairballoon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hotdog: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    hotdog2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hotdog3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hotdog4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hotdog5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hotdog6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hotdog7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hotpocket: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    hotpotato: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    house: {
        width: 130,
        height: 130,
        isAnimated: !1
    },
    house2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    house3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    house4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    housevip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hoverboard: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hovercraft: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    hoverhouse: {
        width: 270,
        height: 270,
        isAnimated: !1
    },
    hpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    htile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    hud: {
        width: 768,
        height: 768,
        isAnimated: !1
    },
    hud2: {
        width: 768,
        height: 768,
        isAnimated: !1
    },
    hula: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    human: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hummingbird: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    hump: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hungary: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hungry: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    husky: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hydrant: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hydrant2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hydrant3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hydranticon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    hydranticon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ice: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icecream: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icecream2: {
        width: 623,
        height: 623,
        isAnimated: !1
    },
    icecream3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icecream4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icecream5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icecream6: {
        width: 103,
        height: 103,
        isAnimated: !1
    },
    icecream7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icecreambar: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    icecreamcone: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icecreamcone2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icecreamsundae: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    icecreamsundae2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    icecreamtruck: {
        width: 355,
        height: 355,
        isAnimated: !1
    },
    iceland: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icespike: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icicle: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icicle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    icing: {
        width: 255,
        height: 255,
        isAnimated: !1
    },
    iconreflection: {
        width: 140,
        height: 140,
        isAnimated: !1
    },
    ikey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    ilovemathvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    india: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    indonesia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    infinity: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    inkblack: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    inkblue: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    inkbrown: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    inkgreen: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    inkorange: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    inkpink: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    inkpurple: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    inkred: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    inkyellow: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    invader: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    invader10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    invader2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    invader3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    invader4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    invader5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    invader6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    invader7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    invader8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    invader9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    investor: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    io: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ionaswimming: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    ipad: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ipad2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ipaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    iphone: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    iran: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    iraq: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ireland: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    islariding: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    israel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    italy: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    itile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    ivory: {
        width: 194,
        height: 194,
        isAnimated: !1
    },
    jacker: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jaguarvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jamaica: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jamesbombed: {
        width: 315,
        height: 315,
        isAnimated: !1
    },
    japan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jar: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    jeff: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jeffreyfootball: {
        width: 332,
        height: 332,
        isAnimated: !1
    },
    jellyfish: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jellyfish2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jellyfish3: {
        width: 256,
        height: 256,
        isAnimated: !0
    },
    jellyfish4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jellyfish5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jellyfishhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jet: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jetkid: {
        width: 204,
        height: 204,
        isAnimated: !1
    },
    jetski: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jewel1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jewel2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jewel3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jewel4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jewel5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jewel6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jewel7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jewel8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jewelry: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewelry10: {
        width: 154,
        height: 154,
        isAnimated: !1
    },
    jewelry11: {
        width: 468,
        height: 468,
        isAnimated: !1
    },
    jewelry12: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewelry13: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewelry14: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewelry2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewelry3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewelry4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewelry5: {
        width: 239,
        height: 239,
        isAnimated: !1
    },
    jewelry6: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewelry7: {
        width: 184,
        height: 184,
        isAnimated: !1
    },
    jewelry8: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jewelry9: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    jillianvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    jordan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    joystick: {
        width: 105,
        height: 105,
        isAnimated: !1
    },
    joystickbase: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    jpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    jtile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    juice: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    jumbonumbers: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    jumbotron: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jumpdrive: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jumper: {
        width: 448,
        height: 448,
        isAnimated: !1
    },
    jumper2: {
        width: 448,
        height: 448,
        isAnimated: !1
    },
    jumper3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jumper4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jumping: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jumprope: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    jungle: {
        width: 1536,
        height: 1536,
        isAnimated: !1
    },
    jupiter: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    jupiter2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    justinbieber: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    justinbieberchin: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    justinbiebertop: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    justintrudeau: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    kangaroo: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    karategirlvip: {
        width: 499,
        height: 499,
        isAnimated: !1
    },
    karatemouse2vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    karatemousevip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kat2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    katyperry: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    katyperrychin: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    katyperrytop: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    kazakhstan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kebab: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kennedyvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kent: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    kenya: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kerstboom: {
        width: 1042,
        height: 1042,
        isAnimated: !1
    },
    kerstman: {
        width: 966,
        height: 966,
        isAnimated: !0
    },
    ketchup: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    key: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    key2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    key3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    key4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    key5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    kid10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid2: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    kid3: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    kid4: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    kid5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kid9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kidrobotmunny: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    killerwhale: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    king: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    king2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    king3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    king4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    kingoffishvip: !0,
    kingoffishvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kiondra: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kiribati: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kiss: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    kite: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    kite2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kite3: {
        width: 900,
        height: 900,
        isAnimated: !1
    },
    kitten: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kitten2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kitten3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kittenprint: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kitty: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kittytest: {
        width: 800,
        height: 800,
        isAnimated: !0
    },
    kiwi: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    kkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    knife: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    knife2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    knight: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    knight2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    knight3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    knight4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    knight5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    komododragon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    kremlintower: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ktile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    kushiyaki: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kuwait: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    kyrgyzstan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    laboratory: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    ladder: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lady: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ladybug: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    ladybug2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ladybug3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lahti: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lama: {
        width: 410,
        height: 410,
        isAnimated: !1
    },
    lambo: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    lamborghini: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    lamppost1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lamppost2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lander: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    lani: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lantern: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    laos: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    laptop: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    larrypage: {
        width: 163,
        height: 163,
        isAnimated: !1
    },
    lasagna: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    laser: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    laser2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    laser3: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    laser4: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    laser5: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    laser6: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    laser7: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    laser8: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    latvia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lauren: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    leaf: {
        width: 446,
        height: 446,
        isAnimated: !1
    },
    leaf2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    leaf3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    leaf4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lebanon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    leftmitten: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    leftmitten2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    leftmitten3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lemon: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    lemon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lemur: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    lemur2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    leopard: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    leprechaun: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    leprechaunbody: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    leprechaunhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lesotho: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    letsgobitsboxvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    letter: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    letter2: {
        width: 584,
        height: 584,
        isAnimated: !1
    },
    lettuce: {
        width: 291,
        height: 291,
        isAnimated: !1
    },
    lettuce2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    level1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    level2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    level3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    level4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    level5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    level6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    level7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    level8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    level9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    liberia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    library: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    libya: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lid: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    liechtenstein: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lifting: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    light: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    lightning: {
        width: 512,
        height: 512,
        isAnimated: !1
    },
    lightning2: {
        width: 2E3,
        height: 2E3,
        isAnimated: !1
    },
    lime: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    line: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    link: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    lion: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    lion2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lion3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lionfish: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    lips: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    lips2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    lithuania: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    littlepig: {
        width: 160,
        height: 160,
        isAnimated: !1
    },
    lizard: {
        width: 550,
        height: 550,
        isAnimated: !1
    },
    lizardbody: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    lizardhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    llama: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    lobster: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lobster2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lock: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lock2: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    lock2white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    log: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    logosoi: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    lollipop: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    lonely: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    love: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lovingcatvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lovingheart2vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lovingheartvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    ltile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    lumberjack: {
        width: 445,
        height: 445,
        isAnimated: !1
    },
    lumberjack2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    luxembourg: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    lyre: {
        width: 257,
        height: 257,
        isAnimated: !1
    },
    macandcheese: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    macaroniandcheese: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    machamponmountainvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    madagascar: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mag: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    magician: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    magma: {
        width: 295,
        height: 295,
        isAnimated: !1
    },
    magnet: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    maiasaura: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    maildayvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    malala: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    malawi: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    malaysia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    malcolmturnbull: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    maldives: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mali: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    malta: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mammoth: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mammoth2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mammothbody: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mammothhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    man: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    man2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    man3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    man4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mango: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mantis: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    maraca: {
        width: 185,
        height: 185,
        isAnimated: !1
    },
    maracas: {
        width: 185,
        height: 185,
        isAnimated: !1
    },
    margaretthatcher: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    mariachikitty: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markeraqua: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markerblack: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markerblue: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markergray: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markergreen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markerorange: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markerpink: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markerpurple: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markerred: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    markeryellow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mars: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    mars2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    marshallislands: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    marshmallow: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    marshmellow: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    mauritania: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mauritius: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mazebot: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    meat: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    meatball: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    mechanic: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    medal99: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meerkat: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    melon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    melon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    menorah: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mercury: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    mercury2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mermaid: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    mermaid2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    mermaid3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    mermaid4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mermaidbody: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    mermaidhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mermaidpaintingvip: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    mermaidsvssharksvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    message: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    messagebot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    messagewhite: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    metalz: {
        width: 108,
        height: 108,
        isAnimated: !1
    },
    meteor: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meteor1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meteor2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meteor3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meteor4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meteor5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meteor6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meteor7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meteor8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    meteor9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mexico: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    micronesia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    microscope: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    milk: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    milkshake: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    millipede: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    mime: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mine: {
        width: 1100,
        height: 1100,
        isAnimated: !1
    },
    minecart: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    minivan: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    misspiggy: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    misspiggy2: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    mkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    moldova: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mole: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    molecule: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    molecule2: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    molecule3: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    monaco: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monalisa: {
        width: 752,
        height: 752,
        isAnimated: !1
    },
    money: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    money2: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    money2white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    moneybag: {
        width: 200,
        height: 200,
        isAnimated: !0
    },
    mongolia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monkey: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    monkey2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monkey3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monkey4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monkey5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monkey6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monkey7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monkeyarm: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    monkeyarm2: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    monster: {
        width: 243,
        height: 243,
        isAnimated: !1
    },
    monster10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster25: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster26: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster27: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster28: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster29: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster30: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster31: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster32: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster33: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster34: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster35: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster36: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster37: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster38: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster39: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster40: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster5: {
        width: 504,
        height: 504,
        isAnimated: !1
    },
    monster6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monster9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monsterball: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monstercop: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monstertruck: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    monstertruck2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    montenegro: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    moon: {
        width: 162,
        height: 162,
        isAnimated: !1
    },
    moon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    moon3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    moon4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    moon5: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    moose: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    moped: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    morocco: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mosquito: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mosquito2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mosquito3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mossyground: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    moth: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    motorcycle: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    motorcycle2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    motorcycle3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    motorcycle4: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    motorcycle5: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    motorcycle6: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    motorcycle7: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    motorcycle8: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    motorcycle9: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    mountain: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    mountains: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mouse: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    mouse2: {
        width: 124,
        height: 124,
        isAnimated: !1
    },
    mouse3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mouse4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mouth: {
        width: 360,
        height: 360,
        isAnimated: !1
    },
    mouth2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    mouth3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mouth4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mouth5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mouth6: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    movie: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    mozambique: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mozzarella: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    mp3player: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    mrfancy: {
        width: 236,
        height: 236,
        isAnimated: !1
    },
    mrwarshaw: {
        width: 512,
        height: 512,
        isAnimated: !1
    },
    mrx: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mtile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    muffin: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    muffin2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    muffin3: {
        width: 478,
        height: 478,
        isAnimated: !1
    },
    muffin4: {
        width: 485,
        height: 485,
        isAnimated: !1
    },
    muffin5: {
        width: 484,
        height: 484,
        isAnimated: !1
    },
    mug: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mummy: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mummy2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    munny: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    munnylogos: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    muscleman: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    mushroom: {
        width: 90,
        height: 90,
        isAnimated: !1
    },
    mushroom10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    mushroom3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mushroom9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    musicalnote: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    musician: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mustache: {
        width: 326,
        height: 326,
        isAnimated: !1
    },
    mustache2: {
        width: 325,
        height: 325,
        isAnimated: !1
    },
    mustache3: {
        width: 325,
        height: 325,
        isAnimated: !1
    },
    mustache4: {
        width: 325,
        height: 325,
        isAnimated: !1
    },
    mustache5: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    mustache6: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    mustard: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    mutebutton: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    myanmar: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    name: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    namibia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nanobot: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    narwhal: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    narwhal1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    narwhal2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    narwhal3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    narwhal4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    narwhal5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    narwhal6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    narwhal7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    narwhal8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nasa: {
        width: 650,
        height: 650,
        isAnimated: !1
    },
    nasa2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    nauru: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    navalmine: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    nebraskaflag: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ned: {
        width: 495,
        height: 495,
        isAnimated: !1
    },
    needle: {
        width: 270,
        height: 270,
        isAnimated: !1
    },
    needle2: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    needle3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nemesis: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nepal: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    neptune: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    neptune2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    net: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    netherlands: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    "new": {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    newhorizons: {
        width: 239,
        height: 239,
        isAnimated: !1
    },
    newwhite: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    newzealand: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nicaragua: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nickjonas: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    niger: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nigeria: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nightstand: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nightstand2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja2: {
        width: 550,
        height: 550,
        isAnimated: !1
    },
    ninja3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja7: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    ninja8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninja9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ninjanickpants: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    nofaceonelegwizzardvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    noodles: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    noodles2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    northkorea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    northmacedonia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    norway: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nose: {
        width: 99,
        height: 99,
        isAnimated: !1
    },
    nose2: {
        width: 386,
        height: 386,
        isAnimated: !1
    },
    nose3: {
        width: 144,
        height: 144,
        isAnimated: !1
    },
    nose4: {
        width: 79,
        height: 79,
        isAnimated: !1
    },
    nose5: {
        width: 92,
        height: 92,
        isAnimated: !1
    },
    nose6: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    nose7: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    note: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    note1: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    note2: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    notebook: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    notebook2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    notepad: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    noun: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    nova: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    npaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    ntile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    nuke: {
        width: 120,
        height: 120,
        isAnimated: !0
    },
    nurse: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    nurse2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    nurse3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    nurse4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    nurse5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    nutninja: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    o: {
        width: 155,
        height: 155,
        isAnimated: !1
    },
    oatmeal: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    obama: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    octopus: {
        width: 465,
        height: 465,
        isAnimated: !1
    },
    octopus2: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    octopus3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ogre: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    okapi: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    okey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    oldman: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    olive: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    oman: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    onion: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    onion2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    oops: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    opaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    operahouse: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    operamouth: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    operasinger: {
        width: 2E3,
        height: 2E3,
        isAnimated: !1
    },
    orange: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    orange2: {
        width: 301,
        height: 301,
        isAnimated: !1
    },
    orange3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    orange4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    orange5: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    orangecliffs: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    orangeslice: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    orca: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamibear: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamibird: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamicat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamicrane: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamielephant: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamifish: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamifox: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamimonkey: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamimouse: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamipig: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    origamisquirrel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    origamiswan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ornament9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    oscar: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    otile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    oval: {
        width: 143,
        height: 143,
        isAnimated: !1
    },
    oval2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    overlay: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    overlay10: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    overlay2: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    overlay3: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    overlay4: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    overlay5: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    overlay6: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    overlay7: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    overlay8: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    overlay9: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    owl: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    owl2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    owl3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    owl5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    owl6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ox: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    pad: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    paint: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    paintbrush: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    paintbrush2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pakistan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    palau: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    palestinestate: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    palette: {
        width: 179,
        height: 179,
        isAnimated: !1
    },
    palettevip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    panama: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pancake: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pancakebatter: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pancakeburnt: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pancakeraw: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pancakes: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    panda: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    panda2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    panda3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pandakid: {
        width: 211,
        height: 211,
        isAnimated: !1
    },
    panelpitch: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    panelroll: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    panelyaw: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    pants: {
        width: 199,
        height: 199,
        isAnimated: !1
    },
    paper: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    papuanewguinea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    paraguay: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    parrot: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    parrot2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    parrot3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    parrot4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    parsley: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    partyhat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    passport: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pasta: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pastamonster: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pati: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    pawn: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pawn2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pbj: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    pc: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    peach: {
        width: 163,
        height: 163,
        isAnimated: !1
    },
    peacock: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    peanut: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    peanut2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    peanut3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pear: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pear2: {
        width: 408,
        height: 408,
        isAnimated: !1
    },
    pear3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pearl: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pebble: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pecan: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pecan2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    peekabot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pegasus: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    pellet: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    pen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pen2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pen3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pen4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pen5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pencil: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pencil2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pencilbot: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    penguin: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    penguin2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    penguin3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    penguin4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    penguin5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    penguin6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    penguin7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    penguin8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    people: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pepernoot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pepper: {
        width: 83,
        height: 83,
        isAnimated: !1
    },
    pepper2: {
        width: 355,
        height: 355,
        isAnimated: !1
    },
    peppermint: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pepperoni: {
        width: 93,
        height: 93,
        isAnimated: !1
    },
    pepperoni2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    person: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    person2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    person3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    peru: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    petal: {
        width: 160,
        height: 160,
        isAnimated: !1
    },
    petal2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    peterpan: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    petfood: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    philippines: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    phoenix: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    phone: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pianist: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    piano: {
        width: 431,
        height: 431,
        isAnimated: !1
    },
    piano2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pianoa: {
        width: 276,
        height: 276,
        isAnimated: !1
    },
    pianob: {
        width: 276,
        height: 276,
        isAnimated: !1
    },
    pianoc: {
        width: 276,
        height: 276,
        isAnimated: !1
    },
    pianod: {
        width: 276,
        height: 276,
        isAnimated: !1
    },
    pianoe: {
        width: 276,
        height: 276,
        isAnimated: !1
    },
    pianof: {
        width: 276,
        height: 276,
        isAnimated: !1
    },
    pianog: {
        width: 276,
        height: 276,
        isAnimated: !1
    },
    pic: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pic2: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pic3: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pic4: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pic5: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pic6: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pic7: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pic8: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pic9: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pickle: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pickle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pickup: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    picnicbasket: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    picture: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pie: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pie2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    pie3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pie4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pie5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pie6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pie7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pie8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    pig10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pig9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pigflying: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pikachuvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pikminvip: {
        width: 780,
        height: 780,
        isAnimated: !1
    },
    pillar: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pin: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pine: {
        width: 327,
        height: 327,
        isAnimated: !1
    },
    pineapple: {
        width: 550,
        height: 550,
        isAnimated: !1
    },
    pinkcraters: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    pinkcube: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    pinkroses: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pinocchio: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pipe: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pipe2: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pipe3: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pipe4: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    pipe5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pipe6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    piranha: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pirate: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pirate2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pirateflag: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    piratehat: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    piratehook: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    piratekid: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pirateship: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pirateship2: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    piratex: {
        width: 102,
        height: 102,
        isAnimated: !1
    },
    pisa: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pistachio: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pistachio2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pit: {
        width: 468,
        height: 468,
        isAnimated: !1
    },
    pit2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pita: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixel: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixel2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixel3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixel4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelape: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelball: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball0: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelball9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballa: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballb: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballc: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballd: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballe: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballf: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballg: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballh: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballi: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballj: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballk: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballl: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballm: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballn: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballp: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballq: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballr: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballs: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballt: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballu: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballv: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballw: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballx: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelbally: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelballz: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixelbunny: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelcyclops: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixeldog: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelknight: {
        width: 231,
        height: 231,
        isAnimated: !1
    },
    pixelkoala: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelman: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelmonkey: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelrat: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelslug: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelsword: {
        width: 111,
        height: 111,
        isAnimated: !1
    },
    pixeltree: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixeltriclops: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixelwhite: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pixie: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixie2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixie3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pixie4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pizza: {
        width: 627,
        height: 627,
        isAnimated: !1
    },
    pizza2: {
        width: 283,
        height: 283,
        isAnimated: !1
    },
    pizza3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    pizza4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pizza5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pizzachef: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    place: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    plane: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    plane1: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    plane10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plane11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plane12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plane13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plane14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plane15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plane2: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    plane3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    plane4: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    plane5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    plane6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plane7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plane8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plane9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planet10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planet11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planet12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planet2: {
        width: 484,
        height: 484,
        isAnimated: !1
    },
    planet4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planet5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planet6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planet7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planet8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planet9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plant: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    plant2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plant3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plant4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planter: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    planter2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plate: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    plate2: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    plate3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    platform: {
        width: 430,
        height: 430,
        isAnimated: !1
    },
    platform2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    platform3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    platform4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    platypus: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    player: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    player2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    player3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    player4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pliers: {
        width: 480,
        height: 480,
        isAnimated: !1
    },
    plum: {
        width: 230,
        height: 230,
        isAnimated: !1
    },
    plumber: {
        width: 900,
        height: 900,
        isAnimated: !1
    },
    plumber2: {
        width: 900,
        height: 900,
        isAnimated: !1
    },
    plunger: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    pluto: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    pluto1: {
        width: 20,
        height: 20,
        isAnimated: !1
    },
    pluto2: {
        width: 50,
        height: 50,
        isAnimated: !1
    },
    pluto3: {
        width: 120,
        height: 120,
        isAnimated: !1
    },
    pluto4: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    pluto5: {
        width: 380,
        height: 380,
        isAnimated: !1
    },
    pluto6: {
        width: 650,
        height: 650,
        isAnimated: !1
    },
    pluto7: {
        width: 650,
        height: 650,
        isAnimated: !1
    },
    pluto8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pogo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    poisondonut: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    poland: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    polarbear: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    police: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    police2: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    policecar1: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    policecar2: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    pomegranate: {
        width: 310,
        height: 310,
        isAnimated: !1
    },
    pony: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pony2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pony3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    poo: {
        width: 320,
        height: 320,
        isAnimated: !1
    },
    pooltable: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    poop: {
        width: 320,
        height: 320,
        isAnimated: !1
    },
    poopvip: {
        width: 757,
        height: 757,
        isAnimated: !1
    },
    pop: {
        width: 200,
        height: 200,
        isAnimated: !0
    },
    pop2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    popcorn: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    popcorn2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    popcorn3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    popcorn4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    popcorn5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    popcorn6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    popcorn7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    poppy: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    poppy2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    popsicle: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    popsicle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pork: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    portal0: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portal1: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portal2: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portal3: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portal4: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portal5: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portal6: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portal7: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portal8: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portal9: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    portugal: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    postcard: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    postman: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pot2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    potato: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    potato2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    potion: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    potofgold: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    potogold: {
        width: 102,
        height: 102,
        isAnimated: !1
    },
    pow: {
        width: 250,
        height: 250,
        isAnimated: !0
    },
    powercrab: {
        width: 256,
        height: 256,
        isAnimated: !0
    },
    ppaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    prairiedog: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    pregnantwoman: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    present: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    present2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    present3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    present4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    present5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    presents: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    presents2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    prettymangagirl: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pretzel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    prince: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    prince2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    prince3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    prince4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    prince5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    prince6: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    prince7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    princesad: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    princess: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    princess2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    princess3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    principal: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    print: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    prize: {
        width: 550,
        height: 550,
        isAnimated: !1
    },
    professor: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pteranodon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pterodactyl: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ptile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    puck: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    pug: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pullup: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    puma: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    puma2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pumpkin: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    pumpkin2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    puppy: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    puppy2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    puppybody: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    puppyhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    purple: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    purplecliffs: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    purplecraters: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    purplemountains: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    puzzle1: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle10: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle11: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle12: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle2: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle3: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle4: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle5: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle6: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle7: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle8: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    puzzle9: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    qatar: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    qkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    qpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    qtile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    queen: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    queen2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    queen3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    queen4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    queen5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    question: {
        width: 120,
        height: 120,
        isAnimated: !1
    },
    question2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    quill: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    quill2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    quokka: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rabbit: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    rabbit2: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    rabbit3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rabbit4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rabbit5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rabbit6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rabbithat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    raccoon: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    raccoon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    raccoon3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    raccoon4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    raccoonprint: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    racecar: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    racer: {
        width: 136,
        height: 136,
        isAnimated: !1
    },
    racetoinfinityvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    racetrack: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    racoon: {
        width: 678,
        height: 678,
        isAnimated: !1
    },
    racoon3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    radar: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    radio: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    radiodish: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    rainbow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rainbow2: {
        width: 508,
        height: 508,
        isAnimated: !1
    },
    rainbowblobvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rainbowclock: {
        width: 699,
        height: 699,
        isAnimated: !1
    },
    ramp: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ramp2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ramp3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rapunzel: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    raspberry: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    rat: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rayshot: {
        width: 50,
        height: 50,
        isAnimated: !1
    },
    reba: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    red: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    redcircle: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    redcoat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    redcube: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    reddishrocks: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    redpanda: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    redridinghood: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    redridinghood2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    redridinghood3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    reef: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    referee: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    reindeer: {
        width: 499,
        height: 499,
        isAnimated: !1
    },
    replay: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    reporter: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rescueheli: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    resizer: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rhino: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    ribbon: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    ribbon2: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    ribbon2white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    rice: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rightmitten: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rightmitten2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rightmitten3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ring: {
        width: 301,
        height: 301,
        isAnimated: !1
    },
    rings: {
        width: 110,
        height: 110,
        isAnimated: !1
    },
    rinniebinnie: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    riuvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    road: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    road2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    road3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    road4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    road5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    road6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    road7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rob: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    rob1: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    rob2: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    rob3: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    rob4: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    rob5: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    rob6: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    robber: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robocat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robodog: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robodog2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot: {
        width: 512,
        height: 512,
        isAnimated: !1
    },
    robot10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot2: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    robot3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot5: {
        width: 316,
        height: 316,
        isAnimated: !1
    },
    robot6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robot9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robotbug: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robotfish: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    robotheart: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock: {
        width: 166,
        height: 166,
        isAnimated: !1
    },
    rock10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rock2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rock200x200: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    rock3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rock4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rock5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rock6: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rock7: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rock8: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rock9: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rocket: {
        width: 370,
        height: 370,
        isAnimated: !1
    },
    rocket10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rocket11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rocket12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rocket13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rocket2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    rocket3: {
        width: 198,
        height: 198,
        isAnimated: !1
    },
    rocket4: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    rocket5: {
        width: 629,
        height: 629,
        isAnimated: !1
    },
    rocket6: {
        width: 425,
        height: 425,
        isAnimated: !1
    },
    rocket7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rocket8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rocket9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rocketfly: {
        width: 370,
        height: 370,
        isAnimated: !0
    },
    rocketpen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rocketpen2: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    rockeyvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rockstar: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rodent: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rodent2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    roger: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    romania: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    romannumerals: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    rook: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rook2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rooster: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rootedground: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    rope: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rory: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rose: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rose2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rose3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rose4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rosebush: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    rover: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    royalbaby: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    rpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    rtile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    rubberchicken: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rubikscube: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rubikscube2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ruby: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rug: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ruinsinathens: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    russia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    rwanda: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sadie: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sadpanda: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    saintkittsandnevis: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    saintlucia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    saintvincentandthegrenadines: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    salad: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    salad2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    salami: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sale: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    salewhite: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    salmon: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    salmon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    salmon3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    samandcousin: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    samandfamily: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    samoa: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    samrugby: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    samrugby2: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    sand: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    sand2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    sandal: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    sandal2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    sandals: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sandcastle: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    sandcastle2: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    sandwich: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    sandwich2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    sandwich3: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    sandycliffs: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    sanelijo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sanmarino: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    santa: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    santa2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    santa3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    santa4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    santahat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    saotomeandprincipe: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    satellite: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    saturn: {
        width: 1058,
        height: 1058,
        isAnimated: !1
    },
    saturn2: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    saturn3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    saucer: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    saudiarabia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sausage: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    sausage2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sausage3: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    sausage4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sausagefork: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    saw: {
        width: 906,
        height: 906,
        isAnimated: !1
    },
    scarlsen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scarlsen2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scarlsen3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scarlsen4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scarlsen5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scarlsen6: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    scarlsen7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scarlsen8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    school: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    schoolrye: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    scientist: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scissors: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scoop: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    scoop2: {
        width: 231,
        height: 231,
        isAnimated: !1
    },
    scoopbutterscotch: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    scoopchocolate: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    scoopstrawberry: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    scoopvanilla: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    scope: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scoreboard: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    scoreboard2: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    scoreboard3: {
        width: 451,
        height: 451,
        isAnimated: !1
    },
    scorpion: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scott: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scroll: {
        width: 852,
        height: 852,
        isAnimated: !1
    },
    scroll2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    scroll3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seahorse: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    seahorse2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seahorse3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seahorse4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seal: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    seal2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seal3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seal4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seal5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seal6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seal7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seamonster: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    seamonster2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    seamonsterbody: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seamonsterhead: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    seamonsterhead2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seashell: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    seashell10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seashell2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seashell3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seashell4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seashell5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seashell6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seashell7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seashell8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seashell9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaturtle: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    seaturtle2: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    seaweed: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed17: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed18: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed19: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed20: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed21: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed22: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed23: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed24: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seaweed9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seed: {
        width: 50,
        height: 50,
        isAnimated: !1
    },
    segway: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    selector: {
        width: 73,
        height: 73,
        isAnimated: !1
    },
    selenagomez: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    selenagomezchin: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    selenagomeztop: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    senegal: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    serbia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sergeybrin: {
        width: 186,
        height: 186,
        isAnimated: !1
    },
    server: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    seychelles: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shadow3: {
        width: 768,
        height: 768,
        isAnimated: !1
    },
    shadowedyellowcube: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    share: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shark: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    shark2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shark3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sharkball: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sharkball2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sharpei: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sheep: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    sheep2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sheep3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sheep4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sheep5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shell: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shell2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    shelves: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shibainu: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shihtzu: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ship: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ship2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    ship3: {
        width: 879,
        height: 879,
        isAnimated: !1
    },
    ship4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shipping: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    shippingwhite: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    shipwheel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shirt: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shirt1: {
        width: 642,
        height: 642,
        isAnimated: !1
    },
    shoe: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shoe1: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    shoe2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    show: {
        width: 202,
        height: 202,
        isAnimated: !1
    },
    shrimp: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    shrimp2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sierraleone: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sign: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    sign2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sign3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sign4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sign5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    signal: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    signal2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    signal3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    sillysisters: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    singapore: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sink: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sint: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    sirdaddy: {
        width: 480,
        height: 480,
        isAnimated: !1
    },
    sistertori: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    skateboard: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    skateboard1: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    skateboard2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    skeleton: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    skeleton2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    skeleton3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    skeleton4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    skeleton5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    skeleton6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    skey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    skiier: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    skull: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    skull2: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    skull3: {
        width: 323,
        height: 323,
        isAnimated: !1
    },
    skull4: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    skull5: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    skull6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    skull7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    skunk: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    skyebiking: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    skywriter: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    slingshot: {
        width: 446,
        height: 446,
        isAnimated: !1
    },
    slingshot2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    slovakia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    slovenia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    smallcar: {
        width: 120,
        height: 120,
        isAnimated: !1
    },
    smashedsandcastle: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    smile: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    smileyheartvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    smilingallie: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    smilingboys: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    smilingjack: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    smilinglauren: {
        width: 529,
        height: 529,
        isAnimated: !1
    },
    smilingnature: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    smoothie: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    snack: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snail: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    snake: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    snake2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snakebody: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    snakebody2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snakeeye: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snakehead: {
        width: 532,
        height: 532,
        isAnimated: !1
    },
    snakehead2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snakehead3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snakesegment: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snaketongue: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snare: {
        width: 850,
        height: 850,
        isAnimated: !1
    },
    sneaker: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sneaker2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sneaker3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sneaker4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sneaker5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sneaker6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowball: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowball2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowcat: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    snowflake: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    snowman: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    snowman2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowman3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmanbody: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmanbody2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmanbody3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmanbody4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmaneye: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmaneye2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmanhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmanleftarm: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmanmouth: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmanmouth2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmannose: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmanrightarm: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    snowmobile: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    snowplow: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    snowwhite: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    soccer: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    soccer2: {
        width: 170,
        height: 170,
        isAnimated: !1
    },
    soccerball: {
        width: 133,
        height: 133,
        isAnimated: !1
    },
    soccernet: {
        width: 512,
        height: 512,
        isAnimated: !1
    },
    soccerplayer: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    soda: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    soda2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sofa: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sofa2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sofa3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    softdrink: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    solomonislands: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    somalia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    soup: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    southafrica: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    southkorea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    southsudan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spacemandoll: {
        width: 251,
        height: 251,
        isAnimated: !1
    },
    spacerover: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spaceship: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    spaceship2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    spaceship3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spaceship4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spaceshuttle: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spacestation: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    spaghetti: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    spaghetti2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spain: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    spectrum: {
        width: 768,
        height: 768,
        isAnimated: !1
    },
    sphero: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    sphero1: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    sphero2: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    sphero3: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    sphero4: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    sphero5: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    spider: {
        width: 95,
        height: 95,
        isAnimated: !0
    },
    spider2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spider3: {
        width: 768,
        height: 768,
        isAnimated: !1
    },
    spider4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spike: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spinach: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    spincar0: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar15: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar16: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spincar9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spinnerbase: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spinnerbase2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spinnerbase3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spinnerbase4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spinosaurus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spintaxi0: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi1: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi10: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi11: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi12: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi13: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi14: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi15: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi16: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi17: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi18: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi19: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi2: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi20: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi3: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi4: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi5: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi6: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi7: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi8: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spintaxi9: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    spiralbushes: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    spiralstair: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    splash: {
        width: 256,
        height: 256,
        isAnimated: !0
    },
    splat: {
        width: 430,
        height: 430,
        isAnimated: !1
    },
    splat2: {
        width: 424,
        height: 424,
        isAnimated: !1
    },
    splat3: {
        width: 431,
        height: 431,
        isAnimated: !1
    },
    splat4: {
        width: 430,
        height: 430,
        isAnimated: !1
    },
    splat5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    splotch: {
        width: 48,
        height: 48,
        isAnimated: !1
    },
    splotchblue: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    splotchgreen: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    splotchorange: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    splotchpink: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    splotchpurple: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    splotchred: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    splotchyellow: {
        width: 220,
        height: 220,
        isAnimated: !1
    },
    spoon: {
        width: 1500,
        height: 1500,
        isAnimated: !1
    },
    spoonhandle: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spoonhead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spring: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sprinkles: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sprinkles2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sprinkles3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sprinkles4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sprite: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    sputnik: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    spy: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    spygirl: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    squid: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    squid2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    squirrel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    squirrel2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    squirrel3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    squirrel4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    squirrel5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    squirrel6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    squirrelicon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    squirrelicon2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sr71: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    srilanka: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stackednumbersclock: {
        width: 706,
        height: 706,
        isAnimated: !1
    },
    stamp: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    stampy: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    star: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star14: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star2: {
        width: 340,
        height: 340,
        isAnimated: !1
    },
    star3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    star9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    starfish: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    starfish2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    starfish3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    starrating0: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    starrating1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    starrating2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    starrating3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    starrating4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    starrating5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    start: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    start2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stats: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    statswhite: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    statueofliberty: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    steak: {
        width: 368,
        height: 368,
        isAnimated: !1
    },
    steak2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    steak3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    steering: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    steeringwheel: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    steeringwheel2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    steeringwheel3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    steeringwheel4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stegosaurus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stephancurry: {
        width: 520,
        height: 520,
        isAnimated: !1
    },
    steve: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    stew: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stickfigure2vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stickfigurevip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stickghostvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stickheavenvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stickmanvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stickmustachemanvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sticksnowmanvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sticky: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    stingray: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    stocking: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stocking2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stocking3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stocking4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stocking5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stonehenge: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stool: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stool2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stopwatch: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    stopwatch2: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    stork: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    storyguy1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    storyguy2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    storyguy3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    storyguy4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    storyguy5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    strawberry: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    strawberry2: {
        width: 349,
        height: 349,
        isAnimated: !1
    },
    strawberryscoop: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    strawberryshortcake: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    street: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    stripes: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    stroke: {
        width: 70,
        height: 70,
        isAnimated: !1
    },
    student: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    sub11: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub12: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub13: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub14: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub15: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub21: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub22: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub23: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub24: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub25: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub31: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub32: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub33: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub34: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub35: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub41: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub42: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub43: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub44: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub45: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub51: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub52: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub53: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    sub54: {
        width: 349,
        height: 349,
        isAnimated: !1
    },
    sub55: {
        width: 349,
        height: 349,
        isAnimated: !1
    },
    submarine: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    submarine2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    sudan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sugarglider: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    suitcase: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    suitcase2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    summershow: {
        width: 468,
        height: 468,
        isAnimated: !1
    },
    sun: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    sun2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    sun3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sun4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sun5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sun6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sun7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sun8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sundae: {
        width: 594,
        height: 594,
        isAnimated: !1
    },
    suntanner: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    supercat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    superdog: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    superdog2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    supergirls2vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    supergirls3vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    supergirlsvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    superhero: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    superkid: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    supersanta: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    supersanta2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    supersanta3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    supersanta4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    supersanta5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    supersanta6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    surf: {
        width: 2309,
        height: 2309,
        isAnimated: !1
    },
    surfboard: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    surfboard2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    surfboard3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    surfboard4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    surfer: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    surgeon: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    suriname: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sushi: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    swaziland: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    sweden: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    swimmer: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    swimmer10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    swimmer11: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    swimmer12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    swimmer2: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    swimmer3: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    swimmer4: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    swimmer5: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    swimmer6: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    swimmer7: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    swimmer8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    swimmer9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    swimmingpool: {
        width: 769,
        height: 769,
        isAnimated: !1
    },
    swipe: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    "switch": {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    switch2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    switch3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    switzerland: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    swoop: {
        width: 155,
        height: 155,
        isAnimated: !1
    },
    sword: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    swordvip: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    syria: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    table: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    table2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    table3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    table4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tablet: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    tablet2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    taco: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tajikistan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tajmahal: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    talarurus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    talia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    talk: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tank: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tank2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tank3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tank4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tanzania: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    target: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    target2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    target3: {
        width: 802,
        height: 802,
        isAnimated: !1
    },
    target4: {
        width: 802,
        height: 802,
        isAnimated: !1
    },
    target5: {
        width: 802,
        height: 802,
        isAnimated: !1
    },
    target6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    targets2: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    taxi: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    taxi2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    taxi3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    taxi4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    taylorswift: {
        width: 701,
        height: 701,
        isAnimated: !1
    },
    taylorswiftchin: {
        width: 701,
        height: 701,
        isAnimated: !1
    },
    taylorswifttop: {
        width: 701,
        height: 701,
        isAnimated: !1
    },
    tea: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    teacher: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    teacher2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    teacher3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    teeth: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    teeth2: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    telephone: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    telescope: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    telescope2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    television: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tennis: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tennisplayer: {
        width: 180,
        height: 180,
        isAnimated: !1
    },
    tennisplayer2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tennisracket: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tent: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tentacle: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tentacle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    testtubes: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    thailand: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    theend: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    theflashvip: !0,
    theflashvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    theodoreroosevelt: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    theodorerooseveltchin: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    theodoreroosevelttop: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    thescream: {
        width: 752,
        height: 752,
        isAnimated: !1
    },
    thomasjefferson: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    thomasjeffersonchin: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    thomasjeffersontop: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    thor: {
        width: 257,
        height: 257,
        isAnimated: !1
    },
    thoughtbubble: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    throne: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    thumbsupvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tie: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tie2: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    tie3: {
        width: 290,
        height: 290,
        isAnimated: !1
    },
    tie4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tie5: {
        width: 240,
        height: 240,
        isAnimated: !1
    },
    tie7: {
        width: 260,
        height: 260,
        isAnimated: !1
    },
    tiger: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    tiger2: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    tiger3: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    tiger4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tiger5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tigercub: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tile: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    timbernerslee: {
        width: 152,
        height: 152,
        isAnimated: !1
    },
    timemachine: {
        width: 323,
        height: 323,
        isAnimated: !1
    },
    timemachine2: {
        width: 840,
        height: 840,
        isAnimated: !1
    },
    timemachine3: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    timer: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    timesuit: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    timorleste: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tinysphero: {
        width: 55,
        height: 55,
        isAnimated: !1
    },
    tiramisu: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tire: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    tire2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tire3: {
        width: 275,
        height: 275,
        isAnimated: !1
    },
    titanic: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    tnt: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tnt2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toast: {
        width: 295,
        height: 295,
        isAnimated: !1
    },
    toast2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tocko1vip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tofu: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toggle: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toggleoff: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toggleon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    togo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toilet: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toilet2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toilet3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    token: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    token2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    token3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    token4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tomato: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    tomato2: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    tomtom: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    tonga: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tooth: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    tophat: {
        width: 280,
        height: 280,
        isAnimated: !1
    },
    topsecretvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toriigate: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tortillachip: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tortoise: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    total: {
        width: 150,
        height: 150,
        isAnimated: !1
    },
    totoro: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    toucan: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    toyboat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    toyboat2: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    toycar: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    tractor: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tractor2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tractor3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trafficgreen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trafficred: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trafficyellow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    train: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    train2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trampoline: {
        width: 354,
        height: 354,
        isAnimated: !1
    },
    trampoline2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    treasurechest: {
        width: 400,
        height: 400,
        isAnimated: !1
    },
    treasurechest2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    treasurechest3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    treasurechest4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tree: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tree10: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tree2: {
        width: 294,
        height: 294,
        isAnimated: !1
    },
    tree3: {
        width: 327,
        height: 327,
        isAnimated: !1
    },
    tree4: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    tree5: {
        width: 365,
        height: 365,
        isAnimated: !1
    },
    tree6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tree7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tree8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tree9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trees: {
        width: 768,
        height: 768,
        isAnimated: !1
    },
    trex: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trex2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trex3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    triangle: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tribble: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    triceratops: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trilo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trilo1: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trilo2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trilo3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trilo4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trilo5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trilo6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trinidadandtobago: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trixievip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    troll: {
        width: 351,
        height: 351,
        isAnimated: !1
    },
    troll2: {
        width: 650,
        height: 650,
        isAnimated: !1
    },
    troll3: {
        width: 650,
        height: 650,
        isAnimated: !1
    },
    troll4: {
        width: 650,
        height: 650,
        isAnimated: !1
    },
    trolley: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    trophy: {
        width: 767,
        height: 767,
        isAnimated: !1
    },
    trs80: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    truck: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    truck1: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    truck10: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truck11: {
        width: 528,
        height: 528,
        isAnimated: !1
    },
    truck12: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    truck13: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    truck14: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    truck14white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    truck2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truck3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truck4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truck5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truck6: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truck7: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truck8: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truck9: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    trucklogging: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truffle: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truffle2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truffle3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truffle4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truffle5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truffle6: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truffle7: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    truffle8: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    trump: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    trumpet: {
        width: 264,
        height: 264,
        isAnimated: !1
    },
    tryagain: {
        width: 326,
        height: 326,
        isAnimated: !1
    },
    tshirt: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ttile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    tubaman: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    tubaman2: {
        width: 550,
        height: 550,
        isAnimated: !1
    },
    tuktuk: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tulip: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    tunisia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    turkey: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    turkey2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    turkey3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    turkey4: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    turkey5: {
        width: 500,
        height: 500,
        isAnimated: !0
    },
    turkmenistan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    turtle: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    turtle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    turtle3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    turtle4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tuvalu: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tv: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    tv2: {
        width: 550,
        height: 550,
        isAnimated: !1
    },
    tv3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typea: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typeb: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typec: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typed: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typee: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typef: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typeg: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typeh: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typei: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typej: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typek: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typel: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typem: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typeo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typep: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typeq: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typer: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    types: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typet: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typeu: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typev: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typew: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typewriter: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typex: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typey: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    typez: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ufo: {
        width: 120,
        height: 120,
        isAnimated: !1
    },
    ufo2: {
        width: 210,
        height: 210,
        isAnimated: !1
    },
    ufo3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ufo4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ufo5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ufo6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ufo7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ufo8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ufo9: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ufoboss: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    uganda: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ukey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    ukraine: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    umbrella: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    umbrella2: {
        width: 701,
        height: 701,
        isAnimated: !1
    },
    umbrella3: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    umbrella3white: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    unicorn: {
        width: 170,
        height: 170,
        isAnimated: !1
    },
    unicorn2: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    unicorn3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    unicorn4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    unionjack: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    unitedarabemirates: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    unitedkingdom: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    unitedstates: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    unmutebutton: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    upaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    uranus: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    uranus2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    uruguay: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    usbdrive: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    usbsheep: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    utile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    uzbekistan: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    valley: {
        width: 768,
        height: 768,
        isAnimated: !1
    },
    valley2: {
        width: 768,
        height: 768,
        isAnimated: !1
    },
    vampire: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    vanillascoop: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    vanity: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    vanuatu: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    vaticancity: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    velociraptor: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    velociraptor2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    venezuela: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    venus: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    venus2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    verb: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    vernon: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    videogameredemptionvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    vietnam: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    viking: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    viking2: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    viking3: {
        width: 232,
        height: 232,
        isAnimated: !1
    },
    viking4: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    viking5: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    viking6: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    vikingship: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    violin: {
        width: 345,
        height: 345,
        isAnimated: !1
    },
    virus: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    vkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    volcano2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    volleyball: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    volleyball2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    voyager: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    vpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    vtile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    waffle: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    wafflecone: {
        width: 630,
        height: 630,
        isAnimated: !1
    },
    wallet: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    walnut: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    walnut2: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    walnut3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    walrus: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    wand: {
        width: 1040,
        height: 1040,
        isAnimated: !1
    },
    wand2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wand3: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    wand4: {
        width: 1E3,
        height: 1E3,
        isAnimated: !1
    },
    warthog: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    warthog2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wasdkeys: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wasp: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    watchhand: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    water: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    watergun: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    wateringcan: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    waterjet: {
        width: 1500,
        height: 1500,
        isAnimated: !1
    },
    watermelon: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    watermelon2: {
        width: 260,
        height: 260,
        isAnimated: !1
    },
    watermelon3: {
        width: 800,
        height: 800,
        isAnimated: !1
    },
    watermelon4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    waterpool: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wave: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wax: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    waxseal: {
        width: 251,
        height: 251,
        isAnimated: !1
    },
    wentenvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    whale: {
        width: 250,
        height: 250,
        isAnimated: !1
    },
    wheat: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    wheel: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    wheelchair: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    wheelswitch: {
        width: 190,
        height: 190,
        isAnimated: !1
    },
    whippedcream: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    whistle: {
        width: 450,
        height: 450,
        isAnimated: !1
    },
    whistle2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    whitebox: {
        width: 130,
        height: 130,
        isAnimated: !1
    },
    whitekey: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    whitekey2: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    whiteroses: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    whoopee: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wildebeest: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    windmill: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    window: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    wings: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    winstonchurchill: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    winterhat: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    winterhat2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    winterhat3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wires: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    witchhouse: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    witchkid: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wizard: {
        width: 700,
        height: 700,
        isAnimated: !1
    },
    wizard2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wizard3: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wizard4: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    wolf: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    wolf2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    woman: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    woman2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    woodblock: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    worm: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    worm2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wow: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    wreath: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wreath2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wrench: {
        width: 553,
        height: 553,
        isAnimated: !1
    },
    wrenchbot: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    wtile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    www: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    xeroxparc: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    xkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    xpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    xtile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    yak: {
        width: 256,
        height: 256,
        isAnimated: !1
    },
    yak2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    yarn: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    yellow: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    yellowcube: {
        width: 540,
        height: 540,
        isAnimated: !1
    },
    yellowmountains: {
        width: 1024,
        height: 1024,
        isAnimated: !1
    },
    yemen: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    yeti: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    yeti2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    yetibody: {
        width: 600,
        height: 600,
        isAnimated: !1
    },
    yetihead: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ykey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    youlose: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    yourockvip: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    youwin: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    yoyo: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    ypaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    ytile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    zach: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    zambia: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    zapkid: {
        width: 489,
        height: 489,
        isAnimated: !1
    },
    zapper: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    zebra: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    zebra2: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    zimbabwe: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    zkey: {
        width: 126,
        height: 126,
        isAnimated: !1
    },
    zombie: {
        width: 350,
        height: 350,
        isAnimated: !1
    },
    zombie2: {
        width: 375,
        height: 375,
        isAnimated: !1
    },
    zombie3: {
        width: 300,
        height: 300,
        isAnimated: !1
    },
    zombie4: {
        width: 318,
        height: 318,
        isAnimated: !1
    },
    zombie5: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    zombie6: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    zombie7: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    zombie8: {
        width: 500,
        height: 500,
        isAnimated: !1
    },
    zombie9: {
        width: 100,
        height: 100,
        isAnimated: !0
    },
    zoom: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    zoomwhite: {
        width: 501,
        height: 501,
        isAnimated: !1
    },
    zpaint: {
        width: 100,
        height: 100,
        isAnimated: !1
    },
    ztile: {
        width: 200,
        height: 200,
        isAnimated: !1
    },
    zucchini: {
        width: 500,
        height: 500,
        isAnimated: !1
    }
};
c123 = c123 || {};
c123.pictures = {
    "3dprinter": "https://static.bitsbox.com/fills/3dprinter.jpg",
    abduction: "https://static.bitsbox.com/fills/abduction.jpg",
    "abstract": "https://static.bitsbox.com/fills/abstract.jpg",
    abstractcolors: "https://static.bitsbox.com/fills/abstractcolors.jpg",
    activities: "https://static.bitsbox.com/fills/activities.jpg",
    aerial: "https://static.bitsbox.com/fills/aerial.jpg",
    africa: "https://static.bitsbox.com/fills/africa.jpg",
    africa2: "https://static.bitsbox.com/fills/africa2.jpg",
    airport: "https://static.bitsbox.com/fills/airport.jpg",
    ambush: "https://static.bitsbox.com/fills/ambush.jpg",
    amusement: "https://static.bitsbox.com/fills/amusement.jpg",
    amusementpark: "https://static.bitsbox.com/fills/amusementpark.jpg",
    amusementpark2: "https://static.bitsbox.com/fills/amusementpark2.jpg",
    animalstack: "https://static.bitsbox.com/fills/animalstack.jpg",
    appscreen: "https://static.bitsbox.com/fills/appscreen.jpg",
    aquarium: "https://static.bitsbox.com/fills/aquarium.jpg",
    aquarium2: "https://static.bitsbox.com/fills/aquarium2.jpg",
    aquarium3: "https://static.bitsbox.com/fills/aquarium3.jpg",
    arcticregion: "https://static.bitsbox.com/fills/arcticregion.jpg",
    asia: "https://static.bitsbox.com/fills/asia.jpg",
    asia2: "https://static.bitsbox.com/fills/asia2.jpg",
    atlantis: "https://static.bitsbox.com/fills/atlantis.jpg",
    australia: "https://static.bitsbox.com/fills/australia.jpg",
    australia2: "https://static.bitsbox.com/fills/australia2.jpg",
    avond: "https://static.bitsbox.com/fills/avond.jpg",
    backyard: "https://static.bitsbox.com/fills/backyard.jpg",
    baggagetag: "https://static.bitsbox.com/fills/baggagetag.jpg",
    bakingtray: "https://static.bitsbox.com/fills/bakingtray.jpg",
    ballpark: "https://static.bitsbox.com/fills/ballpark.jpg",
    balsa: "https://static.bitsbox.com/fills/balsa.jpg",
    bamboo: "https://static.bitsbox.com/fills/bamboo.jpg",
    barbecuegrill: "https://static.bitsbox.com/fills/barbecuegrill.jpg",
    baseballdiamond: "https://static.bitsbox.com/fills/baseballdiamond.jpg",
    basketballcourt: "https://static.bitsbox.com/fills/basketballcourt.jpg",
    beach: "https://static.bitsbox.com/fills/beach.jpg",
    beach2: "https://static.bitsbox.com/fills/beach2.jpg",
    beach3: "https://static.bitsbox.com/fills/beach3.jpg",
    beach4: "https://static.bitsbox.com/fills/beach4.jpg",
    beach5: "https://static.bitsbox.com/fills/beach5.jpg",
    beanstalk: "https://static.bitsbox.com/fills/beanstalk.jpg",
    beanstalk2: "https://static.bitsbox.com/fills/beanstalk2.jpg",
    beehive: "https://static.bitsbox.com/fills/beehive.jpg",
    beekeeping: "https://static.bitsbox.com/fills/beekeeping.jpg",
    beijing: "https://static.bitsbox.com/fills/beijing.png",
    beijing2: "https://static.bitsbox.com/fills/beijing2.png",
    beijing3: "https://static.bitsbox.com/fills/beijing3.png",
    bigben: "https://static.bitsbox.com/fills/bigben.jpg",
    bills: "https://static.bitsbox.com/fills/bills.jpg",
    bills2: "https://static.bitsbox.com/fills/bills2.jpg",
    bingo: "https://static.bitsbox.com/fills/bingo.jpg",
    bingoboard: "https://static.bitsbox.com/fills/bingoboard.jpg",
    birdnest: "https://static.bitsbox.com/fills/birdnest.jpg",
    birthday: "https://static.bitsbox.com/fills/birthday.jpg",
    birthday2: "https://static.bitsbox.com/fills/birthday2.jpg",
    birthday3: "https://static.bitsbox.com/fills/birthday3.jpg",
    birthday4: "https://static.bitsbox.com/fills/birthday4.jpg",
    birthday5: "https://static.bitsbox.com/fills/birthday5.jpg",
    birthday6: "https://static.bitsbox.com/fills/birthday6.jpg",
    blackboard: "https://static.bitsbox.com/fills/blackboard.jpg",
    blackhole: "https://static.bitsbox.com/fills/blackhole.jpg",
    blackhole2: "https://static.bitsbox.com/fills/blackhole2.jpg",
    blankcard: "https://static.bitsbox.com/fills/blankcard.jpg",
    bloodvessel: "https://static.bitsbox.com/fills/bloodvessel.jpg",
    blueswirls: "https://static.bitsbox.com/fills/blueswirls.jpg",
    bluetile: "https://static.bitsbox.com/fills/bluetile.jpg",
    blurrycity: "https://static.bitsbox.com/fills/blurrycity.jpg",
    blurryglitter: "https://static.bitsbox.com/fills/blurryglitter.jpg",
    blurrygrass: "https://static.bitsbox.com/fills/blurrygrass.jpg",
    blurrysky: "https://static.bitsbox.com/fills/blurrysky.jpg",
    boardwalk: "https://static.bitsbox.com/fills/boardwalk.jpg",
    boardwalk2: "https://static.bitsbox.com/fills/boardwalk2.jpg",
    bouquet: "https://static.bitsbox.com/fills/bouquet.jpg",
    bowlinglane: "https://static.bitsbox.com/fills/bowlinglane.jpg",
    boxingring: "https://static.bitsbox.com/fills/boxingring.jpg",
    braindead: "https://static.bitsbox.com/fills/braindead.jpg",
    brickroom: "https://static.bitsbox.com/fills/brickroom.jpg",
    brickstreet: "https://static.bitsbox.com/fills/brickstreet.jpg",
    brickwall: "https://static.bitsbox.com/fills/brickwall.jpg",
    buildings: "https://static.bitsbox.com/fills/buildings.jpg",
    bulbcircuit: "https://static.bitsbox.com/fills/bulbcircuit.jpg",
    bunnyhat: "https://static.bitsbox.com/fills/bunnyhat.jpg",
    buried: "https://static.bitsbox.com/fills/buried.jpg",
    burned: "https://static.bitsbox.com/fills/burned.jpg",
    buslane: "https://static.bitsbox.com/fills/buslane.jpg",
    butterflywing: "https://static.bitsbox.com/fills/butterflywing.jpg",
    buttonconcert: "https://static.bitsbox.com/fills/buttonconcert.jpg",
    buttonpanel: "https://static.bitsbox.com/fills/buttonpanel.jpg",
    buttonpanel2: "https://static.bitsbox.com/fills/buttonpanel2.jpg",
    buttonwall: "https://static.bitsbox.com/fills/buttonwall.jpg",
    cakeonpink: "https://static.bitsbox.com/fills/cakeonpink.jpg",
    cakewhite: "https://static.bitsbox.com/fills/cakewhite.jpg",
    campground: "https://static.bitsbox.com/fills/campground.jpg",
    campground2: "https://static.bitsbox.com/fills/campground2.jpg",
    canvas: "https://static.bitsbox.com/fills/canvas.jpg",
    cardboard: "https://static.bitsbox.com/fills/cardboard.jpg",
    cargobay: "https://static.bitsbox.com/fills/cargobay.jpg",
    castle: "https://static.bitsbox.com/fills/castle.jpg",
    castleroad: "https://static.bitsbox.com/fills/castleroad.png",
    castlesunset: "https://static.bitsbox.com/fills/castlesunset.jpg",
    castletown: "https://static.bitsbox.com/fills/castletown.jpg",
    cave: "https://static.bitsbox.com/fills/cave.jpg",
    cave2: "https://static.bitsbox.com/fills/cave2.jpg",
    cave3: "https://static.bitsbox.com/fills/cave3.jpg",
    chalkboard: "https://static.bitsbox.com/fills/chalkboard.jpg",
    chalkboard2: "https://static.bitsbox.com/fills/chalkboard2.jpg",
    checkerboard: "https://static.bitsbox.com/fills/checkerboard.jpg",
    checkerboard2: "https://static.bitsbox.com/fills/checkerboard2.jpg",
    checkoutline: "https://static.bitsbox.com/fills/checkoutline.jpg",
    cherryblossoms: "https://static.bitsbox.com/fills/cherryblossoms.jpg",
    chicago: "https://static.bitsbox.com/fills/chicago.jpg",
    chimpsign: "https://static.bitsbox.com/fills/chimpsign.jpg",
    chocosplash: "https://static.bitsbox.com/fills/chocosplash.jpg",
    christmas: "https://static.bitsbox.com/fills/christmas.jpg",
    christmas2: "https://static.bitsbox.com/fills/christmas2.jpg",
    circuit: "https://static.bitsbox.com/fills/circuit.jpg",
    circuitboard: "https://static.bitsbox.com/fills/circuitboard.jpg",
    circuitboard2: "https://static.bitsbox.com/fills/circuitboard2.jpg",
    city: "https://static.bitsbox.com/fills/city.jpg",
    city2: "https://static.bitsbox.com/fills/city2.jpg",
    city3: "https://static.bitsbox.com/fills/city3.jpg",
    city4: "https://static.bitsbox.com/fills/city4.jpg",
    city5: "https://static.bitsbox.com/fills/city5.jpg",
    city6: "https://static.bitsbox.com/fills/city6.jpg",
    city7: "https://static.bitsbox.com/fills/city7.jpg",
    citymap: "https://static.bitsbox.com/fills/citymap.jpg",
    citystreet: "https://static.bitsbox.com/fills/citystreet.jpg",
    classroom: "https://static.bitsbox.com/fills/classroom.jpg",
    classroom2: "https://static.bitsbox.com/fills/classroom2.jpg",
    clocks: "https://static.bitsbox.com/fills/clocks.jpg",
    closetclosed: "https://static.bitsbox.com/fills/closetclosed.jpg",
    closetopen: "https://static.bitsbox.com/fills/closetopen.jpg",
    clouds: "https://static.bitsbox.com/fills/clouds.jpg",
    clouds2: "https://static.bitsbox.com/fills/clouds2.jpg",
    clouds3: "https://static.bitsbox.com/fills/clouds3.jpg",
    cloudysunrise: "https://static.bitsbox.com/fills/cloudysunrise.jpg",
    cockpit2: "https://static.bitsbox.com/fills/cockpit2.jpg",
    coins: "https://static.bitsbox.com/fills/coins.jpg",
    colorgauge: "https://static.bitsbox.com/fills/colorgauge.jpg",
    concert: "https://static.bitsbox.com/fills/concert.jpg",
    concert2: "https://static.bitsbox.com/fills/concert2.jpg",
    confetti: "https://static.bitsbox.com/fills/confetti.png",
    confetti2: "https://static.bitsbox.com/fills/confetti2.jpg",
    conversation: "https://static.bitsbox.com/fills/conversation.jpg",
    corner: "https://static.bitsbox.com/fills/corner.jpg",
    cornfield: "https://static.bitsbox.com/fills/cornfield.jpg",
    counter: "https://static.bitsbox.com/fills/counter.jpg",
    cove: "https://static.bitsbox.com/fills/cove.jpg",
    cowprint: "https://static.bitsbox.com/fills/cowprint.jpg",
    crayons: "https://static.bitsbox.com/fills/crayons.jpg",
    creditcard: "https://static.bitsbox.com/fills/creditcard.jpg",
    crowd: "https://static.bitsbox.com/fills/crowd.jpg",
    cruise: "https://static.bitsbox.com/fills/cruise.jpg",
    daisyfield: "https://static.bitsbox.com/fills/daisyfield.jpg",
    damask: "https://static.bitsbox.com/fills/damask.jpg",
    dangerroom: "https://static.bitsbox.com/fills/dangerroom.jpg",
    darkforest: "https://static.bitsbox.com/fills/darkforest.jpg",
    darkforest2: "https://static.bitsbox.com/fills/darkforest2.jpg",
    darkocean: "https://static.bitsbox.com/fills/darkocean.jpg",
    darkwater: "https://static.bitsbox.com/fills/darkwater.jpg",
    daycity: "https://static.bitsbox.com/fills/daycity.jpg",
    decryption: "https://static.bitsbox.com/fills/decryption.jpg",
    desert: "https://static.bitsbox.com/fills/desert.jpg",
    desertfill: "http://13.71.86.152:8888/fills/desert.jpg",
    desert2: "http://13.71.86.152:8888/fills/desert2.jpg",
    desertsky: "https://static.bitsbox.com/fills/desertsky.jpg",
    desk: "https://static.bitsbox.com/fills/desk.jpg",
    destinations: "https://static.bitsbox.com/fills/destinations.jpg",
    dinohearts: "https://static.bitsbox.com/fills/dinohearts.jpg",
    dinosign: "https://static.bitsbox.com/fills/dinosign.jpg",
    dinosaur : "http://13.71.86.152:8888/fills/dinosaur.jpg",
    dirt: "https://static.bitsbox.com/fills/dirt.jpg",
    dirtywindow: "https://static.bitsbox.com/fills/dirtywindow.jpg",
    disappearingcard: "https://static.bitsbox.com/fills/disappearingcard.jpg",
    disappearingcard2: "https://static.bitsbox.com/fills/disappearingcard2.jpg",
    disco: "https://static.bitsbox.com/fills/disco.jpg",
    disco2: "https://static.bitsbox.com/fills/disco2.jpg",
    disco3: "https://static.bitsbox.com/fills/disco3.jpg",
    disco4: "https://static.bitsbox.com/fills/disco4.jpg",
    diwali: "https://static.bitsbox.com/fills/diwali.jpg",
    dogdirector: "https://static.bitsbox.com/fills/dogdirector.jpg",
    doghousewood: "https://static.bitsbox.com/fills/doghousewood.jpg",
    dogsign: "https://static.bitsbox.com/fills/dogsign.jpg",
    dots: "https://static.bitsbox.com/fills/dots.jpg",
    downthewell: "https://static.bitsbox.com/fills/downthewell.jpg",
    drdastardly: "https://static.bitsbox.com/fills/drdastardly.png",
    dreaming: "https://static.bitsbox.com/fills/dreaming.jpg",
    dressned: "https://static.bitsbox.com/fills/dressned.jpg",
    dubai: "http://13.71.86.152:8888/fills/dubai.jpg",
    dungeon: "https://static.bitsbox.com/fills/dungeon.jpg",
    dungeon2: "https://static.bitsbox.com/fills/dungeon2.jpg",
    easel: "https://static.bitsbox.com/fills/easel.jpg",
    eerieforest: "https://static.bitsbox.com/fills/eerieforest.jpg",
    eggsplat: "https://static.bitsbox.com/fills/eggsplat.jpg",
    egypt: "https://static.bitsbox.com/fills/egypt.jpg",
    elephanttail: "https://static.bitsbox.com/fills/elephanttail.jpg",
    emptyflag: "https://static.bitsbox.com/fills/emptyflag.jpg",
    emptysuitcase: "https://static.bitsbox.com/fills/emptysuitcase.jpg",
    encryption: "https://static.bitsbox.com/fills/encryption.jpg",
    end: "https://static.bitsbox.com/fills/end.jpg",
    europe: "https://static.bitsbox.com/fills/europe.jpg",
    europe2: "https://static.bitsbox.com/fills/europe2.jpg",
    evening: "https://static.bitsbox.com/fills/evening.jpg",
    factory: "https://static.bitsbox.com/fills/factory.jpg",
    factory2: "https://static.bitsbox.com/fills/factory2.jpg",
    factory3: "https://static.bitsbox.com/fills/factory3.jpg",
    fallforest: "https://static.bitsbox.com/fills/fallforest.jpg",
    fallforest2: "https://static.bitsbox.com/fills/fallforest2.jpg",
    fancydoor: "https://static.bitsbox.com/fills/fancydoor.jpg",
    fancyroom: "https://static.bitsbox.com/fills/fancyroom.jpg",
    fantasy: "https://static.bitsbox.com/fills/fantasy.jpg",
    fantasyroad: "https://static.bitsbox.com/fills/fantasyroad.jpg",
    farm: "https://static.bitsbox.com/fills/farm.jpg",
    farm2: "https://static.bitsbox.com/fills/farm2.jpg",
    farm3: "https://static.bitsbox.com/fills/farm3.jpg",
    farm4: "https://static.bitsbox.com/fills/farm4.jpg",
    featsofstrength: "https://static.bitsbox.com/fills/featsofstrength.jpg",
    field: "https://static.bitsbox.com/fills/field.jpg",
    field2: "https://static.bitsbox.com/fills/field2.jpg",
    fillnotfound: "https://static.bitsbox.com/fills/fillnotfound.png",
    fireworks: "https://static.bitsbox.com/fills/fireworks.jpg",
    flags: "https://static.bitsbox.com/fills/flags.jpg",
    flowers: "https://static.bitsbox.com/fills/flowers.jpg",
    flush: "https://static.bitsbox.com/fills/flush.jpg",
    foggywindow: "https://static.bitsbox.com/fills/foggywindow.jpg",
    forest: "https://static.bitsbox.com/fills/forest.jpg",
    forestfloor: "https://static.bitsbox.com/fills/forestfloor.jpg",
    forestsky: "https://static.bitsbox.com/fills/forestsky.jpg",
    fossil: "https://static.bitsbox.com/fills/fossil.jpg",
    fossil1: "https://static.bitsbox.com/fills/fossil1.jpg",
    fossil2: "https://static.bitsbox.com/fills/fossil2.jpg",
    fossil3: "https://static.bitsbox.com/fills/fossil3.jpg",
    fossil4: "https://static.bitsbox.com/fills/fossil4.jpg",
    fossil5: "https://static.bitsbox.com/fills/fossil5.jpg",
    fossil6: "https://static.bitsbox.com/fills/fossil6.jpg",
    fossil7: "https://static.bitsbox.com/fills/fossil7.jpg",
    fossil8: "https://static.bitsbox.com/fills/fossil8.jpg",
    freezer: "https://static.bitsbox.com/fills/freezer.jpg",
    frontdoor: "https://static.bitsbox.com/fills/frontdoor.jpg",
    fullmoon: "https://static.bitsbox.com/fills/fullmoon.jpg",
    futbolfield: "https://static.bitsbox.com/fills/futbolfield.jpg",
    futurecity: "https://static.bitsbox.com/fills/futurecity.jpg",
    gallery: "https://static.bitsbox.com/fills/gallery.jpg",
    gameboard: "https://static.bitsbox.com/fills/gameboard.jpg",
    gameover4: "https://static.bitsbox.com/fills/gameover4.jpg",
    garage: "https://static.bitsbox.com/fills/garage.jpg",
    garden: "https://static.bitsbox.com/fills/garden.jpg",
    gears: "https://static.bitsbox.com/fills/gears.jpg",
    giftcard: "https://static.bitsbox.com/fills/giftcard.jpg",
    giltframe: "https://static.bitsbox.com/fills/giltframe.jpg",
    glade: "https://static.bitsbox.com/fills/glade.jpg",
    goalposts: "https://static.bitsbox.com/fills/goalposts.jpg",
    gradient: "https://static.bitsbox.com/fills/gradient.jpg",
    gradient2: "https://static.bitsbox.com/fills/gradient2.jpg",
    gradient3: "https://static.bitsbox.com/fills/gradient3.jpg",
    gradient4: "https://static.bitsbox.com/fills/gradient4.jpg",
    gramophone: "https://static.bitsbox.com/fills/gramophone.jpg",
    graphpaper: "https://static.bitsbox.com/fills/graphpaper.jpg",
    grass: "https://static.bitsbox.com/fills/grass.jpg",
    grassyfield: "https://static.bitsbox.com/fills/grassyfield.jpg",
    graybed: "https://static.bitsbox.com/fills/graybed.jpg",
    greenfelt: "https://static.bitsbox.com/fills/greenfelt.jpg",
    greengradient: "https://static.bitsbox.com/fills/greengradient.jpg",
    greenwave: "https://static.bitsbox.com/fills/greenwave.jpg",
    grid: "https://static.bitsbox.com/fills/grid.png",
    grid2: "https://static.bitsbox.com/fills/grid2.jpg",
    griddle: "https://static.bitsbox.com/fills/griddle.jpg",
    grill: "https://static.bitsbox.com/fills/grill.jpg",
    grossface: "https://static.bitsbox.com/fills/grossface.jpg",
    gym: "https://static.bitsbox.com/fills/gym.jpg",
    gymnasium: "https://static.bitsbox.com/fills/gymnasium.jpg",
    halloween: "http://13.71.86.152:8888/fills/halloween.jpg",
    halloween2: "https://static.bitsbox.com/fills/halloween2.jpg",
    hallway: "https://static.bitsbox.com/fills/hallway.jpg",
    hanukkah: "https://static.bitsbox.com/fills/hanukkah.jpg",
    hayfield: "https://static.bitsbox.com/fills/hayfield.jpg",
    helm: "https://static.bitsbox.com/fills/helm.jpg",
    helm2: "https://static.bitsbox.com/fills/helm2.jpg",
    hills: "https://static.bitsbox.com/fills/hills.jpg",
    hills2: "https://static.bitsbox.com/fills/hills2.jpg",
    hockey: "https://static.bitsbox.com/fills/hockey.jpg",
    hockeygoal: "https://static.bitsbox.com/fills/hockeygoal.jpg",
    homeplate: "https://static.bitsbox.com/fills/homeplate.jpg",
    honeycomb: "https://static.bitsbox.com/fills/honeycomb.jpg",
    hotlava: "https://static.bitsbox.com/fills/hotlava.jpg",
    hoverland: "https://static.bitsbox.com/fills/hoverland.jpg",
    hurry: "https://static.bitsbox.com/fills/hurry.jpg",
    iceberg: "https://static.bitsbox.com/fills/iceberg.jpg",
    iceberg2: "https://static.bitsbox.com/fills/iceberg2.jpg",
    icecave: "https://static.bitsbox.com/fills/icecave.jpg",
    iguana: "https://static.bitsbox.com/fills/iguana.jpg",
    island: "https://static.bitsbox.com/fills/island.jpg",
    island2: "https://static.bitsbox.com/fills/island2.jpg",
    islandmap: "https://static.bitsbox.com/fills/islandmap.jpg",
    italy: "http://13.71.86.152:8888/fills/italy.jpg",
    japan: "https://static.bitsbox.com/fills/japan.jpg",
    jersey: "https://static.bitsbox.com/fills/jersey.jpg",
    jersey2: "https://static.bitsbox.com/fills/jersey2.png",
    jungle: "https://static.bitsbox.com/fills/jungle.jpg",
    kuiperbelt: "https://static.bitsbox.com/fills/kuiperbelt.jpg",
    kwanzaa: "https://static.bitsbox.com/fills/kwanzaa.jpg",
    lavaplanet: "https://static.bitsbox.com/fills/lavaplanet.jpg",
    leaf: "https://static.bitsbox.com/fills/leaf.jpg",
    leather: "https://static.bitsbox.com/fills/leather.jpg",
    leaves: "https://static.bitsbox.com/fills/leaves.jpg",
    leaves2: "https://static.bitsbox.com/fills/leaves2.jpg",
    lemonclock: "https://static.bitsbox.com/fills/lemonclock.jpg",
    leopardprint: "https://static.bitsbox.com/fills/leopardprint.jpg",
    library: "https://static.bitsbox.com/fills/library.jpg",
    liedetect: "https://static.bitsbox.com/fills/liedetect.jpg",
    lightcastle: "https://static.bitsbox.com/fills/lightcastle.png",
    lightspeed: "https://static.bitsbox.com/fills/lightspeed.jpg",
    logcabin: "https://static.bitsbox.com/fills/logcabin.jpg",
    madlib: "https://static.bitsbox.com/fills/madlib.jpg",
    magic8ball: "https://static.bitsbox.com/fills/magic8ball.jpg",
    magichat: "https://static.bitsbox.com/fills/magichat.jpg",
    magicwand: "https://static.bitsbox.com/fills/magicwand.jpg",
    magma: "https://static.bitsbox.com/fills/magma.jpg",
    maine: "https://static.bitsbox.com/fills/maine.jpg",
    malaysia : "http://13.71.86.152:8888/fills/malaysia.jpg",
    marssurface: "https://static.bitsbox.com/fills/marssurface.jpg",
    maze: "https://static.bitsbox.com/fills/maze.jpg",
    maze2: "https://static.bitsbox.com/fills/maze2.jpg",
    maze3: "https://static.bitsbox.com/fills/maze3.jpg",
    maze4: "https://static.bitsbox.com/fills/maze4.jpg",
    maze5: "https://static.bitsbox.com/fills/maze5.jpg",
    maze6: "https://static.bitsbox.com/fills/maze6.jpg",
    maze7: "https://static.bitsbox.com/fills/maze7.jpg",
    menorah: "https://static.bitsbox.com/fills/menorah.jpg",
    menu: "https://static.bitsbox.com/fills/menu.jpg",
    menu2: "https://static.bitsbox.com/fills/menu2.jpg",
    metal: "https://static.bitsbox.com/fills/metal.jpg",
    metalsquare: "https://static.bitsbox.com/fills/metalsquare.jpg",
    mists: "https://static.bitsbox.com/fills/mists.jpg",
    monstersign: "https://static.bitsbox.com/fills/monstersign.jpg",
    moonblaster: "https://static.bitsbox.com/fills/moonblaster.jpg",
    mottledsky: "https://static.bitsbox.com/fills/mottledsky.jpg",
    mountains: "https://static.bitsbox.com/fills/mountains.jpg",
    mountaintop: "https://static.bitsbox.com/fills/mountaintop.jpg",
    muffintin: "https://static.bitsbox.com/fills/muffintin.jpg",
    museum: "https://static.bitsbox.com/fills/museum.jpg",
    nacht: "https://static.bitsbox.com/fills/nacht.jpg",
    nanopiano: "https://static.bitsbox.com/fills/nanopiano.jpg",
    nature: "https://static.bitsbox.com/fills/nature.jpg",
    nebula: "https://static.bitsbox.com/fills/nebula.jpg",
    nebula2: "https://static.bitsbox.com/fills/nebula2.jpg",
    newyear: "https://static.bitsbox.com/fills/newyear.jpg",
    newyear2: "https://static.bitsbox.com/fills/newyear2.jpg",
    newyear3: "https://static.bitsbox.com/fills/newyear3.jpg",
    newyear4: "https://static.bitsbox.com/fills/newyear4.jpg",
    newyork: "http://13.71.86.152:8888/fills/newyork.jpg",
    night: "https://static.bitsbox.com/fills/night.jpg",
    night2: "https://static.bitsbox.com/fills/night2.jpg",
    night3: "https://static.bitsbox.com/fills/night3.jpg",
    nightcity: "https://static.bitsbox.com/fills/nightcity.jpg",
    nightfield: "https://static.bitsbox.com/fills/nightfield.jpg",
    nightsky: "https://static.bitsbox.com/fills/nightsky.jpg",
    nightsky2: "https://static.bitsbox.com/fills/nightsky2.jpg",
    northamerica: "https://static.bitsbox.com/fills/northamerica.jpg",
    northamerica2: "https://static.bitsbox.com/fills/northamerica2.jpg",
    northpolemap: "https://static.bitsbox.com/fills/northpolemap.jpg",
    northsea: "https://static.bitsbox.com/fills/northsea.jpg",
    notepad: "https://static.bitsbox.com/fills/notepad.jpg",
    numbers: "https://static.bitsbox.com/fills/numbers.jpg",
    ocean: "https://static.bitsbox.com/fills/ocean.jpg",
    ocean2: "https://static.bitsbox.com/fills/ocean2.jpg",
    ocean3: "https://static.bitsbox.com/fills/ocean3.jpg",
    oceanwaves: "https://static.bitsbox.com/fills/oceanwaves.jpg",
    officebuilding: "https://static.bitsbox.com/fills/officebuilding.jpg",
    oldbarn: "https://static.bitsbox.com/fills/oldbarn.jpg",
    oldbook: "https://static.bitsbox.com/fills/oldbook.jpg",
    oldfilm: "https://static.bitsbox.com/fills/oldfilm.jpg",
    oldmap: "https://static.bitsbox.com/fills/oldmap.jpg",
    oldpaper: "https://static.bitsbox.com/fills/oldpaper.jpg",
    oldwest: "https://static.bitsbox.com/fills/oldwest.jpg",
    operasinger: "https://static.bitsbox.com/fills/operasinger.jpg",
    orbit: "https://static.bitsbox.com/fills/orbit.jpg",
    orchard: "https://static.bitsbox.com/fills/orchard.jpg",
    paper: "https://static.bitsbox.com/fills/paper.jpg",
    paper2: "https://static.bitsbox.com/fills/paper2.jpg",
    paper3: "https://static.bitsbox.com/fills/paper3.jpg",
    paper4: "https://static.bitsbox.com/fills/paper4.jpg",
    parchment: "https://static.bitsbox.com/fills/parchment.jpg",
    paris: "http://13.71.86.152:8888/fills/paris.jpg",
    pasris2 : "http://13.71.86.152:8888/fills/paris2.jpg",
    park: "https://static.bitsbox.com/fills/park.png",
    park2: "https://static.bitsbox.com/fills/park2.jpg",
    park3: "https://static.bitsbox.com/fills/park3.jpg",
    park4: "https://static.bitsbox.com/fills/park4.jpg",
    parkinglot: "https://static.bitsbox.com/fills/parkinglot.jpg",
    pavement: "https://static.bitsbox.com/fills/pavement.jpg",
    pawprints: "https://static.bitsbox.com/fills/pawprints.jpg",
    pegboard: "https://static.bitsbox.com/fills/pegboard.jpg",
    penaltykicker: "https://static.bitsbox.com/fills/penaltykicker.jpg",
    penaltykicker2: "https://static.bitsbox.com/fills/penaltykicker2.jpg",
    pencils: "https://static.bitsbox.com/fills/pencils.jpg",
    perspective: "https://static.bitsbox.com/fills/perspective.jpg",
    pets: "https://static.bitsbox.com/fills/pets.jpg",
    phonescreen: "https://static.bitsbox.com/fills/phonescreen.jpg",
    picnic: "https://static.bitsbox.com/fills/picnic.jpg",
    picnicblanket: "https://static.bitsbox.com/fills/picnicblanket.jpg",
    pinksunset: "http://13.71.86.152:8888/fills/pinksunset.jpg",
    pirateseas: "https://static.bitsbox.com/fills/pirateseas.jpg",
    pirateseas2: "https://static.bitsbox.com/fills/pirateseas2.jpg",
    pitroom: "https://static.bitsbox.com/fills/pitroom.jpg",
    pixelsky: "https://static.bitsbox.com/fills/pixelsky.jpg",
    pizzadough: "https://static.bitsbox.com/fills/pizzadough.jpg",
    placesetting: "https://static.bitsbox.com/fills/placesetting.jpg",
    planet: "https://static.bitsbox.com/fills/planet.jpg",
    planet3: "https://static.bitsbox.com/fills/planet3.jpg",
    plateongreen: "https://static.bitsbox.com/fills/plateongreen.jpg",
    platformer: "https://static.bitsbox.com/fills/platformer.jpg",
    plungerfun: "https://static.bitsbox.com/fills/plungerfun.jpg",
    podium: "https://static.bitsbox.com/fills/podium.jpg",
    polaroids: "https://static.bitsbox.com/fills/polaroids.jpg",
    polkadot: "https://static.bitsbox.com/fills/polkadot.jpg",
    pond: "https://static.bitsbox.com/fills/pond.png",
    pool: "https://static.bitsbox.com/fills/pool.jpg",
    pool2: "https://static.bitsbox.com/fills/pool2.jpg",
    pool3: "https://static.bitsbox.com/fills/pool3.jpg",
    pool4: "https://static.bitsbox.com/fills/pool4.jpg",
    port: "https://static.bitsbox.com/fills/port.jpg",
    poster: "https://static.bitsbox.com/fills/poster.jpg",
    poster2: "https://static.bitsbox.com/fills/poster2.jpg",
    poster3: "https://static.bitsbox.com/fills/poster3.jpg",
    poster4: "https://static.bitsbox.com/fills/poster4.jpg",
    princesscastle: "https://static.bitsbox.com/fills/princesscastle.jpg",
    puffyclouds: "https://static.bitsbox.com/fills/puffyclouds.jpg",
    purplegradient: "https://static.bitsbox.com/fills/purplegradient.jpg",
    puttinggreenethan: "https://static.bitsbox.com/fills/puttinggreenethan.png",
    pylons: "https://static.bitsbox.com/fills/pylons.jpg",
    rain: "https://static.bitsbox.com/fills/rain.jpg",
    rainbow: "https://static.bitsbox.com/fills/rainbow.jpg",
    rainy: "https://static.bitsbox.com/fills/rainy.jpg",
    rainy2: "https://static.bitsbox.com/fills/rainy2.jpg",
    redbarn: "https://static.bitsbox.com/fills/redbarn.jpg",
    redcarpet: "https://static.bitsbox.com/fills/redcarpet.jpg",
    redcarpet2: "https://static.bitsbox.com/fills/redcarpet2.jpg",
    redflowers: "https://static.bitsbox.com/fills/redflowers.jpg",
    redgradient: "https://static.bitsbox.com/fills/redgradient.jpg",
    redhearts: "https://static.bitsbox.com/fills/redhearts.jpg",
    redsky: "https://static.bitsbox.com/fills/redsky.jpg",
    redstripes: "https://static.bitsbox.com/fills/redstripes.jpg",
    redvelvet: "https://static.bitsbox.com/fills/redvelvet.jpg",
    redwall: "https://static.bitsbox.com/fills/redwall.jpg",
    replicator: "https://static.bitsbox.com/fills/replicator.jpg",
    risingsun: "https://static.bitsbox.com/fills/risingsun.jpg",
    river: "https://static.bitsbox.com/fills/river.jpg",
    riverethan: "https://static.bitsbox.com/fills/riverethan.png",
    road: "https://static.bitsbox.com/fills/road.jpg",
    road2: "https://static.bitsbox.com/fills/road2.jpg",
    road3: "https://static.bitsbox.com/fills/road3.jpg",
    road4: "https://static.bitsbox.com/fills/road4.jpg",
    roads: "https://static.bitsbox.com/fills/roads.jpg",
    roads2: "https://static.bitsbox.com/fills/roads2.jpg",
    roads3: "https://static.bitsbox.com/fills/roads3.jpg",
    robotcrowd: "https://static.bitsbox.com/fills/robotcrowd.jpg",
    robots: "https://static.bitsbox.com/fills/robots.jpg",
    rockisland: "https://static.bitsbox.com/fills/rockisland.jpg",
    rockmountain: "https://static.bitsbox.com/fills/rockmountain.jpg",
    rooftops: "https://static.bitsbox.com/fills/rooftops.jpg",
    rooms: "https://static.bitsbox.com/fills/rooms.jpg",
    ruler: "https://static.bitsbox.com/fills/ruler.png",
    ruler1: "https://static.bitsbox.com/fills/ruler1.png",
    ruler11: "https://static.bitsbox.com/fills/ruler11.png",
    ruler2: "https://static.bitsbox.com/fills/ruler2.png",
    ruler3: "https://static.bitsbox.com/fills/ruler3.png",
    runway: "https://static.bitsbox.com/fills/runway.jpg",
    road : "http://13.71.86.152:8888/fills/road.jpg",
    sadrobot: "https://static.bitsbox.com/fills/sadrobot.jpg",
    salon: "https://static.bitsbox.com/fills/salon.jpg",
    sandbox: "https://static.bitsbox.com/fills/sandbox.jpg",
    sandbox2: "https://static.bitsbox.com/fills/sandbox2.jpg",
    sandstone: "https://static.bitsbox.com/fills/sandstone.jpg",
    savanna: "https://static.bitsbox.com/fills/savanna.jpg",
    savannah: "https://static.bitsbox.com/fills/savannah.jpg",
    scales: "https://static.bitsbox.com/fills/scales.jpg",
    scales2: "https://static.bitsbox.com/fills/scales2.jpg",
    scarycastle: "https://static.bitsbox.com/fills/scarycastle.jpg",
    scarytrex: "https://static.bitsbox.com/fills/scarytrex.jpg",
    seafloor: "https://static.bitsbox.com/fills/seafloor.jpg",
    sealife: "https://static.bitsbox.com/fills/sealife.jpg",
    seattle: "https://static.bitsbox.com/fills/seattle.jpg",
    seaweed: "https://static.bitsbox.com/fills/seaweed.jpg",
    sharktank: "https://static.bitsbox.com/fills/sharktank.jpg",
    shells: "https://static.bitsbox.com/fills/shells.jpg",
    shinyblack: "https://static.bitsbox.com/fills/shinyblack.jpg",
    shirtblack: "https://static.bitsbox.com/fills/shirtblack.jpg",
    shirtblue: "https://static.bitsbox.com/fills/shirtblue.jpg",
    shirtgreen: "https://static.bitsbox.com/fills/shirtgreen.jpg",
    shirtorange: "https://static.bitsbox.com/fills/shirtorange.jpg",
    shirtpink: "https://static.bitsbox.com/fills/shirtpink.jpg",
    shirtpurple: "https://static.bitsbox.com/fills/shirtpurple.jpg",
    shirtred: "https://static.bitsbox.com/fills/shirtred.jpg",
    shirtwhite: "https://static.bitsbox.com/fills/shirtwhite.jpg",
    shirtyellow: "https://static.bitsbox.com/fills/shirtyellow.jpg",
    shoehouse: "https://static.bitsbox.com/fills/shoehouse.jpg",
    showbiz: "https://static.bitsbox.com/fills/showbiz.jpg",
    shuffle: "https://static.bitsbox.com/fills/shuffle.jpg",
    signpost: "https://static.bitsbox.com/fills/signpost.jpg",
    sky: "https://static.bitsbox.com/fills/sky.jpg",
    sky2: "https://static.bitsbox.com/fills/sky2.jpg",
    skycastle: "https://static.bitsbox.com/fills/skycastle.jpg",
    skyline: "https://static.bitsbox.com/fills/skyline.jpg",
    slimyglass: "https://static.bitsbox.com/fills/slimyglass.jpg",
    smoggysky: "https://static.bitsbox.com/fills/smoggysky.jpg",
    snakeprint: "https://static.bitsbox.com/fills/snakeprint.jpg",
    snowglobe: "https://static.bitsbox.com/fills/snowglobe.jpg",
    snowy: "https://static.bitsbox.com/fills/snowy.jpg",
    snowy2: "https://static.bitsbox.com/fills/snowy2.jpg",
    snowymountains: "https://static.bitsbox.com/fills/snowymountains.jpg",
    snowynight: "https://static.bitsbox.com/fills/snowynight.jpg",
    soccerfield: "https://static.bitsbox.com/fills/soccerfield.jpg",
    soccerfield2: "https://static.bitsbox.com/fills/soccerfield2.jpg",
    soccergoal: "https://static.bitsbox.com/fills/soccergoal.jpg",
    solstice: "https://static.bitsbox.com/fills/solstice.jpg",
    southamerica: "https://static.bitsbox.com/fills/southamerica.jpg",
    southamerica2: "https://static.bitsbox.com/fills/southamerica2.jpg",
    space: "https://static.bitsbox.com/fills/space.jpg",
    space2: "https://static.bitsbox.com/fills/space2.jpg",
    space3: "https://static.bitsbox.com/fills/space3.jpg",
    space4: "https://static.bitsbox.com/fills/space4.jpg",
    space5: "https://static.bitsbox.com/fills/space5.jpg",
    space6: "https://static.bitsbox.com/fills/space6.jpg",
    sparkler: "https://static.bitsbox.com/fills/sparkler.jpg",
    speech: "https://static.bitsbox.com/fills/speech.jpg",
    spiderweb: "https://static.bitsbox.com/fills/spiderweb.jpg",
    spinner6: "https://static.bitsbox.com/fills/spinner6.jpg",
    spiral: "https://static.bitsbox.com/fills/spiral.jpg",
    spiral2: "https://static.bitsbox.com/fills/spiral2.jpg",
    spookycastle: "https://static.bitsbox.com/fills/spookycastle.jpg",
    springfield: "https://static.bitsbox.com/fills/springfield.jpg",
    sprinkles: "https://static.bitsbox.com/fills/sprinkles.jpg",
    spyphone: "https://static.bitsbox.com/fills/spyphone.jpg",
    squirreltree: "https://static.bitsbox.com/fills/squirreltree.jpg",
    stage: "https://static.bitsbox.com/fills/stage.jpg",
    stage2: "https://static.bitsbox.com/fills/stage2.jpg",
    stage3: "https://static.bitsbox.com/fills/stage3.jpg",
    stage4: "https://static.bitsbox.com/fills/stage4.jpg",
    stamps: "https://static.bitsbox.com/fills/stamps.jpg",
    stardom: "https://static.bitsbox.com/fills/stardom.jpg",
    stars: "https://static.bitsbox.com/fills/stars.jpg",
    stars2: "https://static.bitsbox.com/fills/stars2.jpg",
    starsystem: "https://static.bitsbox.com/fills/starsystem.jpg",
    steel: "https://static.bitsbox.com/fills/steel.jpg",
    steelhexes: "https://static.bitsbox.com/fills/steelhexes.jpg",
    steelplate: "https://static.bitsbox.com/fills/steelplate.jpg",
    stoneisland: "https://static.bitsbox.com/fills/stoneisland.jpg",
    stonewall: "https://static.bitsbox.com/fills/stonewall.jpg",
    stoplight: "https://static.bitsbox.com/fills/stoplight.jpg",
    storm: "https://static.bitsbox.com/fills/storm.jpg",
    stormclouds: "https://static.bitsbox.com/fills/stormclouds.jpg",
    stormy: "https://static.bitsbox.com/fills/stormy.jpg",
    storyboard: "https://static.bitsbox.com/fills/storyboard.jpg",
    stpatricks: "https://static.bitsbox.com/fills/stpatricks.jpg",
    suitcases: "https://static.bitsbox.com/fills/suitcases.jpg",
    suitmanback: "https://static.bitsbox.com/fills/suitmanback.jpg",
    summer1: "http://13.71.86.152:8888/fills/summer1.jpg",
    summer2: "http://13.71.86.152:8888/fills/summer2.jpg",
    summerfence: "https://static.bitsbox.com/fills/summerfence.jpg",
    summerfence2: "https://static.bitsbox.com/fills/summerfence2.jpg",
    sun: "https://static.bitsbox.com/fills/sun.jpg",
    sunnyfarm: "https://static.bitsbox.com/fills/sunnyfarm.jpg",
    sunrise: "https://static.bitsbox.com/fills/sunrise.jpg",
    sunrise2: "https://static.bitsbox.com/fills/sunrise2.jpg",
    sunset2: "https://static.bitsbox.com/fills/sunset2.jpg",
    sunset3: "https://static.bitsbox.com/fills/sunset3.jpg",
    sunset4: "https://static.bitsbox.com/fills/sunset4.jpg",
    sunsetjungle: "https://static.bitsbox.com/fills/sunsetjungle.jpg",
    supermarket: "https://static.bitsbox.com/fills/supermarket.jpg",
    swamp: "https://static.bitsbox.com/fills/swamp.jpg",
    swamp2: "https://static.bitsbox.com/fills/swamp2.jpg",
    swamp3: "https://static.bitsbox.com/fills/swamp3.jpg",
    swamp4: "https://static.bitsbox.com/fills/swamp4.jpg",
    swapscreen: "https://static.bitsbox.com/fills/swapscreen.jpg",
    swapscreen2: "https://static.bitsbox.com/fills/swapscreen2.jpg",
    swirls: "https://static.bitsbox.com/fills/swirls.jpg",
    tablecloth: "https://static.bitsbox.com/fills/tablecloth.jpg",
    tablecloth2: "https://static.bitsbox.com/fills/tablecloth2.jpg",
    targets: "https://static.bitsbox.com/fills/targets.jpg",
    teleporter: "https://static.bitsbox.com/fills/teleporter.jpg",
    temperature: "https://static.bitsbox.com/fills/temperature.jpg",
    tenniscourt: "https://static.bitsbox.com/fills/tenniscourt.jpg",
    tenniscourt2: "https://static.bitsbox.com/fills/tenniscourt2.jpg",
    tentaclesign: "https://static.bitsbox.com/fills/tentaclesign.jpg",
    thanksgiving: "https://static.bitsbox.com/fills/thanksgiving.jpg",
    theater: "https://static.bitsbox.com/fills/theater.jpg",
    thermometer: "https://static.bitsbox.com/fills/thermometer.jpg",
    think: "https://static.bitsbox.com/fills/think.jpg",
    threelittlehouses: "https://static.bitsbox.com/fills/threelittlehouses.jpg",
    tictactoe: "https://static.bitsbox.com/fills/tictactoe.jpg",
    tilefloor: "https://static.bitsbox.com/fills/tilefloor.jpg",
    tilefloor2: "https://static.bitsbox.com/fills/tilefloor2.jpg",
    tiles: "https://static.bitsbox.com/fills/tiles.jpg",
    timewarp: "https://static.bitsbox.com/fills/timewarp.jpg",
    tinydancer: "https://static.bitsbox.com/fills/tinydancer.jpg",
    townroad: "https://static.bitsbox.com/fills/townroad.jpg",
    trainstation: "https://static.bitsbox.com/fills/trainstation.jpg",
    treads: "https://static.bitsbox.com/fills/treads.jpg",
    treasuremap: "https://static.bitsbox.com/fills/treasuremap.jpg",
    treehouse: "https://static.bitsbox.com/fills/treehouse.jpg",
    trexskull: "https://static.bitsbox.com/fills/trexskull.jpg",
    trollbridge: "https://static.bitsbox.com/fills/trollbridge.jpg",
    tvshow: "https://static.bitsbox.com/fills/tvshow.jpg",
    underwater: "https://static.bitsbox.com/fills/underwater.jpg",
    underwater1: "https://static.bitsbox.com/fills/underwater1.jpg",
    underwater10: "https://static.bitsbox.com/fills/underwater10.jpg",
    underwater11: "https://static.bitsbox.com/fills/underwater11.jpg",
    underwater12: "https://static.bitsbox.com/fills/underwater12.jpg",
    underwater2: "https://static.bitsbox.com/fills/underwater2.jpg",
    underwater3: "https://static.bitsbox.com/fills/underwater3.jpg",
    underwater4: "https://static.bitsbox.com/fills/underwater4.jpg",
    underwater5: "https://static.bitsbox.com/fills/underwater5.jpg",
    underwater6: "https://static.bitsbox.com/fills/underwater6.jpg",
    underwater7: "https://static.bitsbox.com/fills/underwater7.jpg",
    underwater8: "https://static.bitsbox.com/fills/underwater8.jpg",
    underwater9: "https://static.bitsbox.com/fills/underwater9.jpg",
    unicornforest: "https://static.bitsbox.com/fills/unicornforest.jpg",
    unicorns: "https://static.bitsbox.com/fills/unicorns.jpg",
    unlocked: "https://static.bitsbox.com/fills/unlocked.jpg",
    uscapitol: "https://static.bitsbox.com/fills/uscapitol.jpg",
    valentines: "https://static.bitsbox.com/fills/valentines.jpg",
    veggiesonwood: "https://static.bitsbox.com/fills/veggiesonwood.jpg",
    velvet: "https://static.bitsbox.com/fills/velvet.jpg",
    venusflytrap: "https://static.bitsbox.com/fills/venusflytrap.jpg",
    vetoffice: "https://static.bitsbox.com/fills/vetoffice.jpg",
    volcano: "https://static.bitsbox.com/fills/volcano.jpg",
    volcano2: "https://static.bitsbox.com/fills/volcano2.jpg",
    vortex: "https://static.bitsbox.com/fills/vortex.jpg",
    wall: "https://static.bitsbox.com/fills/wall.jpg",
    wallpaper: "https://static.bitsbox.com/fills/wallpaper.jpg",
    watercolor: "https://static.bitsbox.com/fills/watercolor.jpg",
    waterfall: "https://static.bitsbox.com/fills/waterfall.jpg",
    waves: "https://static.bitsbox.com/fills/waves.png",
    waves2: "https://static.bitsbox.com/fills/waves2.jpg",
    waves3: "https://static.bitsbox.com/fills/waves3.jpg",
    waves4: "https://static.bitsbox.com/fills/waves4.jpg",
    waves5: "https://static.bitsbox.com/fills/waves5.jpg",
    waves6: "https://static.bitsbox.com/fills/waves6.jpg",
    waves7: "https://static.bitsbox.com/fills/waves7.jpg",
    wavystripes: "https://static.bitsbox.com/fills/wavystripes.jpg",
    web: "https://static.bitsbox.com/fills/web.jpg",
    winter: "https://static.bitsbox.com/fills/winter.jpg",
    wood: "https://static.bitsbox.com/fills/wood.jpg",
    wood2: "https://static.bitsbox.com/fills/wood2.jpg",
    woodbox: "https://static.bitsbox.com/fills/woodbox.jpg",
    worldofmusic: "https://static.bitsbox.com/fills/worldofmusic.jpg",
    yogastudio: "https://static.bitsbox.com/fills/yogastudio.jpg",
    yogastudio2: "https://static.bitsbox.com/fills/yogastudio2.jpg",
    yoyoing: "https://static.bitsbox.com/fills/yoyoing.jpg",
    zam: "https://static.bitsbox.com/fills/zam.jpg",
    zapmessenger: "https://static.bitsbox.com/fills/zapmessenger.jpg",
    zebraprint: "https://static.bitsbox.com/fills/zebraprint.jpg",
    zombiegrid: "https://static.bitsbox.com/fills/zombiegrid.jpg",
    zombiegrid2: "https://static.bitsbox.com/fills/zombiegrid2.jpg"
};
c123.featureFlagConfig_ = {
    customStamps: {
        global: !0,
        beta: !0,
        activeSubscriber: !1,
        turnOffForHoc: !0,
        turnOffForSqula: !0,
        turnOffForAli: !0
    },
    grownupAccounts: {
        global: !1,
        beta: !1,
        activeSubscriber: !1
    },
    googleFonts: {
        global: !0,
        beta: !1,
        activeSubscriber: !1
    },
    alphaTool: {
        global: !0,
        beta: !0,
        activeSubscriber: !1,
        turnOffForHoc: !0,
        turnOffForSqula: !0,
        turnOffForAli: !0
    },
    signUpPrompt: {
        global: !0,
        beta: !1,
        turnOffForSqula: !0,
        turnOffForAli: !0,
        activeSubscriber: !1
    },
    copyToGoogleDoc: {
        global: !0,
        beta: !1,
        turnOffForSqula: !0,
        activeSubscriber: !1
    },
    accountConnectWidget: {
        global: !0,
        beta: !0,
        turnOffForHoc: !0,
        turnOffForSqula: !0,
        activeSubscriber: !1
    },
    shareAppViaText: {
        global: !0,
        beta: !0,
        turnOffForHoc: !0,
        turnOffForSqula: !0,
        activeSubscriber: !1,
        turnOffForAli: !1
    },
    draggableAppCards: {
        global: !1,
        beta: !1,
        turnOffForHoc: !0,
        turnOffForSqula: !0,
        activeSubscriber: !1
    },
    userVoice: {
        global: !0,
        beta: !1,
        activeSubscriber: !1,
        turnOffForAli: !0
    },
    ageAndGender: {
        global: !0,
        beta: !0,
        activeSubscriber: !0,
        turnOffForAli: !0
    },
    bitsboxCardOptionModal: {
        global: !0,
        beta: !0,
        activeSubscriber: !0,
        turnOffForAli: !0
    },
    newAppAli: {
        global: !1,
        beta: !1,
        activeSubscriber: !1
    },
    updatedSharePanel: {
        global: !0,
        beta: !0,
        turnOffForHoc: !0,
        turnOffForSqula: !0,
        activeSubscriber: !1,
        turnOffForAli: !1
    }
};
c123.isFeatureFlagOn = function(a, b) {
    var d = !1;
    void 0 !== c123.featureFlagConfig_[a] && void 0 !== c123.featureFlagConfig_[a].global && c123.featureFlagConfig_[a].global ? d = !0 : b && void 0 !== c123.featureFlagConfig_[a] && void 0 !== c123.featureFlagConfig_[a][b] && c123.featureFlagConfig_[a][b] && (d = !0);
    c123.isSqulaPage_() && void 0 !== c123.featureFlagConfig_[a] && void 0 !== c123.featureFlagConfig_[a].turnOffForSqula && c123.featureFlagConfig_[a].turnOffForSqula && (d = !1);
    c123.isHocPage_() && void 0 !== c123.featureFlagConfig_[a] && void 0 !== c123.featureFlagConfig_[a].turnOffForHoc && c123.featureFlagConfig_[a].turnOffForHoc && (d = !1);
    c123.isAliPage_() && void 0 !== c123.featureFlagConfig_[a] && void 0 !== c123.featureFlagConfig_[a].turnOffForAli && c123.featureFlagConfig_[a].turnOffForAli && (d = !1);
    var f = c123.featureFlagCheckUrl_(a);
    null !== f && ("on" === f ? d = !0 : "off" === f && (d = !1));
    return d
}
;
c123.featureFlagCheckUrl_ = function(a) {
    var b = "" + window.location.search;
    c123.canAccessTopFrame() && (b = "" + top.window.location.search);
    if (0 > b.toLowerCase().indexOf(a.toLowerCase()))
        return null;
    b = b.split("?");
    if (1 >= b.length)
        return null;
    b = b[1].split("&");
    if (0 === b.length)
        return null;
    for (var d = 0; d < b.length; d++) {
        var f = b[d].split("=");
        if (f.length && f[0].toLowerCase() === a.toLowerCase()) {
            a = f[1];
            if ("on" === a.toLowerCase())
                return "on";
            if ("off" === a.toLowerCase())
                return "off";
            break
        }
    }
    return null
}
;
c123.isSqulaPage_ = function() {
    var a = !1
      , b = window.location.hostname
      , d = window.location.pathname;
    c123.canAccessTopFrame() && (b = top.window.location.hostname,
    d = top.window.location.pathname);
    if (b && -1 < b.toLowerCase().indexOf("leukprogrammeren.nl") || d && "/squla.html" === d)
        a = !0;
    return a
}
;
c123.isHocPage_ = function() {
    var a = !1
      , b = window.location.pathname;
    c123.canAccessTopFrame() && (b = top.window.location.pathname);
    b && -1 < b.indexOf("hoc") && (a = !0);
    return a
}
;
c123.isAliPage_ = function() {
    var a = !1
      , b = window.location.href;
    c123.canAccessTopFrame() && (b = top.window.location.href);
    b && (-1 < b.indexOf("accelerate") || -1 < b.indexOf("ali") || -1 < b.indexOf("stemscopes")) && (a = !0);
    return a
}
;
/*
 MIT
 @copyright Sam Clarke 2013
 @author Sam Clarke <sam@samclarke.com>

 See: https://www.samclarke.com/javascript-is-font-available/
*/
c123 = c123 || {};
c123.strings = c123.strings || {};
c123.MAX_LINE_WIDTH = 40;
c123.MIN_LINE_WIDTH = 0;
c123.INITIAL_LINE_WIDTH = 2;
var LEFT = "left"
  , DOWN = "down"
  , RIGHT = "right"
  , UP = "up"
  , NORTH = "north"
  , SOUTH = "south"
  , EAST = "east"
  , WEST = "west"
  , CENTER = "center"
  , NORTHEAST = "northeast"
  , SOUTHEAST = "southeast"
  , NORTHWEST = "northwest"
  , SOUTHWEST = "southwest";
c123.fontList = {
    impact: "Impact, Charcoal, sans-serif",
    palatino: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
    tahoma: "Tahoma, Geneva, sans-serif",
    roboto: "roboto",
    sans: "sans-serif",
    "sans-serif": "sans-serif",
    serif: "serif",
    hand: "cursive",
    mono: "monospace",
    century: "Century Gothic, sans-serif",
    lucida: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    gadget: '"Arial Black", Gadget, sans-serif',
    times: '"Times New Roman", Times, serif',
    narrow: '"Arial Narrow", sans-serif',
    verdana: "Verdana, Geneva, sans-serif",
    console: '"Lucida Console", Monaco, monospace',
    gill: '"Gill Sans", "Gill Sans MT", sans-serif',
    trebuchet: '"Trebuchet MS", Helvetica, sans-serif',
    courier: '"Courier New", Courier, monospace',
    arial: "Arial, Helvetica, sans-serif",
    georgia: "Georgia, Serif"
};
c123.googleFonts = {};
var compassDirections = {
    north: !0,
    south: !0,
    east: !0,
    west: !0,
    northeast: !0,
    southeast: !0,
    northwest: !0,
    southwest: !0,
    up: !0,
    down: !0
};
c123.bind = function(a, b, d) {
    var f = a.boundArgs_;
    if (2 < arguments.length) {
        var g = Array.prototype.slice.call(arguments, 2);
        f && g.unshift.apply(g, f);
        f = g
    }
    b = a.boundSelf_ || b;
    a = a.boundFn_ || a;
    var h = b || goog.global
      , g = f ? function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, f);
        return a.apply(h, b)
    }
    : function() {
        return a.apply(h, arguments)
    }
    ;
    g.boundArgs_ = f;
    g.boundSelf_ = b;
    g.boundFn_ = a;
    return g
}
;
c123.inherits = function(a, b) {
    function d() {}
    d.prototype = b.prototype;
    a.superClass_ = b.prototype;
    a.prototype = new d;
    a.prototype.constructor = a
}
;
c123.base = function(a, b) {
    var d = arguments.callee.caller;
    if (d.superClass_)
        return d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
    for (var f = Array.prototype.slice.call(arguments, 2), g = !1, h = a.constructor; h; h = h.superClass_ && h.superClass_.constructor)
        if (h.prototype[b] === d)
            g = !0;
        else if (g)
            return h.prototype[b].apply(a, f);
    if (a[b] === d)
        return a.constructor.prototype[b].apply(a, f);
    throw Error("c123.base called from a method of one name to a method of a different name.");
}
;
c123.isIE = function(a) {
    a = a || navigator.userAgent;
    return -1 < a.indexOf("MSIE ") || -1 < a.indexOf("Trident")
}
;
c123.isEdge = function(a) {
    return -1 < (a || navigator.userAgent).indexOf("Edge")
}
;
c123.isFirefox = function(a) {
    return -1 < (a || navigator.userAgent).toLowerCase().indexOf("firefox")
}
;
c123.canAccessTopFrame = function() {
    try {
        return top.document ? !0 : !1
    } catch (a) {
        return !1
    }
}
;
c123.isOfflineMode = function() {
    return -1 < ("" + top.location.href).indexOf("offline=1")
}
;
c123.getQueryParameter = function(a) {
    for (var b = window.location.search.substr(1).split("&"), d = 0; d < b.length; d++) {
        var f = b[d].split("=");
        if (f[0] === a && 1 < f.length)
            return decodeURIComponent(f[1])
    }
}
;
c123.language = (c123.getQueryParameter("hl") || "en").toLowerCase();
if ("en" !== c123.language && codepops.createScriptTag) {
    var base = "l10n/" + c123.language + "/" + c123.language;
    codepops.createScriptTag({
        src: base + "_colors.js",
        async: !0
    });
    codepops.createScriptTag({
        src: base + "_fills.js",
        async: !0
    });
    codepops.createScriptTag({
        src: base + "_songs.js",
        async: !0
    });
    codepops.createScriptTag({
        src: base + "_sounds.js",
        async: !0
    });
    codepops.createScriptTag({
        src: base + "_stamps.js",
        async: !0
    });
    codepops.createScriptTag({
        src: base + "_ui.js",
        async: !0
    });
    codepops.createScriptTag({
        src: base + "_library-1.3.js",
        async: !0
    })
}
Array.prototype.foreach = Array.prototype.forEach;
c123.isFontAvailable = function(a) {
    var b, d = document.body, f = document.createElement("span");
    f.innerHTML = Array(100).join("wi");
    f.style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;");
    var g = function(a) {
        f.style.fontFamily = a;
        d.appendChild(f);
        b = f.clientWidth;
        d.removeChild(f);
        return b
    }
      , h = g("monospace")
      , k = g("serif")
      , l = g("sans-serif");
    return h !== g(a + ",monospace") || l !== g(a + ",sans-serif") || k !== g(a + ",serif")
}
;
c123.Command = function(a, b, d, f) {
    this.library_ = a;
    this.functionName_ = b;
    this.args_ = d;
    this.z = f;
    this.isHidden_ = !1
}
;
c123.Command.prototype.draw = function() {
    this.isHidden_ || (this.library_.isRedrawingACommand_ = !0,
    this.library_[this.functionName_].apply(this.library_, this.args_),
    this.library_.isRedrawingACommand_ = !1)
}
;
c123.Command.prototype.onTick = function() {}
;
c123.Command.prototype.hide = function() {
    this.isHidden_ = !0;
    this.library_.requestRedraw()
}
;
c123.Command.prototype.change = function(a) {
    if ("text" === this.functionName_)
        return this.args_[0] = a,
        this.library_.requestRedraw(),
        this
}
;
c123.Command.prototype.unhide = function() {
    this.isHidden_ = !1;
    this.library_.requestRedraw()
}
;
c123.Command.prototype.show = c123.Command.prototype.unhide;
Object.defineProperty(c123.Command.prototype, "hidden", {
    get: function() {
        return this.isHidden_
    }
});
c123.DrawingElement = function(a, b) {
    this.library_ = a;
    this.z = b.z;
    void 0 === b.z && (this.z = 0);
    this.canvas_ = this.library_.getCanvas();
    this.ctx_ = this.library_.getContext();
    this.x = b.x;
    void 0 === b.x && (this.x = Math.floor(this.canvas_.width / 2));
    this.y = b.y;
    void 0 === b.y && (this.y = Math.floor(this.canvas_.height / 2));
    this.width_ = null;
    null !== b.width && void 0 !== b.width && (this.width_ = b.width);
    this.height_ = null;
    null !== b.height && void 0 !== b.height && (this.height_ = b.height);
    this.originalHeight_ = this.height_;
    this.originalWidth_ = this.width_;
    this.hitWidth_ = b.hitWidth || 0;
    this.originalHitHeight_ = this.hitHeight_ = b.hitHeight || 0;
    this.originalHitWidth_ = this.hitWidth_;
    this.isHidden_ = !1;
    this.moveAnimation_ = null;
    this.rotation = b.rotation || 0;
    this.onAnimationComplete_ = null
}
;
c123.DrawingElement.prototype.getOriginalHeight_ = function() {
    return this.originalHeight_
}
;
c123.DrawingElement.prototype.getOriginalWidth_ = function() {
    return this.originalWidth_
}
;
c123.DrawingElement.prototype.getHitHeight = function() {
    return this.hitHeight_
}
;
c123.DrawingElement.prototype.getHitWidth = function() {
    return this.hitWidth_
}
;
c123.DrawingElement.prototype.getOriginalHitHeight_ = function() {
    return this.originalHitHeight_
}
;
c123.DrawingElement.prototype.getOriginalHitWidth_ = function() {
    return this.originalHitWidth_
}
;
c123.DrawingElement.prototype.swim = function() {
    this.move(UP, 35, 350);
    if (1 === random(5)) {
        var a = random(-10, 10);
        this.rotate(LEFT, a, 350)
    }
    offscreen(this) && this.rotate(LEFT, 10)
}
;
c123.DrawingElement.prototype.wrap = function() {
    var a = this.x
      , b = this.y;
    "box" === this.typeName && (a = this.x + this.width_ / 2,
    b = this.y + this.height_ / 2);
    for (var d = this.library_.width(), f = this.library_.height(); a > d; )
        a -= d;
    for (; 0 > a; )
        a += d;
    for (; b > f; )
        b -= f;
    for (; 0 > b; )
        b += f;
    this.move(a, b)
}
;
c123.DrawingElement.prototype.hide = function() {
    this.isHidden_ = !0;
    this.library_.requestRedraw();
    return this
}
;
c123.DrawingElement.prototype.erase = function() {
    return this.hide()
}
;
c123.DrawingElement.prototype.unhide = function() {
    this.isHidden_ = !1;
    this.library_.requestRedraw();
    return this
}
;
c123.DrawingElement.prototype.show = c123.DrawingElement.prototype.unhide;
c123.DrawingElement.prototype.move = function(a, b, d) {
    var f = this.library_.parseArguments_(arguments);
    a = f.numbers[0];
    b = f.numbers[1];
    d = f.numbers[2];
    0 === arguments.length && (a = this.library_.random(this.library_.width()),
    b = this.library_.random(this.library_.height()));
    if (f.directions) {
        var g = f.numbers[0] || 0
          , h = f.directions[0];
        1 === arguments.length && (g = Math.max(this.width_, this.height_));
        g = this.library_.deltaByDirection(h, g, this.rotation);
        a = this.x + g.dx;
        b = this.y + g.dy;
        d = f.numbers[1]
    }
    d ? (this.moveAnimation_ = {},
    this.moveAnimation_.endX = a,
    this.moveAnimation_.endY = b,
    this.moveAnimation_.startX = this.x,
    this.moveAnimation_.startY = this.y,
    this.moveAnimation_.startTime = this.library_.getLastFrameEndTime_(),
    this.moveAnimation_.length = d) : (this.x = a,
    this.y = b,
    this.moveAnimation_ = null);
    this.library_.requestRedraw();
    return this
}
;
c123.DrawingElement.prototype.rotate = function(a, b) {
    var d = this.library_.parseArguments_(arguments)
      , f = d.numbers[0];
    b = d.numbers[1];
    0 === d.numbers.length && (f = this.library_.random(360));
    d.directions && (0 === d.numbers.length ? f = d.directions[0]in compassDirections ? this.library_.angleByDirection(d.directions[0]) : "left" === d.directions[0] ? this.rotation - 90 : this.rotation + 90 : "left" === d.directions[0] ? f = this.rotation - f : "right" === d.directions[0] && (f = this.rotation + f));
    b ? (this.rotationAnimation_ = {},
    this.rotationAnimation_.endR = f,
    this.rotationAnimation_.startR = this.rotation,
    this.rotationAnimation_.startTime = this.library_.getLastFrameEndTime_(),
    this.rotationAnimation_.length = b) : (this.rotation = f,
    this.rotationAnimation_ = null);
    this.library_.requestRedraw();
    return this
}
;
c123.DrawingElement.prototype.aim = function(a, b) {
    var d = this.library_.parseArguments_(arguments);
    1 === d.objects.length && void 0 !== d.objects[0].x && void 0 !== d.objects[0].y && (a = d.objects[0].x,
    b = d.objects[0].y);
    var d = a - this.x
      , f = b - this.y;
    if (0 !== d || 0 !== f)
        return this.rotate(180 * Math.atan2(f, d) / Math.PI + 90),
        this
}
;
Object.defineProperty(c123.DrawingElement.prototype, "width", {
    get: function() {
        return this.width_
    }
});
Object.defineProperty(c123.DrawingElement.prototype, "height", {
    get: function() {
        return this.height_
    }
});
Object.defineProperty(c123.DrawingElement.prototype, "hidden", {
    get: function() {
        return this.isHidden_
    }
});
c123.DrawingElement.prototype.dance = function(a) {
    a = a || 1E3;
    this.danceAnimation_ = {};
    this.danceAnimation_.startTime = this.library_.getLastFrameEndTime_();
    this.danceAnimation_.startR = this.rotation;
    this.danceAnimation_.startX = this.x;
    this.danceAnimation_.startY = this.y;
    this.danceAnimation_.length = a;
    this.library_.requestRedraw();
    return this
}
;
c123.DrawingElement.prototype.front = function() {
    this.library_.bringToFront(this);
    return this
}
;
c123.DrawingElement.prototype.back = function() {
    this.library_.sendToBack(this);
    return this
}
;
c123.DrawingElement.prototype.onTick = function(a) {
    var b, d, f;
    this.moveAnimation_ && (b = a - this.moveAnimation_.startTime,
    b /= this.moveAnimation_.length,
    1 < b && (b = 1),
    d = this.moveAnimation_.endX - this.moveAnimation_.startX,
    f = this.moveAnimation_.endY - this.moveAnimation_.startY,
    this.x = this.moveAnimation_.startX + d * b,
    this.y = this.moveAnimation_.startY + f * b,
    1 === b ? this.moveAnimation_ = null : this.library_.requestRedraw());
    this.rotationAnimation_ && (b = a - this.rotationAnimation_.startTime,
    b /= this.rotationAnimation_.length,
    1 < b && (b = 1),
    f = this.rotationAnimation_.endR - this.rotationAnimation_.startR,
    this.rotation = this.rotationAnimation_.startR + f * b,
    1 === b ? this.rotationAnimation_ = null : this.library_.requestRedraw());
    this.danceAnimation_ && (b = a - this.danceAnimation_.startTime,
    b /= this.danceAnimation_.length,
    1 < b && (b = 1),
    a = [0, 10, 0, -10, 0, 10, 0, -10, 0, 0],
    d = Math.floor(8 * b),
    f = a[d],
    f += b % 0.125 * (a[d + 1] - f) * 8,
    d = f * this.width_ / 160,
    this.rotation = this.danceAnimation_.startR + f,
    this.x = this.danceAnimation_.startX + d,
    this.y = this.danceAnimation_.startY + Math.abs(d),
    1 === b ? this.danceAnimation_ = null : this.library_.requestRedraw())
}
;
c123.DrawingElement.prototype.hits = function() {
    var a = this.library_.parseArguments_(arguments)
      , b = this.getBoundingPoints_();
    if (1 === a.objects.length)
        return !a.objects[0].typeName || "sticker" !== a.objects[0].typeName && "text" !== a.objects[0].typeName && "circle" !== a.objects[0].typeName && "box" !== a.objects[0].typeName && "line" !== a.objects[0].typeName ? !1 : this.checkCollision_(a.objects[0], b);
    if (0 < a.strings.length) {
        for (var d = [], f = this.library_.sceneStack_.length, g = 0; g < f; g++) {
            var h = this.library_.sceneStack_[g];
            if ("sticker" === h.typeName && h !== this) {
                var k = codepops.cleanAssetName(a.strings[0]);
                h.cleanName_ === k && this.checkCollision_(h, b) && d.push(h)
            }
        }
        if (0 < d.length)
            return d
    } else if (2 === a.numbers.length) {
        if (this.hidden)
            return !1;
        if ("circle" === this.typeName)
            return b = Math.abs(this.x - a.numbers[0]),
            a = Math.abs(this.y - a.numbers[1]),
            b <= this.radius && a <= this.radius ? !0 : !1;
        if ("line" === this.typeName)
            return this.isPointInLineStroke(a.numbers[0], a.numbers[1]);
        this.ctx_.beginPath();
        this.ctx_.rect(b.left, b.top, b.width, b.height);
        return this.ctx_.isPointInPath(a.numbers[0], a.numbers[1])
    }
    return !1
}
;
c123.DrawingElement.prototype.checkCollision_ = function(a, b) {
    if (void 0 === a || this.hidden || a.hidden)
        return !1;
    var d = a.getBoundingPoints_(), f, g;
    if ("circle" === this.typeName && "circle" === a.typeName)
        return f = Math.abs(b.x - d.x),
        g = Math.abs(b.y - d.y),
        Math.sqrt(f * f + g * g) <= b.radius + d.radius ? !0 : !1;
    if ("circle" === this.typeName || "circle" === a.typeName)
        return "circle" === this.typeName ? "line" === a.typeName ? this.checkCircleHitsLine_(b, d) : this.checkCircleHitsRectangle_(b, d) : "line" === this.typeName ? this.checkCircleHitsLine_(d, b) : this.checkCircleHitsRectangle_(d, b);
    if ("line" === this.typeName && "line" === a.typeName)
        return this.checkLinesHit_({
            x: b.x,
            y: b.y
        }, {
            x: b.x2,
            y: b.y2
        }, {
            x: d.x,
            y: d.y
        }, {
            x: d.x2,
            y: d.y2
        });
    if ("line" === this.typeName || "line" === a.typeName)
        return "line" === this.typeName ? this.checkLineHitsRectangle_(b, d) : this.checkLineHitsRectangle_(d, b);
    if (isNaN(b.width) || 0 >= b.width || isNaN(b.height) || 0 >= b.height || isNaN(d.width) || 0 >= d.width || isNaN(d.height) || 0 >= d.height)
        return !1;
    f = Math.abs(b.centerX - d.centerX);
    if (f > b.width / 2 + d.width / 2)
        return !1;
    g = Math.abs(b.centerY - d.centerY);
    return g > b.height / 2 + d.height / 2 ? !1 : !0
}
;
c123.DrawingElement.prototype.checkCircleHitsRectangle_ = function(a, b) {
    var d = Math.abs(a.x - b.left - b.width / 2)
      , f = Math.abs(a.y - b.top - b.height / 2);
    if (d > b.width / 2 + a.radius || f > b.height / 2 + a.radius)
        return !1;
    if (d <= b.width / 2 || f <= b.height / 2)
        return !0;
    d -= b.width / 2;
    f -= b.height / 2;
    return d * d + f * f <= a.radius * a.radius
}
;
c123.DrawingElement.prototype.checkCircleHitsLine_ = function(a, b) {
    var d = ((a.x - b.x) * b.width + (a.y - b.y) * b.height) / (b.width * b.width + b.height * b.height)
      , f = b.x + b.width * d
      , g = b.y + b.height * d;
    0 > d && (f = b.x,
    g = b.y);
    1 < d && (f = b.x2,
    g = b.y2);
    return (a.x - f) * (a.x - f) + (a.y - g) * (a.y - g) < a.radius * a.radius
}
;
c123.DrawingElement.prototype.checkLineHitsRectangle_ = function(a, b) {
    var d = {
        x: a.x,
        y: a.y
    }
      , f = {
        x: a.x2,
        y: a.y2
    }
      , g = {
        x: b.left,
        y: b.top
    }
      , h = {
        x: b.left + b.width,
        y: b.top
    }
      , k = {
        x: b.left + b.width,
        y: b.top + b.height
    }
      , l = {
        x: b.left,
        y: b.top + b.height
    };
    return this.checkLinesHit_(d, f, g, h) || this.checkLinesHit_(d, f, h, k) || this.checkLinesHit_(d, f, k, l) || this.checkLinesHit_(d, f, l, g) ? !0 : !1
}
;
c123.DrawingElement.prototype.checkLinesHit_ = function(a, b, d, f) {
    var g = (f.x - d.x) * (a.y - d.y) - (f.y - d.y) * (a.x - d.x)
      , h = (b.x - a.x) * (a.y - d.y) - (b.y - a.y) * (a.x - d.x);
    a = (f.y - d.y) * (b.x - a.x) - (f.x - d.x) * (b.y - a.y);
    if (0 === g && 0 === h && 0 === a)
        return !0;
    if (0 === a)
        return !1;
    g /= a;
    h /= a;
    return 0 <= g && 1 >= g && 0 <= h && 1 >= h
}
;
c123.DrawingElement.prototype.isPointInLineStroke = function(a, b) {
    var d = Math.cos(this.library_.radians(this.rotation))
      , f = Math.sin(this.library_.radians(this.rotation))
      , g = this.x + d * this.lineWidth_ / 2
      , h = this.y + f * this.lineWidth_ / 2
      , k = this.x - d * this.lineWidth_ / 2
      , l = this.y - f * this.lineWidth_ / 2
      , z = this.x2 - d * this.lineWidth_ / 2
      , e = this.y2 - f * this.lineWidth_ / 2
      , d = this.x2 + d * this.lineWidth_ / 2
      , f = this.y2 + f * this.lineWidth_ / 2;
    this.ctx_.beginPath();
    this.ctx_.lineWidth = this.lineWidth_;
    this.ctx_.moveTo(g, h);
    this.ctx_.lineTo(k, l);
    this.ctx_.lineTo(z, e);
    this.ctx_.lineTo(d, f);
    this.ctx_.lineTo(g, h);
    this.ctx_.closePath();
    return this.ctx_.isPointInPath(a, b)
}
;
c123.DrawingElement.prototype.setLineColor_ = function(a) {
    return this.ctx_.strokeStyle = a
}
;
c123.DrawingElement.prototype.setFillStyle_ = function(a) {
    return this.ctx_.fillStyle = a
}
;
c123.Box = function(a, b, d, f, g, h) {
    h = h || {};
    c123.base(this, a, h);
    this.x = b;
    this.y = d;
    this.width_ = f;
    this.height_ = g;
    this.solidFill = !0;
    void 0 !== h.solidFill && !1 === h.solidFill && (this.solidFill = !1);
    this.fillColor = h.fillColor;
    this.lineColor = h.lineColor
}
;
c123.inherits(c123.Box, c123.DrawingElement);
c123.Box.prototype.typeName = "box";
c123.Box.prototype.onTick = function(a) {
    c123.base(this, "onTick", a);
    if (this.sizeAnimation_) {
        a = (a - this.sizeAnimation_.startTime) / this.sizeAnimation_.length;
        1 < a && (a = 1);
        var b = this.sizeAnimation_.endW - this.sizeAnimation_.startW
          , d = this.sizeAnimation_.endH - this.sizeAnimation_.startH;
        this.width_ = this.sizeAnimation_.startW + b * a;
        this.height_ = this.sizeAnimation_.startH + d * a;
        1 === a ? this.sizeAnimation_ = null : this.library_.requestRedraw()
    }
}
;
c123.Box.prototype.draw = function() {
    if (!this.isHidden_) {
        void 0 !== this.fillColor && this.setFillStyle_(this.fillColor);
        void 0 !== this.lineColor && this.setLineColor_(this.lineColor);
        var a = this.x + this.width_ / 2
          , b = this.y + this.height_ / 2
          , d = -this.width_ / 2
          , f = -this.height_ / 2
          , g = this.width_ / 2
          , h = this.height_ / 2;
        this.ctx_.save();
        this.ctx_.translate(a, b);
        this.ctx_.rotate(this.library_.radians(this.rotation));
        this.ctx_.beginPath();
        this.ctx_.moveTo(d, f);
        this.ctx_.lineTo(g, f);
        this.ctx_.lineTo(g, h);
        this.ctx_.lineTo(d, h);
        this.ctx_.lineTo(d, f);
        this.ctx_.closePath();
        !1 !== this.solidFill && this.ctx_.fill();
        this.ctx_.stroke();
        this.ctx_.restore()
    }
}
;
c123.Box.prototype.move = function(a, b, d) {
    var f = this.library_.parseArguments_(arguments);
    a = f.numbers[0];
    b = f.numbers[1];
    d = f.numbers[2];
    if (0 === arguments.length) {
        var g = this.width_ / 2
          , h = this.height_ / 2
          , k = this.library_.width() - this.width_ / 2
          , l = this.library_.height() - this.height_ / 2;
        a = this.library_.random(g, k);
        b = this.library_.random(h, l)
    }
    f.directions && (g = f.numbers[0] || 0,
    h = f.directions[0],
    1 === arguments.length && (g = Math.max(this.width_, this.height_)),
    g = this.library_.deltaByDirection(h, g, this.rotation),
    a = this.x + g.dx + this.width_ / 2,
    b = this.y + g.dy + this.height_ / 2,
    d = f.numbers[1]);
    d ? (this.moveAnimation_ = {},
    this.moveAnimation_.endX = a - this.width_ / 2,
    this.moveAnimation_.endY = b - this.height_ / 2,
    this.moveAnimation_.startX = this.x,
    this.moveAnimation_.startY = this.y,
    this.moveAnimation_.startTime = this.library_.getLastFrameEndTime_(),
    this.moveAnimation_.length = d) : (this.x = a - this.width_ / 2,
    this.y = b - this.height_ / 2,
    this.moveAnimation_ = null);
    this.library_.requestRedraw();
    return this
}
;
c123.Box.prototype.size = function(a, b, d) {
    d ? (this.sizeAnimation_ = {},
    this.sizeAnimation_.endW = a,
    this.sizeAnimation_.endH = b,
    this.sizeAnimation_.startW = this.width_,
    this.sizeAnimation_.startH = this.height_,
    this.sizeAnimation_.startTime = this.library_.getLastFrameEndTime_(),
    this.sizeAnimation_.length = d) : void 0 !== a && void 0 !== b ? (this.width_ = a,
    this.height_ = b,
    this.sizeAnimation_ = null) : void 0 !== a && void 0 === b ? (b = this.width_ / this.height_,
    this.width_ = a,
    this.height_ = a / b) : (b = this.width_ / this.height_,
    this.width_ = a = random(20, 500),
    this.height_ = a / b,
    this.sizeAnimation_ = null);
    this.library_.requestRedraw();
    return this
}
;
c123.Box.prototype.getBoundingPoints_ = function() {
    return {
        left: this.x,
        top: this.y,
        width: this.width_,
        height: this.height_,
        centerX: this.x + this.width_ / 2,
        centerY: this.y + this.height_ / 2
    }
}
;
c123.Box.prototype.change = function(a, b, d) {
    var f = this.library_.parseArguments_(arguments);
    1 === f.strings.length ? (this.fillColor = f.strings[0],
    this.lineColor = f.strings[0]) : 2 === f.strings.length && (this.fillColor = f.strings[0],
    this.lineColor = f.strings[1]);
    1 === f.booleans.length && (this.solidFill = f.booleans[0]);
    this.library_.requestRedraw();
    return this
}
;
c123.Circle = function(a, b, d, f) {
    f = f || {};
    c123.base(this, a, f);
    this.x = b;
    this.y = d;
    this.radius = f.radius || 100;
    this.width_ = 2 * this.radius;
    this.height_ = 2 * this.radius;
    this.solidFill = !0;
    void 0 !== f.solidFill && !1 === f.solidFill && (this.solidFill = !1);
    this.fillColor = f.fillColor;
    this.lineColor = f.lineColor
}
;
c123.inherits(c123.Circle, c123.DrawingElement);
c123.Circle.prototype.typeName = "circle";
c123.Circle.prototype.onTick = function(a) {
    c123.base(this, "onTick", a);
    if (this.sizeAnimation_) {
        a = (a - this.sizeAnimation_.startTime) / this.sizeAnimation_.length;
        1 < a && (a = 1);
        var b = this.sizeAnimation_.endRadius - this.sizeAnimation_.startRadius;
        this.radius = this.sizeAnimation_.startRadius + b * a;
        this.width_ = 2 * this.radius;
        this.height_ = 2 * this.radius;
        1 === a ? this.sizeAnimation_ = null : this.library_.requestRedraw()
    }
}
;
c123.Circle.prototype.size = function(a, b) {
    b ? (this.sizeAnimation_ = {},
    this.sizeAnimation_.endRadius = a,
    this.sizeAnimation_.startRadius = this.radius,
    this.sizeAnimation_.startTime = this.library_.getLastFrameEndTime_(),
    this.sizeAnimation_.length = b) : (this.radius = void 0 !== a ? a : random(20, 500),
    this.width_ = 2 * this.radius,
    this.height_ = 2 * this.radius,
    this.sizeAnimation_ = null);
    this.library_.requestRedraw();
    return this
}
;
c123.Circle.prototype.draw = function() {
    this.isHidden_ || (void 0 !== this.fillColor && this.setFillStyle_(this.fillColor),
    void 0 !== this.lineColor && this.setLineColor_(this.lineColor),
    this.ctx_.beginPath(),
    this.ctx_.arc(this.x, this.y, Math.abs(this.radius), 0, 2 * Math.PI, !0),
    this.ctx_.closePath(),
    !1 !== this.solidFill && this.ctx_.fill(),
    this.ctx_.stroke())
}
;
c123.Circle.prototype.getBoundingPoints_ = function() {
    return {
        x: this.x,
        y: this.y,
        radius: this.radius
    }
}
;
c123.Circle.prototype.change = function(a, b, d) {
    var f = this.library_.parseArguments_(arguments);
    1 === f.strings.length ? (this.fillColor = f.strings[0],
    this.lineColor = f.strings[0]) : 2 === f.strings.length && (this.fillColor = f.strings[0],
    this.lineColor = f.strings[1]);
    1 === f.booleans.length && (this.solidFill = f.booleans[0]);
    this.library_.requestRedraw();
    return this
}
;
c123.Line = function(a, b, d, f, g, h) {
    h = h || {};
    c123.base(this, a, h);
    this.x = b;
    this.y = d;
    this.x2 = f;
    this.y2 = g;
    this.lineWidth_ = h.lineWidth || 10;
    this.library_.lineWidth_ !== this.library_.initialLineWidth_ && (this.lineWidth_ = this.library_.lineWidth_);
    this.width_ = Math.abs(this.x - this.x2);
    this.height_ = Math.abs(this.y - this.y2);
    this.length_ = Math.sqrt(this.width_ * this.width_ + this.height_ * this.height_);
    this.rotation = this.library_.getLineAngle(this.x, this.y, this.x2, this.y2);
    this.lineColor = h.lineColor
}
;
c123.inherits(c123.Line, c123.DrawingElement);
c123.Line.prototype.typeName = "line";
c123.Line.prototype.onTick = function(a) {
    c123.base(this, "onTick", a);
    var b, d, f, g, h;
    this.moveAnimation_ && (b = a - this.moveAnimation_.startTime,
    b /= this.moveAnimation_.length,
    1 < b && (b = 1),
    d = this.moveAnimation_.endX - this.moveAnimation_.startX,
    f = this.moveAnimation_.endY - this.moveAnimation_.startY,
    g = this.moveAnimation_.endX2 - this.moveAnimation_.startX2,
    h = this.moveAnimation_.endY2 - this.moveAnimation_.startY2,
    this.x = this.moveAnimation_.startX + d * b,
    this.y = this.moveAnimation_.startY + f * b,
    this.x2 = this.moveAnimation_.startX2 + g * b,
    this.y2 = this.moveAnimation_.startY2 + h * b,
    1 === b ? (this.moveAnimation_ = null,
    this.width_ = Math.abs(this.x - this.x2),
    this.height_ = Math.abs(this.y - this.y2)) : this.library_.requestRedraw());
    this.width_ = Math.abs(this.x - this.x2);
    this.height_ = Math.abs(this.y - this.y2);
    this.length_ = Math.sqrt(this.width_ * this.width_ + this.height_ * this.height_);
    this.sizeAnimation_ && (b = a - this.sizeAnimation_.startTime,
    b /= this.sizeAnimation_.length,
    1 < b && (b = 1),
    a = this.sizeAnimation_.endLength - this.sizeAnimation_.startLength,
    this.length_ = this.sizeAnimation_.startLength + a * b,
    1 === b ? this.sizeAnimation_ = null : this.library_.requestRedraw());
    a = Math.cos(this.library_.radians(this.rotation - 90));
    b = Math.sin(this.library_.radians(this.rotation - 90));
    this.x2 = this.x + a * this.length_;
    this.y2 = this.y + b * this.length_
}
;
c123.Line.prototype.draw = function() {
    if (!this.isHidden_) {
        void 0 !== this.lineColor && this.setLineColor_(this.lineColor);
        var a = this.ctx_.lineWidth;
        this.ctx_.beginPath();
        this.ctx_.lineWidth = this.lineWidth_;
        this.ctx_.moveTo(this.x, this.y);
        0 < this.library_.lineWidth_ ? this.ctx_.lineTo(this.x2, this.y2) : this.ctx_.moveTo(this.x2, this.y2);
        this.ctx_.closePath();
        this.ctx_.stroke();
        this.ctx_.lineWidth = a;
        return this
    }
}
;
c123.Line.prototype.move = function(a, b, d, f, g) {
    var h = this.library_.parseArguments_(arguments);
    a = h.numbers[0];
    b = h.numbers[1];
    4 <= h.numbers.length && (d = h.numbers[2],
    f = h.numbers[3],
    this.width_ = Math.abs(a - d),
    this.height_ = Math.abs(b - f),
    this.length_ = Math.sqrt(this.width_ * this.width_ + this.height_ * this.height_));
    0 === arguments.length && (a = this.library_.random(this.library_.width()),
    b = this.library_.random(this.library_.height()));
    if (h.directions) {
        var k = h.numbers[0] || 0
          , l = h.directions[0];
        1 === arguments.length && (k = Math.max(this.width_, this.height_));
        k = this.library_.deltaByDirection(l, k, this.rotation);
        a = this.x + k.dx;
        b = this.y + k.dy;
        g = h.numbers[1]
    } else
        h.numbers.length % 2 && (g = h.numbers.pop());
    h = Math.cos(this.library_.radians(this.rotation - 90));
    k = Math.sin(this.library_.radians(this.rotation - 90));
    d = a + h * this.length_;
    f = b + k * this.length_;
    g ? (this.moveAnimation_ = {},
    this.moveAnimation_.endX = a,
    this.moveAnimation_.endY = b,
    this.moveAnimation_.startX = this.x,
    this.moveAnimation_.startY = this.y,
    this.moveAnimation_.endX2 = d,
    this.moveAnimation_.endY2 = f,
    this.moveAnimation_.startX2 = this.x2,
    this.moveAnimation_.startY2 = this.y2,
    this.moveAnimation_.startTime = this.library_.getLastFrameEndTime_(),
    this.moveAnimation_.length = g) : (this.x = a,
    this.y = b,
    this.x2 = d,
    this.y2 = f,
    this.moveAnimation_ = null);
    this.library_.requestRedraw();
    return this
}
;
c123.Line.prototype.getBoundingPoints_ = function() {
    return {
        x: this.x,
        y: this.y,
        x2: this.x2,
        y2: this.y2,
        width: this.width_,
        height: this.height_
    }
}
;
c123.Line.prototype.size = function(a, b) {
    if (b)
        this.sizeAnimation_ = {},
        this.sizeAnimation_.endLength = a,
        this.sizeAnimation_.startLength = this.length_,
        this.sizeAnimation_.startTime = this.library_.getLastFrameEndTime_(),
        this.sizeAnimation_.length = b;
    else {
        this.length_ = void 0 !== a ? a : random(20, 500);
        this.sizeAnimation_ = null;
        var d = Math.cos(this.library_.radians(this.rotation - 90))
          , f = Math.sin(this.library_.radians(this.rotation - 90));
        this.x2 = this.x + d * this.length_;
        this.y2 = this.y + f * this.length_
    }
    this.library_.requestRedraw();
    return this
}
;
c123.Line.prototype.change = function(a) {
    this.lineColor = a;
    this.library_.requestRedraw();
    return this
}
;
c123.Stamp = function(a, b, d) {
    d = d || {};
    c123.base(this, a, d);
    this.name = b;
    this.cleanName_ = codepops.cleanAssetName(b);
    c123.strings.stamps && c123.strings.stamps[this.cleanName_] && (this.cleanName_ = c123.strings.stamps[this.cleanName_]);
    if (c123.stamps && c123.stamps[this.cleanName_]) {
        a = c123.stamps[this.cleanName_];
        for (var f in a)
            f in d || (d[f] = a[f])
    }
    if (c123.stampList && c123.stampList[this.cleanName_]) {
        f = c123.stampList[this.cleanName_];
        for (var g in f)
            g in d || (d[g] = f[g])
    }
    this.width_ = null;
    null !== d.width && void 0 !== d.width && (this.width_ = d.width);
    this.height_ = null;
    null !== d.height && void 0 !== d.height && (this.height_ = d.height);
    this.originalHeight_ = this.height_;
    this.originalWidth_ = this.width_;
    this.nativeHeight_ = this.nativeFrameWidth_ = 0;
    this.hitWidth_ = d.hitWidth || 0;
    this.hitHeight_ = d.hitHeight || 0;
    this.nativeHeight_ = this.nativeFrameWidth_ = 0;
    c123.stampList && c123.stampList[this.cleanName_] && (this.nativeFrameWidth_ = c123.stampList[this.cleanName_].width,
    this.nativeHeight_ = c123.stampList[this.cleanName_].height,
    this.hitWidth_ || (this.hitWidth_ = c123.stampList[this.cleanName_].width),
    this.hitHeight_ || (this.hitHeight_ = c123.stampList[this.cleanName_].height));
    this.originalHitHeight_ = this.hitHeight_;
    this.originalHitWidth_ = this.hitWidth_;
    this.background_ = d.background;
    this.foreground_ = d.foreground;
    this.flipped_ = !1;
    this.frameCount_ = 1;
    this.currentFrameNumber_ = 0;
    this.loopsRemaining_ = d.loops || 1;
    g = c123.bind(this.onImageComplete_, this);
    d = c123.bind(this.onImageError_, this);
    this.library_.loadStampImage_(this.cleanName_, g, d)
}
;
c123.inherits(c123.Stamp, c123.DrawingElement);
c123.Stamp.prototype.typeName = "sticker";
c123.Stamp.prototype.getHitHeight = function() {
    return 0 >= this.nativeFrameWidth_ ? 0 : this.hitHeight_ = this.height_ / this.nativeHeight_ * this.originalHitHeight_
}
;
c123.Stamp.prototype.getHitWidth = function() {
    return 0 >= this.nativeFrameWidth_ ? 0 : this.hitWidth_ = this.width_ / this.nativeFrameWidth_ * this.originalHitWidth_
}
;
c123.Stamp.prototype.onImageComplete_ = function(a) {
    this.img_ = a;
    this.nativeFrameWidth_ = a.width;
    this.nativeHeight_ = a.height;
    this.frameCount_ = 1;
    this.currentFrameNumber_ = 0;
    this.loopsRemaining_ || (this.loopsRemaining_ = 1);
    a.width > a.height && 0 === a.width % a.height && (this.width_ = this.width_ || a.height,
    this.height_ = this.height_ || a.height,
    this.hitWidth_ = this.hitWidth_ || this.width_,
    this.hitHeight_ = this.hitHeight_ || this.height_,
    this.frameCount_ = a.width / a.height,
    this.currentFrameNumber_ = -1,
    this.nativeFrameWidth_ = a.height);
    if (null === this.width_ || void 0 === this.width_)
        this.width_ = a.width;
    if (null === this.height_ || void 0 === this.height_)
        this.height_ = a.height;
    this.hitWidth_ = this.hitWidth_ || this.width_;
    this.hitHeight_ = this.hitHeight_ || this.height_;
    this.originalHeight_ = this.height_;
    this.originalWidth_ = this.width_;
    this.originalHitWidth_ = this.originalHitWidth_ || this.nativeFrameWidth_;
    this.originalHitHeight_ = this.originalHitHeight_ || this.nativeHeight_;
    this.z === this.library_.getLargestZ() ? this.draw() : this.library_.requestRedraw()
}
;
c123.Stamp.prototype.onImageError_ = function(a) {
    this.onImageComplete_(document.getElementById("stamp-not-found"))
}
;
c123.Stamp.prototype.draw = function() {
    if (!this.isHidden_ && this.img_) {
        var a = -this.width_ / 2
          , b = -this.height_ / 2
          , d = 1;
        this.flipped_ && (d = -1);
        1 < this.frameCount_ && 0 < this.loopsRemaining_ && (this.currentFrameNumber_++,
        this.currentFrameNumber_ %= this.frameCount_);
        var f = this.currentFrameNumber_ * this.nativeFrameWidth_;
        this.ctx_.save();
        this.ctx_.translate(this.x, this.y);
        this.ctx_.scale(d, 1);
        this.ctx_.rotate(this.library_.radians(this.rotation * d));
        this.ctx_.drawImage(this.img_, f, 0, this.nativeFrameWidth_, this.nativeHeight_, a, b, this.width_, this.height_);
        this.ctx_.restore();
        1 < this.frameCount_ && 0 < this.loopsRemaining_ ? (this.currentFrameNumber_ === this.frameCount_ - 1 && this.loopsRemaining_--,
        this.library_.requestRedraw()) : this.onAnimationComplete_ && (this.onAnimationComplete_(),
        this.onAnimationComplete_ = null)
    }
}
;
c123.Stamp.prototype.flip = function() {
    this.flipped_ = !this.flipped_;
    this.library_.requestRedraw();
    return this
}
;
c123.Stamp.prototype.change = function(a) {
    this.name = a;
    this.cleanName_ = codepops.cleanAssetName(a);
    a = c123.bind(this.onImageComplete_, this);
    var b = c123.bind(this.onImageError_, this);
    this.library_.loadStampImage_(this.cleanName_, a, b);
    return this
}
;
c123.Stamp.prototype.explode = function(a, b, d) {
    if (!this.isExploding_) {
        var f = d || 2.5;
        this.rotate(0);
        var g = this.library_.parseArguments_(arguments);
        this.onExplodeComplete_ = g.functions[0];
        this.isExploding_ = !0;
        this.onAnimationComplete_ = c123.bind(function() {
            this.hide();
            this.width_ /= f;
            this.height_ /= f;
            this.onAnimationComplete_ = null;
            this.change(this.preExplosionName_);
            this.loopsRemaining_ = this.preExplosionLoopsRemaining_;
            this.isExploding_ = !1;
            if (this.onExplodeComplete_)
                this.onExplodeComplete_();
            this.onExplodeComplete_ = null
        }, this);
        this.preExplosionName_ = this.cleanName_;
        this.preExplosionLoopsRemaining_ = this.loopsRemaining_;
        this.width_ *= f;
        this.height_ *= f;
        this.change(g.strings[0] || "nuke");
        this.loopsRemaining_ = 1
    }
}
;
c123.Stamp.prototype.pop = function(a) {
    this.explode("pop", a)
}
;
c123.Stamp.prototype.pow = function(a) {
    this.explode("pow", a)
}
;
c123.Stamp.prototype.splash = function(a) {
    this.explode("splash", a)
}
;
c123.Stamp.prototype.burn = function(a) {
    this.explode("fire", a, 1)
}
;
c123.Stamp.prototype.sing = function(a, b) {
    if (c123.sounds[this.cleanName_])
        this.library_.sound(this.cleanName_, a, b);
    else {
        var d = "c3 d3 e3 f3 g3 a3 b3 c4".split(" ")[this.library_.random(0, 7)];
        this.library_.sound(d, a, b)
    }
}
;
c123.Stamp.prototype.onTick = function(a) {
    c123.base(this, "onTick", a);
    if (this.sizeAnimation_) {
        a = (a - this.sizeAnimation_.startTime) / this.sizeAnimation_.length;
        1 < a && (a = 1);
        var b = this.sizeAnimation_.endW - this.sizeAnimation_.startW
          , d = this.sizeAnimation_.endH - this.sizeAnimation_.startH;
        this.width_ = this.sizeAnimation_.startW + b * a;
        this.height_ = this.sizeAnimation_.startH + d * a;
        1 === a ? this.sizeAnimation_ = null : this.library_.requestRedraw()
    }
}
;
c123.Stamp.prototype.size = function(a, b) {
    if (b)
        this.sizeAnimation_ = {},
        this.sizeAnimation_.endW = a,
        this.sizeAnimation_.endH = a,
        this.sizeAnimation_.startW = this.width_,
        this.sizeAnimation_.startH = this.height_,
        this.sizeAnimation_.startTime = this.library_.getLastFrameEndTime_(),
        this.sizeAnimation_.length = b;
    else {
        if (void 0 !== a)
            this.height_ = this.width_ = a;
        else {
            var d = random(20, 300);
            rescaleFactor = d / this.width_;
            this.height_ = this.width_ = d
        }
        this.sizeAnimation_ = null
    }
    this.library_.requestRedraw();
    return this
}
;
c123.Stamp.prototype.getBoundingPoints_ = function() {
    return {
        left: this.x - this.getHitWidth() / 2,
        top: this.y - this.getHitHeight() / 2,
        width: this.getHitWidth(),
        height: this.getHitHeight(),
        centerX: this.x,
        centerY: this.y
    }
}
;
Object.defineProperty(c123.Stamp.prototype, "flipped", {
    get: function() {
        return this.flipped_
    }
});
c123.Text = function(a, b) {
    c123.base(this, a, b);
    this.displayString_ = "";
    void 0 !== typeof b.displayString && (this.displayString_ = b.displayString + "");
    this.fontFace_ = b.fontFace || "Roboto";
    this.fontSize_ = b.fontSize || 40;
    this.fillStyle_ = b.fillStyle || "black";
    this.textAlign_ = b.textAlign || LEFT;
    this.haveEverCalculatedDimensions_ = this.recalculateDimensions_ = !1
}
;
c123.inherits(c123.Text, c123.DrawingElement);
c123.Text.prototype.typeName = "text";
c123.Text.prototype.change = function(a) {
    this.displayString_ = a;
    this.library_.requestRedraw();
    return this
}
;
c123.Text.prototype.draw = function() {
    this.isHidden_ || (this.library_.stateLog.lastText = this.displayString_,
    this.width_ && this.height_ && !this.recalculateDimensions_ || this.calculateTextDimensions(),
    this.ctx_.save(),
    this.ctx_.font = this.fontSize_ + "px " + this.fontFace_,
    this.ctx_.fillStyle = this.fillStyle_,
    this.ctx_.textAlign = this.textAlign_,
    this.ctx_.translate(this.x, this.y),
    !1 === this.library_.fontIsReady(this.fontFace_) || -1 < this.fontFace_.indexOf("Impact") && !this.library_.impactHasLoaded_ ? this.ctx_.globalAlpha = 0 : (this.ctx_.globalAlpha = 1,
    this.recalculateDimensions_ = !0),
    this.ctx_.rotate(this.library_.radians(this.rotation)),
    this.ctx_.fillText("" + this.displayString_, 0, 0),
    this.ctx_.restore())
}
;
c123.Text.prototype.onTick = function(a) {
    c123.base(this, "onTick", a);
    if (this.sizeAnimation_) {
        a = (a - this.sizeAnimation_.startTime) / this.sizeAnimation_.length;
        1 < a && (a = 1);
        var b = this.sizeAnimation_.endSize - this.sizeAnimation_.startSize;
        this.fontSize_ = this.sizeAnimation_.startSize + b * a;
        1 === a ? this.sizeAnimation_ = null : (this.recalculateDimensions_ = !0,
        this.library_.requestRedraw())
    }
}
;
c123.Text.prototype.size = function(a, b) {
    b ? (this.sizeAnimation_ = {},
    this.sizeAnimation_.endSize = a,
    this.sizeAnimation_.startSize = this.fontSize_,
    this.sizeAnimation_.startTime = this.library_.getLastFrameEndTime_(),
    this.sizeAnimation_.length = b) : (this.fontSize_ = void 0 !== a ? a : random(20, 300),
    this.sizeAnimation_ = null);
    this.recalculateDimensions_ = !0;
    this.library_.requestRedraw();
    return this
}
;
Object.defineProperty(c123.Text.prototype, "fontSize", {
    get: function() {
        return this.fontSize_
    }
});
c123.Text.prototype.getBoundingPoints_ = function() {
    var a = this.x
      , b = this.x + this.getHitWidth() / 2
      , d = this.y - this.getHitHeight() / 3;
    "right" === this.textAlign_ ? (a = this.x - this.getHitWidth(),
    b = this.x - this.getHitWidth() / 2) : "center" === this.textAlign_ && (a = this.x - this.getHitWidth() / 2,
    b = this.x);
    return {
        left: a,
        top: this.y - this.getHitHeight(),
        width: this.getHitWidth(),
        height: this.getHitHeight(),
        centerX: b,
        centerY: d
    }
}
;
c123.Text.prototype.calculateTextDimensions = function() {
    this.ctx_.save();
    this.ctx_.font = this.fontSize_ + "px " + this.fontFace_;
    this.ctx_.textBaseline = "bottom";
    var a = this.ctx_.measureText(this.displayString_).width;
    this.width_ = this.hitWidth_ = Math.round(a);
    a = this.ctx_.measureText("M").width;
    this.height_ = this.hitHeight_ = Math.floor(1.3 * a);
    this.haveEverCalculatedDimensions_ || (this.originalWidth_ = this.originalHitWidth_ = this.width_,
    this.originalHeight_ = this.originalHitHeight_ = this.height_,
    this.haveEverCalculatedDimensions_ = !0);
    this.ctx_.restore();
    this.recalculateDimensions_ = !1;
    this.library_.requestRedraw()
}
;
var codepops = codepops || {};
c123.Library = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.onError_ = a.onError || null;
    this.onAssetLoadError_ = a.onAssetLoadError || null;
    this.soundManager_ = a.soundManager || this.window_.soundManager;
    this.url_ = a.url || "" + this.window_.location;
    this.initialLineWidth_ = c123.INITIAL_LINE_WIDTH;
    this.initialTextAlign_ = LEFT;
    this.lineWidth_ = this.initialLineWidth_;
    this.textAlign_ = this.initialTextAlign_;
    this.loadedSounds_ = {};
    this.initialFillStyle_ = this.initialStrokeStyle_ = "#000";
    this.initialFontFace_ = "Roboto";
    this.initialFontSize_ = 40;
    this.canvasScale_ = a.canvasScale || 1;
    this.canvas_ = a.canvas;
    this.canvas_ || (this.canvas_ = this.document_.createElement(this.window_.navigator.isCocoonJS ? "screencanvas" : "canvas", {
        antialias: !0
    }),
    this.canvas_.width = 768,
    this.canvas_.height = 1024,
    this.canvas_.style.position = "absolute",
    this.canvas_.style.top = "0px",
    this.canvas_.style.left = "0px",
    this.canvas_.style.zIndex = "-1",
    this.canvas_.style.width = this.canvas_.width * this.canvasScale_ + "px",
    this.canvas_.style.height = this.canvas_.height * this.canvasScale_ + "px",
    this.window_.navigator.isCocoonJS && (this.canvas_.style.cssText = "idtkscale:ScaleAspectFit;"),
    this.document_.body.appendChild(this.canvas_));
    this.ctx_ = this.canvas_.getContext("2d");
    this.width_ = this.canvas_.width;
    this.height_ = this.canvas_.height;
    this.largestZ_ = 0;
    this.stampsByName_ = {};
    this.picturesByName_ = {};
    this.needsRedraw_ = !1;
    this.fillStyleOnReset_ = "white";
    this.initializeStamps_();
    this.cursor_ = {};
    this.cursor_.x = this.width_ / 2;
    this.cursor_.y = this.height_ / 2;
    this.stateLog = {};
    this.resetLibrary();
    this.isIPad_ = null !== navigator.userAgent.match(/iPad/i);
    var b = c123.bind(this.onTouchStart_, this)
      , d = c123.bind(this.onTouchMove_, this)
      , f = c123.bind(this.onTouchEnd_, this);
    this.canvas_.addEventListener("touchstart", b);
    this.canvas_.addEventListener("touchmove", d);
    this.canvas_.addEventListener("touchend", f);
    b = c123.bind(this.onMouseDown_, this);
    d = c123.bind(this.onMouseUp_, this);
    f = c123.bind(this.onMouseMove_, this);
    this.canvas_.addEventListener("mousedown", b);
    this.canvas_.addEventListener("mousemove", f);
    this.canvas_.addEventListener("mouseup", d);
    this.loadStampImage_("nuke");
    this.loadStampImage_("pop");
    this.loadStampImage_("splash");
    this.loadStampImage_("fire");
    this.loadStampImage_("pow");
    this.preloadSounds_();
    this.collabPath_ = a.collabPath;
    this.collabId_ = ("" + Math.random()).replace("0.", "");
    this.setCollabPath(this.collabPath_);
    this.customAssetHash_ = a.customAssetHash || void 0;
    a = c123.googleFontsNames || [];
    if (c123.isFeatureFlagOn("googleFonts"))
        for (b = 0; b < a.length; b++)
            d = a[b],
            f = this.getCleanName_(d),
            c123.googleFonts[f] = '"' + d + '"';
    this.googleFontLoadStatus_ = {};
    this.numberOfStampLoadErrors = 0;
    this.googleFontLoadIntervalIds_ = {};
    a = c123.bind(this.onTick_, this);
    this.frameRate_ = 20;
    this.frameLength_ = 1E3 / this.frameRate_;
    this.window_.setInterval(a, this.frameLength_);
    this.loadingImpactFont_ = this.impactHasLoaded_ = this.isPaused_ = !1
}
;
c123.Library.prototype.setCollabPath = function(a) {
    var b = null;
    (b = c123.canAccessTopFrame() ? top.firebase : window.firebase) && a && (this.collabRef_ && (this.collabRef_.off("child_added", this.onCollab_),
    this.collabRef_.remove()),
    this.collabPath_ = a,
    this.collabRef_ = b.database().ref(this.collabPath_),
    this.onCollab_ = function(a) {
        a = a.val();
        if (window && window.get && a.collabId !== this.collabId_ && window.get && "function" === typeof window.get)
            try {
                window.get(a.args[0], a.args[1], a.args[2], a.args[3])
            } catch (b) {
                if (this.onError_)
                    this.onError_(b)
            }
    }
    .bind(this),
    this.collabRef_.on("child_added", this.onCollab_),
    this.collabRef_.onDisconnect().remove())
}
;
c123.Library.prototype.setOnErrorHandler = function(a) {
    this.onError_ = a
}
;
c123.Library.prototype.setOnSuccessHandler = function(a) {
    this.onSuccess_ = a
}
;
c123.Library.prototype.setOnAssetLoadErrorHandler = function(a) {
    this.onAssetLoadError_ = a
}
;
c123.Library.prototype.onTick_ = function() {
    if (!this.isPaused_) {
        if (window.loop && "function" === typeof window.loop)
            try {
                window.loop()
            } catch (a) {
                if (this.onError_)
                    this.onError_(a)
            }
        this.mouseIsDown_ && window.touching && "function" === typeof touching && (x = this.lastCx_,
        y = this.lastCy_,
        window.touching());
        this.needsRedraw_ && this.renderCommands_()
    }
}
;
c123.Library.prototype.renderCommands_ = function() {
    var a = new Date;
    this.needsRedraw_ = !1;
    this.resetDrawingState_();
    for (var b = 0; b < this.sceneStack_.length; b++)
        this.sceneStack_[b].onTick(a),
        this.sceneStack_[b].draw()
}
;
c123.Library.prototype.bringToFront = function(a) {
    var b = this.sceneStack_.indexOf(a);
    if (-1 === b)
        return !1;
    for (this.sceneStack_.splice(b, 1); b < this.sceneStack_.length; b++)
        this.sceneStack_[b].z = b + 1;
    this.sceneStack_.push(a);
    a.z = this.sceneStack_.length;
    this.requestRedraw();
    return !0
}
;
c123.Library.prototype.sendToBack = function(a) {
    var b = this.sceneStack_.indexOf(a);
    if (-1 === b)
        return !1;
    this.sceneStack_.splice(b, 1);
    this.sceneStack_.splice(1, 0, a);
    for (a = 1; a < this.sceneStack_.length; a++)
        this.sceneStack_[a].z = a + 1;
    this.requestRedraw();
    return !0
}
;
c123.Library.prototype.initializeGlobals_ = function() {
    for (var a in c123.Library.prototype)
        "function" === typeof this[a] && "_" !== a.slice(-1) && "eval" !== a && (this.window_[a] = c123.bind(this[a], this))
}
;
c123.Library.prototype.loadFillPicture_ = function(a, b) {
    var d = this.document_.createElement("img");
    d.crossOrigin = "anonymous";
    d.onload = c123.bind(function() {
        this.requestRedraw()
    }, this);
    d.src = b;
    return this.picturesByName_[a] = d
}
;
c123.Library.prototype.loadGoogleFont_ = function(a, b) {
    var d;
    d = "//fonts.googleapis.com/css?family=" + b.replace(/"/gi, "").replace(/\s/gi, "+");
    if ("LOADED" !== this.googleFontLoadStatus_[a]) {
        this.googleFontLoadStatus_[a] = "LOADING";
        var f = this.document_.createElement("link");
        f.href = d;
        f.rel = "stylesheet";
        f.type = "text/css";
        this.googleFontLoadIntervalIds_[a] || (this.googleFontLoadIntervalIds_[a] = this.window_.setInterval(function(a) {
            if ("LOADED" === this.googleFontLoadStatus_[a] || "ERROR" === this.googleFontLoadStatus_[a])
                this.window_.clearInterval(this.googleFontLoadIntervalIds_[a]),
                this.requestRedraw(),
                this.window_.setTimeout(this.requestRedraw.bind(this), 500)
        }
        .bind(this), 100, a));
        f.onload = function() {
            this.googleFontLoadStatus_[a] = "LOADED";
            this.requestRedraw()
        }
        .bind(this);
        f.onerror = function() {
            this.googleFontLoadStatus_[a] = "ERROR";
            this.requestRedraw()
        }
        .bind(this);
        this.document_.head.appendChild(f)
    }
}
;
c123.Library.prototype.loadImpactFont_ = function() {
    this.loadingImpactFont_ = !0;
    (new FontFace("impact","url(../css/impact/86bc8dce-e98d-41ba-9796-a466ad6d7590.woff)")).load().then(function(a) {
        this.document_.fonts.add(a);
        this.impactHasLoaded_ = !0;
        this.requestRedraw()
    }
    .bind(this))
}
;
c123.Library.prototype.fontIsReady = function(a) {
    a = codepops.cleanAssetName(a);
    return c123.googleFonts[a] && "roboto" !== a && "robotoslab" !== a && "sourcecodepro" !== a ? "LOADED" === this.googleFontLoadStatus_[a] || "ERROR" === this.googleFontLoadStatus_[a] : !0
}
;
c123.Library.prototype.initializeStamps_ = function() {
    var a = ("" + location.href).toLowerCase();
    if (-1 !== a.indexOf("/tests/") || -1 !== a.indexOf("useoldstamps")) {
        a = ["apple", "pencil", "rainbow", ["cherry", "cherries"], ["b"], "cloud", ["hamburger", "burger"], "girl", "boy", "girl2", "popsicle", ["phone", "cellphone"], ["icecream", "icecreamcone"], ["cola", "soda"], ["notebook", "diary"], "cookie", ["watermelon", "melon"], ["drink", "glass"], "tree", "flower", ["bow", "bowtie", "tie"], ["bandaid", "bandage"], ["heart", "love"], ["ball", "soccer"], "strawberry", "dogbowl", ["mug", "cup", "coffee"], ["paintbrush", "brush"], "carrot", ["note", "musicalnote"], ["brush2", "paintbrush2"], ["hat", "partyhat"], ["disk", "floppy"], "star", "bone", "lime", "pen", ["letter", "envelope"], ["shirt", "t-shirt"], ["tv", "television"], "bowl", "book", "shoe", "cupcake", "can", ["usbdrive", "jumpdrive", "drive"], "pear", "beachball", "popsicle2", "orange", ["moon2", "asteroid"], ["nova", "explosion"], ["email", "share"]];
        this.stampsByName_ = {};
        for (var b = document.getElementById("icons-cute-large"), d = row = col = 0; d < a.length; d++) {
            var f = a[d]
              , g = f;
            "object" === typeof f && (g = f[0]);
            var h = this.document_.createElement("canvas");
            h.width = 120;
            h.height = 120;
            h.id = "stamp-" + g;
            h.style.display = "none";
            h.getContext("2d").drawImage(b, 120 * col, 120 * row, 120, 120, 0, 0, 120, 120);
            c123.stampList[g].width = 120;
            c123.stampList[g].height = 120;
            this.stampsByName_[g] = h;
            if ("object" === typeof f)
                for (g = 0; g < f.length; g++)
                    this.stampsByName_[f[g]] = h;
            col += 1;
            5 === col && (col = 0,
            row += 1)
        }
    }
}
;
c123.Library.prototype.onClick_ = function(a) {}
;
c123.Library.prototype.getOffsetX_ = function(a) {
    var b = void 0 === a.offsetX ? a.layerX : a.offsetX;
    isNaN(b) && void 0 !== a.clientX && (b = this.canvas_.getBoundingClientRect(),
    b = a.clientX - b.left);
    return b
}
;
c123.Library.prototype.getOffsetY_ = function(a) {
    var b = void 0 === a.offsetY ? a.layerY : a.offsetY;
    isNaN(b) && void 0 !== a.clientY && (b = this.canvas_.getBoundingClientRect(),
    b = a.clientY - b.top);
    return b
}
;
c123.Library.prototype.onMouseDown_ = function(a) {
    this.mouseIsDown_ = !0;
    var b = this.getOffsetX_(a) / this.canvasScale_;
    a = this.getOffsetY_(a) / this.canvasScale_;
    this.lastMouseDownTime_ = new Date;
    this.mouseDownX_ = b;
    this.mouseDownY_ = a;
    this.lastCx_ = b;
    this.lastCy_ = a;
    for (var d = this.sceneStack_.length - 1; 0 <= d; d--) {
        var f = this.sceneStack_[d];
        if (f.touch && f.hits(b, a)) {
            x = b;
            y = a;
            f.touch(f);
            return
        }
    }
    window.touch && "function" === typeof touch && (x = b,
    y = a,
    window.touch())
}
;
c123.Library.prototype.onMouseUp_ = function(a) {
    this.isDragging_ = this.mouseIsDown_ = !1;
    var b = this.getOffsetX_(a) / this.canvasScale_;
    a = this.getOffsetY_(a) / this.canvasScale_;
    var d = new Date - (this.lastMouseDownTime_ || 0);
    window.untouch && "function" === typeof untouch && (x = b,
    y = a,
    window.untouch());
    if (!(400 < d)) {
        for (d = this.sceneStack_.length - 1; 0 <= d; d--) {
            var f = this.sceneStack_[d];
            if (f && f.tap && f.hits(b, a)) {
                f.hits(b, a);
                x = b;
                y = a;
                try {
                    c123.bind(f.tap, f)(f)
                } catch (g) {
                    if (this.onError_)
                        this.onError_(g)
                }
            }
        }
        if (tap && "function" === typeof tap) {
            x = b;
            y = a;
            try {
                tap()
            } catch (h) {
                if (this.onError_)
                    this.onError_(h)
            }
        }
    }
}
;
c123.Library.prototype.onMouseMove_ = function(a) {
    a.preventDefault && a.preventDefault();
    var b = this.getOffsetX_(a) / this.canvasScale_
      , d = this.getOffsetY_(a) / this.canvasScale_;
    this.lastCx_ = b;
    this.lastCy_ = d;
    !this.mouseIsDown_ || b === this.mouseDownX_ && d === this.mouseDownY_ || (this.isDragging_ = !0);
    if (this.isDragging_)
        this.onDrag_(a)
}
;
c123.Library.prototype.onDrag_ = function(a) {
    var b = this.getOffsetX_(a) / this.canvasScale_
      , d = this.getOffsetY_(a) / this.canvasScale_
      , f = 0
      , g = 0
      , h = 0;
    this.lastOffsetX && (g = this.getOffsetX_(a) - this.lastOffsetX,
    h = this.getOffsetY_(a) - this.lastOffsetY,
    f = 180 * Math.atan2(h, g) / Math.PI + 90);
    this.lastOffsetX = this.getOffsetX_(a);
    this.lastOffsetY = this.getOffsetY_(a);
    if (drag && "function" === typeof drag) {
        x = b;
        y = d;
        try {
            drag({
                angle: f
            })
        } catch (k) {
            if (this.onError_)
                this.onError_(k)
        }
    }
}
;
c123.Library.prototype.onTouchStart_ = function(a) {
    a.preventDefault();
    for (var b = a.targetTouches.length - 1; 0 <= b; b--) {
        var d = {};
        d.offsetX = this.getOffsetX_(a.targetTouches[b]);
        d.offsetY = this.getOffsetY_(a.targetTouches[b]);
        this.lastOffsetX = d.offsetX;
        this.lastOffsetY = d.offsetY;
        this.onMouseDown_(d)
    }
}
;
c123.Library.prototype.onTouchEnd_ = function(a) {
    a.preventDefault();
    var b = {};
    b.offsetX = this.lastOffsetX;
    b.offsetY = this.lastOffsetY;
    if (0 === a.targetTouches.length)
        this.onMouseUp_(b)
}
;
c123.Library.prototype.onTouchMove_ = function(a) {
    a.preventDefault();
    var b = {};
    b.offsetX = this.getOffsetX_(a.targetTouches[0]);
    b.offsetY = this.getOffsetY_(a.targetTouches[0]);
    this.onMouseMove_(b)
}
;
c123.Library.prototype.getCleanName_ = function(a) {
    return (a || "").replace(/\s/gi, "").toLowerCase()
}
;
c123.Library.prototype.parseColor_ = function(a) {
    a = this.getCleanName_(a);
    return c123.colors && c123.colors[a] ? c123.colors[a] : c123.strings.colors && c123.strings.colors[a] ? c123.strings.colors[a] : !1
}
;
c123.Library.prototype.parsePicture_ = function(a) {
    a = this.getCleanName_(a);
    c123.strings.fills && c123.strings.fills[a] && (a = c123.strings.fills[a]);
    if (this.picturesByName_[a])
        return this.picturesByName_[a];
    var b;
    return c123.pictures && c123.pictures[a] ? (b = c123.pictures[a],
    this.loadFillPicture_(a, b)) : 4 < a.length && a.indexOf("jpg") === a.length - 3 ? (a = a.replace(/\.jpg/gi, ""),
    this.loadFillPicture_(a, "//codepops.com/customart/" + a + ".jpg")) : this.stampsByName_[a] ? this.stampsByName_[a] : this.loadFillPicture_(a, "https://static.bitsbox.com/fills/fillnotfound.png")
}
;
c123.Library.prototype.parseDirection_ = function(a) {
    a = a.toLowerCase().replace(/\s/gi, "");
    return "up" === a || "down" === a || "left" === a || "right" === a || "north" === a || "south" === a || "east" === a || "west" === a || "northeast" === a || "southeast" === a || "southwest" === a || "northwest" === a || "center" === a ? a : !1
}
;
c123.Library.prototype.parseFont_ = function(a) {
    a = this.getCleanName_(a);
    return c123.fontList[a] || c123.googleFonts[a] || !1
}
;
c123.Library.prototype.parseArguments_ = function(a, b) {
    console.log(a,b);
    for (var d = {
        numbers: [],
        colors: [],
        strings: [],
        functions: [],
        objects: [],
        booleans: [],
        pictures: []
    }, f = b || 0; f < a.length; f++) {
        var g = a[f]
          , h = typeof g;
        Array.isArray(g) ? (d.arrays = d.arrays || [],
        d.arrays.push(g)) : "number" === h ? d.numbers.push(g) : "string" === h ? (d.strings.push(g),
        this.parseDirection_(g) && (d.directions = d.directions || [],
        d.directions.push(this.parseDirection_(g))),
        this.parseFont_(g) && (d.fonts = d.fonts || [],
        d.fonts.push(this.parseFont_(g))),
        this.parsePicture_(g) && (d.pictures = d.pictures || [],
        d.pictures.push(this.parsePicture_(g))),
        (g = this.parseColor_(g)) && d.colors.push(g)) : (d[h + "s"] = d[h + "s"] || [],
        d[h + "s"].push(g))
    }
    return d
}
;
c123.Library.prototype.setLineWidth_ = function(a) {
    a = Math.min(a, c123.MAX_LINE_WIDTH);
    this.lineWidth_ = a = Math.max(a, c123.MIN_LINE_WIDTH);
    return this.ctx_.lineWidth = a
}
;
c123.Library.prototype.setLineColor_ = function(a) {
    return this.ctx_.strokeStyle = a
}
;
c123.Library.prototype.setFillStyle_ = function(a) {
    return this.lastFillStyle_ = this.ctx_.fillStyle = a
}
;
c123.Library.prototype.addCommandToStack_ = function(a, b) {
    if (!this.isRedrawingACommand_) {
        this.largestZ_++;
        var d = new c123.Command(this,a,b,this.largestZ_);
        this.sceneStack_.push(d);
        return d
    }
}
;
c123.Library.prototype.resetDrawingState_ = function() {
    this.setLineWidth_(this.initialLineWidth_);
    this.ctx_.strokeStyle = this.initialStrokeStyle_;
    this.ctx_.font = this.initialFontSize_ + "px " + this.initialFontFace_;
    this.setFillStyle_(this.initialFillStyle_);
    this.ctx_.textAlign = this.initialTextAlign_
}
;
c123.Library.prototype.getLastFrameEndTime_ = function() {
    return new Date((new Date).getTime() - 1E3 / this.frameRate_)
}
;
c123.Library.prototype.setCanvasScale = function(a) {
    this.canvasScale_ = a
}
;
c123.Library.prototype.resetLibrary = function() {
    this.initializeGlobals_();
    this.stateLog = {};
    this.sceneStack_ = [];
    window.tap = null;
    window.drag = null;
    window.loop = null;
    window.touch = null;
    window.lift = null;
    window.dragging = null;
    window.touching = null;
    window.always = null;
    window.longpress = null;
    window.untouch = null;
    window.doubletap = null;
    window.key = null;
    this.cursor_.x = this.width_ / 2;
    this.cursor_.y = this.height_ / 2;
    this.resetDrawingState_();
    this.reset("white");
    this.canvas_.style.zIndex += 1;
    this.canvas_.style.zIndex -= 1
}
;
c123.Library.prototype.line = function() {
    console.log(arguments);
    var a = this.parseArguments_(arguments)
      , b = {};
    a.colors.length && (this.setLineColor_(a.colors[0]),
    b.lineColor = a.colors[0]);
    if (a.numbers.length % 2) {
        var d = a.numbers.pop();
        this.setLineWidth_(d);
        b.lineWidth = d;
        if (0 === a.numbers.length)
            return this.addCommandToStack_("line", arguments)
    }
    var f, g, h, k;
    2 === a.numbers.length ? (f = this.cursor_.x,
    g = this.cursor_.y,
    h = a.numbers[0],
    k = a.numbers[1]) : 4 === a.numbers.length && (f = a.numbers[0],
    g = a.numbers[1],
    h = a.numbers[2],
    k = a.numbers[3]);
    this.largestZ_++;
    b.z = this.largestZ_;
    a = new c123.Line(this,f,g,h,k,b);
    this.cursor_.x = h;
    this.cursor_.y = k;
    this.sceneStack_.push(a);
    a.draw();
    return a
}
;
c123.Library.prototype.title = function(a) {
    this.document_.title = a
}
;
c123.Library.prototype.box = function(a, b, d, f) {
    console.log(arguments);
    var g = this.parseArguments_(arguments)
      , h = {};
    1 === g.colors.length ? (h.lineColor = g.colors[0],
    h.fillColor = g.colors[0]) : 2 === g.colors.length && (h.lineColor = g.colors[1],
    h.fillColor = g.colors[0]);
    void 0 !== g.booleans[0] && !1 === g.booleans[0] && (h.solidFill = !1);
    this.largestZ_++;
    h.z = this.largestZ_;
    g = new c123.Box(this,a,b,d,f,h);
    this.sceneStack_.push(g);
    g.draw();
    return g
}
;
c123.Library.prototype.circle = function(a, b, d) {
    console.log(arguments);
    var f = this.parseArguments_(arguments)
      , g = {};
    1 === f.colors.length ? (g.lineColor = f.colors[0],
    g.fillColor = f.colors[0]) : 2 === f.colors.length && (g.lineColor = f.colors[1],
    g.fillColor = f.colors[0]);
    g.radius = 100;
    d && !isNaN(d) ? g.radius = d : 2 < f.numbers.length && (g.radius = f.numbers[2]);
    void 0 !== f.booleans[0] && !1 === f.booleans[0] && (g.solidFill = !1);
    this.largestZ_++;
    g.z = this.largestZ_;
    f = new c123.Circle(this,a,b,g);
    this.sceneStack_.push(f);
    f.draw();
    return f
}
;
c123.Library.prototype.text = function(a, b, d) {
    console.log(arguments);
    var f = this.parseArguments_(arguments, 1)
      , g = this.initialFontFace_
      , h = this.initialFontSize_;
    f.fonts && (g = f.fonts[0]);
    var k, l;
    1 === f.numbers.length ? h = f.numbers[0] : 2 === f.numbers.length ? (k = f.numbers[0],
    l = f.numbers[1]) : 3 <= f.numbers.length && (k = f.numbers[0],
    l = f.numbers[1],
    h = f.numbers[2]);
    this.stateLog.lastFontFace = g;
    this.stateLog.lastFontSize = h;
    var z = this.ctx_.textAlign;
    if (f.directions) {
        var e = f.directions[0];
        if ("center" === e || "right" === e || "left" === e)
            z = e
    }
    e = {};
    e.fontFace = g;
    e.fontSize = h;
    e.textAlign = z;
    e.x = k;
    e.y = l;
    0 < f.colors.length && (e.fillStyle = f.colors[0]);
    e.displayString = a;
    this.largestZ_++;
    e.z = this.largestZ_;
    f = new c123.Text(this,e);
    this.sceneStack_.push(f);
    f.draw();
    return f
}
;
c123.Library.prototype.reset = function(a) {
    this.isRedrawingACommand_ || (this.largestZ_ = 0,
    this.sceneStack_ = []);
    var b = this.ctx_;
    b.clearRect(0, 0, this.width_, this.height_);
    var d = this.parseArguments_(arguments);
    if (3 === d.numbers.length)
        d = "rgb(" + Math.round(d.numbers[0]) + "," + Math.round(d.numbers[1]) + "," + Math.round(d.numbers[2]) + ")",
        b.fillStyle = d,
        b.fillRect(0, 0, this.width_, this.height_);
    else if (0 < d.colors.length)
        b.fillStyle = d.colors[0],
        b.fillRect(0, 0, this.width_, this.height_);
    else if (0 < d.pictures.length) {
        if (b.fillStyle = "white",
        b.fillRect(0, 0, this.width_, this.height_),
        d.pictures[0].complete || d.pictures[0].naturalWidth ? b.drawImage(d.pictures[0], 0, 0) : (b.fillStyle = "black",
        b.fillRect(0, 0, this.width_, this.height_)),
        d.pictures[0].src && -1 < d.pictures[0].src.indexOf("fillnotfound.png") && this.onAssetLoadError_)
            this.onAssetLoadError_(codepops.cleanAssetName(d.strings[0]), "fill")
    } else
        b.fillStyle = "white",
        b.fillRect(0, 0, this.width_, this.height_);
    b.fillStyle = this.lastFillStyle_;
    return this.addCommandToStack_("reset", arguments)
}
;
c123.Library.prototype.background = function(a, b, d) {
    this.stateLog.lastFill = a;
    void 0 !== b && (this.stateLog.lastFill += "," + b);
    void 0 !== d && (this.stateLog.lastFill += "," + d);
    this.sceneStack_[0] = new c123.Command(this,"reset",[a, b, d],0);
    this.renderCommands_()
}
;
c123.Library.prototype.color = function(a) {
    console.log(arguments);
    console.log(b)
    var b = this.ctx_
      , d = this.parseArguments_(arguments);
    if (0 < d.numbers.length) {
        var f;
        1 === d.numbers.length && (f = "rgb(" + Math.round(d.numbers[0]) + ",0,0)");
        2 === d.numbers.length && (f = "rgb(" + Math.round(d.numbers[0]) + "," + Math.round(d.numbers[1]) + ",0)");
        3 === d.numbers.length && (f = "rgb(" + Math.round(d.numbers[0]) + "," + Math.round(d.numbers[1]) + "," + Math.round(d.numbers[2]) + ")");
        b.strokeStyle = f;
        b.fillStyle = f;
        return this.addCommandToStack_("color", arguments)
    }
    if (a)
        b.strokeStyle = this.getCleanName_(a),
        b.fillStyle = this.getCleanName_(a);
    else {
        d = c123.colors;
        f = Object.keys(d);
        var g = this.random(0, f.length);
        f = f[g];
        b.strokeStyle = d[f];
        b.fillStyle = d[f];
        return this.addCommandToStack_("color", [f])
    }
    return this.addCommandToStack_("color", arguments)
}
;
c123.Library.prototype.delay = function(a, b) {
    if (2 >= arguments.length)
        this.window_.setTimeout(a, b);
    else {
        var d = Array.prototype.slice.call(arguments);
        this.window_.setTimeout.apply(this.window_, d)
    }
}
;
c123.Library.prototype.sticker = function(a, b, d, f, g) {
    console.log(arguments);
    var h = this.parseArguments_(arguments)
      , k = {}
      , l = h.numbers;
    if (0 === arguments.length) {
        var l = c123.stamps
          , z = Object.keys(c123.stampList)
          , e = this.random(0, z.length);
        a = z[e];
        for (e = l[a]; e && e.hasOwnProperty("hideInAssetsPanel"); )
            e = this.random(0, z.length),
            a = z[e],
            e = l[a]
    } else
        1 === l.length ? (k.width = l[0],
        k.height = l[0]) : 2 === l.length ? (k.x = l[0],
        k.y = l[1]) : 3 === l.length ? (k.x = l[0],
        k.y = l[1],
        k.width = l[2],
        k.height = l[2]) : 4 <= l.length && (k.x = l[0],
        k.y = l[1],
        k.width = l[2],
        k.height = l[2],
        k.rotation = l[3]);
    k.background = h.colors[0];
    k.foreground = h.colors[1];
    this.largestZ_++;
    k.z = this.largestZ_;
    this.stateLog.lastStamp = a;
    h = new c123.Stamp(this,a,k);
    this.sceneStack_.push(h);
    return h
}
;
c123.Library.prototype.getCanvas = function() {
    return this.canvas_
}
;
c123.Library.prototype.getContext = function() {
    return this.ctx_
}
;
c123.Library.prototype.getSoundManager = function() {
    return this.soundManager_
}
;
c123.Library.prototype.send = function() {
    if (this.collabRef_) {
        var a = {};
        a.args = arguments;
        a.collabId = this.collabId_;
        this.collabRef_.push(a)
    }
}
;
c123.Library.prototype.random = function(a, b) {
    console.log(arguments);
    var d = this.parseArguments_(arguments)
      , f = !1;
    if (0 === arguments.length)
        return f = Math.floor(10 * Math.random());
    2 < arguments.length && (f = arguments);
    2 >= arguments.length && d.numbers.length !== arguments.length && (f = arguments);
    d.arrays && 1 === d.arrays.length && 1 === arguments.length && (f = d.arrays[0]);
    if (f)
        return 0 === f.length ? null : f[Math.floor(Math.random() * f.length)];
    d = 1;
    f = a;
    "number" === typeof b ? (d = Math.min(a, b),
    f = Math.max(a, b)) : 0 > a && (d = Math.min(a, -1),
    f = Math.max(a, -1));
    f = Math.floor((f - d + 1) * Math.random());
    return d + f
}
;
c123.Library.prototype.offscreen = function(a, b) {
    console.log(arguments);
    var d = this.parseArguments_(arguments);
    return 1 === d.objects.length && void 0 !== d.objects[0].x && void 0 !== d.objects[0].y ? (a = d.objects[0].x,
    b = d.objects[0].y,
    this.offscreen_(a, b)) : d.arrays && 1 === d.arrays.length && Array.isArray(d.arrays[0]) ? this.offscreenArray_(d.arrays[0]) : this.offscreen_(a, b)
}
;
c123.Library.prototype.offscreen_ = function(a, b) {
    if (0 > a || 0 > b)
        return !0;
    var d = this.height_;
    return a > this.width_ || b > d ? !0 : !1
}
;
c123.Library.prototype.offscreenArray_ = function(a) {
    for (var b = 0; b < a.length; b++) {
        var d = a[b];
        if (this.offscreen_(d.x, d.y))
            return !0
    }
    return !1
}
;
c123.Library.prototype.look = function(a, b) {
    return "rgb(" + this.peek(a, b).rgb + ")"
}
;
c123.Library.prototype.peek = function(a, b) {
    var d = Math.floor(a)
      , f = Math.floor(b)
      , g = this.ctx_.getImageData(0, 0, this.width_, this.height_)
      , d = 4 * (f * g.width + d)
      , f = g.data[d] || 0
      , h = g.data[d + 1] || 0
      , k = g.data[d + 2] || 0;
    return {
        r: f,
        g: h,
        b: k,
        a: g.data[d + 3] || 0,
        rgb: f + "," + h + "," + k
    }
}
;
c123.Library.prototype.toDataURL = function(a, b) {
    return this.canvas_.toDataURL(a, b)
}
;
c123.Library.prototype.sound = function(a, b, d) {
    a = codepops.cleanAssetName(a);
    if (4 < a.length && a.indexOf("mp3") === a.length - 3)
        path = "http://codepops.com/customart/" + a.replace(/mp3/gi, "") + ".mp3",
        this.loadSound_(a, path);
    else if (!this.loadedSounds_[a]) {
        if (c123.sounds[a])
            this.loadSound_(a, c123.sounds[a], void 0 === b ? 100 : b, void 0 === d ? 1 : d);
        else {
            if (this.onAssetLoadError_)
                this.onAssetLoadError_(a, "sound");
            console.warn("Can't play " + a + ".")
        }
        return
    }
    var f = {
        volume: 100
    };
    b && (f.volume = b);
    d && (f.loops = d);
    this.loadedSounds_[a].play(f)
}
;
c123.Library.prototype.song = function(a, b) {
    var d = codepops.cleanAssetName(a);
    if (4 < d.length && d.indexOf("mp3") === d.length - 3)
        path = "http://codepops.com/customart/" + d.replace(/mp3/gi, "") + ".mp3",
        this.loadSound_(d, path);
    else if (!this.loadedSounds_[d]) {
        if (c123.songs[d])
            this.loadSound_(d, c123.songs[d], void 0 === b ? 33 : b, 99999);
        else {
            if (this.onAssetLoadError_)
                this.onAssetLoadError_(d, "song");
            console.warn("Can't play " + d + ".")
        }
        return
    }
    var f = 33;
    void 0 !== b && (f = b);
    f = {
        loops: 99999,
        volume: f
    };
    this.loadedSounds_[d].stop();
    this.loadedSounds_[d].play(f)
}
;
c123.Library.prototype.loadSound_ = function(a, b, d, f) {
    this.soundManager_ && (this.loadedSounds_[a] = this.soundManager_.createSound({
        id: a,
        url: b,
        autoPlay: !1,
        stream: !0,
        volume: d || 0,
        loops: f || 1
    }))
}
;
c123.Library.prototype.loadAssets_ = function(a, b) {
    for (var d = 0; d < a.length; d++) {
        var f = codepops.cleanAssetName(a[d]);
        if ((c123.sounds[f] || c123.songs[f]) && !this.loadedSounds_[f]) {
            var g = "/mp3/" + f + ".mp3";
            c123.songs[f] && !0 !== c123.songs[f] ? g = c123.songs[f] : c123.sounds[f] && !0 !== c123.sounds[f] && (g = c123.sounds[f]);
            this.loadSound_(f, g)
        }
        c123.stampList && c123.stampList[f] && (this.stampsByName_[f] || this.loadStampImage_(f, function() {}, function() {}));
        c123.pictures[f] && (this.picturesByName_[f] || this.loadFillPicture_(f, c123.pictures[f]));
        "impact" === f && (c123.isFontAvailable("Impact") ? this.impactHasLoaded_ = !0 : this.loadingImpactFont_ || this.loadImpactFont_());
        c123.googleFonts[f] && this.loadGoogleFont_(f, c123.googleFonts[f])
    }
    b && b()
}
;
c123.Library.prototype.loadStampImage_ = function(a, b, d) {
    var f = this.stampsByName_[a];
    if (f)
        b(f),
        this.requestRedraw();
    else {
        var g = this.document_.createElement("img");
        g.crossOrigin = "anonymous";
        g.onerror = c123.bind(function() {
            this.numberOfStampLoadErrors++;
            this.stampsByName_[a] = document.getElementById("stamp-not-found");
            if (this.onAssetLoadError_)
                this.onAssetLoadError_(a, "stamp");
            d && d(g)
        }, this);
        g.onload = c123.bind(function() {
            this.stampsByName_[a] = g;
            b && b(g);
            this.requestRedraw()
        }, this);
        if (0 === a.indexOf("@"))
            return f = codepops.getCustomAssetPath("stamp", a, this.customAssetHash_),
            "undefined" === typeof f && (f = codepops.getCustomAssetPath("fill", a, this.customAssetHash_)),
            g.src = f,
            g;
        !c123.stampList[a] && c123.pictures[a] ? g.src = c123.pictures[a] : 4 < a.length && a.indexOf("png") === a.length - 3 ? g.src = "http://codepops.com/customart/" + a.replace(/png/gi, "") + ".png" : g.src = "http://13.71.86.152:8888/images/" + a + ".png";
        return g
    }
}
;
c123.Library.prototype.silence = function() {
    this.soundManager_ && this.soundManager_.stopAll()
}
;
c123.Library.prototype.run = function(a, b) {
    var d = a.match(/(["'])(?:\\\1|.)*?\1/g) || [];
    this.resetLibrary();
    this.silence();
    "undefined" !== b && (this.customAssetHash_ = b);
    var f = c123.bind(function() {
        try {
            if (window.eval(a),
            this.onSuccess_)
                this.onSuccess_()
        } catch (b) {
            if (this.onError_)
                this.onError_(b)
        }
    }, this);
    this.loadAssets_(d, f)
}
;
c123.Library.prototype.repeat = function(a, b) {
    var d = this.parseArguments_(arguments);
    if (1 !== d.functions.length)
        throw "You must pass a function into the repeat() call.";
    b = d.numbers[0] || 0;
    d = d.functions[0];
    if (2 >= arguments.length)
        for (var f = 1; f <= b; f++)
            d(f);
    else
        for (var f = Array.prototype.slice.call(arguments, 2), g = 1; g <= b; g++)
            1 === g ? f.unshift(g) : f[0] = g,
            d.apply(this, f)
}
;
c123.Library.prototype.pause = function() {
    this.isPaused_ = !0
}
;
c123.Library.prototype.unpause = function() {
    this.isPaused_ = !1
}
;
c123.Library.prototype.fakeTap = function(a, b) {
    var d = {};
    d.offsetX = a;
    d.offsetY = b;
    d.preventDefault = function() {}
    ;
    this.onMouseDown_(d);
    this.onMouseUp_(d)
}
;
c123.Library.prototype.fakeLongTap = function(a, b) {
    var d = {};
    d.offsetX = a;
    d.offsetY = b;
    d.preventDefault = function() {}
    ;
    this.onMouseDown_(d);
    d = new Date;
    d.setSeconds((new Date).getSeconds() - 1);
    this.lastMouseDownTime_ = d;
    d = {};
    d.offsetX = a;
    d.offsetY = b;
    d.preventDefault = function() {}
    ;
    this.onMouseUp_(d)
}
;
c123.Library.prototype.fakeTouch = function(a, b) {
    var d = {};
    d.offsetX = a;
    d.offsetY = b;
    d.preventDefault = function() {}
    ;
    this.onMouseDown_(d)
}
;
c123.Library.prototype.fakeDragStart = function(a, b) {
    var d = {
        targetTouches: []
    };
    d.targetTouches.push({
        clientX: a,
        clientY: b
    });
    d.preventDefault = function() {}
    ;
    this.onTouchStart_(d)
}
;
c123.Library.prototype.fakeDrag = function(a, b) {
    var d = {
        targetTouches: []
    };
    d.targetTouches.push({
        clientX: a,
        clientY: b
    });
    d.preventDefault = function() {}
    ;
    this.onTouchMove_(d)
}
;
c123.Library.prototype.fakeDragEnd = function(a, b) {
    var d = {
        targetTouches: []
    };
    d.targetTouches.push({
        clientX: a,
        clientY: b
    });
    d.preventDefault = function() {}
    ;
    this.onTouchEnd_(d)
}
;
c123.Library.prototype.distance = function(a, b) {
    if ("number" === typeof a && "number" === typeof b)
        return Math.abs(a - b);
    if (void 0 !== a.x && void 0 !== a.y && void 0 !== b.x && void 0 !== b.y) {
        var d = a.x - b.x
          , f = a.y - b.y;
        return Math.sqrt(d * d + f * f)
    }
}
;
c123.Library.prototype.getLargestZ = function() {
    return this.largestZ_
}
;
c123.Library.prototype.width = function() {
    return this.width_
}
;
c123.Library.prototype.height = function() {
    return this.height_
}
;
c123.Library.prototype.requestRedraw = function() {
    this.needsRedraw_ = !0
}
;
c123.Library.prototype.radians = function(a) {
    return a * Math.PI / 180
}
;
c123.Library.prototype.find = function(a) {
    a = this.getCleanName_(a);
    -1 < a.indexOf(".") && (a = a.replace(/\./gi, ""));
    for (var b = this.sceneStack_, d = [], f = 0; f < b.length; f++) {
        var g = b[f];
        g.cleanName_ && g.cleanName_ === a && !1 === g.hidden && d.push(g)
    }
    return d
}
;
c123.Library.prototype.deltaByDirection = function(a, b, d) {
    var f = this.radians(d || 0);
    if (-1 < a.indexOf("north") || -1 < a.indexOf("south"))
        f = 0;
    d = Math.cos(f);
    var f = Math.sin(f)
      , g = Math.cos(this.radians(45));
    return {
        dx: {
            up: f,
            down: -f,
            left: -d,
            right: d,
            north: 0,
            south: 0,
            west: -1,
            east: 1,
            northeast: g,
            southeast: g,
            northwest: -g,
            southwest: -g
        }[a] * b,
        dy: {
            up: -d,
            down: d,
            left: -f,
            right: f,
            north: -1,
            south: 1,
            west: 0,
            east: 0,
            northeast: -g,
            southeast: g,
            northwest: -g,
            southwest: g
        }[a] * b
    }
}
;
c123.Library.prototype.angleByDirection = function(a) {
    return {
        up: 0,
        down: 180,
        left: 270,
        right: 90,
        north: 0,
        south: 180,
        west: 270,
        east: 90,
        northeast: 45,
        southeast: 135,
        northwest: 315,
        southwest: 225
    }[a]
}
;
c123.Library.prototype.getLineAngle = function(a, b, d, f) {
    return Math.atan2(f - b, d - a) * (180 / Math.PI) + 90
}
;
c123.Library.prototype.explode = function(a) {
    a.explode && a.explode()
}
;
c123.Library.prototype.sing = function(a) {
    a.sing && a.sing()
}
;
c123.Library.prototype.pop = function(a) {
    a.pop && a.pop()
}
;
c123.Library.prototype.pow = function(a) {
    a.pow && a.pow()
}
;
c123.Library.prototype.swim = function(a) {
    a.swim && a.swim()
}
;
c123.Library.prototype.splash = function(a) {
    a.splash && a.splash()
}
;
c123.Library.prototype.burn = function(a) {
    a.burn && a.burn()
}
;
c123.Library.prototype.dance = function(a) {
    a.dance && a.dance()
}
;
c123.Library.prototype.erase = function(a) {
    a.erase && a.erase()
}
;
c123.Library.prototype.hide = function(a) {
    a.hide && a.hide()
}
;
c123.Library.prototype.show = function(a) {
    a.show && a.show()
}
;
c123.Library.prototype.preloadSounds_ = function() {
    this.soundManager_.ok() ? this.loadAssets_("c3 d3 e3 f3 g3 a3 b3 c4".split(" ")) : this.window_.setTimeout(c123.bind(this.preloadSounds_, this), 200)
}
;


module.export = c123;
