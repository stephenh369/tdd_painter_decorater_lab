const Decorator = function() {
    this.paintStock = [];
    this.paintLitres = 0;
}

Decorator.prototype.addPaint = function(paint) {
    this.paintStock.push(paint);
    this.paintLitres += paint.litres;
};

Decorator.prototype.removePaint = function(paint) {
this.paintStock.splice(this.paintStock.indexOf(paint), 1);
this.paintLitres -= paint.litres;
};

Decorator.prototype.removeEmptyPaint = function(paint) {
    if (paint.litres === 0) {
    this.paintStock.splice(this.paintStock.indexOf(paint), 1);
    this.paintLitres -= paint.litres;
    }
};

Decorator.prototype.canPaintRoom = function(room) {
    if (this.paintLitres >= room.area) {
        return true;
    }
    return false;
};

Decorator.prototype.paintRoom = function(room) {
    if (this.paintLitres >= room.area) {
        this.paintLitres -= room.area;
        return room.painted = true;
    };
};

module.exports = Decorator;