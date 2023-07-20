const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");
//console.log(__dirname);

//public static path
console.log(path.join(__dirname,"../public"));      //aa fakta path jova mate 6 and ../public ma .. etale 6 kem k _dirname ma path src sudhi 6 and tema thi bahatr aava mate ..

const staticpath = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views',templates_path);
hbs.registerPartials(partial_path)

app.use(express.static(staticpath));
//routing
app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    res.render('404err',{
        errmsg : "Opps this page not found"                 //here ";" nahi aave
    });
})



app.listen(port,"127.0.0.1",()=>{
    console.log(`listing at the port ${port}`);
})