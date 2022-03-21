const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: 'اسم کالا را به صورت فارسی وارد کنید.',
  },
  price: {
    type: Number,
    required: 'لطفاً قیمت این محصول را به تومان وارد کنید.'
  },
  stock: {
    type: Number,
  }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product, ProductSchema }