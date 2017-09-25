var data = require('../products.json')
var items = data.items

for (var i = 0; i < items.length; i++) {

console.log('Brand : ' + items[i].product.brand + ' | Price: $' +  items[i].product.inventories[0].price + ' | Images: ' + items[i].product.images[0].link);

}
