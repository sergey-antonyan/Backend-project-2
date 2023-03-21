const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

function get_cart(req, res) {
  db.all("SELECT * FROM cart", [], (err, row) => {
    res.send(row);
  });
}

function add_cart_items(req, res) {
  const { user_id, product_id, count } = req.body;
  db.run(
    "INSERT INTO cart (user_id, product_id, count) VALUES (?, ?, ?)",
    [user_id, product_id, count],
    (err, row) => {
      res.send(row);
    }
  );
}

function delete_cart_item(req, res) {
  const { id } = req.params;
  db.run("DELETE FROM cart WHERE id = ?", [id], (err, row) => {
    res.send(row);
  });
}

function update_cart_item(req, res) {
  const count = req.body.count;
  db.run("UPDATE cart SET count = ? WHERE  id = ?", [count], (err, row) => {
    res.send(row);
  });
}

async function cart_connection(req, res) {
  sql =
    "SELECT users.firstname AS userName , products.description AS productName , cart.count FROM cart INNER JOIN users ON users.id = cart.user_id  INNER JOIN products ON products.id = cart.product_id";
  db.all(sql, [], (err, row) => {
    if (err) {
      console.log(err);
    } else {
      res.send(row);
    }
  });
}

module.exports = {
  get_cart,
  add_cart_items,
  update_cart_item,
  delete_cart_item,
  cart_connection,
};
