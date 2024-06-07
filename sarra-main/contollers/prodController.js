const prodModel = require("../models/proMosel");
const User = require("../models/userSchema");
const userModel = require("../models/userSchema");
const Types = require("mongoose");
const MainCategoryModel = require("../models/mainCategory");
const SecondCategoryModal = require("../models/SecondCategory");
const ThirdCategoryModal = require("../models/ThirdCategory");
const MainCategory = require("../models/mainCategory");
const getprod = async (req, resp, next) => {
  try {
    const res = await prodModel.find({});
    return resp.status(200).json({ res });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getProdProductionByMainCategory = async (req, resp, next) => {
  try {
    const { id } = req.params;
    const data = await prodModel.find({ mainCategory: id });

    return resp.status(200).json({ data });
  } catch (err) {
    console.log("err.message : ", err.message);
  }
};
const getProdProductionBySecondCategory = async (req, resp, next) => {
  try {
    const id = req.body.params;
    const data = await prodModel.find({ secondCategory: id });

    return resp.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getProdProductionByThirdCategory = async (req, resp, next) => {
  try {
    const id = req.body.params;
    const data = await prodModel.find({
      thirdCategory: new Types.ObjectId(id),
    });

    return resp.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const addprod = async (req, res, next) => {
  try {
    const {
      title,
      price,
      coupon,
      loyaltyPoints,
      mainCategory,
      secondCategory,
      thirdCategory,
    } = req.body;
    const prod = new prodModel({
      title,
      price,
      coupon,
      imgUrl: req.file.filename,
      loyaltyPoints,
      mainCategory,
      secondCategory,
      thirdCategory,
    });
    const prodadded = await prod.save();
    res.status(200).json(prodadded);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addMainCategory = async (req, res, next) => {
  try {
    MainCategoryModel.create({
      title: req.body.title,
      imgUrl: req.file.filename,
    });
    res.status(200).json({
      message: "added !",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getMainCategory = async (req, res, next) => {
  try {
    const mainCategories = await MainCategoryModel.find({});
    res.status(200).json({
      message: "added !",
      mainCategories,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addSecondCategory = async (req, res, next) => {
  try {
    await SecondCategoryModal.create({
      title: req.body.title,
      mainCategory: req.body.mainCategoryId,
    });
    res.status(200).json({
      message: "added !",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getSecondCategory = async (req, resp, next) => {
  try {
    const res = await SecondCategoryModal.find().populate("mainCategory");
    resp.status(200).json({
      message: "added !",
      res,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const addThirdCategory = async (req, res, next) => {
  try {
    await ThirdCategoryModal.create({
      title: req.body.title,
      mainCategory: req.body.secondCategoryId,
    });
    res.status(200).json({
      message: "added !",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getThirdCategory = async (req, resp, next) => {
  try {
    const res = await ThirdCategoryModal.find().populate("mainCategory");
    resp.status(200).json({
      message: "added !",
      res,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getprodByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prod = await prodModel.findById(id);
    if (!prod) {
      throw new Error("prod not found");
    }

    res.status(200).json(prod);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteprod = async (req, res, next) => {
  try {
    const { id } = req.params;
    const checkIfProdExists = await prodModel.findById(id);
    if (!checkIfProdExists) {
      throw new Error("prod not found");
    }
    await prodModel.findByIdAndDelete(id);
    await User.updateMany({}, { $pull: { cars: prod._id } });
    res.status(200).json("deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateprod = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { brand, model, prix, owner } = req.body;
    const checkIfProdExists = await prodModel.findById(id);
    if (!checkIfProdExists) {
      throw new Error("prod not found");
    }
    updated = await prodModel.findByIdAndUpdate(
      id,
      {
        $set: { brand, model, prix, owner },
      },
      { new: true }
    );
    res.status(200).json("updated");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getCategories = async (req, res, next) => {
  try {
    const data = await MainCategoryModel.find({});
    const newData = [];
    let el = {};
    for (i = 0; i < data.length; i++) {
      el = {};
      const secondData = await SecondCategoryModal.find({
        mainCategory: data[i]._id,
      });
      el._id = data[i]?._id;
      el.icon = data[i]?.imgUrl;
      el.title = data[i]?.title;
      el.href = `/${data[i].title}`;
      el.menuComponent = `MegaMenu1`;

      const category = [];
      if (secondData.length > 0) {
        for (j = 0; j < secondData.length; j++) {
          const newEl = {};
          newEl._id = secondData[j]?._id;
          newEl.title = secondData[j]?.title;
          newEl.href = "/product/search/man-clothes";
          const thirdData = await ThirdCategoryModal.find({
            mainCategory: secondData[j]?._id,
          });
          const subCategories = [];
          if (thirdData.length > 0) {
            for (k = 0; k < thirdData.length; k++) {
              subCategories.push({
                _id: thirdData[k]?._id,
                title: thirdData[k]?.title,
                href: "/product/search/shirt",
                imgUrl: thirdData[k]?.imgUrl,
              });
            }
          }

          newEl.subCategories = subCategories;
          (newEl.rightImage = {
            imgUrl: "/assets/images/promotion/offer-1.png",
            href: "/sale-page-1",
          }),
            category.push(newEl);
        }
      }

      el.menuData = { categories: category };
      newData.push(el);
    }
    console.log(newData);
    res.status(200).json({ newData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getprod,
  getProdProductionByMainCategory,
  getProdProductionBySecondCategory,
  getProdProductionByThirdCategory,
  getCategories,
  getMainCategory,
  addSecondCategory,
  getSecondCategory,
  addThirdCategory,
  getThirdCategory,
  addprod,
  getprodByID,
  deleteprod,
  updateprod,
  addMainCategory,
};
