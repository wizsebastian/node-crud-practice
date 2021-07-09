const express = require('express');
require('dotenv').config({path: '.env'});
const connectDB = require('./config/db.js');


const app = express();
connectDB();

app.use(express.json({extended: true}));
app.use('/api/pets', require('./routes/pets'))

const port =  process.env.PORT || 4000;

// Import routes

app.listen(port, '0.0.0.0', () =>{
    console.log(`Server is working at port ${port}`);
})