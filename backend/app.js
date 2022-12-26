require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/connection");
const users = require("./models/userSchema");
var cors = require("cors");
const router = require("./routes/router");


const port = 8000;
app.use(cors());
app.use(express.json());

// app.use('/register',require('./routes/router'))
app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);

app.listen (port, ()=>{
console.log(`server is start port number ${port}`);
});
