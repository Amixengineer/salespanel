const mongoose = require('mongoose');

const { Schema } = mongoose;

const CreditSchema = new Schema(
  {
    fullName: {
      type: String,
      required: 'لطفاً نام و نام خانوادگی مشتری را وارد کنید.',
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: 'محصول نسیه داده شده را انتخاب کنید.',
    },
    price: {
      type: Number,
      required: 'قیمت نسیه را به تومان وارد کنید.'
    }
  }
)

const Credit = mongoose.model('Credit', CreditSchema);

module.exports = { Credit, CreditSchema }