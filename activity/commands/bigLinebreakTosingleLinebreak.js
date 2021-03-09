let fs = require("fs");
let path = require("path");



/* function readFile(dirpath){
    let data = fs.readFileSync(dirpath);
    let content = data.toString();
    return content;
  }
   */
function blbToslb(content){
    //let content = readFile(dirpath);
    //let contentmod= "";
    // for(let i=0;i<content.length-1;i++){
       
    //   if(!(content[i]=='\n')){
    //     contentmod+=  content[i];
    //   }
    //   if(content[i]=='\n' && !(content[i+1]=='\n')){
    //        contentmod+=  content[i];
    //   }
    //   //console.log(contentmod);
    // }
      //console.log(contentmod);
      //return contentmod;
    
    //content = content.replace(/\n/g, "1");
    content = content.replace(/[\r\n]+/g, '\r\n');
    return content;
    
    }

    module.exports={
        blbToslbfn: blbToslb
    }