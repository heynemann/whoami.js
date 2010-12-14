// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

var whoami = {
    platform: null,
    os: null,
    browser: null,

    init: function() {
        this.clearModules();
    },

    clearModules: function() {
        this.modules = {
            platform: [],
            os: [],
            browser: []
        }
    }
};

whoami.init();
