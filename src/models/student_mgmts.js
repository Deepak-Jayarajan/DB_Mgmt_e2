const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    guardian:{
        type:String,
        require:true
    },
    roll:{
        type:Number,
        require:true
    },
    class:{
        type:String,
        require:true
    },
    section:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true,
        unique:true
    },
    bpoint:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    idnum:{
        type:Number,
        require:true,
        unique:true
    },
    busnum:{
        type:Number,
        require:true
    },
    routenum:{
        type:Number,
        require:true
    }
});

const student_mgmt= new mongoose.model("student_mgmts",userSchema);

module.exports = student_mgmt;
