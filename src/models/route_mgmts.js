const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    routenum:{
        type:Number,
        require:true
    },
    busnum:{
        type:Number,
        require:true
    },
    dname:{
        type:String,
        require:true
    },
    s1name:{
        type:String,
        require:true
    },
    s1loc:{
        type:String,
        require:true
    },
    s2name:{
        type:String,
        require:true
    },
    s2loc:{
        type:String,
        require:true
    },
    s3name:{
        type:String,
        require:true
    },
    s3loc:{
        type:String,
        require:true
    },
    s4name:{
        type:String,
        require:true
    },
    s4loc:{
        type:String,
        require:true
    },
    s5name:{
        type:String,
        require:true
    },
    s5loc:{
        type:String,
        require:true
    },
    s6name:{
        type:String,
        require:true
    },
    s6loc:{
        type:String,
        require:true
    },
    s7name:{
        type:String,
        require:true
    },
    s7loc:{
        type:String,
        require:true
    },
    s8name:{
        type:String,
        require:true
    },
    s8loc:{
        type:String,
        require:true
    },
    s9name:{
        type:String,
        require:true
    },
    s9loc:{
        type:String,
        require:true
    },
    s10name:{
        type:String,
        require:true
    },
    s10loc:{
        type:String,
        require:true
    },
});

const route_mgmt= new mongoose.model("route_mgmts",userSchema);

module.exports = route_mgmt;
