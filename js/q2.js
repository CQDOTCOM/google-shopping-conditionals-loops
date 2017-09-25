var data = require('../products.json')
var items = data.items

// var firstItem = items[0]
//
//
// // console.log(firstItem['product']['title']);

for (var counter = 0; counter < items.length; counter++)
{
  var item = items[counter]
  var availability = item.product.inventories[0].availability

  if(availability === 'backorder'){
    console.log(item.product.title, availability);
  }

}

var item = items[0]
