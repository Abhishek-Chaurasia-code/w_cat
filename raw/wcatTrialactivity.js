//const { strict } = require("assert");
let fs = require("fs");
let path = require("path");

let input=process.argv.slice(2);
let cmd= input[0];
let  blbToslbfnObj=require("./commands/bigLinebreakTosingleLinebreak");
let  numallLinesfnObj=require("./commands/NumbAllLines");
let  numNElinesfnObj=require("./commands/NumNELines");

function readFile(dirpath){
  let data = fs.readFileSync(dirpath);
  let content = data.toString();
  return content;
}


if(cmd.includes("\\")&& cmd.includes(".")){


  for(let i=0;i<input.length;i++){
     if(fs.existsSync(input[i])){

     let data = readFile(input[i]);
     //console.log(data.toString());
     console.log(data);
     console.log();
     //data.replace()
      }
     else{
    console.log(path.basename(input[i])+" Error. File does not exists. ");
      }
  }    

}

 else {
 let  dirpath=input[1];
 let r= input[2];
    if(dirpath=="-n"||dirpath=="-b"){
     r=dirpath;
     dirpath=input[2];
  }
     switch (cmd){

     case "-s":
       if(dirpath=="-n"||dirpath=="-b"){
         r=dirpath;
         dirpath=input[2];
       } 
       let content1=readFile(dirpath);
       let content2=blbToslbfnObj.blbToslbfn(content1);
       if(r=="-n"){
         let content_numall=numallLinesfnObj.numallLinesfn(content2);
         content2=content_numall;
       }
       if(r=="-b"){
        let content_numNE=numNElinesfnObj.numNElinesfn(content2);
        content2=content_numNE;
      }
       
       console.log(content2);
       //console.log("replace big line breaks with singular line break");
       break;

     case "-n":
      let content3=readFile(dirpath);
      let content4=numallLinesfnObj.numallLinesfn(content3);
      console.log(content4);
      console.log();
       break;


     case "-b":  
       let content5=readFile(dirpath);
      let content6=numNElinesfnObj.numNElinesfn(content5);
      console.log(content6);
      console.log();
       break;  


     default:
       console.log("Error. Wrong command entered. ");
       
      
     }

}
