const controller = require("../controllers/productController");
const routes = require("express").Router();
const upload = require("../config/upload")
const multer = require("multer");
const up = multer({ dest: 'uploads/' })
const express = require('express')

routes.get("/", controller.renderProduct);
routes.post("/", controller.createProduct,upload.upload, upload.uploadFile);
routes.get("/products", controller.getAllProducts);
routes.get("/upload", controller.upload);
routes.post('/upload', up.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    console.log(req.file);
    // req.body will hold the text fields, if there were any
  })

module.exports=routes;