const Decorator = function() {
    this.paintStock = [];
    this.paintLitres = 0;
}

Decorator.prototype.addPaint = function(paint) {
    this.paintStock.push(paint);
    this.paintLitres += paint.litres;
};

module.exports = Decorator;