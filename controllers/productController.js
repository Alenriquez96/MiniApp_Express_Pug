const model =  require("../models/productsModel")

const renderProduct = (req,res)=>{
    res.render("form.pug")
}

const getAllProducts = async (req,res) =>{
    try {
      const products = await model.getAllProducts();
      res.render("products.pug",{"products":products});  
    } catch (error) {
        console.log(error);
    }
}

const createProduct = async (req,res)=>{
    try {
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const img = req.body.img
    
        const newProduct = {
            name: name,
            price: price,
            description: description,
            urlImg: img
        }
        console.log(newProduct);
    
        const create = await model.createProduct(newProduct);   
        res.status(200).send("Product created");
    } catch (error) {
        console.log(error);    
    }
}

const upload =  (req,res)=>{
    res.render("upload.pug")
}

const formController = {
    renderProduct,
    createProduct,
    getAllProducts,
    upload
}

module.exports = formController;