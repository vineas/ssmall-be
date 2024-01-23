const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart');

router
  .get("/", cartController.getAllCart)
  .post("/", cartController.createCart)
  .delete("/:id", cartController.deleteCart);

module.exports = router;