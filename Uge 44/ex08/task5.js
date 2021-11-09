/*
Task 5
Create an endpoint POST /list that accepts JSON and adds it to the
shoppingList array. It should return the updated shoppingList array. Include
the correct status code.
An example is provided on the right, but it might differ because of your
implementation of task 2
*/

const shoppingList = [
];

let firstItem =   {
    id: 1,
    name: 'Soap',
    price: 10,
    quantity: 2,
    shop: 'Lidl'
};

shoppingList.push(firstItem)

const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => 
    console.log(`Server is listening on port ` + PORT)
);

app.get('/list', (req, res) => {
    res.status(200).json(shoppingList);
});

app.post('/list', (req, res) => {
    shoppingList.push(req.body);
    res.status(200).json(shoppingList);
});








