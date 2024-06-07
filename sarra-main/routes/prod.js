var express = require("express");
var router = express.Router();
const upload = require("../middlewares/uploadFile");
const {
  getCategories,
  getProdProductionByMainCategory,
  getProdProductionBySecondCategory,
  getProdProductionByThirdCategory,
  addMainCategory,
  getMainCategory,
  addSecondCategory,
  getSecondCategory,
  addThirdCategory,
  getThirdCategory,
  getprod,
  addprod,
  getprodByID,
  deleteprod,
  updateprod,
} = require("../contollers/prodController");

//const { use } = require('.');
router.get("/get-main-category", getMainCategory);
router.get("/getProd/all/of/the/admin/all", getprod);
router.get("/:id", getprodByID);

router.post("/", addprod);
// // router.post('/addClient',upload.single("image_user"),auth.addClient );
router.get(
  "/production/for/user/add/test/main/category/:id",
  getProdProductionByMainCategory
);
router.delete("/:id", deleteprod);
router.put("/:id", updateprod);

router.post("/create-main-category", upload.single("file"), addMainCategory);

router.post("/createSecondCategory", addSecondCategory);
router.get("/getSecond/category", getSecondCategory);
router.post("/createThirdCategory", upload.single("file"), addThirdCategory);
router.get("/getThird/Category/List", getThirdCategory);
router.get("/all/getCategories/products", getCategories);
router.post(
  "/create/getCategories/products/one",
  upload.single("file"),
  addprod
);

router.get(
  "/prod/production/for/user/add/test/second/:id",
  getProdProductionBySecondCategory
);
router.get(
  "/prod/production/for/user/add/test/third/add/:id",
  getProdProductionByThirdCategory
);

module.exports = router;
