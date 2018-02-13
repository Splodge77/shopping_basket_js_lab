const assert = require('assert');
const ShoppingBasket = require('../shopping_basket.js')

describe('ShoppingBasket', function(){

  let shopping_basket;

  beforeEach(function(){
    shopping_basket = new ShoppingBasket();
  });

  it('should start with and empty item array', function (){
    const actual = shopping_basket.lengthOfItemArray();
    assert.strictEqual(actual, 0);
  })
});
