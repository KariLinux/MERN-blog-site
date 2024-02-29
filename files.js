// Use its file system core mod to create, read, write, and delete files on a comp. system

// Import the fs module 
const fs = require('fs');

// Reading files 
// 2 args: 1st - relative path to the string 
// 2nd - is a function, itl will be a fxn that will fire when the task is complete 
// this method is asynchronous and takes some time to do. Once it is done, it will fire the 
// callback fxn. 
// inside the callback fxn: 1st - an error, 2nd - the data (stuff we read from the file)
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err)
    {
        console.log(err); 
    }
    console.log(data); // prints out a buffer - a package of data thats being sent to us when 
    // we read the data 
    console.log(data.toString());      // if we want to see the actual string data 
})

// demo that the above fxn is  asynch. 
console.log('last line'); 

// writing files 
// arg 1 - relative path to the file 
// arg2 - the text we want to write to this file 
// arg 3 - a callback fxn - bc writefile is asynch 
fs.writeFile('./docs/blog1.txt', 'Hello, World!', () => {
    console.log('File was written');
});

// if file doesnt exist, it will create it and write to it 
fs.writeFile('./docs/blog2.txt', 'Hello, again!', () => {
    console.log('File was written');
});


// directories 

// create a directory 
// 1st arg - what directory and where 
// 2nd arg -  callback fxn (can take in an err obj)
// check if that dir exists first wirh .existsync which is a synch method 
if (!fs.existsSync('./assets'))
{
    fs.mkdir('./assets', (err) => {
        if (err)
        {
            console.log(err); 
        }
    
        console.log('Folder Created');
    });
}

// Remove/delete a directory 
fs.rmdir('./assets', (err) => {
    if (err)
    {
        console.log(err); 
    }
    console.log("Folder Deleted");
});

// deleting files 
// make sure if exists 
if (fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err)
        {
            console.log(err); 
        }
        console.log('File Deleted');
    }); 
}
