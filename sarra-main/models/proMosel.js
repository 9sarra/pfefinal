const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    imgUrl: { type: String, required: true },
    coupon: {
      type: String,
      default: null,
    },
    loyaltyPoints: {
      type: String,
      default: null,
    },
    mainCategory: {
      type: mongoose.Types.ObjectId,
      ref: "MainCategory",
    },
    secondCategory: {
      type: mongoose.Types.ObjectId,
      ref: "SecondCategory",
    },
    thirdCategory: {
      type: mongoose.Types.ObjectId,
      ref: "ThirdCategory",
    },
  },
  { timestamps: true }
);

const Prod = mongoose.model("Prod", prodSchema);
module.exports = Prod;
