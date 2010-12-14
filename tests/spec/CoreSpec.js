describe("upon load", function() {
    it("should have mac registered automatically", function() {
        expect(whoami.modules.platform.length).toBeGreaterThan(0);
    });

});

describe("Mac Platform", function() {
    it("should find if mac found", function() {
        whoami.identify();

        expect(whoami.platform).toEqual("mac");
    });
});

describe("Core", function() {
    it("should be able to use the whoami object", function() {
        expect(whoami).toBeDefined();
    });

    it("should be able to retrieve registered modules", function() {
        expect(whoami.modules).toBeDefined();
    });

    describe("upon register", function() {
        it("should be able to have a registered function in platform", function() {
            var func = function(context) { };
            whoami.register(whoami.type.platform, func);
            expect(whoami.modules.platform).toContain(func);
        });
    });

    describe("when no module included", function() {

        beforeEach(function() {
            whoami.init();
        });

        it("should be able to handle platform property", function() {
            expect(whoami.platform).toBeNull();
        });

        it("should be able to handle browser property", function() {
            expect(whoami.browser).toBeNull();
        });

    });
});

