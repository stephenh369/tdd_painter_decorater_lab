const assert = require("assert");
const Paint = require("../paint");

describe("Paint", function() {
    let paint;

    beforeEach(function() {
        paint = new Paint(15)
    })

    it("should have paint (litres)", function() {
        const actual = paint.litres;
        assert.strictEqual(actual, 15)
    });

    it("should say if empty", function() {
        paint.isEmpty;
        const actual = false;
        assert.strictEqual(actual, false);
    });
})