// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

var whoami = {

    userAgent: navigator.userAgent.toLowerCase(),
    browserPlatform: navigator.platform.toLowerCase(),

    platform: {
        name: ''
    },

    browser: {
        name: ''
    },

    modules: {
        platform: [],
        browser: []
    },

    type: {
        platform: 'platform',
        browser: 'browser'
    },

    register: function(type, module) {
        this.modules[type].push(module);
    },

    detect: function(collection, property) {
        for (var i=0; i<collection.length; i++){
            collection[i].call(this);
        }
    },

    identify: function(){
        this.detect(this.modules.platform, 'platform');
        this.detect(this.modules.browser, 'browser');
    },

    setPlatformName: function(name) {
        this.platform.name = name;
        this.platform[name] = true;
    },

    helpers: {
        platform: {
            identifyFromPlatform: function(pattern, name) {
                var self = whoami;

                return function() {
                    if (pattern.test(self.browserPlatform)) {
                        self.setPlatformName(name);
                    }
                };
            },
            identifyFromUserAgent: function(pattern, name) {
                var self = whoami;

                return function() {
                    if (pattern.test(self.userAgent)) {
                        self.setPlatformName(name);
                    }
                };
            }
        }
    }

};
