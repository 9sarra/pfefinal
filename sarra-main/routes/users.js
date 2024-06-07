var express = require("express");
var router = express.Router();
const auth = require("../contollers/authContrller");
const upload = require("../middlewares/uploadFile");
const { requireAuthUser } = require("../middlewares/authMiddlewares");
//const { use } = require('.');
router.get("/me", auth.userProfile);
router.get("/", auth.getUser);
router.get("/logOut", requireAuthUser, auth.logout);
router.get("/:id", auth.getUserByID);

router.post("/", auth.addUser);

router.post("/addClient", upload.single("image_user"), auth.addClient);
router.post("/register", auth.signupclient);
router.post("/login", auth.login);

router.delete("/:id", auth.deleteUser);
router.put("/:id", auth.updateUser);

module.exports = router;
