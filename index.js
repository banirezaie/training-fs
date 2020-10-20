const express = require ('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('here we go')
})

app.listen(26000, ()=>{
    console.log('app is listening to prot 26000')
})