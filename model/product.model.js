const mongo = require("mongoose");

const productSchema = mongo.Schema(
  {
    modelName: {
      type: String,
      requied: true,
    },

    brandName: {
      type: String,
      requied: true,
    },

    price: {
      type: Number,
      requied: true,
      default: 0,
    },
    carType: {
      type: String,
      requied: true,
    },
    image: {
      type: String,
      requied: true,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongo.model("product", productSchema);

module.exports = product;
