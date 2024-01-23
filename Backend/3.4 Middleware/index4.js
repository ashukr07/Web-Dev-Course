import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

let n1,n2;


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
})

app.post("/submit",(req,res)=>{
  console.log(req.body.street);
  console.log(req.body.pet);
  res.send("<h1>Your Band Name is: <br>" +req.body.street+req.body.pet+"🎸")
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
