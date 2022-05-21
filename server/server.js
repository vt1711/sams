const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path:'../config.env'})
require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});

