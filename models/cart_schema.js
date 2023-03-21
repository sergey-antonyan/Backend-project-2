const sql =
  "CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY , user_id INTEGER NOT NULL, product_id INTEGER NOT NULL, count INTEGER NOT NULL, FOREIGN KEY (user_id) REFERENCES carts (id) , FOREIGN KEY (product_id) REFERENCES products (id))";

function create_cart(db) {
  db.run(sql);
}

module.exports = { create_cart };
