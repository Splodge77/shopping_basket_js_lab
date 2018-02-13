const ShoppingBasket = function() {
  this.items = [];
};

ShoppingBasket.prototype.lengthOfItemArray = function() {
    return this.items.length;
}

ShoppingBasket.prototype.addItem = function(item){
  this.items.push(item);
}

ShoppingBasket.prototype.removeItem = function(item){
  const removedItem = this.items.indexOf(item);
  this.items.splice(removedItem, 1);
}

module.exports = ShoppingBasket;
