const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require("../db/conn");

const samsloginschemasdetails = require("../model/schema");


router.post('/login', async (req, res) => {
    try {
        let token;
        const { userid, password } = req.body;
        console.log("body.......................................");
        console.log(req.body);
        if (!userid || !password) {
            return res.status(400).json({ error: "Cannot login , empty fields" });
        }
        const user = await samsloginschemasdetails.findOne({ userid });
        if (user) {

            // const passwordmatch = await bcrypt.compare(password, user.password)
            

            if (password===user.password) {
                console.log("Successfully logged in");
                
                token= await user.generateAuthToken();
                console.log(token);
                
                res.cookie("jwtoken",token,{
                    expires: new Date(Date.now() + 30000000000),
                    httpOnly:true
                }
                );
                

                // res.send(token);
                res.status(200).json({ message: "Successfully logged in" });
                
            }
            else {
                res.status(400).json({ error: "Wrong userid or password" });
                console.log("Wrong userid or password");
                
            }
        }
        else {

            res.status(400).json({ error: "signin error" });
            
        }

    } catch (err) {
        console.log(err);
    }
});


module.exports = router;