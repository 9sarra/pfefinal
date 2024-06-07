const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Prod = require("./proMosel");

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    age: Number,
    address: String,
    etat: Boolean,
    image_user: { type: String, require: false },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: {
      type: String,
      enum: ["admin", "client"],
    },
    prods: [{ type: mongoose.Schema.Types.ObjectId, ref: "Prod" }],
  },
  { timestamps: true }
);

userSchema.post("save", function (req, res, next) {
  console.log("new user was created & saved");
  next();
});

//avant la creation
userSchema.pre("save", async function (next) {
  try {
    //cryptage password + statu + createdAt et updatedAt
    const salt = await bcrypt.genSalt();
    const User = this;
    User.password = await bcrypt.hash(this.password, salt);
    User.createdAt = new Date();
    User.updatedAt = new Date();
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      // if (user.etat === true) {
      return user;
      /*} else {
            throw new Error('compte desactive')
          }*/
    }
    throw new Error("incorrect password");
  }
  throw Error("incorrect email");
};

const User = mongoose.model("User", userSchema);
module.exports = User;
