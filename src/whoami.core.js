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

        var detect = function(collection, context, property) {
            for (var i=0; i<collection.length; i++){
                var module = collection[i];
                var detected = module(context);

                if (context[property]) {
                    break;
                }
            }
        };

        detect(this.modules.platform, context, 'platform');
        detect(this.modules.browser, context, 'browser');

        this.browser = context.browser || null;
        this.platform = context.platform || null;
    },

    helpers: {
        platform: {
            identifyFromPlatform: function(regex, name) {
                var pattern = regex;
                return function(context) {
                    if (pattern.test(context.browserPlatform)) {
                        context.platform = name;
                    }
                };
            },
            identifyFromUserAgent: function(regex, name) {
                var pattern = regex;
                return function(context) {
                    if (pattern.test(context.userAgent)) {
                        context.platform = name;
                    }
                };
            }
        }
    }
};

whoami.init();
