const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");
const Room = require("../room");

describe("Decorator", function() {
    let decorator;
    let paint1;
    let paint2;
    let paints;
    let room;

    beforeEach(function() {
        paint1 = new Paint(15);
        paint2 = new Paint(10);
        paints = [paint1, paint2]
        decorator = new Decorator();
        room = new Room(15);
    });

    it("should add paint", function() {
        decorator.addPaint(paint1);
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [paint1]);
    });

    it("should add paint litres", function() {
        decorator.addPaint(paint1);
        const actual = decorator.paintLitres;
        assert.strictEqual(actual, 15);
    });

    it("should return paint litres", function() {
        const actual = decorator.paintLitres;
        assert.strictEqual(actual, 0);
    });

    it("should determine if room can be painted", function() {
        decorator.addPaint(paint1);
        const actual = decorator.canPaintRoom(room);
        assert.strictEqual(actual, true);
    });

    it("should paint room", function() {
        decorator.addPaint(paint1);
        const actual = decorator.paintRoom(room);
        assert.strictEqual(actual, true);
    });

    it("should decrease paint", function() {
        decorator.addPaint(paint1);
        decorator.paintRoom(room);
        const actual = decorator.paintLitres;
        assert.strictEqual(actual, 0);

    });

});