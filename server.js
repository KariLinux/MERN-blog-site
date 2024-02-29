// Write the code to create a server and listen for requests coming in from the browser
// manually create it which lives on the backend of our website (server side)
// it listens for requests from the browser and then decides what responses to send to the 
// browser 

// We create a local server on our computer using node which will be used to listen to 
// for requests and respond to them 


// rrequire a core node module - the http one 
const http = require('http'); 

// Create a server 
// Is a method that creates a server for us 
// arg - a callback fxn that will run anytime a request comes in to the server 
// ex requesting the home page, the callback will run and send it the home page 
// callback fxn get acces to 2 different objects: 
// 1) req - request object : loaded full of info about the request (URL, req type(GET,POST..)..)
// 2) res - response object: object used to send the response to the user in the browser
// const  server = http.createServer((req, res) => {
//     // console.log("request made");
    
//     // Now let's log out to the screen the req, to see what it contains 
//     // Everytime we make a change we have to restart our file 
//     // CNTRL + C 
//     // console.log(req);

//     // .url 
//     // .method is the type of request - POST, GET, ...
//     console.log(req.url, req.method); // will be helpful when sending responses 
//     // want to send responses depending on the route of the url 
//     // ex /about - send about page / send index page 
    
//     // RESPONSE OBJECT 
//     // what we use to send the response to the browser 

//     // STEP 1: formulate the response headers 
//     // Response headers - give the browser more info about what kind of info is coming back
//     // what tyep of data - text, html, etc, 
//     // can also use the resp headers to set cookies 

//     // Set Header content type 
//     // Sending back some plain text to the browser 
//     // res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');


//     // STEP 2: Write what we want to send back 
//     // Send the data back to the browser 
//     // use write method to write to the response
//     res.write('<head><link rel="stylesheet" href = "#"></head>');
//     // res.write('Hello, ninjas');
//     res.write('<p>Hello, ninjas</p>');


//     // STEP 3: END the response to send it back
//     // end the response to send it back 
//     res.end();

// }); 


// 
const fs = require('fs');
const _ = require('lodash');

// Alternative way 
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     // Set the header content type 
//     res.setHeader('Content-Type', 'text/html');

//     // Wnat to read a file, and then send the data from that file as a response to the 
//     // browser
//     // send an html file 
//     fs.readFile('./views/index.html', (err, data) => {
//         if (err)
//         {
//             console.log(err); 
//             res.end();
//         }
//         else
//         {
//             // for writing multiple things 
//             // res.write(data);
//             // res.end();

//             // IF just sending one thing then 
//             res.end(data);
            
//         }

//     });

// });


// **********BASIC ROUTING 
// Send back a different html page depending on the route the user visits 
// way to figure out the url the user requests and send back a corresponding html file 
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // lodash 
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => 
    {
        console.log('Hello');
    });
    greet();
    greet();

    // Set the header content type 
    res.setHeader('Content-Type', 'text/html');

    // save the path that the user wants to visit from the URL. get it from req.url
    let path = './views/';
    switch(req.url)
    {
        case '/':
            path += 'index.html';
            // Status code 
            res.statusCode = 200; 
            break;
        case '/about':
            path += 'about.html';
            // Status code 
            res.statusCode = 200; 
            break;
        //***** REDIRECTS  */
        case '/about-us':
            // Status code 
            res.statusCode = 301; 
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            // Status code 
            res.statusCode = 404; 
            break;
    }



    // Wnat to read a file, and then send the data from that file as a response to the 
    // browser
    // send an html file 
    // fs.readFile('./views/index.html', (err, data) => {
    fs.readFile(path, (err, data) => {

        if (err)
        {
            console.log(err); 
            res.end();
        }
        else
        {
            // for writing multiple things 
            // res.write(data);
            // res.end();
        

            // IF just sending one thing then 
            res.end(data);
            
        }

    });

});


// server not doing anything yet like listening to any requests 
// invoke the listen method 
// arg 1- the port number that we will listen to 
// arg 2 - the host name - 
// arg 3 - a fxn - fires when we start listening, so that we can know 
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
}); 


// ******* STATUS CODES
// 200 - OK 
// 301 - Resource moved somehwere else 
// 404 - Not found (file not found)
// 500 - Internal server error 

// 100 range - Informational responses 
// 200 range - success codes 
// 300 range - codes for redirects 
// 400 range - user or client error codes
// 500 range - server error codes 



// ***** NPM *********

// Nodemon is a package that helps us create a live reload server 
// nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// nodemon does not require any additional changes to your code or method of development. 
// nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the 
// command line when executing your script.

// ******** EXPRESS ************
// Is a framework that helps us to easily manage our: 
// Routing 
// Requests
// Server side logic and 
// Responses 
// in a more elegant way. Makes the code easier to 
//read, update, managae and extend 

// can do everything with just raw node but express helps
// save time and allows us to write clean code and has
// extra features 
const express = require('express')
// sets up an express app 
const app = express()

// Sets up some routing 
// This one is responding to a GET request
// Responding to a GET request for /
// and sending a response 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
