const controller = require("../controllers/productController");
const routes = require("express").Router();

routes.get("/", controller.getProduct);
routes.post("/", controller.createProduct);

module.exports=routes;