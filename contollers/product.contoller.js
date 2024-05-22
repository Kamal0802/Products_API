const model = require("../model/product.model");

const getAllproducts = async (req, res) => {
  try {
    const product = await model.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messege: err.messege });
  }
};

const addProduct = async (req, res) => {
  try {
    const newDocument = new model(req.body); 
        await newDocument.save();
    res.status(201).json(newDocument);
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
};

const getProductById = async (req, res) => {
  try {
    let { id } = req.params;
    const product = await model.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messege: err.messege });
  }
};

const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    await model.findByIdAndDelete(id);

    if (!model) {
      res.status(404).json({ messege: "product not found" });
    }

    res.status(200).json({ messge: "product deleted successfully" });
  } catch (err) {
    res.status(500).json({ messege: err.messege });
  }
};

const editproduct = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await model.findByIdAndUpdate(id, req.body);

    if (!product) {
      res.status(404).json({ messege: "product Not found" });
    }

    let updatedProduct = await model.findById(id);

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ messege: err.messege });
  }
};
module.exports = {
  getAllproducts,
  addProduct,
  getProductById,
  deleteProduct,
  editproduct,
};
