const express = require('express');
const usuarioRoute = require('./routes/routes');
const app = express();
const port = 4000;
require('dotenv/config');

app.use(express.json());
app.use(usuarioRoute)



app.listen(port, ()=>{
    console.log('Server is runner🚀');
})




