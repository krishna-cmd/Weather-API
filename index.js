const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile("E:/Html projects/nodepro/form.html");
});

app.post("/",function(req,res){
    const name = req.body.Username;
    const surname = req.body.srname;
    var number = req.body.num;

    res.send("hiii "+ name+surname+ "your contact number is:"+number);

});
app.listen(4040,()=>{
    console.log("server is running on 4040");
});