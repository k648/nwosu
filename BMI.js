const express = require("express");

const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/BMIcalculator", function(req,res){

    res.sendFile(__dirname + "/BMIcalculator.html");
})

app.post("/BMIcalculator", function(req,res){

    var weight = parseFloat(req.body.weight);

    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    
    res.send("your BMI is " + bmi);
})

app.listen(3000,function(req){
    console.log("Server started at 3000...")
}) 


