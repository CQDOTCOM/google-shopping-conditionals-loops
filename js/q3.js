var data = require('../products.json')
var items = data.items

for (var counter = 0; counter < items.length; counter++)
{
  var item = items[counter]
  var title = item.product.title
  var image = item.product.images

  if(image.length > 1 ){
    console.log(title);
  }

}
