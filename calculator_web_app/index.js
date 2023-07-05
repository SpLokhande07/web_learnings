const server = require("express");
const bodyParser = require("body-parser");
const app = server();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
   res.sendFile(__dirname+"/calculator.html");
}); 

app.post("/",function(req,res){
    var val = Number(req.body.num1) + Number(req.body.num2)
    res.send("Result of value is " +val);
});


app.get("/calculatebmi",function(req,res){
    res.sendFile(__dirname+"/calculatebmi.html");
});

app.post("/calculatebmi", function(req,res){
    console.log(req.body);
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var val = w / (h*h);
    res.send("Your BMI is "+ val);
});
 


app.listen(3000,function(){
    console.log("Server is running on port 3000");
});