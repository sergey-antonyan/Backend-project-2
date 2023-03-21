const { application } = require("express");

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

function add_products(req, res) {
  const description = req.body.description;
  const price = req.body.price;
  const image = req.body.image;
  const created = req.body.created;
  const updated = req.body.updated;

  db.run(
    "INSERT INTO products ( price , description, image, created, updated) VALUES (?, ?, ?, ?, ?)",
    [price, description, image, created, updated],
    (err) => {
      res.send("Yesss!");
    }
  );
}

function putPorduct(req, res) {
  const id = req.params.id;
  const description = req.body.description;
  const price = req.body.price;
  const image = req.body.image;
  const created = req.body.created;
  const updated = req.body.updated;
  db.put(
    "UPDATE products SET price = ? description = ? image = ? created = ? updated =?",
    [id, price, description, image, created, updated],
    (err) => {
      res("Changes done!");
    }
  );
}

function getProduct(req, res) {
  db.all("SELECT * FROM products", [], (err, data) => {
    res.send(data);
  });
}

function getProductById(req, res) {
  const id = req.params.id;
  db.get("SELECT * FROM products WHERE id = ? ", [id], (err, data) => {
    res.send(data);
  });
}

function deleteProduct(req, res) {
  const id = req.params.id;
  db.delete("DELETE FROM products WHERE id = ?", [id], (err, data) => {
    req.send(data);
  });
}

module.exports = {
  add_products,
  getProduct,
  getProductById,
  deleteProduct,
  putPorduct,
};
