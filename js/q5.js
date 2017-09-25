var data = require('../products.json')
var items = data.items

var ecItems = []

for(var i = 0; i < items.length; i++)
{

  if(items[i].product.author.name == 'eBay' && items[i].product.brand == 'Canon')
  {
    ecItems.push(items[i].product.title)
  }

}

console.log(ecItems);
