const { v4: uuidv4 } = require("uuid");
let {
  selectAllHistory,
  insertHistory,
  deleteHistory,
  findUUID
} = require("../model/history");
const commonHelper = require("../helper/common");

let historyController = {
  
    getAllHistory: async (req, res) => {
    try {
      const result = await selectAllHistory();
      commonHelper.response(res, result.rows, 200, "Get data success");
    } catch (error) {
      console.log(error);
    }
  },


  createHistory: async (req, res) => {
    const {
      product_id,
    } = req.body;
    const history_id = uuidv4();
    const data = {
      history_id,
      product_id,
    };
    insertHistory(data)
      .then((result) =>
        commonHelper.response(res, result.rows, 201, "History created")
      )
      .catch((err) => res.send(err));
  },

  deleteHistory: async (req, res, next) => {
    try {
      const history_id = String(req.params.id);
      const { rowCount } = await findUUID(history_id);
      if (!rowCount) {
        return next(createError(403, "ID is Not Found"));
      }
      await deleteHistory(history_id);
      commonHelper.response(res, {}, 200, "History deleted");
    } catch (error) {
      next(error);
    }
  },

  
  
};

module.exports = historyController;