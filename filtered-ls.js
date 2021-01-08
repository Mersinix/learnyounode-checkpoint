const fs =require('fs');
const path = require('path');
const directory = process.argv[2];
const extention = `.${process.argv[3]}`;

fs.readdir(directory,(error, list) => {

    if (error) console.error(error);

    else list.forEach(file=>{
        if (path.extname(file)===extention){
            console.log(file)
        }
    });
  });