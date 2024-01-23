const Pool = require('../config/db')

const selectAllProduct = ({ limit, offset, sort, sortby }) => {
  return Pool.query(`SELECT * FROM product ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`)
}

const selectProduct = (product_id) => {
  return Pool.query(`SELECT * FROM product WHERE product_id = '${product_id}'`)
}

const insertProduct = (data) => {
  const { product_id, product_name, product_price, product_image} = data;
  return Pool.query(`INSERT INTO product(product_id, product_name, product_price, product_image) VALUES
    ('${product_id}','${product_name}',${product_price},'${product_image}')`);
}

const updateProduct = (data) => {
  const { product_id, product_name, product_price, product_image} = data;
  return Pool.query(`UPDATE product SET 
  product_name='${product_name}', 
  product_price=${product_price}, 
  product_image ='${product_image}' WHERE product_id='${product_id}'`);
}


const deleteProduct = (product_id) => {
  return Pool.query(`DELETE FROM product WHERE product_id='${product_id}'`);
}

const countData = () => {
  return Pool.query('SELECT COUNT(*) FROM product')
}

const findUUID = (product_id) => {
  return new Promise((resolve, reject) =>
      Pool.query(
          `SELECT product FROM product WHERE product_id='${product_id}'`,
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
  selectAllProduct,
  selectProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
  countData,
  findUUID
}