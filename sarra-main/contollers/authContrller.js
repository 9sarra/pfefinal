const { Types } = require("mongoose");
const userModel = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const maxAge = 2 * 60 * 60000000000;

const createToken = (id) => {
  return jwt.sign({ id }, "net pfe secret", {
    expiresIn: maxAge,
  });
};

module.exports.signupclient = async (req, res) => {
  const { email, password, name } = req.body;

  const role = "client";

  try {
    if (!email) {
      return res.status(200).json({ message: "email not found" });
    }
    const checkIfUserExists = await userModel.findOne({ email });
    if (checkIfUserExists) {
      return res.status(200).json({ message: "email exists deja" });
    }

    const user = await userModel.create({
      password,
      email,
      role,
      fullName: name,
    });
    //  sendWelcomeEmail(email, name);
    const token = createToken(user._id);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.userProfile = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  const decoded = jwt.verify(token.split(" ")[1], "net pfe secret");
  const userId = decoded.id;
  try {
    const user = await userModel.findOne({ _id: new Types.ObjectId(userId) });
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.logout = async (req, res) => {
  try {
    res.cookie("jwt_token", "", { httpOnly: false, maxAge: 1 });
    req.session.destroy();
    res.status(200).json({ message: "User saccessfully logged out" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login(email, password);
    /*
      const updatedUser = await userModel.findByIdAndUpdate(user._id, {
          $set: {
            statu: true,
            visitsCount: user.visitsCount +1 ,
          },
        }, { new: true } // Set the { new: true } option to return the updated user
      )*/
    //sendWelcomeEmail(email, nom);
    const token = createToken(user._id);
    res.cookie("jwt_token", token, { httpOnly: false, maxAge: maxAge * 1000 });
    //req.session.user = user;
    //console.log(req.session);
    res.status(200).json({
      message: "User successfully authenticated",
      user: user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      erreur: error.message,
    });
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const userList = await userModel.find();

    res.status(200).json({ userList });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.addUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { nom, prenom, age, address } = req.body;
    const user = new userModel({
      nom,
      prenom,
      age,
      address,
    });
    const useradded = await user.save();
    res.status(200).json(useradded);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getUserByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      throw new Error("user not found");
    }
    // console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const checkIfUserExists = await userModel.findById(id);
    if (!checkIfUserExists) {
      throw new Error("user not found");
    }
    await userModel.findByIdAndDelete(id);
    res.status(200).json("deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nom, prenom, age, address } = req.body;
    const checkIfUserExists = await userModel.findById(id);
    if (!checkIfUserExists) {
      throw new Error("user not found");
    }
    updated = await userModel.findByIdAndUpdate(
      id,
      {
        $set: { nom, prenom, age, address },
      },
      { new: true }
    );
    res.status(200).json("updated");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.addClient = async (req, res) => {
  const { filename } = req.file;
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(200).json({ message: "Email required" });
    }
    if (!filename) {
      return res.status(200).json({ message: "filename required" });
    }
    if (!password) {
      return res.status(200).json({ message: "password required" });
    }
    const user = new userModel({
      password,
      email,
      image_user: filename,
    });
    const useradded = await user.save();
    res.status(200).json(useradded);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
