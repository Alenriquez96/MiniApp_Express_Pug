const controller = require("../controllers/productController");
const routes = require("express").Router();

const multer = require("multer");



const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('img'); //donde meter esas imagenes

routes.get("/", controller.renderProduct);
routes.post("/", upload, controller.createProduct);
routes.get("/products", controller.getAllProducts);



module.exports=routes;