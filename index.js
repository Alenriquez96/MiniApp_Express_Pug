const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const formRouter = require("./routes/productsRoutes")

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));//Estas dos son para los métodos put y post, para que el servidor pueda leer la información nueva que le mandamos
app.use(express.json());

app.use("/",formRouter);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});