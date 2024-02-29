// 
const fs = require('fs'); 

// Create a read stream 
// 1st arg - where to read and pass from 
// 2nd - an option object - encode this as it comes in into a readable format
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

// Create a write stream 
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// .on is an event listener here listening for a data event 
// 
// readStream.on('data', (chunk) => {
//     console.log('----New chunk-----');
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK\n');
//     writeStream.write(chunk);
// });

// Piping 
readStream.pipe(writeStream);

