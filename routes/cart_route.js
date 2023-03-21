const cart_controller = require("../controller/cart_controller.js");

function create_cart_routes(app) {
  app.get("/cart", cart_controller.get_cart);
  app.post("/cart", cart_controller.add_cart_items);
  app.put("/cart/:id", cart_controller.update_cart_item);
  app.delete("/cart/:id", cart_controller.delete_cart_item);
  app.get("/new", cart_controller.cart_connection);
}

module.exports = { create_cart_routes };
