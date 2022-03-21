const mongoose = require('mongoose');

const { Schema } = mongoose;

const CustomerSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: 'لطفاً محصول را وارد کنید.',
    },
    price: {
      type: Number,
      required: '.قیمت فروش را وارد کنید'
    }
  }
)

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = { Customer, CustomerSchema };