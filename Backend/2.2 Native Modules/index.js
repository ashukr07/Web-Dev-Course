// const fs=require("fs");
// fs.readFile("./message.txt",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })// agar encoding nahi batayenge kaunsa hai toh woh khud hi kuch lga degi aur sahi output nahi aayega
// //utf 8 encode krte hai apan
//var generateName=require("sillyname");
//var sillyName=generateName();
import superheroes from "superheroes";
const name=superheroes.random();
console.log(`I am a ${name}.`);
