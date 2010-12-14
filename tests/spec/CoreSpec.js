describe("Core", function() {
    it("should be able to use the whoami object", function() {
        expect(whoami).toBeDefined();
    });

    it("should be able to retrieve registered modules", function() {
        expect(whoami.modules).toBeDefined();
    });

    describe("when no module included", function() {

        beforeEach(function() {
            whoami.clearModules();
        });

        it("should be able to handle platform property", function() {
            expect(whoami.platform).toBeNull();
        });

        it("should be able to handle os property", function() {
            expect(whoami.os).toBeNull();
        });

        it("should be able to handle browser property", function() {
            expect(whoami.browser).toBeNull();
        });

    });
});

describe("platforms", function() {

    it("should have mac registered automatically", function() {
        expect(whoami.modules).toContain(macModule);
    });

});
