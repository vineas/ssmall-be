const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const upload = require('../middleware/upload')

router
  .get("/", productController.getAllProduct)
  .get("/:id", productController.getDetailProduct)
  .post("/",  upload, productController.productCreate)
  .put("/:id",  upload, productController.updateProduct)
  .delete("/:id",  productController.deleteProduct);
  
module.exports = router;