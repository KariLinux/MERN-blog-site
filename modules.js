// Modules and require 
// might want to split our code into different files and 
// then import and export things to and from these files
// keep the code modular 

// IF we want to import the people file into the module file
/// do that using a require statement
// provide a relative path to whatever file we want to 
// require or import
// const xyz = require('./people'); 
// node looks for the file and runs it 

// console.log(xyz); 
// xyz is an empty object 

// console.log(people); 
// people is not defined 
// doesnt automatically give us acces to the things in 
// the imported file 

// what if we wanted to access people inside this file
// we have to manually export const people = ['ryu', 'mario',...]
// then what we manually export will be applied to 
// the xyz constant 

// console.log(xyz.people, xyz.ages); 

// TO Import multiple different things from a diff. file is to use a destructuring object
// In the bracket is whatever properties we watn to extract
// const {people} = require('./people'); 
// console.log(people); 

// const {people, ages} = require('./people'); 
// console.log(people), ages; 


// ********** NODE.js CORE MODULES ******************

// OS module 
const os = require('os'); 
console.log(os); 

// methods of OS module 
console.log(os.platform());
console.log(os.homedir());

// fs - File system module 


