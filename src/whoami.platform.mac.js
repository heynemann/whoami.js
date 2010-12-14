//automatically registers Mac detection
whoami.register(whoami.type.platform, function(context) {
    if (/mac/.test(context.browserPlatform)) {
        context.platform = "mac";
    }
});
