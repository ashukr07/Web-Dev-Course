import express from "express";

const app=express();

const port=3000;
const date=new Date("June 24, 2023 ");
let temp=date.getDay();
let day,advice;
if(temp===0||temp===6){
    day="weekend";
    advice="have fun";

}
else{
    day="weekday";
    advice="work hard";
}

app.get("/",(req,res)=>{
    res.render("index.ejs",
    {
        day:day,
        advice:advice,
    
    });
})

app.listen(port,()=>{
    console.log(`Port is listening on ${port}`);
})