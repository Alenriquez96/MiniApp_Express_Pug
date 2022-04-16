const schema = require("./productsSchema");

const getAllProducts = async () => {
    try {
        const getAllProducts = await schema.find({});
        return getAllProducts;        
    } catch (error) {
        console.log(error);
    }
}

const createProduct = async (product) => {
    try {
        console.log(product);
        const newProduct = new schema(product);
        const create = await schema.create(newProduct)
    } catch (error) {
        console.log(error);
    }
}

const productsModel = {
    createProduct,
    getAllProducts
}

module.exports = productsModel;