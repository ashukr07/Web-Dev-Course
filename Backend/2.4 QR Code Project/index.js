/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
let ans;
inquirer
  .prompt([
    {message:" Enter the url you want to make into QR code",
    name:"url",
}
  ])
  .then((answers) => {
   // console.log(answers.url)
    let img=qr.image(answers.url,[{type:"png",parse_url:true}]);
    img.pipe(fs.createWriteStream('QR_code.png'))
    fs.writeFile("URL.txt",answers.url,
    (err)=>{
        if(err) throw err;
        console.log("file has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  console.log(ans); 