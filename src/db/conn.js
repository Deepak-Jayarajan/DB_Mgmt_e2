const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/Final").then(()=>{
    console.log("The DB is connected sucessfully")
}).catch(()=>{
    console.log("The DB is not connected sucessfully")
})