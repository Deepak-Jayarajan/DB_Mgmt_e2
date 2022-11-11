const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    busnum:{
        type:Number,
        require:true
    },
    nameplate:{
        type:Number,
        require:true
    },
    chasis:{
        type:Number,
        require:true
    },
    fc:{
        type:Date,
        require:true
    },
    dname:{
        type:String,
        require:true
    },
    rnum:{
        type:Number,
        require:true
    },
    driname:{
        type:String,
        require:true
    },
    empnum:{
        type:Number,
        require:true,
        unique: true
    },
    licnum:{
        type:Number,
        require:true,
        unique: true
    },
    exp:{
        type:Date,
        require:true
    },
    dmobile:{
        type:Number,
        require:true,
        unique: true
    },
});

const bus_mgmt= new mongoose.model("bus_mgmts",userSchema);

module.exports = bus_mgmt;
