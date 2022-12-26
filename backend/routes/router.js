const express = require("express");
const users = require("../models/userSchema");
const router = express.Router();


// router.get("/",(req,res)=>{
// console.log("connect");
// });

// router.post("/register",(req,res)=>{
//     const{name,email,dob,address,country} = req.body
//     if (!name || !email || !dob || !address || !country){
//         res.status(404).send("fill the data")
//     }
//     try{
//         const p = await users.findOne({email:email})
//         if(preuser) {
//             res.status (404).send("this is user is already present");
//             }else{
//             const adduser = new users({
//             name, email, dob, address, country
//             })
//             await adduser.save();
//             res.status(201).json(adduser);
//             console.log(adduser)
//             }
//     }catch(error){
//         res.status(404).send(error)
//     }

// })

// router.post("/register",(req,res)=>{
//     console.log(req.body)
// })


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



module.exports = router;