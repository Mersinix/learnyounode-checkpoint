const fs = require('fs');
const path = require('path');

module.exports=(dir,ext,callback)=>{
    ext = `.${ext}`;
    fs.readdir(dir,(err, list) => {
        if (err) return callback(err);
        const filtred=list.filter(file=>path.extname(file)===ext);
        return callback(null,filtred);
    });
}


// const fs =require('fs');
// const path = require('path');
// const directory = process.argv[2];
// const extention = `.${process.argv[3]}`;

// fs.readdir(directory,(error, list) => {

//     if (error) console.error(error);

//     else list.forEach(file=>{
//         if (path.extname(file)===extention){
//             console.log(file)
//         }
//     });
//   });
