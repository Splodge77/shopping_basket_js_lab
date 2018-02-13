const assert = require('assert');
const ShoppingBasket = require('../shopping_basket.js')
const Item = require('../item.js')

describe('ShoppingBasket', function(){

  let shopping_basket;
  let item;

  beforeEach(function(){
    shopping_basket = new ShoppingBasket();
    item = new Item('Banana', 0.30);
  });

  it('should start with and empty item array', function (){
    const actual = shopping_basket.lengthOfItemArray();
    assert.strictEqual(actual, 0);
  });
  it('should be able to add an item', function(){
    shopping_basket.addItem(item);
    const actual = shopping_basket.lengthOfItemArray();
    assert.strictEqual(actual, 1);
  });
});
