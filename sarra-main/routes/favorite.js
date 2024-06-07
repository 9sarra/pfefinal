var express = require("express");
var router = express.Router();
const {
    addFovrite,
    getFovrite,
    removeFovrite,
} = require("../contollers/favoriteController");

//const { use } = require('.');
router.post("/add-favorite", addFovrite);
router.get("/get-favorite", getFovrite);
router.delete("/edit-favorite/:id", removeFovrite);


module.exports = router;
