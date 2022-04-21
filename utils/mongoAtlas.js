const mongoose = require("mongoose");
require('dotenv').config();
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.uuncd.mongodb.net/products?retryWrites=true&w=majority`;


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true
}

mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

module.exports = mongoose;