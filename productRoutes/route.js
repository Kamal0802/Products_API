const express = require("express");

const router = express.Router();

const productController = require("../contollers/product.contoller");

const {
  addProduct,
  getProductById,
  deleteProduct,
  editproduct,
  getAllproducts
} = productController;

// post a product
router.post("/", addProduct);

// get all products
router.get("/", getAllproducts);

// get product by Id

router.get("/:id", getProductById);

// delete product

router.delete("/:id", deleteProduct);

// edit procuts by id

router.put("/:id", editproduct);

module.exports = router;
