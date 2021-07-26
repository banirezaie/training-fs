const express = require ('express');
const dotenv = require('dotenv').config();
const app = express();

const uri = process.env.DATABASE_URI;


app.get('/', (req, res)=>{
    res.send('here we go')
})

const PORT = process.env.PORT;
console.log(PORT)
app.listen(PORT, ()=>{
    console.log(`app is listening to port ${PORT}`)
})