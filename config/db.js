const mongoose = require('mongoose');
const nodemon = require('nodemon');
require('dotenv').config({path: '.env'});

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("Connected to data base correctly");
    }
    catch(e){
        console.log(e);
        process.exit(1)
    }
}

module.exports = connectDB;