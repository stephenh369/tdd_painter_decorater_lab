const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");
const Room = require("../room");

describe("Decorator", function() {
    let decorator;
    let paint;

    beforeEach(function() {
        paint1 = new Paint(15);
        paint2 = new Paint(10);
        paints = [paint1, paint2]
        decorator = new Decorator();
    });

    it("should add paint", function() {
        decorator.addPaint(paint1);
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [paint1]);
    });

});