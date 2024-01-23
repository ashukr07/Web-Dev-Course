//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port=3000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/check",(req,res)=>{
    let pass=req.body.password;
    let page;
    page=(pass==="ILoveProgramming"?"/public/secret.html":"/public/index.html");
    //console.log(page);
    res.sendFile(__dirname+page);
})

app.listen(port,()=>{
    console.log(`the port is listening at ${port}`)
})

