const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authenticate =require("../middleware/authenticate");
const cookieparser = require("cookie-parser");
router.use(cookieparser());

require("../db/conn");

const samsloginschemasdetails = require("../model/schema");
const samspaymentdetailsschemasdetails =require("../model/paymentdetailsschema");
const { json } = require('express');


router.post('/login', async (req, res) => {
    try {
        let token;
        const { userid, password } = req.body;
        console.log(".....server login req.body.....",req.body);
        
        if (!userid || !password) {
            return res.status(400).json({ error: "Cannot login , empty fields" });
        }
        const user = await samsloginschemasdetails.findOne({ userid });
        if (user) {

            // const passwordmatch = await bcrypt.compare(password, user.password)

            if (password===user.password) {
                console.log("Successfully logged in");

                token= await user.generateAuthToken();
                console.log( "...server login generated token...",token);

                res.cookie("jwtoken",token,{
                    expires: new Date(Date.now() + 86400000),
                    httpOnly:true
                }
                );

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

router.post('/updaterecords/addnew', async (req, res) => {

    const { name, address, paymentstatus } = req.body;

    //code for testing
    // console.log(req.body);
    // console.log(req.body.city);
    // console.log(address);
    // res.json({message:req.body});

    // uncomment during proper validation
    // if(!center_name || !address || !city)
    // {
    //     return res.status(422).json({error:"error"});
    // }

    try {
        const userexists = await samspaymentdetailsschemasdetails.findOne({ name: name });

        if (userexists) { return res.status(422).json({ error: "user exists" }); }
        else {
            const user = new samspaymentdetailsschemasdetails({ name,address,status:paymentstatus});

            await user.save();

            res.status(201).json({ message: "user created" });
        }


    } catch (error) {
        console.log(error);
    }

});


router.get(`/showrecords`,authenticate ,async (req, res) => {
    try {
        // console.log(req.query);
        // console.log("..server show records req.token...",req.token);
        
        const records = await samspaymentdetailsschemasdetails.find({})
        console.log("........server showrecords records........",records);
        if (records.length===0) {
            res.status(404).send({error:"No records found"});
            console.log("...server showrecords no records found...");
        }
        else {
            //console.log(records);
            res.status(200).send(records);
        }


    } catch (error) {
        console.log(error);
    }


});



router.delete(`/updaterecords/updateexisting/delete`, async (req, res) => {
    try {
        console.log(".......server....selectedrecord........", req.body.id);
        const idtodelete = req.body.id;

        const deletestatus = await samspaymentdetailsschemasdetails.findByIdAndRemove(idtodelete);

        console.log("....server....deletestatus.........", deletestatus);

        if (deletestatus === null) {
            res.status(422);
        }
        else {
            res.status(200).send(deletestatus);
        }

    } catch (error) {
        console.log(error);
    }


});

router.patch('/updaterecords/updateexisting/update', async (req, res) => {
    // console.log(req.body);
    const { _id, name, address, status } = req.body;

    const userexists = await samspaymentdetailsschemasdetails.findOne({ name: name });

    if (userexists) { return res.status(422).json({ error: "user exists" }); }
    else{
        const result = await samspaymentdetailsschemasdetails.findByIdAndUpdate(_id, {
            name, address, status
        })
        // console.log(data);
        res.status(200).send(result);
    }

   
});




module.exports = router;