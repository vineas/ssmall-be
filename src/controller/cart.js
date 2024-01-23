const { v4: uuidv4 } = require("uuid");
let {
  selectAllCart,
  insertCart,
  deleteCart,
  findUUID
} = require("../model/cart");
const commonHelper = require("../helper/common");

let cartController = {
  getAllCart: async (req, res) => {
    try {
      const result = await selectAllCart();
      commonHelper.response(res, result.rows, 200, "Get data success");
    } catch (error) {
      console.log(error);
    }
  },


  createCart: async (req, res) => {
    const {
      product_id,
    } = req.body;
    const cart_id = uuidv4();
    const data = {
      cart_id,
      product_id,
    };
    insertCart(data)
      .then((result) =>
        commonHelper.response(res, result.rows, 201, "Cart created")
      )
      .catch((err) => res.send(err));
  },

  deleteCart: async (req, res, next) => {
    try {
      const cart_id = String(req.params.id);
      const { rowCount } = await findUUID(cart_id);
      if (!rowCount) {
        return next(createError(403, "ID is Not Found"));
      }
      await deleteCart(cart_id);
      commonHelper.response(res, {}, 200, "Cart deleted");
    } catch (error) {
      next(error);
    }
  },

  
  
};

module.exports = cartController;