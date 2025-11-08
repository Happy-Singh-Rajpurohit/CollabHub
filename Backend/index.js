require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app =  express();

const PORT = process.env.PORT || 3000;  
const url = process.env.MONGO_URL;

app.use(cors());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    mongoose.connect(url);
    // console.log("Connected to MongoDB");
});