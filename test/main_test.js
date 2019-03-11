
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Item = require("../models/Item");

describe('Item', function() {
  it('Create a Item', function() {
    var item = new Item({
      name: 'test',
      imagen: 'test.jpg',
      total: 10,
    });

    item.save(function(err){
        expect(err).to.equal('');
    });
  });
});
