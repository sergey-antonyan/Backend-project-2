const product_controller = require("../controller/product_controller.js");
const { authenticateToken } = require("../jwt/jwt_authenticate");


function create_products_routes(app) {
  app.get("/products", product_controller.getProduct);
  app.post("/", authenticateToken , product_controller.add_products);
  app.get("/:id",  authenticateToken , product_controller.getProductById);
  app.delete("/:id", authenticateToken , product_controller.deleteProduct);
  app.put("/:id", authenticateToken , product_controller.putPorduct)
}


module.exports = { create_products_routes };
