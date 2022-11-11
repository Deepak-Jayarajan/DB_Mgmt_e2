const express =require("express");
const bodyParser = require('body-parser');
const homeRouters =require('./routers/homerouters');
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
const Register = require("./models/register");
const Login = require("./models/login");
const Bus_mgmt = require("./models/bus_mgmts");
const Route_mgmt = require("./models/route_mgmts");
const Student_mgmt = require("./models/student_mgmts");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/',homeRouters)

//serving public file
const public_path = path.join(__dirname,"../public");
app.use(express.static(public_path));

//serving dynamic file
const dynamic_path = path.join(__dirname,"../templates/views");
app.set("view engine","hbs");
app.set("views", dynamic_path);


//serving dynamic file
const partials_path = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path)



app.get("/",(req,res) => {
    res.render("home")
});
app.get("/home",(req,res) => {
    res.render("home")
});
app.get("/about_us",(req,res) => {
    res.render("about_us")
});
app.get("/student_mgmt",(req,res)=>{
    res.render("student_mgmt");
});
app.get("/route_mgmt",(req,res)=>{
    res.render("route_mgmt");
})
app.get("/bus_mgmt",(req,res)=>{
    res.render("bus_mgmt")
});
app.get("/register",(req,res)=>{
    res.render("register")
});
app.get("/login",(req,res)=>{
    res.render("login")
});

// use post request 
app.post("/bus_mgmt",async(req,res)=>{
    try {
            const userdata = new Bus_mgmt({
                busnum:req.body.busnum,
                nameplate:req.body.nameplate,
                chassis:req.body.chassis,
                fc:req.body.fc,
                dname:req.body.dname,
                rnum:req.body.rnum,
                driname:req.body.driname,
                empnum:req.body.empnum,
                licnum:req.body.licnum,
                exp:req.body.exp,
                dmobile:req.body.dmobile
            })
            const savedata = await userdata.save();
            res.status(201).render("home");
          
    } catch (error) {
        res.status(400).send(error)
        
    }
});

app.post("/route_mgmt",async(req,res)=>{
    try {
            const userdata = new Route_mgmt({
                routenum:req.body.routenum,
                busnum:req.body.busnum,
                dname:req.body.dname,
                s1name:req.body.s1name,
                s1loc:req.body.s1loc,
                s2name:req.body.s2name,
                s2loc:req.body.s2loc,
                s3name:req.body.s3name,
                s3loc:req.body.s3loc,
                s4name:req.body.s4name,
                s4loc:req.body.s4loc,
                s5name:req.body.s5name,
                s5loc:req.body.s5loc,
                s6name:req.body.s6name,
                s6loc:req.body.s6loc,
                s7name:req.body.s7name,
                s7loc:req.body.s7loc,
                s8name:req.body.s8name,
                s8loc:req.body.s8loc,
                s9name:req.body.s9name,
                s9loc:req.body.s9loc,
                s10name:req.body.s10name,
                s10loc:req.body.s10loc
            })
            const savedata = await userdata.save();
            res.status(201).render("home");
          
    } catch (error) {
        res.status(400).send(error)
        
    }
});

app.post("/register",async(req,res)=>{
    try {
          const password = req.body.password;
          const confirmpassword = req.body.password;
          if(password===confirmpassword){
            const userdata = new Register({
                fullname:req.body.fullname,
                email:req.body.email,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword
            })
            const savedata = await userdata.save();
            res.status(201).render("login");
          }
    } catch (error) {
        res.status(400).send(error)
        
    }
});





app.listen(port,()=>{
    console.log(`the server is running port no ${port}`);
});
