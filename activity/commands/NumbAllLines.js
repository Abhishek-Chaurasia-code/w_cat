let fs = require("fs");
let path = require("path");



/* function readFile(dirpath){
    let data = fs.readFileSync(dirpath);
    let content = data.toString();
    return content;
  }
   */
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

  module.exports={
    numallLinesfn: numallLines
}
