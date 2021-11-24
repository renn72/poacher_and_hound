import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const priceSchema = mongoose.Schema({
  price: {
    type: Number,
    required: true,
    default: 0,
  },
})

const sizeSchema = mongoose.Schema({
  size: {
    type: String,
    required: true,
    default: 0,
  },
})

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: [
      {
        type: String,
        required: true,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    prices: [
      {
        type: Number,
        required: true,
        default: 0,
      },
    ],
    sizes: [
      {
        type: String,
        required: true,
        default: 0,
      },
    ],
    unitsPerSize: [
      {
        type: Number,
        required: true,
        default: 0,
      },
    ],
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
    listOrder: {
      type: Number,
      require: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 999,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
