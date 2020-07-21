const assert = require("assert");
const Room = require("../room");

describe("Room", function() {
    let room;

    beforeEach(function() {
        room = new Room(15)
    })

    it("should have area (meters squared)", function() {
        const actual = room.area;
        assert.strictEqual(actual, 15)
    });
})