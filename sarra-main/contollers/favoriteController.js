const { Types } = require("mongoose");
const Favorite = require("../models/favorite");
const jwt = require("jsonwebtoken");

const addFovrite = async (req, resp, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return resp.sendStatus(401); // Unauthorized if no token is provided
    }
    try {
      const decodedToken = jwt.verify(token, 'net pfe secret');
      // Assuming the user ID is stored in the 'sub' or 'userId' field of the token payload
      const userId = decodedToken.sub || decodedToken.id;
      const res = await Favorite.create({prodId:req.body.prodId,userId});
      return resp.status(200).json({ res });
    } catch (err) {
        resp.status(500).json({ message: err.message });
    }
};
const getFovrite = async (req, resp, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return resp.sendStatus(401); // Unauthorized if no token is provided
    }
    try {
        const decodedToken = jwt.verify(token, 'net pfe secret');
      // Assuming the user ID is stored in the 'sub' or 'userId' field of the token payload
      const userId = decodedToken.sub || decodedToken.id;
      const res = await Favorite.find({userId}).populate('prodId')
      return resp.status(200).json({ res });
    } catch (err) {
      resp.status(500).json({ message: err.message });
    }
};
const removeFovrite = async (req, resp, next) => {
    const {id}=req.params
    try {
        const res = await Favorite.findByIdAndDelete({_id:new Types.ObjectId(id)});
        return resp.status(200).json({ res });
    } catch (err) {
      resp.status(500).json({ message: err.message });
    }
};
module.exports = {
    addFovrite,
    getFovrite,
    removeFovrite
  };