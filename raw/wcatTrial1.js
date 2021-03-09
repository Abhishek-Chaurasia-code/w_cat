//const { strict } = require("assert");
const { FORMERR } = require("dns");
let fs = require("fs");
let path = require("path");

let input=process.argv.slice(2);
let cmd= input[0];

function readFile(dirpath){
  let data = fs.readFileSync(dirpath);
  let content = data.toString();
  return content;
}


if(cmd.includes("\\")&& cmd.includes(".")){


  for(let i=0;i<input.length;i++){
     if(fs.existsSync(input[i])){

     let data = readFile1(input[i]);
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
 
     switch (cmd){

     case "-s":
        let k= input[1];
        
       for(let i=1;i<input.length;i++){

         if(input[i].includes("\\")){

              if(fs.existsSync(input[i])){

                let content1=readFile(input[i]);
                let content2=blbToslb(content1);
                if(k=="-n"){
                    let content_numall=numallLines(content2);
                     content2=content_numall;
                   }
                if(k=="-b"){
                    let content_numNE=numNElines(content2);
                     content2=content_numNE;
                   }
                  console.log(content2);

                 }

                else{
                    console.log(path.basename(input[i])+" Error. File does not exists. ");
                  }
         }
          
       }
       
       break;

     case "-n":
      for(let i=1;i<input.length;i++){
        if(input[i].includes("\\")){

             if(fs.existsSync(input[i])){
                  let content3=readFile(input[i]);
                  let content4=numallLines(content3);
                  console.log(content4);
                }
              else{
                   console.log(path.basename(input[i])+" Error. File does not exists. ");
                 }
           }
    }
      console.log();
       break;


     case "-b":  
     for(let i=1;i<input.length;i++){

       if(input[i].includes("\\")) 
         {
           if(fs.existsSync(input[i])){
              let content5=readFile(input[i]);
              let content6=numNElines(content5);
              console.log(content6);
            }
          else{
            console.log(path.basename(input[i])+" Error. File does not exists. ");
          }

        }

    }
      console.log();
       break;  


     default:
       console.log("Error. Wrong command entered. ");
       
      
     }

}

function blbToslb(content){

content = content.replace(/[\r\n]+/g, '\r\n');
return content;

}

function numallLines(content){
    //let content = readFile(dirpath);
    content="1 "+content;
    let contentmod="";
    let k=2;
    for(let i=0;i<content.length;i++){
      if(/*content[i]=="\r\n"||content[i]=="\r"||*/content[i]=="\n"){
        contentmod= contentmod+content[i] +k+" ";
        k=k+1;
      }
      else{
        contentmod = contentmod+ content[i];

      }
    }
    return contentmod;
    

  }

function numNElines(content){
 // let content= readFile(dirpath);
  content="1 " + content;
  let k=2
  let contentmod="";
  for(let i=0;i<content.length;i++){
    if(content[i]=="\n"&&!(content[i+2]=="\n")){
      contentmod= contentmod+content[i] +k+" ";
        k=k+1;
    }
    else{
      contentmod= contentmod+ content[i];
    }
  }

  return contentmod;
}

