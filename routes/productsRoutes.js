const controller = require("../controllers/productController");
const routes = require("express").Router();

routes.get("/", controller.renderProduct);
routes.post("/", controller.createProduct);
routes.get("/products", controller.getAllProducts);

module.exports=routes;