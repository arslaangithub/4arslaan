const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send("This is express server");
});
app.listen(3002,()=>{
    console.log("http://localhost:3002")
});


