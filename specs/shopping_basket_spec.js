const assert = require('assert');
const ShoppingBasket = require('../shopping_basket.js')
const Item = require('../item.js')

describe('ShoppingBasket', function(){

  let shopping_basket;
  let item;

  beforeEach(function(){
    shopping_basket = new ShoppingBasket();
    item = new Item('Banana', 0.30);
    item2 = new Item('Jellybeans', 1.00);
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
  it('item has name', function(){
    const actual = item.name;
    assert.strictEqual(actual, 'Banana')
  });
  it('item has price', function(){
    const actual = item.price;
    assert.strictEqual(actual, 0.30);
  });
  it('item starts bogof false', function(){
    const actual = item.bogof;
    assert.strictEqual(actual, false);
  });
  it('can add multiple items to shopping basket', function() {
    shopping_basket.addItem(item);
    shopping_basket.addItem(item2);
    const actual = shopping_basket.lengthOfItemArray();
    assert.strictEqual(actual, 2);
  });
});
