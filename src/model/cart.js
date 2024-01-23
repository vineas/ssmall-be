const Pool = require("../config/db");

// SELECT * FROM cart
const selectAllCart = () => {
    return Pool.query(`
      SELECT cart.cart_id, cart.product_id, product.product_name, product.product_image, product.product_price
      FROM cart
      JOIN product ON cart.product_id = product.product_id
    `);
};


const insertCart = (data) => {
    const {
        cart_id,
        product_id } = data;
    return Pool.query(`INSERT INTO cart(
      cart_id,
      product_id) VALUES
      ('${cart_id}', '${product_id}')`);
};

const deleteCart = (cart_id) => {
    return Pool.query(`DELETE FROM cart WHERE cart_id='${cart_id}'`);
};

const countData = () => {
    return Pool.query("SELECT COUNT(*) FROM cart");
};


const findUUID = (cart_id) => {
    return new Promise((resolve, reject) =>
        Pool.query(
            `SELECT cart FROM cart WHERE cart_id='${cart_id}'`,
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
    selectAllCart,
    insertCart,
    deleteCart,
    countData,
    findUUID
};