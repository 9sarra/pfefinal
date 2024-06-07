var express = require("express");
var router = express.Router();
const {
    saveOrders,
    getOrders
} = require("../contollers/orders.controller");

//const { use } = require('.');
router.post("/save-order", saveOrders);

router.get("/get-order", getOrders);

module.exports = router;
