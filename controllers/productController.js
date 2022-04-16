const model =  require("../models/productsModel")

const getProduct = (req,res)=>{
    res.render("form.pug")
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


const formController = {
    getProduct,
    createProduct
}

module.exports = formController;