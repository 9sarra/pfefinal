const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
  {
    prodId: { type: mongoose.Types.ObjectId,ref:'Prod'},
    userId: { type: mongoose.Types.ObjectId,ref:'User'},
  },
  { timestamps: true }
);

const Favorite = mongoose.model("favorite", FavoriteSchema);
module.exports = Favorite;