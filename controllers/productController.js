const model =  require("../models/productsModel")
const firebase = require('../config/firebase');
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const storage = getStorage();

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
    console.log(req.body);
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    let img;
    const file = req.file;
    const fileName= file.originalname;
    const metadata = {
        contentType: 'image/jpeg'
    }; 
    const storageRef = ref(storage, 'images/' + fileName);

    try {
        await uploadBytes(storageRef, file.buffer, metadata).then(async (snapshot) => {
            console.log('Uploaded a file!')
            img = await getDownloadURL(storageRef);
        });

        const newProduct = {
            name: name,
            price: price,
            description: description,
            urlImg: img
        }

        await model.createProduct(newProduct);   
        res.status(200).send(`Product created <a href="/products">Ver productos</a>`);
    } catch (error) {
        console.log(error);    
    }
}

const formController = {
    renderProduct,
    createProduct,
    getAllProducts,
}

module.exports = formController;