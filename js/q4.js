var data = require('../products.json')
var items = data.items

var productCanon = []

for (var counter = 0; counter < items.length; counter++ )
{
  var brands = items[counter].product.brand

  if(brands === 'Canon'){
    productCanon.push(items[counter].product.title)


}
}
console.log(productCanon);
