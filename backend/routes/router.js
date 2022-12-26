const express = require("express");
const users = require("../models/userSchema");
const router = express.Router();

router.post("/registeration",async(req,res)=>{
    // console.log(req.body);
    const {name,email,dob,address,country} = req.body;

    if(!name || !email || !dob|| !address || !country){
        res.status(404).json("please fill the data");
    }

    try {
        
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(404).json("this is user is already present");
        }else{
            const adduser = new users({
                name,email,dob,address,country
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(404).json(error);
    }
})

// get userdata
router.get("/getdata", async(req,res)=>{
    try {
    const userdata = await users.find();
    res.status(201).json(userdata)
    console.log(userdata);
    } catch (error) {
        res.status(404).json(error)
    }
    })

//get individual user

router.get("/getuser/:id", async(req,res)=>{
    try {
    console.log(req.params);
    const {id} = req.params;
    const individualUser = await users.findById({_id:id});
    console.log(individualUser);
    res.status (201).json (individualUser)
    } catch (error) {
    res.status(404).json(error)
    }
    })

module.exports = router;