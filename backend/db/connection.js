const mongoose = require("mongoose")

const DB = "mongodb+srv://mariyabaig:1234@cluster0.70i1s3u.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));