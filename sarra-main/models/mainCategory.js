const mongoose = require("mongoose");

const MainCategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imgUrl: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const MainCategory = mongoose.model("MainCategory", MainCategorySchema);
module.exports = MainCategory;
