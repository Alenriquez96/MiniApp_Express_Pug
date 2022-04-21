const mongoose = require("../utils/mongoAtlas");


const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    urlImg: {
        type: String,
        required: true
    }
});

const productsModel = mongoose.model("products", productsSchema);

module.exports = productsModel;