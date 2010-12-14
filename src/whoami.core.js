// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

var whoami = {
    platform: null,
    browser: null,

    type: {
        platform: "platform",
        browser: "browser"
    },

    init: function() {
        this.platform = null;
        this.browser = null;
        this.clearModules();
    },

    clearModules: function() {
        this.modules = {
            platform: [],
            browser: []
        }
    },

    register: function(type, module) {
        this.modules[type].push(module);
    },

    identify: function(){
        var context = {
            context: null,
            platform: null,
            userAgent: navigator.userAgent.toLowerCase(),
            browserPlatform: navigator.platform.toLowerCase()
        };

        //platform
        for (var i=0; i<this.modules.platform.length; i++){
            var module = this.modules.platform[i];
            module(context);
        }

        //browser
        for (var i=0; i<this.modules.browser.length; i++){
            var module = this.modules.browser[i];
            module(context);
        }

        this.browser = context.browser;
        this.platform = context.platform;
    }
};

whoami.init();
