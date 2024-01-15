let num1=Math.floor(1+6*Math.random());
let num2=Math.floor(1+6*Math.random());

document.querySelector(".dice .img1").src="./images/dice"+num1+".png";// return only first occurence even if many things are there
document.querySelector(".img2").src="./images/dice"+num2+".png";

if(num1>num2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins";
}
else if(num1==num2){
    document.getElementsByTagName("h1")[0].innerHTML="Draw";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins";
}