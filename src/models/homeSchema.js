const mongoose = require('mongoose');

const schema = mongoose.Schema;
const userSchema = new schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Registeruser',userSchema )