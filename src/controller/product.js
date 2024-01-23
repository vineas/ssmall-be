let {
    selectAllProduct,
    selectProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
    countData,
    findUUID,
} = require("../model/product");
const { v4: uuidv4 } = require("uuid");
const createError = require("http-errors");
const commonHelper = require("../helper/common");
const cloudinary = require('../middleware/cloudinary');

let productController = {

    getAllProduct: async (req, res) => {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 100;
            const offset = (page - 1) * limit;
            const sortby = req.query.sortby || 'product_id';
            const sort = req.query.sort || "DESC";
            const result = await selectAllProduct({ limit, offset, sortby, sort });
            commonHelper.response(res, result.rows, 200, "get data success");
        } catch (error) {
            console.log(error);
        }
    },

    getDetailProduct: async (req, res) => {
        const product_id = String(req.params.id);
        selectProduct(product_id)
            .then((result) =>
                commonHelper.response(res, result.rows, 200, "get data success")
            )
            .catch((err) => res.send(err));
    },


    productCreate: async (req, res) => {
        try {
            let product_image = null;
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                product_image = result.secure_url;
            }
            const { product_name, product_price } = req.body;
            const { rows: [count] } = await countData();
            const product_id = uuidv4();
            const data = {
                product_id,
                product_name,
                product_price,
                product_image
            };
            console.log(data);
            const insertResult = await insertProduct(data);
            commonHelper.response(res, insertResult.rows, 201, "Create Product Success");
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },


    updateProduct: async (req, res) => {
      try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const product_image = result.secure_url;
        const { product_name, product_price} = req.body;
        const product_id = String(req.params.id);
        const { rowCount } = await findUUID(product_id);
        if (!rowCount) {
          return next(createError(403, "ID is Not Found"));
        }
        const data = {
          product_id,
          product_name,
          product_price,
          product_image
        };
        console.log(data);
        updateProduct(data)
          .then((result) =>
            commonHelper.response(res, result.rows, 200, "Product updated")
          )
          .catch((err) => res.send(err));
      } catch (error) {
        console.log(error);
      }
    },


    deleteProduct: async (req, res, next) => {
      try {
        const product_id = String(req.params.id);
        const { rowCount } = await findUUID(product_id);
        if (!rowCount) {
          return next(createError(403, "ID is Not Found"));
        }
        await deleteProduct(product_id);
        commonHelper.response(res, {}, 200, "Product terhapus");
      } catch (error) {
        next(error);
      }
    },
};

module.exports = productController;