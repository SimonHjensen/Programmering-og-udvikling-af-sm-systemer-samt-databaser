/**
 * Task 8:
 * 1) Download and install express by running "npm install express"
 * 2) Create 4 different endpoints/routes at same URL ("/"): 1 GET, 1 POST, 1 PUT and 1 DELETE
 * 3) Respond with the method (GET, POST, PUT or DELETE) and set a 200 OK status code
 * 4) (OPTIONAL) Make it possible to add query strings and route parameters
 * 
 * Help: 40-47
 */

const express = require('express');
const app = express();

// Put your endpoints UNDER this line  

app.get('/', (req, res, next) => {
    // Note: You still need to add a status code!
    res.status(200).send('This is a GET');
    });

app.get(`/user/:id`, (req, res, next) => {
    res.status(200).send(
        {
        userId: req.params.id,
        limit: req.query.limit
        }
    )
});
app.post('/', (req, res, next) => {
        res.status(200).send('This is a POST');
    });

app.put('/', (req, res, next) => {
            res.status(200).send('This is a PUT');
    });

app.delete('/', (req, res, next) => {
                res.status(200).send('This is a DELETE ');
    });










// Put your endpoints ABOVE this line

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})