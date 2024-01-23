const Pool = require("../config/db");

const selectAllHistory = () => {
    return Pool.query(`
      SELECT history.history_id, history.product_id, product.product_name, product.product_image, product.product_price
      FROM history
      JOIN product ON history.product_id = product.product_id
    `);
};


const insertHistory = (data) => {
    const {
        history_id,
        product_id } = data;
    return Pool.query(`INSERT INTO history(
      history_id,
      product_id) VALUES
      ('${history_id}', '${product_id}')`);
};

const deleteHistory = (history_id) => {
    return Pool.query(`DELETE FROM history WHERE history_id='${history_id}'`);
};

const countData = () => {
    return Pool.query("SELECT COUNT(*) FROM history");
};


const findUUID = (history_id) => {
    return new Promise((resolve, reject) =>
        Pool.query(
            `SELECT history FROM history WHERE history_id='${history_id}'`,
            (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        )
    );
};

module.exports = {
    selectAllHistory,
    insertHistory,
    deleteHistory,
    countData,
    findUUID
};