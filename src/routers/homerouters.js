const exprsss = require('express');
const homeSchema = require('../models/homeSchema');
const Router = exprsss.Router();
const userSchema = require('../models/homeSchema');

Router.get('/',(err,res)=>{
    res .render( 'register', {title:'FILL FORM',password:"",email:""})
});

Router.post('/register',async(req,res)=>{
try {
    const {
        fullname,
        email,
        password,
        confirmpassword
    } =req.body;
   if(password===confirmpassword){

    const userData = new homeSchema({
        fullname,
        email,
        password
    })
    userData.save(err=>{
        if(err){
            
            console.log('err')
        }
        else{
            res .render( 'register', {title:'Done',password:"",email:""})
            
        }
    })

    const useremail = await homeSchema.findOne({email:email});
    if(email === useremail.email){
    res .render( 'register', {title:'',password:"",email:"You've already registered!"})
        
    }
    else{
        console.log('error')
    }
   }else{
    res .render( 'register', {title:'Error in code',password:"Password not matching",email:""})
   }
} catch (error) {
    res .render( 'register', {title:'Error in code',password:"",email:""})

}
})

//singn in
Router.post('/login',(req,res)=>{
    const
    {
        email,
        password
    }= req.body;
    homeSchema.findOne({email:email},(err,result)=>{
        if(email === result.email  && password === result.password){
            res.render('home');
        }
        else{
            console.log(err)
        }
    })
})

module.exports= Router;