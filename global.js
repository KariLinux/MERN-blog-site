// Global object 
// a global object provided by node that gives access to 
// several methods and properites that are attached to it
// Like the window object - is the browsers global object 
// 

// console.log(global); 

// using a method available to us on the global object in Node
// global.setTimeout(() => {
//     console.log('in the timeout'); 
//     clearInterval(int)
// }, 3000);

// setTimeout(() => {
//     console.log('in the timeout'); 
//     clearInterval(int); 
// }, 3000);

// const int = setInterval(() => {
//     console.log('in the interval'); 
// }, 1000)

// Gets teh absolute path of the current folder this file is in 
console.log(__dirname);
// Gets teh absolute path of the current folder this file is in 
// with the filename 
console.log(__filename);

