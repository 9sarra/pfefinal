const mongoose = require("mongoose");

const ThirdCategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    mainCategory: {
      type: mongoose.Types.ObjectId,
      ref: "SecondCategory",
    },
  },
  { timestamps: true }
);

const ThirdCategory = mongoose.model("ThirdCategory", ThirdCategorySchema);
module.exports = ThirdCategory;
