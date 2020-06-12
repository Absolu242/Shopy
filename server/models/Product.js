const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema (
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    images: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      maxLength: 50
    },

    description: {
      type: String,
      maxLength: 150
    },

    sizes: {
      type: Array,
      default: []
    },

    quantity: {
      type: Number,
      default: 1
    },

    price: {
      type: Number,
      default: 0
    },
    categories: {
      type: Array,
      default: []
    },

    type:{
      type:String,
      default: []
    }

    brand: {
      type: Array,
      default: []
    },
    
    color:{
        type: Array,
        default: []
    },

    like: {
      type: Boolean,
      default: false
    },
    featured: false
  },
  {timestamp: true}
);

productSchema.index (
  {
    title: 'text',
    description: 'text'
  },
  {
    weights: {
      title: 5,
      description: 1
    },
  }
);

const Product = mongoose.model ('Product', productSchema);

module.exports = {Product};
