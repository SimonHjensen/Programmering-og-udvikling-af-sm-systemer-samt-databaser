/* 
Create an endpoint GET /list/all that returns the shoppingList array as JSON. Include the correct
status code.
*/
const express = require('express');
const app = express();

const PORT = 3000;

const shoppingList = [
    {
    id: 1,
    name: "Soap",
    price: 10,
    quantity: 2,
    shop: "Lidl" }
];

//const router = express.Router()
//app.use(router) - definerer routeren

app.get('/list/all', (req, res) => {
    res.status(200).json(shoppingList);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port `+ PORT)
});

//module.exports = router; - Bruges hvis man deler sine endpoints ud på andre filer