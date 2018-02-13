const ShoppingBasket = function() {
  this.items = [];
};

ShoppingBasket.prototype.lengthOfItemArray = function() {
    return this.items.length;
}

module.exports = ShoppingBasket;
