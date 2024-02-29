// app.js is what the file for our express app is called 

// require express 
// returns a fxn and we are storing it in express var 
const express = require('express');

// Set up an express app 
// invoke that fxn to create an instance of an express app 
const app = express();

// Next, need to listen for requests 
// returns an instance of the server that we could save in
// a const if we wanted to 
app.listen(3000);

// Respond to those requests 

// GET 
// 1st arg - The path or url you want to listen to
// 2nd arg - A fxn that takes in a req and res object 
// so we can do something with those 
// req = info of the request like the URL, or the method (GET,POST),..
// res = the resp object which we can use to send a response
// app.get('/', (req, res) => {
//     // with express we can use the send method 
//     // auto infers the content-type we're trying to send
//     // also infers the status code
//     res.send('<p>home page</p>');

// });

// ROUTING AND HTML 
// make a GET handler for all the pages you can go to in a URL 
app.get('/', (req, res) => {
        // res.send('<p>home page</p>');

        // 2nd arg - an options object that we can specify 
        // the root for the relative path 
        res.sendFile('./views/index.html', {root: __dirname});

        // alt way is to use the PATH core module to join together 
        //the dirname with the file path 

    });

// GET request for the URL /about 
// responds to another route 
app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');

    res.sendFile('./views/about.html', {root: __dirname});

});

// REDIRECTS 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 PAGE 
// Use method - used to create middleware and fire middleware
// functions in express 
// if no match to url and we get to this point then it will
// respond with this fxn 
// MUST BE THE LAST GET RESPONSE 
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})

