let fs = require("fs");
let path = require("path");



/* function readFile(dirpath){
    let data = fs.readFileSync(dirpath);
    let content = data.toString();
    return content;
  } */
  
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
   
   module.exports={
    numNElinesfn: numNElines
}