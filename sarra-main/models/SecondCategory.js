const mongoose = require("mongoose");

const SecondCategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imgUrl: {
      type: String,
    },
    mainCategory: {
      type: mongoose.Types.ObjectId,
      ref: "MainCategory",
    },
  },
  { timestamps: true }
);

const SecondCategory = mongoose.model("SecondCategory", SecondCategorySchema);
module.exports = SecondCategory;
