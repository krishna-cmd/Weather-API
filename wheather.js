const express = require("express");
const bodyparser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req, res){
  res.sendFile(__dirname+"/weather.html");

  
});

app.post("/",function(req,res){
 var cityname=req.body.city
const url ="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=metric&appid=92ec56df5e28ec112566967eaab16c3a"
// const id = 92ec56df5e28ec112566967eaab16c3a
https.get(url,function(response){
    console.log(response.statusCode);
    
    response.on("data", (data)=>{
        const wdata =JSON.parse(data);
        const temperature =wdata.main.temp
        const desc =wdata.weather[0].description
        res.send("<h1>the Temperature in your country is "+ temperature+ "and forcast is "+ desc+"</h1>");
        
    })
    
});
});



app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});





// 92ec56df5e28ec112566967eaab16c3a