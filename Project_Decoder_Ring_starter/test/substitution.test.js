const substitutionModule = require('../src/substitution');
const substitution = require('../src/substitution');
const expect = require('chai').expect;


describe("substitution", () => {
    it("Returns false if the given alphabet is not 26 characters long", () => {
        const expected = false;
        const actual = substitutionModule.substitution("hello world", "hioksvocanme");
        expect(actual).to.equal(expected);
    })
    it("Translates the phrase, based on the given alphabet", () => {
        const expected = "ykrrpik";
        const actual = substitutionModule.substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    })
    it("Returns false if there are any duplicate characters in the given alphabet", () => {
        const expected = false;
        const actual = substitutionModule.substitution("hello world", "plmoknijbuhvygctfxrdzeswaa");
        expect(actual).to.equal(expected);
    })
    it("Maintains spaces in the message, when encoded and decoded", () => {
        const expected = "hello world";
        const actual = substitutionModule.substitution("jkvvc scxvo", "plmoknijbuhvygctfxrdzeswaq", false);
        expect(actual).to.equal(expected);
    })
    it("Ignores capital letters", () => {
        const expected = "jkvvc scxvo";
        const actual = substitutionModule.substitution("HELLO WORLD", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    })
});
