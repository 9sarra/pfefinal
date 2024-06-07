const { Types } = require("mongoose");
const Order = require("../models/orders");
const jwt = require("jsonwebtoken");

const saveOrders = async (req, resp, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return resp.sendStatus(401); // Unauthorized if no token is provided
    }
    try {
      const decodedToken = jwt.verify(token, 'net pfe secret');
      // Assuming the user ID is stored in the 'sub' or 'userId' field of the token payload
      const userId = decodedToken.sub || decodedToken.id;
      const res = await Order.create({orderDetails:req.body.orderDetails,userId});
      return resp.status(200).json({ res });
    } catch (err) {
        resp.status(500).json({ message: err.message });
    }
};
const getOrders = async (req, resp, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return resp.sendStatus(401); // Unauthorized if no token is provided
    }
    try {
      const decodedToken = jwt.verify(token, 'net pfe secret');
      // Assuming the user ID is stored in the 'sub' or 'userId' field of the token payload
      const userId = decodedToken.sub || decodedToken.id;
      const res = await Order.find({userId}).populate({
        path:'orderDetails.productId'
      });
      return resp.status(200).json({ res });
    } catch (err) {
        resp.status(500).json({ message: err.message });
    }
};
module.exports = {
    saveOrders,
    getOrders
  };