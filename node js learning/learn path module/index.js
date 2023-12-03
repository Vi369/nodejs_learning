const path = require('path');

// console.log(path.sep); // SEPreater
// console.log(process.env.path); // all the env path 

// console.log(path.delimiter) // ; got 

const current_file = __filename;

// console.log(current_file) // current file path 

const directory_path = __dirname;

// console.log(directory_path); // current direcory path 

// base name and without extention name 

// console.log(path.basename(current_file)); // basename 
// console.log(path.basename(current_file, ".js")); // basename  without extention name 


// directory name 
// console.log(path.dirname(current_file));

// extention name 
// console.log("extention name", path.extname(current_file));


// absolute path 
// console.log("absolute path",path.isAbsolute(current_file));
// console.log("absolute path",path.isAbsolute("./index.js"));


// its always start with root


// join method 

// console.log(path.join('./home', 'app', 'vikas.com'))

// its join the path


// parse methon 

// console.log(path.parse(current_file));


// relative path 

// console.log(path.relative("./home/vikas.com", "raaj/vikas.com"));


console.log(path.resolve());



