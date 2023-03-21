const product_controller = require("../controller/product_controller.js");
const { authenticateToken } = require("../jwt/jwt_authenticate");


function create_products_routes(app) {
  app.get("/products", product_controller.getProduct);
  app.post("/products", authenticateToken , product_controller.add_products);
  app.get("/products/:id",  authenticateToken , product_controller.getProductById);
  app.delete("/products/:id", authenticateToken , product_controller.deleteProduct);
  app.put("/products/:id", authenticateToken , product_controller.putPorduct)
}


module.exports = { create_products_routes };
