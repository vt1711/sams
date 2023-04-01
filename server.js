const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3001
dotenv.config({path:'./config.env'})
require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

 

if ( process.env.NODE_ENV === "production"){
    const path = require("path");



    app.get("/", (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'client', 'build')));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })


}

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});

