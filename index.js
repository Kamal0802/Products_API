const express = require('express');


const cors = require('cors');
const app = express();

const mongoose=require('mongoose');

const port =3000;

app.use(express.json())

app.use(cors());

app.use(express.urlencoded({extended:false}))

const studentrouter=require('./productRoutes/route')

app.use('/api/product',studentrouter)

mongoose.connect("mongodb://localhost:27017").then(()=>{

    console.log("database connected");
    
    app.listen(port, () => {
        console.log('server is running')
    })
})