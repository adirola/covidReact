var codepops = codepops || {};
codepops.AccountConnectWidget = function(a, b) {
    var c = b || {};
    this.window_ = c.window || window;
    this.document_ = c.document || window.document;
    this.page_ = a;
    this.dataStore_ = c.dataStore || this.page_.getDataStore();
    this.panel_ = this.document_.createElement("div");
    this.panel_.id = "account-connect-widget";
    this.panel_.className = "hidden";
    this.document_.body.appendChild(this.panel_);
    this.headerStick_ = this.document_.createElement("div");
    this.headerStick_.className = "stick stick-inline";
    this.panel_.appendChild(this.headerStick_);
    c = this.document_.createElement("div");
    c.className = "stick-button-help";
    c.onclick = this.onHelpButtonClick.bind(this);
    this.headerStick_.appendChild(c);
    c = this.document_.createElement("p");
    c.innerHTML = $t("Do you have a Bitsbox home subscription?");
    this.headerStick_.appendChild(c);
    this.content_ = this.document_.createElement("div");
    this.content_.className = "stick-dropdown";
    this.panel_.appendChild(this.content_);
    this.helpPanel_ = this.document_.createElement("div");
    this.helpPanel_.id = "account-connect-help-panel";
    this.helpPanel_.className = "hidden";
    this.helpPanel_.innerHTML = $t("Bitsbox subscriptions are awesome.") + "<ul><li>" + $t("<b>As a subscriber, you get monthly coding projects</b> delivered straight to your home or inbox.") + "<li>" + $t("<b>By telling us about your subscription,</b> we can provide better help via email and phone.") + "<li>" + $t("<b>If you're not sure</b> about your subscription details, just tell us what you can and we'll look it up for you.") + "</ul>" + $t('Want to learn more? Check out <a target="_blank" href="faq.html" title="our FAQ">our FAQ</a>.');
    c = this.document_.createElement("div");
    c.className = "select-wrapper";
    this.content_.appendChild(c);
    this.subscriptionType_ = this.document_.createElement("select");
    this.subscriptionType_.name = "subscriptionType";
    this.subscriptionType_.setAttribute("aria-label", "Subscription type");
    this.subscriptionType_.onchange = this.onSelectTypeChange.bind(this);
    c.appendChild(this.subscriptionType_);
    var c = this.document_.createElement("option")
      , d = this.document_.createElement("option")
      , e = this.document_.createElement("option")
      , f = this.document_.createElement("option")
      , g = this.document_.createElement("option")
      , h = this.document_.createElement("option");
    c.innerHTML = $t("Choose one...");
    d.innerHTML = $t("Yes! I get Bitsbox through the mail.");
    d.value = "home";
    e.innerHTML = $t("Yes! I get Bitsbox projects via email.");
    e.value = "digital";
    f.innerHTML = $t("I get Bitsbox through my school.");
    f.value = "school";
    g.innerHTML = $t("Nope. I don't have a subscription.");
    g.value = "none";
    h.innerHTML = $t("I'm not sure...");
    h.value = "not sure";
    this.subscriptionType_.appendChild(c);
    this.subscriptionType_.appendChild(d);
    this.subscriptionType_.appendChild(e);
    this.subscriptionType_.appendChild(f);
    this.subscriptionType_.appendChild(g);
    this.subscriptionType_.appendChild(h);
    this.form_ = this.document_.createElement("div");
    this.content_.appendChild(this.form_);
    this.content_.appendChild(this.helpPanel_)
}
;
codepops.AccountConnectWidget.prototype.show = function(a) {
    this.onComplete_ = a;
    this.panel_.style.display = "block";
    this.panel_.className = "visible";
    this.headerStick_.classList.remove("hidden");
    this.document_.getElementById("popup-background").className = "visible";
    this.subscriptionType_.selectedIndex = 0;
    this.onSelectIndex0()
}
;
codepops.AccountConnectWidget.prototype.hide = function() {
    this.panel_.style.display = "none";
    this.panel_.className = "hidden";
    this.document_.getElementById("popup-background").className = "hidden"
}
;
codepops.AccountConnectWidget.prototype.onHelpButtonClick = function() {
    codepops.toggleClass("account-connect-help-panel", "hidden", "visible")
}
;
codepops.AccountConnectWidget.prototype.onSelectTypeChange = function() {
    this.helpPanel_.className = "hidden";
    var a = this["onSelectIndex" + this.subscriptionType_.selectedIndex];
    a && "function" == typeof a && a.bind(this)()
}
;
codepops.AccountConnectWidget.prototype.onSelectIndex0 = function() {
    this.form_.innerHTML = ""
}
;
codepops.AccountConnectWidget.prototype.onSelectIndex1 = function() {
    var a = this.document_.createElement("div");
    a.innerHTML = $t("Great! What's your mailing address?");
    a.className = "instruction";
    var b = this.document_.createElement("input");
    b.type = "text";
    b.maxLength = 255;
    b.name = "street";
    b.placeholder = $t("street address");
    var c = this.document_.createElement("div");
    c.className = "city-state-zip-wrapper";
    var d = this.document_.createElement("input");
    d.type = "text";
    d.maxLength = 255;
    d.name = "city";
    d.placeholder = $t("city");
    var e = this.document_.createElement("div");
    e.className = "select-wrapper state-wrapper";
    var f = this.document_.createElement("select");
    f.name = "state";
    for (var g = 0; g < this.states.length; g++) {
        var h = this.document_.createElement("option");
        h.innerHTML = this.states[g];
        f.appendChild(h)
    }
    var l = this.document_.createElement("input");
    l.type = "text";
    l.maxLength = 255;
    l.name = "zip";
    l.placeholder = $t("zip");
    f.onchange = function() {
        1 == f.selectedIndex ? (e.style.width = "170px",
        l.style.display = "none") : (e.style.width = "",
        l.style.display = "inline-block")
    }
    ;
    g = this.document_.createElement("span");
    g.className = "button";
    g.innerHTML = $t("Done");
    g.onclick = this.saveSubscriptionSurvey.bind(this);
    this.form_.innerHTML = "";
    this.form_.appendChild(a);
    this.form_.appendChild(b);
    this.form_.appendChild(c);
    this.form_.appendChild(g);
    c.appendChild(d);
    c.appendChild(e);
    c.appendChild(l);
    e.appendChild(f)
}
;
codepops.AccountConnectWidget.prototype.onSelectIndex2 = function() {
    var a = this.document_.createElement("div");
    a.innerHTML = $t("What email address are they sent to?");
    a.className = "instruction";
    var b = this.document_.createElement("input");
    b.type = "text";
    b.maxLength = 255;
    b.name = "subscriptionEmail";
    b.placeholder = $t("email address");
    var c = this.document_.createElement("span");
    c.className = "button";
    c.innerHTML = $t("Done");
    c.onclick = this.saveSubscriptionSurvey.bind(this);
    this.form_.innerHTML = "";
    this.form_.appendChild(a);
    this.form_.appendChild(b);
    this.form_.appendChild(c)
}
;
codepops.AccountConnectWidget.prototype.onSelectIndex3 = function() {
    var a = this.document_.createElement("div");
    a.innerHTML = $t("Great! What's the name of your school?");
    a.className = "instruction";
    var b = this.document_.createElement("input");
    b.type = "text";
    b.maxLength = 255;
    b.name = "schoolName";
    b.placeholder = $t("school");
    var c = this.document_.createElement("input");
    c.type = "text";
    c.maxLength = 255;
    c.name = "schoolLocation";
    c.placeholder = $t("city and state");
    var d = this.document_.createElement("span");
    d.className = "button";
    d.innerHTML = $t("Done");
    d.onclick = this.saveSubscriptionSurvey.bind(this);
    this.form_.innerHTML = "";
    this.form_.appendChild(a);
    this.form_.appendChild(b);
    this.form_.appendChild(c);
    this.form_.appendChild(d)
}
;
codepops.AccountConnectWidget.prototype.onSelectIndex4 = function() {
    var a = this.document_.createElement("div");
    a.innerHTML = $t("That's fine. Have fun coding!");
    a.className = "info";
    var b = this.document_.createElement("span");
    b.className = "button";
    b.innerHTML = $t("Done");
    b.onclick = this.saveSubscriptionSurvey.bind(this);
    this.form_.innerHTML = "";
    this.form_.appendChild(a);
    this.form_.appendChild(b)
}
;
codepops.AccountConnectWidget.prototype.onSelectIndex5 = function() {
    var a = this.document_.createElement("div");
    a.innerHTML = $t("Don't worry. We can take care of this later. Have fun coding!");
    a.className = "info";
    var b = this.document_.createElement("span");
    b.className = "button";
    b.innerHTML = $t("Done");
    b.onclick = this.saveSubscriptionSurvey.bind(this);
    this.form_.innerHTML = "";
    this.form_.appendChild(a);
    this.form_.appendChild(b)
}
;
codepops.AccountConnectWidget.prototype.saveSubscriptionSurvey = function() {
    for (var a = Array.from(this.content_.getElementsByTagName("input")), b = Array.from(this.content_.getElementsByTagName("select")), a = a.concat(b), b = {}, c = 0; c < a.length; c++) {
        var d = a[c];
        b[d.name] = d.value || ""
    }
    this.dataStore_.saveSubscriptionSurvey(b, this.onSaveComplete.bind(this));
    this.hide()
}
;
codepops.AccountConnectWidget.prototype.onSaveComplete = function(a) {
    a && console.log("Error in AccountConnectWidget.saveSurveyAnswers()", a);
    if (this.onComplete_ && "function" == typeof this.onComplete_)
        this.onComplete_(a)
}
;
codepops.AccountConnectWidget.prototype.states = "state;Outside USA;AL;AK;AS;AZ;AR;CA;CO;CT;DE;DC;FM;FL;GA;GU;HI;ID;IL;IN;IA;KS;KY;LA;ME;MH;MD;MA;MI;MN;MS;MO;MT;NE;NV;NH;NJ;NM;NY;NC;ND;MP;OH;OK;OR;PW;PA;PR;RI;SC;SD;TN;TX;UT;VT;VI;VA;WA;WV;WI;WY".split(";");
codepops = codepops || {};
codepops.AccountWalkerCSVPage = function(a) {
    a = a || {};
    this.firebaseConfigs_ = {
        prod: {
            apiKey: "AIzaSyD6xDBwOojKewgo-GlBSz3UmJOmRM7XDEU",
            authDomain: "bitsbox.firebaseapp.com",
            databaseURL: "https://bitsbox.firebaseio.com",
            projectId: "firebase-bitsbox",
            storageBucket: "firebase-bitsbox.appspot.com",
            messagingSenderId: "987467626401"
        },
        staging: {
            apiKey: "AIzaSyDLopq_bvt3vIaJalGRowQM2eANBTXP5yM",
            authDomain: "bitsboxstaging.firebaseapp.com",
            databaseURL: "https://bitsboxstaging.firebaseio.com",
            projectId: "bitsboxstaging",
            storageBucket: "bitsboxstaging.appspot.com",
            messagingSenderId: "592712701129"
        },
        "prod-copy": {
            apiKey: "AIzaSyAGdW2BAhQpkBg_eNZvBxazGB3sPMtXHcQ",
            authDomain: "bitsbox-prod-copy.firebaseapp.com",
            databaseURL: "https://bitsbox-prod-copy.firebaseio.com",
            projectId: "bitsbox-prod-copy",
            storageBucket: "bitsbox-prod-copy.appspot.com",
            messagingSenderId: "317340905917"
        }
    };
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.firebaseConfig_ = this.getFirebaseConfig_();
    this.firebase_ = this.openFirebase_();
    this.environment_ = a.environment || "prod";
    this.currentMetric_ = "";
    (a = this.document_.getElementById("generate-csv")) && a.addEventListener("click", codepops.bind(this.queryFirebase_, this), !1)
}
;
codepops.AccountWalkerCSVPage.prototype.openFirebase_ = function() {
    firebase.initializeApp(this.firebaseConfig_);
    return firebase.database().ref()
}
;
codepops.AccountWalkerCSVPage.prototype.queryFirebase_ = function() {
    var a = this.document_.getElementById("metric-select");
    if (a)
        var b = a.options[a.selectedIndex].value;
    b ? (this.currentMetric_ = b,
    this.firebase_.child(this.environment_ + "/" + b).once("value", codepops.bind(this.processData_, this))) : console.log("Could not find metric.")
}
;
codepops.AccountWalkerCSVPage.prototype.processData_ = function(a) {
    if (a) {
        a = a.val();
        var b = [], c;
        for (c in a) {
            var d = a[c], e;
            for (e in d) {
                var f = d[e], g;
                for (g in f) {
                    var h = f[g]
                      , l = [];
                    l.push(c);
                    l.push(e);
                    l.push(h);
                    l.push(g);
                    b.push(l.join(","))
                }
            }
        }
        this.displayData_(b)
    } else
        this.displayMessage_("No data returned from Firebase.")
}
;
codepops.AccountWalkerCSVPage.prototype.displayData_ = function(a) {
    var b = this.document_.getElementById("csv-title");
    if (b) {
        var c = this.document_.createTextNode(this.currentMetric_);
        b.innerHTML = "";
        b.appendChild(c)
    }
    (b = this.document_.getElementById("csv-container")) ? (b.value = a.join("\n"),
    b.focus(),
    b.select()) : console.log("Could not find csv container textarea element.")
}
;
codepops.AccountWalkerCSVPage.prototype.displayMessage_ = function(a) {
    var b = this.document_.getElementById("message-div");
    if (b) {
        b.innerHTML = "";
        var c = this.document_.createElement("p");
        a = this.document_.createTextNode(a);
        c.appendChild(a);
        b.appendChild(c)
    } else
        console.log("cannot find progress-div")
}
;
codepops.AccountWalkerCSVPage.prototype.getFirebaseConfig_ = function() {
    var a = "prod"
      , b = this.window_.location.hostname
      , c = this.window_.location.href;
    if (b) {
        var d = new RegExp(/10\.\d+\.\d+\.\d+/)
          , e = -1 < c.toLowerCase().indexOf("useproddata")
          , c = -1 < c.toLowerCase().indexOf("useprodcopy")
          , f = -1 < b.toLowerCase().indexOf("bitsboxstaging") && !e && !c
          , b = (-1 < b.toLowerCase().indexOf("localhost") || d.test(b)) && !e && !c;
        if (e)
            a = "prod";
        else if (c)
            a = "prod-copy";
        else if (f || b)
            a = "staging"
    }
    return this.firebaseConfigs_[a]
}
;
codepops = codepops || {};
codepops.AccountWalkerPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.dataStore_ = a.dataStore || new codepops.DataStore;
    this.userIds_ = [];
    this.recordsReturned_ = this.recordsExpected_ = 0;
    this.buckets_ = {
        all: {
            appsCreated: 0,
            lineCount: 0,
            userCount: 0,
            subscriberCount: 0
        },
        gender: {},
        age: {},
        genderAndAge: {}
    };
    this.appsToExcludeForSubscriberTest_ = [4356, 7908, 4122, 1538, 5347, 3853, 7482, 5321, 1223];
    this.queryDatastore_()
}
;
codepops.AccountWalkerPage.prototype.queryDatastore_ = function() {
    this.dataStore_.firebase_.child("/stats/registered/minutesUsed/byUser").once("value", codepops.bind(this.populateUserIdList_, this))
}
;
codepops.AccountWalkerPage.prototype.populateUserIdList_ = function(a) {
    if (a) {
        a = a.val();
        for (var b in a)
            this.userIds_.push(b);
        this.recordsExpected_ = this.userIds_.length;
        this.getUserRecord_()
    }
}
;
codepops.AccountWalkerPage.prototype.getUserRecord_ = function() {
    var a = this.userIds_.pop();
    if (!a && 0 >= this.userIds_.length && this.recordsReturned_ >= this.recordsExpected_)
        console.log("Done? Displaying app count total."),
        this.displayTotals_();
    else
        this.dataStore_.firebase_.child("/users/" + a + "/kids/kid0/").once("value", codepops.bind(this.fetchSuccess_, this), codepops.bind(this.fetchFailure_, this))
}
;
codepops.AccountWalkerPage.prototype.fetchSuccess_ = function(a) {
    this.recordsReturned_++;
    if (a && null != a.val()) {
        var b = a.val();
        if (b) {
            var c = b.preferences;
            if (c) {
                a = this.getSumsKeys_(c);
                a.genderAndAge = a.gender + "_" + a.age;
                var c = c.appsCreated
                  , d = this.getAppLineCount_(b)
                  , b = this.isSubscriber_(b);
                this.updateTotals_(a, c, d, b);
                this.updateProgress_()
            }
        }
    }
    this.getUserRecord_()
}
;
codepops.AccountWalkerPage.prototype.fetchFailure_ = function() {
    this.recordsReturned_++;
    this.updateProgress_()
}
;
codepops.AccountWalkerPage.prototype.updateTotals_ = function(a, b, c, d) {
    if (void 0 === b || null === b || isNaN(b))
        b = 0;
    if (void 0 === c || null === c || isNaN(c))
        c = 0;
    this.buckets_.all.appsCreated += b;
    this.buckets_.all.lineCount += c;
    this.buckets_.all.userCount++;
    !0 === d && this.buckets_.all.subscriberCount++;
    this.verifyBucketExists_("gender", a.gender);
    this.buckets_.gender[a.gender].appsCreated += b;
    this.buckets_.gender[a.gender].lineCount += c;
    this.buckets_.gender[a.gender].userCount++;
    !0 === d && this.buckets_.gender[a.gender].subscriberCount++;
    this.verifyBucketExists_("age", a.age);
    this.buckets_.age[a.age].appsCreated += b;
    this.buckets_.age[a.age].lineCount += c;
    this.buckets_.age[a.age].userCount++;
    !0 === d && this.buckets_.age[a.age].subscriberCount++;
    this.verifyBucketExists_("genderAndAge", a.genderAndAge);
    this.buckets_.genderAndAge[a.genderAndAge].appsCreated += b;
    this.buckets_.genderAndAge[a.genderAndAge].lineCount += c;
    this.buckets_.genderAndAge[a.genderAndAge].userCount++;
    !0 === d && this.buckets_.genderAndAge[a.genderAndAge].subscriberCount++
}
;
codepops.AccountWalkerPage.prototype.updateProgress_ = function() {
    var a = this.document_.getElementById("progress-div");
    if (a) {
        var b = "Results returned so far: " + this.recordsReturned_
          , c = this.document_.createTextNode("Total queries: " + this.recordsExpected_)
          , b = this.document_.createTextNode(b)
          , d = this.document_.createElement("p")
          , e = this.document_.createElement("p");
        d.appendChild(c);
        e.appendChild(b);
        a.innerHTML = "";
        a.appendChild(d);
        a.appendChild(e)
    } else
        console.log("Cannot find progress div.")
}
;
codepops.AccountWalkerPage.prototype.verifyBucketExists_ = function(a, b) {
    this.buckets_[a] || (this.buckets_[a] = {});
    this.buckets_[a][b] || (this.buckets_[a][b] = {});
    this.buckets_[a][b].appsCreated || (this.buckets_[a][b].appsCreated = 0);
    this.buckets_[a][b].lineCount || (this.buckets_[a][b].lineCount = 0);
    this.buckets_[a][b].userCount || (this.buckets_[a][b].userCount = 0);
    this.buckets_[a][b].subscriberCount || (this.buckets_[a][b].subscriberCount = 0)
}
;
codepops.AccountWalkerPage.prototype.getSumsKeys_ = function(a) {
    var b = "UNKNOWN"
      , c = "UNKNOWN";
    a.age && (b = a.age);
    a.gender && (c = a.gender);
    return {
        age: b,
        gender: c
    }
}
;
codepops.AccountWalkerPage.prototype.displayTotals_ = function() {
    var a = this.document_.getElementById("totals-table");
    if (a)
        for (var b in this.buckets_)
            if ("all" == b) {
                var c = a.insertRow()
                  , d = c.insertCell();
                d.appendChild(this.document_.createTextNode("All"));
                var d = c.insertCell()
                  , e = this.buckets_[b].userCount;
                d.appendChild(this.document_.createTextNode(e));
                d = c.insertCell();
                e = this.buckets_[b].subscriberCount;
                d.appendChild(this.document_.createTextNode(e));
                d = c.insertCell();
                e = this.buckets_[b].appsCreated;
                d.appendChild(this.document_.createTextNode(e));
                c = c.insertCell();
                c.appendChild(this.document_.createTextNode(this.buckets_[b].lineCount))
            } else {
                c = a.insertRow().insertCell();
                c.colSpan = 5;
                c.className = "category-header";
                d = this.document_.createTextNode(b);
                c.appendChild(d);
                for (var f in this.buckets_[b])
                    c = a.insertRow(),
                    d = c.insertCell(),
                    e = this.document_.createTextNode(f),
                    d.appendChild(e),
                    d = c.insertCell(),
                    e = this.document_.createTextNode(this.buckets_[b][f].userCount),
                    d.appendChild(e),
                    d = c.insertCell(),
                    e = this.document_.createTextNode(this.buckets_[b][f].subscriberCount),
                    d.appendChild(e),
                    d = c.insertCell(),
                    e = this.document_.createTextNode(this.buckets_[b][f].appsCreated),
                    d.appendChild(e),
                    c = c.insertCell(),
                    d = this.document_.createTextNode(this.buckets_[b][f].lineCount),
                    c.appendChild(d)
            }
    else
        console.log("Unable to find totals-table element.")
}
;
codepops.AccountWalkerPage.prototype.getAppLineCount_ = function(a) {
    var b = 0;
    if (a = a.apps)
        for (var c in a)
            var d = a[c].code.trim().split(/\n+/g)
              , b = b + d.length;
    else
        return 0;
    return b
}
;
codepops.AccountWalkerPage.prototype.isSubscriber_ = function(a) {
    if (a = a.apps)
        for (var b in a) {
            var c = a[b].parentActivityNumber;
            if (c && !isNaN(c) && -1 == this.appsToExcludeForSubscriberTest_.indexOf(c))
                return !0
        }
    return !1
}
;
codepops = codepops || {};
codepops.ActivityReportPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.dataStore_ = a.dataStore || new codepops.DataStore;
    this.completionsByActivityNumber_ = {};
    this.startsByGender_ = {};
    this.childAppsQueue_ = [];
    this.sortedActivityNumbers_ = {
        "Shoo Fly": [3789, 2497, 1161, 8241, 4515, 4998, 5349, 6971, 1113, 1149, 6388, 7024, 5086, 5308, 1761, 7249],
        "Sky's the Limit": [8624, 2472, 6458, 7323, 6664, 1836, 2154, 7874, 4016, 3323, 2697, 8248],
        "A Land Far Away": [4983, 6365, 8242, 2384, 2713, 8842, 3663, 4742, 6057, 8246, 6477, 3514, 7227, 5555, 2921],
        "Robo Boogie": [8067, 8273, 3158, 4414, 8498, 2306, 4180, 4109, 8610, 5737, 2085, 2658, 8766, 8131, 4073, 2652],
        "Animal House": [4497, 1145, 3429, 1348, 1566, 8525, 4259, 3211, 5760, 3498, 3351, 7695, 6659, 6729, 8012, 4128],
        "Sampler Box": [6340, 5303, 8311, 2691, 1567],
        "Water Water": [2353, 6500, 3387, 8912, 5925, 8196, 8491, 5013, 8476, 2024, 4378, 1299, 6097, 3213, 6519, 3022, 2172, 3503],
        July2016: [6638, 4551, 1424, 7606, 1679, 2534, 8117, 7123, 5582, 4943, 7682, 8119, 5024, 5648, 6640, 1777, 5569, 5937, 3128, 5754, 7245, 7854],
        June2016: [5214, 8115, 4600, 3356, 3268, 2084, 8179, 8668, 2432, 3814, 1484, 2028, 5702, 3738, 3324, 7471, 6384, 4841, 4104, 4720, 8669, 5221],
        May2016: [7689, 4616, 3242, 6840, 2513, 2093, 2954, 7781, 4088, 1622, 7904, 6043, 6235, 1774, 1806, 1121, 5410, 6218, 3284, 7239, 3609, 7447, 8184],
        April2016: [6168, 7947, 3958, 6113, 8822, 1702, 1613, 6414, 1443, 3727, 4278, 2539, 6629, 5049, 1292, 3068, 2066, 4626, 4398, 4579, 7481, 8590, 8013, 6416, 5106],
        March2016: [2375, 5259, 7740, 2133, 3966, 6146, 8857, 6913, 8817, 5663, 2850, 8811, 3150, 7732, 1235, 1395, 3630, 6145, 8137, 1740, 8137, 1740],
        February2016: [4020, 7421, 6153, 4822, 7196, 2194, 7240, 2351, 7077, 2604, 3198, 8091, 2894, 6835, 2571, 5930, 8503, 3497, 6292, 2124],
        January2016: [8810, 4953, 7337, 4438, 8554, 2529, 8666, 2106, 2996, 2045, 3876, 6924, 7141, 7487, 8238, 7992, 4828, 5884],
        December2015: [3625, 5698, 8028, 3711, 1940, 7894, 7054, 2309, 7842, 5137, 4017, 6092, 2736, 7995, 4094, 8064, 4851, 8914],
        November2015: [7981, 5958, 1817, 6761, 1513, 1493, 8930, 3389, 2536, 8477, 6019, 3516, 3266, 2096, 1268, 3658, 5742, 8928, 1171, 5256],
        October2015: [8035, 6815, 6351, 8195, 6364, 2584, 8411, 5441, 7087, 2140, 4076, 2618, 8589, 6241, 5777, 1072, 7399, 3792, 6865, 7315],
        September2015: [5718, 3409, 3975, 4718, 8141, 4587, 5205, 5980, 6781, 3522, 3566, 3716, 8854, 2195, 3850, 6698, 4355, 6200, 5161, 7213, 4136],
        August2015: [1405, 4830, 6668, 4176, 6938, 5231, 4321, 2637, 1542, 1809, 4092, 4819, 1663, 1038, 6561, 8939, 7286, 7789, 5339],
        July2015: [1062, 3790, 1765, 8957, 4297, 4313, 1432, 1071, 3680, 8705, 8360, 3624, 3134, 4174, 4494, 3256, 3265, 4225, 6298, 7628, 1219],
        June2015: [2470, 7780, 5775, 8351, 1773, 3524, 5152, 1347, 7019, 6724, 1999, 2681, 5689, 5964, 6889, 8277, 4013, 2071, 8676, 4153, 6689, 4303],
        May2015: [8243, 3783, 2346, 7395, 6978, 7688, 8779, 6553, 4681, 8894, 6472, 8455, 5995, 1491, 1884, 7426, 7856, 8441, 2902, 5978, 8827, 1094],
        April2015: [4917, 2304, 5386, 2628, 5367, 8361, 4571, 2170, 7080, 1934, 3617, 3019, 8161, 6488, 7886, 5113, 5170, 2725, 5199, 7560, 1068, 4918],
        Cards: [1350, 1711, 1906, 2049, 2412, 2699, 2784, 2927, 3075, 3170, 3186, 3368, 3596, 3686, 3816, 3844, 4318, 4469, 4766, 4815, 4836, 4919, 5048, 5065, 5147, 5238, 5300, 5331, 5520, 6293, 6401, 6518, 6817, 6919, 6947, 6993, 7044, 7190, 7379, 7531, 7599, 7826, 8173, 8358, 8370, 8487, 8555, 8636, 8672, 8855],
        Cards2: [5026, 7251, 8188, 5285, 6219, 5585, 2230, 7144, 8205, 2650, 4227, 6538, 7778, 5437, 1592, 5524, 3946, 6748, 1729, 3897, 7236, 5225, 1708, 2941, 5120, 2995, 1134, 4605, 3781, 6763, 8267, 8143, 8923, 2076, 2046, 7644, 2186, 5242, 5351, 3410, 3032, 3947, 7762, 3570, 2959, 2964, 1319, 2121, 6105, 2369],
        LetsApp: [4356, 7908, 4122, 1538, 5347],
        StVrain: [2912, 7524]
    };
    this.shownActivityNumbers_ = {};
    this.populateCategorySelect_();
    (a = this.document_.getElementById("category-select-go")) ? a.addEventListener("click", codepops.bind(this.queryCategory_, this), !1) : console.log("Unable to find category button.")
}
;
codepops.ActivityReportPage.prototype.queryCategory_ = function() {
    var a = this.document_.getElementById("category-select");
    if (a) {
        var a = a.options[a.selectedIndex].value
          , b = Object.keys(this.sortedActivityNumbers_);
        !a || 0 > b.indexOf(a) ? console.log("No category selected.") : (this.queryCategory_ = a,
        this.loadData_(a))
    } else
        console.log("Cannot find select element.")
}
;
codepops.ActivityReportPage.prototype.populateCategorySelect_ = function() {
    var a = this.document_.getElementById("category-select");
    if (a)
        for (var b in this.sortedActivityNumbers_) {
            var c = this.document_.createElement("option");
            c.value = b;
            c.label = b;
            a.appendChild(c)
        }
    else
        console.log("Unable to find category-select element.")
}
;
codepops.ActivityReportPage.prototype.loadData_ = function(a) {
    this.displayMessage_("Starting query...");
    this.dataStore_.firebase_.child("/stats/activityNumbers").once("value", codepops.bind(this.displayData_, this))
}
;
codepops.ActivityReportPage.prototype.displayData_ = function(a) {
    this.reset_();
    this.displayMessage_("Got back some data. Starting secondary queries.");
    var b = this.document_.getElementById("activityNumbersTableBody");
    if (b)
        if (a = a.val(),
        this.queryCategory_) {
            var c = this.sortedActivityNumbers_[this.queryCategory_]
              , d = b.insertRow().insertCell();
            d.colSpan = 8;
            d.className = "category-header";
            d.appendChild(this.document_.createTextNode(this.queryCategory_));
            for (d = 0; d < c.length; d++) {
                var e = c[d];
                if (a[e]) {
                    var f = a[e].starts;
                    this.shownActivityNumbers_[e] = !0;
                    var g = b.insertRow()
                      , h = g.insertCell()
                      , l = this.document_.createElement("a");
                    l.href = "/appdetails.html?appId=" + e;
                    l.target = "_blank";
                    l.innerHTML = e;
                    h.appendChild(l);
                    l = this.document_.createElement("span");
                    l.className = "name-span";
                    l.id = "name-" + e;
                    h.appendChild(l);
                    this.getAppName_(e);
                    g.insertCell().appendChild(this.document_.createTextNode(f.allTime));
                    h = g.insertCell();
                    l = this.document_.createElement("span");
                    l.className = "completion-span";
                    l.id = "completion-percent-" + e;
                    h.appendChild(l);
                    h = g.insertCell();
                    l = this.document_.createElement("span");
                    l.className = "modified-span";
                    l.id = "modified-percent-" + e;
                    h.appendChild(l);
                    this.getCompletionPercentage_(e, a[e].shortcuts);
                    if (f = f.byDate) {
                        h = g.insertCell();
                        l = this.document_.createElement("div");
                        l.id = "accordian-" + e;
                        l.className = "minus-icon";
                        var m = codepops.bind(this.accordian_, this);
                        l.addEventListener("click", m);
                        h.appendChild(l);
                        l = this.document_.createElement("ul");
                        l.className = "expandable-ul-hide";
                        l.id = "date-list-" + e;
                        h.appendChild(l);
                        for (var n in f)
                            h = this.document_.createElement("li"),
                            h.appendChild(this.document_.createTextNode(n + " : " + f[n])),
                            l.appendChild(h)
                    } else
                        g.insertCell().appendChild(this.document_.createTextNode("&nbsp;"));
                    f = g.insertCell();
                    h = this.document_.createElement("span");
                    h.id = "starts-by-boy-" + e;
                    f.appendChild(h);
                    f = g.insertCell();
                    h = this.document_.createElement("span");
                    h.id = "starts-by-girl-" + e;
                    f.appendChild(h);
                    g = g.insertCell();
                    f = this.document_.createElement("span");
                    f.id = "starts-by-unknown-" + e;
                    g.appendChild(f)
                }
            }
        } else
            console.log("No queryCategory_ set.");
    else
        console.log("Unable to find activityNumbersTable element.")
}
;
codepops.ActivityReportPage.prototype.accordian_ = function(a) {
    a = a.target;
    var b = a.id.substr(10);
    if (b = this.document_.getElementById("date-list-" + b))
        "expandable-ul-hide" == b.className ? (b.className = "expandable-ul-show",
        a.className = "plus-icon") : (b.className = "expandable-ul-hide",
        a.className = "minus-icon")
}
;
codepops.ActivityReportPage.prototype.getAppName_ = function(a) {
    this.dataStore_.firebase_.child("/activityNumbers/" + a).once("value", codepops.bind(this.queryAppRecord_, this))
}
;
codepops.ActivityReportPage.prototype.queryAppRecord_ = function(a) {
    var b = a.val();
    a = a.key;
    if (b)
        this.dataStore_.firebase_.child(b + "/title").once("value", codepops.bind(this.displayAppName_, this, a))
}
;
codepops.ActivityReportPage.prototype.displayAppName_ = function(a, b) {
    var c = b.val();
    if (c) {
        var d = this.document_.getElementById("name-" + a);
        d && d.appendChild(this.document_.createTextNode(c))
    }
}
;
codepops.ActivityReportPage.prototype.getCompletionPercentage_ = function(a, b) {
    var c = void 0;
    this.dataStore_.firebase_.child("/activityNumbers/" + a).once("value", codepops.bind(function(d) {
        if (d = d.val() + "/code")
            this.dataStore_.firebase_.child(d).once("value", codepops.bind(function(d) {
                c = d.val();
                this.completionsByActivityNumber_[a] || (this.completionsByActivityNumber_[a] = {
                    starts: 0,
                    completed: 0,
                    modified: 0,
                    expected: 0
                });
                this.completionsByActivityNumber_[a].expected = Object.keys(b).length;
                for (var f in b)
                    this.childAppsQueue_.push({
                        shortcutCode: f,
                        originalAppCode: c,
                        activityNumber: a
                    });
                this.getChildCode_()
            }, this));
        else
            console.log("Couldn't find code path.")
    }, this))
}
;
codepops.ActivityReportPage.prototype.getChildCode_ = function() {
    var a = this.childAppsQueue_.pop();
    void 0 !== a && (this.dataStore_.firebase_.child("/shortcuts/" + a.shortcutCode).once("value", codepops.bind(function(b) {
        (b = b.val()) ? (this.getGenderData_(b, a.activityNumber),
        this.dataStore_.firebase_.child(b + "/code").once("value", codepops.bind(function(b) {
            (b = b.val()) ? this.recordAppStart_(a.activityNumber, codepops.compareCode(a.originalAppCode, b)) : this.recordAppStart_(a.activityNumber, !1);
            this.updateDisplayCompletionPercentage_(a.activityNumber)
        }, this))) : this.recordAppStart_(a.activityNumber, !1)
    }, this)),
    this.getChildCode_())
}
;
codepops.ActivityReportPage.prototype.getGenderData_ = function(a, b) {
    if (a && !(1 > a.length)) {
        var c = a.split("/");
        this.dataStore_.firebase_.child(c[0] + "/" + c[1] + "/kids/kid0/preferences").once("value", codepops.bind(function(a) {
            if (a = a.val())
                a = a.gender || "unknown",
                a = a.toLowerCase(),
                this.startsByGender_[b] || (this.startsByGender_[b] = {}),
                this.startsByGender_[b][a] ? this.startsByGender_[b][a]++ : this.startsByGender_[b][a] = 1
        }, this))
    }
}
;
codepops.ActivityReportPage.prototype.updateGenderData_ = function() {
    for (var a in this.startsByGender_) {
        var b = this.startsByGender_[a], c;
        for (c in b) {
            var d = b[c]
              , e = "starts-by-" + c + "-" + a
              , f = this.document_.getElementById(e);
            f ? (f.innerHTML = "",
            f.appendChild(this.document_.createTextNode(d))) : console.log("Cannot find cell element for " + e)
        }
    }
}
;
codepops.ActivityReportPage.prototype.updateDisplayCompletionPercentage_ = function(a) {
    var b = this.completionsByActivityNumber_[a];
    if (b) {
        var c = b.starts
          , b = b.expected;
        void 0 !== c && void 0 !== b && c >= b ? (this.displayCompletionPercentage_(a),
        this.displayModifiedPercentage_(a),
        this.updateGenderData_()) : (this.updateCompletionProgress_(a),
        this.updateModifiedProgress_(a))
    } else
        console.log("No completionsHash found.")
}
;
codepops.ActivityReportPage.prototype.displayCompletionPercentage_ = function(a) {
    var b = this.document_.getElementById("completion-percent-" + a);
    if (b) {
        var c = "&nbsp;";
        (a = this.completionsByActivityNumber_[a]) && void 0 !== a.completed && void 0 !== a.starts && 0 != a.starts && (percent = ((a.completed + a.modified) / a.starts * 100).toFixed(2),
        c = percent + "%",
        b.innerHTML = "",
        b.appendChild(this.document_.createTextNode(c)))
    }
}
;
codepops.ActivityReportPage.prototype.updateCompletionProgress_ = function(a) {
    var b = this.document_.getElementById("completion-percent-" + a);
    if (b) {
        var c = "Requesting information...";
        (a = this.completionsByActivityNumber_[a]) && void 0 !== a.expected && void 0 !== a.starts && (c = "Fetching data from app number " + (a.starts + 1) + " of " + a.expected + ".");
        b.innerHTML = "";
        b.appendChild(this.document_.createTextNode(c))
    }
}
;
codepops.ActivityReportPage.prototype.displayModifiedPercentage_ = function(a) {
    var b = this.document_.getElementById("modified-percent-" + a);
    if (b) {
        var c = "&nbsp;";
        (a = this.completionsByActivityNumber_[a]) && void 0 !== a.modified && void 0 !== a.starts && 0 != a.starts && (percent = (a.modified / a.starts * 100).toFixed(2),
        c = percent + "%",
        b.innerHTML = "",
        b.appendChild(this.document_.createTextNode(c)))
    }
}
;
codepops.ActivityReportPage.prototype.updateModifiedProgress_ = function(a) {
    var b = this.document_.getElementById("modified-percent-" + a);
    if (b) {
        var c = "Requesting information...";
        (a = this.completionsByActivityNumber_[a]) && void 0 !== a.expected && void 0 !== a.starts && (c = "Fetching data from app number " + (a.starts + 1) + " of " + a.expected + ".");
        b.innerHTML = "";
        b.appendChild(this.document_.createTextNode(c))
    }
}
;
codepops.ActivityReportPage.prototype.recordAppStart_ = function(a, b) {
    this.completionsByActivityNumber_[a] || (this.completionsByActivityNumber_[a] = {
        starts: 0,
        completed: 0,
        modified: 0,
        expected: 0
    });
    this.completionsByActivityNumber_[a].starts++;
    b == codepops.codeCompareStates.COMPLETE ? this.completionsByActivityNumber_[a].completed++ : b == codepops.codeCompareStates.MODIFIED && this.completionsByActivityNumber_[a].modified++
}
;
codepops.ActivityReportPage.prototype.reset_ = function() {
    var a = this.document_.getElementById("activityNumbersTableBody");
    a && (a.innerHTML = "")
}
;
codepops.ActivityReportPage.prototype.displayMessage_ = function(a) {
    var b = this.document_.getElementById("message-div");
    if (b) {
        b.innerHTML = "";
        var c = this.document_.createElement("p");
        a = this.document_.createTextNode(a);
        c.appendChild(a);
        b.appendChild(c)
    } else
        console.log("cannot find message-div")
}
;
codepops = codepops || {};
codepops.AdminWidget = function(a, b) {
    var c = b || {};
    this.window_ = c.window || window;
    this.document_ = c.document || window.document;
    this.page_ = a;
    this.panel_ = this.document_.createElement("div");
    this.panel_.className = "admin-widget-panel";
    this.document_.body.appendChild(this.panel_);
    this.activityNumberDiv_ = this.document_.createElement("div");
    this.panel_.appendChild(this.activityNumberDiv_);
    this.exportButton_ = this.document_.createElement("div");
    this.exportButton_.className = "button-export";
    this.exportButton_.title = "Export assets for this app.";
    this.exportButton_.onclick = codepops.bind(this.page_.showPrintOutput, this.page_);
    this.panel_.appendChild(this.exportButton_)
}
;
codepops.AdminWidget.prototype.show = function(a) {
    !1 != this.page_.userIsAdmin() && (this.app_ = a,
    this.document_.getElementsByClassName("CodeMirror-code")[0].style.backgroundImage = "url(img/coderuler.png)",
    a.activityNumber ? (this.activityNumberDiv_.style.cursor = "default",
    this.activityNumberDiv_.title = "This is the permanent activity number.",
    this.activityNumberDiv_.innerHTML = a.activityNumber,
    this.activityNumberDiv_.onclick = null) : (this.activityNumberDiv_.style.cursor = "pointer",
    this.activityNumberDiv_.title = "Click to assign a number.",
    this.activityNumberDiv_.innerHTML = "#----",
    this.activityNumberDiv_.onclick = codepops.bind(this.getActivityNumber_, this)),
    this.panel_.style.display = "block")
}
;
codepops.AdminWidget.prototype.hide = function(a) {
    this.panel_.style.display = "none"
}
;
codepops.AdminWidget.prototype.getActivityNumber_ = function() {
    if (confirm($t("Are you sure you want to permanently assign an activity number to this app?"))) {
        this.activityNumberDiv_.innerHTML = "#????";
        var a = codepops.bind(function(a) {
            this.app_.activityNumber = a;
            this.activityNumberDiv_.innerHTML = "#" + a
        }, this);
        this.page_.getDataStore().generateActivityNumber_(a)
    }
}
;
codepops = codepops || {};
codepops.AppDetailsPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.dataStore_ = a.dataStore || new codepops.DataStore;
    this.numChildAppsQueried_ = this.numChildApps_ = 0;
    this.childAppsQueue_ = [];
    this.childApps_ = {};
    this.childAppPaths_ = {};
    this.childAppsDisplayed_ = {};
    (a = this.document_.getElementById("parentAppForm")) && a.addEventListener("submit", codepops.bind(this.loadData_, this));
    (a = codepops.parseQueryString()) && a.appId && (this.appId_ = a.appId,
    this.loadData_())
}
;
codepops.AppDetailsPage.prototype.loadData_ = function(a) {
    this.reset_();
    this.displayMessage_("");
    if (a) {
        a.preventDefault();
        a = this.document_.getElementById("parentAppId");
        if (!a) {
            this.displayMessage_("loadData_ cannot find app id. Ask a dev.");
            return
        }
        if (!a.value) {
            this.displayMessage_("You must input an app number.");
            return
        }
        a = a.value.trim();
        if (Number.isNaN(a)) {
            this.displayMessage_("Input App ID is not a number.");
            return
        }
        this.appId_ = a
    } else if (a = this.document_.getElementById("parentAppId"))
        a.value = this.appId_;
    this.dataStore_.firebase_.child("/stats/activityNumbers/" + this.appId_).once("value", codepops.bind(this.fetchAppData_, this))
}
;
codepops.AppDetailsPage.prototype.fetchAppData_ = function(a) {
    if (a)
        if (a = a.val()) {
            a = a.shortcuts;
            this.numChildApps_ = Object.keys(a).length;
            this.dataStore_.firebase_.child("/activityNumbers/" + this.appId_).once("value", codepops.bind(function(a) {
                if (a = "/" + a.val())
                    this.dataStore_.firebase_.child(a).once("value", codepops.bind(function(a) {
                        if (a = a.val())
                            this.originalParentAppCode_ = a
                    }, this));
                else
                    console.log("Could not find parent app path.")
            }, this));
            for (var b in a)
                this.childAppsQueue_.push(b);
            this.getChildCode_()
        } else
            this.displayMessage_("No data returned for this App ID.");
    else
        this.displayMessage_("No data returned for this App ID.")
}
;
codepops.AppDetailsPage.prototype.getChildCode_ = function() {
    var a = this.childAppsQueue_.pop();
    void 0 === a ? this.isQueryDone_() : (this.dataStore_.firebase_.child("/shortcuts/" + a).once("value", codepops.bind(function(b) {
        this.numChildAppsQueried_++;
        if (b = b.val())
            this.childAppPaths_[a] = b,
            this.dataStore_.firebase_.child(b).once("value", codepops.bind(function(b) {
                if (b = b.val()) {
                    if (this.originalParentAppCode_) {
                        var d = codepops.compareCode(this.originalParentAppCode_.code, b.code);
                        b.completionStatus = d
                    }
                    this.childApps_[a] || (this.childApps_[a] = b);
                    this.isQueryDone_()
                }
            }, this))
    }, this)),
    this.getChildCode_())
}
;
codepops.AppDetailsPage.prototype.isQueryDone_ = function() {
    0 < this.numChildAppsQueried_ && 0 < this.numChildApps_ && this.numChildAppsQueried_ >= this.numChildApps_ && this.displayData_()
}
;
codepops.AppDetailsPage.prototype.displayData_ = function() {
    var a = this.document_.getElementById("childLinksTableBody");
    if (a) {
        var b = Object.keys(this.childApps_), c;
        for (c in this.childApps_)
            this.childAppsDisplayed_[c] || (this.childAppsDisplayed_[c] = !0,
            this.displayChildAppData_(a, c));
        this.displayMessage_("Total number of child apps: " + b.length)
    } else
        this.displayMessage_("Unable to find table body element.")
}
;
codepops.AppDetailsPage.prototype.displayChildAppData_ = function(a, b) {
    var c = this.childApps_[b]
      , d = this.createRunpageUrl_(c)
      , c = c.completionStatus
      , e = a.insertRow()
      , f = e.insertCell()
      , g = this.document_.createElement("a");
    g.href = d;
    g.innerHTML = d;
    g.target = "_blank";
    f.appendChild(g);
    d = e.insertCell();
    f = this.createUserDetailsLink_(b);
    g = this.document_.createElement("a");
    g.href = f;
    g.innerHTML = "User Details Page";
    g.target = "_blank";
    d.appendChild(g);
    e = e.insertCell();
    d = "Incomplete";
    c && (c == codepops.codeCompareStates.COMPLETE ? d = "Complete" : c == codepops.codeCompareStates.MODIFIED && (d = "Modified"));
    e.appendChild(this.document_.createTextNode(d))
}
;
codepops.AppDetailsPage.prototype.reset_ = function() {
    this.originalParentAppCode_ = "";
    this.numChildAppsQueried_ = this.numChildApps_ = 0;
    this.childAppsQueue_ = [];
    this.childApps_ = {};
    this.childAppsDisplayed_ = {};
    this.clearTable_()
}
;
codepops.AppDetailsPage.prototype.clearTable_ = function() {
    var a = this.document_.getElementById("childLinksTableBody");
    a && (a.innerHTML = "")
}
;
codepops.AppDetailsPage.prototype.createRunpageUrl_ = function(a) {
    a = a.shortcut;
    if (!a)
        return "No shortcut found. Unable to create Runpage URL.";
    var b = "https://bitsbox.com"
      , c = this.window_.location.hostname;
    c && -1 < c.toLowerCase().indexOf("bitsboxstaging") && (b = "https://bitsboxstaging.firebaseapp.com");
    return b + "/run.html?" + a
}
;
codepops.AppDetailsPage.prototype.createUserDetailsLink_ = function(a) {
    a = this.childAppPaths_[a];
    if (!a)
        return "App path not found. Unable to create User Details page URL.";
    a = this.getUserId_(a);
    var b = ""
      , c = this.window_.location.hostname;
    c && -1 < c.toLowerCase().indexOf("bitsboxstaging") && (b = "https://bitsboxstaging.firebaseapp.com");
    return b + "/userdetails.html?userId=" + a
}
;
codepops.AppDetailsPage.prototype.getUserId_ = function(a) {
    var b = a.indexOf("/") + 1
      , c = a.indexOf("/", b);
    return a.substring(b, c)
}
;
codepops.AppDetailsPage.prototype.displayMessage_ = function(a) {
    var b = this.document_.getElementById("message-div");
    if (b) {
        b.innerHTML = "";
        var c = this.document_.createElement("p");
        a = this.document_.createTextNode(a);
        c.appendChild(a);
        b.appendChild(c)
    } else
        console.log("cannot find message-div")
}
;
codepops = codepops || {};
codepops.Badge = {
    oneapp: {
        path: "/badges/oneapp.png",
        title: "First App!",
        description: "Great job, [DISPLAYNAME]! You made your first app.",
        coins: 10
    },
    twoapps: {
        path: "/badges/twoapps.png",
        title: "Two Apps!",
        description: "Another great app, [DISPLAYNAME]. Keep it up!",
        coins: 10
    },
    threeapps: {
        path: "/badges/threeapps.png",
        title: "Three Apps!",
        description: "Three's the bee's knees!",
        coins: 10
    },
    fourapps: {
        path: "/badges/fourapps.png",
        title: "Four Apps!",
        description: "[DISPLAYNAME] made four apps? Super!",
        coins: 10
    },
    fiveapps: {
        path: "/badges/fiveapps.png",
        title: "Five Apps!",
        description: "Got to five! [DISPLAYNAME] is an app pro!",
        coins: 10
    },
    tenapps: {
        path: "/badges/tenapps.png",
        title: "Ten Apps!",
        description: "Just yesterday I remember when you made five. &lt;sniff&gt;",
        coins: 10
    },
    fifteenapps: {
        path: "/badges/fifteenapps.png",
        title: "Fifteen Apps!",
        description: "Fifteen is a big milestone, [DISPLAYNAME].",
        coins: 10
    },
    twentyapps: {
        path: "/badges/twentyapps.png",
        title: "Twenty Apps!",
        description: "TWENTY?! I can't believe it.",
        coins: 10
    }
};
String.prototype.startsWith || (String.prototype.startsWith = function(a) {
    return 0 === this.lastIndexOf(a, 0)
}
);
codepops = codepops || {};
codepops.ChildAppMinutesPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.dataStore_ = a.dataStore || new codepops.DataStore;
    this.queryFirebase_()
}
;
codepops.ChildAppMinutesPage.prototype.queryFirebase_ = function() {
    this.displayMessage_("Fetching data from Firebase.");
    this.dataStore_.firebase_.child("/stats/activityNumbers").once("value", codepops.bind(this.processData_, this))
}
;
codepops.ChildAppMinutesPage.prototype.processData_ = function(a) {
    if (a) {
        a = a.val();
        var b = [], c;
        for (c in a) {
            var d = a[c]
              , e = d.allTime
              , f = void 0;
            e && e.minutesUsedByChildApps && (f = e.minutesUsedByChildApps);
            var g = d.minutesUsedByChildApps
              , e = void 0;
            g && g.byDate && (e = g.byDate);
            g = Object.keys(d.shortcuts);
            d = void 0;
            g.length && (d = g.length);
            if (f && e && d)
                for (var h in e)
                    f = e[h],
                    g = [],
                    g.push(c),
                    g.push(f),
                    g.push(d),
                    g.push(h),
                    b.push(g.join(","));
            else
                this.displayMessage_("Not enough info for appId : ", c)
        }
        this.displayData_(b)
    } else
        this.displayMessage_("No data returned from Firebase.")
}
;
codepops.ChildAppMinutesPage.prototype.displayData_ = function(a) {
    this.displayMessage_("Query done; displaying data.");
    var b = this.document_.getElementById("csv-container");
    b ? (b.value = a.join("\n"),
    b.focus(),
    b.select()) : console.log("Could not find csv-container textarea element.")
}
;
codepops.ChildAppMinutesPage.prototype.displayMessage_ = function(a) {
    var b = this.document_.getElementById("message-div");
    if (b) {
        b.innerHTML = "";
        var c = this.document_.createElement("p");
        a = this.document_.createTextNode(a);
        c.appendChild(a);
        b.appendChild(c)
    } else
        console.log("cannot find message-div")
}
;
/*
 Copyright 2014 Scott Lininger.
 All rights reserved.
*/
codepops = codepops || {};
codepops.colors = [[222, 32, 44], [241, 90, 41], [247, 147, 29], [0, 147, 68], [10, 78, 155], [103, 45, 145], [158, 31, 99], [222, 32, 44]];
codepops.customAssetCommands = ["stamp", "fill", "change"];
codepops.customAssetTypes = ["stamp", "fill"];
Object.entries || (Object.entries = function(a) {
    for (var b = Object.keys(a), c = b.length, d = Array(c); c--; )
        d[c] = [b[c], a[b[c]]];
    return d
}
);
(function(a) {
    a.forEach(function(a) {
        a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                null !== this.parentNode && this.parentNode.removeChild(this)
            }
        })
    })
}
)([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
function ReplaceWithPolyfill() {
    var a = this.parentNode, b = arguments.length, c;
    if (a)
        for (b || a.removeChild(this); b--; )
            c = arguments[b],
            "object" !== typeof c ? c = this.ownerDocument.createTextNode(c) : c.parentNode && c.parentNode.removeChild(c),
            b ? a.insertBefore(c, this.nextSibling) : a.replaceChild(c, this)
}
Element.prototype.replaceWith || (Element.prototype.replaceWith = ReplaceWithPolyfill);
CharacterData.prototype.replaceWith || (CharacterData.prototype.replaceWith = ReplaceWithPolyfill);
DocumentType.prototype.replaceWith || (DocumentType.prototype.replaceWith = ReplaceWithPolyfill);
String.prototype.includes || (String.prototype.includes = function(a, b) {
    if (a instanceof RegExp)
        throw TypeError("first argument must not be a RegExp");
    void 0 === b && (b = 0);
    return -1 !== this.indexOf(a, b)
}
);
codepops.bind = function(a, b, c) {
    var d = a.boundArgs_;
    if (2 < arguments.length) {
        var e = Array.prototype.slice.call(arguments, 2);
        d && e.unshift.apply(e, d);
        d = e
    }
    b = a.boundSelf_ || b;
    a = a.boundFn_ || a;
    var f = b || top
      , e = d ? function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, d);
        return a.apply(f, b)
    }
    : function() {
        return a.apply(f, arguments)
    }
    ;
    e.boundArgs_ = d;
    e.boundSelf_ = b;
    e.boundFn_ = a;
    return e
}
;
codepops.clone = function(a) {
    return JSON.parse(JSON.stringify(a))
}
;
codepops.toTitleCase = function(a) {
    return a.replace(/\w\S*/g, function(a) {
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
    })
}
;
codepops.trackEvent = function(a, b, c) {
    void 0 !== window._gaq && window._gaq.push(["_trackEvent", a, b, c])
}
;
codepops.lerp = function(a, b, c) {
    return (1 - c) * a + c * b
}
;
codepops.translate = function(a) {
    return (((c123 || {}).strings || {}).ui || {})[a] || a
}
;
$t = codepops.translate;
codepops.localizeHtml = function(a) {
    if ("en" != codepops.language) {
        a = a.querySelectorAll("l10n, [l10n]");
        for (var b = 0; b < a.length; b++) {
            var c = a[b].innerHTML || ""
              , d = $t(c);
            d != c && (a[b].innerHTML = d)
        }
    }
}
;
codepops.randomColor = function() {
    var a = Math.floor(7 * Math.random())
      , a = codepops.colors[a];
    return "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")"
}
;
codepops.dice = function(a, b) {
    var c = 1
      , d = a;
    "number" === typeof b ? (c = Math.min(a, b),
    d = Math.max(a, b)) : 0 > a && (c = Math.min(a, -1),
    d = Math.max(a, -1));
    d = Math.floor((d - c + 1) * Math.random());
    return c + d
}
;
codepops.randomName = function() {
    var a = [$t("big coder")]
      , b = Math.floor(Math.random() * a.length);
    return a[b]
}
;
codepops.incrementDay = function(a, b) {
    var c = b || 1
      , d = 6E4 * a.getTimezoneOffset()
      , e = a.getTime()
      , f = new Date
      , e = e + 864E5 * c;
    f.setTime(e);
    c = 6E4 * f.getTimezoneOffset();
    d !== c && f.setTime(e + (c - d));
    return f
}
;
codepops.dateToString = function(a) {
    return a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate()
}
;
codepops.stringToDate = function(a) {
    return new Date(a.replace("-", " "))
}
;
codepops.setContent = function(a, b) {
    var c = document.getElementById(a);
    c && (c.innerHTML = b)
}
;
codepops.getContent = function(a) {
    if (a = document.getElementById(a)) {
        if (a.value)
            return a.value;
        if (a.innerHTML)
            return a.innerHTML
    }
    return null
}
;
codepops.toggleClass = function(a, b, c) {
    if (a = document.getElementById(a))
        a.className = a.className === b ? c : b
}
;
codepops.replaceFromTemplate = function(a, b) {
    return a.replace(/\{\{(\w+)\}\}/g, function(a, d) {
        return b[d] ? b[d] : "{{" + d + "}}"
    })
}
;
codepops.codeCompareStates = {
    INCOMPLETE: 0,
    COMPLETE: 1,
    MODIFIED: 2
};
codepops.compareCode = function(a, b) {
    for (var c = b.trim().split(/\n+/g), d = a.trim().split(/\n+/g), e = 0, f = 0; f < c.length; f++) {
        var g = c[f]
          , h = d[f];
        void 0 === g && void 0 !== h || void 0 !== g && void 0 === h || codepops.doesCodeContain(g, h) && e++
    }
    return e >= d.length && c.length >= 1.1 * d.length ? codepops.codeCompareStates.MODIFIED : e >= 0.9 * d.length ? codepops.codeCompareStates.COMPLETE : codepops.codeCompareStates.INCOMPLETE
}
;
codepops.doesCodeContain = function(a, b) {
    var c, d = b, e = /("(\\"|[^"])+")/g;
    c = a.replace(e, '""');
    d = d.replace(e, '""');
    e = /('(\\'|[^'])+')/g;
    c = c.replace(e, "''");
    d = d.replace(e, "''");
    c = c.replace(/"/g, "'");
    d = d.replace(/"/g, "'");
    c = c.replace(/\s/g, "");
    d = d.replace(/\s/g, "");
    c = c.replace(/[\d.]+/g, "1");
    d = d.replace(/[\d.]+/g, "1");
    c = c.replace(/;/g, "");
    d = d.replace(/;/g, "");
    return "" === d && "" !== c ? !1 : (0 === d.indexOf("//") || 0 === d.indexOf("/*")) && "" === c || -1 < c.indexOf(d) ? !0 : !1
}
;
codepops.parseQueryString = function() {
    var a = {};
    location.search.slice(1).split("&").forEach(function(b) {
        b = b.split("=");
        a[b[0]] = decodeURIComponent(b[1] || "")
    });
    return JSON.parse(JSON.stringify(a))
}
;
codepops.showDiv = function(a) {
    for (var b = document.getElementsByTagName("div"), c = 0; c < b.length; c++)
        "new-boxes-2" === b[c].className && b[c].id === a && (b[c].style.display = "block" === b[c].style.display ? "none" : "block")
}
;
codepops.cleanAssetName = function(a) {
    a = ("" + a).toLowerCase().replace(/\s/gi, "").replace(/['".,/#!$%^&*;:{}=`~()]/gi, "");
    return codepops.removeOneFromAssetName(a)
}
;
codepops.removeOneFromAssetName = function(a) {
    if (0 === a.indexOf("@"))
        return a;
    a = "" + a;
    return a.lastIndexOf("1") === a.length - 1 && c123.stampList[a] ? a : a.replace(/([a-zA-Z]+)1$/, "$1")
}
;
codepops.getCustomAssetPath = function(a, b, c) {
    0 === b.indexOf("@") && (b = b.substring(1));
    if (0 > a.indexOf("s") || a.indexOf("s") !== a.length)
        a += "s";
    if (c && c[a] && c[a][b] && c[a][b].url)
        return c[a][b].url
}
;
codepops.isImageAllWhite = function(a, b) {
    for (var c = a.width, d = a.height, e = a.getContext("2d").getImageData(0, 0, c, d), f = 0, g = c * d, h = !1, l = !1, m = !1, n = !1, p = !1, s = !0, q = 0; q < d; q++)
        for (var r = 0; r < c; r++) {
            var n = this.getPixel(e, r, q, c)
              , u = 240 <= n.r
              , v = 240 <= n.g
              , A = 240 <= n.b
              , z = n.a;
            0 === z || h ? 0 !== z && l && (u && v && A || m || (m = !0)) : (h = !0,
            u && v && A && (l = !0));
            n = u && v && A || 0 === z ? !0 : !1;
            u && v && A ? f += 1 : 0 === z && (g -= 1)
        }
    m && n && (p = !0);
    g === c * d && (s = !1);
    (0.9 <= f / g || p) && s ? b(!0) : b(!1)
}
;
codepops.getPixel = function(a, b, c, d) {
    b = 4 * (c * d + b);
    c = {};
    c.r = a.data[b + 0];
    c.g = a.data[b + 1];
    c.b = a.data[b + 2];
    c.a = a.data[b + 3];
    return c
}
;
codepops.friendlyBackendError_ = function(a) {
    if (a && a.code) {
        if ("INVALID_EMAIL" === a.code || "auth/invalid-email" === a.code)
            return $t("Oops! Did you make a typo in your email?");
        if ("INVALID_USER" === a.code || "auth/user-not-found" === a.code)
            return $t('<small><b>Uh oh! That doesn\'t seem to be a coding account.</b><ul><li>Did you <span onclick="$_page.loginWithGoogle()" style="text-decoration: underline; cursor: pointer;">sign in with a Google account</span> when you started coding?</li><li>Head to your <a href="https://subscribe.bitsbox.com/customer/login" target="_blank" style="color:black">store account</a> if you want to manage your subscription.</li><li>Questions? Feel free to contact help@bitsbox.com.</li></ul></small>');
        if ("INVALID_PASSWORD" === a.code || "auth/wrong-password" === a.code)
            return $t("Sorry, that username or password is incorrect.");
        if ("auth/requires-recent-login" === a.code)
            return $t("Oops. We need you to logout and log back in before you can do that.");
        if ("auth/email-already-in-use" === a.code)
            return $t('<p><strong>Oops. It looks like we already have an account under this email address!</strong></p><a href="#">Click here to login instead.</a>')
    }
    return a.message ? (console.error(a.message),
    a.message.replace(/FirebaseSimpleLogin:/g, "")) : a
}
;
codepops.combineHashes = function(a, b) {
    for (var c = Object.keys(b), d = 0; d < c.length; d++) {
        var e = c[d];
        a[e] = b[e]
    }
    return a
}
;
codepops.encodeAsFirebaseKey = function(a) {
    return a.replace(/%/g, "%25").replace(/\./g, "%2E").replace(/#/g, "%23").replace(/\$/g, "%24").replace(/\//g, "%2F").replace(/\[/g, "%5B").replace(/\]/g, "%5D").replace(/\s/g, "+")
}
;
codepops.randomString = function(a) {
    for (var b = "", c = 0; c < a; c++)
        b += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(36 * Math.random()));
    return b
}
;
codepops.DashboardPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.dataStore_ = a.dataStore || new codepops.DataStore;
    a = codepops.bind(this.onLiveStats, this);
    this.window_.localStorage.dashboardLastGenerated ? this.mainAppData_ = !0 : this.dataStore_.setLiveStatCallback(a);
    this.accountWalkerFirebase_ = firebase.initializeApp({
        apiKey: "AIzaSyA-l6LdND_H3PBTKlqFgrcsPdfCoKO-CFs",
        authDomain: "bitsboxstats.firebaseAPP.com",
        databaseURL: "https://bitsboxstats.firebaseIO.com",
        storageBucket: "bitsboxstats.firebaseIO.com"
    }, "stats").database().ref();
    a = codepops.bind(this.onAccountWalkerData, this);
    this.accountWalkerFirebase_.child("prod").once("value", a)
}
;
codepops.DashboardPage.prototype.onLiveStats = function(a) {
    this.mainAppData_ = a;
    this.fillCells_()
}
;
codepops.DashboardPage.prototype.onAccountWalkerData = function(a) {
    a = this.accountWalkerData_ = a.val();
    this.queueTimeline("gender-app-count-chart", {
        Boys: {
            data: a.appsCreated.BOY.all
        },
        Girls: {
            data: a.appsCreated.GIRL.all
        },
        "?": {
            data: a.appsCreated.UNKNOWN.all
        }
    }, {
        colors: ["#67087b", "#e65525", "gray"],
        finalDayPieChartDivId: "gender-app-count-pie",
        fillInMissingDays: !0
    });
    this.queueTimeline("gender-line-count-chart", {
        Boys: {
            data: a.lineCount.BOY.all
        },
        Girls: {
            data: a.lineCount.GIRL.all
        },
        "?": {
            data: a.lineCount.UNKNOWN.all
        }
    }, {
        colors: ["#67087b", "#e65525", "gray"],
        finalDayPieChartDivId: "gender-line-count-pie",
        fillInMissingDays: !0
    });
    this.queueTimeline("gender-subscriber-count-chart", {
        Boys: {
            data: a.subscriberCount.BOY.all
        },
        Girls: {
            data: a.subscriberCount.GIRL.all
        },
        "?": {
            data: a.subscriberCount.UNKNOWN.all
        }
    }, {
        colors: ["#67087b", "#e65525", "gray"],
        finalDayPieChartDivId: "gender-subscriber-count-pie",
        fillInMissingDays: !0
    });
    this.queueTimeline("gender-user-count-chart", {
        Boys: {
            data: a.userCount.BOY.all
        },
        Girls: {
            data: a.userCount.GIRL.all
        },
        "?": {
            data: a.userCount.UNKNOWN.all
        }
    }, {
        colors: ["#67087b", "#e65525", "gray"],
        finalDayPieChartDivId: "gender-user-count-pie",
        fillInMissingDays: !0
    })
}
;
codepops.DashboardPage.prototype.fillCells_ = function() {
    for (var a = document.getElementsByClassName("live-data"), b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.id) {
            var d = c.id
              , e = this.getDataFromPath_(d, this.mainAppData_);
            c.innerHTML = this.formatNumberWithCommas(e);
            this.window_.localStorage["renderDivValue_" + d] = c.innerHTML
        }
    }
}
;
codepops.DashboardPage.prototype.googleIsReady = function() {
    if (this.mainAppData_) {
        var a = this.window_.localStorage.dashboardLastGenerated;
        if (a) {
            console.log("Restoring from localStorage cache...");
            a = Math.floor((new Date - new Date(a)) / 36E5);
            this.document_.getElementById("last-generated").innerHTML = a + " hours ago";
            for (var b in this.window_.localStorage)
                if (0 == b.indexOf("renderChartFromDataLines_"))
                    a = JSON.parse(this.window_.localStorage[b]),
                    this.renderChartFromDataLines_(a.divId, a.dataLines, a.settings, !0),
                    console.log("Restored chart:", b);
                else if (0 == b.indexOf("renderPieChartFromDataLines_"))
                    a = JSON.parse(this.window_.localStorage[b]),
                    this.renderPieChartFromDataLines_(a.divId, a.dataLines, a.settings, !0),
                    console.log("Restored pie chart:", b);
                else if (0 == b.indexOf("renderBarChartFromDataLines_"))
                    a = JSON.parse(this.window_.localStorage[b]),
                    this.renderBarChartFromDataLines_(a.divId, a.dataLines, !0),
                    console.log("Restored bar chart:", b);
                else if (0 == b.indexOf("renderDivValue_")) {
                    var a = b.split("_")[1]
                      , c = this.document_.getElementById(a);
                    c && (c.innerHTML = this.window_.localStorage[b]);
                    console.log("Restored div value:", a, this.window_.localStorage[b])
                }
        } else
            this.queueTimeline("tour-usage-chart", {
                "All Time": {
                    data: "stats.anonymous.minutesUsed.byDate",
                    sum: !0
                },
                "Each Day": {
                    data: "stats.anonymous.minutesUsed.byDate"
                }
            }),
            this.queueTimeline("tour-average-chart", {
                "Average Minutes": {
                    dataToAverage: "stats.anonymous.minutesUsed.byUser",
                    elementIdForTodaysValue: "tour-average-today"
                }
            }),
            this.queueTimeline("tour-count-chart", {
                "All Time": {
                    data: "stats.anonymous.toursStarted.byDate",
                    sum: !0
                },
                "Each Day": {
                    data: "stats.anonymous.toursStarted.byDate"
                }
            }),
            this.queueTimeline("tour-conversion-chart", {
                "%": {
                    percentDividend: "stats.anonymous.toursConverted.byDate",
                    percentDivisor: "stats.anonymous.toursStarted.byDate",
                    elementIdForTodaysPercentage: "tour-conversion-average-today"
                }
            }),
            this.queueTimeline("registered-usage-chart", {
                "All Time": {
                    data: "stats.registered.minutesUsed.byDate",
                    sum: !0
                },
                "Each Day": {
                    data: "stats.registered.minutesUsed.byDate"
                }
            }),
            this.queueTimeline("registered-average-chart", {
                "Average Minutes": {
                    dataToAverage: "stats.registered.minutesUsed.byUser",
                    elementIdForTodaysValue: "registered-average-today"
                }
            }),
            this.queueTimeline("registered-count-chart", {
                "All Time": {
                    data: "stats.registered.kidsCreated.byDate",
                    sum: !0
                },
                "New Each Day": {
                    data: "stats.registered.kidsCreated.byDate"
                }
            }),
            this.queueTimeline("gender-usage-chart", {
                Boys: {
                    data: "stats.registered.minutesUsed.byGender.boy",
                    sum: !0
                },
                Girls: {
                    data: "stats.registered.minutesUsed.byGender.girl",
                    sum: !0
                },
                "?": {
                    data: "stats.registered.minutesUsed.byGender.unknown",
                    sum: !0
                }
            }, {
                colors: ["#67087b", "#e65525", "gray"],
                finalDayPieChartDivId: "gender-usage-pie"
            }),
            this.queueTimeline("age-usage-chart", {
                4: {
                    data: "stats.registered.minutesUsed.byAge.4",
                    sum: !0
                },
                5: {
                    data: "stats.registered.minutesUsed.byAge.5",
                    sum: !0
                },
                6: {
                    data: "stats.registered.minutesUsed.byAge.6",
                    sum: !0
                },
                7: {
                    data: "stats.registered.minutesUsed.byAge.7",
                    sum: !0
                },
                8: {
                    data: "stats.registered.minutesUsed.byAge.8",
                    sum: !0
                },
                9: {
                    data: "stats.registered.minutesUsed.byAge.9",
                    sum: !0
                },
                10: {
                    data: "stats.registered.minutesUsed.byAge.10",
                    sum: !0
                },
                11: {
                    data: "stats.registered.minutesUsed.byAge.11",
                    sum: !0
                },
                12: {
                    data: "stats.registered.minutesUsed.byAge.12",
                    sum: !0
                },
                13: {
                    data: "stats.registered.minutesUsed.byAge.13+",
                    sum: !0
                }
            }, {
                colors: "rgb(222, 32, 44);rgb(241, 90, 41);rgb(247, 147, 29);rgb(0, 147, 68);rgb(10, 78, 155);rgb(103, 45, 145);rgb(158, 31, 99);rgb(222, 32, 44)".split(";"),
                finalDayPieChartDivId: "age-usage-pie"
            }),
            this.drawRetentionChart_(),
            this.drawNextTimeline()
    } else
        this.window_.setTimeout(codepops.bind(this.googleIsReady, this), 500)
}
;
codepops.DashboardPage.prototype.queueTimeline = function(a, b, c) {
    this.queue_ = this.queue_ || [];
    this.queue_.push({
        divId: a,
        lines: b,
        settings: c
    })
}
;
codepops.DashboardPage.prototype.formatNumberWithCommas = function(a) {
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
;
codepops.DashboardPage.prototype.drawNextTimeline = function() {
    this.queue_ && this.queue_.length ? setTimeout(codepops.bind(function() {
        var a = this.queue_.pop();
        this.drawTimeline(a.divId, a.lines, a.settings)
    }, this), 0) : page.switchViews()
}
;
codepops.DashboardPage.prototype.drawTimeline = function(a, b, c) {
    var d = c || {};
    if (b.dataLines)
        this.renderChartFromDataLines_(a, b.dataLines, c);
    else {
        c = [["Day"]];
        var e = c[0], f = {}, g;
        for (g in b)
            e.push(g);
        for (var h = new Date("August 1 2014"), l = new Date, m = codepops.incrementDay(l), l = codepops.dateToString(l), n = {}; h.toDateString() != m.toDateString(); ) {
            var p = []
              , s = codepops.dateToString(h);
            p.push(s);
            for (g in b) {
                var q = b[g] || {}
                  , r = q.data
                  , u = this.getDataFromPath_(q.dataToAverage, this.mainAppData_);
                if (u) {
                    var r = {}, v = 0, A = 0, z;
                    for (z in u) {
                        var B = u[z] || {}, C;
                        for (C in B) {
                            var w = B[C];
                            void 0 !== w[s] && (v++,
                            w = w[s],
                            A += w)
                        }
                    }
                    r[s] = A / v
                }
                u = this.getDataFromPath_(q.percentDividend, this.mainAppData_);
                v = this.getDataFromPath_(q.percentDivisor, this.mainAppData_);
                if (u && v)
                    for (z in r = {},
                    v)
                        A = u[s] || {},
                        B = v[s] || {},
                        r[s] = 0 == B ? 0 : Math.round(A / B * 1E3) / 10;
                r = this.getDataFromPath_(r, this.mainAppData_);
                w = r[s] || 0;
                !0 == d.fillInMissingDays && 0 === w && (w = n[g] || 0);
                q.countAnyValueAsOne && 0 != w && (w = 1);
                f[g] = f[g] || 0;
                f[g] += w;
                q.sum && (w = f[g]);
                w = this.roundDashboardNumber_(w);
                p.push(w);
                n[g] = w;
                q.elementIdForTodaysValue && s == l && (r = this.document_.getElementById(q.elementIdForTodaysValue)) && (r.innerHTML = this.formatNumberWithCommas(w),
                this.window_.localStorage["renderDivValue_" + r.id] = r.innerHTML);
                q.elementIdForTodaysPercentage && s == l && (r = this.document_.getElementById(q.elementIdForTodaysPercentage)) && (r.innerHTML = w,
                this.window_.localStorage["renderDivValue_" + r.id] = r.innerHTML)
            }
            c.push(p);
            h = codepops.incrementDay(h)
        }
        d.finalDayPieChartDivId && this.drawPieChart_(d.finalDayPieChartDivId, e, p, d);
        this.renderChartFromDataLines_(a, c, d)
    }
}
;
codepops.DashboardPage.prototype.renderChartFromDataLines_ = function(a, b, c, d) {
    var e = c || {};
    c = google.visualization.arrayToDataTable(b);
    !0 !== d && (this.window_.localStorage["renderChartFromDataLines_" + a] = JSON.stringify({
        divId: a,
        dataLines: b,
        settings: e
    }),
    this.window_.localStorage.dashboardLastGenerated = (new Date).toString());
    b = {
        fontName: "Arial",
        fontSize: 10,
        lineWidth: 3,
        backgroundColor: "transparent",
        padding: 0,
        colors: e.colors || ["black", "#999"],
        hAxis: {
            slantedTextAngle: 45,
            slantedText: !0,
            allowContainerBoundaryTextCutoff: !1
        },
        vAxis: {
            gridlines: {
                count: 7
            }
        }
    };
    (d = this.document_.getElementById(a)) ? (new google.visualization.LineChart(d)).draw(c, b) : console.log("Could not render timeline. No div with id of " + a);
    this.drawNextTimeline()
}
;
codepops.DashboardPage.prototype.getDataFromPath_ = function(a, b) {
    if ("string" == typeof a) {
        children = a.split(".");
        for (var c = b, d = 1; d < children.length; d++)
            c = c[children[d]] || {};
        return c
    }
    return a
}
;
codepops.DashboardPage.prototype.roundDashboardNumber_ = function(a) {
    return Math.round(100 * a) / 100
}
;
codepops.DashboardPage.prototype.switchViews = function(a) {
    a = this.document_.getElementById("radio-panel");
    a = a.getElementsByTagName("input");
    for (var b = 0; b < a.length; b++) {
        var c = a[b]
          , d = this.document_.getElementById(c.value);
        d && (d.style.display = c.checked ? "block" : "none")
    }
}
;
codepops.DashboardPage.prototype.drawRetentionChart_ = function() {
    var a = this.getDataFromPath_("stats.registered.allTime.kidsCreated", this.mainAppData_), b = this.getDataFromPath_("stats.registered.minutesUsed.byUser", this.mainAppData_), c = {}, d = 1, e;
    for (e in b) {
        var f = b[e], g;
        for (g in f) {
            for (var h = Object.keys(f[g]).length, l = h; 1 <= l; l--)
                c[l] = (c[l] || 0) + 1;
            h > d && (d = h)
        }
    }
    c[1] = a;
    b = [["Day", "Kids"]];
    e = ["0th", "1st", "2nd", "3rd"];
    for (f = 1; f <= d; f++)
        g = (e[f] || f + "th") + " Day",
        h = l = c[f],
        l = this.roundDashboardNumber_(l / a * 100),
        g += " (" + l + "%)",
        2 == f && (this.window_.localStorage["renderDivValue_registered-retension-all-time-percent"] = l,
        this.document_.getElementById("registered-retension-all-time-percent").innerHTML = l),
        b.push([g, h]);
    this.renderBarChartFromDataLines_("registered-retention-chart", b)
}
;
codepops.DashboardPage.prototype.drawPieChart_ = function(a, b, c, d) {
    console.log(b);
    console.log(c);
    var e = [["Label", "Value"], ["Girls", 216], ["Unknown", 115], ["Boys", 578]];
    if (b && c)
        for (var e = [], f = 0; f < b.length; f++)
            e.push([b[f], c[f]]);
    this.renderPieChartFromDataLines_(a, e, d)
}
;
codepops.DashboardPage.prototype.renderPieChartFromDataLines_ = function(a, b, c, d) {
    var e = c || {};
    google.visualization.arrayToDataTable(b);
    if (!0 !== d) {
        var f;
        this.window_.localStorage["renderPieChartFromDataLines_" + a] = JSON.stringify({
            divId: a,
            dataLines: b,
            settings: e
        })
    }
    b = google.visualization.arrayToDataTable(b);
    e = {
        title: "",
        backgroundColor: "transparent",
        padding: 0,
        colors: ["#e65525", "gray", "#67087b"],
        legend: "none"
    };
    if (c)
        for (f in c)
            e[f] = c[f];
    (new google.visualization.PieChart(document.getElementById(a))).draw(b, e)
}
;
codepops.DashboardPage.prototype.renderBarChartFromDataLines_ = function(a, b, c) {
    !0 !== c && (this.window_.localStorage["renderBarChartFromDataLines_" + a] = JSON.stringify({
        divId: a,
        dataLines: b
    }));
    b = google.visualization.arrayToDataTable(b);
    (new google.visualization.BarChart(this.document_.getElementById(a))).draw(b, {
        fontName: "Arial",
        fontSize: 10,
        lineWidth: 3,
        backgroundColor: "transparent",
        padding: 0,
        orientation: "horizontal",
        colors: ["black", "#999"],
        hAxis: {
            slantedTextAngle: 45,
            slantedText: !0,
            allowContainerBoundaryTextCutoff: !1
        },
        vAxis: {
            gridlines: {
                count: 7
            }
        }
    })
}
;
codepops.DashboardPage.prototype.refresh = function() {
    this.window_.localStorage.clear();
    this.window_.location.reload()
}
;
codepops = codepops || {};
codepops.DataStore = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.firebaseConfigs_ = {
        prod: {
            apiKey: "AIzaSyD6xDBwOojKewgo-GlBSz3UmJOmRM7XDEU",
            authDomain: "bitsbox.firebaseapp.com",
            databaseURL: "https://bitsbox.firebaseio.com",
            projectId: "firebase-bitsbox",
            storageBucket: "bitsbox-custom-assets",
            messagingSenderId: "987467626401",
            functionsUrl: "https://us-central1-firebase-bitsboxprod.cloudfunctions.net"
        },
        staging: {
            apiKey: "AIzaSyDLopq_bvt3vIaJalGRowQM2eANBTXP5yM",
            authDomain: "bitsboxstaging.firebaseapp.com",
            databaseURL: "https://bitsboxstaging.firebaseio.com",
            projectId: "bitsboxstaging",
            storageBucket: "bitsboxstaging-custom-assets",
            messagingSenderId: "592712701129",
            functionsUrl: "https://us-central1-bitsboxstaging.cloudfunctions.net"
        },
        "prod-copy": {
            apiKey: "AIzaSyAGdW2BAhQpkBg_eNZvBxazGB3sPMtXHcQ",
            authDomain: "bitsbox-prod-copy.firebaseapp.com",
            databaseURL: "https://bitsbox-prod-copy.firebaseio.com",
            projectId: "bitsbox-prod-copy",
            storageBucket: "bitsbox-prod-copy.appspot.com",
            messagingSenderId: "317340905917",
            functionsUrl: "https://us-central1-bitsbox-prod-copy.cloudfunctions.net"
        },
        squla: {
            apiKey: "AIzaSyCHFHOVDJwE-Dc7iOz8R3FdxBiTsNlHaoM",
            authDomain: "bitsbox-squla.firebaseapp.com",
            databaseURL: "https://bitsbox-squla.firebaseio.com",
            projectId: "bitsbox-squla",
            storageBucket: "bitsbox-squla.appspot.com",
            messagingSenderId: "300065076496",
            functionsUrl: "https://us-central1-bitsbox-squla.cloudfunctions.net"
        },
        ali: {
            apiKey: "AIzaSyCYVIcB2rm84bwBTKHm-xKrIuZnNo6CBKw",
            authDomain: "bitsbox-ali.firebaseapp.com",
            databaseURL: "https://bitsbox-ali.firebaseio.com",
            projectId: "bitsbox-ali",
            storageBucket: "bitsbox-ali.appspot.com",
            messagingSenderId: "571289385729",
            functionsUrl: "https://us-central1-bitsbox-ali.cloudfunctions.net"
        },
        alistaging: {
            apiKey: "AIzaSyApdN-sOdC_fcpOvFmFjSpA0DtJgV-j50g",
            authDomain: "bitsbox-alistaging.firebaseapp.com",
            databaseURL: "https://bitsbox-alistaging.firebaseio.com",
            projectId: "bitsbox-alistaging",
            storageBucket: "bitsbox-alistaging.appspot.com",
            messagingSenderId: "597147840840",
            functionsUrl: "https://us-central1-bitsbox-alistaging.cloudfunctions.net"
        },
        "local-host": {
            functionsUrl: "http://localhost:5001/bitsboxstaging/us-central1"
        }
    };
    this.storageBuckets_ = {
        prod: {
            customAssets: "bitsbox-custom-assets",
            appIcons: "bitsbox-app-icons"
        },
        staging: {
            customAssets: "bitsboxstaging-custom-assets",
            appIcons: "bitsboxstaging-app-icons"
        },
        "prod-copy": {
            customAssets: "bitsbox-prod-copy.appspot.com"
        },
        squla: {
            customAssets: "bitsbox-squla-custom-assets",
            appIcons: "bitsbox-squla-app-icons"
        },
        ali: {
            appIcons: "bitsbox-ali-app-icons"
        },
        alistaging: {
            appIcons: "bitsbox-alistaging-app-icons"
        }
    };
    this.currentFirebaseUrl_ = this.firebaseConfigs_.prod.databaseUrl;
    this.firebase_ = a.firebase || this.openFirebase_();
    this.currentUser_ = this.firebaseAuth_ = null;
    this.currentKidId_ = "kid0";
    this.currentPreferences_ = {};
    this.onLoginSuccessCallback_ = function() {}
    ;
    this.onLoginFailureCallback_ = function() {}
    ;
    this.grownupAccountCredential_ = "";
    this.missingAssetsAlreadyTracked_ = {};
    this.allowableAssetTypes_ = ["stamp", "fill", "sound", "song", "color"];
    this.customImageTypes_ = ["stamps", "fills", "stamp_thumbs", "fill_thumbs"];
    this.assetTypeCollections_ = {
        stamp: c123.stampList,
        fill: c123.pictures,
        sound: c123.sounds,
        song: c123.songs,
        color: c123.colors
    };
    this.appIconTypes_ = ["app_icon", "share_icon"]
}
;
codepops.DataStore.prototype.getFirebaseUrl_ = function() {
    return this.currentFirebaseUrl_
}
;
codepops.DataStore.prototype.generateFirebaseConfig_ = function() {
    var a = "prod"
      , b = this.window_.location.hostname
      , c = this.window_.location.href;
    if (b) {
        var d = new RegExp(/10\.\d+\.\d+\.\d+/)
          , e = -1 < c.toLowerCase().indexOf("useproddata")
          , f = -1 < c.toLowerCase().indexOf("useprodcopy")
          , g = -1 < c.toLowerCase().indexOf("usesqula")
          , h = -1 < c.toLowerCase().indexOf("useali")
          , c = -1 < c.toLowerCase().indexOf("usealistaging")
          , l = -1 < b.toLowerCase().indexOf("bitsboxstaging") && !e && !f
          , m = -1 < b.toLowerCase().indexOf("leukprogrammeren.nl") && !e && !f
          , n = (-1 < b.toLowerCase().indexOf("bitsbox-ali") || -1 < b.toLowerCase().indexOf("ali.bitsbox.com")) && !e && !f
          , p = (-1 < b.toLowerCase().indexOf("bitsbox-alistaging") || -1 < b.toLowerCase().indexOf("alistaging.bitsbox.com")) && !e && !f
          , b = (-1 < b.toLowerCase().indexOf("localhost") || d.test(b)) && !e && !f;
        if (e)
            a = "prod";
        else if (f)
            a = "prod-copy";
        else if (g || m)
            console.log("Using squla environment"),
            a = "squla";
        else if (c || p)
            console.log("Using alistaging environment"),
            a = "alistaging";
        else if (h || n)
            a = "ali";
        else if (l || b)
            a = "staging";
        this.env = a;
        b && (this.functionsUrl = this.firebaseConfigs_["local-host"].functionsUrl)
    }
    a = this.firebaseConfigs_[a];
    this.currentFirebaseUrl_ = a.databaseUrl;
    return a
}
;
codepops.DataStore.prototype.openFirebase_ = function() {
    var a = this.generateFirebaseConfig_();
    firebase.initializeApp(a);
    return firebase.database().ref()
}
;
codepops.DataStore.prototype.getStorageRef = function(a) {
    this.firebase_ || (this.firebase_ = this.openFirebase_());
    return a && this.env ? (a = this.storageBuckets_[this.env][a],
    firebase.app().storage(a).ref()) : firebase.storage().ref()
}
;
codepops.DataStore.prototype.login = function(a, b, c, d, e) {
    this.onLoginSuccessCallback_ = b;
    this.onLoginFailureCallback_ = c;
    var f = this.window_, g = codepops.bind(this.onLoginTimeout_, this), h;
    "google" !== a && (h = f.setTimeout(function() {
        g(a)
    }, 1E4));
    "password" === a ? d && e ? (this.firebaseAuth_ = firebase.auth(),
    this.firebaseAuth_.signInWithEmailAndPassword(d, e).then(function(a) {
        f.clearTimeout(h);
        a.user ? (this.currentUser_ = a.user,
        b && b(a.user)) : c("No user found.")
    }
    .bind(this)).catch(function(a) {
        f.clearTimeout(h);
        c && c(a)
    })) : c("Missing email or password.") : "anonymous" === a ? this.firebaseAuth_.signInAnonymously().then(function(a) {
        f.clearTimeout(h);
        a.user && (this.currentUser_ = a.user);
        b && b()
    }).catch(function(a) {
        f.clearTimeout(h);
        c && c(a)
    }) : "google" === a ? (d = new firebase.auth.GoogleAuthProvider,
    d.setCustomParameters({
        prompt: "select_account"
    }),
    this.firebaseAuth_.signInWithPopup(d).then(function(a) {
        f.clearTimeout(h);
        a.user && (this.currentUser_ = a.user);
        b && b()
    }).catch(function(a) {
        f.clearTimeout(h);
        c && c(a)
    })) : console.error("Unsupported login method: " + a)
}
;
codepops.DataStore.prototype.partnerLogin = function(a, b, c, d, e) {
    var f = e || "password";
    this.onLoginSuccessCallback_ = a;
    this.onLoginFailureCallback_ = b;
    var g = this.window_, h = codepops.bind(this.onLoginTimeout_, this), l;
    "google" !== f && (l = g.setTimeout(function() {
        h(f)
    }, 1E4));
    "password" === f ? c && d ? (this.firebaseAuth_ = firebase.auth(),
    this.firebaseAuth_.signInWithEmailAndPassword(c, d).then(function(c) {
        g.clearTimeout(l);
        c.user ? (this.currentUser_ = c.user,
        a && a(c.user)) : b("No user found.")
    }
    .bind(this)).catch(function(e) {
        g.clearTimeout(l);
        "auth/user-not-found" === e.code ? this.signUp(c, d, a, b) : b && b(e)
    }
    .bind(this))) : b("Missing email or password.") : console.error("Unsupported login method: " + f)
}
;
codepops.DataStore.prototype.logout = function() {
    this.onLoginSuccessCallback_ = function() {}
    ;
    this.onLoginFailureCallback_ = function() {}
    ;
    this.currentUser_ = null;
    this.firebaseAuth_.signOut()
}
;
codepops.DataStore.prototype.onLoginTimeout_ = function(a) {
    var b = document.createElement("script");
    b.src = "https://codepops.com/logger/record-login-timeout.php?method=" + a;
    this.window_.document.body.appendChild(b);
    this.window_.alert("Oh no! Bitsbox is slow today due to high traffic. Please refresh in a few minutes, or visit bitsbox.com/firewall to make sure your firewall isn't blocking you.")
}
;
codepops.DataStore.prototype.getCurrentUser = function() {
    return this.currentUser_
}
;
codepops.DataStore.prototype.onLoginSuccess_ = function(a) {
    this.onLoginSuccessCallback_(a)
}
;
codepops.DataStore.prototype.onLoginFailure_ = function(a) {
    this.onLoginFailureCallback_(a)
}
;
codepops.DataStore.prototype.checkForExistingLogin = function(a, b) {
    var c = codepops.bind(function(c) {
        c ? this.currentUser_ || (this.currentUser_ = c,
        a(c)) : (this.currentUser_ = null,
        b())
    }, this);
    firebase.auth().onAuthStateChanged(c);
    this.firebaseAuth_ = firebase.auth()
}
;
codepops.DataStore.prototype.saveApp = function(a, b) {
    var c = this.currentUser_.uid
      , d = this.getBaseUserPath_() + c + "/kids/" + this.currentKidId_ + "/apps/" + a.appKey
      , e = this.firebase_.child(d);
    a.timestamp || (a.createdTimestamp = (new Date).getTime());
    a.timestamp = (new Date).getTime();
    a.shortcut || (a.shortcut = this.generateShortcutKey_(),
    a.parentActivityNumber && this.recordActivityStarted_(a.parentActivityNumber, a.shortcut));
    var f = this.firebase_.child("shortcuts/" + a.shortcut);
    f.once("value", function(b) {
        (b = b.val()) && b !== d ? (b = this.generateShortcutKey_(),
        a.shortcut = b,
        this.firebase_.child("shortcuts/" + b).set(d),
        e.update(a, function() {})) : f.set(d)
    }
    .bind(this));
    a.activityNumber && this.firebase_.child("activityNumbers/" + a.activityNumber).set(d);
    e.update(a, b)
}
;
codepops.DataStore.prototype.saveAllApps = function(a) {
    for (var b in a)
        this.saveApp(a[b])
}
;
codepops.DataStore.prototype.savePreferences = function(a, b, c) {
    if (this.currentUser_) {
        var d = this.currentUser_.uid
          , d = this.getBaseUserPath_() + d + "/kids/" + this.currentKidId_ + "/preferences"
          , e = this.firebase_.child(d)
          , f = function() {
            var a = {
                timestamp: (new Date).getTime()
            };
            e.update(a, b)
        };
        c ? ("/" !== c.charAt(0) && (c = "/" + c),
        this.firebase_.child(d + c).update(a, f)) : (e.update(a, f),
        this.currentPreferences_ = a)
    }
}
;
codepops.DataStore.prototype.getPreferences = function(a, b) {
    this.currentUser_ || b("Not logged in.");
    var c = this.currentUser_.uid
      , c = this.getBaseUserPath_() + c + "/kids/" + this.currentKidId_ + "/preferences";
    this.firebase_.child(c).once("value", function(b) {
        b = b.val() || {};
        a(b)
    }, b)
}
;
codepops.DataStore.prototype.generateShortcutKey_ = function() {
    for (var a = "", b = 0; 5 > b; b++)
        a += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(36 * Math.random()));
    return a
}
;
codepops.DataStore.prototype.getCurrentKid = function(a, b) {
    var c = this.currentUser_.uid
      , c = this.firebase_.child(this.getBaseUserPath_() + c + "/kids/" + this.currentKidId_)
      , d = codepops.bind(function(b) {
        this.currentPreferences_ = (b.val() || {}).preferences || {};
        a(b)
    }, this);
    c.once("value", d, b)
}
;
codepops.DataStore.prototype.getCurrentKidId = function() {
    return this.currentKidId_
}
;
codepops.DataStore.prototype.deleteApp = function(a, b) {
    var c = this.currentUser_.uid
      , d = a.appKey;
    this.firebase_.child(this.getBaseUserPath_() + c + "/kids/" + this.currentKidId_ + "/apps/" + d).remove(b);
    this.firebase_.child("shortcuts/" + a.shortcut).remove()
}
;
codepops.DataStore.prototype.recordMinuteOfUse = function() {
    if (this.currentUser_) {
        var a = "registered";
        this.userIsAnonymous() && (a = "anonymous");
        var b = codepops.dateToString(new Date)
          , c = function(a) {
            return (a || 0) + 1
        };
        this.firebase_.child("stats/" + a + "/minutesUsed/byDate/" + b).transaction(c);
        this.firebase_.child("stats/" + a + "/allTime/minutesUsed").transaction(c);
        var d = (this.currentPreferences_.gender || "unknown").toLowerCase()
          , e = (this.currentPreferences_.age || "unknown").toLowerCase();
        this.firebase_.child("stats/" + a + "/minutesUsed/byGender/" + d + "/" + b).transaction(c);
        this.firebase_.child("stats/" + a + "/minutesUsed/byAge/" + e + "/" + b).transaction(c);
        this.firebase_.child("stats/" + a + "/minutesUsed/byUser/" + this.currentUser_.uid + "/" + this.currentKidId_ + "/" + b).transaction(c)
    }
}
;
codepops.DataStore.prototype.recordAppMinuteOfUse = function(a) {
    if (a && (a = a.parentActivityNumber)) {
        a = "stats/activityNumbers/" + a;
        var b = codepops.dateToString(new Date)
          , c = function(a) {
            return (a || 0) + 1
        };
        this.firebase_.child(a + "/minutesUsedByChildApps/byDate/" + b).transaction(c);
        this.firebase_.child(a + "/allTime/minutesUsedByChildApps").transaction(c)
    }
}
;
codepops.DataStore.prototype.setLiveStatCallback = function(a) {
    this.firebase_.child("stats").once("value", function(b) {
        a(b.val() || {})
    })
}
;
codepops.DataStore.prototype.userIsAnonymous = function() {
    var a = this.currentUser_;
    return a ? a.isAnonymous ? !0 : !1 : null
}
;
codepops.DataStore.prototype.recordTourStart = function() {
    if (this.currentUser_) {
        var a = "registered";
        this.userIsAnonymous() && (a = "anonymous");
        var b = codepops.dateToString(new Date)
          , c = function(a) {
            return (a || 0) + 1
        };
        this.firebase_.child("stats/" + a + "/toursStarted/byDate/" + b).transaction(c);
        this.firebase_.child("stats/" + a + "/allTime/toursStarted").transaction(c)
    }
}
;
codepops.DataStore.prototype.recordTourConversion = function() {
    if (this.currentUser_) {
        var a = codepops.dateToString(new Date)
          , b = function(a) {
            return (a || 0) + 1
        };
        this.firebase_.child("stats/anonymous/toursConverted/byDate/" + a).transaction(b);
        this.firebase_.child("stats/anonymous/allTime/toursConverted").transaction(b)
    }
}
;
codepops.DataStore.prototype.recordKidCreated = function() {
    var a = codepops.dateToString(new Date)
      , b = function(a) {
        return (a || 0) + 1
    };
    this.firebase_.child("stats/registered/kidsCreated/byDate/" + a).transaction(b);
    this.firebase_.child("stats/registered/allTime/kidsCreated").transaction(b)
}
;
codepops.DataStore.prototype.sendPasswordResetEmail = function(a, b, c) {
    firebase.auth().sendPasswordResetEmail(a).then(function() {
        b()
    }, function(a) {
        c(a)
    })
}
;
codepops.DataStore.prototype.changePassword = function(a, b, c, d, e) {
    this.currentUser_.updatePassword(c).then(function() {
        d()
    }, function(a) {
        console.error("changePassword Error:", a);
        e(a)
    })
}
;
codepops.DataStore.prototype.signUp = function(a, b, c, d) {
    this.firebaseAuth_.createUserWithEmailAndPassword(a, b).then(function() {
        c()
    }, function(a) {
        d(a)
    })
}
;
codepops.DataStore.prototype.signUpGrownupAccount = function(a, b, c, d, e, f) {
    this.firebaseAuth_ = firebase.auth();
    this.firebaseAuth_.createUserWithEmailAndPassword(c, d).then(function(g) {
        this.currentUser_ = g = g.user;
        this.grownupAccountCredential_ = firebase.auth.EmailAuthProvider.credential(c, d);
        if (g = g.uid) {
            g = this.firebase_.child("/grownups/" + g + "/preferences");
            var h = (new Date).getTime()
              , h = {
                firstName: a,
                lastName: b,
                timestamp: h
            };
            g.update(h, e(h))
        } else
            f("No user returned.")
    }
    .bind(this), function(a) {
        f(a)
    })
}
;
codepops.DataStore.prototype.createNewKidsAccount = function(a, b, c, d, e, f, g, h, l, m, n, p) {
    var s = {
        kidFirstName: a,
        birthday: c,
        gender: d,
        email: e,
        kidIconUrl: f
    }
      , q = {
        kidName: a,
        accountAddress: g,
        accountZipCode: h,
        subscription: l,
        connectOption: m
    }
      , r = this.currentUser_.uid;
    if (r) {
        var u;
        this.firebase_.child("/grownups/" + r + "/subscriptions").push(q).then(function() {
            this.firebaseAuth_ = firebase.auth();
            this.firebaseAuth_.createUserWithEmailAndPassword(e, b).then(function(a) {
                a.user && a.user.uid && (u = a.user.uid);
                u || p("No user returned.");
                firebase.auth().signOut();
                firebase.auth().signInAndRetrieveDataWithCredential(this.grownupAccountCredential_).then(function(a) {
                    this.currentUser_ = a.user;
                    this.addChildAccountNode(r, u, s, function() {
                        n(q, s, u)
                    }, p)
                }
                .bind(this))
            }
            .bind(this))
        }
        .bind(this))
    }
}
;
codepops.DataStore.prototype.getBaseUserPath_ = function() {
    return this.userIsAnonymous() ? "anonymousUsers/" : "users/"
}
;
codepops.DataStore.prototype.generateActivityNumber_ = function(a) {
    function b() {
        var d = codepops.dice(1E3, 8999);
        c.child("activityNumbers/" + d).once("value", function(c) {
            null !== c.val() ? b() : a(d)
        })
    }
    var c = this.firebase_;
    b()
}
;
codepops.DataStore.prototype.loadActivityNumber = function(a, b, c) {
    this.firebase_.child("activityNumbers/" + a).once("value", codepops.bind(function(a) {
        null !== a.val() ? this.loadAppFromPath_(a.val(), b, c) : c($t("That isn't a valid app number :("))
    }, this))
}
;
codepops.DataStore.prototype.loadAppFromPath_ = function(a, b, c) {
    this.firebase_.child(a).once("value", function(d) {
        null !== d.val() ? b(d.val()) : c("No data found at " + a)
    })
}
;
codepops.DataStore.prototype.recordActivityStarted_ = function(a, b) {
    var c = codepops.dateToString(new Date)
      , d = function(a) {
        return (a || 0) + 1
    };
    this.firebase_.child("stats/activityNumbers/" + a + "/starts/byDate/" + c).transaction(d);
    this.firebase_.child("stats/activityNumbers/" + a + "/starts/allTime").transaction(d);
    this.firebase_.child("stats/activityNumbers/" + a + "/shortcuts/" + b).set(!0)
}
;
codepops.DataStore.prototype.recordMissingAsset_ = function(a, b) {
    if (!(0 > this.allowableAssetTypes_.indexOf(b.toLowerCase())) && a) {
        var c = function(a) {
            return (a || 0) + 1
        };
        this.missingAssetsAlreadyTracked_[a] || (this.missingAssetsAlreadyTracked_[a] = !0,
        this.firebase_.child("stats/missingAssets/" + b + "/" + a).transaction(c))
    }
}
;
codepops.DataStore.prototype.recordAssetSearch_ = function(a, b, c) {
    0 > this.allowableAssetTypes_.indexOf(b.toLowerCase()) || !a || (c || (c = "No results found."),
    a = "stats/assetSearches/" + b + "/" + a,
    c = {
        resultCount: c
    },
    this.firebase_.child(a).update(c),
    this.firebase_.child(a + "/searchCount").transaction(function(a) {
        return (a || 0) + 1
    }))
}
;
codepops.DataStore.prototype.recordJSError = function(a, b, c) {
    var d = this.getCurrentUser();
    d && d.uid ? (a = {
        errorObject: a,
        rawError: b,
        code: c,
        uid: d.uid
    },
    b = !1,
    window.XMLHttpRequest ? b = new XMLHttpRequest : window.ActiveXObject && (b = new ActiveXObject("Microsoft.XMLHTTP")),
    b.open("POST", "https://www.codepops.com/errortracking/error_tracking.php"),
    b.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
    b.send(JSON.stringify(a))) : console.warn("No user id; unable to report error.")
}
;
codepops.DataStore.prototype.saveBlogArticle = function(a, b, c, d) {
    a.timestamp = (new Date).getTime();
    var e = this.firebase_.child("/blog/metadata/articles/" + b)
      , f = {};
    f.title = a.title;
    f.mainImageUrl = a.mainImageUrl;
    f.timestamp = a.timestamp;
    f.isPublished = !c;
    f.publishDate = a.publishDate || "";
    e.update(f);
    e = "/blog/published/" + b;
    c && (e = "/blog/drafts/" + b);
    this.firebase_.child(e).update(a, d)
}
;
codepops.DataStore.prototype.searchAssets = function(a, b, c, d) {
    if (a && b)
        if (0 > this.allowableAssetTypes_.indexOf(b.toLowerCase()))
            d && d("invalid assetType");
        else if (c && d) {
            a = Array.isArray(a) ? a : a.split(/[\s,%20]+/);
            for (var e = {}, f = {}, g = 0; g < a.length; g++) {
                var h = a[g];
                3 < h.length && ("s" === h.toLowerCase().substring(h.length - 1) ? h = h.substring(0, h.length - 1) : "es" === h.toLowerCase().substring(h.length - 2) && (h = h.substring(0, h.length - 2)));
                void 0 === f[h] && (f[h] = []);
                f[h].push(h)
            }
            var l = Object.keys(f).length
              , m = this.firebase_.child("tags");
            m.on("value", function() {});
            a = codepops.bind(function(a) {
                e = this.searchAssetsList_(f, b, !1);
                if (a.exists())
                    for (var g in f)
                        for (var h = 0; h < f[g].length; h++) {
                            var q = f[g][h];
                            q && 0 !== q.length && (-1 < q.indexOf("%20") && (q = q.replace(/%20/g, "-")),
                            q = a.child(q),
                            q.exists() && (q = q.child(b).val(),
                            e[g] = void 0 === e[g] ? q : e[g].concat(q)))
                        }
                if (void 0 === e || Object.keys(e).length <= l)
                    this.searchAssetsWildcard(f, b, m, c, d);
                else {
                    for (var r in e)
                        a = 0,
                        Array.isArray(e[r]) ? a += e[r].length : a++,
                        this.recordAssetSearch_(r, b, a);
                    c && c(this.removeDuplicateAssets_(e))
                }
            }, this);
            g = codepops.bind(function(a) {
                d && (console.error("error", a),
                d(a))
            }, this);
            m.once("value", a, g)
        } else
            console.warn("Missing callback function.");
    else
        d && d("missing argument")
}
;
codepops.DataStore.prototype.searchAssetsWildcard = function(a, b, c, d, e) {
    if (a && b) {
        var f = function(c) {
            var f = {}
              , f = this.searchAssetsList_(a, b, !0);
            if (c.exists()) {
                c = c.val();
                for (var g in a)
                    for (var n = 0; n < a[g].length; n++) {
                        var p = a[g][n];
                        -1 < p.indexOf("%20") && (p = p.replace(/%20/g, "-"));
                        var p = new RegExp(p,"i"), s;
                        for (s in c)
                            p.test(s) && c[s][b] && (f[g] = void 0 === f[g] ? c[s][b] : f[g].concat(c[s][b]))
                    }
            }
            if (void 0 !== f && 0 < Object.keys(f).length) {
                for (var q in f)
                    g = 0,
                    Array.isArray(f[q]) ? g += f[q].length : g++,
                    this.recordAssetSearch_(q, b, g);
                d && d(this.removeDuplicateAssets_(f))
            } else
                this.recordAssetSearch_(q, b, 0),
                e && e("Queried tags, got nothing back.")
        }
        .bind(this)
          , g = function(a) {
            e && e(a)
        }
        .bind(this);
        c.once("value", f, g)
    } else
        e("missing argument")
}
;
codepops.DataStore.prototype.searchAssetsList_ = function(a, b, c) {
    var d = {}
      , e = this.assetTypeCollections_[b];
    if (void 0 !== e) {
        var e = Object.keys(e), f;
        for (f in a)
            for (var g = 0; g < a[f].length; g++) {
                var h = a[f][g];
                if (c)
                    for (var h = new RegExp(h + ".*","i"), l = 0; l < e.length; l++)
                        "stamp" === b && c123.stamps[e[l]] && c123.stamps[e[l]].hideInAssetsPanel || h.test(e[l]) && (d[f] = void 0 === d[f] ? [e[l]] : d[f].concat(e[l]));
                else
                    !(0 <= e.indexOf(h)) || "stamp" === b && c123.stamps[h] && c123.stamps[h].hideInAssetsPanel || (d[f] = void 0 === d[f] ? [h] : d[f].concat(h))
            }
    }
    return d
}
;
codepops.DataStore.prototype.removeDuplicateAssets_ = function(a) {
    if (void 0 === a)
        console.warn("assetHash is undefined.");
    else {
        for (var b = {
            all: []
        }, c = {}, d = Object.keys(a), e = 0; e < d.length; e++)
            for (var f = a[d[e]].sort(alphanumCase), g = 0; g < f.length; g++)
                c[f[g]] = !0;
        b.all = Object.keys(c);
        return b
    }
}
;
codepops.DataStore.prototype.uploadCustomImage = function(a, b, c, d, e, f, g) {
    b = b.toLowerCase();
    e = e || null;
    var h = null
      , h = f ? f : function(a) {
        console.error("error: ", a)
    }
    ;
    if (this.isFeatureOnForUser("customStamps"))
        if (this.currentUser_ && this.currentUser_.uid)
            if (!c || 0 > this.customImageTypes_.indexOf(c))
                h("Asset type either not set or not allowed.");
            else {
                f = function() {
                    var a = g || function() {}
                    ;
                    l.getDownloadURL().then(function(e) {
                        this.saveCustomAsset(b, c, e, d, a.bind(this))
                    }
                    .bind(this))
                }
                .bind(this);
                var l = this.getStorageRef().child(c + "/" + this.currentUser_.uid + "/" + b);
                l.put(a).on(firebase.storage.TaskEvent.STATE_CHANGED, e, h, f)
            }
        else
            h("User is not logged in.");
    else
        h("Feature flag is off")
}
;
codepops.DataStore.prototype.saveCustomAsset = function(a, b, c, d, e) {
    var f = this.currentUser_.uid;
    a = this.getBaseUserPath_() + f + "/kids/" + this.currentKidId_ + "/preferences/customAssets/" + b + "/" + a;
    a = this.firebase_.child(a);
    b = Date.now();
    c = {
        url: c,
        createdDate: b,
        lastModifiedDate: b
    };
    null !== d && (c.grayBackground = d);
    a.update(c, e)
}
;
codepops.DataStore.prototype.renameCustomAsset = function(a, b, c, d) {
    0 === a.indexOf("@") && (a = a.substr(1));
    var e = Date.now()
      , f = this.currentUser_.uid;
    "s" !== c.charAt(c.length - 1) && (c += "s");
    var g = this.storageBuckets_[this.env].customAssets
      , h = this.getBaseUserPath_() + f + "/kids/" + this.currentKidId_ + "/preferences/customAssets/" + c
      , l = this.firebase_.child(h + "/" + a)
      , m = this.firebase_.child(h + "/" + b);
    l.once("value").then(function(h) {
        h = h.val();
        var p = h.url.replace(a, b);
        h.url = p;
        h.lastModifiedDate = e;
        m.update(h).then(function() {
            l.remove()
        }).then(function() {
            this.renameCustomAssetStorageFile(a, b, c, f, g, d)
        }
        .bind(this))
    }
    .bind(this))
}
;
codepops.DataStore.prototype.renameCustomAssetStorageFile = function(a, b, c, d, e, f) {
    firebase.functions().httpsCallable("storageFunctions-renameCustomAsset")({
        oldName: a,
        newName: b,
        assetType: c,
        uid: d,
        bucketName: e
    }).then(function(a) {
        f(a)
    }, function(a) {
        console.error("error : ", a);
        f(a)
    })
}
;
codepops.DataStore.prototype.saveSearchList = function(a) {
    var b = this.currentUser_.uid
      , b = this.getBaseUserPath_() + b + "/kids/" + this.currentKidId_ + "/preferences/searchList";
    this.firebase_.child(b).update(a)
}
;
codepops.DataStore.prototype.isFeatureOnForUser = function(a) {
    var b = c123.isFeatureFlagOn(a)
      , c = this.isBeta(a) && c123.isFeatureFlagOn(a, "beta")
      , d = this.isActiveSubscriber() && c123.isFeatureFlagOn(a, "activeSubscriber");
    a = this.isUserBannedFromFeature(a);
    return (b || c || d) && !a ? !0 : !1
}
;
codepops.DataStore.prototype.isUserBannedFromFeature = function(a) {
    return this.currentPreferences_ && this.currentPreferences_.featuresBanned && this.currentPreferences_.featuresBanned[a] && !0 === this.currentPreferences_.featuresBanned[a] ? !0 : !1
}
;
codepops.DataStore.prototype.banUserFromFeature = function(a, b, c, d) {
    var e = this.currentUser_.uid;
    if ("undefined" === typeof e)
        d("Can't update banned features. Not logged in.");
    else if (a)
        if ("boolean" !== typeof b)
            d("isBanned must be a boolean");
        else {
            var f = {};
            f[a] = b;
            a = this.getBaseUserPath_() + e + "/kids/" + this.currentKidId_ + "/preferences/featuresBanned/";
            this.firebase_.child(a).update(f).then(c).catch(d)
        }
    else
        d("feature is a required parameter.")
}
;
codepops.DataStore.prototype.isBeta = function(a) {
    return this.currentPreferences_ && this.currentPreferences_.beta && this.currentPreferences_.beta[a] && !0 === this.currentPreferences_.beta[a] ? !0 : !1
}
;
codepops.DataStore.prototype.setIsBeta = function(a, b, c, d) {
    var e = this.currentUser_.uid;
    if ("undefined" === typeof e)
        d("Can't update beta flag. Not logged in.");
    else if (a)
        if ("boolean" !== typeof b)
            d("isBeta must be a boolean");
        else {
            var f = {};
            f[a] = b;
            a = this.getBaseUserPath_() + e + "/kids/" + this.currentKidId_ + "/preferences/beta/";
            this.firebase_.child(a).update(f).then(c).catch(d)
        }
    else
        d("feature is a required parameter.")
}
;
codepops.DataStore.prototype.isActiveSubscriber = function() {
    return this.currentPreferences_ && this.currentPreferences_.isActiveSubscriber && !0 === this.currentPreferences_.isActiveSubscriber ? !0 : !1
}
;
codepops.DataStore.prototype.setIsActiveSubscriber = function(a, b, c) {
    var d = this.currentUser_.uid;
    "undefined" === typeof d ? c("Can't update subscriber status. Not logged in.") : "boolean" !== typeof a ? c("isActiveSubscriber must be a boolean") : (a = {
        isActiveSubscriber: a
    },
    d = this.getBaseUserPath_() + d + "/kids/" + this.currentKidId_ + "/preferences/",
    this.firebase_.child(d).update(a).then(b).catch(c))
}
;
codepops.DataStore.prototype.getThumbnails = function(a, b, c, d, e, f) {
    if (this.isFeatureOnForUser("customStamps"))
        if (!a || "stamp_thumbs" !== a && "fill_thumbs" !== a)
            console.error("Invalid thumbType");
        else {
            var g = function(d) {
                d && (this.currentPreferences_ = d);
                var g = {};
                if (this.currentPreferences_.customAssets && this.currentPreferences_.customAssets[a]) {
                    var h = this.currentPreferences_.customAssets[a]
                      , p = Object.keys(h)
                      , s = p.length;
                    c > p.length && (c = p.length);
                    for (var q = b - 1; q < c; q++) {
                        var r = p[q];
                        g[r] = h[r]
                    }
                    1 > s ? f("NO_MATCH") : e(g, s, d)
                } else
                    f("NO_MATCH")
            }
            .bind(this)
              , h = function(a) {
                console.error("getPreferences error: ", a)
            };
            d ? g() : this.getPreferences(g, h)
        }
    else
        console.warn("Feature flag is off")
}
;
codepops.DataStore.prototype.deleteCustomAsset = function(a, b, c) {
    0 > this.customImageTypes_.indexOf(b) && console.warn("Custom image type not supported");
    var d = this.currentUser_.uid
      , e = this.getBaseUserPath_() + d + "/kids/" + this.currentKidId_ + "/preferences/customAssets/" + b + "/" + a;
    this.firebase_.child(e).remove().then(function() {
        this.getStorageRef().child(b + "/" + d + "/" + a).delete()
    }
    .bind(this)).then(function() {
        c && c()
    })
}
;
codepops.DataStore.prototype.hasSeenToolTips_ = function(a) {
    var b = this.currentPreferences_.viewedToolTips && this.currentPreferences_.viewedToolTips[a]
      , c = "/viewedToolTips/" + a;
    if ("TipCustomAssets" === a) {
        var d = 0;
        if (b && (d = b.views) && 5 <= d)
            return !0;
        this.currentPreferences_.viewedToolTips || (this.currentPreferences_.viewedToolTips = {});
        this.currentPreferences_.viewedToolTips[a] || (this.currentPreferences_.viewedToolTips[a] = {
            views: 0
        });
        this.currentPreferences_.viewedToolTips[a].views += 1;
        viewsData = this.currentPreferences_.viewedToolTips[a];
        this.savePreferences(viewsData, function() {}, c);
        return 2 > d ? !0 : !1
    }
    if ("BetaInfoWindow" === a) {
        if (b)
            return !0;
        this.currentPreferences_.viewedToolTips || (this.currentPreferences_.viewedToolTips = {});
        this.currentPreferences_.viewedToolTips[a] || (this.currentPreferences_.viewedToolTips[a] = {
            viewed: !0
        });
        this.savePreferences(this.currentPreferences_.viewedToolTips[a], function() {}, c);
        return !1
    }
}
;
codepops.DataStore.prototype.uploadShareImage = function(a, b, c, d, e, f) {
    b = b.toLowerCase();
    d = d || null;
    var g = null
      , g = e ? e : function(a) {
        console.error("error: ", a)
    }
    ;
    if (this.currentUser_ && this.currentUser_.uid)
        if (!c || 0 > this.appIconTypes_.indexOf(c))
            g("App icon type either not set or not allowed.");
        else {
            e = function() {
                var a = f || function() {}
                ;
                h.getDownloadURL().then(function(d) {
                    this.saveShareImage(b, c, d, a.bind(this, d))
                }
                .bind(this))
            }
            .bind(this);
            var h = this.getStorageRef("appIcons").child(c + "/" + this.currentUser_.uid + "/" + b);
            h.putString(a, "data_url").on(firebase.storage.TaskEvent.STATE_CHANGED, d, g, e)
        }
    else
        g("User is not logged in.")
}
;
codepops.DataStore.prototype.saveShareImage = function(a, b, c, d) {
    b = this.currentUser_.uid;
    a = this.getBaseUserPath_() + b + "/kids/" + this.currentKidId_ + "/apps/" + a + "/shareImage";
    this.firebase_.child(a).update({
        url: c
    }, d)
}
;
codepops.DataStore.prototype.uploadAppIconImage = function(a, b, c, d, e, f) {
    b = b.toLowerCase();
    d = d || null;
    var g = null
      , g = e ? e : function(a) {
        console.error("error: ", a)
    }
    ;
    if (this.currentUser_ && this.currentUser_.uid)
        if (!c || 0 > this.appIconTypes_.indexOf(c))
            g("App icon type either not set or not allowed.");
        else {
            e = function() {
                var a = f || function(a) {}
                ;
                h.getDownloadURL().then(function(c) {
                    this.saveAppIconImage(b, c).then(function() {
                        a(c)
                    })
                }
                .bind(this)).then(function() {
                    h.updateMetadata({
                        cacheControl: "no-store, no-cache, must-revalidate"
                    })
                })
            }
            .bind(this);
            var h = this.getStorageRef("appIcons").child(c + "/" + this.currentUser_.uid + "/" + b);
            h.putString(a, "data_url").on(firebase.storage.TaskEvent.STATE_CHANGED, d, g, e)
        }
    else
        g("User is not logged in.")
}
;
codepops.DataStore.prototype.saveAppIconImage = function(a, b) {
    var c = this.currentUser_.uid
      , c = this.getBaseUserPath_() + c + "/kids/" + this.currentKidId_ + "/apps/" + a;
    return this.firebase_.child(c).update({
        iconUrl: b
    })
}
;
codepops.DataStore.prototype.linkGrownupAccountToKidAccount = function(a, b, c, d, e, f, g) {
    if (a && b && c && d && e) {
        var h;
        firebase.auth().signOut().then(function() {
            firebase.auth().signInWithEmailAndPassword(b, c).then(function(c) {
                c.user && c.user.uid && (h = c.user.uid);
                h || g("No user returned.");
                firebase.functions().httpsCallable("accountFunctions-linkKidAccountToGrownupAccount")({
                    grownupUid: a,
                    kidUid: h
                }).then(function(c) {
                    firebase.auth().signOut().then(function() {
                        firebase.auth().signInAndRetrieveDataWithCredential(this.grownupAccountCredential_).then(function(c) {
                            this.currentUser_ = c.user;
                            c = this.firebase_.child("/grownups/" + a + "/childAccounts/" + h);
                            var g = codepops.encodeAsFirebaseKey(b)
                              , l = {};
                            l.email = g;
                            l.kidFirstName = d;
                            l.kidIconUrl = e;
                            c.update(l).then(function() {
                                f(l, h)
                            })
                        }
                        .bind(this)).catch(g)
                    }
                    .bind(this))
                }
                .bind(this))
            }
            .bind(this))
        }
        .bind(this))
    } else
        g("Missing required parameter.")
}
;
codepops.DataStore.prototype.getAccountInfoByEmail = function(a, b, c) {
    firebase.functions().httpsCallable("databaseFunctions-getAccountInfoByEmail")({
        email: a
    }).then(function(a) {
        "NO_USER_FOUND" === a.data ? c("unknown") : a.data.errorInfo ? c(a.data.errorInfo.message) : b(a)
    }, function(a) {
        c(a)
    })
}
;
codepops.DataStore.prototype.getGrownupAccountData = function(a, b) {
    if (this.currentUser_)
        this.firebase_.child("/grownups/" + this.currentUser_.uid).once("value", function(c) {
            (c = c.val()) ? a(c) : b("No data found.")
        }, function(a) {
            b(a)
        });
    else
        b("Not logged in.")
}
;
codepops.DataStore.prototype.addChildAccountNode = function(a, b, c, d, e) {
    a && b ? (a = this.firebase_.child("/grownups/" + a + "/childAccounts/" + b),
    b = codepops.encodeAsFirebaseKey(c.email),
    c.email = b,
    a.update(c).then(function() {
        d(c)
    }).catch(e)) : e("Missing required parameter.")
}
;
codepops.DataStore.prototype.updateGrownupData = function(a, b, c, d) {
    if (a) {
        var e = Object.keys(b);
        if (e.length) {
            for (var f = !0, g = 0; g < e.length; g++)
                null !== b[e[g]] && (f = !1);
            f ? d("All fields in dataHash are null") : this.firebase_.child("/grownups/" + a + "/preferences/").update(b).then(function() {
                c()
            }, function(a) {
                d(a)
            })
        } else
            d("dataHash is empty")
    } else
        d("Missing required parameter.")
}
;
codepops.DataStore.prototype.saveSubscriptionSurvey = function(a, b) {
    var c = this.firebase_.child("/subscriptions/" + this.currentUser_.uid + "/connectionInfo");
    a.timestamp || (a.createdTimestamp = (new Date).getTime());
    var d = this.currentUser_.email;
    d && (a.codingAccountEmail = d);
    a.timestamp = (new Date).getTime();
    c.update(a, b)
}
;
codepops = codepops || {};
codepops.DraggableAppCardWidget = function(a, b) {
    var c = b || {};
    this.window_ = c.window || window;
    this.document_ = c.document || window.document;
    this.page_ = a;
    this.defaultCardPosition = {
        x: -50,
        y: 60
    }
}
;
codepops.DraggableAppCardWidget.prototype.applyAppCardInteractionHandlers = function() {
    var a = function(a) {
        var b = a.target;
        x = (parseFloat(b.getAttribute("data-x")) || 0) + a.dx;
        y = (parseFloat(b.getAttribute("data-y")) || 0) + a.dy;
        b.style.webkitTransform = b.style.transform = "translate(" + x + "px, " + y + "px)";
        b.setAttribute("data-x", x);
        b.setAttribute("data-y", y)
    }
    .bind(this)
      , b = function(a) {
        var b = a.target;
        a = b.getAttribute("data-x");
        b = b.getAttribute("data-y");
        this.page_.savePreference("lastCardPosition", {
            x: a,
            y: b
        })
    }
    .bind(this)
      , c = interact("#app-card-div");
    this.appCardScale = 1;
    var d = this.document_.getElementById("app-card-img"), e, f = function() {
        1.5 < this.appCardScale ? (d.style.webkitTransform = d.style.mozTransform = d.style.transform = "scale(1.5)",
        this.appCardScale = 1.5) : 0.5 > this.appCardScale && (d.style.webkitTransform = d.style.mozTransform = d.style.transform = "scale(.5)",
        this.appCardScale = 0.5)
    }
    .bind(this);
    c.gesturable({
        onstart: function() {
            clearTimeout(e);
            d.classList.remove("reset")
        },
        onmove: function(b) {
            currentScale = b.scale * this.appCardScale;
            d.style.webkitTransform = d.style.mozTransform = d.style.transform = "scale(" + currentScale + ")";
            a(b)
        }
        .bind(this),
        onend: function(a) {
            this.appCardScale *= a.scale;
            e = setTimeout(f, 500);
            d.classList.add("reset")
        }
        .bind(this)
    }).draggable({
        inertia: !1,
        onmove: a,
        onend: b,
        modifiers: [interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: !0
        }), interact.modifiers.snap({
            targets: [interact.createSnapGrid({
                x: 1,
                y: 1
            })],
            range: Infinity,
            relativePoints: [{
                x: 0,
                y: 0
            }]
        })]
    }).resizable({
        edges: {
            top: !1,
            left: !1,
            bottom: !1,
            right: !1
        },
        preserveAspectRatio: !0,
        modifiers: [interact.modifiers.restrictSize({
            max: {
                width: 660,
                height: 1020
            },
            min: {
                width: 110,
                height: 170
            }
        }), interact.modifiers.restrictEdges({
            outer: "parent",
            endOnly: !0
        })],
        onstart: function(a) {
            this.startingRect = this.appCardContainer.getBoundingClientRect();
            a = this.appCardDiv.style.transform.split(",");
            1 < a.length ? (this.startingTransformX = parseFloat(a[0].replace(/[^0-9\.\-]+/g, "")),
            this.startingTransformY = parseFloat(a[1].replace(/[^0-9\.\-]+/g, ""))) : this.startingTransformY = this.startingTransformX = 0
        }
        .bind(this),
        onend: function(a) {
            var b = 1.875 * a.rect.width
              , c = 1.875 * a.rect.height;
            this.appCardContainer.style.width = "calc(100% + " + b + "px)";
            this.appCardContainer.style.height = "calc(100% + " + c + "px)";
            this.appCardContainer.style.top = "-" + c / 2 + "px";
            this.appCardContainer.style.left = "-" + b / 2 + "px";
            b = this.startingRect.left + b / 2;
            c = this.startingRect.top + c / 2;
            !a.edges.top && !a.edges.left || a.edges.right || a.edges.bottom ? a.edges.top && a.edges.right ? (a = this.startingTransformX + b,
            c = this.startingTransformY - 0.0625 * c) : (a = a.edges.bottom && a.edges.left ? this.startingTransformX - 0.0625 * b : this.startingTransformX + b,
            c = this.startingTransformY + c) : (a = this.startingTransformX - 0.0625 * b,
            c = this.startingTransformY - 0.0625 * c);
            this.appCardDiv.style.transform = "translate(" + a + "px," + c + "px)";
            this.appCardDiv.setAttribute("data-x", a);
            this.appCardDiv.setAttribute("data-y", c)
        }
        .bind(this)
    }).on("resizemove", function(a) {
        var b = a.target
          , c = parseFloat(b.getAttribute("data-x")) || 0
          , d = parseFloat(b.getAttribute("data-y")) || 0
          , e = b.clientWidth;
        b.style.width = a.rect.width + "px";
        b.style.height = a.rect.height + "px";
        this.appCardScale *= a.rect.width / e;
        c += a.deltaRect.left;
        d += a.deltaRect.top;
        b.style.webkitTransform = b.style.transform = "translate(" + c + "px," + d + "px)";
        b.setAttribute("data-x", c);
        b.setAttribute("data-y", d)
    }
    .bind(this)).on("doubletap", function(a) {})
}
;
codepops.DraggableAppCardWidget.prototype.displayAppCard = function(a, b) {
    this.currentAppNumber = a;
    this.removeAppCard();
    this.appCardContainer ? this.appCardDiv.innerHTML = "" : (this.appCardContainer = this.document_.createElement("div"),
    this.appCardContainer.id = "app-card-container",
    this.appCardDiv = this.document_.createElement("div"),
    this.appCardDiv.id = "app-card-div");
    var c = b || this.defaultCardPosition
      , d = c.x
      , c = c.y
      , e = Math.floor(42.5);
    if (d - -56.5 + Math.floor(27.5) > window.innerWidth || c - -23.5 + e > window.innerHeight)
        d = this.defaultCardPosition.x,
        c = this.defaultCardPosition.y,
        this.page_.savePreference("lastCardPosition", {
            x: d,
            y: c
        });
    this.appCardDiv.style.transform = "translate(" + d + "px, " + c + "px)";
    this.appCardDiv.setAttribute("data-x", d);
    this.appCardDiv.setAttribute("data-y", c);
    var f = new Image;
    f.onload = function() {
        f.id = "app-card-img";
        this.appCardDiv.innerHTML = "";
        this.appCardDiv.appendChild(f);
        this.appCardContainer.appendChild(this.appCardDiv);
        this.document_.body.appendChild(this.appCardContainer);
        this.applyAppCardInteractionHandlers()
    }
    .bind(this);
    f.onerror = function() {
        console.log("App card image does not exist.")
    }
    ;
    f.src = "../appcards/backs/" + a + ".jpg"
}
;
codepops.DraggableAppCardWidget.prototype.removeAppCard = function() {
    var a = this.document_.getElementById("card-dock");
    if (this.appCardContainer) {
        interact.isSet("#app-card-div") && interact("#app-card-div").unset();
        try {
            this.document_.body.removeChild(this.appCardContainer)
        } catch (b) {}
        this.appCardContainer = null;
        a && this.document_.body.removeChild(a)
    }
}
;
codepops.DraggableAppCardWidget.prototype.setUpCardDock = function() {
    var a = this.document_.createElement("div");
    a.id = "card-dock";
    var b = this.document_.createElement("p");
    b.innerText = "Dock Card Here";
    a.appendChild(b);
    this.document_.body.appendChild(a);
    a.addEventListener("click", function() {
        this.dockAppCard()
    }
    .bind(this))
}
;
codepops.DraggableAppCardWidget.prototype.dockAppCard = function() {
    this.prevRectTop = this.appCardDiv.getBoundingClientRect().top;
    this.prevRectLeft = this.appCardDiv.getBoundingClientRect().left;
    this.prevRectLeft && 470 < this.prevRectLeft || ("" !== this.appCardDiv.style.transform && (this.appCardDiv.setAttribute("data-x", -450.84375),
    this.appCardDiv.setAttribute("data-y", 0.234375),
    this.page_.savePreference("lastCardPosition", {
        x: -450.84375,
        y: 0.234375
    })),
    this.appCardDiv.style.webkitTransform = this.appCardDiv.style.transform = "translate(-450.84375px, 0.234375px)")
}
;
codepops.DraggableAppCardWidget.prototype.isDocked = function(a) {
    return a ? -400 > parseFloat(a.x || 0) : !1
}
;
codepops.ICON_RAW_SIZE = 120;
codepops.EditorPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.window_.alert = function(a) {
        console.log("EditorPage window.alert() override: ", a)
    }
    ;
    this.library_ = {};
    this.document_ = a.document || window.document;
    this.dataStore_ = a.dataStore || new codepops.DataStore;
    this.isMobile_ = !1;
    codepops.DEFAULT_APP_NAME = "My App";
    this.isReorganizing_ = this.isLoggedIn = !1;
    this.tutorials_ = ["TutorialWelcome"];
    this.LOGIN_BASE_DOMAIN_BITSBOX = "bitsbox.com";
    this.BULK_ACCOUNT_PREFIX_DEFAULT = "bulk";
    this.loginBaseDomain_ = this.LOGIN_BASE_DOMAIN_BITSBOX;
    this.bulkAccountPrefix_ = this.BULK_ACCOUNT_PREFIX_DEFAULT;
    this.iconScratchCanvas_ = a.iconScratchCanvas || this.document_.createElement("canvas");
    this.iconScratchCanvas_.width = codepops.ICON_RAW_SIZE;
    this.iconScratchCanvas_.height = codepops.ICON_RAW_SIZE;
    this.iconScratchCtx_ = this.iconScratchCanvas_.getContext("2d");
    this.apps_ = {};
    this.userDisplayName_ = "Me";
    this.userPreferences_ = {};
    a.userPreferences_ && (this.userPreferences_ = a.userPreferences_);
    this.userPreferences_.tabletColor = "rgb(0,0,0)";
    this.userPreferences_.tabletBackgroundUrl = "img/tablet-screen-1.png";
    this.needToReloadPrefs_ = !1;
    this.isTourStopFinished_ = {
        "new tablet": !1
    };
    this.appCodeFromLastError_ = "";
    this.currentSearchIconIndex_ = this.firstElementsIndex_ = 1;
    this.assetIconSelected_ = !1;
    this.windowHash_ = "";
    this.openingAssetPanel_ = !0;
    this.lastKnownScrollPosition_ = this.savedSpotInCode_ = "";
    this.yDown_ = this.xDown_ = null;
    this.thumbsStart = this.thumbSet = 1;
    this.totalThumbsPerPage = this.thumbsEnd = 40;
    this.copiedToGoogleDoc = this.displayingAnonymousSignUpPanel = this.onCustomAssetsTour = this.hasShownAssetsPanel_ = !1;
    this.loadAllCodeApps_ = {
        1219: !0,
        5161: !0,
        4535: !0,
        8874: !0,
        7213: !0,
        7393: !0,
        4430: !0,
        4136: !0,
        7321: !0,
        6272: !0,
        6865: !0,
        5574: !0,
        8474: !0,
        7295: !0,
        7315: !0,
        3977: !0,
        8261: !0,
        3376: !0,
        1564: !0,
        4275: !0,
        1039: !0,
        7604: !0,
        1866: !0,
        1555: !0,
        7133: !0,
        2502: !0,
        7579: !0,
        3146: !0,
        3497: !0,
        2124: !0,
        8137: !0,
        1740: !0,
        1702: !0,
        4278: !0,
        3068: !0,
        8759: !0,
        8590: !0,
        2093: !0,
        7904: !0,
        1806: !0,
        6218: !0,
        1089: !0,
        3814: !0,
        2028: !0,
        3324: !0,
        8669: !0,
        8846: !0,
        4299: !0,
        2851: !0,
        2534: !0,
        4943: !0,
        5648: !0,
        5569: !0,
        1111: !0,
        6097: !0,
        3213: !0,
        6519: !0,
        3022: !0,
        2172: !0,
        3503: !0,
        6729: !0,
        1105: !0,
        4128: !0,
        8612: !0,
        8368: !0,
        4073: !0,
        2652: !0,
        8012: !0,
        1567: !0,
        7227: !0,
        5555: !0,
        2921: !0,
        3514: !0,
        3323: !0,
        6233: !0,
        2929: !0,
        2697: !0,
        5325: !0,
        8248: !0,
        7024: !0,
        1761: !0,
        7249: !0,
        5086: !0,
        5308: !0,
        8478: !0,
        8286: !0,
        6736: !0,
        8153: !0,
        2139: !0,
        5251: !0,
        2016: !0,
        7445: !0,
        5255: !0,
        5635: !0,
        4316: !0,
        1673: !0,
        2729: !0,
        2973: !0,
        5667: !0,
        2250: !0,
        8795: !0,
        8876: !0,
        7292: !0,
        2971: !0,
        5769: !0,
        7139: !0,
        8113: !0,
        6810: !0,
        4193: !0,
        7870: !0,
        4969: !0,
        4435: !0,
        4181: !0,
        2032: !0,
        2204: !0,
        2728: !0,
        1570: !0,
        4009: !0,
        5822: !0,
        2755: !0,
        4178: !0,
        3017: !0,
        6572: !0,
        5529: !0,
        3130: !0,
        3013: !0,
        5513: !0,
        5287: !0,
        5423: !0,
        1744: !0,
        1920: !0,
        6832: !0,
        3911: !0,
        6992: !0,
        4295: !0,
        8040: !0,
        2247: !0,
        4858: !0,
        5924: !0,
        7576: !0,
        1236: !0,
        7907: !0,
        8025: !0,
        1935: !0,
        7121: !0,
        4996: !0,
        4244: !0,
        7867: !0,
        4747: !0,
        7153: !0,
        8774: !0,
        7574: !0,
        6226: !0,
        3577: !0,
        8419: !0,
        5282: !0
    };
    this.lastInteraction_ = new Date;
    this.tabletDiv = this.document_.getElementById("tablet");
    this.pagePanelDiv = this.document_.getElementById("page-panel");
    this.buttonRunDiv = this.document_.getElementById("button-run");
    this.newAppPanelDiv = this.document_.getElementById("new-app-panel");
    this.instructionPanelDiv = this.document_.getElementById("instruction-panel");
    this.instructionPanelContentDiv = this.document_.getElementById("instruction-panel-content");
    this.instructionPanelArrowDiv = this.document_.getElementById("instruction-panel-arrow");
    this.tabletTitleDiv = this.document_.getElementById("tablet-title");
    this.pageTitleInput = this.document_.getElementById("page-title");
    this.pageIconDiv = this.document_.getElementById("page-icon");
    this.sandboxPanelDiv = this.document_.getElementById("sandbox-panel");
    this.loginPanelDiv = this.document_.getElementById("login-panel");
    this.popupBackgroundDiv = this.document_.getElementById("popup-background");
    this.emailInput = this.document_.getElementById("email");
    this.passwordInput = this.document_.getElementById("password");
    this.loadingDiv = this.document_.getElementById("loading");
    this.pageAuthorDiv = this.document_.getElementById("page-author");
    this.newAppTitleInput = this.document_.getElementById("new-app-title");
    this.activityNumberInput = this.document_.getElementById("activity-number");
    this.activityNumberErrorDiv = this.document_.getElementById("activity-number-error");
    this.bubbleMaskDiv = this.document_.getElementById("bubble-mask");
    this.contextPanelDiv = this.document_.getElementById("context-panel");
    this.newAppIconsDiv = this.document_.getElementById("new-app-icons");
    this.iconsCuteLarge = this.document_.getElementById("icons-cute-large");
    this.buttonNewApp = this.document_.getElementById("button-new-app");
    this.errorPanelDiv = this.document_.getElementById("error-panel");
    this.errorLineDiv = this.document_.getElementById("error-line");
    this.errorMessageDiv = this.document_.getElementById("error-message");
    this.errorTranslationDiv = this.document_.getElementById("error-translation");
    this.errorHelpDiv = this.document_.getElementById("error-help");
    this.coordinateTickPanelDiv = this.document_.getElementById("coordinate-tick-panel");
    this.coordinateTickXDiv = this.document_.getElementById("coordinate-tick-x");
    this.coordinateTickYDiv = this.document_.getElementById("coordinate-tick-y");
    this.settingsPanelDiv = this.document_.getElementById("settings-panel");
    this.settingsDisplayNameInput = this.document_.getElementById("settings-display-name");
    this.settingsChangePasswordDiv = this.document_.getElementById("settings-change-password");
    this.tabletColorCanvas = this.document_.getElementById("tablet-color");
    this.pageTitleDiv = this.document_.getElementById("page-title");
    this.headerbarDiv = this.document_.getElementById("headerbar");
    this.marketingPanelDiv = this.document_.getElementById("marketing-panel");
    this.welcomePanelDiv = this.document_.getElementById("welcome-panel");
    this.marketingAppDiv = this.document_.getElementById("marketing-app");
    this.body = this.document_.body;
    this.logoLeftDiv = this.document_.getElementById("logo-left");
    this.logoRightDiv = this.document_.getElementById("logo-right");
    this.qrPanelDiv = this.document_.getElementById("qr-panel");
    this.tabletScreenDiv = this.document_.getElementById("tablet-screen");
    this.badgePanelDiv = this.document_.getElementById("badge-panel");
    this.badgeImageDiv = this.document_.getElementById("badge-image");
    this.assetsContentDiv = this.document_.getElementById("assets-content");
    this.assetsHeaderDiv = this.document_.getElementById("assets-header");
    this.assetsPanelDiv = this.document_.getElementById("assets-panel");
    this.helpPanelDiv = this.document_.getElementById("help-panel");
    this.copiedText = this.document_.getElementById("copied");
    this.assetSearchInput = this.document_.getElementById("asset-search");
    this.assetSearchButton = this.document_.getElementById("asset-search-button");
    this.assetSearchForm = this.document_.getElementById("asset-search-form");
    this.findCommandsLink = this.document_.getElementById("find-commands-link");
    this.findFontsLink = this.document_.getElementById("find-fonts-link");
    this.searchBarDiv = this.document_.getElementById("search-bar");
    this.iconSet = this.document_.getElementById("icon-set");
    this.leftAssetArrow = this.document_.getElementById("left-asset-arrow");
    this.rightAssetArrow = this.document_.getElementById("right-asset-arrow");
    this.assetTagsDiv = this.document_.getElementById("asset-tags");
    this.myStampsIcon = this.document_.getElementById("my-stamps");
    this.confirmCloseBtn = this.document_.getElementsByClassName("confirm-close-button")[0];
    this.deleteImageBtn = this.document_.getElementsByClassName("destroy")[0];
    this.editMenu = this.document_.getElementById("custom-asset-edit-menu");
    this.copyToGoogleLink = this.document_.getElementById("copy-to-google-link");
    this.copyToGoogleDiv = this.document_.getElementById("copy-to-google-div");
    this.emailButton = this.document_.getElementById("email-button-span");
    this.smsButton = this.document_.getElementById("sms-button");
    this.shareField = this.document_.getElementById("share-url-field");
    this.screenshotDiv = this.document_.getElementById("screenshot-div");
    this.stickInvalidEmail = this.document_.getElementById("stick-invalid-email");
    this.stickInvalidSms = this.document_.getElementById("stick-invalid-sms");
    this.emailFormTextarea = this.document_.getElementById("email-form-textarea");
    this.sendEmailButton = this.document_.getElementById("send-email-button");
    this.loadingButton = this.document_.getElementById("loading-button");
    this.loadingButtonSms = this.document_.getElementById("loading-button-sms");
    this.stickEmptyField = this.document_.getElementById("stick-empty-field");
    this.sendSmsForm = this.document_.getElementById("send-sms-form");
    this.sendSmsButton = this.document_.getElementById("send-sms-button");
    this.stickEmptyFieldSms = this.document_.getElementById("stick-empty-field-sms");
    this.stickBlockListSms = this.document_.getElementById("stick-blocklist-sms");
    this.isOpera = !!window.opr && !!opr.addons || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
    this.isSafari = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" !== typeof safari && safari.pushNotification).toString();
    this.isIE = !!document.documentMode;
    this.isEdge = !this.isIE && !!window.StyleMedia;
    this.isFirefox = "undefined" !== typeof InstallTrigger;
    this.isBlink = ((this.isChrome = !!window.chrome) || this.isOpera) && !!window.CSS;
    this.isWindows = -1 < navigator.platform.indexOf("Win32") || -1 < navigator.platform.indexOf("Win64");
    this.isMac = -1 < navigator.platform.indexOf("Mac68K") || -1 < navigator.platform.indexOf("MacPPC") || -1 < navigator.platform.indexOf("MacIntel");
    this.isiOS = -1 < navigator.platform.indexOf("iPhone") || -1 < navigator.platform.indexOf("iPod") || -1 < navigator.platform.indexOf("iPad");
    this.hasDismissedFirewallWarning_ = !1;
    this.validPages = {
        "find-stamps": !0,
        "find-fills": !0,
        "find-colors": !0,
        "find-commands": !0,
        "find-sounds": !0,
        "find-songs": !0,
        "find-fonts": !0,
        fill: !0,
        box: !0,
        circle: !0,
        color: !0,
        line: !0,
        stamp: !0,
        text: !0,
        delay: !0,
        distance: !0,
        find: !0,
        lookpeek: !0,
        loop: !0,
        random: !0,
        repeat: !0,
        reset: !0,
        drag: !0,
        sendget: !0,
        tap: !0,
        touch: !0,
        touching: !0,
        untouch: !0,
        sound: !0,
        song: !0,
        silence: !0,
        dotchange: !0,
        dotdance: !0,
        dotexplodepopsplashburnpow: !0,
        dotfontsize: !0,
        dotflip: !0,
        dotbackfront: !0,
        dotheightwidth: !0,
        dothidden: !0,
        dothideshow: !0,
        dothits: !0,
        dotmove: !0,
        dotrotate: !0,
        dotrotation: !0,
        dotsing: !0,
        dotsize: !0,
        dotswim: !0,
        dottap: !0,
        dotwrap: !0,
        dotxyz: !0,
        coordinates: !0,
        variables: !0,
        arrays: !0,
        functions: !0,
        parameters: !0,
        ifelsestatements: !0,
        loops: !0,
        arraydotforeach: !0,
        arraydotpop: !0,
        arraydotpush: !0,
        datedotnow: !0,
        datedotvalueof: !0,
        dateobject: !0,
        dotaim: !0,
        logicaloperators: !0,
        mathdotceil: !0,
        mathdotfloor: !0,
        mathdotmax: !0,
        mathdotmin: !0,
        mathdotround: !0,
        offscreen: !0,
        stringdotcharat: !0,
        stringdotsubstr: !0,
        stringdotsubstring: !0
    };
    this.sandbox_ = new codepops.Sandbox(this,this.sandboxPanelDiv);
    this.sandbox_.setOnErrorHandler(codepops.bind(this.onJSError_, this));
    this.sandbox_.setOnSuccessHandler(codepops.bind(this.onJSRun_, this));
    this.qr_ = a.QRCode || new QRCode("qr-image-panel",{
        text: "https://bitsbox.com",
        width: 320,
        height: 320,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.L
    });
    var b = "download-screenshot-link";
    this.dataStore_.isFeatureOnForUser("updatedSharePanel") && (b = "new-download-screenshot-link");
    this.downloadLink = this.document_.getElementById(b);
    this.downloadLink.addEventListener("click", codepops.bind(function() {
        this.createScreenshot_(this.currentAppKey_)
    }, this));
    this.tabletColorCtx_ = this.tabletColorCanvas.getContext("2d");
    this.tabletColorCtx_.drawImage(this.document_.getElementById("tablet-i-color"), 0, 0);
    this.pageIconDiv.onclick = codepops.bind(function() {
        this.showIconEditor()
    }, this);
    this.adminWidget_ = new codepops.AdminWidget(this);
    this.tabletColorWidget_ = new codepops.TabletColorWidget(this,a);
    this.accountConnectWidget_ = new codepops.AccountConnectWidget(this,a);
    this.draggableAppCardWidget_ = new codepops.DraggableAppCardWidget(this,a);
    this.iFrameBridgeWidget_ = new codepops.IFrameBridgeWidget(this,a);
    this.versionChooserWidget = new codepops.VersionChooserWidget(this);
    this.newAppTitleInput.placeholder = codepops.DEFAULT_APP_NAME;
    this.newAppTitleInput.onkeypress = codepops.bind(function(a) {
        13 === a.keyCode && (this.newAppTitleInput.blur(),
        this.saveNewApp())
    }, this);
    this.iconsPanelScrollerDiv = this.document_.createElement("div");
    this.iconsPanelScrollerDiv.className = "icons-panel-scroller";
    this.tabletScreenDiv.appendChild(this.iconsPanelScrollerDiv);
    this.iconsPanelDiv = this.document_.createElement("div");
    this.iconsPanelDiv.className = "icons-panel";
    this.iconsPanelScrollerDiv.appendChild(this.iconsPanelDiv);
    this.iconsPanelNavDiv = this.document_.createElement("div");
    this.iconsPanelNavDiv.className = "icons-panel-nav";
    this.tabletScreenDiv.appendChild(this.iconsPanelNavDiv);
    this.appsPerHomeScreenPage_ = 16;
    this.isMobile_ && (this.buttonNewApp.style.display = "none",
    this.pagePanelDiv.style.display = "none");
    a = codepops.bind(this.onMouseMove, this);
    var b = codepops.bind(this.onMouseOver, this)
      , c = codepops.bind(this.onMouseOut, this)
      , d = codepops.bind(this.onTouchMove, this)
      , e = codepops.bind(this.onTouchStart, this);
    this.sandbox_.setOnMouseMoveHandler(a);
    this.sandbox_.setOnMouseOverHandler(b);
    this.sandbox_.setOnMouseOutHandler(c);
    this.sandbox_.setOnTouchMoveHandler(d);
    this.sandbox_.setOnTouchStartHandler(e);
    a = codepops.bind(this.onDisplayNameChange_, this);
    this.settingsDisplayNameInput.addEventListener("change", a);
    this.document_.addEventListener("keypress", codepops.bind(function(a) {
        13 === a.keyCode && !0 === a.shiftKey && a.preventDefault()
    }, this));
    this.document_.addEventListener("keydown", codepops.bind(function(a) {
        this.lastInteraction_ = new Date;
        27 === a.keyCode && (this.window_.location.hash = "#",
        this.window_.location.hash = "#coding",
        this.hideLoginPanel(),
        this.hideSignUpPanel());
        13 === a.keyCode && !0 === a.shiftKey && editor && editor.hasFocus() && (this.run(),
        a.preventDefault());
        if (8 === a.keyCode) {
            var b = !0
              , c = event.srcElement || event.target;
            if ("INPUT" === c.tagName.toUpperCase() && ("TEXT" === c.type.toUpperCase() || "PASSWORD" === c.type.toUpperCase() || "FILE" === c.type.toUpperCase() || "EMAIL" === c.type.toUpperCase()) || "TEXTAREA" === c.tagName.toUpperCase())
                b = c.readOnly || c.disabled;
            b && a.preventDefault()
        }
    }, this));
    this.document_.addEventListener("mousedown", codepops.bind(function(a) {
        this.lastInteraction_ = new Date;
        var b = [];
        for (a = a.target; a !== this.document_.body; )
            if (b.push(a),
            a.parentNode)
                a = a.parentNode;
            else
                break;
        if (b && b.length) {
            a = !0;
            for (var c = !1, d = 0; d < b.length; d++) {
                var e = b[d].className || ""
                  , n = b[d].id || "";
                void 0 !== e.baseVal && (e = e.baseVal);
                if (-1 < e.indexOf("popdown") || -1 < n.indexOf("tablet-canvas") || "HTML" === b[d].nodeName || -1 < e.indexOf("headerbar-link") || -1 < n.indexOf("popup-background") || -1 < n.indexOf("confirm-delete-div") || -1 < n.indexOf("confirm-overwrite-div"))
                    a = !1;
                this.onCustomAssetsTour && 0 > n.indexOf("stick-custom-assets") && (e = this.assetsContentDiv.getElementsByClassName("thumb-stamp-add")[0]) && (e.classList.remove("shake"),
                c = !0,
                this.document_.getElementById("my-custom-stamps-icon").classList = "")
            }
            a && !this.displayingAnonymousSignUpPanel && this.togglePopdown("");
            c && this.hideAllSticks_()
        }
    }, this));
    this.assetSearchInput.addEventListener("keydown", codepops.bind(function(a) {
        13 === a.keycode && (a.preventDefault(),
        this.applySearchTermToHash())
    }, this));
    this.assetSearchForm.addEventListener("submit", codepops.bind(function(a) {
        a.preventDefault();
        this.applySearchTermToHash();
        return !1
    }, this));
    this.assetSearchButton.addEventListener("click", codepops.bind(this.applySearchTermToHash, this));
    this.findCommandsLink.addEventListener("click", codepops.bind(this.hideSearchBar, this));
    this.findFontsLink.addEventListener("click", codepops.bind(this.hideSearchBar, this));
    this.window_.onhashchange = codepops.bind(this.onHashChange, this);
    this.window_.onscroll = codepops.bind(this.dockHeaderbar, this);
    this.slidePause_ = 5E3;
    this.nextSlideTimer_ = this.window_.setInterval(codepops.bind(this.nextSlide, this), this.slidePause_);
    this.window_.addEventListener("scroll", function() {
        this.stickyAssetTypeBar();
        this.disableHorizontalScrolling()
    }
    .bind(this), !1);
    this.recentSearches = {
        fill: [],
        stamp: [],
        sound: [],
        song: [],
        hasLoaded: !1
    };
    this.currentAssetType = "find-stamps";
    this.leftAssetArrow.addEventListener("click", codepops.bind(function() {
        this.shiftAssetIcons("left")
    }, this));
    this.rightAssetArrow.addEventListener("click", codepops.bind(function() {
        this.shiftAssetIcons("right")
    }, this));
    this.window_.addEventListener("touchstart", codepops.bind(this.handleTouchStart, this));
    this.window_.addEventListener("touchmove", codepops.bind(this.swipeBetweenAppPages, this));
    this.window_.addEventListener("mousedown", codepops.bind(this.handleTouchStart, this));
    this.window_.addEventListener("mouseup", codepops.bind(this.swipeBetweenAppPages, this));
    if (this.myStampsIcon) {
        this.myStampsIcon.addEventListener("click", codepops.bind(function() {
            this.dataStore_.userIsAnonymous() ? this.dataStore_.isFeatureOnForUser("signUpPrompt") && this.showAnonymousSignUpPanel("customAssets") : this.displayUsersCustomAssets()
        }, this));
        a = this.document_.getElementsByClassName("nevermind");
        for (i = 0; i < a.length; i++)
            a[i].addEventListener("click", this.hideConfirmationDiv.bind(this, a[i].parentNode.id), !1);
        this.deleteImageBtn.addEventListener("click", codepops.bind(function() {
            this.deleteUsersCustomAsset()
        }, this))
    }
    this.isiOS && (-1 < this.window_.location.href.indexOf("hoc") ? a = this.document_.getElementById("welcome-image-hoc") : (a = this.document_.getElementById("welcome-card-image"),
    this.document_.getElementById("welcome-panel").classList.add("mobile"),
    this.document_.getElementById("welcome-image-code").classList.add("mobile")),
    a.classList.add("mobile"));
    codepops.localizeHtml(this.document_)
}
;
codepops.EditorPage.prototype.onPageLoaded = function(a) {
    this.tabletColorCtx_.drawImage(this.document_.getElementById("tablet-i-color"), 0, 0);
    this.library_ = a;
    this.sandbox_.setOnErrorHandler(codepops.bind(this.onJSError_, this));
    this.sandbox_.setOnSuccessHandler(codepops.bind(this.onJSRun_, this));
    this.sandbox_.setOnAssetLoadErrorHandler(codepops.bind(this.onAssetLoadError_, this));
    this.checkForExistingLogin();
    a = codepops.bind(this.onMinuteOfUse, this);
    this.window_.setInterval(a, 6E4);
    c123 && !c123.isFeatureFlagOn("ageAndGender") && this.hideAgeAndGenderDivsFromPartner()
}
;
codepops.EditorPage.prototype.dockHeaderbar = function() {
    !1 === this.isLoggedIn && (1 > this.window_.scrollY ? this.document_.getElementById("headerbar").className = "" : this.document_.getElementById("headerbar").className = "headerbar-scrolled")
}
;
codepops.EditorPage.prototype.onMouseMove = function(a) {
    var b = void 0 === a.offsetX ? a.layerX : a.offsetX;
    a = void 0 === a.offsetY ? a.layerY : a.offsetY;
    b = Math.floor(b);
    a = Math.floor(a);
    this.coordinateTickXDiv.style.width = b + "px";
    this.coordinateTickYDiv.style.height = a + "px";
    this.coordinateTickXDiv.innerHTML = "<span>x<br/>" + 2 * b + "</span>";
    this.coordinateTickYDiv.innerHTML = "<span>y<br/>" + 2 * a + "</span>"
}
;
codepops.EditorPage.prototype.onMouseOver = function(a) {
    this.coordinateTickPanelDiv.className = "visible"
}
;
codepops.EditorPage.prototype.onMouseOut = function(a) {
    this.coordinateTickPanelDiv.className = "hidden"
}
;
codepops.EditorPage.prototype.onTouchMove = function(a) {
    var b = a.touches[0].clientX;
    a = a.touches[0].clientY;
    b = Math.floor(b);
    a = Math.floor(a);
    this.coordinateTickXDiv.style.width = b + "px";
    this.coordinateTickYDiv.style.height = a + "px";
    b *= 2;
    a *= 2;
    this.coordinateTickXDiv.innerHTML = "<span>x<br/>" + b + "</span>";
    this.coordinateTickYDiv.innerHTML = "<span>y<br/>" + a + "</span>";
    if (0 > b || 0 > a || 768 < b || 1024 < a)
        this.coordinateTickPanelDiv.className = "hidden"
}
;
codepops.EditorPage.prototype.onTouchStart = function(a) {
    this.coordinateTickPanelDiv.className = "visible"
}
;
codepops.EditorPage.prototype.onHashChange = function(a) {
    this.windowHash_ = a = this.window_.location.hash || "#";
    a = a.substring(1);
    a = a.split("_");
    var b = a[0];
    a = this.trimAndSanitizeSearchTerm(a[1]);
    this.sandbox_.silence();
    if (this.validPages[b]) {
        if (a && 0 < a.length)
            this.runAssetSearch(a);
        else {
            var c = !1;
            window.XMLHttpRequest ? c = new XMLHttpRequest : window.ActiveXObject && (c = new ActiveXObject("Microsoft.XMLHTTP"));
            c.open("GET", "/docs/" + b + ".html", !0);
            c.onreadystatechange = codepops.bind(function() {
                if (4 === c.readyState) {
                    if ("find-stamps" === b && (this.dataStore_.isFeatureOnForUser("customStamps") && !this.dataStore_.userIsAnonymous() || this.dataStore_.userIsAnonymous() && this.dataStore_.isFeatureOnForUser("signUpPrompt"))) {
                        var a = this.generateAddButton();
                        this.assetsContentDiv.innerHTML = a.outerHTML + c.responseText;
                        this.addCustomAssets()
                    } else
                        this.assetsContentDiv.innerHTML = c.responseText;
                    this.applyAssetInteractionHandlers()
                }
            }, this);
            c.send()
        }
        for (var d = this.assetTagsDiv.getElementsByTagName("a"), e = !1, f = 0; f < d.length; f++) {
            var g = d[f];
            "find" === b ? this.findCommandsLink.className = "selected" : -1 < g.href.indexOf("#" + b) ? (g.className = "selected",
            e = !0) : 0 > g.className.indexOf("icons") && (g.className = "")
        }
        this.dataStore_.isFeatureOnForUser("customStamps") && !this.dataStore_.userIsAnonymous() && "find-stamps" === b ? (this.myStampsIcon.style.display = "block",
        this.customAssetsLoaded = !1,
        this.iconSet.classList.add("reduced-width")) : this.dataStore_.isFeatureOnForUser("signUpPrompt") ? this.myStampsIcon.style.display = "block" : (this.myStampsIcon.style.display = "none",
        this.iconSet.classList.remove("reduced-width"));
        this.createRecentlySearchedList();
        this.document_.getElementById("asset-search-form").reset();
        this.iconArrowsHandler();
        d = "find-" + this.getAssetType() + "s";
        if (0 === this.iconSet.getElementsByTagName("a").length || d !== this.currentAssetType)
            this.iconSet.innerHTML = "",
            setTimeout(codepops.bind(function() {
                this.generateAssetIconSet();
                var a = b.replace("find-", "");
                this.addEventListenerByClass(a + "-icons", "click", codepops.bind(this.populateSearchField, this))
            }, this), 100);
        e && "find-commands" !== b && "find-fonts" !== b ? this.showSearchBar() : ("find-fonts" === b ? this.findFontsLink.classList.add("selected") : this.findCommandsLink.classList.add("selected"),
        this.hideSearchBar());
        this.currentAssetType = b;
        a && (this.document_.getElementById("asset-search").value = decodeURI(a))
    }
}
;
codepops.EditorPage.prototype.displayThumbInSandbox = function(a) {
    var b = a.style.backgroundColor.replace(/[rgb()]/gi, "");
    a = a.title;
    var c = "'" + a + "'"
      , b = "fill(" + b + ');\nstamp("' + a + '");\ntext("' + c + '",' + (390 - 19 * c.length) + ',920,65,"black", "console");';
    if ("sun" === a || "mercury" === a || "venus" === a || "earth" === a || "moon" === a || "mars" === a || "jupiter" === a || "saturn" === a || "uranus" === a || "neptune" === a || "pluto" === a || "voyager" === a)
        b += 'text("Illustration \u00a9 Josh Lewis",384,995,25,"gray",CENTER,"Arial");';
    this.sandbox_.run(b, this.userPreferences_.customAssets)
}
;
codepops.EditorPage.prototype.applyAssetInteractionHandlers = function() {
    for (var a = this.assetsContentDiv.getElementsByClassName("thumb-stamp"), b = function(a) {
        a.addEventListener("click", function() {
            var b = a.parentNode.childNodes;
            for (l = 0; l < b.length; l++)
                b[l].classList && b[l].classList.remove("selectedThumb");
            a.classList.toggle("selectedThumb");
            void 0 !== a.childNodes[0] && -1 < a.childNodes[0].className.indexOf("animate-badge") && (a.style.borderRadius = "15px 15px 0 15px")
        })
    }, c = function(a) {
        a = a.target;
        this.displayThumbInSandbox(a);
        0 === a.title.indexOf("@") && this.showCustomAssetEditMenu(a)
    }
    .bind(this), d = function(a) {
        a = a.target.title;
        var b = "'" + a + "'"
          , c = 390 - 19 * b.length
          , b = 'fill("' + a + '");text("' + b + '",' + (c - 2) + ',918,65,"black","console");text("' + b + '",' + (c + 2) + ',922,65,"black","console");text("' + b + '",' + (c + 2) + ',918,65,"black","console");text("' + b + '",' + (c - 2) + ',922,65,"black","console");text("' + b + '",' + c + ',920,65,"white","console");';
        "space" === a && (b += 'text("Illustration \u00a9 Josh Lewis",' + c + ',995,25,"gray","Arial");');
        this.sandbox_.run(b)
    }, e = function(a) {
        a = a.target;
        a = a.innerText || a.textContent;
        var b = "'" + a + "'"
          , c = 390 - 19 * b.length;
        a = 'fill("' + a.replace(/'/gi, "") + '");text("' + b + '",' + (c - 2) + ',918,65,"black","console");text("' + b + '",' + (c + 2) + ',922,65,"black","console");text("' + b + '",' + (c + 2) + ',918,65,"black","console");text("' + b + '",' + (c - 2) + ',922,65,"black","console");text("' + b + '",' + c + ',920,65,"white","console");';
        this.sandbox_.run(a)
    }, f = function(a) {
        a = a.target;
        a = a.innerText || a.textContent;
        var b = "'" + a + "'";
        this.sandbox_.run('fill("worldofmusic");text("' + b + '",' + (390 - 19 * b.length - 2) + ',260,65,"white", "console");silence();sound("' + a + '",100);')
    }, g = function(a) {
        a = a.target;
        a = a.innerText || a.textContent;
        var b = "'" + a + "'";
        this.sandbox_.run('fill("worldofmusic");text("' + b + '",' + (390 - 19 * b.length - 2) + ',260,65,"white","console");silence();song("' + a + '",100);')
    }, h = function(a) {
        a = a.target;
        this.sandbox_.run('fill("blackboard");font = "' + (a.innerText || a.textContent) + '";align = CENTER;xPos = -956;size = 90;color = "white";line1 = text("ABCDEF",xPos,260,size,align,color,font);line2 = text("GHIJKL",xPos,360,size,align,color,font);line3 = text("MNOPQR",xPos,460,size,align,color,font);line4 = text("STUVWX",xPos,560,size,align,color,font);line5 = text("YZ",xPos,660,size,align,color,font);line6 = text("\'" + font + "\'",xPos,920,65,CENTER,color,font);words = font.split(\' \');widthIsFine = false;delay(function() {if (line6.width > 710) {line6.size(50);delay(function() {if (line6.width > 700) {words = font.split(\' \');halfWayPoint = Math.round(words.length / 2);outputStr1 = [];outputStr2 = [];for (i = 0; i < words.length; i++) {if (i < halfWayPoint) {outputStr1.push(words[i] + \' \');} else {outputStr2.push(words[i] + \' \');}}line7 = text("\'" + outputStr1.join(\'\').trim(),384,880,45,CENTER,color,font);line8 = text(outputStr2.join(\'\').trim() + "\'",384,950,45,CENTER,color,font);} else {line6.move(RIGHT,1340);}}, 50);} else {widthIsFine = true;}line3Width = line3.width;if (line3Width > 800) {newSize = 80;if (line3Width > 840) {newSize = 70;}line1.size(newSize);line2.size(newSize);line3.size(newSize);line4.size(newSize);line5.size(newSize);}line1.move(RIGHT,1340);line2.move(RIGHT,1340);line3.move(RIGHT,1340);line4.move(RIGHT,1340);line5.move(RIGHT,1340);if (widthIsFine) {line6.move(RIGHT,1340);}},800);')
    }, l = 0; l < a.length; l++) {
        var m = a[l];
        b(m);
        m.addEventListener("click", c)
    }
    a = this.assetsContentDiv.getElementsByClassName("thumb-fill");
    for (l = 0; l < a.length; l++)
        m = a[l],
        boundThumbClickHandler = codepops.bind(d, this),
        m.addEventListener("click", boundThumbClickHandler);
    a = this.assetsContentDiv.getElementsByClassName("thumb-color");
    for (l = 0; l < a.length; l++)
        m = a[l],
        boundThumbClickHandler = codepops.bind(e, this),
        m.addEventListener("click", boundThumbClickHandler);
    a = this.assetsContentDiv.getElementsByClassName("thumb-sound");
    for (l = 0; l < a.length; l++)
        m = a[l],
        boundThumbClickHandler = codepops.bind(f, this),
        m.addEventListener("click", boundThumbClickHandler);
    a = this.assetsContentDiv.getElementsByClassName("thumb-song");
    for (l = 0; l < a.length; l++)
        m = a[l],
        boundThumbClickHandler = codepops.bind(g, this),
        m.addEventListener("click", boundThumbClickHandler);
    a = this.assetsContentDiv.getElementsByClassName("thumb-font");
    for (l = 0; l < a.length; l++)
        m = a[l],
        boundThumbClickHandler = codepops.bind(h, this),
        m.addEventListener("click", boundThumbClickHandler);
    c = this.assetsContentDiv.getElementsByTagName("textarea");
    a = this.assetsContentDiv.getElementsByClassName("button-run-docs");
    b = [];
    for (l = 0; l < c.length; l++)
        b.push(c[l]);
    for (l = 0; l < b.length; l++)
        if (c = b[l],
        this.loadAssetsFromParentApp_(c.value),
        d = a[l])
            d.editor = CodeMirror.fromTextArea(c, {
                lineNumbers: !1,
                matchBrackets: !1,
                continueComments: "Enter",
                extraKeys: {
                    "Ctrl-Q": "toggleComment"
                },
                theme: "neat"
            }),
            d.sandbox_ = this.sandbox_,
            d.page = this,
            d.onclick = codepops.bind(function() {
                this.page.resetErrorOutput();
                this.sandbox_.run(this.editor.getValue())
            }, d)
}
;
codepops.EditorPage.prototype.newAppChoosePrint = function() {
    this.userPreferences_.hasSeenBitsboxCardOption = !0;
    this.dataStore_.savePreferences(this.userPreferences_);
    this.newApp();
    this.selectNewAppSubpanel("number");
    this.selectContextPanel("number");
    this.activityNumberInput.focus()
}
;
codepops.EditorPage.prototype.newAppChooseOnline = function() {
    this.userPreferences_.hasSeenBitsboxCardOption = !0;
    this.dataStore_.savePreferences(this.userPreferences_);
    this.newApp();
    this.selectNewAppSubpanel("online");
    this.selectContextPanel("online");
    this.contextPanelDiv.innerHTML = $t("We suggest you start with our super-fun online coding activities!")
}
;
codepops.EditorPage.prototype.newApp = function() {
    this.finishTourStop("first-app");
    this.hideAllSticks_();
    this.exitReorganizingMode_();
    this.activityNumberInput.value = "";
    this.bubbleMaskDiv.innerHTML = "XXXX";
    this.activityNumberErrorDiv.innerHTML = "";
    this.activityNumberInput.focus();
    var a = "" + window.location;
    this.dataStore_.userIsAnonymous() && -1 < a.indexOf("hoc2016") ? (this.newAppIconsDiv.innerHTML = "",
    this.newAppPanelDiv.className = "visible",
    this.activityNumberInput.blur(),
    this.selectNewAppSubpanel("online"),
    this.hoc2016TutorialsAreComplete() || (this.selectContextPanel("online"),
    this.contextPanelDiv.innerHTML = "Can you complete all four of these app coding challenges?")) : !this.userPreferences_.hasSeenBitsboxCardOption && c123.isFeatureFlagOn("bitsboxCardOptionModal") ? (this.newAppIconsDiv.innerHTML = "",
    this.document_.getElementById("stick-print-or-online").className = "stick stick-info",
    this.activityNumberInput.blur()) : (this.newAppPanelDiv.className = "visible",
    this.dataStore_.isFeatureOnForUser("newAppAli") && (this.selectNewAppSubpanel("online"),
    (a = (this.document_.getElementById("new-app-subpanel-online") || {}).getElementsByTagName("button")) && a.length && (a[0].innerHTML = $t("Find an app to code") + "&raquo;")),
    this.dataStore_.userIsAnonymous() && c123.isFeatureFlagOn("signUpPrompt") && 2 < this.userPreferences_.appsCreated && this.showAnonymousSignUpPanel("multipleApps"))
}
;
codepops.EditorPage.prototype.saveNewApp = function(a) {
    if (!this.isSavingNewApp_) {
        this.isSavingNewApp_ = !0;
        this.window_.setTimeout(codepops.bind(function() {
            this.isSavingNewApp_ = !1
        }, this), 1E3);
        this.finishTourStop("first-app-named");
        a = a || {};
        var b = $t(a.title) || this.newAppTitleInput.value || $t("New App")
          , c = a.iconUrl || "/img/icon-question.png";
        if (!c)
            var d = $_page.selectedNewIconDiv_.style.backgroundImage
              , c = d.substring(4, d.length - 1);
        var e = a.code || "\n\n\n\n\n\n\n\n"
          , d = this.generateAppKey_();
        codepops.trackEvent("editor", "newApp", d);
        var f = {
            title: b,
            iconUrl: c,
            code: e,
            appKey: d
        };
        a.tutorialName ? (f.tutorialName = a.tutorialName,
        f.tutorialStep = a.tutorialStep) : this.tutorialRecord_ = null;
        a.iconCode && (f.iconCode = a.iconCode);
        a.parentActivityNumber && (f.parentActivityNumber = a.parentActivityNumber);
        a.parentActivityCode && (f.parentActivityCode = a.parentActivityCode);
        this.apps_[d] = f;
        b = function(a) {
            a || this.updateQRCode_(f.appKey)
        }
        .bind(this);
        this.dataStore_.saveApp(f, b);
        this.renderAppsList_();
        !1 !== a.launch && (this.launch(d, !0),
        this.scrollToLastHomeScreenPage_());
        this.userPreferences_.appsCreated = this.userPreferences_.appsCreated || 0;
        this.userPreferences_.appsCreated += 1;
        this.dataStore_.savePreferences(this.userPreferences_)
    }
}
;
codepops.EditorPage.prototype.updateQRCode_ = function(a) {
    var b = "http://bitsbox.com";
    a && this.apps_[a] && this.apps_[a].shortcut && (b = this.generateRunpageUrl_(a));
    this.qr_.makeCode(b);
    (a = this.document_.getElementById("qr-image-panel")) && a.getElementsByTagName("img")[0] && a.getElementsByTagName("img")[0].setAttribute("alt", "QR Code");
    this.shareField && (this.shareField.value = "https://" + b.substring(8));
    if (a = this.document_.getElementById("open-link-new-tab-button"))
        a.href = "https://" + b.substring(8);
    if (a = this.document_.getElementById("share-link"))
        a.href = b
}
;
codepops.EditorPage.prototype.generateRunpageUrl_ = function(a) {
    var b = "https://bitsbox.com";
    if (a && this.apps_[a] && this.apps_[a].shortcut) {
        var c = this.window_.location.hostname
          , d = this.window_.location.pathname;
        c && -1 < c.toLowerCase().indexOf("bitsboxstaging") && (b = "https://bitsboxstaging.firebaseapp.com");
        if (c && -1 < c.toLowerCase().indexOf("leukprogrammeren.nl") || d && "/squla.html" === d)
            b = "https://leukprogrammeren.nl";
        c && -1 < c.toLowerCase().indexOf("ali.bitsbox.com") && (b = "https://ali.bitsbox.com");
        c && -1 < c.toLowerCase().indexOf("bitsboxcms.com") && (b = "https://alistaging.bitsbox.com");
        return b + "/run.html?" + this.apps_[a].shortcut
    }
    return b
}
;
codepops.EditorPage.prototype.generateShareImage = function(a, b) {
    var c = this.document_.createElement("canvas");
    c.width = 476;
    c.height = 249;
    var d = c.getContext("2d")
      , e = function(a, b) {
        var c = new Image;
        c.onload = b;
        c.setAttribute("crossOrigin", "anonymous");
        c.src = a;
        return c
    }
      , f = 0
      , g = function() {
        f += 1;
        if (2 === f) {
            d.drawImage(m, 0, 0);
            d.drawImage(l, 152, 39, 174, 174);
            var a = c.toDataURL();
            b(a)
        }
    }
      , h = "../img/icon-background-dark-blue.jpg ../img/icon-background-green.jpg ../img/icon-background-grey.jpg ../img/icon-background-lt-blue.jpg ../img/icon-background-orange.jpg ../img/icon-background-purple.jpg ../img/icon-background-red.jpg".split(" ")[(new Date).getDay()]
      , l = e(a, g)
      , m = e(h, g)
}
;
codepops.EditorPage.prototype.createScreenshot_ = function(a) {
    var b = "screenshot";
    a && this.apps_[a] && this.apps_[a].title && (b = this.apps_[a].title);
    a = b + ".png";
    var c = this.document_.createElement("a");
    c.href = window.$_page.toDataURL();
    c.download = a;
    c.innerHTML = c.download;
    var d = new MouseEvent("click",{
        view: window,
        bubbles: !0,
        cancelable: !0
    });
    this.isSafari ? this.window_.setTimeout(function() {
        c.dispatchEvent(d)
    }, 1) : c.dispatchEvent(d)
}
;
codepops.EditorPage.prototype.onJSError_ = function(a) {
    this.sandbox_.resetLoop();
    if (!(this.timeOfLastError_ && 500 > new Date - this.timeOfLastError_)) {
        this.timeOfLastError_ = new Date;
        this.resetErrorOutput();
        this.errorPanelDiv.style.display = "block";
        var b = "" + a;
        this.errorTranslationDiv.innerHTML = "";
        this.errorLineDiv.innerHTML = "";
        this.errorHelpDiv.innerHTML = "";
        this.errorMessageDiv.innerHTML = "";
        a = editor.getValue();
        var c = (new codepops.ErrorHandler).getMostImportantError(a, b)
          , b = c.line || 0;
        this.errorLineDiv.innerHTML = b ? $t("Near Line") + " " + b : "";
        c.translation && (this.errorTranslationDiv.innerHTML = $t(c.translation) || "");
        this.errorMessageDiv.innerHTML = $t(c.reason);
        this.errorHelpDiv.innerHTML = $t("You have an error. Here's what the computer says is wrong.");
        if ((c = document.getElementsByClassName("CodeMirror-linenumber")) && b)
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.innerHTML === b && (e.className += " CodeMirror-linenumber-error")
            }
        if (b = this.apps_[this.currentAppKey_])
            b.hasError = !0,
            b.errorCount ? b.errorCount++ : b.errorCount = 1;
        a !== this.appCodeFromLastError_ && (this.appCodeFromLastError_ = a);
        this.tutorialHelp()
    }
}
;
codepops.EditorPage.prototype.onJSRun_ = function() {
    this.tutorialRecord_ && this.tutorialRecord_.hideTutorialPanel && this.window_.setTimeout(codepops.bind(function() {
        this.tutorialTest(!0)
    }, this), 100)
}
;
codepops.EditorPage.prototype.onAssetLoadError_ = function(a, b) {
    var c = codepops.cleanAssetName(a);
    this.dataStore_.recordMissingAsset_(c, b)
}
;
codepops.EditorPage.prototype.isShowingError_ = function() {
    return "block" === this.errorPanelDiv.style.display
}
;
codepops.EditorPage.prototype.generateAppKey_ = function() {
    var a = 0, b;
    for (b in this.apps_) {
        var c = parseFloat(b.replace("app", ""));
        c > a && (a = c)
    }
    return "app" + (a + 1)
}
;
codepops.EditorPage.prototype.renderAppsList_ = function(a) {
    a = a || {};
    var b = a.targetDiv || this.iconsPanelDiv
      , c = a.inVersionChooser || !1;
    a = a.apps || this.apps_;
    b.innerHTML = "";
    var d = codepops.bind(function(a) {
        if (!this.isReorganizing_) {
            a = a.target.appKey || a.target.parentElement.appKey;
            var b = this.apps_[a];
            b.tutorialName && !1 === this.hasDoneTutorialPrereqs_(b.tutorialName) ? (a = codepops[b.tutorialName],
            this.alert($t("Unlock that one by finishing ") + " " + this.getTutorialTitle_(a.prerequisite) + "!")) : this.launch(a)
        }
    }, this), e = codepops.bind(function(a) {
        if (!0 !== c) {
            var b = codepops.bind(this.enterReorganizingMode_, this);
            this.holdTimerId_ = setTimeout(b, 1E3);
            this.holdTimerTarget_ = a.target
        }
    }, this), f = codepops.bind(function(a) {
        this.holdTimerId_ && (clearTimeout(this.holdTimerId_),
        this.holdTimerId_ = null)
    }, this), g = [], h;
    for (h in a)
        g.push(h);
    g.sort(function(a, b) {
        var c = parseFloat(a.replace("app", ""))
          , d = parseFloat(b.replace("app", ""));
        return c - d
    });
    h = -1;
    var l = null
      , m = this.document_.createElement("table");
    b.appendChild(m);
    b = this.document_.createElement("tr");
    m.appendChild(b);
    for (m = 0; m < g.length; m++) {
        var n = Math.floor(m / this.appsPerHomeScreenPage_);
        n > h && (h = n,
        l = this.document_.createElement("td"),
        l.className = "icons-panel-page",
        b.appendChild(l));
        var p = g[m]
          , s = a[p]
          , n = this.document_.createElement("div");
        !0 !== c && (n.id = "icon-container-" + p);
        n.className = "icon-container";
        n.appKey = p;
        n.onclick = d;
        n.onmouseup = f;
        n.onmousedown = e;
        n.ontouchstart = e;
        n.ontouchend = f;
        if (s.tutorialName && !1 === this.hasDoneTutorialPrereqs_(s.tutorialName)) {
            var q = this.document_.createElement("div");
            q.className = "icon-lock";
            n.appendChild(q)
        }
        q = this.document_.createElement("div");
        q.className = "icon";
        !0 !== c && (q.id = "icon-" + p);
        var r = s.iconUrl;
        r && 0 > r.indexOf("data:") && 0 > r.indexOf("http") && !r.startsWith("/") && (r = "/" + r);
        q.style.backgroundImage = "url(" + r + ")";
        n.appendChild(q);
        s.activityNumber && (q.innerHTML = "<span>" + s.activityNumber + "</span>");
        !0 !== c && (r = this.document_.createElement("div"),
        r.id = "button-delete-app-" + p,
        r.className = "button-delete-app hidden",
        r.title = $t("Delete App"),
        r.appKey = p,
        r.onclick = codepops.bind(this.deleteApp_, this),
        q.appendChild(r));
        p = this.document_.createTextNode(s.title);
        n.appendChild(p);
        l.appendChild(n)
    }
}
;
codepops.EditorPage.prototype.checkForExistingLogin = function() {
    var a = codepops.bind(this.handleLoginSuccess_, this)
      , b = codepops.bind(this.handleLoginFailure_, this);
    this.dataStore_.checkForExistingLogin(a, b)
}
;
codepops.EditorPage.prototype.login = function(a, b, c, d) {
    this.customLoginComplete_ = b;
    a = a || "password";
    c = c || this.emailInput.value;
    d = d || this.passwordInput.value;
    if ("password" !== a || c && d) {
        this.loadingDiv.className = "visible";
        this.tabletDiv.className = "centered";
        this.marketingAppDiv.className = "hidden";
        -1 === c.indexOf("@") && (c = this.bulkAccountPrefix_ + "+" + c + "@" + this.loginBaseDomain_);
        this.hideLoginPanel();
        b = codepops.bind(this.handleLoginSuccess_, this);
        var e = codepops.bind(this.handleLoginFailure_, this);
        "password" !== a && (d = c = null);
        this.dataStore_.login(a, b, e, c, d)
    } else
        this.emailInput.focus()
}
;
codepops.EditorPage.prototype.partnerLogin = function(a, b, c, d) {
    this.tabletColorWidget_.setColor("0,0,0");
    a = a + "+" + b + "@" + this.loginBaseDomain_;
    this.loadingDiv.className = "visible";
    this.tabletDiv.className = "centered";
    this.marketingAppDiv.className = "hidden";
    this.hideLoginPanel();
    this.partnerDisplayName = d;
    d = this.handleLoginSuccess_.bind(this);
    b = this.handleLoginFailure_.bind(this);
    this.dataStore_.partnerLogin(d, b, a, c, "password")
}
;
codepops.EditorPage.prototype.deleteApp_ = function(a) {
    this.window_.confirm($t("Are you sure you want to delete this app?")) && (appKey = a.target.appKey,
    codepops.trackEvent("editor", "delete"),
    this.document_.getElementById("icon-container-" + appKey).style.display = "none",
    this.dataStore_.deleteApp(this.apps_[appKey], function() {}),
    delete this.apps_[appKey])
}
;
codepops.EditorPage.prototype.handleLoginSuccess_ = function(a) {
    if (a && a.providerId) {
        if (this.window_.parent) {
            var b = a.email || ""
              , c = b.split(/[@\+]/)
              , d = c[1];
            -1 == b.indexOf("+") && (d = c[0]);
            this.window_.parent.postMessage({
                action: "bitsbox-auth-complete",
                uid: d
            }, "*")
        }
        this.document_.documentElement.classList.add("overflow-scrolling");
        this.document_.body.classList.add("overflow-scrolling");
        this.dataStore_.isFeatureOnForUser("draggableAppCards") && (b = this.document_.createElement("script"),
        b.src = "../lib/interactjs/interact.min.js",
        this.document_.head.appendChild(b));
        b = codepops.bind(function(b) {
            this.isLoggedIn = !0;
            b = b.val() || {};
            this.preserveAnonymousData_ && (b.preferences = codepops.clone(this.userPreferences_),
            b.apps = codepops.clone(this.apps_),
            b.preferences.hasSeenBitsboxCardOption = !1,
            this.dataStore_.savePreferences(b.preferences),
            this.dataStore_.saveAllApps(b.apps),
            this.dataStore_.recordTourConversion());
            this.apps_ = b.apps || {};
            shouldStartTour = !1;
            b.preferences ? this.userPreferences_ = b.preferences : shouldStartTour = !0;
            this.userPreferences_.tabletColor && this.tabletColorWidget_.setColor(this.userPreferences_.tabletColor);
            this.userPreferences_.tabletColor = this.userPreferences_.tabletColor || "rgb(0,0,0)";
            this.userPreferences_.tabletBackgroundUrl = this.userPreferences_.tabletBackgroundUrl || "img/tablet-screen-1.png";
            this.onMinuteOfUse();
            this.initializeSettingsPanel_(this.userPreferences_);
            this.updateAwardCounts_();
            this.loadRecentlySearchedList();
            b = codepops.randomName();
            a.displayName ? (b = a.displayName.split(" "),
            b = b[0]) : a.email && (b = a.email.split("@"),
            b = b[0],
            b = b.replace("bulk+", ""),
            b = b.replace("coders+", ""));
            b = codepops.toTitleCase(b);
            this.userPreferences_.displayName ? b = this.userPreferences_.displayName : this.partnerDisplayName && (b = this.partnerDisplayName);
            this.userDisplayName_ = b;
            this.settingsDisplayNameInput.value = this.userDisplayName_;
            this.window_.scrollTo(0, 0);
            this.tabletTitleDiv.innerHTML = b + "'s tablet";
            this.pageAuthorDiv.innerHTML = $t("By") + " " + b;
            this.tabletDiv.className = "centered";
            this.hideLoginPanel();
            this.loadingDiv.className = "hidden";
            this.renderAppsList_();
            this.customLoginComplete_ && this.customLoginComplete_();
            this.dataStore_.userIsAnonymous() ? this.showTourHeaderBar_() : this.showLoggedInHeaderBar_();
            this.home();
            if (c123.isAliPage_()) {
                for (var c = document.querySelectorAll('[popdownid="nav-panel"]'), d = 0; d < c.length; d++)
                    c[d].style.visibility = "hidden";
                c = document.getElementById("ali-loading-screen");
                d = document.getElementById("code-loading");
                c.classList.add("hidden");
                d.style.zIndex = "0";
                d.style.marginTop = "30px"
            }
            (c = c123.getQueryParameter("activityNumber")) && this.newAppFromActivityNumber(c);
            (d = c123.getQueryParameter("tutorial")) && this.installTutorial_(d, !0);
            var h = c123.getQueryParameter("shortcut");
            if (h)
                for (var l in this.apps_)
                    this.apps_[l].shortcut == h && this.launch(l);
            l = c123.getQueryParameter("embedded");
            if (shouldStartTour && !l)
                this.dataStore_.isFeatureOnForUser("accountConnectWidget") && !1 === this.dataStore_.userIsAnonymous() ? this.accountConnectWidget_.show(function() {
                    this.startTour(!0)
                }
                .bind(this)) : this.startTour(!0);
            else {
                var m = this.document_.getElementById("stick-welcome-back");
                c || d || h || l || (m.className = "stick",
                codepops.setContent("stick-welcome-back-text", $t("Welcome back, ") + codepops.toTitleCase(b) + "!"));
                this.document_.getElementById("get-started-panel").className = "hidden";
                !l && this.preserveAnonymousData_ && this.dataStore_.isFeatureOnForUser("accountConnectWidget") && (m.style.display = "none",
                this.accountConnectWidget_.show(function() {
                    m.style.display = "block"
                }))
            }
            this.preserveAnonymousData_ = !1;
            if (navigator.userAgent.match(/(ipad|iphone|ipod|android)/gi) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints && !window.MSStream)
                l = "Welcome back, " + codepops.toTitleCase(b) + '! <br> Are you on a touch screen? Bitsbox works best on a computer with a keyboard. <a target="_blank" href="/faq.html">Read our FAQ</a>.',
                c123.isAliPage_() || (m.className = "stick hidden",
                this.alert(l, !0));
            if (this.dataStore_.isFeatureOnForUser("updatedSharePanel")) {
                this.qrPanelDiv = this.document_.getElementById("new-qr-panel");
                this.copyToGoogleDiv = this.document_.getElementById("new-copy-to-google-div");
                this.copyToGoogleLink = this.document_.getElementById("new-copy-to-google-link");
                this.helpPanelDiv = this.document_.getElementById("new-help-panel");
                this.screenshotDiv = this.document_.getElementById("new-screenshot-div");
                this.shareField = this.document_.getElementById("new-share-url-field");
                this.emailButton = this.document_.getElementById("new-email-button-span");
                this.smsButton = this.document_.getElementById("new-sms-button");
                this.stickInvalidEmail = this.document_.getElementById("new-stick-invalid-email");
                this.emailFormTextarea = this.document_.getElementById("new-email-form-textarea");
                this.stickInvalidSms = this.document_.getElementById("new-stick-invalid-sms");
                this.stickEmptyField = this.document_.getElementById("new-stick-empty-field");
                this.sendSmsForm = this.document_.getElementById("new-send-sms-form");
                this.sendSmsButton = this.document_.getElementById("new-send-sms-button");
                this.stickEmptyFieldSms = this.document_.getElementById("new-stick-empty-field-sms");
                this.stickBlockListSms = this.document_.getElementById("new-stick-blocklist-sms");
                this.sendEmailButton = this.document_.getElementById("new-send-email-button");
                this.loadingButton = this.document_.getElementById("new-loading-button");
                this.loadingButtonSms = this.document_.getElementById("new-loading-button-sms");
                l = this.document_.getElementById("qr-image-panel");
                (b = this.document_.getElementById("new-qr-image-panel")) && b.replaceWith(l);
                l = this.document_.querySelectorAll("[onclick=\"$_page.togglePopdown('qr-panel')\"]");
                for (b = 0; b < l.length; b++)
                    shareIconDiv = l[b],
                    shareIconDiv.setAttribute("onclick", "$_page.togglePopdown('new-qr-panel')");
                if (!this.dataStore_.isFeatureOnForUser("shareAppViaText") || this.dataStore_.isFeatureOnForUser("shareAppViaText") && !this.dataStore_.isFeatureOnForUser("copyToGoogleDoc"))
                    this.qrPanelDiv.style.height = "442px"
            }
        }, this);
        this.dataStore_.getCurrentKid(b, function(a) {
            this.alert(a)
        })
    } else
        this.handleLoginFailure_("")
}
;
codepops.EditorPage.prototype.handleLoginFailure_ = function(a) {
    this.window_.parent && this.window_.parent.postMessage({
        action: "bitsbox-auth-complete",
        uid: null,
        error: a
    }, "*");
    var b = !1;
    if (a) {
        this.alert(codepops.friendlyBackendError_(a), "INVALID_USER" === a.code || "auth/user-not-found" === a.code || "auth/too-many-requests" === a.code);
        this.showLoginPanel();
        this.emailInput.focus();
        b = "email";
        if ("INVALID_PASSWORD" === a.code || "auth/wrong-password" === a.code)
            this.passwordInput.focus(),
            b = "password";
        var c = function() {
            var a = this.document_.getElementById("stick-alert")
              , e = this.document_.getElementById(b);
            a.classList.add("hidden");
            e.removeEventListener("keydown", c, !0)
        }
        .bind(this);
        b && this.document_.getElementById(b).addEventListener("keydown", c, !0)
    }
    this.updateHeaderBarLinks(codepops.NavigationState.ABOUT_PAGE);
    this.showLoggedOutHeaderBar_();
    this.loadingDiv.className = "hidden";
    this.marketingAppDiv.className = "";
    this.tabletDiv.className = "welcome"
}
;
codepops.EditorPage.prototype.logout = function() {
    this.isLoggedIn = !1;
    this.home();
    this.passwordInput.value = "";
    this.tabletDiv.className = "welcome";
    this.hideLoginPanel();
    this.hideSignUpPanel();
    this.dataStore_.logout();
    c123.isFeatureFlagOn("grownupAccounts") && (this.window_.location = "/welcome/");
    this.document_.documentElement.classList.remove("overflow-scrolling");
    this.document_.body.classList.remove("overflow-scrolling");
    this.marketingPanelDiv.className = "";
    this.headerbarDiv.className = "";
    this.body.style.backgroundColor = "white";
    this.welcomePanelDiv.className = "";
    this.marketingAppDiv.className = "";
    this.logoLeftDiv.className = "hidden";
    this.logoRightDiv.className = "hidden";
    this.updateHeaderBarLinks(codepops.NavigationState.ABOUT_PAGE);
    this.tabletColorWidget_.renderColor("rgb(0,0,0)");
    this.hideAllSticks_();
    this.assetsContentDiv.innerHTML = '<span style="display:block; text-align:center;">Loading...</span>';
    this.userPreferences_ = {
        tabletColor: "rgb(0,0,0)",
        tabletBackgroundUrl: "img/tablet-screen-1.png"
    };
    this.apps_ = {};
    this.showLoggedOutHeaderBar_();
    this.hasShownPrintOnlineChoice_ = this.isInTour_ = !1;
    this.tutorialRecord_ = null;
    this.resetAwardCounts_();
    this.recentSearches = {};
    this.document_.getElementById("asset-search-form").reset();
    this.hasShownAssetsPanel_ = !1
}
;
codepops.EditorPage.prototype.hideAllSticks_ = function() {
    for (var a = this.document_.getElementsByClassName("stick"), b = 0; b < a.length; b++)
        "stick-alert" === a[b].id && c123.isAliPage_() || (a[b].className = ("" + a[b].className).replace(/\s*hidden/gi, ""),
        a[b].className += " hidden");
    this.instructionPanelDiv.className = "hidden";
    this.contextPanelDiv.classList.add("hidden");
    if (a = this.document_.getElementById("secondary-instruction-panel"))
        a.className = "hidden"
}
;
codepops.EditorPage.prototype.launch = function(a, b) {
    this.hideSharingSideBar_();
    this.hideAllSticks_();
    this.updateQRCode_(a);
    if (this.isMobile_)
        window.location = "run.html?" + this.apps_[a].shortcut;
    else {
        codepops.trackEvent("editor", "launch", a);
        var c = this.dataStore_.getCurrentUser()
          , d = "/collab/users/" + c.uid + "/kids/" + this.dataStore_.getCurrentKidId() + "/apps/" + a;
        this.sandbox_.setCollabPath(d);
        var e = this.apps_[a];
        this.currentAppKey_ = a;
        this.pageTitleInput.value = e.title;
        this.pageTitleInput.setAttribute("aria-label", e.title);
        this.pageIconDiv.style.backgroundImage = "url(" + e.iconUrl + ")";
        this.tabletDiv.className = "left";
        this.buttonRunDiv.className = "visible";
        this.pagePanelDiv.className = "visible";
        this.sandboxPanelDiv.className = "visible";
        this.newAppPanelDiv.className = "hidden";
        this.logoRightDiv.className = "visible";
        this.logoLeftDiv.className = "hidden";
        this.adminWidget_.show(e);
        this.togglePopdown("");
        this.updateHeaderBarLinks(codepops.NavigationState.CODING_APP);
        editor.setValue(e.code);
        editor.focus();
        50 <= editor.lineInfo(0).text.length ? editor.setCursor(0, 0) : editor.setCursor(0, 999);
        this.setupLineNumberEventHandlers_();
        this.setupAddMoreLinesHandler_();
        this.launchingNewApp = b;
        editor.refresh();
        this.window_.scrollTo(0, 0);
        editor.clearHistory();
        this.run();
        e.tutorialName && (d = e.tutorialStep || 0,
        this.userPreferences_.currentTutorial = e.tutorialName,
        this.tutorialRecord_ = codepops[e.tutorialName],
        this.tutorialGo(d));
        this.dataStore_.isFeatureOnForUser("draggableAppCards") && (this.tabletDiv.style.left = "35px",
        this.pagePanelDiv.style.marginLeft = "50px",
        this.buttonRunDiv.style.left = "515px",
        this.instructionPanelDiv.style.marginLeft = "25px");
        this.dataStore_.isFeatureOnForUser("draggableAppCards") && e.parentActivityNumber && this.draggableAppCardWidget_ && (d = this.userPreferences_.lastCardPosition || void 0,
        b && this.draggableAppCardWidget_.isDocked(d) && (d = this.draggableAppCardWidget_.defaultCardPosition),
        this.draggableAppCardWidget_.displayAppCard(e.parentActivityNumber, d));
        window.UserVoice && (d = "",
        this.currentAppKey_ && (d = this.generateRunpageUrl_(this.currentAppKey_)),
        c && c.uid && (d = d + "#" + c.uid),
        UserVoice.push(["set", {
            ticket_custom_fields: {
                runpage_url: d
            }
        }]));
        navigator.userAgent.match(/(ipad|iphone|ipod|android)/gi) && (c = function() {
            this.document_.body.scrollTop = 0
        }
        .bind(this),
        setTimeout(c, 50));
        void 0 === e.shareImage && (c = function(b) {
            this.dataStore_.uploadShareImage(b, a, "share_icon", null, null, function(a) {
                e.shareImage = {
                    url: a
                }
            });
            this.hasSavedShareImage = !0
        }
        .bind(this),
        this.generateShareImage(e.iconUrl, c))
    }
}
;
codepops.EditorPage.prototype.home = function() {
    this.tabletDiv.style.left = "";
    this.togglePopdown("");
    this.isEditingApp_() || this.isReorganizing_ || "visible" === this.settingsPanelDiv.className || "visible" === this.newAppPanelDiv.className ? this.isLoggedIn && this.finishTourStop("go-home") : this.scrollToHomeScreenPage_(0);
    if (this.isEditingApp_()) {
        var a = this.apps_[this.currentAppKey_];
        a.title = this.pageTitleInput.value;
        a.code = editor.getValue();
        this.dataStore_.saveApp(a, function(a) {
            a && console.error("Error while saving app: " + a)
        })
    }
    this.tutorialRecord_ = this.currentAppKey_ = null;
    this.hideSharingSideBar_();
    this.hideAllSticks_();
    this.sandbox_.silence();
    this.sandbox_.resetLibrary();
    this.exitReorganizingMode_();
    codepops.trackEvent("editor", "home", this.currentAppKey_);
    this.tabletDiv.className = "centered";
    this.buttonRunDiv.className = "hidden";
    this.pagePanelDiv.className = "hidden";
    this.sandboxPanelDiv.className = "hidden";
    this.newAppPanelDiv.className = "hidden";
    this.errorPanelDiv.style.display = "none";
    this.coordinateTickPanelDiv.className = "hidden";
    this.settingsPanelDiv.className = "hidden";
    this.marketingPanelDiv.className = "hidden";
    this.headerbarDiv.className = "white-bg";
    this.body.style.backgroundColor = "white";
    this.welcomePanelDiv.className = "hidden";
    this.marketingAppDiv.className = "hidden";
    this.logoLeftDiv.className = "visible";
    this.logoRightDiv.className = "hidden";
    this.iconEditorIFrame_ && (this.iconEditorIFrame_.style.display = "none");
    this.updateQRCode_();
    this.adminWidget_.hide();
    this.versionChooserWidget.hide();
    this.togglePopdown("");
    this.updateHeaderBarLinks(codepops.NavigationState.CODING_HOMESCREEN);
    this.dataStore_.userIsAnonymous() && this.hasCustomApps_() ? this.document_.getElementById("button-alert").className = "visible" : this.document_.getElementById("button-alert").className = "hidden";
    a = "" + window.location;
    this.dataStore_.userIsAnonymous() && -1 < a.indexOf("hoc2016") && this.hoc2016TutorialsAreComplete() && !this.hoc2016AlertHasBeenShown && ($_page.alert('<div class="hoc2016-complete"><img src="img/celebrate.gif">Whoa! You\'ve done all four apps! Click to <a href="hoc2016-certificate.html" target="_blank">get an award!</a></div>', !0),
    this.hoc2016AlertHasBeenShown = !0);
    this.dataStore_.isFeatureOnForUser("draggableAppCards") && this.draggableAppCardWidget_.removeAppCard();
    this.enterKeyDisabled && (this.document_.getElementById("editor-panel").removeEventListener("keydown", this.disableEnterKey, !0),
    this.enterKeyDisabled = !1)
}
;
codepops.EditorPage.prototype.updateHeaderBarLinks = function(a) {
    for (var b = this.document_.getElementsByClassName("only-visible-when-viewing-app"), c = 0; c < b.length; c++)
        a === codepops.NavigationState.CODING_APP ? (b[c].className = b[c].className.replace(" hidden", ""),
        b[c].className = b[c].className.replace(" visible", ""),
        b[c].className += " visible") : (b[c].className = b[c].className.replace(" hidden", ""),
        b[c].className = b[c].className.replace(" visible", ""),
        b[c].className += " hidden");
    var b = this.document_.getElementById("nav-item-about-page")
      , c = this.document_.getElementById("nav-item-coding")
      , d = this.document_.getElementById("nav-item-store")
      , e = this.document_.getElementById("nav-item-help")
      , f = this.document_.getElementById("nav-item-sign-in")
      , g = this.document_.getElementById("nav-item-sign-out")
      , h = this.document_.getElementById("nav-item-sign-up")
      , l = this.document_.getElementById("nav-item-save")
      , m = this.document_.getElementById("nav-item-exit")
      , n = this.document_.getElementById("nav-item-switch-accounts");
    b.className = a === codepops.NavigationState.ABOUT_PAGE ? "nav-item hidden" : "nav-item";
    c.className = a === codepops.NavigationState.CODING_HOMESCREEN || a === codepops.NavigationState.CODING_APP ? "nav-item hidden" : "nav-item";
    d.className = a === codepops.NavigationState.STORE ? "nav-item hidden" : "nav-item";
    e.className = a === codepops.NavigationState.HELP ? "nav-item hidden" : "nav-item";
    this.isLoggedIn ? (f.className = "nav-item hidden",
    g.className = "nav-item",
    h.className = "nav-item hidden",
    n.className = "nav-item") : (f.className = "nav-item",
    g.className = "nav-item hidden",
    h.className = "nav-item",
    n.className = "nav-item hidden");
    l.className = "nav-item hidden";
    m.className = "nav-item hidden";
    this.isLoggedIn && this.dataStore_.userIsAnonymous() && (l.className = "nav-item",
    m.className = "nav-item",
    n.className = "nav-item hidden",
    g.className = "nav-item hidden")
}
;
codepops.EditorPage.prototype.countCreatedApps_ = function() {
    return Object.keys(this.apps_).length
}
;
codepops.EditorPage.prototype.exitReorganizingMode_ = function() {
    for (var a in this.apps_)
        this.document_.getElementById("button-delete-app-" + a).className = "button-delete-app hidden",
        this.document_.getElementById("icon-container-" + a).className = "icon-container",
        this.document_.getElementById("icon-" + a).className = "icon";
    this.reorganizingIntervalId_ && this.window_.clearTimeout(this.reorganizingIntervalId_);
    this.isReorganizing_ = !1
}
;
codepops.EditorPage.prototype.enterReorganizingMode_ = function() {
    if (!this.isReorganizing_) {
        for (var a in this.apps_)
            this.document_.getElementById("button-delete-app-" + a).className = "button-delete-app visible";
        this.reorganizingIntervalId_ = this.window_.setInterval(codepops.bind(function() {
            for (var a in this.apps_) {
                var c = this.document_.getElementById("icon-" + a);
                "icon tilt-left" === c.className ? c.className = "icon tilt-right" : "icon tilt-right" === c.className ? c.className = "icon tilt-left" : 0.5 > Math.random() ? c.className = "icon tilt-left" : c.className = "icon tilt-right"
            }
        }, this), 100);
        this.isReorganizing_ = !0
    }
}
;
codepops.EditorPage.prototype.customize = function() {
    this.hideAllSticks_();
    var a = this.dataStore_.getCurrentUser()
      , b = a && a.email && 0 === a.email.indexOf("bulk+") && -1 < a.email.indexOf("@bitsbox.com")
      , c = a && a.email && 0 === a.email.indexOf("coders+") && -1 < a.email.indexOf("@youtz.com")
      , a = a && a.email && 0 === a.email.indexOf("ali+") && -1 < a.email.indexOf("@bitsbox.com");
    b || c || a ? this.settingsChangePasswordDiv.style.display = "none" : this.dataStore_.userIsAnonymous() ? this.settingsChangePasswordDiv && (this.settingsChangePasswordDiv.style.display = "none") : this.settingsChangePasswordDiv && (this.settingsChangePasswordDiv.style.display = "block");
    if (c123.isAliPage_()) {
        b = this.document_.getElementById("settings-background-slider2");
        c = this.document_.getElementById("settings-background-slider3");
        b.style.display = "block";
        c.style.display = "block";
        b = this.document_.getElementsByClassName("tablet-ui-slider");
        for (c = 0; c < b.length; c++)
            b[c].style.paddingTop = "7px",
            b[c].style.paddingBottom = "7px";
        b = this.document_.getElementsByClassName("tablet-ui-label");
        for (c = 0; c < b.length; c++)
            b[c].style.paddingTop = "20px";
        0 === this.settingsDisplayNameInput.value.indexOf("Ali+") && (this.partnerDisplayName = "Coder" + codepops.randomString(6),
        this.settingsDisplayNameInput.value = this.partnerDisplayName)
    }
    this.settingsPanelDiv.className = "visible";
    this.finishTourStop("special")
}
;
codepops.EditorPage.prototype.resetErrorOutput = function() {
    this.errorPanelDiv.style.display = "none";
    for (var a = document.getElementsByClassName("CodeMirror-linenumber-error"), b = 0; b < a.length; b++)
        a[b].className = a[b].className.replace(/ CodeMirror-linenumber-error/gi, "")
}
;
codepops.EditorPage.prototype.pause = function() {
    this.library_.pause();
    this.library_.silence();
    var a = this.sandbox_.getRunningLibrary();
    a && (a.pause(),
    a.silence())
}
;
codepops.EditorPage.prototype.unpause = function() {
    this.library_.unpause();
    var a = this.sandbox_.getRunningLibrary();
    a && a.unpause()
}
;
codepops.EditorPage.prototype.runAppIfInApp = function() {
    this.isEditingApp_() && this.run()
}
;
codepops.EditorPage.prototype.run = function() {
    codepops.trackEvent("editor", "run", this.currentAppKey_);
    console.log(this.currentAppKey_);
    this.resetErrorOutput();
    var mapObj = {
        background:"fill",
        sticker:"stamp",
     };
    // var a = editor.getValue().replace(/background|sticker/gi, function(matched){
    //     return mapObj[matched];
    // });
    var a = editor.getValue();
    console.log(a);
    if (5 <= this.library_.numberOfStampLoadErrors && !this.hasDismissedFirewallWarning_) {
        var b = this.document_.getElementById("firewall-warning");
        b && (b.style.display = "block")
    }
    b = editor.getCursor("start");
    console.log("b is ",b)
    a = a.replace(/\u00b4/g, "'");
    editor.setValue(a);
    editor.setCursor(b.line, b.ch);
    b = this.userPreferences_.currentTutorial;
    if (this.tutorialRecord_ && this.tutorialRecord_.hideTutorialPanel && !this.hasCompletedTutorial_(b) && !this.secondToLastStepInTutorial_("TutorialWelcome", "TutorialSoLongHomework") && (b = this.tutorialRecord_.steps[this.userPreferences_.currentTutorialStep]) && b.stickLine) {
        var a = a.split("\n")
          , c = b.stickLine;
        b.extraBlankLines && (c += b.extraBlankLines);
        a = a.slice(0, c).join("\n") + "\n\n";
        editor.setValue(a)
    }
    b = this.apps_[this.currentAppKey_];
    b.title = this.pageTitleInput.value;
    console.log("line 4860",editor.getValue());
    // b.code = editor.getValue().replace(/background|sticker/gi, function(matched){
    //     return mapObj[matched];
    // });
    b.code = editor.getValue();
    b.hasError = !1;
    this.unpause();
    console.log(this.userPreferences_.customAssets);
    this.sandbox_.run(a, this.userPreferences_.customAssets);
    this.renderAppsList_();
    a = this.document_.getElementById("app-card-container");
    this.dataStore_.isFeatureOnForUser("draggableAppCards") && null !== a && void 0 !== a && !this.launchingNewApp ? this.draggableAppCardWidget_.dockAppCard() : this.launchingNewApp && (this.launchingNewApp = !1)
}
;
codepops.EditorPage.prototype.share = function() {
    this.document_.getElementById("stick-first-app").classList.add("hidden");
    this.shareNameInput = this.document_.getElementById("share-name");
    this.shareEmailInput = this.document_.getElementById("share-email");
    this.shareBodyDiv = this.document_.getElementById("share-body");
    this.shareNameInput.onchange = codepops.bind(this.renderShareEmail, this);
    this.shareEmailInput.onchange = codepops.bind(this.renderShareEmail, this);
    this.shareSendButton.onclick = codepops.bind(this.sendShare, this);
    this.exitReorganizingMode_();
    this.renderShareEmail()
}
;
codepops.EditorPage.prototype.renderShareEmail = function() {
    var a = [];
    a.push("Dear ", codepops.toTitleCase(this.shareNameInput.value || this.shareNameInput.placeholder), ",");
    a.push("<p>I'm learning to program computers! Take a look at the cool apps I've made so far.<ul>");
    for (var b in this.apps_) {
        var c = this.apps_[b];
        a.push('<li><a href="https://bitsbox.com/run.html?', c.shortcut, '" target="_blank">', codepops.toTitleCase(c.title), "</a>")
    }
    a.push("</ul><P>Thanks!<br/>" + this.userDisplayName_);
    this.document_.getElementById("share-body").innerHTML = a.join("")
}
;
codepops.EditorPage.prototype.sendShare = function() {
    codepops.trackEvent("editor", "share");
    var a = "send-email-form";
    this.dataStore_.isFeatureOnForUser("updatedSharePanel") && (a = "new-send-email-form");
    if (a = this.document_.getElementById(a)) {
        var b = a.elements;
        if (b && b.to && b.message) {
            var a = b.message.value
              , c = this.dataStore_.getCurrentUser()
              , a = a.replace(/\n/g, "<br/>")
              , b = {
                from_name: this.userDisplayName_,
                to: b.to.value,
                subject: this.userDisplayName_ + "'s Apps",
                message_body: a
            };
            0 > a.indexOf("run.html?") && (b.runpage_link = "Here's a link to view my app: " + this.generateRunpageUrl_(this.currentAppKey_) + "\n\n");
            c.email && (b.reply_to = c.email);
            var d = !1;
            window.XMLHttpRequest ? d = new XMLHttpRequest : window.ActiveXObject && (d = new ActiveXObject("Microsoft.XMLHTTP"));
            d.open("POST", "https://codepops.com/share/share_email.php", !0);
            d.onreadystatechange = codepops.bind(function() {
                if (4 === d.readyState) {
                    var a = JSON.parse(d.responseText);
                    this.sendEmailResponseHandler(a)
                }
            }, this);
            d.send(JSON.stringify(b));
            this.sendEmailButton.classList.add("ajax");
            this.sendEmailButton.disabled = !0;
            this.loadingButton.style.display = "block";
            this.sendEmailButton.value = ""
        }
    }
}
;
codepops.EditorPage.prototype.sendShareSMS = function() {
    codepops.trackEvent("editor", "shareSMS");
    if (this.sendSmsForm) {
        var a = this.sendSmsForm.elements;
        if (a && a.to) {
            var b = this.userDisplayName_ + " coded an app with Bitsbox! Click this link to play it: " + this.generateRunpageUrl_(this.currentAppKey_) + "\n\nThis is an automated message. Please do not reply to this message."
              , a = {
                to: a.to.value,
                message_body: b
            }
              , c = !1;
            window.XMLHttpRequest ? c = new XMLHttpRequest : window.ActiveXObject && (c = new ActiveXObject("Microsoft.XMLHTTP"));
            c.open("POST", "https://codepops.com/share/share_sms.php", !0);
            c.onreadystatechange = codepops.bind(function() {
                if (4 === c.readyState) {
                    var a = JSON.parse(c.responseText);
                    this.sendSMSResponseHandler(a)
                }
            }, this);
            c.send(JSON.stringify(a));
            this.sendSmsButton.classList.add("ajax");
            this.sendSmsButton.disabled = !0;
            this.loadingButtonSms.style.display = "block";
            this.sendSmsButton.value = ""
        }
    }
}
;
codepops.EditorPage.prototype.awardCoin_ = function() {
    var a = this.document_.createElement("div")
      , b = this.document_.createElement("div")
      , c = this.document_.createElement("img");
    c.src = "img/coin.png";
    b.appendChild(c);
    b.style.backgroundColor = codepops.randomColor();
    a.appendChild(b);
    a.className = "coin-x";
    a.style.marginLeft = this.library_.random(-80, 0) + "px";
    b.className = "coin-y";
    b.style.marginTop = this.library_.random(-60, -20) + "px";
    this.document_.body.appendChild(a);
    this.library_.sound("popcoin");
    setTimeout(function() {
        var c = Math.floor(10 * Math.random())
          , d = Math.floor(10 * Math.random());
        a.className = "coin-x coin-x-animation-end-" + c;
        b.className = "coin-y coin-y-animation-end-" + d
    }, 10);
    setTimeout(function() {
        a.parentNode.removeChild(a)
    }, 610);
    if (c = this.document_.getElementById("badge-coin-counter")) {
        var d = parseFloat(c.innerHTML);
        d++;
        c.innerHTML = d
    }
}
;
codepops.EditorPage.prototype.awardCoins_ = function(a) {
    var b;
    b = Math.max(1E3 / (a / 2), 200);
    b = Math.min(b, 300);
    for (var c = codepops.bind(this.awardCoin_, this), d = 0; d < a; d++)
        this.window_.setTimeout(c, b * d + 100 * Math.random());
    c = codepops.bind(this.dockBadgePanel_, this);
    this.window_.setTimeout(c, b * a + 2500);
    c = codepops.bind(this.hideBadgePanel_, this);
    this.window_.setTimeout(c, b * a + 3100)
}
;
codepops.EditorPage.prototype.updateAwardCounts_ = function() {
    var a = this.userPreferences_.coinsEarned || 0
      , b = Object.keys(this.userPreferences_.badges || {}).length;
    codepops.setContent("coin-count", a);
    codepops.setContent("badge-count", b)
}
;
codepops.EditorPage.prototype.resetAwardCounts_ = function() {
    this.hoc2016AlertHasBeenShown = !1;
    codepops.setContent("coin-count", 0);
    codepops.setContent("badge-count", 0)
}
;
codepops.EditorPage.prototype.awardBadge_ = function(a) {
    var b = codepops.Badge[a];
    if (!b)
        console.warn('The badge "' + a + "\" doesn't exist.");
    else if (!this.userPreferences_.badges || !this.userPreferences_.badges[a]) {
        var c = b.coins || 0;
        this.userPreferences_.badges = this.userPreferences_.badges || {};
        this.userPreferences_.badges[a] = (new Date).getTime();
        this.userPreferences_.coinsEarned = this.userPreferences_.coinsEarned || 0;
        this.userPreferences_.coinsEarned += c;
        this.dataStore_.savePreferences(this.userPreferences_);
        this.library_.sound("chaching");
        this.badgePanelDiv.className = "";
        this.badgeImageDiv.style.backgroundImage = "url(" + b.path + ")";
        codepops.setContent("badge-title", $t(b.title));
        a = $t(b.description).replace("[DISPLAYNAME]", this.userDisplayName_);
        codepops.setContent("badge-description", a);
        codepops.setContent("badge-coins", $t('You earned <b id="badge-coin-counter">0</b> popcoins!'));
        a = codepops.bind(function() {
            this.awardCoins_(c)
        }, this);
        this.window_.setTimeout(a, 2E3)
    }
}
;
codepops.EditorPage.prototype.hideBadgePanel_ = function() {
    this.badgePanelDiv.className = "hidden"
}
;
codepops.EditorPage.prototype.dockBadgePanel_ = function() {
    this.library_.sound("power", 50);
    this.badgePanelDiv.className = "docked";
    this.updateAwardCounts_()
}
;
codepops.EditorPage.prototype.saveTabletColor = function(a) {
    this.userPreferences_.tabletColor = a;
    this.tabletColorWidget_.renderColor(a);
    this.dataStore_.savePreferences(this.userPreferences_)
}
;
codepops.EditorPage.prototype.saveDisplayName = function(a) {
    this.userPreferences_.displayName = a;
    this.dataStore_.savePreferences(this.userPreferences_)
}
;
codepops.EditorPage.prototype.savePreference = function(a, b) {
    this.userPreferences_[a] = b;
    this.dataStore_.savePreferences(this.userPreferences_)
}
;
codepops.EditorPage.prototype.onDisplayNameChange_ = function(a) {
    this.userDisplayName_ = this.settingsDisplayNameInput.value;
    this.pageAuthorDiv.innerHTML = "By " + this.userDisplayName_;
    this.saveDisplayName(this.userDisplayName_)
}
;
codepops.EditorPage.prototype.setUiColor = function(a, b, c) {
    var d = "rgb(" + a + "," + b + "," + c + ")"
      , e = d
      , f = "rgba(" + a + "," + b + "," + c + ",.5)";
    180 < a && 180 < b && 180 < c && (e = "rgb(180,180,180)",
    f = "rgba(180,180,180,.5)");
    a = this.tabletColorCanvas.width;
    b = this.tabletColorCanvas.height;
    this.pageTitleDiv.style.color = e;
    this.tabletColorCtx_.globalCompositeOperation = "source-atop";
    this.tabletColorCtx_.fillStyle = d;
    this.tabletColorCtx_.fillRect(0, 0, a, b);
    this.tabletColorCtx_.globalCompositeOperation = null;
    if (!c123.isAliPage_()) {
        d = this.document_.getElementsByClassName("tablet-ui-head");
        for (a = 0; a < d.length; a++)
            d[a].style.backgroundColor = e;
        e = this.document_.getElementsByClassName("tablet-ui-label");
        for (d = 0; d < e.length; d++)
            e[d].style.borderTop = "1px solid " + f
    }
}
;
codepops.EditorPage.prototype.initializeSettingsPanel_ = function(a) {
    for (var b = this.document_.getElementsByClassName("settings-selector-category"), c = this, d, e, f = 0; f < b.length; f++) {
        d = b[f].getElementsByClassName("settings-selector");
        var g = (b[f].attributes.preferencekey || {}).value;
        if (g)
            for (var h = 0; h < d.length; h++) {
                e = d[h];
                var l = e.innerHTML;
                e.className = a[g] && (l === a[g] || "OTHER" === l && "NONBINARY" === a[g]) ? "settings-selector selected" : "settings-selector"
            }
    }
    for (f = 0; f < b.length; f++)
        for (d = b[f].getElementsByClassName("settings-selector"),
        h = 0; h < d.length; h++)
            e = d[h],
            e.onclick = function(a) {
                var b = a.target.parentNode
                  , d = b.getElementsByClassName("settings-selector")
                  , e = !1
                  , f = ""
                  , b = (b.attributes.preferencekey || {}).value;
                -1 < a.target.className.indexOf("selected") && (e = !0);
                for (var g = 0; g < d.length; g++)
                    d[g].className = "settings-selector";
                e || (f = a.target.innerHTML,
                a.target.className = "settings-selector selected");
                "OTHER" === f && (f = "NONBINARY");
                b && c.savePreference(b, f)
            }
            ;
    d = this.document_.getElementsByClassName("tablet-ui-slider");
    b = [];
    for (f = 0; f < d.length; f++)
        for (e = d[f].getElementsByTagName("img"),
        h = 0; h < e.length; h++)
            b.push(e[h]);
    for (var m = this.tabletScreenDiv, h = function() {
        var a = this.parentNode.parentNode.parentNode.getElementsByClassName("settings-background");
        for (k = 0; k < a.length; k++)
            a[k].className = "settings-background";
        a = this.attributes.path.value;
        m.style.backgroundImage = "url(" + a + ")";
        this.parentNode.className = "settings-background selected";
        c.savePreference("tabletBackgroundUrl", a)
    }, f = 0; f < b.length; f++)
        d = b[f],
        d.parentNode.className = d.attributes.path.value === a.tabletBackgroundUrl ? "settings-background selected" : "settings-background",
        d.onclick = h.bind(d);
    this.tabletScreenDiv.style.backgroundImage = "url(" + a.tabletBackgroundUrl + ")"
}
;
codepops.EditorPage.prototype.startTour = function(a) {
    this.window_.localStorage && (this.window_.localStorage.hasSeenSignUpPanel = "no");
    this.marketingAppDiv.className = "hidden";
    var b = codepops.bind(function() {
        1 < this.window_.location.href.indexOf("hoc") ? this.firstApp() : this.dataStore_.userIsAnonymous() ? this.document_.getElementById("get-started-panel").className = "visible" : this.firstApp();
        if (0 === this.howManyAppsInstalled_()) {
            this.dataStore_.recordTourStart();
            for (var a = 0; a < this.tutorials_.length; a++)
                this.installTutorial_(this.tutorials_[a])
        }
    }, this);
    this.isTourStopFinished_ = {};
    this.isInTour_ = !0;
    this.userPreferences_.currentTutorial = this.userPreferences_.currentTutorial || "TutorialHelloWorld";
    this.userPreferences_.currentTutorialStep = 0;
    this.userPreferences_.completedTutorials = {};
    a ? b() : this.login("anonymous", b)
}
;
codepops.EditorPage.prototype.firstApp = function() {
    this.document_.getElementById("stick-new-tablet").className = "stick stick-info";
    this.document_.getElementById("get-started-panel").className = "hidden"
}
;
codepops.EditorPage.prototype.nextSlide = function() {
    var a = this.document_.getElementById("marketing-app-background");
    this.currentSlide_ = this.currentSlide_ || 0;
    this.currentSlide_++;
    a.style.backgroundPosition = -12 + -384 * this.currentSlide_ + "px -12px";
    this.window_.clearTimeout(this.nextSlideTimer_);
    this.nextSlideTimer_ = this.window_.setInterval(codepops.bind(this.nextSlide, this), this.slidePause_)
}
;
codepops.EditorPage.prototype.finishTourStop = function(a) {
    "new-tablet" === a && (this.document_.getElementById("stick-new-tablet").className = "stick hidden",
    this.document_.getElementById("stick-tutorials").className = "stick stick-right");
    "go-home" === a && (this.document_.getElementById("stick-go-home").classList.add("hidden"),
    this.isInTour_ && !this.isTourStopFinished_["go-home"] && this.window_.setTimeout(function() {
        document.getElementById("stick-first-app").className = "stick stick-right"
    }, 500));
    "first-app" === a && (this.isTourStopFinished_["go-home"] = !0);
    this.isTourStopFinished_[a] = !0
}
;
codepops.EditorPage.prototype.onMinuteOfUse = function() {
    60 >= (new Date - this.lastInteraction_) / 1E3 && (this.dataStore_.recordMinuteOfUse(),
    this.dataStore_.recordAppMinuteOfUse(this.apps_[this.currentAppKey_]))
}
;
codepops.EditorPage.prototype.showLoginPanel = function() {
    this.dataStore_.getCurrentUser() && this.logout();
    this.togglePopdown("");
    this.loginPanelDiv.className = "visible";
    codepops.setContent("sign-in-header", $t("Kids Sign In"));
    this.document_.getElementById("stick-login-panel").className = "stick stick-inline";
    this.document_.getElementById("forgot-password-panel").className = "hidden";
    this.hideSignUpPanel();
    this.emailInput.focus();
    this.document_.getElementById("popup-background").className = "visible"
}
;
codepops.EditorPage.prototype.hideLoginPanel = function() {
    this.loginPanelDiv.className = "hidden";
    this.document_.getElementById("stick-login-panel").className = "stick stick-inline hidden";
    this.document_.getElementById("popup-background").className = "hidden"
}
;
codepops.EditorPage.prototype.loginWithGoogle = function() {
    this.hideLoginPanel();
    this.hideSignUpPanel();
    this.hideChangePasswordPanel();
    this.dataStore_.login("google")
}
;
codepops.EditorPage.prototype.cancelLoginOrSignUp = function() {
    this.hideLoginPanel();
    this.hideSignUpPanel();
    this.hideChangePasswordPanel();
    this.isLoggedIn || (this.tabletDiv.className = "welcome")
}
;
codepops.EditorPage.prototype.showSignUpPanel = function(a, b) {
    this.togglePopdown("");
    this.document_.getElementById("sign-up-panel").className = "visible";
    this.document_.getElementById("stick-sign-up-panel").className = "stick stick-inline";
    this.hideLoginPanel();
    this.document_.getElementById("sign-up-email").value = "";
    this.document_.getElementById("sign-up-password").value = "";
    this.document_.getElementById("sign-up-password2").value = "";
    this.document_.getElementById("sign-up-email").focus();
    var c = this.document_.getElementById("no-thanks");
    a ? (codepops.setContent("sign-up-header", $t("Create a free kid's account to save your apps.")),
    c.style.display = "inline-block",
    c.onclick = b ? codepops.bind(this.hideSignUpPanel, this) : codepops.bind(this.logout, this)) : (codepops.setContent("sign-up-header", $t("Sign up for a free kid's account!")),
    c.style.display = "none");
    this.document_.getElementById("popup-background").className = "visible"
}
;
codepops.EditorPage.prototype.hideSignUpPanel = function() {
    this.document_.getElementById("sign-up-panel").className = "hidden";
    this.document_.getElementById("stick-sign-up-panel").className = "stick stick-inline hidden";
    this.document_.getElementById("popup-background").className = "hidden"
}
;
codepops.EditorPage.prototype.showAnonymousSignUpPanel = function(a) {
    this.document_.getElementById("sign-up-panel").className = "visible";
    this.document_.getElementById("stick-sign-up-panel").className = "stick stick-inline";
    this.hideLoginPanel();
    this.document_.getElementById("sign-up-email").value = "";
    this.document_.getElementById("sign-up-password").value = "";
    this.document_.getElementById("sign-up-password2").value = "";
    this.document_.getElementById("sign-up-email").focus();
    for (var b = this.document_.getElementById("no-thanks"), c = this.document_.getElementById("stick-sign-up-panel"), d = c.children, e, f = 0; f < d.length; f++)
        if (-1 < d[f].className.indexOf("stick-button-close")) {
            e = d[f];
            break
        }
    "multipleApps" === a && codepops.setContent("sign-up-header", $t("<strong>Sign up</strong> for a free kid's account <br> to <strong>save your work</strong>!"));
    "customAssets" === a && codepops.setContent("sign-up-header", $t("<strong>Sign up</strong> for a free kid's account <br> to get <strong>custom stamps</strong>!"));
    d = function() {
        this.hideAnonymousSignUpPanel(a)
    }
    .bind(this);
    b.onclick = d;
    c.onclick = d;
    void 0 !== e && (e.onclick = d);
    this.document_.getElementById("popup-background").className = "visible";
    this.displayingAnonymousSignUpPanel = !0
}
;
codepops.EditorPage.prototype.hideAnonymousSignUpPanel = function(a) {
    this.document_.getElementById("sign-up-panel").className = "hidden";
    this.document_.getElementById("stick-sign-up-panel").className = "stick stick-inline hidden";
    this.document_.getElementById("popup-background").className = "hidden";
    this.displayingAnonymousSignUpPanel = !1;
    "multipleApps" === a && this.activityNumberInput.focus()
}
;
codepops.EditorPage.prototype.showLoggedOutHeaderBar_ = function() {
    this.document_.getElementById("headerbar-logged-out").style.display = "block";
    this.document_.getElementById("headerbar-tour").style.display = "none";
    this.document_.getElementById("headerbar-logged-in").style.display = "none";
    this.document_.getElementById("button-start-tour").style.visibility = "visible"
}
;
codepops.EditorPage.prototype.showLoggedInHeaderBar_ = function() {
    this.document_.getElementById("headerbar-logged-out").style.display = "none";
    this.document_.getElementById("headerbar-tour").style.display = "none";
    this.document_.getElementById("headerbar-logged-in").style.display = "block";
    this.document_.getElementById("button-start-tour").style.visibility = "visible";
    this.dockHeaderbar()
}
;
codepops.EditorPage.prototype.showTourHeaderBar_ = function() {
    this.document_.getElementById("headerbar-logged-out").style.display = "none";
    this.document_.getElementById("headerbar-tour").style.display = "block";
    this.document_.getElementById("headerbar-logged-in").style.display = "none"
}
;
codepops.EditorPage.prototype.showForgotPasswordPanel = function() {
    this.showLoginPanel();
    codepops.setContent("forgot-password-status", "");
    codepops.setContent("sign-in-header", $t("I forgot my password."));
    this.document_.getElementById("forgot-password-panel").className = "";
    this.document_.getElementById("forgot-password-email").focus()
}
;
codepops.EditorPage.prototype.sendForgotPasswordEmail = function(a) {
    var b = codepops.bind(function() {
        codepops.setContent("forgot-password-status", $t("Success! Please check your email inbox."))
    }, this)
      , c = codepops.bind(function(a) {
        a = codepops.friendlyBackendError_(a);
        this.alert(a, !0);
        codepops.setContent("forgot-password-status", "")
    }, this)
      , d = codepops.getContent("forgot-password-email");
    d && d.length && (codepops.setContent("forgot-password-status", $t("Sending...")),
    this.dataStore_.sendPasswordResetEmail(d, b, c));
    a && a.preventDefault && a.preventDefault();
    return !1
}
;
codepops.EditorPage.prototype.signUp = function(a) {
    a && a.preventDefault && a.preventDefault();
    a = codepops.getContent("sign-up-email");
    var b = codepops.getContent("sign-up-password")
      , c = codepops.getContent("sign-up-password2");
    this.dataStore_.userIsAnonymous() && (this.preserveAnonymousData_ = !0);
    var d = codepops.bind(function() {
        this.dataStore_.recordKidCreated();
        this.hideSignUpPanel();
        this.window_.location.hash = "#";
        this.hasShownAssetsPanel_ = !1;
        codepops.setContent("why-sign-up-toggle", $t("Why do I need a Bitsbox account?"))
    }, this)
      , e = codepops.bind(function(a) {
        a = codepops.friendlyBackendError_(a);
        codepops.setContent("why-sign-up-toggle", a)
    }, this);
    document.getElementById("why-sign-up").className = "hidden";
    if (!a)
        return document.getElementById("sign-up-email").focus(),
        codepops.setContent("why-sign-up-toggle", $t("Oops. That's not a real email.")),
        !1;
    if (b !== c)
        return document.getElementById("sign-up-password2").focus(),
        codepops.setContent("why-sign-up-toggle", $t("Those passwords don't match.")),
        !1;
    codepops.setContent("why-sign-up-toggle", $t("Signing Up..."));
    this.dataStore_.logout();
    this.dataStore_.signUp(a, b, d, e);
    return !1
}
;
codepops.EditorPage.prototype.togglePopdown = function(a) {
    var b;
    a && (b = this.document_.getElementById(a));
    var c = this.window_.pageYOffset, d, e, f = this.document_.getElementById("app-card-container");
    "assets-panel" === a ? this.openingAssetPanel_ ? (this.openingAssetPanel_ = !1,
    this.savedSpotInCode_ = c,
    c = this.document_.documentElement,
    c.classList.remove("overflow-scrolling"),
    this.document_.body.classList.remove("overflow-scrolling"),
    c = this.document_.getElementsByClassName("thumb-stamp-bg1"),
    this.dataStore_.isFeatureOnForUser("customStamps") && !this.dataStore_.userIsAnonymous() && 0 < c.length && !this.userHasCustomAssets() && (this.dataStore_.hasSeenToolTips_("TipCustomAssets") || this.initCustomAssetsTour()),
    this.dataStore_.isFeatureOnForUser("draggableAppCards") && null !== f && void 0 !== f && (f.style.pointerEvents = "none",
    f.style.position = "fixed",
    f.style.zIndex = "599")) : (this.openingAssetPanel_ = !0,
    this.window_.scroll(0, this.savedSpotInCode_),
    c = this.document_.documentElement,
    c.classList.add("overflow-scrolling"),
    this.document_.body.classList.add("overflow-scrolling"),
    this.dataStore_.isFeatureOnForUser("draggableAppCards") && null !== f && void 0 !== f && (f.style.pointerEvents = "auto",
    f.style.position = "absolute",
    f.style.zIndex = "unset")) : (this.openingAssetPanel_ || (this.openingAssetPanel_ = !0,
    this.dataStore_.isFeatureOnForUser("draggableAppCards") && null !== f && void 0 !== f && (f.style.pointerEvents = "auto",
    f.style.position = "absolute",
    f.style.zIndex = "unset")),
    c = this.document_.documentElement,
    c.classList.add("overflow-scrolling"),
    this.document_.body.classList.add("overflow-scrolling"));
    f = !1;
    b && -1 < b.className.indexOf("hidden") && (f = !0);
    -1 < this.assetsPanelDiv.className.indexOf("visible") && this.run();
    "ad-popup-panel" === a && f && (c = document.createElement("script"),
    c.src = "https://codepops.com/logger/record-hoc-info-click.php",
    this.document_.body.appendChild(c));
    e = this.document_.getElementsByClassName("popdown");
    for (c = 0; c < e.length; c++)
        e[c].className = e[c].className.replace("visible", "hidden");
    this.copiedText && (this.copiedText.style.display = "none");
    this.contextPanelDiv && this.contextPanelDiv.classList.add("hidden");
    this.helpPanelDiv && this.helpPanelDiv.classList.add("hidden");
    this.copyToGoogleLink && (this.copyToGoogleLink.innerHTML = $t("Copy all to clipboard"));
    d = this.document_.getElementsByClassName("headerbar-link");
    for (var g = [], c = 0; c < d.length; c++)
        e = d[c],
        e.classList.remove("selected"),
        e.attributes.popdownid && -1 < a.indexOf(e.attributes.popdownid.value) && g.push(e);
    if (f) {
        b.className = b.className.replace("hidden", "visible");
        for (c = 0; c < g.length; c++)
            e = g[c],
            e.classList.add("selected"),
            b = this.document_.getElementById("share-image"),
            "send-email-panel-sent" === e.attributes.popdownid.value || "send-sms-panel-sent" === e.attributes.popdownid.value ? b.classList.add("selected") : "send-sms-panel" === e.attributes.popdownid.value ? (b.classList.add("selected"),
            this.dataStore_.isFeatureOnForUser("updatedSharePanel") && this.personalizeSMSMessagePreview()) : "send-email-panel" === e.attributes.popdownid.value && (b.classList.add("selected"),
            this.inputRunpageURL());
        this.moveCursorToStart(this.emailFormTextarea);
        if ("qr-panel" === a || "new-qr-panel" === a) {
            if (this.dataStore_.isFeatureOnForUser("copyToGoogleDoc")) {
                b = this.document_.getElementsByClassName("new-copy-to-google-div")[0];
                this.copyToGoogleDiv && (this.dataStore_.isFeatureOnForUser("updatedSharePanel") ? this.copyToGoogleDiv.style.display = "inline-block" : this.copyToGoogleDiv.style.display = "block",
                b && (b.style.display = "initial"));
                this.dataStore_.isFeatureOnForUser("updatedSharePanel") || (this.screenshotDiv.style.backgroundColor = "#dadada");
                b = window.$_page.toDataURL();
                var h = new Image
                  , l = this.document_.createElement("canvas");
                l.width = 192;
                l.height = 256;
                var m = l.getContext("2d")
                  , n = new Image
                  , p = this.document_.createElement("div");
                p.id = "google-copy-screenshot-div";
                p.style.position = "absolute";
                p.style.left = "-2500px";
                h.onload = function() {
                    m.drawImage(h, 0, 0, 192, 256);
                    n.src = l.toDataURL();
                    p.appendChild(n);
                    this.document_.body.appendChild(p)
                }
                .bind(this);
                h.src = b
            } else
                this.dataStore_.isFeatureOnForUser("updatedSharePanel") && !this.dataStore_.isFeatureOnForUser("shareAppViaText") && (this.qrPanelDiv.style.height = "413px");
            this.dataStore_.isFeatureOnForUser("shareAppViaText") && this.smsButton && (this.smsButton.style.display = "block")
        }
        "assets-panel" === a && (this.window_.scrollTo(0, 0),
        this.hasShownAssetsPanel_ || (this.window_.location.hash = "#",
        this.window_.location.hash = "#find-stamps",
        this.hasShownAssetsPanel_ = !0),
        "" === this.findCommandsLink.className && "" === this.findFontsLink.className && this.showSearchBar());
        void 0 === this.iconSet && (this.firstElementsIndex_ = 1,
        "#find-colors" === window.location.hash && (this.firstElementsIndex_ = 0),
        this.currentSearchIconIndex_ = this.firstElementsIndex_);
        a = this.document_.getElementById("close-button");
        this.isEdge || this.isChrome && !this.copiedToGoogleDoc ? a.style.marginTop = "-28px" : this.isChrome && this.copiedToGoogleDoc && (a.style.marginTop = "0");
        a = this.document_.getElementById("asset-search-button");
        this.isWindows && this.isFirefox ? a.classList.add("windows-firefox") : this.isWindows && (a.style.height = "2.3em");
        this.dataStore_.isFeatureOnForUser("updatedSharePanel") && this.document_.getElementById("new-share-url-field").select()
    } else
        "qr-panel" !== a && "new-qr-panel" !== a || !this.dataStore_.isFeatureOnForUser("copyToGoogleDoc") || (a = this.document_.getElementById("google-copy-screenshot-div")) && this.document_.body.removeChild(a)
}
;
codepops.EditorPage.prototype.loadRecentlySearchedList = function() {
    var a = {};
    this.recentSearches.hasLoaded ? a = this.recentSearches : this.userPreferences_.searchList && (a = this.userPreferences_.searchList,
    a.hasLoaded = !0);
    var b = this.document_.getElementById("recently-searched");
    a.hasLoaded ? (this.recentSearches = a,
    b.className = "") : b.className = "hidden";
    this.createRecentlySearchedList(a);
    this.saveRecentlySearchedList(a)
}
;
codepops.EditorPage.prototype.sendSms = function(a, b) {
    client.messages.create({
        body: "Jenny please?! I love you <3",
        to: "+15558675309",
        from: "+14158141829",
        mediaUrl: "http://www.example.com/hearts.png"
    }, function(a, b) {
        process.stdout.write(b.sid)
    })
}
;
codepops.EditorPage.prototype.installTutorial_ = function(a, b) {
    if (codepops[a]) {
        var c = codepops[a]
          , d = this.getAppKeyByTitle_(c.title);
        d ? b && this.launch(d) : this.saveNewApp({
            title: c.title,
            iconUrl: c.iconUrl,
            code: c.code,
            iconCode: c.iconCode,
            tutorialName: a,
            tutorialStep: 0,
            launch: b || !1
        })
    } else
        this.alert('ERROR: Could not find the tutorial "' + a + '"'),
        this.userPreferences_.currentTutorial = null,
        this.userPreferences_.currentTutorialStep = null
}
;
codepops.EditorPage.prototype.tutorialNext = function() {
    this.lastCode_ = editor.getValue();
    console.log("line 5506"+this.editor.getValue());
    this.tutorialGo(this.userPreferences_.currentTutorialStep + 1)
}
;
codepops.EditorPage.prototype.tutorialTest = function(a) {
    var b = this.tutorialRecord_.steps[this.userPreferences_.currentTutorialStep];
    if (b && b.success)
        if (a || this.run(),
        this.isShowingError_())
            this.tutorialFocus();
        else {
            var c = b.success
              , d = this.sandbox_.getRunningLibrary()
              , c = c.replace(/\{\{(\w+)\}\}/g, function(a, b) {
                return d && d.stateLog && d.stateLog[b] ? 3 === d.stateLog[b].split(",").length ? "a custom color" : d.stateLog[b] : "NOMATCH"
            });
            if (-1 < c.indexOf("NOMATCH"))
                this.tutorialRecord_.hideTutorialPanel || (this.document_.getElementById("stick-try-again").className = "stick");
            else if (b.requireCodeChange && this.lastCode_ === editor.getValue())
                this.tutorialRecord_.hideTutorialPanel || (this.document_.getElementById("stick-try-again").className = "stick");
            else if (c = editor.getValue(),
            b.requiredRegularExpression && null === c.match(b.requiredRegularExpression))
                this.tutorialRecord_.hideTutorialPanel || (this.document_.getElementById("stick-try-again").className = "stick");
            else {
                c = /\<code\>([^\<]*)<\/code\>/gi.exec(b.text || "");
                b = "";
                c && c[1] && (b = c[1]);
                if (b && (c = editor.getValue(),
                !1 === codepops.doesCodeContain(c, b))) {
                    this.tutorialRecord_.hideTutorialPanel || (this.document_.getElementById("stick-try-again").className = "stick");
                    return
                }
                a && (this.hideAllSticks_(),
                this.tutorialNext())
            }
        }
}
;
codepops.EditorPage.prototype.tutorialHelp = function() {
    if (this.tutorialRecord_) {
        var a = this.tutorialRecord_.steps[this.userPreferences_.currentTutorialStep];
        this.tutorialFocusLine_ && (editor.focus(),
        editor.setCursor(this.tutorialFocusLine_ - 1, 999));
        a && a.help && (this.errorHelpDiv.innerHTML = "You have an error. Check your code carefully. You want it to look like this:<pre><ol>" + a.help + "</ol></pre>")
    }
}
;
codepops.EditorPage.prototype.getApps = function() {
    return codepops.clone(this.apps_)
}
;
codepops.EditorPage.prototype.hoc2016TutorialsAreComplete = function() {
    var a = {
        TutorialDancinHal: !1,
        TutorialSoLongHomework: !1,
        TutorialBlockCraft: !1,
        TutorialRedRacer: !1
    }, b;
    for (b in a)
        for (var c in this.apps_) {
            var d = this.apps_[c];
            if (d.tutorialName && d.tutorialStep) {
                var e = codepops[b];
                e && d.tutorialName === b && d.tutorialStep >= e.steps.length - 1 && (a[b] = !0)
            }
        }
    for (var f in a)
        if (!1 === a[f])
            return !1;
    return !0
}
;
codepops.EditorPage.prototype.templatize = function(a) {
    if (!this.sandbox_.getRunningLibrary())
        return a;
    a = codepops.replaceFromTemplate(a, this.sandbox_.getRunningLibrary().stateLog);
    return codepops.replaceFromTemplate(a, {
        displayName: this.userDisplayName_
    })
}
;
codepops.EditorPage.prototype.tutorialGo = function(a) {
    this.userPreferences_.currentTutorialStep = a;
    var b = this.apps_[this.currentAppKey_];
    b.tutorialStep = a;
    this.dataStore_.saveApp(b, function(a) {});
    var c = this.tutorialRecord_.steps
      , b = c[a] || {};
    a === c.length - 1 && (a = this.userPreferences_.currentTutorial,
    this.userPreferences_.completedTutorials = this.userPreferences_.completedTutorials || {},
    this.userPreferences_.completedTutorials[a] = !0,
    this.dataStore_.savePreferences(this.userPreferences_),
    this.renderAppsList_());
    if (b.stickLine) {
        a = b.stickLine;
        b.extraBlankLines && (a += b.extraBlankLines,
        c = editor.getValue(),
        c += Array(b.extraBlankLines).join("\n"),
        editor.setValue(c));
        this.tutorialFocusLine_ = b.stickLine;
        this.tutorialFocus();
        b.stick && (c = this.document_.getElementById("stick-tutorial-step")) && (c.innerHTML = "<p>" + b.stick + "</p>",
        c.className = "stick stick-right",
        c.style.top = 115 + 25 * b.stickLine + "px");
        if (b.instruction) {
            var c = this.instructionPanelDiv
              , d = this.instructionPanelContentDiv;
            a = 170 + 25 * a + "px";
            b.elementIdsToUnhide && -1 < b.elementIdsToUnhide.indexOf("secondary-instruction-panel") && (c = this.document_.getElementById("secondary-instruction-panel"),
            c || (a = this.document_.createElement("div"),
            a.id = "secondary-instruction-panel",
            this.document_.getElementById("page").appendChild(a),
            c = a),
            d = c,
            a = "22px");
            d.innerHTML = this.templatize($t(b.instruction));
            this.instructionPanelArrowDiv.style.left = b.arrowLeft || "";
            this.instructionPanelArrowDiv.style.opacity = b.arrowOpacity || "";
            d.style = b.arrowStyle || "";
            c.className = "";
            c.style.top = a
        }
        b.info && (c = this.document_.getElementById("stick-tutorial-info")) && (c.innerHTML = "<p>" + b.info + "</p>",
        c.className = "stick stick-info")
    }
    if (b.elementIdsToUnhide && b.elementIdsToUnhide.length)
        for (a = 0; a < b.elementIdsToUnhide.length; a++)
            c = b.elementIdsToUnhide[a],
            !(d = this.document_.getElementById(c)) || "stick-go-home" === c && c123.isAliPage_() || (d.className = d.className.replace(/hidden/gi, ""));
    a = this.document_.getElementById("editor-panel");
    b.disableEnter && !this.enterKeyDisabled ? (a.addEventListener("keydown", this.disableEnterKey, !0),
    this.enterKeyDisabled = !0) : !b.disableEnter && this.enterKeyDisabled && (a.removeEventListener("keydown", this.disableEnterKey, !0),
    this.enterKeyDisabled = !1)
}
;
codepops.EditorPage.prototype.tutorialFocus = function() {
    this.tutorialFocusLine_ && (editor.focus(),
    editor.setCursor(this.tutorialFocusLine_ - 1, 999))
}
;
codepops.EditorPage.prototype.tutorialFinish = function(a) {
    this.userPreferences_.currentTutorialStep = 0;
    a = this.userPreferences_.currentTutorial;
    for (var b = "", c = 0; c < this.tutorials_.length; c++)
        this.tutorials_[c] === a && c < this.tutorials_.length - 1 && (b = this.tutorials_[c + 1]);
    this.userPreferences_.currentTutorial = b ? b : null;
    this.dataStore_.savePreferences(this.userPreferences_);
    this.home()
}
;
codepops.EditorPage.prototype.setEditorFontSize_ = function(a) {
    for (var b = this.document_.getElementsByClassName("CodeMirror"), c = 0; c < b.length; c++)
        b[c].style.fontSize = a
}
;
codepops.EditorPage.prototype.getAppKeyByTitle_ = function(a) {
    for (var b in this.apps_)
        if (this.apps_[b].title === a)
            return b;
    return !1
}
;
codepops.EditorPage.prototype.getTutorialTitle_ = function(a) {
    return (codepops[a] || {}).title || "Unknown"
}
;
codepops.EditorPage.prototype.alert = function(a, b) {
    var c = this.document_.getElementById("stick-alert");
    if (c) {
        var d = c.getElementsByTagName("span")[1];
        if (d) {
            d.innerHTML = a;
            c.className = "stick";
            b && (d.style.position = "relative",
            d.style.marginLeft = "0");
            return
        }
    }
    console.error("ERROR: Could not set alert text in EditorPage.alert()")
}
;
codepops.EditorPage.prototype.hasDoneTutorialPrereqs_ = function(a) {
    if ((a = codepops[a]) && a.prerequisite) {
        var b = !1;
        (this.userPreferences_.completedTutorials || {})[a.prerequisite] && (b = !0);
        return b
    }
    return !0
}
;
codepops.EditorPage.prototype.hasCompletedTutorial_ = function(a) {
    this.userPreferences_.completedTutorials = this.userPreferences_.completedTutorials || {};
    return this.userPreferences_.completedTutorials[a] ? !0 : !1
}
;
codepops.EditorPage.prototype.secondToLastStepInTutorial_ = function(a, b) {
    var c = this.userPreferences_.currentTutorial
      , d = this.userPreferences_.currentTutorialStep;
    return (c === a || b && c === b) && d === this.tutorialRecord_.steps.length - 2 ? !0 : !1
}
;
codepops.EditorPage.prototype.howManyTutorialsInstalled_ = function() {
    var a = 0, b;
    for (b in this.apps_)
        this.apps_[b].tutorialName && a++;
    return a
}
;
codepops.EditorPage.prototype.howManyNonTutorialsInstalled_ = function() {
    var a = 0, b;
    for (b in this.apps_)
        this.apps_[b].tutorialName || a++;
    return a
}
;
codepops.EditorPage.prototype.howManyAppsInstalled_ = function() {
    return Object.keys(this.apps_).length
}
;
codepops.EditorPage.prototype.hasCustomApps_ = function() {
    return 0 < this.howManyNonTutorialsInstalled_()
}
;
codepops.EditorPage.prototype.hideSharingSideBar_ = function() {
    var a = this.document_.getElementById("at4-share");
    a && (a.style.visibility = "hidden")
}
;
codepops.EditorPage.prototype.showChangePasswordPanel = function() {
    (this.dataStore_.getCurrentUser() || {}).email ? (this.document_.getElementById("change-password-panel").className = "visible",
    this.document_.getElementById("stick-change-password-panel").className = "stick stick-inline",
    this.document_.getElementById("popup-background").className = "visible",
    this.document_.getElementById("old-password").value = "",
    this.document_.getElementById("new-password").value = "") : this.alert($t("Sorry, you must be logged in to change your password."))
}
;
codepops.EditorPage.prototype.showSwitchAccountPanel = function() {
    this.showLoginPanel();
    codepops.setContent("sign-in-header", $t("Switch Accounts"))
}
;
codepops.EditorPage.prototype.hideChangePasswordPanel = function() {
    this.document_.getElementById("change-password-panel").className = "hidden";
    this.document_.getElementById("stick-change-password-panel").className = "stick stick-inline hidden";
    this.document_.getElementById("popup-background").className = "hidden"
}
;
codepops.EditorPage.prototype.changePassword = function(a) {
    a && a.preventDefault && a.preventDefault();
    a = this.dataStore_.getCurrentUser() || {};
    if (a.email) {
        a = a.email;
        var b = codepops.getContent("old-password")
          , c = codepops.getContent("new-password")
          , d = codepops.bind(function() {
            this.alert($t("Yay! Your password has been changed."))
        }, this)
          , e = codepops.bind(function(a) {
            a.code && "INVALID_PASSWORD" === a.code ? this.alert($t("The old (or temporary) password you entered isn't correct. Try again or email help@bitsbox.com.")) : this.alert(codepops.friendlyBackendError_(a))
        }, this);
        if (!b)
            return this.alert($t("You must enter your current password.")),
            !1;
        if (!c)
            return this.alert($t("You must enter a new password.")),
            !1;
        this.hideChangePasswordPanel();
        this.dataStore_.changePassword(a, b, c, d, e);
        return !1
    }
    this.alert($t("Sorry, you must be logged in to change your password."))
}
;
codepops.EditorPage.prototype.scrollToHomeScreenPage_ = function(a) {
    this.iconsPanelDiv.style.marginLeft = -384 * a + "px";
    this.renderIconsPanelNavDiv_(a)
}
;
codepops.EditorPage.prototype.isEditingApp_ = function() {
    return "visible" === this.pagePanelDiv.className
}
;
codepops.EditorPage.prototype.renderIconsPanelNavDiv_ = function(a) {
    this.iconsPanelNavDiv.innerHTML = "";
    var b = this.getHomeScreenPageCount_();
    if (!(2 > b))
        for (var c = 0; c < b; c++) {
            var d = this.document_.createElement("div");
            d.className = "icons-panel-nav-button";
            a === c && d.classList.add("selected");
            d.id = c;
            d.onclick = codepops.bind(function(a) {
                this.scrollToHomeScreenPage_(parseFloat(a.target.id))
            }, this);
            this.iconsPanelNavDiv.appendChild(d)
        }
}
;
codepops.EditorPage.prototype.handleTouchStart = function(a) {
    this.isEditingApp_() || 2 > this.getHomeScreenPageCount_() || ("touchstart" === a.type ? (this.xDown_ = a.touches[0].clientX,
    this.yDown_ = a.touches[0].clientY) : "mousedown" === a.type && (this.xDown_ = a.pageX,
    this.yDown_ = a.pageY))
}
;
codepops.EditorPage.prototype.swipeBetweenAppPages = function(a) {
    if (!this.isEditingApp_() && this.xDown_ && this.yDown_) {
        var b, c;
        "touchmove" === a.type ? (b = a.touches[0].clientX,
        c = a.touches[0].clientY) : "mouseup" === a.type && (b = a.pageX,
        c = a.pageY);
        var d;
        a = this.document_.getElementsByClassName("icons-panel-nav-button");
        for (i = 0; i < a.length; i++)
            -1 < a[i].className.indexOf("selected") && (d = Math.floor(a[i].id));
        b = this.xDown_ - b;
        c = this.yDown_ - c;
        Math.abs(b) > Math.abs(c) && (0 < b ? d !== a.length - 1 && this.scrollToHomeScreenPage_(d + 1) : 0 !== d && this.scrollToHomeScreenPage_(d - 1));
        this.yDown_ = this.xDown_ = null
    }
}
;
codepops.EditorPage.prototype.scrollToLastHomeScreenPage_ = function() {
    var a = this.getHomeScreenPageCount_();
    this.scrollToHomeScreenPage_(a - 1)
}
;
codepops.EditorPage.prototype.getHomeScreenPageCount_ = function() {
    return Math.ceil(this.countCreatedApps_() / this.appsPerHomeScreenPage_)
}
;
codepops.EditorPage.prototype.showIconEditor = function() {
    if (this.currentAppKey_) {
        var a = this.apps_[this.currentAppKey_];
        this.iconEditorIFrame_ || (this.iconEditorIFrame_ = this.document_.createElement("iframe"),
        this.iconEditorIFrame_.id = "icon-editor-iframe",
        this.iconEditorIFrame_.frameborder = 0,
        this.iconEditorIFrame_.scrolling = "no",
        this.iconEditorIFrame_.src = "about:blank",
        this.document_.body.appendChild(this.iconEditorIFrame_),
        this.iconEditorBackground_ = this.document_.createElement("div"),
        this.iconEditorBackground_.className = "iframe-background",
        this.document_.body.appendChild(this.iconEditorBackground_));
        (a = a.iconCode) || (a = "// This code creates your icon.\nfill('silver')\nstamp('question',120)\nstamp('icon reflection')\n");
        this.iconEditorIFrame_.src = "/iconeditor.html?appId=" + this.currentAppKey_ + "&iconCode=" + encodeURIComponent(a);
        this.iconEditorIFrame_.style.display = "block";
        this.iconEditorBackground_.style.display = "block"
    }
}
;
codepops.EditorPage.prototype.showPrintOutput = function() {
    this.printOutputIFrame_ || (this.printOutputIFrame_ = this.document_.createElement("iframe"),
    this.printOutputIFrame_.id = "print-output-iframe",
    this.printOutputIFrame_.frameborder = 0,
    this.document_.body.appendChild(this.printOutputIFrame_),
    this.printOutputBackground_ = this.document_.createElement("div"),
    this.printOutputBackground_.className = "iframe-background",
    this.document_.body.appendChild(this.printOutputBackground_));
    this.printOutputIFrame_.src = "printoutput.html?debug&appId=" + (this.currentAppKey_ || "");
    this.printOutputIFrame_.style.display = "block";
    this.printOutputBackground_.style.display = "block"
}
;
codepops.EditorPage.prototype.cancelIconEditor = function() {
    this.iconEditorIFrame_.style.display = "none";
    this.iconEditorBackground_.style.display = "none";
    this.iconEditorIFrame_.src = "about:blank"
}
;
codepops.EditorPage.prototype.cancelPrintOutput = function() {
    this.printOutputIFrame_.style.display = "none";
    this.printOutputBackground_.style.display = "none"
}
;
codepops.EditorPage.prototype.storeIcons = function(a, b, c, d) {
    var e = this.apps_[a];
    if (e) {
        e.iconCode = c;
        this.pageIconDiv.style.backgroundImage = "url(" + b + ")";
        var f = codepops.bind(function(a) {
            a ? console.error(a) : this.renderAppsList_()
        }, this);
        -1 < b.indexOf("icon-apple") || -1 < b.indexOf("icon-question") ? (e.iconUrl = b,
        this.dataStore_.saveApp(e, f)) : this.dataStore_.uploadAppIconImage(b, a, "app_icon", null, null, function(a) {
            e.iconUrl = a;
            this.dataStore_.saveApp(e, f)
        }
        .bind(this));
        this.dataStore_.uploadShareImage(d, a, "share_icon");
        this.cancelIconEditor()
    } else
        console.error("Error: no app with key of " + a)
}
;
codepops.EditorPage.prototype.getAllApps = function() {
    return this.apps_
}
;
codepops.EditorPage.prototype.userIsAdmin = function() {
    var a = this.dataStore_.getCurrentUser()
      , b = {
        "cards@bitsbox.com": !0,
        "cards2@bitsbox.com": !0,
        "miniapps@bitsbox.com": !0,
        "april2015@bitsbox.com": !0,
        "may2015@bitsbox.com": !0,
        "june2015@bitsbox.com": !0,
        "july2015@bitsbox.com": !0,
        "august2015@bitsbox.com": !0,
        "september2015@bitsbox.com": !0,
        "october2015@bitsbox.com": !0,
        "november2015@bitsbox.com": !0,
        "december2015@bitsbox.com": !0,
        "anastasia.miliano@gmail.com": !0,
        "anastasia@bitsbox.com": !0,
        "aidantester@bitsbox.com": !0,
        "unittests@bitsbox.com": !0,
        "jeff+admin@bitsbox.com": !0,
        "ryan@bitsbox.com": !0,
        "january2016@bitsbox.com": !0,
        "february2016@bitsbox.com": !0,
        "march2016@bitsbox.com": !0,
        "april2016@bitsbox.com": !0,
        "may2016@bitsbox.com": !0,
        "june2016@bitsbox.com": !0,
        "july2016@bitsbox.com": !0,
        "august2016@bitsbox.com": !0,
        "september2016@bitsbox.com": !0,
        "october2016@bitsbox.com": !0,
        "november2016@bitsbox.com": !0,
        "december2016@bitsbox.com": !0,
        "box2@bitsbox.com": !0,
        "box3@bitsbox.com": !0,
        "box4@bitsbox.com": !0,
        "box5@bitsbox.com": !0,
        "box6@bitsbox.com": !0,
        "box7@bitsbox.com": !0,
        "box8@bitsbox.com": !0,
        "box9@bitsbox.com": !0,
        "box10@bitsbox.com": !0,
        "box11@bitsbox.com": !0,
        "box12@bitsbox.com": !0,
        "box13@bitsbox.com": !0,
        "box14@bitsbox.com": !0,
        "box15@bitsbox.com": !0,
        "box16@bitsbox.com": !0,
        "box17@bitsbox.com": !0,
        "box18@bitsbox.com": !0,
        "box19@bitsbox.com": !0,
        "box20@bitsbox.com": !0,
        "box21@bitsbox.com": !0,
        "box22@bitsbox.com": !0,
        "box23@bitsbox.com": !0,
        "box24@bitsbox.com": !0,
        "hourofcode@bitsbox.com": !0,
        "master@bitsbox.com": !0,
        "retailapps@bitsbox.com": !0,
        "schoolofmines@bitsbox.com": !0,
        "specialapps@bitsbox.com": !0,
        "edubook1@bitsbox.com": !0,
        "edubook2@bitsbox.com": !0,
        "edubook3@bitsbox.com": !0,
        "edubook4@bitsbox.com": !0,
        "edubook5@bitsbox.com": !0,
        "edubook6@bitsbox.com": !0,
        "edubook7@bitsbox.com": !0,
        "edubook8@bitsbox.com": !0,
        "edubook9@bitsbox.com": !0,
        "stemscopes@bitsbox.com": !0
    };
    return a && !0 === b[a.email] ? !0 : !1
}
;
codepops.EditorPage.prototype.getDataStore = function() {
    return this.dataStore_
}
;
codepops.EditorPage.prototype.toDataURL = function(a, b) {
    return this.sandbox_.toDataURL(a, b)
}
;
codepops.EditorPage.prototype.onActivityNumberKey = function(a, b) {
    this.activityNumberErrorDiv.innerHTML = "";
    a.value = this.cleanActivityNumber_(a.value);
    for (var c = "", d = 0; 4 > d; d++)
        c = d < a.value.length ? c + "&nbsp;" : c + "X";
    this.bubbleMaskDiv.innerHTML = c;
    b && 4 === a.value.length && (a.blur(),
    this.newAppFromActivityNumber())
}
;
codepops.EditorPage.prototype.cleanActivityNumber_ = function(a) {
    return (a || "").replace(/\D/gi, "").substr(0, 4)
}
;
codepops.EditorPage.prototype.newAppFromActivityNumber = function(a, b) {
    var c = a || this.activityNumberInput.value
      , d = this.cleanActivityNumber_(c)
      , e = b || "";
    this.activityNumberErrorDiv.innerHTML = '<img src="img/loading-white.gif"/>';
    if (4 !== d.length || d !== c)
        this.alert($t("Activity numbers have exactly 4 digits.")),
        this.activityNumberInput.focus();
    else {
        var c = codepops.bind(function(a) {
            var b = {
                title: a.title + e,
                iconUrl: a.iconUrl,
                iconCode: a.iconCode,
                parentActivityNumber: a.activityNumber,
                parentActivityCode: a.code
            };
            if (d in this.loadAllCodeApps_)
                b.code = a.code;
            else {
                var c = a.code.split("\n").length || 0;
                if (c) {
                    for (var f = "", n = 0; n < c; n++)
                        f += "\n";
                    b.code = f
                }
            }
            this.loadAssetsFromParentApp_(a.code);
            this.saveNewApp(b)
        }, this)
          , f = codepops.bind(function(a) {
            this.activityNumberErrorDiv.innerHTML = a;
            this.activityNumberInput.focus()
        }, this);
        this.dataStore_.loadActivityNumber(d, c, f)
    }
}
;
codepops.EditorPage.prototype.loadAssetsFromParentApp_ = function(a) {
    a = a.match(/(["'])(?:\\\1|.)*?\1/g) || [];
    this.library_.loadAssets_(a)
}
;
codepops.EditorPage.prototype.scrollTo = function(a) {
    window.$_scrollTimer = this.window_.setInterval(function() {
        var b = 710 * a;
        if (5 < Math.abs(window.scrollY - b)) {
            var c = Math.ceil((window.scrollY + b) / 2);
            window.scrollTo(0, c > b ? c + 2 : c - 2)
        } else
            window.clearInterval(window.$_scrollTimer)
    }, 50)
}
;
codepops.EditorPage.prototype.setupLineNumberEventHandlers_ = function() {
    editor.on("gutterClick", function(a, b, c, d) {
        a.setCursor(b, 999)
    })
}
;
codepops.EditorPage.prototype.setupAddMoreLinesHandler_ = function() {
    editor.on("cursorActivity", codepops.bind(function(a) {
        var b = a.lineCount()
          , c = a.getCursor("start");
        c && c.line && c.line === b - 1 && (a.replaceRange("\n\n", {
            line: c.line,
            ch: null
        }),
        a.setCursor(c.line, 999))
    }, this))
}
;
codepops.EditorPage.prototype.selectNewAppSubpanel = function(a) {
    var b = this.document_
      , c = b.getElementById("new-app-subpanel-number") || {}
      , d = b.getElementById("new-app-subpanel-online") || {}
      , e = b.getElementById("new-app-subpanel-icons") || {}
      , f = b.getElementById("new-app-subpanel-icons-ali") || {}
      , b = b.getElementById("new-app-subpanel-app-cards") || {};
    this.hideAllSticks_();
    "online" === a && (this.dataStore_.isFeatureOnForUser("newAppAli") ? (f.classList.remove("hidden"),
    e.classList.add("hidden"),
    b.classList.remove("hidden"),
    d.className = "new-app-subpanel half top-position-background") : d.className = "new-app-subpanel half",
    c.className = "new-app-subpanel quarter",
    this.activityNumberInput.blur());
    "number" === a && (c.className = "new-app-subpanel half",
    this.dataStore_.isFeatureOnForUser("newAppAli") ? d.className = "new-app-subpanel quarter top-position-background" : d.className = "new-app-subpanel quarter",
    this.activityNumberInput.value = "",
    this.bubbleMaskDiv.innerHTML = "XXXX",
    this.activityNumberErrorDiv.innerHTML = "",
    this.activityNumberInput.focus())
}
;
codepops.EditorPage.prototype.selectContextPanel = function(a) {
    this.contextPanelDiv.className = a;
    "number" === a && (this.contextPanelDiv.innerHTML = "<h3>" + $t("Enter the 4 digit number for the app you'd like to make.") + "</h3><p>" + $t("Most published Bitsbox apps (on physical cards, in books, and in PDFs) include a 4 digit number.") + '</p><br/><img src="img/context-panel-number.png" class="context-panel-number-img" />',
    this.dataStore_.isFeatureOnForUser("newAppAli") && this.contextPanelDiv.classList.add("in-ali"));
    "custom" === a && (this.contextPanelDiv.innerHTML = $t("Start a new blank app! (Best for more advanced Bitsbox coders.)"),
    this.dataStore_.isFeatureOnForUser("newAppAli") && (this.contextPanelDiv.classList.add("in-ali"),
    this.document_.getElementById("new-app-subpanel-number").classList.contains("half") && this.contextPanelDiv.classList.add("numbered-subpanel-open")));
    "online" === a && (this.dataStore_.isFeatureOnForUser("newAppAli") ? (this.contextPanelDiv.innerHTML = $t("Click here to minimize your coding tablet and go to the <b>Projects</b> search page."),
    this.contextPanelDiv.classList.add("in-ali")) : (this.contextPanelDiv.innerHTML = $t("These tutorials will teach you more coding skills."),
    this.dataStore_.isFeatureOnForUser("newAppAli") && this.contextPanelDiv.classList.add("in-ali")))
}
;
codepops.EditorPage.prototype.showHelpPanel = function(a) {
    if (!this.helpPanelDiv.classList.contains("hidden") && this.helpPanelDiv.classList.contains(a))
        this.helpPanelDiv.classList.add("hidden");
    else {
        if ("email" === a) {
            this.helpPanelDiv.className = "help-panel email";
            var b;
            this.dataStore_.isFeatureOnForUser("updatedSharePanel") ? (b = $t("You can share this app with other people in a few different ways."),
            this.helpPanelDiv.style.top = "-14px") : b = $t("Email this app to friends and family!") + "<br>";
            b += ' <a href="' + $t("https://bitsbox.com/howtoshare") + '" target="_blank">' + $t("Learn more &raquo;") + "</a>";
            this.helpPanelDiv.innerHTML = b
        }
        "copy" === a && (this.helpPanelDiv.className = "help-panel copy",
        this.helpPanelDiv.innerHTML = $t("Click on the icon to copy the link to this app!") + ' <a href="' + $t("https://bitsbox.com/howtoshare") + '" target="_blank">' + $t("Need help?") + "</a>");
        "copy-to-google" === a && (this.helpPanelDiv.className = "help-panel copy-to-google",
        this.helpPanelDiv.innerHTML = $t("Copy this app's code, its title, a screenshot, and a link to play it, all at once.") + ' <a href="' + $t("https://bitsbox.com/howtoshare") + '" target="_blank">' + $t("Learn more &raquo;") + "</a>",
        this.dataStore_.isFeatureOnForUser("updatedSharePanel") && (this.helpPanelDiv.style.top = "120px"),
        this.dataStore_.isFeatureOnForUser("shareAppViaText") && (this.helpPanelDiv.style.top = "149px"));
        "zap" === a && (this.helpPanelDiv.className = "help-panel zap",
        this.helpPanelDiv.innerHTML = $t("Play this app on a smartphone or tablet!") + '<br><a href="' + $t("https://bitsbox.com/howtoshare") + '" target="_blank">' + $t("Learn more &raquo;") + '</a><br><img src="img/scan-qr-code-instruction.png" />',
        this.dataStore_.isFeatureOnForUser("updatedSharePanel") && (this.helpPanelDiv.style.top = "176px"),
        this.dataStore_.isFeatureOnForUser("shareAppViaText") && (this.helpPanelDiv.style.top = "200px"))
    }
}
;
codepops.EditorPage.prototype.sendEmailHandler = function() {
    var a = "email-form";
    this.dataStore_.isFeatureOnForUser("updatedSharePanel") && (a = "new-email-form");
    if (a = this.document_.forms[a].to.value)
        0 > a.indexOf("@") || 0 > a.indexOf(".") ? this.stickInvalidEmail.classList.remove("hidden") : this.sendShare();
    else {
        var a = this.window_.location.hostname
          , b = this.window_.location.pathname;
        a && 0 > a.toLowerCase().indexOf("leukprogrammeren.nl") && b && "/squla.html" !== b && (this.stickEmptyField.getElementsByTagName("p")[0].innerText = "Did you forget to put in an email address?");
        this.stickEmptyField.classList.remove("hidden")
    }
}
;
codepops.EditorPage.prototype.resetEmailPanel = function() {
    this.sendEmailButton.className = "button-flat";
    this.loadingButton.style.display = "none";
    this.sendEmailButton.value = "Send";
    this.sendEmailButton.disabled = !1
}
;
codepops.EditorPage.prototype.sendEmailResponseHandler = function(a) {
    if (a.success)
        this.dataStore_.isFeatureOnForUser("updatedSharePanel") ? (this.resetPaperAirplaneGif("new-email-airplane-gif"),
        this.togglePopdown("new-send-email-panel"),
        this.togglePopdown("new-send-email-panel-sent")) : (this.resetPaperAirplaneGif("email-airplane-gif"),
        this.togglePopdown("send-email-panel"),
        this.togglePopdown("send-email-panel-sent")),
        this.resetEmailPanel(),
        this.dataStore_.isFeatureOnForUser("updatedSharePanel") ? this.document_.getElementById("new-send-email-form").reset() : this.document_.getElementById("send-email-form").reset(),
        this.stickInvalidEmail.classList.add("hidden"),
        this.stickEmptyField.classList.add("hidden");
    else if ("INVALID_EMAIL_ADDRESS" === a.message)
        this.resetEmailPanel(),
        this.stickEmptyField.classList.contains("hidden") || this.stickEmptyField.classList.add("hidden"),
        this.stickInvalidEmail.classList.remove("hidden");
    else if ("REQUIRED_PARAMETER_MISSING" === a.message)
        this.resetEmailPanel(),
        this.stickInvalidEmail.classList.classList.contains("hidden") || this.stickInvalidEmail.classList.add("hidden"),
        this.stickEmptyField.getElementsByTagName("p")[0].innerText = "Oops! Did you forget to write a message?",
        this.stickEmptyField.classList.remove("hidden");
    else {
        if ("BOT_DETECTED" === a.message)
            return this.resetEmailPanel(),
            $t("Sorry, Robot. No cigar for you.");
        if (a.message)
            return this.resetEmailPanel(),
            $t(message)
    }
}
;
codepops.EditorPage.prototype.resetPaperAirplaneGif = function(a) {
    var b = this.document_.getElementById(a);
    setTimeout(function() {
        b.setAttribute("src", "img/paper-airplane.gif")
    }, 0)
}
;
codepops.EditorPage.prototype.sendSMSHandler = function() {
    var a = "sms-form";
    this.dataStore_.isFeatureOnForUser("updatedSharePanel") && (a = "new-sms-form");
    if (a = this.document_.forms[a].to.value) {
        for (var a = a.replace(/[-\(\)\/\s]/g, ""), b = !1, c = 0; c < a.length; c++) {
            var d = a[c];
            "+" === d || /^\d$/.test(d) || (b = !0)
        }
        b || 10 > a.length ? this.stickInvalidSms.classList.remove("hidden") : (10 === a.length && (a = a.slice(0, 3) + "-" + a.slice(3, 6) + "-" + a.slice(6)),
        this.enteredPhoneNumber_ = a,
        this.sendShareSMS())
    } else
        this.stickEmptyFieldSms.classList.remove("hidden")
}
;
codepops.EditorPage.prototype.sendSMSResponseHandler = function(a) {
    if (a.success)
        this.dataStore_.isFeatureOnForUser("updatedSharePanel") ? (this.resetPaperAirplaneGif("new-sms-airplane-gif"),
        this.togglePopdown("new-send-sms-panel"),
        this.togglePopdown("new-send-sms-panel-sent")) : (this.resetPaperAirplaneGif("sms-airplane-gif"),
        this.togglePopdown("send-sms-panel"),
        this.togglePopdown("send-sms-panel-sent")),
        this.resetSMSPanel(),
        this.sendSmsForm.reset(),
        this.stickInvalidSms.classList.add("hidden"),
        this.stickEmptyFieldSms.classList.add("hidden");
    else if ("NOT_VALID" === a.message)
        this.resetSMSPanel(),
        this.togglePopdown("new-send-sms-panel"),
        this.enteredPhoneNumber_ && (this.document_.getElementsByClassName("entered-phone-number")[0].innerHTML = this.enteredPhoneNumber_),
        this.togglePopdown("new-send-sms-panel-invalid");
    else if ("REQUIRED_PARAMETER_MISSING" === a.message)
        this.resetSMSPanel(),
        this.stickInvalidSms.classList.contains("hidden") || this.stickInvalidSms.classList.add("hidden"),
        this.stickEmptyFieldSms.classList.remove("hidden");
    else {
        if ("BOT_DETECTED" === a.message)
            return this.resetSMSPanel(),
            $t("Sorry, Robot. No cigar for you.");
        if ("BLACKLIST" === a.message)
            this.resetSMSPanel(),
            this.togglePopdown("new-send-sms-panel"),
            this.enteredPhoneNumber_ && (this.document_.getElementsByClassName("entered-phone-number")[1].innerHTML = this.enteredPhoneNumber_),
            this.togglePopdown("new-send-sms-panel-blocklist");
        else if (a.message)
            return this.resetSMSPanel(),
            a.message
    }
}
;
codepops.EditorPage.prototype.resetSMSPanel = function() {
    this.sendSmsButton.className = "button-flat";
    this.loadingButtonSms.style.display = "none";
    this.sendSmsButton.value = "Send";
    this.sendSmsButton.disabled = !1
}
;
codepops.EditorPage.prototype.inputRunpageURL = function() {
    if (this.dataStore_.isFeatureOnForUser("updatedSharePanel")) {
        this.emailFormTextarea.innerHTML = "\n\n\n" + $t("Click to see the app I made with Bitsbox!");
        var a = this.document_.getElementById("runpage-url-div")
          , b = this.generateRunpageUrl_(this.currentAppKey_);
        a.classList.remove("hidden");
        a.innerHTML = '<a href="' + b + '" target="_blank">' + b + "</a>"
    } else
        this.emailFormTextarea.innerHTML = "\n\n" + $t("Here's a link to view my app:") + " " + this.generateRunpageUrl_(this.currentAppKey_)
}
;
codepops.EditorPage.prototype.personalizeSMSMessagePreview = function() {
    var a = this.generateRunpageUrl_(this.currentAppKey_)
      , b = this.document_.getElementById("new-send-sms-form-textarea")
      , a = this.userDisplayName_ + $t(" coded an app with ") + $t("Bitsbox!\nClick this link to play it: ") + '<a href="' + a + '" target="_blank">' + a + "</a>";
    b.innerHTML = a
}
;
codepops.EditorPage.prototype.copyRunpageURL = function() {
    var a = this.shareField.value;
    a && "" !== a && (this.shareField.select(),
    this.shareField.setSelectionRange && this.shareField.setSelectionRange(0, 9999),
    this.document_.execCommand("copy"),
    this.dataStore_.isFeatureOnForUser("updatedSharePanel") ? this.togglePopdown("copy-link-copied") : this.copiedText.style.display = "block")
}
;
codepops.EditorPage.prototype.copyToGoogleDoc = function() {
    var a = {
        number: "color: #007ba9;",
        keyword: "color: #blue; font-weight: bold",
        string: "color: #b50c70;",
        "string-2": "color: #b50c70;",
        atom: "color: rgb(0, 123, 169)",
        comment: "color: rgb(142, 108, 74);"
    };
    richText = "<ol style=\"color: #e9973e; font-size: 13pt; line-height: 1.5; font-family: 'Source Code Pro','Courier',monospace;\">";
    for (i = 0; i < editor.lineCount(); i++) {
        lineTokens = editor.getLineTokens(i, !0);
        richText += '<li><span style="color: black;">';
        for (t = 0; t < lineTokens.length; t++)
            token = lineTokens[t].string,
            token = token.replace(/\t/g, "&nbsp;&nbsp;"),
            token = token.replace(/\s/g, "&nbsp;"),
            tokenType = lineTokens[t].type,
            richText = null !== tokenType && a[tokenType] ? richText + ('<span style="' + a[tokenType] + '">' + token + "</span>") : richText + token;
        richText += "</span></li>"
    }
    richText += "</ol><p>" + $t("Notes") + ":</p><hr>";
    var a = function(a) {
        var b;
        if (this.document_.body.createTextRange)
            b = this.document_.body.createTextRange(),
            b.moveToElementText(a),
            b.select();
        else if (this.window_.getSelection) {
            var c = this.window_.getSelection();
            b = this.document_.createRange();
            b.selectNodeContents(a);
            c.removeAllRanges();
            c.addRange(b)
        }
    }
    .bind(this)
      , b = this.document_.createElement("div");
    b.innerHTML = richText;
    var c = dateFormat("mm-dd-yyyy")
      , d = dateFormat("h:mmtt Z")
      , e = this.document_.createElement("div");
    e.style.color = "#999999";
    e.style.fontSize = "10pt";
    e.style.fontFamily = "Arial, Helvetica, sans-serif";
    e.innerHTML = "<hr><p>" + $t("Exported from Bitsbox ") + c + $t(" at ") + d + "</p>";
    d = this.pageTitleInput.value;
    c = this.document_.createElement("div");
    c.style.fontSize = "18pt";
    c.style.fontWeight = "bold";
    c.style.color = "black";
    c.style.textTransform = "capitalize";
    c.style.fontFamily = "Arial, Helvetica, sans-serif";
    c.style.marginLeft = "25px";
    c.innerHTML = d;
    var f = this.pageAuthorDiv.innerHTML
      , d = this.document_.createElement("div");
    d.style.fontSize = "11pt";
    d.style.color = "black";
    d.style.textTransform = "capitalize";
    d.style.fontFamily = "Arial, Helvetica, sans-serif";
    d.style.marginLeft = "25px";
    d.innerHTML = f;
    var g = this.generateRunpageUrl_(this.currentAppKey_)
      , f = this.document_.createElement("div")
      , h = this.document_.createElement("a");
    h.href = g;
    h.target = "_blank";
    h.innerHTML = $t("Run this app now");
    f.appendChild(h);
    g = this.document_.createElement("div");
    g.contentEditable = !0;
    h = this.document_.getElementById("google-copy-screenshot-div");
    g.appendChild(e);
    g.appendChild(c);
    g.appendChild(d);
    g.appendChild(h);
    g.appendChild(f);
    g.appendChild(b);
    this.document_.body.appendChild(g);
    a(g);
    this.document_.execCommand("Copy");
    this.document_.body.removeChild(g);
    this.copyToGoogleLink && (this.copyToGoogleLink.innerHTML = $t("Copied!"));
    this.copiedToGoogleDoc = !0
}
;
codepops.EditorPage.prototype.moveCursorToStart = function(a, b) {
    var c = b || 1;
    if (this.emailFormTextarea) {
        if ("number" === typeof a.selectionStart)
            a.selectionStart = a.selectionEnd = 0;
        else if ("undefined" !== typeof a.createTextRange) {
            a.focus();
            var d = a.createTextRange();
            d.collapse(!0);
            d.select()
        }
        this.emailFormTextarea.focus() && (moveCursorToStart(this.emailFormTextarea),
        10 >= c && setTimeout(this.moveCursorToStart, 3E3, a, c + 1))
    }
}
;
codepops.EditorPage.prototype.stickyAssetTypeBar = function() {
    var a = this.window_.pageYOffset
      , b = this.document_.getElementById("search-bar")
      , c = this.document_.getElementById("recently-searched")
      , d = this.document_.getElementById("close-button")
      , e = -(this.assetsContentDiv.getBoundingClientRect().height - 218);
    if (-1 < this.assetsPanelDiv.className.indexOf("visible"))
        if (38 < a && "" === b.className) {
            this.assetsHeaderDiv.className = "affix";
            -1 < c.className.indexOf("hidden") ? this.assetsContentDiv.classList.add("budge") : this.assetsContentDiv.classList.add("recently-searched-budge");
            if (this.isEdge || this.isChrome)
                d.style.marginTop = "0";
            350 > this.assetsContentDiv.getBoundingClientRect().bottom && !this.assetsContentDiv.classList.contains("fixed") ? (this.lastKnownScrollPosition_ = a,
            this.assetsContentDiv.classList.add("fixed"),
            this.assetsContentDiv.style.top = e + "px") : this.lastKnownScrollPosition_ > a && this.assetsContentDiv.classList.contains("fixed") && (this.assetsContentDiv.classList.remove("fixed"),
            this.assetsContentDiv.style.top = "")
        } else if ("hidden" === b.className)
            this.assetsContentDiv.className = "commands";
        else if (this.assetsHeaderDiv.className = "",
        this.assetsContentDiv.className = "",
        this.isEdge || this.isChrome && !this.copiedToGoogleDoc)
            d.style.marginTop = "-28px"
}
;
codepops.EditorPage.prototype.hideSearchBar = function() {
    var a = this.document_.getElementById("search-bar")
      , b = this.document_.getElementById("recently-searched");
    this.window_.scrollTo(0, 0);
    "hidden" !== a.className && (a.className = "hidden",
    this.iconSet.classList.add("hidden"),
    b.className = "hidden",
    this.assetsContentDiv.className = "commands",
    this.assetsHeaderDiv.className = "commands",
    this.assetsPanelDiv.className = "popdown visible")
}
;
codepops.EditorPage.prototype.showSearchBar = function() {
    var a = this.document_.getElementById("search-bar")
      , b = this.document_.getElementById("recently-searched")
      , c = this.getAssetType();
    this.window_.scrollTo(0, 0);
    void 0 === this.recentSearches[c] ? b.className = "hidden" : this.recentSearches[c] && this.recentSearches[c].length && (b.className = "");
    a.className = "";
    this.iconSet.classList.remove("hidden");
    this.assetsContentDiv.className = "";
    this.assetsHeaderDiv.className = ""
}
;
codepops.EditorPage.prototype.disableHorizontalScrolling = function() {
    this.isSafari && this.window_.scroll(0, this.window_.pageYOffset)
}
;
codepops.EditorPage.prototype.onAssetSearchSuccess = function(a) {
    var b = this.document_.getElementById("asset-search").value
      , b = this.trimAndSanitizeSearchTerm(b)
      , c = this.getAssetType()
      , d = this.window_.location.hash || "#"
      , d = d.substring(1)
      , e = [];
    "sound" !== c && "song" !== c || e.push('<div class="thumb-columns">');
    var f = !1;
    window.XMLHttpRequest ? f = new XMLHttpRequest : window.ActiveXObject && (f = new ActiveXObject("Microsoft.XMLHTTP"));
    if (this.validPages[d])
        f.open("GET", "/docs/" + d + "-json.html", !0);
    else {
        if ("_all" === d.substring(d.length - 4)) {
            f.open("GET", "/docs/" + this.currentAssetType + ".html", !0);
            f.onreadystatechange = codepops.bind(function() {
                if (4 === f.readyState) {
                    if (this.dataStore_.isFeatureOnForUser("customStamps") && !this.dataStore_.userIsAnonymous() && "find-stamps_all" === d) {
                        var a = this.generateAddButton();
                        this.assetsContentDiv.innerHTML = a.outerHTML + f.responseText;
                        this.addCustomAssets()
                    } else
                        this.assetsContentDiv.innerHTML = f.responseText;
                    this.applyAssetInteractionHandlers()
                }
            }, this);
            f.send();
            return
        }
        f.open("GET", "/docs/" + this.currentAssetType + "-json.html", !0)
    }
    f.onreadystatechange = codepops.bind(function() {
        if (4 === f.readyState) {
            var g = JSON.parse(f.responseText), h = Object.keys(g), l;
            for (l in a) {
                var m = a[l];
                if (m)
                    for (var n = 0; n < m.length; n++)
                        h.indexOf(m[n]) && e.push(g[m[n]])
            }
            "sound" !== c && "song" !== c || e.push("</div>");
            e.push("</html>");
            var g = !1, p;
            for (p in a)
                if (0 < a[p].length) {
                    g = !0;
                    break
                }
            g ? (this.dataStore_.isFeatureOnForUser("customStamps") && !this.dataStore_.userIsAnonymous() && -1 < d.indexOf("find-stamps") ? (p = this.generateAddButton(),
            this.assetsContentDiv.innerHTML = p.outerHTML + e.join("\n"),
            this.addCustomAssets()) : this.assetsContentDiv.innerHTML = e.join("\n"),
            this.applyAssetInteractionHandlers()) : this.assetsContentDiv.innerHTML = '<p class="no-match">Sorry, we couldn\'t find any ' + c + 's matching, "' + b + '" :(</p>';
            this.window_.scrollTo(0, 0)
        }
    }, this);
    f.send()
}
;
codepops.EditorPage.prototype.onAssetSearchError = function(a) {
    a = this.getAssetType();
    var b = this.document_.getElementById("asset-search").value
      , c = decodeURI(b)
      , d = this.window_.location.hash || "#"
      , d = d.substring(1)
      , b = this.trimAndSanitizeSearchTerm(b);
    this.dataStore_.isFeatureOnForUser("customStamps") && !this.dataStore_.userIsAnonymous() && -1 < d.indexOf("find-stamps") ? (c = this.generateAddButton(),
    this.assetsContentDiv.innerHTML = c.outerHTML + '<p class="no-match">Sorry, we couldn\'t find any ' + a + 's matching, "' + b + '" :(</p>',
    this.addCustomAssets()) : this.assetsContentDiv.innerHTML = '<p class="no-match"> Sorry, we couldn\'t find any ' + a + 's matching, "' + c + '" :(</p>'
}
;
codepops.EditorPage.prototype.runAssetSearch = function(a) {
    var b = this.document_.getElementById("recently-searched");
    a = this.trimAndSanitizeSearchTerm(a);
    var c = this.getAssetType()
      , d = this.recentSearches[c]
      , e = this.document_.body.scrollTop;
    a && (d ? 0 > d.indexOf(a) && (8 > d.length ? d.push(a) : 8 <= d.length && (d.shift(),
    d.push(a)),
    this.createRecentlySearchedList(this.recentSearches),
    this.saveRecentlySearchedList(this.recentSearches)) : (this.recentSearches[c] = [a],
    this.createRecentlySearchedList(this.recentSearches),
    this.saveRecentlySearchedList(this.recentSearches)),
    "hidden" === b.className && (b.className = ""),
    this.document_.body.scrollTop = e,
    this.window_.scroll(0, e),
    this.document_.getElementById("asset-search").focus(),
    !1 === this.assetIconSelected_ ? this.document_.getElementsByClassName(a.toLowerCase())[0] && this.iconSetHandler() : this.assetIconSelected_ = !1,
    b = codepops.bind(this.onAssetSearchSuccess, this),
    d = codepops.bind(this.onAssetSearchError, this),
    this.dataStore_.searchAssets(a, c, b, d))
}
;
codepops.EditorPage.prototype.populateSearchField = function(a, b) {
    var c = this.document_.getElementById("asset-search"), d = this.getAssetType(), e;
    if (c) {
        var f = this.document_.body.scrollTop;
        b ? (e = a.target.getAttribute("searchTerm"),
        e = this.trimAndSanitizeSearchTerm(e),
        c.value = e,
        this.applySearchTermToHash(e),
        this.document_.body.scrollTop = f,
        this.window_.scroll(0, f),
        this.windowHash_ === window.location.hash && this.document_.getElementsByClassName(e.toLowerCase())[0] && this.iconSetHandler(),
        c = codepops.bind(this.onAssetSearchSuccess, this),
        f = codepops.bind(this.onAssetSearchError, this),
        this.dataStore_.searchAssets(e, d, c, f)) : (e = a.target.title,
        e = this.trimAndSanitizeSearchTerm(e),
        c.value = e,
        a.preventDefault(),
        this.assetIconSelected_ = !0,
        this.applySearchTermToHash(e),
        this.document_.body.scrollTop = f,
        this.window_.scroll(0, f))
    }
}
;
codepops.EditorPage.prototype.addEventListenerByClass = function(a, b, c) {
    a = this.document_.getElementsByClassName(a);
    for (var d = 0, e = a.length; d < e; d++)
        a[d].addEventListener(b, c, !1)
}
;
codepops.EditorPage.prototype.getAssetType = function() {
    for (var a = this.assetsHeaderDiv.getElementsByTagName("a"), b = 0; b < a.length; b++) {
        var c = a[b];
        if ("selected" === c.className)
            return a = c.getAttribute("title").toLowerCase(),
            a = a.substring(0, a.length - 1)
    }
}
;
codepops.EditorPage.prototype.createRecentlySearchedList = function(a) {
    var b = a ? a : this.isLoggedIn ? this.userPreferences_.searchList : this.recentSearches;
    if (b) {
        var c = this.getAssetType();
        a = this.document_.getElementById("recently-searched");
        a.innerHTML = "Recently searched: ";
        if (b = b[c])
            for (c = 0; c < b.length; c++) {
                var d = b[c]
                  , e = this.document_.createElement("span")
                  , f = this.document_.createElement("p");
                e.setAttribute("title", d);
                e.setAttribute("searchTerm", d);
                0 === c && 1 === b.length || 1 < b.length && c === b.length - 1 || (f.innerText += ", ");
                e.innerText = decodeURI(d);
                e.addEventListener("click", codepops.bind(function(a) {
                    this.populateSearchField(a, !0)
                }, this));
                a.appendChild(e);
                a.appendChild(f)
            }
    }
}
;
codepops.EditorPage.prototype.saveRecentlySearchedList = function(a) {
    this.userPreferences_.searchList = a;
    this.dataStore_.saveSearchList(a)
}
;
codepops.EditorPage.prototype.shiftAssetIcons = function(a) {
    var b = this.document_.getElementById("left-asset-arrow")
      , c = this.iconSet.getElementsByTagName("a");
    if (c[this.currentSearchIconIndex_]) {
        "right" === a ? this.currentSearchIconIndex_ += 1 : "left" === a && this.currentSearchIconIndex_ > this.firstElementsIndex_ && (this.currentSearchIconIndex_ -= 1);
        for (var d = 0; d < this.currentSearchIconIndex_; d++)
            "right" === a ? c[d].style.display = "none" : c[this.currentSearchIconIndex_].style.display = "inline-block";
        "left" === a && this.currentSearchIconIndex_ === this.firstElementsIndex_ && (c[this.currentSearchIconIndex_].style.display = "inline-block");
        "inline-block" === c[this.firstElementsIndex_].style.display ? (b.style.opacity = "0.1",
        b.style.pointerEvents = "none") : (b.style.opacity = "1",
        b.style.pointerEvents = "initial");
        this.checkForAdditionalIcons()
    }
}
;
codepops.EditorPage.prototype.generateAssetIconSet = function() {
    var a = [{
        index: "0",
        id: "find-stamps_recent",
        title: "Recent",
        "class": "stamps-icons recent"
    }, {
        index: "1",
        id: "find-stamps_animal",
        title: "Animal",
        "class": "stamps-icons animal"
    }, {
        index: "2",
        id: "find-stamps_plant",
        title: "Plant",
        "class": "stamps-icons plant"
    }, {
        index: "3",
        id: "find-stamps_person",
        title: "Person",
        "class": "stamps-icons person"
    }, {
        index: "4",
        id: "find-stamps_vehicle",
        title: "Vehicle",
        "class": "stamps-icons vehicle"
    }, {
        index: "5",
        id: "find-stamps_food",
        title: "Food",
        "class": "stamps-icons food"
    }, {
        index: "6",
        id: "find-stamps_dress-up",
        title: "Dress-Up",
        "class": "stamps-icons dress-up"
    }, {
        index: "7",
        id: "find-stamps_sports",
        title: "Sports",
        "class": "stamps-icons sports"
    }, {
        index: "8",
        id: "find-stamps_travel",
        title: "Travel",
        "class": "stamps-icons travel"
    }, {
        index: "9",
        id: "find-stamps_ocean",
        title: "Ocean",
        "class": "stamps-icons ocean"
    }, {
        index: "10",
        id: "find-stamps_symbol",
        title: "Symbol",
        "class": "stamps-icons symbol"
    }, {
        index: "11",
        id: "find-stamps_objects",
        title: "Objects",
        "class": "stamps-icons objects"
    }, {
        index: "12",
        id: "find-stamps_creatures",
        title: "Creatures",
        "class": "stamps-icons creatures"
    }, {
        index: "13",
        id: "find-stamps_art",
        title: "Art",
        "class": "stamps-icons art"
    }, {
        index: "14",
        id: "find-stamps_music",
        title: "Music",
        "class": "stamps-icons music"
    }, {
        index: "15",
        id: "find-stamps_space",
        title: "Space",
        "class": "stamps-icons space"
    }, {
        index: "16",
        id: "find-stamps_flags",
        title: "Flags",
        "class": "stamps-icons flags"
    }, {
        index: "17",
        id: "find-stamps_all",
        title: "All",
        "class": "stamps-icons all"
    }]
      , b = [{
        index: "0",
        id: "find-fills_recent",
        title: "Recent",
        "class": "fills-icons recent"
    }, {
        index: "1",
        id: "find-fills_fairytale",
        title: "Fairytale",
        "class": "fills-icons fairytale"
    }, {
        index: "2",
        id: "find-fills_city",
        title: "City",
        "class": "fills-icons city"
    }, {
        index: "3",
        id: "find-fills_space",
        title: "Space",
        "class": "fills-icons space"
    }, {
        index: "4",
        id: "find-fills_food",
        title: "Food",
        "class": "fills-icons food"
    }, {
        index: "5",
        id: "find-fills_travel",
        title: "Travel",
        "class": "fills-icons travel"
    }, {
        index: "6",
        id: "find-fills_sports",
        title: "Sports",
        "class": "fills-icons sports"
    }, {
        index: "7",
        id: "find-fills_nature",
        title: "Nature",
        "class": "fills-icons nature"
    }, {
        index: "8",
        id: "find-fills_wacky",
        title: "Wacky",
        "class": "fills-icons wacky"
    }, {
        index: "9",
        id: "find-fills_games",
        title: "Games",
        "class": "fills-icons games"
    }, {
        index: "10",
        id: "find-fills_water",
        title: "Water",
        "class": "fills-icons water"
    }, {
        index: "11",
        id: "find-fills_holidays",
        title: "Holidays",
        "class": "fills-icons holidays"
    }, {
        index: "12",
        id: "find-fills_material",
        title: "Material",
        "class": "fills-icons material"
    }, {
        index: "13",
        id: "find-fills_simple",
        title: "Simple",
        "class": "fills-icons simple"
    }, {
        index: "14",
        id: "find-fills_all",
        title: "All",
        "class": "fills-icons all"
    }]
      , c = [{
        index: "0",
        id: "find-colors_red",
        title: "Red",
        "class": "colors-icons red"
    }, {
        index: "1",
        id: "find-colors_orange",
        title: "Orange",
        "class": "colors-icons orange"
    }, {
        index: "2",
        id: "find-colors_yellow",
        title: "Yellow",
        "class": "colors-icons yellow"
    }, {
        index: "3",
        id: "find-colors_green",
        title: "Green",
        "class": "colors-icons green"
    }, {
        index: "4",
        id: "find-colors_blue",
        title: "Blue",
        "class": "colors-icons blue"
    }, {
        index: "5",
        id: "find-colors_violet",
        title: "Violet",
        "class": "colors-icons violet"
    }, {
        index: "6",
        id: "find-colors_brown",
        title: "Brown",
        "class": "colors-icons brown"
    }, {
        index: "7",
        id: "find-colors_white",
        title: "White",
        "class": "colors-icons white"
    }, {
        index: "8",
        id: "find-colors_gray",
        title: "Gray",
        "class": "colors-icons gray"
    }, {
        index: "9",
        id: "find-colors_black",
        title: "Black",
        "class": "colors-icons black"
    }]
      , d = [{
        index: "0",
        id: "find-sounds_recent",
        title: "Recent",
        "class": "sounds-icons recent"
    }, {
        index: "1",
        id: "find-sounds_sound-effects",
        title: "Sound-Effects",
        "class": "sounds-icons sound-effects"
    }, {
        index: "2",
        id: "find-sounds_music",
        title: "Music",
        "class": "sounds-icons music"
    }, {
        index: "3",
        id: "find-sounds_animal",
        title: "Animal",
        "class": "sounds-icons animal"
    }, {
        index: "4",
        id: "find-sounds_funny",
        title: "Funny",
        "class": "sounds-icons funny"
    }, {
        index: "5",
        id: "find-sounds_violent",
        title: "Violent",
        "class": "sounds-icons violent"
    }, {
        index: "6",
        id: "find-sounds_transportation",
        title: "Transportation",
        "class": "sounds-icons transportation"
    }, {
        index: "7",
        id: "find-sounds_creatures",
        title: "Creatures",
        "class": "sounds-icons creatures"
    }, {
        index: "8",
        id: "find-sounds_people",
        title: "People",
        "class": "sounds-icons people"
    }, {
        index: "9",
        id: "find-sounds_long",
        title: "Long",
        "class": "sounds-icons long"
    }, {
        index: "10",
        id: "find-sounds_short",
        title: "Short",
        "class": "sounds-icons short"
    }, {
        index: "11",
        id: "find-sounds_gross",
        title: "Gross",
        "class": "sounds-icons gross"
    }, {
        index: "13",
        id: "find-sounds_all",
        title: "All",
        "class": "sounds-icons all"
    }]
      , e = [{
        index: "0",
        id: "find-songs_recent",
        title: "Recent",
        "class": "songs-icons recent"
    }, {
        index: "1",
        id: "find-songs_silly",
        title: "Silly",
        "class": "songs-icons silly"
    }, {
        index: "2",
        id: "find-songs_holiday",
        title: "Holiday",
        "class": "songs-icons holiday"
    }, {
        index: "3",
        id: "find-songs_fast",
        title: "Fast",
        "class": "songs-icons fast"
    }, {
        index: "4",
        id: "find-songs_slow",
        title: "Slow",
        "class": "songs-icons slow"
    }, {
        index: "5",
        id: "find-songs_march",
        title: "March",
        "class": "songs-icons march"
    }, {
        index: "6",
        id: "find-songs_scary",
        title: "Scary",
        "class": "songs-icons scary"
    }, {
        index: "7",
        id: "find-songs_dramatic",
        title: "Dramatic",
        "class": "songs-icons dramatic"
    }, {
        index: "8",
        id: "find-songs_happy",
        title: "Happy",
        "class": "songs-icons happy"
    }, {
        index: "9",
        id: "find-songs_sad",
        title: "Sad",
        "class": "songs-icons sad"
    }, {
        index: "10",
        id: "find-songs_all",
        title: "All",
        "class": "songs-icons all"
    }]
      , f = this.getAssetType();
    if ("command" !== f && "font" !== f) {
        var g = []
          , g = {
            stamp: a,
            fill: b,
            color: c,
            sound: d,
            song: e
        };
        this.iconSet.innerHTML = "";
        g = g[f];
        a = function(a, b) {
            Object.getOwnPropertyNames(a).forEach(function(c, d) {
                b.setAttribute(c, a[c])
            })
        }
        ;
        for (i = 0; i < g.length; i++)
            b = this.document_.createElement("a"),
            a(g[i], b),
            this.iconSet.appendChild(b);
        this.assetSearchInput.placeholder = "Search " + f + "s...";
        this.assetSearchInput.setAttribute("aria-label", "Search " + f + "s")
    }
}
;
codepops.EditorPage.prototype.iconArrowsHandler = function() {
    var a = this.document_.getElementById("left-asset-arrow")
      , b = this.document_.getElementById("right-asset-arrow")
      , c = this.iconSet.getElementsByTagName("a")
      , d = "find-" + this.getAssetType() + "s";
    if (0 === this.iconSet.getElementsByTagName("a").length || d !== this.currentAssetType)
        this.firstElementsIndex_ = 1,
        "#find-colors" === window.location.hash && (this.firstElementsIndex_ = 0),
        this.currentSearchIconIndex_ = this.firstElementsIndex_,
        a.style.opacity = "0.1",
        a.style.pointerEvents = "none",
        b.style.opacity = "1",
        b.style.pointerEvents = "initial";
    else {
        this.checkForAdditionalIcons();
        for (var e = b = 0; e < c.length; e++)
            if ("none" === c[e].style.display) {
                a.style.opacity = "1";
                a.style.pointerEvents = "initial";
                b += 1;
                if ("find-colors" === d && 1 === b)
                    break;
                if (2 === b)
                    break
            } else
                a.style.opacity = ".1",
                a.style.pointerEvents = "none"
    }
}
;
codepops.EditorPage.prototype.iconSetHandler = function() {
    var a = this.document_.getElementById("asset-search").value;
    (a = this.trimAndSanitizeSearchTerm(a)) && a.length || (a = "all");
    var b = this.document_.getElementsByClassName(a)[0].getAttribute("index")
      , a = this.document_.getElementById("left-asset-arrow")
      , c = this.document_.getElementById("right-asset-arrow")
      , d = this.iconSet.getElementsByTagName("a")
      , c = c.getBoundingClientRect().left - a.getBoundingClientRect().right
      , b = b - (Math.floor(c / 47) - 1)
      , c = this.window_.innerWidth;
    if (this.isWindows) {
        if (1352 < c && 1374 > c || 1282 < c && 1306 > c)
            b += 1
    } else if (1340 < c && 1359 > c || 1267 < c && 1291 > c)
        b += 1;
    1 > b && (b = 1,
    -1 < window.location.hash.indexOf("#find-colors") && (b = 0));
    this.currentSearchIconIndex_ = b;
    for (c = 0; c < b; c++)
        d[c].style.display = "none";
    for (c = b; c < d.length; c++)
        d[c].style.display = "inline-block";
    this.windowHash_ === window.location.hash && this.iconArrowsHandler();
    for (c = 0; c < d.length; c++)
        if (Math.floor(0 < d[c].getBoundingClientRect().top) && Math.floor(d[c].getBoundingClientRect().top) < Math.floor(a.getBoundingClientRect().top - 10)) {
            this.iconSet.style.opacity = "0";
            this.iconSet.style.display = "flex";
            setTimeout(codepops.bind(function() {
                this.iconSet.style.display = "block";
                this.iconSet.style.opacity = "1";
                this.iconArrowsHandler()
            }, this), 0);
            break
        }
}
;
codepops.EditorPage.prototype.applySearchTermToHash = function(a) {
    var b = this.document_.body.scrollTop;
    a && "string" === typeof a || (a = this.assetSearchInput.value);
    a = this.trimAndSanitizeSearchTerm(a);
    this.window_.location.hash = "find-" + this.getAssetType() + "s_" + a;
    this.document_.body.scrollTop = b;
    this.window_.scroll(0, b)
}
;
codepops.EditorPage.prototype.checkForAdditionalIcons = function() {
    for (var a = this.document_.getElementById("right-asset-arrow"), b = this.iconSet.getElementsByTagName("a"), c = 0; c < b.length; c++)
        if (Math.floor(b[c].getBoundingClientRect().top) > Math.floor(a.getBoundingClientRect().top - 10)) {
            a.style.opacity = "1";
            a.style.pointerEvents = "initial";
            break
        } else
            a.style.opacity = ".1",
            a.style.pointerEvents = "none"
}
;
codepops.EditorPage.prototype.trimAndSanitizeSearchTerm = function(a) {
    return a && a.length ? a.trim().toLowerCase() : ""
}
;
codepops.EditorPage.prototype.displayUsersCustomAssets = function(a, b, c, d) {
    var e = this.document_.body.scrollTop;
    this.window_.location.hash = "#my-stamps";
    this.document_.body.scrollTop = e;
    this.window_.scroll(0, e);
    this.hideAllSticks_();
    if (!this.customAssetsLoaded || d) {
        a || b ? (this.thumbsStart = a,
        this.thumbsEnd = b) : (this.thumbsStart = this.thumbSet = 1,
        this.thumbsEnd = 40);
        var f = this.getAssetType();
        this.assetsContentDiv.innerHTML = "";
        this.editMenu ? this.editMenu.innerHTML = "" : (this.editMenu = this.document_.createElement("div"),
        this.editMenu.id = "custom-asset-edit-menu");
        this.assetsContentDiv.appendChild(this.editMenu);
        this.editMenu.innerHTML = "";
        this.editMenu.classList.remove("drop-down");
        a = this.generateAddButton();
        this.assetsContentDiv.appendChild(a);
        this.addCustomAssets();
        this.onCustomAssetsTour && a.classList.add("shake");
        a = function(a, b, d) {
            d && (this.userPreferences_ = d);
            d = Object.keys(a).sort(alphanum);
            for (var e = 0; e < d.length; e++) {
                var f = d[e]
                  , p = this.document_.createElement("div");
                p.setAttribute("title", "@" + f);
                p.classList.add("thumb-stamp");
                p.classList.add("custom-thumb-stamp");
                a[f].grayBackground ? (p.style.backgroundColor = "#808080",
                p.style.borderColor = "#808080") : (p.style.backgroundColor = "#fff",
                p.style.borderColor = "#fff");
                p.style.backgroundImage = "url(" + a[f].url + ")";
                this.assetsContentDiv.appendChild(p);
                var s = this.document_.createElement("div");
                s.classList.add("thumb-label");
                s.innerHTML = "@" + f;
                p.appendChild(s)
            }
            this.applyAssetInteractionHandlers();
            a = "visible";
            b <= this.totalThumbsPerPage && (a = "hidden");
            d = this.document_.createElement("div");
            d.classList.add("pagination-button-div");
            this.assetsContentDiv.appendChild(d);
            e = this.document_.createElement("div");
            e.classList.add("next-thumbset");
            e.classList.add(a);
            e.addEventListener("click", this.thumbsPagination.bind(this, "next"));
            d.appendChild(e);
            e = this.document_.createElement("div");
            e.classList.add("prev-thumbset");
            e.classList.add("disabled");
            e.classList.add(a);
            e.addEventListener("click", this.thumbsPagination.bind(this, "prev"));
            d.appendChild(e);
            d = this.document_.createElement("div");
            d.classList.add("button-buffer");
            d.classList.add(a);
            this.assetsContentDiv.appendChild(d);
            c && c(b)
        }
        .bind(this);
        b = function(a) {
            if ("NO_MATCH" === a) {
                a = this.document_.createElement("br");
                var b = this.document_.createElement("p");
                b.classList.add("no-match-custom");
                b.innerHTML = "You haven't made any of your own " + f + "s yet. Tap the + icon to start making one now! ";
                this.assetsContentDiv.appendChild(a);
                this.assetsContentDiv.appendChild(b)
            } else
                console.error(a)
        }
        .bind(this);
        this.dataStore_.getThumbnails("stamp_thumbs", this.thumbsStart, this.thumbsEnd, d, a, b);
        this.customAssetsLoaded = !0
    }
}
;
codepops.EditorPage.prototype.thumbsPagination = function(a) {
    "next" === a ? this.thumbSet += 1 : 1 < this.thumbSet && (this.thumbSet -= 1);
    this.thumbsEnd = this.thumbSet * this.totalThumbsPerPage;
    this.thumbsStart = this.thumbsEnd - (this.totalThumbsPerPage - 1);
    a = function(a) {
        var c = this.assetsContentDiv.getElementsByClassName("next-thumbset")[0]
          , d = this.assetsContentDiv.getElementsByClassName("prev-thumbset")[0];
        1 === this.thumbSet ? (c.classList.remove("disabled"),
        d.classList.add("disabled")) : (d.classList.remove("disabled"),
        this.thumbsEnd >= a && c.classList.add("disabled"))
    }
    .bind(this);
    this.displayUsersCustomAssets(this.thumbsStart, this.thumbsEnd, a, !0)
}
;
codepops.EditorPage.prototype.addCustomAssets = function() {
    var a = this.assetsContentDiv.getElementsByClassName("thumb-stamp-add")[0]
      , b = codepops.bind(function(a) {
        this.dataStore_.isFeatureOnForUser("signUpPrompt") && this.dataStore_.userIsAnonymous() ? this.showAnonymousSignUpPanel("customAssets") : this.showCustomAssetEditor()
    }, this);
    a.addEventListener("click", b)
}
;
codepops.EditorPage.prototype.showCustomAssetEditor = function() {
    this.onCustomAssetsTour && (this.assetsContentDiv.getElementsByClassName("thumb-stamp-add")[0].classList.remove("shake"),
    this.onCustomAssetsTour = !1);
    this.customAssetsIFrame_ || (this.customAssetsIFrame_ = this.document_.createElement("iframe"),
    this.customAssetsIFrame_.id = "custom-assets-iframe",
    this.customAssetsIFrame_.frameborder = 0,
    this.customAssetsIFrame_.scrolling = "no",
    this.customAssetsIFrame_.src = "about:blank",
    this.document_.body.appendChild(this.customAssetsIFrame_),
    this.customAssetsBackground_ = this.document_.createElement("div"),
    this.customAssetsBackground_.className = "iframe-background",
    this.document_.body.appendChild(this.customAssetsBackground_),
    this.customAssetsBackground_.addEventListener("dragover", function(a) {
        a.stopPropagation();
        a.preventDefault()
    }, !1),
    this.customAssetsBackground_.addEventListener("dragleave", function(a) {
        a.stopPropagation();
        a.preventDefault()
    }, !1),
    this.customAssetsBackground_.addEventListener("drop", function(a) {
        a.stopPropagation();
        a.preventDefault()
    }, !1),
    this.customAssetsBackground_.addEventListener("change", function(a) {
        a.stopPropagation();
        a.preventDefault()
    }, !1));
    this.customAssetsIFrame_.src = "/asset-editor.html";
    this.customAssetsIFrame_.style.display = "block";
    this.customAssetsBackground_.style.display = "block";
    this.customAssetsLoaded = !1
}
;
codepops.EditorPage.prototype.cancelCustomAssetEditor = function() {
    this.customAssetsIFrame_.style.display = "none";
    this.customAssetsBackground_.style.display = "none";
    this.customAssetsIFrame_.src = "about:blank";
    this.needToReloadPrefs_ = !0
}
;
codepops.EditorPage.prototype.checkStampNameTaken = function(a) {
    if (this.userPreferences_.customAssets && this.userPreferences_.customAssets.stamps)
        return this.userPreferences_.customAssets.stamps[a] ? !0 : !1
}
;
codepops.EditorPage.prototype.specialCharacterCheck = function(a) {
    return /[~`!@#$%^&*+=\-[\]\\';,/{}()_.|\\":<>?]/g.test(a)
}
;
codepops.EditorPage.prototype.showCustomAssetEditMenu = function(a) {
    this.editMenu.innerHTML = "";
    this.createExitTray();
    this.createRenameTray(a);
    this.editMenu.classList.add("drop-down")
}
;
codepops.EditorPage.prototype.createRenameTray = function(a) {
    var b = this.document_.createElement("div");
    b.classList.add("asset-edit-menu-title");
    b.innerHTML = "Stamp Details";
    b.id = "edit-menu-title";
    this.editMenu.appendChild(b);
    var c = this.document_.createElement("hr");
    c.classList.add("edit-menu-hr-line");
    this.editMenu.appendChild(c);
    c = a.cloneNode();
    c.id = "asset-node-clone";
    this.editMenu.appendChild(c);
    var d = this.document_.createElement("p");
    d.id = "displayTitle";
    d.classList.add("selected-custom-title");
    d.innerHTML = a.title;
    this.editMenu.appendChild(d);
    var e = a.title
      , f = this.document_.createElement("div");
    f.classList.add("edit-menu-divider");
    f.id = "edit-divider";
    this.editMenu.appendChild(f);
    var g = this.document_.createElement("span");
    g.id = "rename-custom-asset";
    g.title = "Rename stamp";
    this.editMenu.appendChild(g);
    var h = this.document_.createElement("span");
    h.id = "remove-custom-asset";
    h.title = "Delete this stamp permanently";
    h.classList.add(a.title.substring(1));
    this.editMenu.appendChild(h);
    h.addEventListener("click", function() {
        this.showConfirmationDiv("confirm-delete-div")
    }
    .bind(this));
    g.addEventListener("click", function() {
        0 === e.indexOf("@") && (e = e.substr(1));
        b.innerHTML = "Rename this stamp. ";
        var a = this.document_.createElement("span");
        a.innerHTML = "Reminder: Remember to update your code in every app that references this stamp.";
        a.className = "warning";
        b.appendChild(a);
        d.remove();
        h.remove();
        g.remove();
        f.classList.add("edit-menu-divider-media");
        a = this.document_.createElement("p");
        a.id = "at-symbol";
        a.innerHTML = " @ ";
        this.editMenu.appendChild(a);
        a = this.document_.createElement("span");
        a.setAttribute("method", "post");
        a.setAttribute("action", "/");
        a.id = "rename-form";
        var c = this.document_.createElement("input");
        c.id = "rename-input";
        c.setAttribute("name", "renameStamp");
        c.value = e;
        c.setAttribute("maxlength", "25");
        var n = this.document_.createElement("span");
        n.id = "rename-custom-asset-confirm";
        n.title = "Rename stamp";
        this.editMenu.appendChild(n);
        n.addEventListener("click", function() {
            this.confirmRename(e)
        }
        .bind(this));
        n = this.document_.createElement("span");
        n.id = "rename-custom-asset-cancel";
        n.title = "Cancel";
        this.editMenu.appendChild(n);
        n.addEventListener("click", function() {
            this.editMenu.innerHTML = "";
            this.editMenu.classList.remove("drop-down")
        }
        .bind(this));
        a.appendChild(c);
        this.editMenu.appendChild(a);
        c.focus()
    }
    .bind(this))
}
;
codepops.EditorPage.prototype.confirmRename = function(a) {
    var b = this.getAssetType()
      , c = b + "_thumb"
      , d = this.document_.getElementById("rename-input")
      , e = this.document_.getElementById("asset-node-clone")
      , f = d.value.toLowerCase().replace(/[\s@]/gi, "")
      , d = this.checkStampNameTaken(f)
      , g = this.document_.getElementById("edit-menu-title");
    this.document_.createElement("div").id = "rename-loading";
    var h = this.document_.createElement("img");
    h.src = "img/loading-white-email.gif";
    h.border = 0;
    h.width = 91;
    h.alt = "loading";
    h.classList.add("rename-loading-gif");
    var l = this.document_.getElementById("rename-custom-asset-cancel");
    l.style.display = "none";
    var m = this.document_.getElementById("rename-custom-asset-confirm");
    m.classList.add("hide");
    m.appendChild(h);
    var n = function() {
        this.editMenu.innerHTML = "";
        this.editMenu.classList.remove("drop-down");
        this.customAssetsLoaded = !1;
        this.displayUsersCustomAssets(null, null, function() {
            e.title = "@" + f;
            this.displayThumbInSandbox(e)
        }
        .bind(this))
    }
    .bind(this);
    0 === f.indexOf("@") && (f = f.substr(1));
    if (this.specialCharacterCheck(f))
        return g.innerHTML = " Uh oh! Stamp names can only include letters and numbers. Type a new name for your stamp and try again.",
        g.className = "warning",
        h.style.display = "none",
        l.style.display = "inline-block",
        m.classList.remove("hide"),
        !1;
    a === f || 0 === f.length ? (this.editMenu.innerHTML = "",
    this.editMenu.classList.remove("drop-down")) : d ? (h.style.display = "none",
    l.style.display = "inline-block",
    m.classList.remove("hide"),
    this.showConfirmationDiv("confirm-overwrite-div"),
    this.document_.getElementById("desired-stamp-rename").innerHTML = "'@" + f + "'",
    this.document_.getElementById("close-overwrite-btn").addEventListener("click", function() {
        this.editMenu.innerHTML = "";
        this.editMenu.classList.remove("drop-down");
        this.hideConfirmationDiv("confirm-overwrite-div")
    }
    .bind(this))) : (d = function() {
        this.dataStore_.renameCustomAsset(a, f, c, n)
    }
    .bind(this),
    this.dataStore_.renameCustomAsset(a, f, b, d))
}
;
codepops.EditorPage.prototype.createExitTray = function() {
    var a = this.document_.createElement("div");
    a.classList.add("close-tray-div");
    a.title = "Close tray";
    this.editMenu.appendChild(a);
    var b = this.document_.createElement("a");
    b.setAttribute("href", "#coding");
    b.setAttribute("title", "Close");
    a.appendChild(b);
    var c = this.document_.createElement("img");
    c.setAttribute("class", "close-button");
    c.setAttribute("src", "/img/button-x-black.png");
    c.setAttribute("alt", "Close button");
    c.setAttribute("title", "Close");
    b.appendChild(c);
    a.addEventListener("click", function() {
        this.editMenu.innerHTML = "";
        this.editMenu.classList.remove("drop-down")
    }
    .bind(this));
    this.confirmCloseBtn.addEventListener("click", function() {
        this.editMenu.innerHTML = "";
        this.editMenu.classList.remove("drop-down");
        this.hideConfirmationDiv("confirm-delete-div")
    }
    .bind(this))
}
;
codepops.EditorPage.prototype.showConfirmationDiv = function(a) {
    this.document_.getElementById(a).classList.remove("hidden");
    this.popupBackgroundDiv.style.display = "block"
}
;
codepops.EditorPage.prototype.hideConfirmationDiv = function(a) {
    this.document_.getElementById(a).classList.add("hidden");
    this.popupBackgroundDiv.style.display = "none"
}
;
codepops.EditorPage.prototype.deleteUsersCustomAsset = function() {
    var a = this.document_.getElementById("remove-custom-asset").className
      , b = function() {
        this.customAssetsLoaded = !1;
        this.hideConfirmationDiv("confirm-delete-div");
        this.hideConfirmationDiv("custom-asset-edit-menu");
        this.editMenu.classList.remove("drop-down");
        this.displayUsersCustomAssets();
        this.explodeCustomAssetInIframe()
    }
    .bind(this);
    this.dataStore_.deleteCustomAsset(a, "stamps", function() {
        this.dataStore_.deleteCustomAsset(a, "stamp_thumbs", b)
    }
    .bind(this))
}
;
codepops.EditorPage.prototype.explodeCustomAssetInIframe = function() {
    this.sandbox_.run('stamp("nuke",1200);\nsound("boom");')
}
;
codepops.EditorPage.prototype.initCustomAssetsTour = function() {
    var a = this.document_.getElementById("stick-custom-assets");
    if (a) {
        (this.isIE || this.isEdge || this.isFirefox) && a.classList.add("ie-edge-firefox-adjustment");
        a.classList.remove("hidden");
        var b = function() {
            a.style.left = "31px";
            this.document_.getElementsByClassName("thumb-stamp-add")[0].classList.add("shake")
        }
        .bind(this);
        setTimeout(b, 500);
        this.onCustomAssetsTour = !0
    }
}
;
codepops.EditorPage.prototype.userHasCustomAssets = function() {
    return this.userPreferences_ && this.userPreferences_.customAssets ? !0 : !1
}
;
codepops.EditorPage.prototype.generateAddButton = function() {
    var a = this.document_.createElement("div");
    a.style.display = "inline";
    var b = this.document_.createElement("div");
    b.id = "stick-custom-assets";
    b.classList.add("stick");
    b.classList.add("stick-right");
    b.classList.add("hidden");
    var c = this.document_.createElement("p");
    c.innerHTML = $t("Tap to make your own stamps!");
    b.appendChild(c);
    a.appendChild(b);
    b = this.document_.createElement("div");
    b.setAttribute("title", "Add a new stamp to your library!");
    b.classList.add("thumb-stamp-add");
    b.style.borderColor = "#fff";
    b.style.backgroundPosition = "7px 7px";
    b.style.backgroundRepeat = "no-repeat";
    b.style.backgroundSize = "50px";
    c = this.document_.createElement("div");
    c.classList.add("thumb-label");
    c.innerHTML = "Add";
    b.appendChild(c);
    a.appendChild(b);
    return a
}
;
codepops.EditorPage.prototype.closeFirewallWarning = function() {
    var a = this.document_.getElementById("firewall-warning");
    a && (a.style.display = "none",
    this.hasDismissedFirewallWarning_ = !0)
}
;
codepops.EditorPage.prototype.hideAgeAndGenderDivsFromPartner = function() {
    for (var a = this.document_.getElementsByClassName("age-and-gender"), b = 0; b < a.length; b++)
        a[b].classList.add("hidden")
}
;
codepops.EditorPage.prototype.browseProjectCards = function() {
    this.window_.parent && this.window_.parent.postMessage({
        action: "browse-project-cards"
    }, "*")
}
;
codepops.EditorPage.prototype.checkIfAliUserOnMobile = function() {
    if (c123.isAliPage_() && (navigator.userAgent.match(/(ipad|iphone|ipod|android)/gi) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints && !window.MSStream)) {
        var a = this.document_.getElementById("stick-welcome-back");
        alertText = "Uh oh! Are you on a touch screen? Coding involves a lot of typing which is hard on a touch screen. We recommend you code on a device with a <b>physical keyboard</b>.";
        a.className = "stick hidden";
        this.alert(alertText, !0)
    }
}
;
codepops.EditorPage.prototype.hideMobileStick = function() {
    this.document_.getElementById("stick-alert").classList.add("hidden")
}
;
codepops.EditorPage.prototype.disableEnterKey = function(a) {
    13 === a.keyCode && a.preventDefault()
}
;
codepops.EditorPage.prototype.navigateToMainSite = function() {
    this.enterKeyDisabled && (this.enterKeyDisabled = !1);
    window.location.href = "/"
}
;
codepops.EditorPage.prototype.hideAppCard = function() {
    this.dataStore_.isFeatureOnForUser("draggableAppCards") && this.draggableAppCardWidget_ && this.draggableAppCardWidget_.removeAppCard()
}
;
codepops.EditorPage.prototype.showAppCard = function() {
    var a = this.apps_[this.currentAppKey_];
    this.dataStore_.isFeatureOnForUser("draggableAppCards") && a && a.parentActivityNumber && this.draggableAppCardWidget_ && this.draggableAppCardWidget_.displayAppCard(a.parentActivityNumber, this.userPreferences_.lastCardPosition || void 0)
}
;
codepops = codepops || {};
codepops.ErrorAppsPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.firebaseConfigs_ = {
        stats: {
            apiKey: "AIzaSyA-l6LdND_H3PBTKlqFgrcsPdfCoKO-CFs",
            authDomain: "bitsboxstats.firebaseapp.com",
            databaseURL: "https://bitsboxstats.firebaseio.com",
            projectId: "bitsboxstats",
            storageBucket: "bitsboxstats.appspot.com",
            messagingSenderId: "645145916441"
        },
        staging: {
            apiKey: "AIzaSyDLopq_bvt3vIaJalGRowQM2eANBTXP5yM",
            authDomain: "bitsboxstagings.firebaseapp.com",
            databaseURL: "https://bitsboxstaging.firebaseio.com",
            projectId: "bitsboxstaging",
            storageBucket: "bitsboxstaging.appspot.com",
            messagingSenderId: "592712701129"
        }
    };
    this.firebaseConfig_ = this.getFirebaseConfig_();
    this.firebase_ = this.openFirebase_();
    this.queryFirebase_()
}
;
codepops.ErrorAppsPage.prototype.queryFirebase_ = function() {
    this.displayMessage_("Fetching data from Firebase.");
    var a = "/" + this.getEnv_() + "/appsWithErrors";
    this.firebase_.child(a).once("value", codepops.bind(this.handleFirebaseResponse_, this))
}
;
codepops.ErrorAppsPage.prototype.getEnv_ = function() {
    var a = "prod"
      , b = this.window_.location.hostname;
    if (b && -1 < b.toLowerCase().indexOf("bitsboxstaging") || -1 < b.toLowerCase().indexOf("localhost"))
        a = "staging";
    return a
}
;
codepops.ErrorAppsPage.prototype.getFirebaseConfig_ = function() {
    var a = "stats"
      , b = this.window_.location.hostname
      , c = this.window_.location.href;
    if (b) {
        var d = new RegExp(/10\.\d+\.\d+\.\d+/)
          , c = -1 < c.toLowerCase().indexOf("useproddata")
          , e = -1 < b.toLowerCase().indexOf("bitsboxstaging") && !c
          , b = (-1 < b.toLowerCase().indexOf("localhost") || d.test(b)) && !c;
        if (c)
            a = "stats";
        else if (e || b)
            a = "staging"
    }
    return this.firebaseConfigs_[a]
}
;
codepops.ErrorAppsPage.prototype.openFirebase_ = function() {
    firebase.initializeApp(this.firebaseConfig_);
    return firebase.database().ref()
}
;
codepops.ErrorAppsPage.prototype.handleFirebaseResponse_ = function(a) {
    a ? (a = a.val(),
    !a || !a.length || 1 > a.length ? this.displayMessage_("No data returned from Firebase.") : this.displayData_(a)) : this.displayMessage_("No response from Firebase.")
}
;
codepops.ErrorAppsPage.prototype.displayData_ = function(a) {
    this.displayMessage_("Query done; displaying data.");
    var b = this.document_.getElementById("apps-table");
    if (b)
        for (var c = 0; c < a.length; c++) {
            var d = a[c]
              , e = b.insertRow().insertCell()
              , f = this.document_.createElement("a");
            f.target = "_blank";
            f.href = d;
            f.innerHTML = d;
            e.appendChild(f)
        }
    else
        console.log("Could not find apps table.")
}
;
codepops.ErrorAppsPage.prototype.displayMessage_ = function(a) {
    var b = this.document_.getElementById("message-div");
    if (b) {
        b.innerHTML = "";
        var c = this.document_.createElement("p");
        a = this.document_.createTextNode(a);
        c.appendChild(a);
        b.appendChild(c)
    } else
        console.log("cannot find message-div")
}
;
codepops = codepops || {};
codepops.ErrorHandler = function(a) {
    a = a || {};
    this.jsHintOptions_ = {
        undef: !0,
        asi: !0,
        strict: !1,
        sub: !0
    };
    for (var b in a)
        this.jsHintOptions_[b] = a[b];
    this.jsHintPredef_ = {
        stamp: !0,
        fill: !0,
        line: !0,
        box: !0,
        circle: !0,
        text: !0,
        reset: !0,
        color: !0,
        delay: !0,
        send: !0,
        random: !0,
        offscreen: !0,
        look: !0,
        peek: !0,
        sound: !0,
        song: !0,
        silence: !0,
        repeat: !0,
        find: !0,
        explode: !0,
        pop: !0,
        pow: !0,
        splash: !0,
        burn: !0,
        dance: !0,
        erase: !0,
        hide: !0,
        rotate: !0,
        change: !0,
        wrap: !0,
        unhide: !0,
        move: !0,
        size: !0,
        aim: !0,
        front: !0,
        back: !0,
        hits: !0,
        UP: !0,
        DOWN: !0,
        LEFT: !0,
        RIGHT: !0,
        NORTH: !0,
        SOUTH: !0,
        EAST: !0,
        WEST: !0,
        CENTER: !0,
        NORTHEAST: !0,
        SOUTHEAST: !0,
        NORTHWEST: !0,
        SOUTHWEST: !0
    };
    this.jsHintErrorsToIgnore_ = {
        W118: "Weird mozilla error. Not helpful.",
        W041: "Tells you to use === when comparing to false."
    };
    this.errorCodesForSyntaxErrors_ = {
        E019: !0,
        E020: !0,
        E021: !0,
        E023: !0,
        E024: !0,
        E026: !0,
        E027: !0
    }
}
;
codepops.ErrorHandler.prototype.getErrors = function(a) {
    JSHINT(a, this.jsHintOptions_, this.jsHintPredef_);
    if ((a = JSHINT.data()) && a.errors) {
        a.allErrors = a.errors;
        a.errors = [];
        for (var b = 0; b < a.allErrors.length; b++) {
            var c = a.allErrors[b] || {};
            this.jsHintErrorsToIgnore_[c.code] || a.errors.push(c)
        }
        return a.errors
    }
    return []
}
;
codepops.ErrorHandler.prototype.firstLineNumberContaining = function(a, b) {
    for (var c = a.split("\n"), d = 0, e = 0; e < c.length; e++)
        if (-1 < c[e].indexOf(b)) {
            d = e + 1;
            break
        }
    return d
}
;
codepops.ErrorHandler.prototype.lastLineNumberWithCode = function(a) {
    a = a.split("\n");
    for (var b = 0, c = 0; c < a.length; c++)
        0 < a[c].replace(/\s*/gi, "").length && (b = c + 1);
    return b
}
;
codepops.ErrorHandler.prototype.getMostImportantError = function(a, b) {
    var c;
    c = (b || "").replace(/^Uncaught /gi, "");
    var d = this.getErrors(a), e = 0, f, g, h = null;
    c && -1 < c.indexOf("ReferenceError: ") && (f = c.split(" "),
    h = f[1]);
    if (c && -1 < c.indexOf("TypeError: ")) {
        f = c.split("'");
        var l = (new RegExp("(\\w+)\\." + f[1])).exec(a);
        l && (h = l[1])
    }
    c && -1 < c.indexOf("Unexpected token ") && (f = c.split(" "),
    h = f.pop());
    l = !1;
    if (c && -1 < c.indexOf("Unexpected end of input"))
        for (var m = e; m < d.length; m++)
            g = d[m],
            void 0 !== g.evidence && g.code && this.errorCodesForSyntaxErrors_[g.code] && (h = g.evidence,
            e = m,
            l = !0);
    f = d[e];
    c && -1 < c.indexOf("Unexpected identifier") && (f = d[d.length - 1],
    l = !0,
    f.evidence && -1 < f.evidence.indexOf("delay") && (f.reason = "Invalid argument",
    f.translation = "The first argument to the delay function must be the name of a function."));
    for (m = e; m < d.length; m++)
        g = d[m],
        g.line === f.line && "E041" !== g.code && g.code === f.code && (e = m);
    f = d[e];
    if (null !== h && !l) {
        lines = {};
        for (m = e; m < d.length; m++)
            g = d[m],
            g.a === h && (lines[g.line] = !0,
            e = m,
            l = !0);
        f = Object.keys(lines);
        f = 1 < f.length ? {
            line: f.join(", or "),
            reason: d[e].reason
        } : d[e]
    }
    c && !f && (f = {
        line: 0,
        reason: c
    });
    c && -1 < c.indexOf("is not a function") && (f = c.split(" "),
    e = this.firstLineNumberContaining(a, f[1]),
    f = {
        line: e,
        reason: c
    });
    c && -1 < c.indexOf("Unexpected end of input") && (d = c,
    e = this.lastLineNumberWithCode(a) + 1,
    l && (e = this.firstLineNumberContaining(a, h),
    e === this.lastLineNumberWithCode(a) && (d = "Unexpected end of input on last line")),
    f = {
        line: e,
        reason: d
    });
    null !== h && !1 === l && (e = this.firstLineNumberContaining(a, h),
    f = {
        line: e,
        reason: c
    });
    for (var n in c123.jsErrors)
        d = f.reason || "",
        -1 < d.indexOf(n) && (c = c123.jsErrors[n],
        f.translation = c.translation,
        c.replacementMessage && (f.reason = c.replacementMessage));
    -1 < a.search(/band\s*=\s*\(\s*\)/gi) && (e = this.firstLineNumberContaining(a, "band"),
    d = $t('Whoops! You discovered a bug in our Ladybug Launch code. We left out the word "line". To fix our mistake, change the code to:<br/><br/><tt>band = <em>line</em>()</tt>'),
    f = {
        line: e,
        reason: d
    });
    return f
}
;
codepops.IconEditorPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.library_ = a.library;
    this.editor_ = a.editor;
    if (this.iconCode_ = a.iconCode || "") {
        for (var b = this.iconCode_.split("\n").length; 6 > b; )
            this.iconCode_ += "\n",
            b++;
        this.editor_.setValue(this.iconCode_)
    }
    this.appId_ = a.appId || "";
    this.userPreferences_ = a.userPreferences || {};
    this.iconSize_ = 140;
    this.needsToRunBeforeSave_ = !1;
    this.iconMaskImg_ = a.iconMaskImg || this.document_.getElementById("icon-mask");
    this.library_.setOnErrorHandler(codepops.bind(this.onJSError_, this));
    this.document_.addEventListener("keydown", codepops.bind(function(a) {
        this.lastInteraction_ = new Date;
        this.needsToRunBeforeSave_ = !0;
        if (8 === a.keyCode) {
            var b = !0
              , e = event.srcElement || event.target;
            if ("INPUT" === e.tagName.toUpperCase() && ("TEXT" === e.type.toUpperCase() || "PASSWORD" === e.type.toUpperCase() || "FILE" === e.type.toUpperCase() || "EMAIL" === e.type.toUpperCase()) || "TEXTAREA" === e.tagName.toUpperCase())
                b = e.readOnly || e.disabled;
            b && a.preventDefault()
        }
        13 === a.keyCode && !0 === a.shiftKey && editor && editor.hasFocus() && (this.run(),
        a.preventDefault())
    }, this))
}
;
codepops.IconEditorPage.prototype.onJSError_ = function(a) {
    alert(a)
}
;
codepops.IconEditorPage.prototype.loadUserPreferences_ = function(a, b) {
    if (parent.$_page && parent.$_page.dataStore_ && parent.$_page.dataStore_.getPreferences) {
        var c = function(b) {
            this.userPreferences_ = b;
            a()
        }
        .bind(this);
        parent.$_page.dataStore_.getPreferences(c, function(a) {
            b(a)
        })
    }
}
;
codepops.IconEditorPage.prototype.run = function() {
    console.log("line 7849"+this.editor.getValue());
    var a = editor.getValue();
    if (parent.$_page && parent.$_page.dataStore_ && parent.$_page.dataStore_.isFeatureOnForUser && parent.$_page.dataStore_.isFeatureOnForUser("customStamps")) {
        var b = function() {
            this.library_.run(a, this.userPreferences_.customAssets);
            this.needsToRunBeforeSave_ = !1
        }
        .bind(this);
        this.loadUserPreferences_(b, function(a) {
            console.error(a)
        })
    } else
        this.library_.run(a),
        this.needsToRunBeforeSave_ = !1
}
;
codepops.IconEditorPage.prototype.saveIcons = function() {
    this.needsToRunBeforeSave_ && this.run();
    var a = this.library_.toDataURL()
      , b = this.document_.createElement("canvas");
    b.width = this.iconSize_;
    b.height = this.iconSize_;
    var c = b.getContext("2d");
    c.drawImage(this.iconMaskImg_, 0, 0);
    var d = this.document_.createElement("img");
    d.onerror = codepops.bind(function(a) {
        alert(a)
    }, this);
    d.onload = codepops.bind(function() {
        c.globalCompositeOperation = "source-in";
        c.drawImage(d, 0, 0);
        c.globalCompositeOperation = null;
        var a = function(a) {
            parent.$_page.storeIcons && parent.$_page.storeIcons(this.appId_, b.toDataURL(), this.editor_.getValue(), a)
        }
        .bind(this);
        parent.$_page.generateShareImage && parent.$_page.generateShareImage(b.toDataURL(), a)
    }, this);
    d.src = a
}
;
codepops.IconEditorPage.prototype.storeIcons = function(a, b) {
    console.info(a);
    console.info(b);
    alert("(debug) storeIcons")
}
;
codepops.IconEditorPage.prototype.cancel = function() {
    parent.$_page.cancelIconEditor && parent.$_page.cancelIconEditor()
}
;
codepops.IconEditorPage.prototype.cancelIconEditor = function() {
    alert("(debug) cancelIconEditor")
}
;
codepops = codepops || {};
codepops.IFrameBridgeWidget = function(a, b) {
    var c = b || {};
    this.window_ = c.window || window;
    this.document_ = c.document || window.document;
    this.page_ = a;
    this.window_.addEventListener("message", this.onMessage.bind(this), !1)
}
;
codepops.IFrameBridgeWidget.prototype.onMessage = function(a) {
    if (a.data) {
        var b = a.data.action || "NOACTION";
        a = a.data.args || [];
        "function" == typeof this[b] && this[b].apply(this, a)
    }
}
;
codepops.IFrameBridgeWidget.prototype.home = function() {
    this.page_.home()
}
;
codepops.IFrameBridgeWidget.prototype.installTutorialIfZeroApps = function() {
    0 === this.page_.countCreatedApps_() && this.page_.installTutorial_("TutorialWelcome", !0)
}
;
codepops.IFrameBridgeWidget.prototype.newAppFromActivityNumber = function(a) {
    var b = this.page_.getApps(), c = {}, d = 0, e;
    for (e in b) {
        var f = b[e];
        f.parentActivityNumber && f.parentActivityNumber == a && (c[e] = f,
        d++)
    }
    0 < d ? this.page_.versionChooserWidget.show(c, a, " " + (d + 1)) : this.page_.newAppFromActivityNumber("" + a)
}
;
codepops.IFrameBridgeWidget.prototype.launch = function(a) {
    this.page_.launch(a)
}
;
codepops.IFrameBridgeWidget.prototype.partnerLogin = function(a, b, c, d) {
    this.page_.isLoggedIn && this.page_.logout();
    this.page_.partnerLogin(a, b, c, d)
}
;
codepops.IFrameBridgeWidget.prototype.launchTutorial = function(a) {
    this.page_.installTutorial_(a, !0)
}
;
codepops.IFrameBridgeWidget.prototype.onMobileDeviceCheck = function() {
    this.page_.checkIfAliUserOnMobile()
}
;
codepops.IFrameBridgeWidget.prototype.hideMobileStick = function() {
    this.page_.hideMobileStick()
}
;
codepops.IFrameBridgeWidget.prototype.pause = function() {
    this.page_.pause()
}
;
codepops.IFrameBridgeWidget.prototype.runAppIfInApp = function() {
    this.page_.runAppIfInApp()
}
;
codepops.IFrameBridgeWidget.prototype.isTabletInAppMinimize = function() {
    var a = !1;
    this.page_.isEditingApp_() ? a = !0 : this.page_.home();
    this.window_.parent.postMessage({
        action: "isInAppMinimize",
        args: [a]
    }, "*")
}
;
codepops.IFrameBridgeWidget.prototype.hideAppCard = function() {
    this.page_.hideAppCard()
}
;
codepops.IFrameBridgeWidget.prototype.showAppCard = function() {
    this.page_.showAppCard()
}
;
codepops.IFrameBridgeWidget.prototype.hidePopdownPanels = function() {
    this.page_.togglePopdown("")
}
;
codepops = codepops || {};
codepops.ImageEditorPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.library_ = {};
    this.document_ = a.document || window.document;
    this.dataStore_ = a.dataStore || new codepops.DataStore;
    this.isLoggedIn = !1;
    this.MAX_FILE_SIZE = 5E6;
    this.imageBlob_ = this.cropper_ = this.fileName_ = void 0;
    this.appliedEventListeners = !1;
    this.fileDragCounter = 0;
    this.needToLoadPrefs_ = !0;
    this.userPrefs_ = {};
    this.initialOrientation = 1;
    this.alphaCursorY = this.alphaCursorX = void 0;
    this.draggingCursor = !1;
    this.preservedImageCanvas = this.alphaCanvas = void 0;
    this.cursorStyleTag = this.document_.createElement("style");
    this.cursorCanvas = this.document_.createElement("canvas");
    this.originalImage = {
        image: void 0,
        width: void 0,
        height: void 0
    };
    this.cropperImage = {
        initialOffsetX: void 0,
        initialOffsetY: void 0,
        offsetX: void 0,
        offsetY: void 0
    };
    this.hasDrawnAlpha = this.startingOverWithNewImage = this.userInitiatedPinchZoom = this.pinchZoomListenerApplied = this.zoomListenerApplied = !1;
    this.touchEventsCache = [];
    this.updatingCropper = !1;
    this.isFirefox = "undefined" !== typeof InstallTrigger;
    this.isChrome = !!window.chrome;
    this.isIE = !!document.documentMode;
    this.isEdge = !this.isIE && !!window.StyleMedia;
    this.isiOS = -1 < navigator.platform.indexOf("iPhone") || -1 < navigator.platform.indexOf("iPod") || -1 < navigator.platform.indexOf("iPad");
    this.document_.getElementById("close-button").addEventListener("click", this.cancel.bind(this, !0), !1);
    this.document_.getElementById("stamp-name").addEventListener("keydown", function(a) {
        13 === a.keyCode && (a.preventDefault(),
        this.document_.getElementById("add-to-library-btn").click())
    }
    .bind(this), !1);
    if (this.isFirefox || this.isChrome)
        this.document_.getElementById("toolbar").style.marginLeft = "451px";
    window.File && window.FileList && window.FileReader && this.initFileHandling();
    var b = function(a) {
        this.userPrefs_ = (a.val() || {}).preferences;
        this.needToLoadPrefs_ = !1;
        this.dataStore_.isFeatureOnForUser("customStamps") && !this.dataStore_.userIsAnonymous() && (this.dataStore_.hasSeenToolTips_("BetaInfoWindow") || this.displayCustomStampsBetaInfo(),
        this.dataStore_.isFeatureOnForUser("alphaTool") && (this.document_.getElementById("draw-alpha-div").style.display = "block"))
    }
    .bind(this)
      , c = function() {
        console.error("checkForExistingLogin error when calling getCurrentKid.");
        this.displayError("Error: Please contact help@bitsbox.com")
    }
    .bind(this);
    a = function() {
        this.displayError("You must be logged in.")
    }
    .bind(this);
    var d = function() {
        this.dataStore_.getCurrentKid(b, c)
    }
    .bind(this);
    this.dataStore_.checkForExistingLogin(d, a);
    this.cursorStyleTag.title = "alpha-cursor-stylesheet";
    this.document_.getElementsByTagName("head")[0].appendChild(this.cursorStyleTag);
    this.alphaCursorStylesheet = this.cursorStyleTag.sheet
}
;
codepops.ImageEditorPage.prototype.displayCustomStampsBetaInfo = function() {
    var a = this.document_.getElementById("custom-stamp-beta-info-div");
    a.classList.remove("hidden");
    this.document_.getElementById("get-started-beta-btn").addEventListener("click", function() {
        a.classList.add("hidden")
    });
    this.document_.getElementById("beta-close-btn").addEventListener("click", function() {
        a.classList.add("hidden")
    })
}
;
codepops.ImageEditorPage.prototype.uploadFile = function() {
    var a, b = function() {
        top.$_page && top.$_page.displayUsersCustomAssets ? top.$_page.displayUsersCustomAssets() : window.page && window.page.displayUsersCustomAssets && window.page.displayUsersCustomAssets();
        this.weHaveAnImage = !1;
        d.classList.remove("hidden");
        this.cancel(!0)
    }
    .bind(this), c = function(a) {
        console.error("Firebase storage error: ", a.code, a.message);
        this.displayError($t("Uh oh. It looks like something went wrong. We're terribly sorry. Please try creating your stamp again."))
    }
    .bind(this);
    a = this.stampName ? ("" + this.stampName).toLowerCase().replace(/[\s@]/gi, "") : this.fileName_.substring(0, this.fileName_.indexOf("."));
    var d = this.document_.getElementById("add-to-library-btn");
    d.classList.add("hidden");
    this.dataStore_.uploadCustomImage(this.thumbnailBlob_, a, "stamp_thumbs", this.grayBg, null, c, function() {
        this.dataStore_.uploadCustomImage(this.imageBlob_, a, "stamps", null, null, c, b)
    }
    .bind(this))
}
;
codepops.ImageEditorPage.prototype.displayError = function(a) {
    var b = this.document_.getElementById("stick-error-div")
      , c = this.document_.getElementsByClassName("stick-alert-text")[0];
    c.innerHTML = "";
    c.appendChild(this.document_.createTextNode(a));
    b.className = "stick"
}
;
codepops.ImageEditorPage.prototype.hideError = function() {
    this.document_.getElementById("stick-error-div").className = "stick";
    pTag = this.document_.getElementsByClassName("stick-alert-text")[0];
    pTag.innerHTML = ""
}
;
codepops.ImageEditorPage.prototype.displayLoading = function() {
    this.document_.getElementById("loading-div").style.display = "block"
}
;
codepops.ImageEditorPage.prototype.hideLoading = function() {
    this.document_.getElementById("loading-div").style.display = "none";
    this.displayOutput()
}
;
codepops.ImageEditorPage.prototype.displayOutput = function() {
    this.document_.getElementById("output-div").style.display = "block"
}
;
codepops.ImageEditorPage.prototype.fileDragEnter = function(a) {
    var b = this.document_.getElementById("filedrag");
    a.stopPropagation();
    a.preventDefault();
    this.fileDragCounter++;
    "upload-btn" === a.target.id && void 0 === this.droppingDiv && (a.target.style.display = "none",
    this.droppingDiv = this.document_.createElement("div"),
    this.droppingDiv.id = "dropping-div",
    this.droppingDiv.innerHTML = "<p>Incoming!</p>",
    b.appendChild(this.droppingDiv),
    this.droppingDiv.classList.add("incoming"),
    this.droppingDiv.addEventListener("change", this.fileSelectHandler.bind(this), !1));
    this.droppingDiv && "none" === this.droppingDiv.style.display && (this.droppingDiv.style.display = "block",
    a.target.style.display = "none")
}
;
codepops.ImageEditorPage.prototype.fileDragLeave = function(a) {
    this.fileDragCounter--;
    0 === this.fileDragCounter && (a = this.document_.getElementById("upload-btn"),
    this.droppingDiv && (this.droppingDiv.style.display = "none",
    a.style.display = "block"))
}
;
codepops.ImageEditorPage.prototype.showCopyCursor = function(a) {
    a.dataTransfer.dropEffect = "copy";
    a.dataTransfer.effectAllowed = "copy"
}
;
codepops.ImageEditorPage.prototype.fileSelectHandler = function(a) {
    console.info("fileSelectHandler");
    var b = this.document_.getElementsByClassName("image-manipulation-controls");
    this.fileDragEnter(a);
    a = a.target.files || a.dataTransfer.files;
    if (1 < a.length)
        this.fileDragCounter = 1,
        this.fileDragLeave(),
        this.document_.getElementById("stick-one-file-at-a-time").className = "stick";
    else if (this.droppingDiv && (this.droppingDiv.style.display = "none",
    this.fileDragCounter = 0),
    a = a[0])
        if (/(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(a.name))
            if (a.size > this.MAX_FILE_SIZE)
                this.fileDragCounter = 1,
                this.fileDragLeave(),
                this.document_.getElementById("stick-max-file-size").className = "stick";
            else {
                this.droppingDiv && (this.document_.getElementById("upload-btn").style.display = "block");
                if (this.controlsDisabled) {
                    for (i = 0; i < b.length; i++)
                        b[i].children[0].classList.remove("disabled");
                    this.controlsDisabled = !1
                }
                this.cropper_ && this.cropper_.destroy();
                b = function(a) {
                    this.parseFile(a)
                }
                .bind(this);
                this.getExifData(a, b)
            }
        else
            this.fileDragCounter = 1,
            this.fileDragLeave(),
            this.document_.getElementById("stick-invalid-file-type").className = "stick";
    else {
        for (i = 0; i < b.length; i++)
            b[i].children[0].classList.add("disabled");
        this.controlsDisabled = !0;
        this.droppingDiv && (this.droppingDiv.style.display = "none",
        this.document_.getElementById("upload-btn").style.display = "block")
    }
}
;
codepops.ImageEditorPage.prototype.initCropper = function(a) {
    this.image = this.document_.getElementById("main-cropper-image");
    var b = new Image;
    b.onload = function() {
        var a = b.width
          , e = b.height
          , f = b.width / b.height;
        1E4 < b.width ? (b.style.display = "none",
        this.document_.getElementById("stick-max-image-width").className = "stick") : (768 < b.width ? (a = 768,
        e = Math.round(a / f)) : 1024 < b.height && (e = 1024,
        a = Math.round(e * f)),
        this.originalImage.width = a,
        this.originalImage.height = e,
        this.image = a !== b.width || e !== b.height ? this.resizeImage(a, e, b) : b,
        1 === this.initialOrientation ? c() : this.rotateImage(a, e, c))
    }
    .bind(this);
    b.src = a.result;
    var c = function() {
        this.isIE && (this.document_.getElementById("toolbar").classList.add("ie"),
        this.document_.getElementById("crop-tools-div").classList.add("ie"));
        this.isEdge && this.document_.getElementById("toolbar").classList.add("edge");
        this.isiOS && (this.document_.getElementById("crop-icon").style.backgroundImage = "url(https://bitsbox.com/img/crop-btn.png)");
        this.document_.getElementById("main-cropper-div").style.display = "block";
        this.document_.getElementById("filedrag").style.display = "none";
        this.document_.getElementById("toolbar").style.display = "block";
        this.document_.getElementsByTagName("fieldset")[0].style.border = "white 3px solid";
        this.document_.getElementById("image-and-controls-div").style.marginTop = "0";
        this.document_.getElementById("upload-controls").style.display = "block";
        this.document_.getElementById("crop-button-div").className = "image-manipulation-controls";
        this.document_.getElementById("rotate-left-div").className = "image-manipulation-controls";
        this.document_.getElementById("rotate-right-div").className = "image-manipulation-controls";
        this.document_.getElementById("zoom-in-div").className = "image-manipulation-controls";
        this.document_.getElementById("zoom-out-div").className = "image-manipulation-controls";
        this.document_.getElementById("reset-div").className = "image-manipulation-controls";
        this.document_.getElementById("start-over-div").className = "image-manipulation-controls";
        this.document_.getElementById("draw-alpha-div").className = "image-manipulation-controls";
        if (!this.appliedEventListeners) {
            this.document_.getElementById("crop-button").addEventListener("click", this.showCropBox.bind(this), !1);
            this.document_.getElementById("rotate-left-button").addEventListener("click", this.rotate.bind(this, "left"), !1);
            this.document_.getElementById("rotate-right-button").addEventListener("click", this.rotate.bind(this, "right"), !1);
            this.document_.getElementById("zoom-in-button").addEventListener("click", this.zoom.bind(this, "in"), !1);
            this.document_.getElementById("zoom-out-button").addEventListener("click", this.zoom.bind(this, "out"), !1);
            this.document_.getElementById("reset-button").addEventListener("click", this.reset.bind(this, !1), !1);
            this.document_.getElementById("start-over-button").addEventListener("click", this.startOver.bind(this, !1), !1);
            this.document_.getElementById("draw-alpha-button").addEventListener("click", this.openAlphaTray.bind(this, !1), !1);
            this.document_.getElementById("erase-icon").addEventListener("click", this.alphaMode.bind(this), !1);
            this.document_.getElementById("pan-icon").addEventListener("click", this.panMode.bind(this), !1);
            this.document_.getElementById("cancel-crop").addEventListener("click", this.cancelCrop.bind(this), !1);
            this.document_.getElementById("confirm-crop").addEventListener("click", this.softCrop.bind(this), !1);
            this.document_.getElementById("stamp-name").addEventListener("keyup", this.toggleAddToLibraryBtn.bind(this), !1);
            this.document_.getElementById("add-to-library-btn").addEventListener("click", this.preUploadChecks.bind(this), !1);
            var a = this.document_.getElementsByClassName("nevermind");
            for (i = 0; i < a.length; i++)
                a[i].addEventListener("click", this.hideConfirmationDiv.bind(this, a[i].parentNode.id), !1);
            a = this.document_.getElementsByClassName("confirm");
            for (i = 0; i < a.length; i++)
                a[i].addEventListener("click", this.confirmAction.bind(this, a[i].parentNode.id), !1);
            a = this.document_.getElementsByClassName("confirm-close-button");
            for (i = 0; i < a.length; i++)
                a[i].addEventListener("click", this.hideConfirmationDiv.bind(this, a[i].parentNode.id), !1);
            this.appliedEventListeners = !0
        }
        this.updatePreservedCanvas(!0)
    }
    .bind(this)
}
;
codepops.ImageEditorPage.prototype.resizeImage = function(a, b, c) {
    var d = this.document_.createElement("canvas");
    d.width = a;
    d.height = b;
    d.getContext("2d").drawImage(c, 0, 0, a, b);
    d.remove();
    return d
}
;
codepops.ImageEditorPage.prototype.rotateImage = function(a, b, c) {
    var d;
    if (8 === this.initialOrientation)
        d = 270;
    else if (3 === this.initialOrientation)
        d = 180;
    else if (6 === this.initialOrientation)
        d = 90;
    else {
        c();
        return
    }
    var e;
    a > b ? (e = a,
    this.originalImage.height = a) : (e = b,
    this.originalImage.width = b);
    a = this.document_.createElement("canvas");
    a.width = e;
    a.height = e;
    e = a.getContext("2d");
    e.translate(a.width / 2, a.height / 2);
    e.rotate(d * Math.PI / 180);
    e.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
    this.image = a;
    a.remove();
    c()
}
;
codepops.ImageEditorPage.prototype.toggleAddToLibraryBtn = function() {
    this.stampName = this.document_.getElementById("stamp-name").value;
    this.document_.getElementById("stamp-name").style.fontFamily = "'Source Code Pro',monospace";
    0 === this.stampName.length && (this.atSignHasBeenAdded = !1);
    this.removedAtSignCheck();
    this.stampName && "@" !== this.stampName.charAt(0) && (this.document_.getElementById("stamp-name").value = "@" + this.stampName,
    this.atSignHasBeenAdded = !0);
    this.stampName || (this.document_.getElementById("stamp-name").style.fontFamily = '"Gotham SSm A", "Gotham SSm B", "Montserrat", sans-serif');
    this.stampName && this.weHaveAnImage && "@" !== this.stampName ? this.document_.getElementById("add-to-library-btn").classList.add("confirm") : this.document_.getElementById("add-to-library-btn").classList.remove("confirm")
}
;
codepops.ImageEditorPage.prototype.removedAtSignCheck = function() {
    this.stampName = this.document_.getElementById("stamp-name").value;
    2 < this.stampName.length && "@" !== this.stampName.charAt(0) && this.atSignHasBeenAdded && (this.document_.getElementById("stick-removed-at-sign").className = "stick")
}
;
codepops.ImageEditorPage.prototype.showCropBox = function() {
    this.hidePopsicleSticks();
    this.document_.getElementById("crop-tools-div").style.display = "inline";
    this.document_.getElementById("crop-icon").classList.add("initiated");
    this.document_.getElementById("crop-button").style.pointerEvents = "none";
    this.isiOS && this.document_.getElementById("crop-button").classList.add("initiated-on-mobile");
    this.alphaTrayOpen && this.closeAlphaTray();
    this.alphaModeInitiated && this.exitAlphaMode();
    this.document_.getElementById("alpha-icon").classList.add("disabled");
    this.cropper_.crop();
    this.cropper_.setDragMode("crop");
    this.showingCropTools = !0
}
;
codepops.ImageEditorPage.prototype.softCrop = function() {
    this.hidePopsicleSticks();
    var a = this.cropper_.getImageData()
      , a = a.width / a.naturalWidth
      , b = this.cropper_.getCropBoxData().left
      , c = this.cropper_.getCropBoxData().top
      , d = this.cropper_.getCropBoxData().width;
    this.containerWidth = this.cropper_.getContainerData().width;
    var e = this.containerWidth / 2
      , b = b + d / 2 - this.containerWidth / 2
      , c = c + d / 2 - this.containerWidth / 2;
    this.cropper_.move(-b, -c);
    this.currentZoomRatio = this.containerWidth / d * a;
    this.cropper_.zoomTo(this.currentZoomRatio, {
        x: e,
        y: e
    });
    this.needToZoom = !0;
    this.cancelCrop()
}
;
codepops.ImageEditorPage.prototype.cropImage = function(a) {
    this.hidePopsicleSticks();
    HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        value: function(a, b, e) {
            var f = this;
            setTimeout(function() {
                for (var g = atob(f.toDataURL(b, e).split(",")[1]), h = g.length, l = new Uint8Array(h), m = 0; m < h; m++)
                    l[m] = g.charCodeAt(m);
                a(new Blob([l],{
                    type: b || "image/png"
                }))
            })
        }
    });
    this.containerWidth = this.cropper_.getContainerData().width;
    this.cropper_.crop();
    this.document_.getElementsByClassName("cropper-modal")[0].style.opacity = "0";
    this.document_.getElementsByClassName("cropper-face")[0].style.opacity = "0";
    this.document_.getElementsByClassName("cropper-crop-box")[0].style.opacity = "0";
    this.cropper_.setCropBoxData({
        left: 0,
        top: 0,
        width: this.containerWidth,
        height: this.containerWidth
    });
    var b = this.cropper_.getCroppedCanvas({
        width: 168,
        height: 168
    });
    a = function(a) {
        this.grayBg = a;
        b.toBlob(function(a) {
            this.thumbnailBlob_ = a;
            this.cropper_.getCroppedCanvas().toBlob(function(a) {
                this.imageBlob_ = a;
                this.showingCropTools = !1;
                this.uploadFile()
            }
            .bind(this))
        }
        .bind(this))
    }
    .bind(this);
    codepops.isImageAllWhite(b, a)
}
;
codepops.ImageEditorPage.prototype.cancelCrop = function() {
    this.cropper_.clear();
    this.cropper_.setDragMode("move");
    this.document_.getElementById("crop-tools-div").style.display = "none";
    this.document_.getElementById("crop-icon").classList.remove("initiated");
    this.document_.getElementById("crop-button").style.pointerEvents = "initial";
    this.document_.getElementById("alpha-icon").className = "tools";
    this.isiOS && this.document_.getElementById("crop-button").classList.remove("initiated-on-mobile");
    this.showingCropTools = !1
}
;
codepops.ImageEditorPage.prototype.rotate = function(a) {
    this.hidePopsicleSticks();
    void 0 === this.cropperImage.initialOffsetX && (this.cropperImage.initialOffsetX = this.cropper_.getCanvasData().left,
    this.cropperImage.initialOffsetY = this.cropper_.getCanvasData().top);
    a = "left" === a ? -90 : 90;
    this.cropper_.rotate(a);
    if (this.alphaModeInitiated)
        this.updateAlphaCtx(),
        this.updatePreservedCanvas();
    else if (this.alphaCtx) {
        var b = this.cropper_.getCroppedCanvas();
        this.alphaCtx.clearRect(0, 0, this.alphaCanvas.width, this.alphaCanvas.height);
        this.alphaCtx.save();
        this.alphaCtx.translate(this.alphaCanvas.width / 2, this.alphaCanvas.height / 2);
        this.alphaCtx.rotate(a * Math.PI / 180);
        this.alphaCtx.drawImage(b, -b.width / 2, -b.width / 2);
        this.alphaCtx.restore();
        this.preservedCtx && (this.preservedCtx.clearRect(0, 0, this.preservedImageCanvas.width, this.preservedImageCanvas.height),
        this.preservedCtx.save(),
        this.preservedCtx.translate(this.preservedImageCanvas.width / 2, this.preservedImageCanvas.height / 2),
        this.preservedCtx.rotate(a * Math.PI / 180),
        this.preservedCtx.drawImage(b, -b.width / 2, -b.width / 2),
        this.preservedCtx.restore())
    }
}
;
codepops.ImageEditorPage.prototype.zoom = function(a) {
    this.needToZoom = !0;
    this.hidePopsicleSticks();
    void 0 === this.cropperImage.initialOffsetX && (this.cropperImage.initialOffsetX = this.cropper_.getCanvasData().left,
    this.cropperImage.initialOffsetY = this.cropper_.getCanvasData().top);
    var b = this.cropper_.getCropBoxData().left
      , c = this.cropper_.getCropBoxData().top
      , d = this.cropper_.getCropBoxData().width
      , e = this.cropper_.getImageData()
      , e = e.width / e.naturalWidth
      , f = this.cropper_.getContainerData().width / 2;
    this.showingCropTools ? (b += d / 2,
    c += d / 2) : c = b = f;
    e = "in" === a ? 1.1 * e : 0.9 * e;
    this.cropper_.zoomTo(e, {
        x: b,
        y: c
    });
    this.currentZoomRatio = e;
    this.updateCropperToFullImageRatio();
    this.alphaModeInitiated && this.updateAlphaCtx()
}
;
codepops.ImageEditorPage.prototype.reset = function(a) {
    this.hidePopsicleSticks();
    a ? (void 0 !== this.originalImage.image && this.hasDrawnAlpha ? (this.imageShiftedFromCenter = !1,
    this.updateCropper(this.originalImage.image, "move", !0)) : (this.cropper_.reset(),
    this.cropper_.clear(),
    this.cropper_.setDragMode("move")),
    this.showingCropTools && this.cancelCrop(),
    this.alphaTrayOpen && this.closeAlphaTray(),
    this.alphaModeInitiated && this.exitAlphaMode(),
    this.hasDrawnAlpha = this.needToZoom = !1) : this.showConfirmationDiv("confirm-reset-div")
}
;
codepops.ImageEditorPage.prototype.startOver = function(a) {
    if (a) {
        this.document_.getElementById("filedrag").style.display = "block";
        this.hasDrawnAlpha = this.weHaveAnImage = !1;
        a = this.document_.getElementsByClassName("cropper-container")[0];
        var b = this.document_.getElementById("main-cropper-image");
        a.style.display = "none";
        b.style.display = "none";
        this.document_.getElementById("toolbar").style.display = "none";
        this.document_.getElementById("stamp-name").value = "";
        this.toggleAddToLibraryBtn();
        this.showingCropTools && this.cancelCrop();
        this.originalImage = {
            image: void 0,
            width: void 0,
            height: void 0
        };
        this.cropperImage = {};
        this.needToZoom = !1;
        this.startingOverWithNewImage = !0;
        this.preservedCtx = void 0;
        this.alphaModeInitiated && (this.closeAlphaTray(),
        this.exitAlphaMode())
    } else
        this.showConfirmationDiv("confirm-start-over-div")
}
;
codepops.ImageEditorPage.prototype.parseFile = function(a) {
    var b = new FileReader;
    b.onload = function(c) {
        c.preventDefault();
        c.stopPropagation();
        this.fileName_ = a.name;
        this.initCropper(b)
    }
    .bind(this);
    a && b.readAsDataURL(a)
}
;
codepops.ImageEditorPage.prototype.initFileHandling = function() {
    console.info("initFileHandling");
    var a = this.document_.getElementById("filedrag")
      , b = this.document_.body;
    (new XMLHttpRequest).upload && (a.addEventListener("dragover", this.showCopyCursor.bind(this), !1),
    a.addEventListener("dragenter", this.fileDragEnter.bind(this), !1),
    a.addEventListener("dragleave", this.fileDragLeave.bind(this), !1),
    a.addEventListener("drop", this.fileSelectHandler.bind(this), !1),
    a.addEventListener("change", this.fileSelectHandler.bind(this), !1),
    a.style.display = "block",
    b.addEventListener("dragover", function(a) {
        a.stopPropagation();
        a.preventDefault()
    }, !1),
    b.addEventListener("dragleave", function(a) {
        a.stopPropagation();
        a.preventDefault();
        b.style.cursor = "initial"
    }, !1),
    b.addEventListener("drop", function(a) {
        a.stopPropagation();
        a.preventDefault()
    }, !1),
    b.addEventListener("change", function(a) {
        a.stopPropagation();
        a.preventDefault()
    }, !1))
}
;
codepops.ImageEditorPage.prototype.cancel = function(a) {
    a && !this.weHaveAnImage ? top.$_page && top.$_page.cancelCustomAssetEditor ? top.$_page.cancelCustomAssetEditor() : window.page && window.page.cancelCustomAssetEditor() && window.page.cancelCustomAssetEditor() : this.showConfirmationDiv("confirm-close-div")
}
;
codepops.ImageEditorPage.prototype.cancelCustomAssetEditor = function() {
    alert("(debug) cancelCustomAssetEditor")
}
;
codepops.ImageEditorPage.prototype.showConfirmationDiv = function(a) {
    this.hidePopsicleSticks();
    a = this.document_.getElementById(a);
    var b = this.document_.getElementById("disabled-iframe");
    a.classList.remove("hidden");
    b.classList.remove("hidden")
}
;
codepops.ImageEditorPage.prototype.hideConfirmationDiv = function(a) {
    a = this.document_.getElementById(a);
    var b = this.document_.getElementById("disabled-iframe");
    a.classList.add("hidden");
    b.classList.add("hidden")
}
;
codepops.ImageEditorPage.prototype.confirmAction = function(a) {
    var b = this.document_.getElementById(a)
      , c = this.document_.getElementById("disabled-iframe");
    b.classList.add("hidden");
    c.classList.add("hidden");
    "confirm-reset-div" === a && this.reset(!0);
    "confirm-start-over-div" === a && this.startOver(!0);
    "confirm-close-div" === a && (this.weHaveAnImage = !1,
    this.cancel(!0));
    "confirm-overwrite-div" === a && this.cropImage()
}
;
codepops.ImageEditorPage.prototype.hasSpecialCharacter = function() {
    this.stampName = this.document_.getElementById("stamp-name").value;
    var a = this.stampName.substring(1);
    return /[~`!@#$%^&*+=\-[\]\\';,/{}()_.|\\":<>?]/g.test(a)
}
;
codepops.ImageEditorPage.prototype.customStampNameTaken = function(a) {
    if (this.userPrefs_.customAssets && this.userPrefs_.customAssets.stamps)
        return this.userPrefs_.customAssets.stamps[a] ? !0 : !1
}
;
codepops.ImageEditorPage.prototype.loadUserPrefs = function(a, b) {
    var c = function(b) {
        this.userPrefs_ = b;
        this.needToLoadPrefs_ = !1;
        a()
    }
    .bind(this);
    this.dataStore_.getPreferences(c, function(a) {
        console.error("getPreferences error : ", a);
        b()
    })
}
;
codepops.ImageEditorPage.prototype.preUploadChecks = function() {
    var a = function() {
        var a = this.document_.getElementById("stamp-name").value
          , a = a.substring(1).toLowerCase().replace(/[\s@]/gi, "");
        this.hasSpecialCharacter() ? this.document_.getElementById("stick-special-character").className = "stick" : this.customStampNameTaken(a) ? (this.showConfirmationDiv("confirm-overwrite-div"),
        this.document_.getElementById("desired-name").innerHTML = "'" + this.document_.getElementById("stamp-name").value + "'") : this.cropImage()
    }
    .bind(this);
    this.needToLoadPrefs_ ? this.loadUserPrefs(a, function() {
        this.displayError("Error: Please contact help@bitsbox.com")
    }
    .bind(this)) : a()
}
;
codepops.ImageEditorPage.prototype.hidePopsicleSticks = function() {
    for (var a = this.document_.getElementsByClassName("stick"), b = 0; b < a.length; b++)
        a[b].classList.add("hidden")
}
;
codepops.ImageEditorPage.prototype.getExifData = function(a, b) {
    var c, d = function() {
        this.initialOrientation = void 0 === c ? 1 : c;
        b(a)
    }
    .bind(this);
    EXIF.getData(a, function() {
        c = EXIF.getTag(this, "Orientation");
        d()
    })
}
;
codepops.ImageEditorPage.prototype.alphaMode = function() {
    this.alphaTrayOpen && (this.document_.getElementById("alpha-icon").classList.remove("pan"),
    this.document_.getElementById("erase-icon").classList.add("active"),
    this.document_.getElementById("pan-icon").classList.remove("active"));
    this.alphaModeInitiated = !0;
    this.cropper_.setDragMode("none");
    var a = this.document_.getElementById("main-cropper-div")
      , b = this.document_.getElementById("size-slider");
    b.style.pointerEvents = "initial";
    b.disabled = !1;
    this.resizeCursor(b.value);
    b.oninput = function(a) {
        b.value = a.target.value;
        this.resizeCursor(a.target.value)
    }
    .bind(this);
    this.updateCropperToFullImageRatio();
    this.updatePreservedCanvas();
    this.updateAlphaCtx();
    this.boundAlphaMouseMoveHandler = this.alphaMouseMoveHandler.bind(this);
    this.boundAlphaMouseDownHandler = this.alphaMouseDownHandler.bind(this);
    this.boundAlphaMouseUpHandler = this.alphaMouseUpHandler.bind(this);
    a.addEventListener("mousemove", this.boundAlphaMouseMoveHandler, !1);
    a.addEventListener("mousedown", this.boundAlphaMouseDownHandler, !1);
    this.document_.body.addEventListener("mouseup", this.boundAlphaMouseUpHandler, !1);
    a.addEventListener("touchmove", this.boundAlphaMouseMoveHandler, !1);
    a.addEventListener("touchstart", this.boundAlphaMouseDownHandler, !1);
    a.addEventListener("touchend", this.boundAlphaMouseUpHandler, !1)
}
;
codepops.ImageEditorPage.prototype.alphaMouseMoveHandler = function(a) {
    a.preventDefault();
    if ("touchmove" === a.type) {
        this.drawingAlphaByTouch = !0;
        var b = this.document_.getElementById("main-cropper-div")
          , c = b.getBoundingClientRect().left
          , b = b.getBoundingClientRect().top;
        this.alphaCursorX = a.touches[0].clientX - c;
        this.alphaCursorY = a.touches[0].clientY - b
    } else
        this.drawingAlphaByTouch = "cropper-drag-box" === a.target.className ? !0 : !1,
        this.alphaCursorX = void 0 === a.offsetX ? a.layerX : a.offsetX,
        this.alphaCursorY = void 0 === a.offsetY ? a.layerY : a.offsetY;
    this.draggingCursor && this.drawAlpha(this.alphaCtx)
}
;
codepops.ImageEditorPage.prototype.alphaMouseDownHandler = function(a) {
    "main-cropper-image" !== a.target.id ? (this.draggingCursor = !0,
    a = this.document_.getElementsByClassName("cropper-container")[0],
    void 0 !== a && (a.style.display = "none"),
    this.document_.getElementById("main-alpha-canvas").style.display = "block",
    this.image.style.maxHeight = "374px") : a.preventDefault()
}
;
codepops.ImageEditorPage.prototype.alphaMouseUpHandler = function(a) {
    "main-cropper-image" !== a.target.id && !0 === this.draggingCursor && (this.draggingCursor = !1,
    this.document_.getElementById("main-alpha-canvas").style.display = "none",
    this.updateCropper(this.preservedImageCanvas, "none"))
}
;
codepops.ImageEditorPage.prototype.checkForPinchZoom = function(a) {
    if (2 === this.touchEventsCache.length || a && 2 === a.touches.length)
        this.userInitiatedPinchZoom = !0
}
;
codepops.ImageEditorPage.prototype.pinchZoomHandler = function(a) {
    this.userInitiatedPinchZoom && (a = this.cropper_.getImageData(),
    this.currentZoomRatio = a.width / a.naturalWidth,
    this.alphaModeInitiated && (this.updateAlphaCtx(),
    setTimeout(this.updateCropperToFullImageRatio.bind(this), 100)),
    this.userInitiatedPinchZoom = !1);
    0 < this.touchEventsCache.length && this.touchEventsCache.splice(0, this.touchEventsCache.length)
}
;
codepops.ImageEditorPage.prototype.resizeCursor = function(a) {
    this.cursorCanvas.width = 128;
    this.cursorCanvas.height = 128;
    var b = this.cursorCanvas.getContext("2d");
    b.lineWidth = 2;
    b.beginPath();
    b.arc(a / 2 + 2, a / 2 + 2, a / 2, 0, 2 * Math.PI);
    b.stroke();
    this.alphaCursor = this.cursorCanvas.toDataURL();
    this.alphaCursorStylesheet.cssRules && this.alphaCursorStylesheet.cssRules[0] && ".cropper-drag-box:active" === this.alphaCursorStylesheet.cssRules[0].selectorText && (this.alphaCursorStylesheet.deleteRule(0),
    this.alphaCursorStylesheet.cssRules && this.alphaCursorStylesheet.cssRules[0] && ".cropper-drag-box" === this.alphaCursorStylesheet.cssRules[0].selectorText && this.alphaCursorStylesheet.deleteRule(0));
    this.alphaCursorStylesheet.insertRule(".cropper-drag-box { cursor: url(" + this.alphaCursor + ") " + a / 2 + " " + a / 2 + ", auto; }", 0);
    this.alphaCursorStylesheet.insertRule(".cropper-drag-box:active { cursor: url(" + this.alphaCursor + ") " + a / 2 + " " + a / 2 + ", auto; }", 0);
    this.document_.getElementById("main-cropper-div").style.cursor = "url(" + this.alphaCursor + ") " + a / 2 + " " + a / 2 + ", auto";
    this.document_.getElementById("main-cropper-image").style.cursor = "inherit"
}
;
codepops.ImageEditorPage.prototype.drawAlpha = function(a) {
    var b = this.document_.getElementById("size-slider").value;
    a.fillStyle = "rgba(0,0,0,1)";
    a.globalCompositeOperation = "destination-out";
    a.beginPath();
    this.drawingAlphaByTouch && !this.imageShiftedFromCenter && void 0 === this.imageSizeDifference ? (alphaX = this.alphaCursorX - this.cropperImage.offsetX,
    alphaY = this.alphaCursorY - this.cropperImage.offsetY,
    a.arc(alphaX, alphaY, b / 2, 0, 360, !1)) : a.arc(this.alphaCursorX, this.alphaCursorY, b / 2, 0, 360, !1);
    a.fill();
    a = b * this.cropperToFullImageRatio;
    preservedCursorX = this.alphaCursorX * this.cropperToFullImageRatio;
    preservedCursorY = this.alphaCursorY * this.cropperToFullImageRatio;
    this.imageShiftedFromCenter || this.drawingAlphaByTouch ? (preservedCursorX = (this.alphaCursorX - this.cropperImage.offsetX) * this.cropperToFullImageRatio,
    preservedCursorY = (this.alphaCursorY - this.cropperImage.offsetY) * this.cropperToFullImageRatio) : this.needToZoom && void 0 !== this.imageSizeDifference && (preservedCursorX = (this.alphaCursorX - this.imageSizeDifference) * this.cropperToFullImageRatio,
    preservedCursorY = (this.alphaCursorY - this.imageSizeDifference) * this.cropperToFullImageRatio);
    this.preservedCtx.fillStyle = "rgba(0,0,0,1)";
    this.preservedCtx.globalCompositeOperation = "destination-out";
    this.preservedCtx.beginPath();
    this.preservedCtx.arc(preservedCursorX, preservedCursorY, a / 2, 0, 360, !1);
    this.preservedCtx.fill();
    this.hasDrawnAlpha = !0
}
;
codepops.ImageEditorPage.prototype.updateCropper = function(a, b, c) {
    void 0 !== this.cropper_ && this.cropper_.destroy();
    var d = this.document_.getElementById("main-cropper-image")
      , e = new Image
      , f = function() {
        d.style.maxHeight = "350px";
        this.cropper_ = new Cropper(d,{
            aspectRatio: 1,
            minContainerHeight: 374,
            autoCrop: !1,
            dragMode: b,
            toggleDragModeOnDblclick: !1
        });
        this.weHaveAnImage = !0;
        this.toggleAddToLibraryBtn();
        this.zoomListenerApplied || (d.addEventListener("zoom", this.zoomEventHandler.bind(this), !1),
        this.zoomListenerApplied = !0);
        if (!this.pinchZoomListenerApplied) {
            var a = this.document_.getElementById("main-cropper-div");
            this.isiOS || this.isFirefox ? (a.addEventListener("touchstart", this.checkForPinchZoom.bind(this), !1),
            a.addEventListener("touchend", this.pinchZoomHandler.bind(this), !1)) : (a.addEventListener("pointerdown", function(a) {
                this.touchEventsCache.push(a);
                this.checkForPinchZoom()
            }
            .bind(this), !1),
            a.addEventListener("pointerup", this.pinchZoomHandler.bind(this), !1));
            this.pinchZoomListenerApplied = !0
        }
    }
    .bind(this);
    e.addEventListener("load", f, !1);
    e.src = a.toDataURL();
    d.src = e.src;
    var g = function() {
        this.updatingCropper = !0;
        var a = this.cropper_.getContainerData().width / 2
          , b = this.currentZoomRatio;
        void 0 !== this.oldZoomRatio && (b = this.oldZoomRatio);
        this.cropper_.zoomTo(b, {
            x: a,
            y: a
        });
        d.removeEventListener("ready", g, !0)
    }
    .bind(this)
      , h = this.cropperImage.offsetX
      , l = this.cropperImage.offsetY
      , m = function() {
        this.cropper_.moveTo(h, l);
        d.removeEventListener("ready", m, !0)
    }
    .bind(this)
      , n = function() {
        this.originalImage.image = this.cropper_.getCroppedCanvas();
        d.removeEventListener("ready", n, !0)
    }
    .bind(this);
    this.needToZoom && !c && d.addEventListener("ready", g, !0);
    this.imageShiftedFromCenter && d.addEventListener("ready", m, !0);
    void 0 === this.originalImage.image && d.addEventListener("ready", n, !0)
}
;
codepops.ImageEditorPage.prototype.exitAlphaMode = function() {
    this.alphaCursorStylesheet.cssRules && this.alphaCursorStylesheet.cssRules[0] && ".cropper-drag-box:active" === this.alphaCursorStylesheet.cssRules[0].selectorText && (this.alphaCursorStylesheet.deleteRule(0),
    this.alphaCursorStylesheet.cssRules && this.alphaCursorStylesheet.cssRules[0] && ".cropper-drag-box" === this.alphaCursorStylesheet.cssRules[0].selectorText && this.alphaCursorStylesheet.deleteRule(0));
    this.document_.getElementById("main-cropper-div").style.cursor = "initial";
    var a = this.document_.getElementById("main-cropper-div");
    a.removeEventListener("mousemove", this.boundAlphaMouseMoveHandler, !1);
    a.removeEventListener("mousedown", this.boundAlphaMouseDownHandler, !1);
    a.removeEventListener("mouseup", this.boundAlphaMouseUpHandler, !1);
    a.removeEventListener("touchmove", this.boundAlphaMouseMoveHandler, !1);
    a.removeEventListener("touchstart", this.boundAlphaMouseDownHandler, !1);
    a.removeEventListener("touchend", this.boundAlphaMouseUpHandler, !1);
    this.alphaModeInitiated = !1
}
;
codepops.ImageEditorPage.prototype.openAlphaTray = function() {
    var a = this.document_.getElementById("alpha-brush-size-div")
      , b = this.document_.getElementById("alpha-icon")
      , c = this.document_.getElementById("draw-alpha-button");
    b.classList.remove("disabled");
    b.classList.add("initiated");
    a.classList.remove("hidden");
    c.classList.add("initiated");
    this.alphaMode();
    this.alphaTrayOpen = !0
}
;
codepops.ImageEditorPage.prototype.closeAlphaTray = function() {
    this.document_.getElementById("alpha-brush-size-div").classList.add("hidden");
    this.document_.getElementById("alpha-icon").className = "tools";
    this.document_.getElementById("draw-alpha-button").classList.remove("initiated");
    this.alphaModeInitiated || (this.document_.getElementById("erase-icon").classList.add("active"),
    this.document_.getElementById("pan-icon").classList.remove("active"));
    this.alphaTrayOpen = !1
}
;
codepops.ImageEditorPage.prototype.panMode = function() {
    this.document_.getElementById("alpha-icon").classList.add("pan");
    this.document_.getElementById("pan-icon").classList.add("active");
    this.document_.getElementById("erase-icon").classList.remove("active");
    var a = this.document_.getElementById("size-slider");
    a.style.pointerEvents = "none";
    a.disabled = !0;
    this.cropper_.setDragMode("move");
    this.exitAlphaMode()
}
;
codepops.ImageEditorPage.prototype.updateAlphaCtx = function() {
    var a = this.document_.getElementById("main-alpha-canvas");
    void 0 !== this.alphaCtx ? this.alphaCtx.clearRect(0, 0, this.alphaCanvas.width, this.alphaCanvas.height) : (this.alphaCanvas = this.document_.createElement("canvas"),
    a.appendChild(this.alphaCanvas));
    var b = this.cropper_.getCroppedCanvas()
      , c = this.cropper_.getContainerData().width
      , d = this.cropper_.getImageData();
    this.alphaCanvas.width = c;
    this.alphaCanvas.height = c;
    void 0 === this.cropperImage.initialOffsetX && (this.cropperImage.initialOffsetX = this.cropper_.getCanvasData().left,
    this.cropperImage.initialOffsetY = this.cropper_.getCanvasData().top);
    var d = d.width
      , e = (c - d) / 2
      , f = (c - d) / 2;
    this.cropperImage.offsetX = this.cropper_.getCanvasData().left;
    this.cropperImage.offsetY = this.cropper_.getCanvasData().top;
    var g;
    d > c ? (this.imageSizeDifference = void 0,
    this.alphaCanvas.width = d,
    this.alphaCanvas.height = d,
    g = (d - c) / 2,
    e += g,
    f += g) : (g = (c - d) / 2,
    this.imageSizeDifference = d < c ? g : void 0);
    d > c ? d / 2 + this.cropperImage.offsetX !== c / 2 ? (e = this.cropperImage.offsetX,
    f = this.cropperImage.offsetY,
    this.imageShiftedFromCenter = !0) : this.imageShiftedFromCenter = !1 : this.cropperImage.offsetX !== e || this.cropperImage.offsetY !== f ? (e = this.cropperImage.offsetX,
    f = this.cropperImage.offsetY,
    this.imageShiftedFromCenter = !0) : this.imageShiftedFromCenter = !1;
    this.alphaCtx = this.alphaCanvas.getContext("2d");
    this.alphaCtx.drawImage(b, e, f, d, d);
    d > c ? (this.imageShiftedFromCenter ? (this.alphaCanvas.style.marginLeft = "0",
    this.alphaCanvas.style.marginTop = "0") : (this.alphaCanvas.style.marginLeft = "-" + g + "px",
    this.alphaCanvas.style.marginTop = "-" + g + "px"),
    a.style.maxHeight = "374px",
    a.style.maxWidth = "374px",
    a.style.overflow = "hidden",
    this.needToZoom = !0) : (this.alphaCanvas.style.marginLeft = "0",
    this.alphaCanvas.style.marginTop = "0")
}
;
codepops.ImageEditorPage.prototype.updatePreservedCanvas = function(a) {
    var b, c, d;
    void 0 === this.cropper_ || this.startingOverWithNewImage ? (b = this.image,
    c = this.originalImage.width,
    d = this.originalImage.height,
    this.startingOverWithNewImage = !1) : (b = this.cropper_.getCroppedCanvas(),
    c = b.width,
    d = b.height);
    var e = c, f = d, g, h;
    g = this.originalImage.width > this.originalImage.height ? this.originalImage.width : this.originalImage.height;
    c === d ? (f = e = d = c = g,
    h = g = 0) : c > d ? (d = c = this.originalImage.width,
    h = (c - this.originalImage.height) / 2,
    g = 0) : (d = c = this.originalImage.height,
    g = (d - this.originalImage.width) / 2,
    h = 0);
    void 0 !== this.preservedCtx ? this.preservedCtx.clearRect(0, 0, this.preservedImageCanvas.width, this.preservedImageCanvas.height) : this.preservedImageCanvas = this.document_.createElement("canvas");
    this.preservedImageCanvas.width = c;
    this.preservedImageCanvas.height = d;
    this.preservedCtx = this.preservedImageCanvas.getContext("2d");
    this.preservedCtx.drawImage(b, g, h, e, f);
    a && this.updateCropper(this.preservedImageCanvas, "move")
}
;
codepops.ImageEditorPage.prototype.zoomEventHandler = function(a) {
    4 < a.detail.ratio && a.detail.ratio > a.detail.oldRatio ? this.updatingCropper ? this.updatingCropper = !1 : (a.preventDefault(),
    this.currentZoomRatio = a.detail.ratio,
    this.oldZoomRatio = a.detail.oldRatio) : 1 > a.detail.ratio - a.detail.oldRatio && (this.oldZoomRatio = void 0);
    void 0 !== a.detail.originalEvent && "wheel" === a.detail.originalEvent.type && (this.needToZoom = !0,
    this.currentZoomRatio = a.detail.ratio,
    this.alphaModeInitiated && (setTimeout(this.updateAlphaCtx.bind(this), 1),
    setTimeout(this.updateCropperToFullImageRatio.bind(this), 100)))
}
;
codepops.ImageEditorPage.prototype.updateCropperToFullImageRatio = function() {
    var a = this.cropper_.getCroppedCanvas().width
      , b = this.cropper_.getImageData();
    this.cropperToFullImageRatio = a / (b.width / b.naturalWidth * a)
}
;
codepops.ImageUploaderPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.MAX_FILE_SIZE = 1E7;
    this.MAX_CANVAS_DIMENSION = 1024;
    this.currentImage = void 0;
    this.firebaseUrl_ = "luminous-heat-2913.firebaseIO.com";
    this.files_ = [];
    this.document_.addEventListener("keydown", codepops.bind(function(a) {
        if (8 == a.keyCode) {
            var b = !0
              , e = event.srcElement || event.target;
            if ("INPUT" === e.tagName.toUpperCase() && ("TEXT" === e.type.toUpperCase() || "PASSWORD" === e.type.toUpperCase() || "FILE" === e.type.toUpperCase() || "EMAIL" === e.type.toUpperCase()) || "TEXTAREA" === e.tagName.toUpperCase())
                b = e.readOnly || e.disabled;
            b && a.preventDefault()
        }
    }, this));
    this.document_.getElementById("error-close-button").addEventListener("click", codepops.bind(this.hideError, this), !1);
    a = this.document_.getElementsByClassName("file-upload-field");
    for (var b = 0; b < a.length; b++)
        a[b].addEventListener("change", codepops.bind(this.onFileAdded, this))
}
;
codepops.ImageUploaderPage.prototype.onFileAdded = function(a) {
    void 0 == this.files_ && (this.files_ = []);
    this.currentImage = a.target.id.substr(-1);
    var b = new FileReader;
    b.onload = codepops.bind(function(a) {
        a = a.target.result;
        this.files_.push(a);
        var b = this.document_.getElementById("preview-image" + this.currentImage);
        if (b) {
            var e = b.getContext("2d");
            e.clearRect(0, 0, b.width, b.height);
            b.style.background = "white";
            var f = new Image;
            f.src = a;
            var g = this.getImageScaling(f.width, f.height);
            f.onload = function() {
                e.drawImage(f, 0, 0, g.width, g.height)
            }
        }
    }, this);
    b.readAsDataURL(a.target.files[0])
}
;
codepops.ImageUploaderPage.prototype.getImageScaling = function(a, b) {
    var c = a
      , d = b
      , e = a > this.MAX_CANVAS_DIMENSION
      , f = b > this.MAX_CANVAS_DIMENSION;
    if (!e && !f || e && f)
        a > b ? (e = !0,
        f = !1) : b > a ? (f = !0,
        e = !1) : b == a && (f = e = !1,
        d = c = this.MAX_CANVAS_DIMENSION);
    e ? (c = this.MAX_CANVAS_DIMENSION,
    d = Math.round(b * this.MAX_CANVAS_DIMENSION / a)) : f && (d = this.MAX_CANVAS_DIMENSION,
    c = Math.round(a * this.MAX_CANVAS_DIMENSION / b));
    return {
        width: c,
        height: d
    }
}
;
codepops.ImageUploaderPage.prototype.checkFileSize = function(a) {
    return "number" != typeof a || isNaN(a) ? !1 : a <= this.MAX_FILE_SIZE
}
;
codepops.ImageUploaderPage.prototype.getAndValidateEmail = function() {
    var a = this.document_.getElementById("email");
    return null != a && null != a.value && (a = a.value,
    -1 < a.indexOf("@") && -1 < a.indexOf(".")) ? a : null
}
;
codepops.ImageUploaderPage.prototype.uploadAll = function() {
    var a = this.document_.getElementById("backer-id");
    if (a && a.value) {
        var b = this.getAndValidateEmail();
        if (null === b)
            this.displayError('Every email address has to have at least one "@" and at least one " . " Please check to make sure you typed your email address correctly. Thanks!');
        else {
            var c = this.document_.getElementById("bitsboxer-name");
            if (this.files_.length && 0 != this.files_.length) {
                for (var d = 0; d < this.files_.length; d++)
                    if (0 < this.files_[d].length) {
                        var e = "image" + (d + 1) + "-name"
                          , f = this.document_.getElementById(e);
                        if (f && !f.value) {
                            this.displayError("Please use the What is this? area to tell us what's in your image. Thanks!");
                            return
                        }
                    }
                this.displayLoading();
                for (d = 0; d < this.files_.length; d++) {
                    var g = this.files_[d]
                      , f = this.cleanFirebaseKey(a.value)
                      , f = new Firebase(this.firebaseUrl_ + "/assets/" + f)
                      , e = "image" + (d + 1) + "-name"
                      , e = this.document_.getElementById(e)
                      , g = {
                        image: g,
                        email: b,
                        imageName: e.value
                    };
                    c && c.value && (g.bitsboxerName = c.value);
                    (e = this.document_.getElementById("image" + (d + 1) + "-notes")) && e.value && (g.imageNotes = e.value);
                    d >= this.files_.length - 1 ? f.push(g, this.hideLoading()) : f.push(g)
                }
            } else
                this.displayError("Please choose at least one image to upload. Thanks!")
        }
    } else
        this.displayError("Please enter your Secret Code. You'll find it in the email you used to get to this form. Thanks!")
}
;
codepops.ImageUploaderPage.prototype.cleanFirebaseKey = function(a) {
    for (var b = ["#", "$", "[", "]"], c = 0; c < b.length; c++)
        a = a.replace(b[c], "");
    return a
}
;
codepops.ImageUploaderPage.prototype.cancel = function() {
    this.window_.location = "/index.html"
}
;
codepops.ImageUploaderPage.prototype.displayError = function(a) {
    var b = this.document_.getElementById("error-panel")
      , c = this.document_.getElementById("error-message-panel")
      , d = this.document_.getElementById("black-overlay")
      , e = this.document_.createElement("P");
    e.appendChild(this.document_.createTextNode(a));
    c.appendChild(e);
    b.style.display = "block";
    d.style.display = "block"
}
;
codepops.ImageUploaderPage.prototype.hideError = function() {
    var a = this.document_.getElementById("error-panel")
      , b = this.document_.getElementById("black-overlay");
    a.style.display = "none";
    b.style.display = "none";
    this.document_.getElementById("error-message-panel").innerHTML = ""
}
;
codepops.ImageUploaderPage.prototype.displayLoading = function() {
    var a = this.document_.getElementById("loading-panel")
      , b = this.document_.getElementById("black-overlay");
    a.style.display = "block";
    b.style.display = "block"
}
;
codepops.ImageUploaderPage.prototype.hideLoading = function() {
    var a = this.document_.getElementById("loading-panel")
      , b = this.document_.getElementById("black-overlay");
    a.style.display = "none";
    b.style.display = "none";
    this.displaySuccess()
}
;
codepops.ImageUploaderPage.prototype.displaySuccess = function() {
    var a = this.document_.getElementById("success-panel")
      , b = this.document_.getElementById("black-overlay");
    a.style.display = "block";
    b.style.display = "block"
}
;
codepops.ImageViewerPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.MAX_CANVAS_DIMENSION = 1024;
    this.currentImage = void 0;
    this.firebaseUrl_ = "luminous-heat-2913.firebaseIO.com";
    this.document_.addEventListener("keydown", codepops.bind(function(a) {
        if (8 == a.keyCode) {
            var c = !0
              , d = event.srcElement || event.target;
            if ("INPUT" === d.tagName.toUpperCase() && ("TEXT" === d.type.toUpperCase() || "PASSWORD" === d.type.toUpperCase() || "FILE" === d.type.toUpperCase() || "EMAIL" === d.type.toUpperCase()) || "TEXTAREA" === d.tagName.toUpperCase())
                c = d.readOnly || d.disabled;
            c && a.preventDefault()
        }
    }, this));
    this.document_.getElementById("error-close-button").addEventListener("click", codepops.bind(this.hideError, this), !1)
}
;
codepops.ImageViewerPage.prototype.fetchImages = function() {
    (new Firebase(this.firebaseUrl_ + "/assets/")).on("value", codepops.bind(function(a) {
        a = a.val();
        for (var b in a)
            this.displayUploadedImages(a[b], b)
    }, this))
}
;
codepops.ImageViewerPage.prototype.displayUploadedImages = function(a, b) {
    var c = this.document_.getElementById("display-panel")
      , d = this.document_.createElement("div");
    d.id = "display-div-" + b;
    d.className = "display-div";
    c.appendChild(d);
    for (var e in a)
        c = a[e],
        d.appendChild(this.displayUploadedImage(e, c.image)),
        d.appendChild(this.displayUploadedField("Image Name", c.imageName)),
        d.appendChild(this.displayUploadedField("Image Notes", c.imageNotes)),
        d.appendChild(this.displayUploadedField("Secret Code/Backer ID", b)),
        d.appendChild(this.displayUploadedField("Bitsboxer Name", c.bitsboxerName)),
        d.appendChild(this.displayUploadedField("Email", c.email))
}
;
codepops.ImageViewerPage.prototype.displayUploadedField = function(a, b) {
    var c = this.document_.createElement("p");
    c.appendChild(this.document_.createTextNode(a + " : " + b));
    return c
}
;
codepops.ImageViewerPage.prototype.displayUploadedImage = function(a, b) {
    var c = this.document_.createElement("img");
    c.id = "image-preview-" + a;
    c.className = "image-preview";
    c.src = b;
    return c
}
;
codepops.ImageViewerPage.prototype.getImageScaling = function(a, b) {
    var c = a
      , d = b
      , e = a > this.MAX_CANVAS_DIMENSION
      , f = b > this.MAX_CANVAS_DIMENSION;
    if (!e && !f || e && f)
        a > b ? (e = !0,
        f = !1) : b > a ? (f = !0,
        e = !1) : b == a && (f = e = !1,
        d = c = this.MAX_CANVAS_DIMENSION);
    e ? (c = this.MAX_CANVAS_DIMENSION,
    d = Math.round(b * this.MAX_CANVAS_DIMENSION / a)) : f && (d = this.MAX_CANVAS_DIMENSION,
    c = Math.round(a * this.MAX_CANVAS_DIMENSION / b));
    return {
        width: c,
        height: d
    }
}
;
codepops.ImageViewerPage.prototype.cleanFirebaseKey = function(a) {
    for (var b = ["#", "$", "[", "]"], c = 0; c < b.length; c++)
        a = a.replace(b[c], "");
    return a
}
;
codepops.ImageViewerPage.prototype.cancel = function() {
    this.window_.location = "/index.html"
}
;
codepops.ImageViewerPage.prototype.displayError = function(a) {
    var b = this.document_.getElementById("error-panel")
      , c = this.document_.getElementById("error-message-panel")
      , d = this.document_.getElementById("black-overlay")
      , e = this.document_.createElement("P");
    e.appendChild(this.document_.createTextNode(a));
    c.appendChild(e);
    b.style.display = "block";
    d.style.display = "block"
}
;
codepops.ImageViewerPage.prototype.hideError = function() {
    var a = this.document_.getElementById("error-panel")
      , b = this.document_.getElementById("black-overlay");
    a.style.display = "none";
    b.style.display = "none";
    this.document_.getElementById("error-message-panel").innerHTML = ""
}
;
codepops.ImageViewerPage.prototype.displayLoading = function() {
    var a = this.document_.getElementById("loading-panel")
      , b = this.document_.getElementById("black-overlay");
    a.style.display = "block";
    b.style.display = "block"
}
;
codepops.ImageViewerPage.prototype.hideLoading = function() {
    var a = this.document_.getElementById("loading-panel")
      , b = this.document_.getElementById("black-overlay");
    a.style.display = "none";
    b.style.display = "none";
    this.displaySuccess()
}
;
codepops.ImageViewerPage.prototype.displaySuccess = function() {
    var a = this.document_.getElementById("success-panel")
      , b = this.document_.getElementById("black-overlay");
    a.style.display = "block";
    b.style.display = "block"
}
;
codepops.IndexPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document
}
;
codepops.IndexPage.prototype.changeHomePage_ = function(a) {
    this.page1_ ? this.page1_.style.backgroundColor = a : page.isLoggedIn ? page.saveTabletColor(a) : (page.saveTabletColor("black"),
    this.document_.body.style.backgroundColor = a,
    this.document_.getElementById("headerbar").style.backgroundColor = a)
}
;
var c123 = c123 || {};
c123.jsErrors = {
    "Unexpected token ILLEGAL": {
        code: "stamp('",
        translation: "This error usually means you forgot a tick mark like <tt>'</tt> at the end of a line."
    },
    "Unexpected end of input": {
        code: "function loop() {",
        translation: "This is usually because you need a curly bracket. Did you start part of your code with a <tt>{</tt> and forget to close with a <tt>}</tt>?"
    },
    "Unexpected end of input on last line": {
        code: "function loop() {",
        replacementMessage: "Unexpected end of input.",
        translation: "Nice work, just keep typing! The function won't work until you get to the closing <tt>}</tt>"
    },
    "ReferenceError: Invalid left-hand side in assignment": {
        code: "stamp('pie')= explode",
        translation: "You can't assign a value to a stamp that way."
    },
    "missing ) after argument list": {
        code: "stamp(''",
        translation: "You are probably missing a closing parenthesis like <tt>)</tt>."
    },
    "is not defined": {
        code: "foo.explode()",
        translation: "You are trying to do something with a variable that does not exist. You probably have a misspelling."
    },
    "Unexpected token": {
        code: "function loop( {",
        translation: "This is usually because you accidentally typed an extra character, or maybe you forgot a character in front of it."
    },
    "Unclosed string": {
        code: "a = 'unclosed here",
        translation: "Did you forget a quotation mark or tick mark, like ' ?"
    },
    "Unrecoverable syntax error": {
        code: "function foo()\n  a = 5\n}",
        replacementMessage: "Syntax error.",
        translation: "This is sometimes because you need a curly bracket. Did you forget a <tt>{</tt> or a <tt>}</tt>?"
    },
    "Expected an identifier and instead saw ','.": {
        code: "stamp('bear',  )",
        translation: "When you have a comma, you usually need a number or a word after it."
    },
    "Expected ')' and instead saw ''.": {
        code: "stamp('bear',  ,  )",
        translation: "When you have a comma, you usually need a number or a word after it."
    }
};
codepops = codepops || {};
codepops.MissingAssetsPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.dataStore_ = a.dataStore || new codepops.DataStore;
    this.assetCategories_ = {
        stamp: !0,
        fill: !0,
        sound: !0,
        song: !0
    };
    this.loadData_()
}
;
codepops.MissingAssetsPage.prototype.loadData_ = function() {
    this.dataStore_.firebase_.child("/stats/missingAssets").once("value", codepops.bind(this.displayData_, this))
}
;
codepops.MissingAssetsPage.prototype.displayData_ = function(a) {
    var b = this.document_.getElementById("assetTable");
    if (b) {
        a = a.val();
        for (var c in this.assetCategories_) {
            var d = b.insertRow().insertCell();
            d.colSpan = 2;
            d.className = "category-header";
            d.appendChild(this.document_.createTextNode(c + "s"));
            d = a[c];
            console.log(d);
            if (d)
                for (var e in d) {
                    var f = d[e]
                      , g = b.insertRow();
                    g.insertCell().appendChild(this.document_.createTextNode(e));
                    g.insertCell().appendChild(this.document_.createTextNode(f))
                }
            else
                d = b.insertRow().insertCell(),
                d.colSpan = 2,
                d.appendChild(this.document_.createTextNode(" "))
        }
    } else
        console.log("Unable to find assetTable element.")
}
;
codepops = codepops || {};
codepops.NavigationState = {
    ABOUT_PAGE: 1,
    STORE: 2,
    HELP: 3,
    CODING_HOMESCREEN: 4,
    CODING_APP: 5
};
codepops.OfflineFirebase = function() {
    console.log("OfflineFirebase")
}
;
codepops.OfflineFirebase.prototype.child = function(a) {
    return {
        once: function(b, c, d) {
            var e = JSON.parse(localStorage[a] || "null");
            c({
                val: function() {
                    return e
                }
            })
        },
        set: function(b) {
            b = JSON.stringify(b);
            localStorage[a] = b
        },
        update: function(b, c) {
            var d = JSON.stringify(b);
            localStorage[a] = d;
            c && c("")
        },
        transaction: function() {}
    }
}
;
codepops.OfflineFirebaseSimpleLogin = function(a, b) {
    this.onComplete_ = b;
    this.onComplete_(null, null);
    console.log("OfflineFirebaseSimpleLogin")
}
;
codepops.OfflineFirebaseSimpleLogin.prototype.login = function(a, b) {
    b.provider = a;
    this.onComplete_("", b)
}
;
codepops.OfflineFirebaseSimpleLogin.prototype.logout = function() {}
;
codepops.PrintOutputPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.editor_ = a.editor;
    this.apps_ = this.getAllApps_();
    this.appId_ = a.appId || "";
    this.outputDiv_ = a.outputDiv || this.document_.getElementById("output");
    this.outputDiv_.innerHTML = "";
    if (this.appId_)
        this.generateFiles_(this.appId_);
    else
        for (var b in this.apps_)
            this.generateFiles_(b)
}
;
codepops.PrintOutputPage.prototype.getAllApps_ = function() {
    return top.$_page.getAllApps ? top.$_page.getAllApps() : {}
}
;
codepops.PrintOutputPage.prototype.generateFiles_ = function(a) {
    var b = this.apps_[a]
      , c = this.document_.createElement("img");
    c.src = b.iconUrl;
    a = b.activityNumber || "XXXX";
    var d = this.document_.createElement("a");
    d.href = b.iconUrl;
    d.download = a + "-icon.png";
    d.appendChild(c);
    this.outputDiv_.appendChild(d);
    this.outputDiv_.innerHTML += "<br>";
    this.editor_.setValue(b.code);
    for (var c = this.editor_.getValue(), b = "<ASCII-MAC>\n <vsn:9><fset:InDesign-Roman> <ctable:=<Black:COLOR:CMYK:Process:0,0,0,1>> <dcs:variable=<Nextstyle:variable>> <dcs:variable-2=<Nextstyle:variable-2>> <dcs:string=<Nextstyle:string>> <dcs:number=<Nextstyle:number>> <dcs:operator=<Nextstyle:operator>> <dcs:keyword=<Nextstyle:keyword>> <dcs:property=<Nextstyle:property>> <dcs:def=<Nextstyle:def>> <dcs:Default=<Nextstyle:Default>> <dcs:linenumber=<Nextstyle:linenumber>> <dcs:comment=<Nextstyle:comment>> <dcs:atom=<Nextstyle:atom>> <dcs:ActivityNumber=<Nextstyle:ActivityNumber><pBreakBefore:Page>> <dps:NormalParagraphStyle=<Nextstyle:NormalParagraphStyle>> <dps:AppTitle=<Nextstyle:AppTitle><pBreakBefore:Page>> <dps:AppIntro=<Nextstyle:AppIntro>> <dps:AppCode=<Nextstyle:AppCode>>".split(" "), b = [b.join("")], d = this.document_.getElementsByTagName("pre"), c = [], e = 0; e < d.length; e++) {
        var f = d[e].innerHTML
          , f = f.replace(/span class\=\"cm\-/gi, "cstyle:")
          , f = f.replace(/\"\>/gi, ">")
          , f = f.replace(/\<\/span\>/gi, "<cstyle:Default>")
          , f = f.replace(/&nbsp;/gi, " ");
        c.push("<pstyle:AppCode><cstyle:linenumber>\t" + (e + 1) + "<cstyle:Default>\t" + f)
    }
    for (; c.length && 50 >= c[c.length - 1].length && -1 == c[c.length - 1].indexOf("}"); )
        c.pop();
    c = c.join("\n");
    c = c.replace(/<span role="presentation" style="padding-right: 0.1px;>/g, "");
    c = c.replace(/<cstyle:tab" role="presentation" cm-text="\t> /g, "");
    b.push(c);
    b = b.join("\n");
    b = b.replace(/\<span style\=\"padding\-right\: 0\.1px\;\>/gi, "");
    b = b.replace(/\<span cm\-text\=\"\>/gi, "");
    b = b.replace(/.<.cstyle\:Default\>/gi, "");
    b = b.replace(/\&lt\;/gi, "\\<");
    b = b.replace(/\&gt\;/gi, "\\>");
    b = b.replace(/&amp;/gi, "&");
    b = b.replace(/[^\x00-\x7F]/g, "");
    c = this.document_.createElement("a");
    c.href = "data:text/html," + encodeURIComponent(b);
    c.download = a + ".txt";
    c.className = "downloadable-file";
    c.appendChild(this.document_.createTextNode(c.download));
    this.outputDiv_.appendChild(c);
    this.outputDiv_.innerHTML += "<p><p><p><hr>"
}
;
codepops.PrintOutputPage.prototype.cancel = function() {
    top.$_page.cancelPrintOutput && top.$_page.cancelPrintOutput()
}
;
codepops.PrintOutputPage.prototype.download = function() {
    for (var a = this.document_.getElementsByClassName("downloadable-file"), b = 0; b < a.length; b++) {
        var c = new MouseEvent("click",{
            view: window,
            bubbles: !0,
            cancelable: !0
        });
        console.log(b);
        a[b].dispatchEvent(c)
    }
}
;
codepops = codepops || {};
codepops.Sandbox = function(a, b, c) {
    c = c || {};
    this.window_ = c.window || window;
    this.document_ = c.document || window.document;
    this.page_ = a;
    this.renderDiv_ = b;
    this.onTouchStart_ = this.onTouchMove_ = this.onMouseOut_ = this.onMouseOver_ = this.onMouseMove_ = this.collabPath_ = null;
    this.iframe_ = this.document_.createElement("iframe");
    this.iframe_.style.visibility = "hidden";
    this.iframe_.title = "Sandbox iframe";
    this.iframe_.src = "/sandbox.html";
    this.renderDiv_.appendChild(this.iframe_);
    this.isIE_ = c123.isIE();
    this.isFirefox_ = c123.isFirefox()
}
;
codepops.Sandbox.prototype.run = function(a, b) {
    if (this.iframe_ && this.iframe_.contentWindow && this.iframe_.contentWindow.run)
        if (this.isIE_ && this.currentlyRunningIFrame_)
            this.currentlyRunningIFrame_.contentWindow.setCollabPath(this.collabPath_),
            this.currentlyRunningIFrame_.contentWindow.run(a || "", b);
        else {
            console.log(this.iframe_.contentWindow);
            !this.isIE_ && this.currentlyRunningIFrame_ && this.renderDiv_.removeChild(this.currentlyRunningIFrame_);
            this.iframe_.contentWindow.setCollabPath(this.collabPath_);
            this.iframe_.contentWindow.setOnErrorHandler(this.onError_);
            this.iframe_.contentWindow.setOnSuccessHandler(this.onSuccess_);
            this.iframe_.contentWindow.setOnAssetLoadErrorHandler(this.onAssetLoadError_);
            var c = function() {};
            this.onError_ && (c = this.onError_);
            this.iframe_.contentWindow.onerror = function(a, b, d) {
                c(a)
            }
            ;
            var d = this.iframe_.contentWindow.getCanvas();
            d.addEventListener("mousemove", this.onMouseMove_);
            d.addEventListener("mouseover", this.onMouseOver_);
            d.addEventListener("mouseout", this.onMouseOut_);
            d.addEventListener("touchstart", this.onTouchStart_);
            d.addEventListener("touchmove", this.onTouchMove_);
            console.log(a,b)
            this.iframe_.contentWindow.run(a || "", b);
            this.iframe_.style.visibility = "visible";
            this.currentlyRunningIFrame_ = this.iframe_;
            this.isIE_ || (this.iframe_ = this.document_.createElement("iframe"),
            this.iframe_.style.visibility = "hidden",
            this.iframe_.title = "Sandbox iframe",
            this.iframe_.src = "/sandbox.html",
            this.renderDiv_.appendChild(this.iframe_))
        }
    else
        setTimeout(codepops.bind(function() {
            this.run(a, b)
        }, this), 200)
}
;
codepops.Sandbox.prototype.setOnMouseMoveHandler = function(a) {
    this.onMouseMove_ = a
}
;
codepops.Sandbox.prototype.setOnMouseOutHandler = function(a) {
    this.onMouseOut_ = a
}
;
codepops.Sandbox.prototype.setOnMouseOverHandler = function(a) {
    this.onMouseOver_ = a
}
;
codepops.Sandbox.prototype.setOnTouchMoveHandler = function(a) {
    this.onTouchMove_ = a
}
;
codepops.Sandbox.prototype.setOnTouchStartHandler = function(a) {
    this.onTouchStart_ = a
}
;
codepops.Sandbox.prototype.setOnErrorHandler = function(a) {
    this.onError_ = a
}
;
codepops.Sandbox.prototype.setOnSuccessHandler = function(a) {
    this.onSuccess_ = a
}
;
codepops.Sandbox.prototype.setOnAssetLoadErrorHandler = function(a) {
    this.onAssetLoadError_ = a
}
;
codepops.Sandbox.prototype.silence = function() {
    this.iframe_ && this.iframe_.contentWindow.silence && this.iframe_.contentWindow.silence();
    this.currentlyRunningIFrame_ && this.currentlyRunningIFrame_.contentWindow.silence && this.currentlyRunningIFrame_.contentWindow.silence()
}
;
codepops.Sandbox.prototype.resetLibrary = function() {
    this.isIE_ ? this.currentlyRunningIFrame_ && this.currentlyRunningIFrame_.contentWindow.resetLibrary && this.currentlyRunningIFrame_.contentWindow.resetLibrary() : this.run("reset()")
}
;
codepops.Sandbox.prototype.resetLoop = function() {
    this.currentlyRunningIFrame_ && this.currentlyRunningIFrame_.contentWindow && this.currentlyRunningIFrame_.contentWindow.loop && (this.currentlyRunningIFrame_.contentWindow.loop = function() {}
    )
}
;
codepops.Sandbox.prototype.getRunningLibrary = function() {
    return this.currentlyRunningIFrame_ && this.currentlyRunningIFrame_.contentWindow && this.currentlyRunningIFrame_.contentWindow.library ? this.currentlyRunningIFrame_.contentWindow.library : null
}
;
codepops.Sandbox.prototype.toDataURL = function(a, b) {
    return this.currentlyRunningIFrame_ && this.currentlyRunningIFrame_.contentWindow && this.currentlyRunningIFrame_.contentWindow.library ? this.currentlyRunningIFrame_.contentWindow.library.toDataURL(a, b) : null
}
;
codepops.Sandbox.prototype.setCollabPath = function(a) {
    this.collabPath_ = a
}
;
codepops.TabletColorWidget = function(a, b) {
    var c = b || {};
    this.window_ = c.window || window;
    this.document_ = c.document || window.document;
    this.page_ = a;
    this.logoSmallImg = this.document_.getElementById("logo-small");
    this.pageTitleDiv = this.document_.getElementById("page-title");
    this.settingsColorsImg = this.document_.getElementById("settings-colors");
    this.color_ = "rgb(247,147,29)";
    this.logoSmallImg && (this.logoSmallImg.onmousemove = codepops.bind(this.onMouseMove_, this),
    this.logoSmallImg.onmouseout = codepops.bind(this.onMouseOut_, this),
    this.logoSmallImg.onclick = codepops.bind(this.onClick_, this));
    this.settingsColorsImg && (this.settingsColorsImg.onmousemove = codepops.bind(this.onMouseMove_, this),
    this.settingsColorsImg.onmouseout = codepops.bind(this.onMouseOut_, this),
    this.settingsColorsImg.onclick = codepops.bind(this.onClick_, this))
}
;
codepops.TabletColorWidget.prototype.onMouseMove_ = function(a) {
    var b = a.offsetX
      , c = (b - 12) / 25;
    a.target == this.settingsColorsImg && (c = (b - 18) / 36);
    var d = Math.max(0, Math.floor(c))
      , e = Math.min(7, Math.ceil(c))
      , f = c - d
      , g = codepops.colors
      , d = g[d]
      , e = g[e];
    a.target == this.logoSmallImg && 7 < c && (d = [0, 0, 0],
    e = [255, 255, 255],
    f = a.offsetY / 44);
    a.target == this.settingsColorsImg && 6 < c && (d = [0, 0, 0],
    e = [255, 255, 255],
    f = 1 - (b - 252) / 90);
    c = d[1];
    a = d[2];
    g = e[1];
    b = e[2];
    d = Math.floor(codepops.lerp(d[0], e[0], f));
    e = Math.floor(codepops.lerp(c, g, f));
    f = Math.floor(codepops.lerp(a, b, f));
    this.renderColor("rgb(" + d + "," + e + "," + f + ")")
}
;
codepops.TabletColorWidget.prototype.onMouseOut_ = function(a) {
    this.renderColor(this.color_)
}
;
codepops.TabletColorWidget.prototype.onClick_ = function(a) {
    this.color_ = this.lastColor_;
    this.page_.saveTabletColor(this.color_)
}
;
codepops.TabletColorWidget.prototype.renderColor = function(a) {
    this.lastColor_ = a;
    var b = a.replace(/[rgba\(\)]/gi, "").split(",");
    a = parseInt(b[0]);
    var c = parseInt(b[1])
      , b = parseInt(b[2]);
    this.page_.setUiColor(a, c, b)
}
;
codepops.TabletColorWidget.prototype.setColor = function(a) {
    this.color_ = a;
    this.renderColor(a)
}
;
codepops.TutorialBlockCraft = {
    title: "BlockCraft",
    iconUrl: "/img/tutorial-blockcraft.png",
    code: "\n",
    startStick: "",
    hideTutorialPanel: !0,
    steps: [{
        text: "",
        instruction: "Type this:<pre>fill(<string>'grid2'</string>)</pre>Then click the green Play button.",
        stickLine: 1,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        requiredRegularExpression: /fill\s*\('grid2'\s*\)/gi,
        help: "<li>fill(<string>'grid2'</string>)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Add this code:<pre><keyword>function</keyword> drag() {\n  ink = stamp(<string>'cube3'</string>,x,y,<number>75</number>)\n  ink.tap = pop\n}</pre>Then click the green Play button.",
        stickLine: 2,
        extraBlankLines: 3,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        requiredRegularExpression: /function\s*drag\s*\(\s*\)\s*{\s*ink\s*=\s*stamp\s*\('\w+',\s*x\s*,\s*y\s*,\s*\d*\s*\)\s*ink.tap\s*=\s*pop\s*}/gi,
        help: "<li>fill(<string>'grid2'</string>)\n<li><keyword>function</keyword> drag() {\n<li>  ink = stamp(<string>'cube3'</string>,x,y,<number>75</number>)\n<li>  ink.tap = pop\n<li>}",
        next: "",
        disableEnter: !1
    }, {
        text: "",
        instruction: '<div class="tutorial-challenge"><h4>Drag on your tablet to draw! Tap to erase.</h4><ol><li>Can you make the blocks bigger? Hint: 75<li>Replace <string>\'cube3\'</string> with <string>\'cube4\'</string> or any animal!<li>Try these other fun fills: <br><span class="tutorial-fill"><img src="https://static.bitsbox.com/fills/wood.jpg">wood</span><span class="tutorial-fill"><img src="https://static.bitsbox.com/fills/brickwall.jpg">brick wall</span><span class="tutorial-fill"><img src="https://static.bitsbox.com/fills/stars.jpg">stars</span><span class="tutorial-fill"><img src="https://static.bitsbox.com/fills/ocean.jpg">ocean</span></ol></div>',
        stickLine: 5,
        success: "{{lastStamp}}",
        requireCodeChange: !1,
        requiredRegularExpression: / N E V E R /gi,
        help: "<li>fill(<string>'grid2'</string>)\n<li>function drag() {\n<li>  ink = stamp(<string>'cube3'</string>,x,y,<number>75</number>)\n<li>  ink.tap = pop\n<li>}",
        elementIdsToUnhide: ["secondary-instruction-panel"],
        next: "",
        disableEnter: !1
    }]
};
codepops.TutorialCrazyDriver = {
    title: "Crazy Driver",
    iconUrl: "/img/tutorial-crazydriver.png",
    code: "speed    = 10\nsize     = 125\nsteering = 20\n\ncar   = stamp('car', size)\nwheel = stamp('steering',384,1000)\nfill('roads')\n\nfunction touching() {\n  spot = x - 384\n  car.move('up', speed)\n  car.rotate('right',spot/steering)\n  wheel.rotate(spot/5)\n}",
    startStick: "Next up? Crazy Driver!",
    prerequisite: "",
    steps: [{
        text: "<h1>Are you a Crazy Driver?</h1>Drag the steering wheel to drive the car around the screen."
    }, {
        text: "<h1>Now for the fun part...</h1>Let's mess with the code to change how the game works."
    }, {
        text: "Change the <tt>speed</tt> from <tt>10</tt> to <tt>20</tt>",
        hint: "Change line 1 so it says <code>speed = 20</code>",
        hintLine: 1,
        requireCodeChange: !0,
        next: "When you're done, click",
        success: "<h1>Vrooooom!</h1>Drive again. See the car go faster? Remember, press <span class='go-button'></span> to reset."
    }, {
        text: "Change the <tt>size</tt> of the car from <tt>125</tt> to <tt>225</tt>",
        hint: "Change line 2 so it says <code>size = 225</code>",
        hintLine: 2,
        requireCodeChange: !0,
        next: "When you're done, click",
        success: "<h1>Beep Beep!</h1>You changed the size! What's it like to drive the car now?"
    }, {
        text: "Can you change the car?<center><img src='https://static.bitsbox.com/stamps/rocket.png'>'rocket' <img src='https://static.bitsbox.com/stamps/cat.png'>'cat'  <img src='https://static.bitsbox.com/stamps/stampy.png'>'stampy'</center>",
        hint: "<code>car = stamp('rocket',size)</code>",
        next: "",
        hintLine: 1,
        requireCodeChange: !0,
        hintStick: "Change 'car' to 'rocket'",
        success: "<h1>Nice!</h1>Take it for a spin!"
    }, {
        text: "Can you change the fill?<center><img src='https://static.bitsbox.com/fills/desertsky.jpg'>'desert sky' <img src='https://static.bitsbox.com/fills/iguana.jpg'>'iguana' <img src='https://static.bitsbox.com/fills/stars.jpg'>'stars'</center>",
        hint: "<code>fill('stars')</code>",
        next: "",
        hintLine: 6,
        requireCodeChange: !0,
        hintStick: "Change 'roads' to 'stars'",
        success: "You nailed it!"
    }, {
        text: "<h1>Congrats, {{displayName}}!</h1>Play around with the code and you can make the game entirely your own."
    }]
};
codepops.TutorialDancinHal = {
    title: "Dancin' Hal",
    iconUrl: "/img/tutorial-dancinhal.png",
    code: "\n",
    startStick: "",
    hideTutorialPanel: !0,
    steps: [{
        text: "",
        instruction: "Type this:<pre>r = stamp(<string>'robot5'</string>,<number>700</number>)</pre>Then click the green Play button.",
        stickLine: 1,
        elementIdsToUnhide: [],
        success: "{{lastStamp}}",
        requireCodeChange: !0,
        requiredRegularExpression: /r\s*\=\s*stamp\s*\(/gi,
        help: "<li>r = stamp(<string>'robot5'</string>,<number>700</number>)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Now type this:<pre>r.tap = dance</pre>Then click the green Play button.",
        stickLine: 2,
        elementIdsToUnhide: [],
        success: "{{lastStamp}}",
        requiredRegularExpression: /r.tap\s*\=\s*dance/gi,
        requireCodeChange: !0,
        help: "<li>r = stamp(<string>'robot5'</string>,<number>700</number>)<li>r.tap = dance",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "<h2 style='margin:0 0 6px 0'>Now click the {{lastStamp}}!</h2>",
        stickLine: 2,
        arrowOpacity: "0",
        help: "<li>r = stamp(<string>'robot5'</string>,<number>700</number>)<li>r.tap = dance",
        elementIdsToUnhide: ["stick-go-home"],
        success: "anything",
        requireCodeChange: !1,
        next: "",
        disableEnter: !1
    }]
};
codepops.TutorialFingerPainter = {
    title: "Finger Painter",
    iconUrl: "/img/tutorial-fingerpainter.png",
    code: "\n\n\n\n",
    startStick: "Next we'll make some art!",
    prerequisite: "",
    steps: [{
        text: "Type this code on line 1:<code>fill('canvas')</code>",
        stick: "Start typing on this line",
        stickLine: 1,
        requireCodeChange: !0,
        success: "<h1>Nice job!</h1>You made a beautiful, {{lastFill}} background to draw on!",
        next: "When you're done, click"
    }, {
        text: "Type this code on lines 2-4:<code>function drag() {<br>&nbsp;&nbsp;stamp('splotch',x,y)<br>}</code>",
        stick: "Type on this line",
        stickLine: 2,
        requireCodeChange: !0,
        success: "<h1>Cool!</h1>Drag your finger on the screen to draw.",
        next: "When you're done, click"
    }, {
        text: "To make the splotch bigger, add a comma and a 200 right after the y.",
        hint: "Change line 3 so it says <code>&nbsp;&nbsp;stamp('splotch',x,y,200)</code>",
        hintLine: 1,
        requireCodeChange: !0,
        hintStick: "Change the code on this line",
        next: "To see what happens, click",
        success: "<h1>Nice!</h1>Try drawing now."
    }, {
        text: "Can you change the stamp to something else? Maybe a lime?",
        hint: "Change line 3 so it says <code>&nbsp;&nbsp;stamp('lime',x,y,200)</code>",
        hintLine: 1,
        hintStick: "Change the code on this line",
        next: "To see what happens, click",
        success: "<h1>Hahaha.</h1>Getting interesting, now!"
    }, {
        text: "<h1>Great app, {{displayName}}.</h1>Try different stamps, sizes, and fills until you're happy.",
        stick: "Click to run your app with new code",
        stickTarget: "run"
    }]
};
codepops.TutorialHelloWorld = {
    title: "Hello World",
    iconUrl: "/img/tutorial-helloworld.png",
    code: "\n\n",
    startStick: "Tap the star to start an app",
    steps: [{
        text: "Type this code on line 1:<code>fill('red')</code>",
        stick: "Start typing on this line",
        stickLine: 1,
        success: "<h1>Nice job!</h1>You turned the screen {{lastFill}}!",
        next: "When you're done, click"
    }, {
        text: "Type this code on line 2:<code>text('hello world')</code>",
        stick: "Type on this line",
        stickLine: 2,
        success: '<h1>Whoa!</h1>You wrote "{{lastText}}" on the screen!',
        next: "When you're done, click"
    }, {
        text: "Can you change the code to make the screen another color?",
        hint: "Try changing line 1 so it says <code>fill('green')</code>",
        hintLine: 1,
        requireCodeChange: !0,
        hintStick: "Change the code on this line",
        next: "To see what happens, click",
        success: "<h1>Beautiful!</h1>You turned the screen {{lastFill}}!"
    }, {
        text: "Can you change the code to make the screen say something else?",
        hint: "Try changing line 2 so it says <code>text('I can code')</code>",
        requireCodeChange: !0,
        next: "To see what happens, click",
        hintLine: 2,
        hintStick: "Change the code on this line",
        success: '<h1>Terrific!</h1>You changed the text to "{{lastText}}"!'
    }, {
        text: "<h1>You did it!</h1>Try different colors and text, then click <span class='go-button'></span> to see your changes.",
        stick: "Click to run your app with new code",
        stickTarget: "run"
    }]
};
codepops.TutorialMoonBlaster = {
    title: "Moon Blaster",
    iconUrl: "/img/tutorial-moonblaster.png",
    code: "\n\n",
    startStick: "Great! Next we'll blow stuff up!",
    prerequisite: "",
    steps: [{
        text: "Type this code on line 1:<code>target = stamp('bot')</code>",
        stick: "Start typing on this line",
        stickLine: 1,
        success: "<h1>Woohoo!</h1>You drew a {{lastStamp}} on the screen!",
        next: "When you're done, click"
    }, {
        text: "Type this code on line 2:<code>target.tap = explode</code>",
        stick: "Type on this line",
        stickLine: 2,
        stickTarget: "screenCenter",
        success: "Click the {{lastStamp}} to see what happens.",
        next: "When you're done, click"
    }, {
        text: "<h1>Boom!</h1>Click <span class='go-button'></span> to play again, and tap the {{lastStamp}} to blow it up over and over.",
        next: "When you're ready, click"
    }, {
        text: "Can you change the {{lastStamp}} to a moon?",
        hint: "Try changing line 1 so it says <code>target = stamp('moon')</code>",
        next: "When you're done, click",
        hintLine: 1,
        requireCodeChange: !0,
        hintStick: "Change 'burger' to 'moon'",
        success: "<h1>Blast that {{lastStamp}}!</h1>"
    }, {
        text: "Blast something else!<center><img src='https://static.bitsbox.com/stamps/alien.png'>'alien' <img src='https://static.bitsbox.com/stamps/ufo.png'>'ufo'  <img src='https://static.bitsbox.com/stamps/stampy.png'>'stampy'</center>",
        hint: "Try changing line 1 to <code>target = stamp('ufo')</code>",
        next: "",
        hintLine: 1,
        requireCodeChange: !0,
        hintStick: "Change 'moon' to 'cupcake'",
        success: "<h1>Hehe!</h1>That {{lastStamp}} is toast!"
    }, {
        text: "Can you add a line of code that makes the screen turn black?",
        hint: "Add a line 3:<code>fill('black')</code>",
        next: "When you're done, click",
        hintLine: 3,
        hintStick: "Type here",
        success: "<h1>Nice.</h1>Back in {{lastFill}}!"
    }, {
        text: "You can <tt>fill()</tt> with pictures, too. Try this:<code>fill('stars')</code>",
        requireCodeChange: !0,
        success: "<h1>Beautiful.</h1>Now you've got a pretty little game to play!"
    }, {
        text: "<h1>Go, {{displayName}}!</h1>Change your code as much you like, then click below when you're done..."
    }]
};
codepops.TutorialRedRacer = {
    title: "RedRacer",
    iconUrl: "/img/tutorial-redracer.png",
    code: "\n",
    startStick: "",
    hideTutorialPanel: !0,
    steps: [{
        text: "",
        instruction: "Type this:<pre>fill(<string>'parking lot'</string>)</pre>Then click the green Play button.",
        stickLine: 1,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        requiredRegularExpression: /fill\s*\('[\w ]+'\s*\)/gi,
        help: "<li>fill(<string>'parking lot'</string>)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Type this:<pre>size = <number>150</number></pre>Then click the green Play button.",
        stickLine: 2,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        requiredRegularExpression: /size\s*=\s*\d+/gi,
        help: "<li>fill(<string>'parking lot'</string>)\n<li>size = <number>150</number>",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Type this:<pre>speed = <number>500</number></pre>Then click the green Play button.",
        stickLine: 3,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        requiredRegularExpression: /speed\s*=\s*\d+/gi,
        help: "<li>fill(<string>'parking lot'</string>)\n<li>size = <number>150</number>\n<li>speed = <number>500</number>",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Type this:<pre>c = stamp(<string>'car8'</string>,size)</pre>Then click the green Play button.",
        stickLine: 4,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        requiredRegularExpression: /c\s*=\s*stamp\s*\('\w+',size\s*\)/gi,
        help: "<li>fill(<string>'parking lot'</string>)\n<li>size = <number>150</number>\n<li>speed = <number>500</number>\n<li>c = stamp(<string>'car8'</string>,size)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Type this:<pre><keyword>function</keyword> drag() {\n  c.move(x,y,speed)\n  c.aim(x,y)\n}</pre>Then click the green Play button.",
        stickLine: 5,
        extraBlankLines: 3,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        requiredRegularExpression: /function\s*drag\s*\(\s*\)\s*{\s*\s*\s*c.move\s*\(\s*x\s*,\s*y\s*,speed\s*\)\s*\s*\s*c.aim\s*\(\s*x\s*,\s*y\s*\)\s*}/gi,
        help: "<li>fill(<string>'parking lot'</string>)\n<li>size = <number>150</number>\n<li>speed = <number>500</number>\n<li>c = stamp(<string>'car8'</string>,size)\n<li><keyword>function</keyword> drag() {\n<li>  c.move(x,y,speed)\n<li>  c.aim(x,y)\n<li>}",
        next: "",
        disableEnter: !1
    }, {
        text: "",
        instruction: '<div class="tutorial-challenge"><h4>Drag to drive your car around. Then play with the code to make it your own.</h4><ol><li>Try some other fills and stamps: <br><span class="tutorial-fill"><img src="https://static.bitsbox.com/fills/castle.jpg">castle</span><span class="tutorial-fill"><img src="https://static.bitsbox.com/fills/soccerfield.jpg">soccer field</span><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/hamster2.png">hamster2</span><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/dozer.png">dozer</span><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/soccerball.png">soccerball</span><li>Can you change the size and speed numbers?</ol></div>',
        stickLine: 8,
        success: "{{lastStamp}}",
        requireCodeChange: !1,
        requiredRegularExpression: / N E V E R /gi,
        help: "<li>fill(<string>'parking lot'</string>)\n<li>size = <number>150</number>\n<li>speed = <number>500</number>\n<li>c = stamp(<string>'car8'</string>,size)\n<li>function drag() {\n<li>  c.move(x,y,speed)\n<li>  c.aim(x,y)\n<li>}",
        elementIdsToUnhide: ["secondary-instruction-panel"],
        next: "",
        disableEnter: !1
    }]
};
codepops.TutorialSoLongHomeworkEndInstruction = '<div class="tutorial-challenge"><h4>You did it! Now play with the code to make it your own.</h4><ol><li>Make your homework flush faster! Hint: Line 2<li>Try flushing something else: <br><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/mrfancy.png">mr fancy</span><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/broccoli.png">broccoli</span><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/stampy.png">stampy</span><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/banana.png">banana</span><li>Feeling silly? Change <string>\'black hole\'</string> to <string>\'flush\'</string>.</pre></ol></div>';
codepops.TutorialSoLongHomework = {
    title: "So Long, Homework",
    iconUrl: "/img/tutorial-solonghomework.png",
    code: "\n",
    startStick: "",
    hideTutorialPanel: !0,
    steps: [{
        text: "",
        instruction: "Type this:<pre>fill(<string>'black hole'</string>)</pre>Then click the green Play button.",
        stickLine: 1,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        requiredRegularExpression: /fill\s*\('black\s*hole'\s*\)/gi,
        help: "<li>fill(<string>'black hole'</string>)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Now type this:<pre>time = <number>3000</number></pre>Then click the green Play button.",
        stickLine: 2,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        requiredRegularExpression: /time\s*=\s*\d+/gi,
        help: "<li>fill(<string>'black hole'</string>)\n<li>time = <number>3000</number>",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Type this:<pre>h = stamp(<string>'homework'</string>,<number>500</number>)</pre>Then click the green Play button.",
        stickLine: 3,
        elementIdsToUnhide: [],
        success: "{{lastStamp}}",
        requireCodeChange: !0,
        requiredRegularExpression: /h\s*=\s*stamp\s*\('homework',\d+\s*\)/gi,
        help: "<li>fill(<string>'black hole'</string>)\n<li>time = <number>3000</number>\n<li>h = stamp(<string>'homework'</string>,<number>500</number>)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Type this:<pre>h.rotate(<number>1080</number>,time)</pre>Then click the green Play button.",
        stickLine: 4,
        elementIdsToUnhide: [],
        success: "{{lastStamp}}",
        requireCodeChange: !0,
        requiredRegularExpression: /h.rotate\s*\(\d+,time\s*\)/gi,
        help: "<li>fill(<string>'black hole'</string>)\n<li>time = <number>3000</number>\n<li>h = stamp(<string>'homework'</string>,<number>500</number>)\n<li>h.rotate(<number>1080</number>,time)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Type this:<pre>h.size(<number>0</number>,time)</pre>Then click the green Play button.",
        stickLine: 5,
        elementIdsToUnhide: [],
        success: "{{lastStamp}}",
        requireCodeChange: !0,
        requiredRegularExpression: /h.size\s*\(\d+,time\s*\)/gi,
        help: "<li>fill(<string>'black hole'</string>)\n<li>time = <number>3000</number>\n<li>h = stamp(<string>'homework'</string>,<number>500</number>)\n<li>h.rotate(<number>1080</number>,time)\n<li>h.size(<number>0</number>,time)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Now add a funny sound:<pre>sound(<string>'flush'</string>)</pre>Then click the green Play button.",
        stickLine: 6,
        elementIdsToUnhide: [],
        success: "{{lastStamp}}",
        requireCodeChange: !0,
        requiredRegularExpression: /sound\s*\('flush'\s*\)/gi,
        help: "<li>fill(<string>'black hole'</string>)\n<li>time = <number>3000</number>\n<li>h = stamp(<string>'homework'</string>,<number>500</number>)\n<li>h.rotate(<number>1080</number>,time)\n<li>h.size(<number>0</number>,time)\n<li>sound(<string>'flush'</string>)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: codepops.TutorialSoLongHomeworkEndInstruction,
        stickLine: 6,
        success: "{{lastStamp}}",
        requireCodeChange: !1,
        help: "<li>fill(<string>'black hole'</string>)\n<li>time = <number>3000</number>\n<li>h = stamp(<string>'homework'</string>,<number>500</number>)\n<li>h.rotate(<number>1080</number>,time)\n<li>h.size(<number>0</number>,time)\n<li>sound(<string>'flush'</string>)",
        elementIdsToUnhide: ["stick-go-home", "secondary-instruction-panel"],
        next: "",
        disableEnter: !1
    }, {
        text: "",
        instruction: codepops.TutorialSoLongHomeworkEndInstruction,
        stickLine: 6,
        success: "{{lastStamp}}",
        requireCodeChange: !1,
        requiredRegularExpression: / N E V E R /gi,
        help: "<li>fill(<string>'black hole'</string>)\n<li>time = <number>3000</number>\n<li>h = stamp(<string>'homework'</string>,<number>500</number>)\n<li>h.rotate(<number>1080</number>,time)\n<li>h.size(<number>0</number>,time)\n<li>sound(<string>'flush'</string>)",
        elementIdsToUnhide: ["secondary-instruction-panel"],
        next: "",
        disableEnter: !1
    }]
};
codepops.tutorialWelcomeEndInstruction = '<div class="tutorial-challenge"><h4>You did it! Now play with the code to make it your own.</h4><ol><li>Try changing <span class="tutorial-challenge-code">\'pie\'</span> to one of these stamps:<br><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/cupcake.png">cupcake</span><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/broccoli.png">broccoli</span><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/pizza.png">pizza</span><span class="tutorial-stamp"><img src="https://static.bitsbox.com/stamps/banana.png">banana</span></li><li>Click the library icon <img src="https://bitsbox.com/img/icon-assets.png" id="tutorial-library-icon"> in the upper-right corner to see more stamps.</li></ol></div>';
codepops.TutorialWelcome = {
    title: "Food Fight",
    iconUrl: "/img/tutorial-welcome.png",
    iconCode: "// This code creates your icon.\nstamp('tablecloth')\nstamp('plate',130)\nstamp('pie',90)\nstamp('icon reflection')\n\n",
    code: "\n",
    startStick: "",
    hideTutorialPanel: !0,
    steps: [{
        text: "",
        instruction: "Type this:<pre>fill(<string>'red'</string>)</pre>Then click the green Play button.",
        stickLine: 1,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        help: "<li>fill(<string>'red'</string>)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Now change the <code><string>'{{lastFill}}'</string></code> to your favorite color, like...<pre>fill(<string>'tan'</string>)</pre>Then click the green Play button.",
        arrowLeft: "110px",
        stickLine: 1,
        elementIdsToUnhide: [],
        success: "{{lastFill}}",
        requireCodeChange: !0,
        help: "<li>fill(<string>'tan'</string>)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Now type this:<pre>p = stamp(<string>'pie'</string>)</pre>Then click the green Play button.",
        stickLine: 2,
        elementIdsToUnhide: [],
        success: "{{lastStamp}}",
        requireCodeChange: !0,
        requiredRegularExpression: /\w\s*\=\s*stamp\s*\(/gi,
        help: "<li>fill(<string>'tan'</string>)<li>p = stamp(<string>'pie'</string>)",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "Now type this:<pre>p.tap = explode</pre>Then click the green Play button.",
        stickLine: 3,
        elementIdsToUnhide: [],
        success: "{{lastStamp}}",
        requiredRegularExpression: /p.tap\s*\=\s*explode/gi,
        requireCodeChange: !0,
        help: "<li>fill(<string>'tan'</string>)<li>p = stamp(<string>'pie'</string>)<li>p.tap = explode",
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: "<h2 style='margin:0 0 6px 0'>Now click the {{lastStamp}}!</h2>(Click Play to try again.)",
        stickLine: 3,
        arrowOpacity: "0",
        help: "<li>fill(<string>'tan'</string>)<li>p = stamp(<string>'pie'</string>)<li>p.tap = explode",
        elementIdsToUnhide: [],
        success: "anything",
        requireCodeChange: !1,
        next: "",
        disableEnter: !0
    }, {
        text: "",
        instruction: codepops.tutorialWelcomeEndInstruction,
        stickLine: 3,
        success: "anything",
        requireCodeChange: !1,
        help: "<li>fill(<string>'tan'</string>)<li>p = stamp(<string>'cupcake'</string>)<li>p.tap = explode",
        elementIdsToUnhide: ["stick-go-home", "secondary-instruction-panel"],
        next: "",
        disableEnter: !1
    }, {
        text: "",
        instruction: codepops.tutorialWelcomeEndInstruction,
        stickLine: 3,
        success: "anything",
        requireCodeChange: !1,
        requiredRegularExpression: / N E V E R /gi,
        help: "<li>fill(<string>'tan'</string>)<li>p = stamp(<string>'cupcake'</string>)<li>p.tap = explode",
        elementIdsToUnhide: ["secondary-instruction-panel"],
        next: "",
        disableEnter: !1
    }]
};
codepops = codepops || {};
codepops.UserDetailsPage = function(a) {
    a = a || {};
    this.window_ = a.window || window;
    this.document_ = a.document || window.document;
    this.dataStore_ = a.dataStore || new codepops.DataStore;
    (a = this.document_.getElementById("userIdForm")) && a.addEventListener("submit", codepops.bind(this.loadData_, this));
    (a = codepops.parseQueryString()) && a.userId && (this.userId_ = a.userId,
    this.loadData_())
}
;
codepops.UserDetailsPage.prototype.loadData_ = function(a) {
    this.reset_();
    this.displayMessage_("");
    if (a) {
        a.preventDefault();
        a = this.document_.getElementById("userId");
        if (!a) {
            this.displayMessage_("loadData_ cannot find user id. Ask a dev.");
            return
        }
        if (!a.value) {
            this.displayMessage_("You must input a user Id.");
            return
        }
        this.userId_ = a.value.trim()
    } else if (a = this.document_.getElementById("userId"))
        a.value = this.userId_;
    this.dataStore_.firebase_.child("/users/" + this.userId_).once("value", codepops.bind(this.displayData_, this))
}
;
codepops.UserDetailsPage.prototype.displayData_ = function(a) {
    if (a) {
        var b = a.val();
        if (b)
            if (a = b.kids.kid0.preferences) {
                var c = this.document_.getElementById("prefsTableBody");
                if (c)
                    if (b = b.kids.kid0.apps) {
                        var d = this.document_.getElementById("appsLinksTableBody");
                        d ? (this.displayPrefsData_(c, a),
                        this.displayAppData_(d, b)) : this.displayMessage_("Unable to find table body element.")
                    } else
                        this.displayMessage_("No apps found for this User ID.");
                else
                    this.displayMessage_("Unable to find table body element.")
            } else
                this.displayMessage_("No preferences found for this User ID.");
        else
            this.displayMessage_("No data returned for this User ID.")
    } else
        this.displayMessage_("No data returned for this User ID.")
}
;
codepops.UserDetailsPage.prototype.displayPrefsData_ = function(a, b) {
    var c = a.insertRow()
      , d = c.insertCell()
      , e = this.document_.createTextNode(b.displayName);
    d.appendChild(e);
    d = c.insertCell();
    e = this.document_.createTextNode(b.age);
    d.appendChild(e);
    d = c.insertCell();
    e = this.document_.createTextNode(b.gender);
    d.appendChild(e);
    c = c.insertCell();
    d = new Date(b.timestamp);
    d = d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear();
    d = this.document_.createTextNode(d);
    c.appendChild(d)
}
;
codepops.UserDetailsPage.prototype.displayAppData_ = function(a, b) {
    for (var c in b) {
        var d = b[c]
          , e = this.createRunpageUrl_(d)
          , f = a.insertRow();
        f.insertCell().appendChild(this.document_.createTextNode(d.title));
        var g = f.insertCell()
          , h = new Date(d.timestamp)
          , h = h.getMonth() + 1 + "-" + h.getDate() + "-" + h.getFullYear()
          , h = this.document_.createTextNode(h);
        g.appendChild(h);
        g = f.insertCell();
        h = this.document_.createElement("a");
        h.href = e;
        h.innerHTML = e;
        h.target = "_blank";
        g.appendChild(h);
        e = f.insertCell();
        d = this.createAppDetailsUrl_(d);
        "" == d ? e.appendChild(this.document_.createTextNode("n/a")) : (f = this.document_.createElement("a"),
        f.href = d,
        f.innerHTML = d,
        f.target = "_blank",
        e.appendChild(f))
    }
}
;
codepops.UserDetailsPage.prototype.reset_ = function() {
    this.clearTable_()
}
;
codepops.UserDetailsPage.prototype.clearTable_ = function() {
    var a = this.document_.getElementById("appsLinksTableBody");
    a && (a.innerHTML = "");
    if (a = this.document_.getElementById("prefsTableBody"))
        a.innerHTML = ""
}
;
codepops.UserDetailsPage.prototype.createRunpageUrl_ = function(a) {
    a = a.shortcut;
    if (!a)
        return "No shortcut found. Unable to create Runpage URL.";
    var b = "https://bitsbox.com"
      , c = this.window_.location.hostname;
    c && -1 < c.toLowerCase().indexOf("bitsboxstaging") && (b = "https://bitsboxstaging.firebaseapp.com");
    return b + "/run.html?" + a
}
;
codepops.UserDetailsPage.prototype.createAppDetailsUrl_ = function(a) {
    a = a.parentActivityNumber;
    if (!a)
        return "";
    var b = "https://bitsbox.com"
      , c = this.window_.location.hostname;
    c && -1 < c.toLowerCase().indexOf("bitsboxstaging") && (b = "https://bitsboxstaging.firebaseapp.com");
    return b + "/appdetails.html?appId=" + a
}
;
codepops.UserDetailsPage.prototype.displayMessage_ = function(a) {
    var b = this.document_.getElementById("message-div");
    if (b) {
        b.innerHTML = "";
        var c = this.document_.createElement("p");
        a = this.document_.createTextNode(a);
        c.appendChild(a);
        b.appendChild(c)
    } else
        console.log("cannot find message-div")
}
;
codepops = codepops || {};
codepops.VersionChooserWidget = function(a, b) {
    var c = b || {};
    this.window_ = c.window || window;
    this.document_ = c.document || window.document;
    this.page_ = a;
    this.panel_ = this.document_.createElement("div");
    this.panel_.id = "version-chooser-widget";
    this.panel_.classList.add("new-app-subpanel");
    this.panel_.classList.add("hidden");
    this.page_.tabletScreenDiv.appendChild(this.panel_);
    this.headerPanel_ = this.document_.createElement("div");
    this.headerPanel_.id = "version-chooser-header";
    this.headerPanel_.innerHTML = $t("<h3>You've coded this app before!</h3><p>Do you want to keep working on a previous version or start a new one from scratch?");
    this.listPanel_ = this.document_.createElement("div");
    this.listPanel_.id = "version-chooser-list";
    c = this.document_.createElement("h4");
    c.innerText = $t("Choose a previous version");
    this.listPanel_.appendChild(c);
    this.listPages_ = this.document_.createElement("div");
    this.listPages_.className = "list-pages";
    this.listPanel_.appendChild(c);
    this.listPanel_.appendChild(this.listPages_);
    this.footerPanel_ = this.document_.createElement("div");
    this.footerPanel_.id = "version-chooser-footer";
    this.panel_.appendChild(this.headerPanel_);
    this.panel_.appendChild(this.listPanel_);
    this.panel_.appendChild(this.footerPanel_);
    c = this.document_.createElement("div");
    c.className = "new-app-subpanel-or";
    c.innerText = $t("OR");
    this.newAppButton_ = this.document_.createElement("button");
    this.newAppButton_.innerHTML = $t("Start from scratch &raquo;");
    this.newAppButton_.classList.add("button-flat");
    this.footerPanel_.appendChild(c);
    this.footerPanel_.appendChild(this.newAppButton_)
}
;
codepops.VersionChooserWidget.prototype.show = function(a, b, c) {
    this.page_.home();
    this.panel_.classList.remove("hidden");
    this.panel_.classList.add("visible");
    this.newAppButton_.onclick = function() {
        this.page_.newAppFromActivityNumber("" + b, c)
    }
    .bind(this);
    4 >= Object.keys(a).length ? this.listPages_.classList.add("single-row") : this.listPages_.classList.remove("single-row");
    var d = {};
    d.apps = a;
    d.inVersionChooser = !0;
    d.targetDiv = this.listPages_;
    this.page_.renderAppsList_(d)
}
;
codepops.VersionChooserWidget.prototype.hide = function() {
    this.panel_.classList.remove("visible");
    this.panel_.classList.add("hidden")
}
;
codepops.WelcomePage = function(a) {
    this.settings = a || {};
    this.window_ = this.settings.window || window;
    this.document_ = this.settings.document || window.document;
    this.dataStore_ = this.settings.dataStore || new codepops.DataStore;
    this.isLoggedIn = !1;
    this.LOGIN_BASE_DOMAIN_BITSBOX = "bitsbox.com";
    this.BULK_ACCOUNT_PREFIX_DEFAULT = "bulk";
    this.loginBaseDomain_ = this.LOGIN_BASE_DOMAIN_BITSBOX;
    this.bulkAccountPrefix_ = this.BULK_ACCOUNT_PREFIX_DEFAULT;
    this.newKidData_ = {};
    this.subscriptionData_ = {};
    this.grownupPreferences_ = {};
    this.childAccounts_ = {};
    this.needToReloadPrefs_ = !1;
    this.grownupNameFromPrefs_ = this.grownupDisplayName_ = this.currentGrownupEmail_ = this.currentCodingEmail_ = this.kidIcon_ = this.linkedKidEmail_ = this.linkedKidPassword_ = this.newKidPassword_ = this.kidUid_ = "";
    this.queryingForAccountInfo = this.grownupWithChildAccounts_ = !1;
    this.iconCollection_ = "icon1.png icon2.png icon3.png icon4.png icon5.png icon6.png icon7.png icon8.png icon9.png icon10.png icon11.png icon12.png icon13.png icon14.png icon15.png icon16.png icon17.png icon18.png icon19.png icon20.png icon21.png icon22.png icon23.png icon24.png icon25.png icon26.png icon27.png icon28.png icon29.png icon30.png icon31.png icon32.png icon33.png icon34.png icon35.png icon36.png icon37.png icon38.png icon39.png icon40.png icon41.png icon42.png icon43.png icon44.png icon45.png icon46.png icon47.png icon48.png icon49.png icon50.png icon51.png icon52.png icon53.png icon54.png icon55.png".split(" ");
    this.isOpera = !!window.opr && !!opr.addons || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
    this.isSafari = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" !== typeof safari && safari.pushNotification).toString();
    this.isIE = !!document.documentMode;
    this.isEdge = !this.isIE && !!window.StyleMedia;
    this.isFirefox = "undefined" !== typeof InstallTrigger;
    this.isBlink = ((this.isChrome = !!window.chrome && !!window.chrome.webstore) || this.isOpera) && !!window.CSS;
    this.isWindows = -1 < navigator.platform.indexOf("Win32") || -1 < navigator.platform.indexOf("Win64");
    this.isMac = -1 < navigator.platform.indexOf("Mac68K") || -1 < navigator.platform.indexOf("MacPPC") || -1 < navigator.platform.indexOf("MacIntel");
    this.isiOS = -1 < navigator.platform.indexOf("iPhone") || -1 < navigator.platform.indexOf("iPod") || -1 < navigator.platform.indexOf("iPad")
}
;
codepops.WelcomePage.prototype.init = function() {
    this.returningUserBtn = this.document_.getElementById("returning-user-btn");
    this.welcomePanel = this.document_.getElementById("welcome-panel");
    this.welcomeDiv = this.document_.getElementById("welcome-div");
    this.returningUserForm = this.document_.getElementById("returning-user-form");
    this.emailErrorDiv = this.document_.getElementById("email-error-div");
    this.welcomeBackDiv = this.document_.getElementById("welcome-back-div");
    this.userEmailHeader = this.document_.getElementById("user-email-header");
    this.codingAccountSignInDiv = this.document_.getElementById("coding-account-signin-div");
    this.chooseDifferentAccountLinks = this.document_.getElementsByClassName("choose-different-account");
    this.codingPasswordInput = this.document_.getElementById("coding-password-input");
    this.grownupPasswordInput = this.document_.getElementById("grownup-password-input");
    this.newGrownupBtn = this.document_.getElementById("new-grownup-btn");
    this.grownupSignupBtn = this.document_.getElementById("create-new-grownup-btn");
    this.grownupFirstName = this.document_.getElementById("grownup-first-name").value = "";
    this.grownupLastName = this.document_.getElementById("grownup-last-name").value = "";
    this.grownupEmail = this.document_.getElementById("grownup-email").value = "";
    this.grownupEmailFocus = this.document_.getElementById("grownup-email").focus();
    this.grownupPassword = this.document_.getElementById("grownup-password").value = "";
    this.grownupPasswordConfirm = this.document_.getElementById("grownup-password-confirm").value = "";
    this.message = this.document_.getElementById("message");
    this.messageDiv = this.document_.getElementById("message");
    this.grownupAccountLink = this.document_.getElementById("grownup-account");
    this.grownupAccountSignInDiv = this.document_.getElementById("grownup-account-signin-div");
    this.codingAccountPasswordBtn = this.document_.getElementById("coding-password-btn");
    this.grownupAccountPasswordBtn = this.document_.getElementById("grownup-password-btn");
    this.loadingDiv = this.document_.getElementById("loading");
    this.switchAccountsLink = this.document_.getElementById("switch-accounts");
    this.loginPanelDiv = this.document_.getElementById("login-panel");
    this.newKidAccountBtn = this.document_.getElementById("new-kid-account-btn");
    this.kidsCodingAccountDiv = this.document_.getElementById("kids-coding-account-div");
    this.linkDiv = this.document_.getElementById("link-div");
    this.newKidAccountDiv = this.document_.getElementById("account-div");
    this.divTitle = this.document_.getElementById("div-title");
    this.linkKidAccountBtn = this.document_.getElementById("existing-kid-account-btn");
    this.editGrownupBtn = this.document_.getElementById("grownup-edit-btn");
    this.returningGrownupName = this.document_.getElementsByClassName("returning-grownup-name");
    this.loginIconBtn = this.document_.getElementById("icon-placeholder");
    this.legacyAccountEmail = this.document_.getElementById("legacy-coding-account");
    this.editKidsInfo = this.document_.getElementById("edit-kids-info");
    this.editKidsBtn = this.document_.getElementById("kids-edit-btn");
    this.newGrownupForm = this.document_.getElementById("new-grownup-form");
    this.divCurrentlyBeingViewed = "welcome-div";
    this.settings.subscriptionData_ && (this.subscriptionData_ = this.settings.subscriptionData_);
    this.settings.grownupPreferences_ && (this.grownupPreferences_ = this.settings.grownupPreferences_);
    this.setUpClickEventHandlers()
}
;
codepops.WelcomePage.prototype.setUpClickEventHandlers = function() {
    this.returningUserBtn.addEventListener("click", function() {
        this.getAccountInfoByEmail()
    }
    .bind(this));
    this.returningUserForm.addEventListener("submit", function(a) {
        a.preventDefault()
    });
    for (i = 0; i < this.chooseDifferentAccountLinks.length; i++)
        this.chooseDifferentAccountLinks[i].addEventListener("click", function() {
            this.chooseDifferentAccount()
        }
        .bind(this));
    this.codingAccountPasswordBtn.addEventListener("click", function() {
        this.accountSignIn()
    }
    .bind(this));
    this.grownupAccountPasswordBtn.addEventListener("click", function() {
        this.accountSignIn()
    }
    .bind(this));
    this.newGrownupBtn.addEventListener("click", function() {
        this.hideDivPanel("welcome-div");
        this.showDivPanel("new-grownup-signup")
    }
    .bind(this));
    this.grownupSignupBtn.addEventListener("click", function() {
        this.newGrownup()
    }
    .bind(this));
    this.newKidAccountBtn.addEventListener("click", function() {
        this.hideDivPanel("link-div");
        this.showDivPanel("account-div");
        this.addNewKidAccount()
    }
    .bind(this));
    this.linkKidAccountBtn.addEventListener("click", function() {
        this.hideDivPanel("link-div");
        this.showDivPanel("account-div");
        this.linkExistingKidAccount()
    }
    .bind(this));
    this.switchAccountsLink.addEventListener("click", function() {
        this.welcomeBackDiv.classList.add("hidden");
        this.welcomeDiv.classList.remove("hidden");
        this.divCurrentlyBeingViewed = "welcome-div";
        this.grownupWithChildAccounts_ = !1;
        this.document_.getElementById("coding-accounts").innerHTML = ""
    }
    .bind(this));
    this.grownupAccountLink.addEventListener("click", function() {
        this.welcomeBackDiv.classList.add("hidden");
        this.grownupAccountSignInDiv.classList.remove("hidden");
        this.divCurrentlyBeingViewed = "grownup-account-signin-div";
        this.grownupPasswordInput.focus()
    }
    .bind(this));
    this.editGrownupBtn.addEventListener("click", function() {
        this.editGrownupAccount()
    }
    .bind(this));
    this.loginIconBtn.addEventListener("click", function() {
        this.showIconWidget()
    }
    .bind(this));
    this.editKidsInfo.addEventListener("click", function() {
        this.editKidsAccount()
    }
    .bind(this));
    this.newGrownupForm.addEventListener("keyup", function(a) {
        a.preventDefault();
        13 === a.keyCode && this.document_.getElementById("create-new-grownup-btn").click()
    }
    .bind(this))
}
;
codepops.WelcomePage.prototype.getAccountInfoByEmail = function() {
    var a = function(a) {
        if ("NO_CONTENT" === a.data || "KID_ACCOUNT" === a.data)
            this.welcomeDiv.classList.add("hidden"),
            this.showCodingPageLogin(c),
            this.legacyAccountEmail.innerHTML = c;
        else if ("object" === typeof a.data) {
            a = a.data;
            this.currentGrownupEmail_ = c;
            a.grownupName && (this.grownupNameFromPrefs_ = a.grownupName);
            for (i = 0; i < this.returningGrownupName.length; i++)
                this.returningGrownupName[i].innerHTML = this.grownupNameFromPrefs_ ? this.grownupNameFromPrefs_ + "'s" : this.currentGrownupEmail_;
            if (a.childAccounts) {
                this.grownupWithChildAccounts_ = !0;
                this.welcomeDiv.classList.add("hidden");
                var b = this.document_.createElement("h3");
                b.id = "returning-grownup-email";
                b.innerHTML = c;
                this.userEmailHeader.innerHTML = "";
                this.userEmailHeader.appendChild(b);
                this.generateAvatars(a.childAccounts);
                this.welcomeBackDiv.classList.remove("hidden");
                this.divCurrentlyBeingViewed = "welcome-back-div"
            } else
                this.welcomeDiv.classList.add("hidden"),
                this.grownupAccountSignInDiv.classList.remove("hidden"),
                this.divCurrentlyBeingViewed = "grownup-account-signin-div",
                this.grownupPasswordInput.focus()
        }
        this.queryingForAccountInfo = !1;
        this.emailErrorDiv.innerHTML = "";
        this.returningUserForm.email.value = ""
    }
    .bind(this)
      , b = function(a) {
        "unknown" !== a && console.error(a);
        this.displayEmailErrorMessage(a)
    }
    .bind(this)
      , c = this.returningUserForm.email.value;
    c && (-1 === c.indexOf("@") || -1 === c.indexOf(".") ? this.displayEmailErrorMessage("invalid") : this.queryingForAccountInfo || (this.queryingForAccountInfo = !0,
    this.dataStore_.getAccountInfoByEmail(c, a, b)))
}
;
codepops.WelcomePage.prototype.displayEmailErrorMessage = function(a) {
    this.emailErrorDiv.innerHTML = "unknown" === a ? $t("Sorry, we couldn't find an account associated with that email address.") : "invalid" === a ? $t("Oops, that doesn't look like a real email address.") : a ? $t(a) : $t('An error occured. Please contact <a href="mailto:help@bitsbox.com">help@bitsbox.com</a>.');
    this.queryingForAccountInfo = !1;
    this.emailErrorDiv.classList.remove("hidden")
}
;
codepops.WelcomePage.prototype.accountSignIn = function() {
    var a = ""
      , b = ""
      , c = function() {}
      , d = this.document_.getElementById(this.divCurrentlyBeingViewed)
      , e = "";
    -1 < this.divCurrentlyBeingViewed.indexOf("coding") ? (a = this.codingPasswordInput,
    e = this.document_.getElementById("coding-login-error-div"),
    -1 < this.currentCodingEmail_.indexOf("%") && (this.currentCodingEmail_ = this.currentCodingEmail_.replace("%2E", ".")),
    b = this.currentCodingEmail_,
    c = function() {
        this.loadingDiv.classList.add("hidden");
        window.location = "/code.html?grownupAccounts=on"
    }
    .bind(this)) : (a = this.grownupPasswordInput,
    b = this.currentGrownupEmail_,
    e = this.document_.getElementById("grownup-login-error-div"),
    c = function() {
        var a = function(a) {
            this.dataStore_.grownupAccountCredential_ = firebase.auth.EmailAuthProvider.credential(b, g);
            this.loadingDiv.classList.add("hidden");
            this.childAccounts_ = a.childAccounts;
            this.grownupPreferences_ = a.preferences;
            this.subscriptionData_ = a.subscriptions;
            this.createGrownupProfileDiv();
            this.hideDivPanel("grownup-account-signin-div");
            this.showDivPanel("grownup-profile")
        }
        .bind(this);
        this.dataStore_.getGrownupAccountData(a, function(a) {
            console.error(a)
        })
    }
    .bind(this));
    var f = function(b) {
        this.loadingDiv.classList.add("hidden");
        d.classList.remove("hidden");
        e.innerHTML = "Sorry, that password is incorrect.";
        e.classList.remove("hidden");
        a.focus();
        a.select();
        console.error(b)
    }
    .bind(this)
      , g = a.value;
    g ? (d.classList.add("hidden"),
    this.loadingDiv.classList.remove("hidden"),
    this.dataStore_.login("password", c, f, b, g)) : a.focus()
}
;
codepops.WelcomePage.prototype.newGrownup = function() {
    var a = this.document_.getElementById("message");
    a.innerHTML = "";
    this.grownupFirstName = this.document_.getElementById("grownup-first-name").value;
    this.grownupLastName = this.document_.getElementById("grownup-last-name").value;
    var b = this.document_.getElementById("grownup-email").value
      , c = this.document_.getElementById("grownup-password").value
      , d = this.document_.getElementById("grownup-password-confirm").value
      , e = function(a) {
        this.hideDivPanel("new-grownup-signup");
        this.showDivPanel("grownup-profile");
        codepops.combineHashes(this.grownupPreferences_, a);
        this.createGrownupProfileDiv()
    }
    .bind(this)
      , f = function(a) {
        console.error(a);
        return !1
    };
    b && -1 !== b.indexOf("@") && -1 !== b.indexOf(".") ? c && d ? 6 > c.length ? (b = this.document_.createElement("p"),
    b.className = "error-message",
    b.innerHTML = "Oops. Your password must be 6 or more characters.",
    this.document_.getElementById("grownup-password").focus(),
    a.appendChild(b)) : c !== d ? (b = this.document_.createElement("p"),
    b.className = "error-message",
    b.innerHTML = "Oops, try again! It looks like the passwords do NOT match.",
    this.document_.getElementById("grownup-password-confirm").focus(),
    a.appendChild(b)) : this.dataStore_.signUpGrownupAccount(this.grownupFirstName, this.grownupLastName, b, c, e, f) : (b = this.document_.createElement("p"),
    b.className = "error-message",
    b.innerHTML = "Looks like you forgot to fill out a password.",
    this.document_.getElementById("grownup-password").focus(),
    a.appendChild(b)) : (b = this.document_.createElement("p"),
    b.innerHTML = "Oops. That doesn't look like a real email address.",
    b.className = "error-message",
    this.document_.getElementById("grownup-email").focus(),
    a.appendChild(b))
}
;
codepops.WelcomePage.prototype.createGrownupProfileDiv = function() {
    this.grownupFirstName = this.grownupPreferences_.firstName;
    this.grownupLastName = this.grownupPreferences_.lastName;
    var a = this.grownupFirstName.charAt(0).toUpperCase() + this.grownupFirstName.substr(1).toLowerCase()
      , b = this.grownupLastName.charAt(0).toUpperCase() + this.grownupLastName.substr(1).toLowerCase();
    this.grownupDisplayName_ = a + " " + b;
    var b = this.dataStore_.currentUser_.email
      , c = this.document_.getElementById("nameDiv")
      , d = this.document_.getElementById("emailDiv")
      , a = this.document_.getElementById("passwordDiv")
      , e = this.document_.createElement("span");
    e.innerHTML = " " + this.grownupDisplayName_;
    e.className = "personal-info";
    e.id = "grownup-name-span";
    c.appendChild(e);
    c = this.document_.createElement("span");
    c.innerHTML = " " + b;
    c.className = "personal-info";
    c.id = "grownup-email-span";
    d.appendChild(c);
    b = this.document_.createElement("span");
    d = this.document_.createElement("input");
    d.type = "password";
    d.value = " ********";
    d.className = "personal-password";
    d.id = "grownup-password-span";
    a.appendChild(b);
    a.appendChild(d);
    if (this.childAccounts_ && this.subscriptionData_ && (a = Object.keys(this.childAccounts_),
    b = Object.keys(this.subscriptionData_),
    0 < a.length && 0 < b.length))
        for (i = 0; i < a.length; i++) {
            var d = Object.entries(this.childAccounts_)[i][1], c = d.subscriptionUid, e = a[i], f;
            for (j = 0; j < b.length; j++)
                b[j] === c && (f = this.subscriptionData_[c]);
            this.generateConnectedCodingAccount(d, e, f)
        }
}
;
codepops.WelcomePage.prototype.addNewKidAccount = function() {
    var a = this.document_.getElementById("account-div")
      , b = this.document_.createElement("div");
    b.id = "exit-tray";
    b.classList.add("close-tray-div");
    b.title = "Close tray";
    a.appendChild(b);
    a = this.document_.createElement("a");
    a.setAttribute("href", "#coding");
    a.setAttribute("title", "Close");
    b.appendChild(a);
    a = this.document_.createElement("img");
    a.setAttribute("src", "/img/button-x-black.png");
    a.setAttribute("alt", "Close Button");
    a.setAttribute("title", "Close");
    b.appendChild(a);
    b.addEventListener("click", function() {
        this.exitTray(this.newKidAccountDiv);
        this.showDivPanel("connected-div")
    }
    .bind(this));
    this.showStepOne()
}
;
codepops.WelcomePage.prototype.showStepOne = function() {
    var a = this.document_.createElement("h3");
    a.innerHTML = "Create a new Kids' Coding Account";
    this.newKidAccountDiv.appendChild(a);
    a = this.document_.createElement("p");
    a.id = "div-title";
    a.innerHTML = "Step 1: Provide some information about your kid!";
    this.newKidAccountDiv.appendChild(a);
    a = this.document_.createElement("span");
    a.setAttribute("method", "post");
    a.setAttribute("action", "/");
    a.id = "add-kid-form";
    var b = this.document_.createElement("input");
    b.className = "kid-input";
    b.id = "kid-name";
    b.name = "kidName";
    b.placeholder = "Kid First Name";
    this.newKidAccountDiv.appendChild(b);
    var c = this.document_.createElement("input");
    c.className = "kid-input";
    c.id = "kid-password";
    c.name = "kidName";
    c.placeholder = "Create a Password";
    c.type = "password";
    this.newKidAccountDiv.appendChild(c);
    var d = this.document_.createElement("p");
    d.innerHTML = "Your child's birthday";
    this.newKidAccountDiv.appendChild(d);
    var e = this.document_.createElement("input");
    e.id = "kid-birthday";
    e.className = "kid-input";
    e.name = "kidBirthday";
    e.type = "date";
    this.newKidAccountDiv.appendChild(e);
    var f = this.document_.createElement("label");
    f.innerHTML = "Gender:";
    f.className = "gender-label";
    var g = this.document_.createElement("label");
    g.className = "gender-radio";
    this.newKidAccountDiv.appendChild(f);
    this.newKidAccountDiv.appendChild(g);
    a = this.document_.createElement("input");
    a.setAttribute("type", "radio");
    a.setAttribute("class", "gender-radios");
    a.setAttribute("name", "gender");
    a.setAttribute("value", "girl");
    a.setAttribute("id", "gender-girl");
    g.appendChild(a);
    a = this.document_.createElement("label");
    a.innerHTML = "Girl";
    g.appendChild(a);
    a = this.document_.createElement("input");
    a.setAttribute("type", "radio");
    a.setAttribute("class", "gender-radios");
    a.setAttribute("name", "gender");
    a.setAttribute("value", "Boy");
    a.setAttribute("id", "gender-boy");
    g.appendChild(a);
    a = this.document_.createElement("label");
    a.innerHTML = "Boy";
    g.appendChild(a);
    a = this.document_.createElement("input");
    a.setAttribute("type", "radio");
    a.setAttribute("class", "gender-radios");
    a.setAttribute("name", "gender");
    a.setAttribute("value", "Other");
    a.setAttribute("id", "gender-other");
    g.appendChild(a);
    a = this.document_.createElement("label");
    a.innerHTML = "Other";
    g.appendChild(a);
    a = this.document_.createElement("div");
    a.className = "icon-div";
    this.newKidAccountDiv.appendChild(a);
    var h = this.document_.createElement("table");
    h.setAttribute("id", "icon-table");
    this.newKidAccountDiv.appendChild(h);
    a = this.document_.createElement("tr");
    h.appendChild(a);
    var l = this.document_.createElement("td");
    a.appendChild(l);
    var m = this.document_.createElement("img");
    m.setAttribute("src", "/img/avatar/icon1.png");
    m.className = "kids-icon-selector";
    m.id = "icon-placeholder";
    l.appendChild(m);
    this.kidIcon_ = "/img/avatar/icon1.png";
    l = this.document_.createElement("td");
    l.setAttribute("class", "linked-kids-column");
    a.appendChild(l);
    var n = this.document_.createElement("a");
    n.setAttribute("id", "choose-custom-icon");
    n.className = "button-flat";
    n.innerHTML = "Choose a custom icon";
    l.appendChild(n);
    a = this.document_.createElement("tr");
    l.appendChild(a);
    l = this.document_.createElement("td");
    l.setAttribute("class", "linked-kids-column");
    a.appendChild(l);
    a = this.document_.createElement("p");
    a.id = "icon-name";
    l.appendChild(a);
    n.addEventListener("click", function() {
        this.showIconWidget()
    }
    .bind(this));
    a = this.document_.createElement("div");
    a.className = "next-div";
    this.newKidAccountDiv.appendChild(a);
    var p = this.document_.createElement("a");
    p.setAttribute("id", "next-btn");
    p.className = "button-flat button-cta";
    p.innerHTML = "Next";
    this.newKidAccountDiv.appendChild(p);
    p.addEventListener("click", function() {
        var a = this.document_.getElementById("icon-name");
        b.classList.add("hidden");
        c.classList.add("hidden");
        d.classList.add("hidden");
        e.classList.add("hidden");
        f.classList.add("hidden");
        g.classList.add("hidden");
        m.classList.add("hidden");
        n.classList.add("hidden");
        p.classList.add("hidden");
        s.classList.add("hidden");
        a.classList.remove("icon-name");
        h.classList.add("hidden");
        this.showStepTwo()
    }
    .bind(this));
    var s = this.document_.createElement("a");
    s.setAttribute("id", "cancel-btn");
    s.className = "button-flat";
    s.innerHTML = "Cancel";
    this.newKidAccountDiv.appendChild(s);
    s.addEventListener("click", function() {
        this.exitTray(this.newKidAccountDiv);
        this.showDivPanel("connected-div")
    }
    .bind(this))
}
;
codepops.WelcomePage.prototype.showStepTwo = function() {
    this.document_.getElementById("div-title").innerHTML = "Step 2: What kind of Bitsbox subscription do you have?";
    var a = this.document_.createElement("span");
    a.setAttribute("method", "post");
    a.setAttribute("action", "/");
    a.id = "add-kid-form-two";
    var b = this.document_.createElement("div");
    this.newKidAccountDiv.appendChild(b);
    a = this.document_.createElement("input");
    a.setAttribute("type", "radio");
    a.setAttribute("class", "subOptions subscription-radios");
    a.setAttribute("name", "subscription");
    a.setAttribute("value", "physical");
    a.setAttribute("id", "radio-physical");
    b.appendChild(a);
    var c = this.document_.createElement("label");
    c.innerHTML = "Physical (You receive boxes in the mail)";
    b.appendChild(c);
    var d = this.document_.createElement("div");
    this.newKidAccountDiv.appendChild(d);
    c = this.document_.createElement("input");
    c.setAttribute("type", "radio");
    c.setAttribute("class", "subOptions subscription-radios");
    c.setAttribute("name", "subscription");
    c.setAttribute("value", "digital");
    c.setAttribute("id", "radio-digital");
    d.appendChild(c);
    var e = this.document_.createElement("label");
    e.innerHTML = "Digital Only (You receive an email with a link to a PDF)";
    d.appendChild(e);
    var f = this.document_.createElement("div");
    this.newKidAccountDiv.appendChild(f);
    e = this.document_.createElement("input");
    e.setAttribute("type", "radio");
    e.setAttribute("class", "subOptions subscription-radios");
    e.setAttribute("name", "subscription");
    e.setAttribute("value", "noSubscription");
    e.setAttribute("id", "radio-no-subscription");
    f.appendChild(e);
    var g = this.document_.createElement("label");
    g.innerHTML = "I don't have a Bitsbox subscription";
    f.appendChild(g);
    var h = this.document_.createElement("input");
    h.name = "address";
    h.id = "address-input";
    h.className = "address-input";
    h.placeholder = "Number and Street";
    this.newKidAccountDiv.appendChild(h);
    var l = this.document_.createElement("input");
    l.name = "zip";
    l.id = "zip-input";
    l.className = "address-input";
    l.placeholder = "Zip or Postal Code";
    this.newKidAccountDiv.appendChild(l);
    var m = this.document_.createElement("a");
    m.setAttribute("id", "next-btn-two");
    m.className = "button-flat button-cta";
    m.innerHTML = "Next";
    this.newKidAccountDiv.appendChild(m);
    var n = this.document_.createElement("a");
    n.setAttribute("id", "cancel-btn-two");
    n.className = "button-flat";
    n.innerHTML = "Cancel";
    this.newKidAccountDiv.appendChild(n);
    a.addEventListener("click", function() {
        h.classList.remove("hidden");
        l.classList.remove("hidden")
    });
    c.addEventListener("click", function() {
        h.classList.remove("hidden");
        l.classList.remove("hidden")
    });
    e.addEventListener("click", function() {
        h.classList.add("hidden");
        l.classList.add("hidden");
        m.setAttribute("style", "margin-top: 75px");
        n.setAttribute("style", "margin-top: 75px")
    });
    n.addEventListener("click", function() {
        this.exitTray(this.newKidAccountDiv);
        this.showDivPanel("connected-div")
    }
    .bind(this));
    m.addEventListener("click", function() {
        this.showStepThree();
        b.classList.add("hidden");
        d.classList.add("hidden");
        f.classList.add("hidden");
        h.classList.add("hidden");
        l.classList.add("hidden");
        m.classList.add("hidden");
        n.classList.add("hidden")
    }
    .bind(this))
}
;
codepops.WelcomePage.prototype.showStepThree = function() {
    var a = this.document_.getElementById("div-title");
    a.innerHTML = "Step 3: Confirm that you want to connect.";
    this.newKidAccountDiv.appendChild(a);
    var b = this.document_.getElementById("kid-name").value
      , a = b.charAt(0).toUpperCase() + b.substr(1).toLowerCase();
    this.newKidData_.firstName = a;
    this.newKidData_.gender = this.getRadioVal("gender-radios", "gender");
    this.newKidData_.subscription = this.getRadioVal("subscription-radios", "subscription");
    var c = this.document_.createElement("p");
    c.id = "found-title";
    c.innerHTML = "We found a Physical Bitsbox subscriptionassociated with that mailing address:";
    this.newKidAccountDiv.appendChild(c);
    c = this.document_.createElement("p");
    c.innerHTML = '<strong class="subscription-display">Type: </strong>Physical, Renews every 12 months';
    this.newKidAccountDiv.appendChild(c);
    c = this.document_.createElement("p");
    c.innerHTML = '<strong class="subscription-display">Status: </strong>Active';
    this.newKidAccountDiv.appendChild(c);
    c = this.document_.createElement("p");
    c.innerHTML = '<strong class="subscription-display">Purchased: </strong>March 5, 2018';
    this.newKidAccountDiv.appendChild(c);
    c = this.document_.createElement("span");
    c.setAttribute("method", "post");
    c.setAttribute("action", "/");
    c.id = "add-kid-form-three";
    c = this.document_.createElement("div");
    this.newKidAccountDiv.appendChild(c);
    var d = this.document_.createElement("input");
    d.setAttribute("type", "radio");
    d.setAttribute("class", "connection-radios radio-options");
    d.setAttribute("name", "connectAccount");
    d.setAttribute("value", "connectKidAccount");
    c.appendChild(d);
    d = this.document_.createElement("label");
    d.innerHTML = "Connect this subscription to " + a + "'s Coding Account";
    c.appendChild(d);
    a = this.document_.createElement("div");
    this.newKidAccountDiv.appendChild(a);
    c = this.document_.createElement("input");
    c.setAttribute("type", "radio");
    c.setAttribute("class", "connection-radios radio-options");
    c.setAttribute("name", "connectAccount");
    c.setAttribute("value", "doNotConnect");
    a.appendChild(c);
    c = this.document_.createElement("label");
    c.innerHTML = "Don't connect this subscription for now";
    a.appendChild(c);
    a = this.document_.createElement("a");
    a.setAttribute("id", "create-kid-account-btn");
    a.className = "button-flat button-cta";
    a.innerHTML = "Create " + b + "'s Coding Account";
    this.newKidAccountDiv.appendChild(a);
    a.addEventListener("click", function() {
        this.newKidData_.connectOption = this.getRadioVal("connection-radios", "connectAccount");
        var a = this.newKidData_.gender
          , c = this.newKidData_.subscription
          , d = this.newKidData_.connectOption
          , h = this.dataStore_.currentUser_.email
          , l = this.kidIcon_
          , m = this.document_.getElementById("kid-birthday").value
          , n = this.document_.getElementById("address-input").value
          , p = this.document_.getElementById("zip-input").value
          , s = this.document_.getElementById("kid-password").value
          , q = h.split("@")[0]
          , h = h.split("@")[1]
          , q = q + "+" + b + "@" + h
          , h = function(a, b, c) {
            this.newKidAccountDiv.innerHTML = "";
            this.newKidAccountDiv.classList.add("hidden");
            this.document_.getElementById("connected-div").classList.remove("hidden");
            this.showDivPanel("link-div");
            var d = this.document_.getElementById("coding-accounts");
            this.hideDivPanel("second-hr");
            d.innerHTML = "Congrats! You successfully added a kids account.";
            codepops.combineHashes(this.subscriptionData_, a);
            this.generateConnectedCodingAccount(b, c, a)
        }
        .bind(this);
        this.dataStore_.createNewKidsAccount(b, s, m, a, q, l, n, p, c, d, h, function(a) {
            console.error(a);
            return !1
        })
    }
    .bind(this));
    a = this.document_.createElement("a");
    a.setAttribute("id", "cancel-btn-three");
    a.className = "button-flat";
    a.innerHTML = "Cancel";
    this.newKidAccountDiv.appendChild(a);
    a.addEventListener("click", function() {
        this.exitTray(this.newKidAccountDiv);
        this.showDivPanel("connected-div")
    }
    .bind(this))
}
;
codepops.WelcomePage.prototype.showIconWidget = function() {
    var a = this.document_.getElementById("popup-background");
    a.classList.remove("hidden");
    var b = this.document_.getElementById("avatar-widget");
    b.classList.remove("hidden");
    var c = this.document_.createElement("div");
    c.id = "icon-display-div";
    b.appendChild(c);
    b = this.document_.createElement("div");
    b.id = "icon-widget-exit-tray";
    b.classList.add("close-tray-div");
    b.title = "Close tray";
    c.appendChild(b);
    var d = this.document_.createElement("a");
    d.setAttribute("href", "#coding");
    d.setAttribute("title", "Close");
    b.appendChild(d);
    d = this.document_.createElement("img");
    d.setAttribute("src", "/img/button-x-black.png");
    d.setAttribute("alt", "Close Button");
    d.setAttribute("title", "Close");
    b.appendChild(d);
    b.addEventListener("click", function() {
        this.exitTray(this.newKidAccountDiv);
        this.exitTray(c);
        this.showDivPanel("connected-div");
        a.classList.add("hidden")
    }
    .bind(this));
    b = this.document_.createElement("h1");
    b.innerHTML = $t("Select an icon for your kid.");
    c.appendChild(b);
    var e = this.document_.createElement("div");
    c.appendChild(e);
    this.iconCollection_.forEach(function(b) {
        var d = "/img/avatar/" + b
          , l = this.document_.createElement("span");
        l.id = "image-span-" + b;
        l.className = "image-span";
        e.appendChild(l);
        var m = this.document_.createElement("img");
        m.src = d;
        m.id = "icon-image-" + b;
        m.className = "icon-image";
        l.appendChild(m);
        m.addEventListener("click", function() {
            m.classList.add("image-overlay");
            this.kidIcon_ = d;
            for (var b = this.document_.getElementsByClassName("image-overlay"), e = 0; e < b.length; e++)
                b[e] !== m && b[e].classList.remove("image-overlay");
            f.addEventListener("click", function() {
                selectedIcon = this.kidIcon_;
                a.classList.add("hidden");
                this.document_.getElementById("connected-div").classList.add("hidden");
                this.document_.getElementById("icon-placeholder").setAttribute("src", this.kidIcon_);
                this.document_.getElementById("icon-name").innerHTML = this.kidIcon_;
                this.exitTray(c)
            }
            .bind(this))
        }
        .bind(this))
    }
    .bind(this));
    var f = this.document_.createElement("div");
    f.setAttribute("id", "selected-kid-icon-btn");
    f.className = "button-flat button-cta";
    f.innerHTML = "Choose this icon.";
    c.appendChild(f)
}
;
codepops.WelcomePage.prototype.generateConnectedCodingAccount = function(a, b, c) {
    if (a && b) {
        var d = a.kidFirstName.charAt(0).toUpperCase() + a.kidFirstName.substr(1).toLowerCase()
          , e = a.kidIconUrl
          , f = this.document_.getElementById("connected-div")
          , g = this.document_.createElement("div");
        f.appendChild(g);
        var h = this.document_.createElement("table");
        h.setAttribute("id", "linked-kids-table");
        g.appendChild(h);
        f = this.document_.createElement("tr");
        h.appendChild(f);
        h = this.document_.createElement("td");
        h.setAttribute("class", "linked-kids-column");
        f.appendChild(h);
        g = this.document_.createElement("a");
        g.innerHTML = "log in as " + d;
        h.appendChild(g);
        h = this.document_.createElement("td");
        h.setAttribute("class", "linked-kids-column");
        f.appendChild(h);
        var l = this.document_.createElement("img");
        l.setAttribute("src", e);
        l.className = "connected-kids-icon";
        h.appendChild(l);
        e = this.document_.createElement("td");
        e.setAttribute("class", "linked-kids-column linked-kids-info");
        f.appendChild(e);
        f = this.document_.createElement("h4");
        f.innerHTML = d;
        e.appendChild(f);
        f = this.document_.createElement("p");
        f.innerHTML = "Premium Features Activated (Linked to an active subscription)";
        e.appendChild(f);
        f = this.document_.createElement("p");
        f.innerHTML = "Linked to 3 Grownup Accounts";
        e.appendChild(f);
        f = this.document_.createElement("a");
        f.innerHTML = "Manage " + d + "'s Coding Account";
        e.appendChild(f);
        f.addEventListener("click", function() {
            this.kidUid_ = b;
            this.hideDivPanel("grownup-profile");
            this.showDivPanel("kid-profile");
            this.getKidsProfileInfo(a, c)
        }
        .bind(this));
        g.addEventListener("click", function() {
            this.hideDivPanel("grownup-profile");
            this.showDivPanel("coding-account-signin-div")
        }
        .bind(this))
    } else
        console.error("Missing required parameter.")
}
;
codepops.WelcomePage.prototype.linkExistingKidAccount = function() {
    var a = this.document_.getElementById("account-div")
      , b = this.document_.createElement("div");
    b.id = "exit-tray";
    b.classList.add("close-tray-div");
    b.title = "Close tray";
    a.appendChild(b);
    a = this.document_.createElement("a");
    a.setAttribute("href", "#coding");
    a.setAttribute("title", "Close");
    b.appendChild(a);
    a = this.document_.createElement("img");
    a.setAttribute("src", "/img/button-x-black.png");
    a.setAttribute("alt", "Close Button");
    a.setAttribute("title", "Close");
    b.appendChild(a);
    b.addEventListener("click", function() {
        this.exitTray(this.newKidAccountDiv)
    }
    .bind(this));
    this.linkKidsCredentialsDiv()
}
;
codepops.WelcomePage.prototype.linkKidsCredentialsDiv = function() {
    var a = this.document_.createElement("h3");
    a.innerHTML = "Link an existing Kid's Coding Account you want to link:";
    this.newKidAccountDiv.appendChild(a);
    a = this.document_.createElement("p");
    a.id = "div-title";
    a.innerHTML = "Step 1: Provide the login credentials for the Coding Account you want to link.";
    this.newKidAccountDiv.appendChild(a);
    a = this.document_.createElement("div");
    a.setAttribute("method", "post");
    a.setAttribute("action", "/");
    a.id = "add-kid-form";
    a = this.document_.createElement("div");
    this.newKidAccountDiv.appendChild(a);
    var b = this.document_.createElement("input");
    b.className = "kid-input";
    b.id = "link-kid-name";
    b.name = "kidName";
    b.placeholder = "Kid First Name";
    a.appendChild(b);
    a = this.document_.createElement("div");
    this.newKidAccountDiv.appendChild(a);
    b = this.document_.createElement("input");
    b.className = "kid-input";
    b.id = "link-kid-email";
    b.name = "link-kid-email";
    b.placeholder = "Email or Username";
    a.appendChild(b);
    a = this.document_.createElement("div");
    this.newKidAccountDiv.appendChild(a);
    b = this.document_.createElement("input");
    b.className = "kid-input";
    b.id = "link-kid-password";
    b.name = "link-kid-password";
    b.placeholder = "Password";
    b.type = "password";
    a.appendChild(b);
    a = this.document_.createElement("a");
    a.setAttribute("id", "link-kid-account-btn");
    a.className = "button-flat button-cta";
    a.innerHTML = "Link Kid's Coding Account";
    this.newKidAccountDiv.appendChild(a);
    a.addEventListener("click", function() {
        var a = this.document_.getElementById("link-kid-name").value;
        a.charAt(0).toUpperCase();
        a.substr(1).toLowerCase();
        var b = this.document_.getElementById("link-kid-email").value
          , e = this.document_.getElementById("link-kid-password").value
          , f = this.dataStore_.currentUser_.uid
          , g = this.generateRandomIconUrl()
          , h = function(a, b) {
            this.newKidAccountDiv.innerHTML = "";
            this.newKidAccountDiv.classList.add("hidden");
            this.showDivPanel("link-div");
            var c = this.document_.getElementById("coding-accounts");
            this.hideDivPanel("second-hr");
            c.innerHTML = "Congrats! You successfully added a kids account.";
            codepops.combineHashes(this.childAccounts_, b);
            this.generateConnectedCodingAccount(a, b)
        }
        .bind(this);
        this.dataStore_.linkGrownupAccountToKidAccount(f, b, e, a, g, h, function(a) {
            console.error(a);
            return !1
        })
    }
    .bind(this));
    a = this.document_.createElement("a");
    a.setAttribute("id", "link-cancel-btn");
    a.className = "button-flat";
    a.innerHTML = "Cancel";
    this.newKidAccountDiv.appendChild(a);
    a.addEventListener("click", function() {
        this.exitTray(this.newKidAccountDiv)
    }
    .bind(this))
}
;
codepops.WelcomePage.prototype.generateAvatars = function(a) {
    for (var b = Object.keys(a), c = 0; c < b.length; c++) {
        var d = a[b[c]]
          , e = d.initials
          , f = d.email
          , g = d.kidIconUrl
          , d = this.document_.createElement("div");
        d.className = "coding-avatar";
        d.id = "coding-account-" + c;
        var h = this.document_.createElement("img");
        h.src = g;
        var g = this.document_.createElement("br")
          , l = this.document_.createElement("em");
        l.innerHTML = e;
        this.document_.getElementById("coding-accounts").appendChild(d);
        d.appendChild(h);
        d.appendChild(g);
        d.appendChild(l);
        d.addEventListener("click", this.showCodingPageLogin.bind(this, f, d.id), !1)
    }
}
;
codepops.WelcomePage.prototype.editGrownupAccount = function() {
    var a = this.document_.getElementById("edit-btn-span")
      , b = this.document_.getElementById("grownup-edit-btn")
      , c = this.document_.getElementById("profile-name")
      , d = this.document_.getElementById("profile-password");
    b.classList.add("hidden");
    c.innerHTML = "Edit Name: ";
    d.innerHTML = "Update Password: ";
    var e = this.document_.createElement("input");
    e.placeholder = "first name";
    e.id = "new-grownup-name-input";
    c.appendChild(e);
    var f = this.document_.createElement("input");
    f.placeholder = "last name";
    f.id = "new-grownup-lastname-input";
    c.appendChild(f);
    var g = this.document_.createElement("input");
    g.placeholder = "new password";
    g.id = "new-grownup-password-input";
    d.appendChild(g);
    var h = this.document_.createElement("span");
    h.className = "button-flat button-cta";
    h.id = "save-edit-info";
    h.innerHTML = "save changes";
    a.appendChild(h);
    h.addEventListener("click", function() {
        d.innerHTML = "Password:  ********";
        h.classList.add("hidden");
        b.classList.remove("hidden");
        "" !== e.value && (this.grownupFirstName = e.value);
        "" !== f.value && (this.grownupLastName = f.value);
        "" !== g.value && (d.innerHTML = "Password: ********",
        g.classList.add("hidden"));
        this.grownupFirstName = this.grownupFirstName.charAt(0).toUpperCase() + this.grownupFirstName.substr(1).toLowerCase();
        this.grownupLastName = this.grownupLastName.charAt(0).toUpperCase() + this.grownupLastName.substr(1).toLowerCase();
        this.grownupDisplayName_ = this.grownupFirstName + " " + this.grownupLastName;
        c.innerHTML = "Name:  " + this.grownupDisplayName_;
        e.classList.add("hidden");
        f.classList.add("hidden")
    }
    .bind(this))
}
;
codepops.WelcomePage.prototype.getKidsProfileInfo = function(a, b) {
    var c = this.document_.getElementById("display-kid-name")
      , d = this.document_.getElementById("display-birthday")
      , e = this.document_.getElementById("display-gender")
      , f = this.document_.getElementById("icon-placeholder")
      , g = this.document_.getElementById("display-header-name")
      , h = this.document_.getElementById("linked-account-description")
      , l = this.document_.getElementById("current-grownup")
      , m = a.kidFirstName.charAt(0).toUpperCase() + a.kidFirstName.substr(1).toLowerCase();
    c.innerHTML = m;
    f.setAttribute("src", a.kidIconUrl);
    g.innerHTML = a.kidFirstName.charAt(0).toUpperCase() + a.kidFirstName.substr(1).toLowerCase();
    l.innerHTML = this.grownupDisplayName_;
    h.innerHTML = m + "'s Coding Account is linked to Grownup Accounts.";
    a.birthday && (d.innerHTML = a.birthday);
    a.gender && (e.innerHTML = a.gender);
    c = this.document_.getElementById("sub-type");
    d = this.document_.getElementById("sub-status");
    e = this.document_.getElementById("sub-date");
    f = this.document_.getElementById("sub-purchaser");
    b ? (c.innerHTML = subData.subscription,
    d.innerHTML = "Active",
    e.innerHTML = "October 18, 2018",
    f.innerHTML = "Scott L.") : (c = this.document_.getElementById("sub-info-table"),
    d = this.document_.getElementById("subscription-description-cell"),
    c.classList.add("hidden"),
    d.innerHTML = m + "'s Coding Account isn't linked to any Bitsbox subscriptions.",
    this.showDivPanel("link-subscription"))
}
;
codepops.WelcomePage.prototype.editKidsAccount = function() {
    var a = this.document_.getElementById("display-birthday")
      , b = this.document_.getElementById("display-kid-name")
      , c = this.document_.getElementById("display-gender")
      , d = this.document_.getElementById("kids-password-span")
      , e = this.document_.getElementById("kids-password")
      , f = this.document_.getElementById("birthday-span")
      , g = this.document_.getElementById("gender-span")
      , h = this.document_.getElementById("kids-edit-btn-div")
      , l = this.document_.getElementById("first-name")
      , m = this.document_.getElementById("edit-kids-info");
    m.classList.add("hidden");
    c.innerHTML = "";
    b.innerHTML = "";
    this.editKidsBtn.classList.add("hidden");
    e.innerHTML = "";
    a.innerHTML = "";
    var n = this.document_.createElement("span");
    n.setAttribute("method", "post");
    n.setAttribute("action", "/");
    n.id = "edit-kid-form";
    var p = this.document_.createElement("input");
    p.placeholder = "edit name";
    p.id = "new-kids-name-input";
    l.appendChild(p);
    var s = this.document_.createElement("input");
    s.placeholder = "new password";
    s.id = "new-grownup-password-input";
    d.appendChild(s);
    var q = this.document_.createElement("input");
    q.placeholder = "new password";
    q.id = "new-kids-password-input";
    q.name = "editKidBirthday";
    q.type = "date";
    f.appendChild(q);
    d = this.document_.createElement("input");
    d.placeholder = "edit gen";
    d.id = "new-kids-name-input";
    l.appendChild(p);
    var r = this.document_.createElement("input");
    r.setAttribute("type", "radio");
    r.setAttribute("class", "gender-radios");
    r.setAttribute("name", "gender");
    r.setAttribute("value", "girl");
    r.setAttribute("id", "gender-girl");
    g.appendChild(r);
    var u = this.document_.createElement("label");
    u.innerHTML = "Girl";
    g.appendChild(u);
    var v = this.document_.createElement("input");
    v.setAttribute("type", "radio");
    v.setAttribute("class", "gender-radios");
    v.setAttribute("name", "gender");
    v.setAttribute("value", "Boy");
    v.setAttribute("id", "gender-boy");
    g.appendChild(v);
    var A = this.document_.createElement("label");
    A.innerHTML = "Boy";
    g.appendChild(A);
    var z = this.document_.createElement("input");
    z.setAttribute("type", "radio");
    z.setAttribute("class", "gender-radios");
    z.setAttribute("name", "gender");
    z.setAttribute("value", "Other");
    z.setAttribute("id", "gender-other");
    g.appendChild(z);
    var B = this.document_.createElement("label");
    B.innerHTML = "Other";
    g.appendChild(B);
    var C = this.document_.createElement("span");
    C.className = "button-flat button-cta";
    C.id = "save-kids-edit-btn";
    C.innerHTML = "save changes";
    h.appendChild(C);
    C.addEventListener("click", function() {
        var d = p.value
          , f = new Date(q.value)
          , g = f.getMonth()
          , d = d.charAt(0).toUpperCase() + d.substr(1).toLowerCase();
        C.classList.add("hidden");
        this.editKidsBtn.classList.remove("hidden");
        m.classList.remove("hidden");
        b.innerHTML = d;
        p.classList.add("hidden");
        e.innerHTML = "********";
        s.classList.add("hidden");
        a.innerHTML = "Jan. Feb. March April May June July Aug. Sept. Oct. Nov. Dec.".split(" ")[g] + " " + f.getDay() + ", " + f.getFullYear();
        q.classList.add("hidden");
        f = this.getRadioVal("gender-radios", "gender");
        c.innerHTML = f;
        r.classList.add("hidden");
        v.classList.add("hidden");
        z.classList.add("hidden");
        u.classList.add("hidden");
        A.classList.add("hidden");
        B.classList.add("hidden")
    }
    .bind(this))
}
;
codepops.WelcomePage.prototype.showCodingPageLogin = function(a, b) {
    this.welcomeBackDiv.classList.contains("hidden") || this.welcomeBackDiv.classList.add("hidden");
    var c = this.document_.getElementById("duplicate-coding-account");
    c && c.remove();
    b && (this.legacyAccountEmail.innerHTML = "",
    c = this.document_.getElementById(b).cloneNode(!0),
    c.id = "duplicate-coding-account",
    this.legacyAccountEmail.parentNode.insertBefore(c, this.legacyAccountEmail));
    this.codingAccountSignInDiv.classList.remove("hidden");
    this.divCurrentlyBeingViewed = "coding-account-signin-div";
    this.codingPasswordInput.focus();
    this.currentCodingEmail_ = a
}
;
codepops.WelcomePage.prototype.chooseDifferentAccount = function() {
    this.document_.getElementById(this.divCurrentlyBeingViewed).classList.add("hidden");
    this.refreshForgotPasswordLink();
    this.grownupWithChildAccounts_ ? this.welcomeBackDiv.classList.remove("hidden") : this.welcomeDiv.classList.remove("hidden")
}
;
codepops.WelcomePage.prototype.showDivPanel = function(a) {
    this.document_.getElementById(a).classList.remove("hidden")
}
;
codepops.WelcomePage.prototype.hideDivPanel = function(a) {
    this.document_.getElementById(a).classList.add("hidden")
}
;
codepops.WelcomePage.prototype.getRadioVal = function(a, b) {
    for (var c = this.document_.getElementsByClassName(a), d, e = 0; e < c.length; e++)
        if (c[e].checked) {
            d = c[e];
            break
        }
    if (d)
        return d.value
}
;
codepops.WelcomePage.prototype.exitTray = function(a) {
    a.innerHTML = "";
    a.classList.add("hidden");
    this.showDivPanel("link-div")
}
;
codepops.WelcomePage.prototype.sendForgotPasswordEmail = function(a) {
    var b, c, d;
    "coding-account" === a ? (b = "forgot-kid-password",
    c = !0,
    d = this.currentCodingEmail_) : (b = "forgot-grownup-password",
    c = !1,
    d = this.currentGrownupEmail_);
    var e = this.document_.getElementById(b)
      , f = function() {
        var b;
        b = c ? this.document_.createTextNode("Sent password reset email to the Grownup account email associated with this coding account.") : this.document_.createTextNode("An email has been sent to " + d + ".");
        e.innerHTML = "";
        e.appendChild(b);
        setTimeout(function() {
            e.classList.add("fade-out");
            setTimeout(function() {
                var b = this.document_.createElement("a");
                b.href = "#";
                b.classList.add("forgot-password");
                b.onclick = function() {
                    this.sendForgotPasswordEmail(a)
                }
                .bind(this);
                b.innerHTML = "Send again";
                var c = this.document_.createTextNode("?");
                e.innerHTML = "";
                e.appendChild(b);
                e.appendChild(c);
                e.classList.remove("fade-out")
            }
            .bind(this), 500)
        }
        .bind(this), 4E3)
    }
    .bind(this)
      , g = function(a) {
        if (-1 < a.code.indexOf("auth/user-not-found")) {
            var b = codepops.friendlyBackendError_(a);
            a = this.document_.createElement("span");
            a.innerHTML = b
        } else if (-1 < a.message.indexOf("RESET_PASSWORD_EXCEED_LIMIT"))
            a = this.document_.createTextNode("You've exceeded the number of reset emails you're allowed to send.");
        else {
            console.error(a);
            a = this.document_.createElement("span");
            a.classList.add("error");
            a.innerHTML = "An error has occured.";
            var c = this.document_.createTextNode(" Contact ")
              , d = this.document_.createElement("a");
            d.href = "mailto:help@bitsbox.com";
            d.innerHTML = "help@bitsbox.com";
            var f = this.document_.createTextNode(".")
        }
        e.innerHTML = "";
        e.appendChild(a);
        c && (e.appendChild(c),
        e.appendChild(d),
        e.appendChild(f))
    }
    .bind(this);
    -1 < d.indexOf("%") && (d = d.replace("%2E", "."));
    d && d.length && (codepops.setContent(b, $t("Sending...")),
    this.dataStore_.sendPasswordResetEmail(d, f, g))
}
;
codepops.WelcomePage.prototype.refreshForgotPasswordLink = function() {
    var a, b, c;
    -1 < this.divCurrentlyBeingViewed.indexOf("coding") ? (a = this.document_.getElementById("forgot-kid-password"),
    b = "coding-account",
    c = this.document_.getElementById("coding-login-error-div")) : (a = this.document_.getElementById("forgot-grownup-password"),
    b = "grownup-account",
    c = this.document_.getElementById("grownup-login-error-div"));
    var d = this.document_.createTextNode("Did you ")
      , e = this.document_.createElement("a");
    e.href = "#";
    e.classList.add("forgot-password");
    e.onclick = function() {
        this.sendForgotPasswordEmail(b)
    }
    .bind(this);
    e.innerHTML = "forget your password";
    var f = this.document_.createTextNode("?");
    a.innerHTML = "";
    a.appendChild(d);
    a.appendChild(e);
    a.appendChild(f);
    c.innerHTML = ""
}
;
codepops.WelcomePage.prototype.generateRandomIconUrl = function() {
    var a = Math.floor(Math.random() * this.iconCollection_.length);
    return "/img/avatar/" + this.iconCollection_[a]
}
;
