const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true, useUnifiedTopology: true
}).catch(err => console.log(err))

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  expire: Date,
  tags: Array
})

var Product = mongoose.model('Product', productSchema)
module.exports = Product

