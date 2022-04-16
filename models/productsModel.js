const schema = require("./productsSchema");

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
    createProduct
}

module.exports = productsModel;