/*
Task 6
Create an endpoint DELETE /list/all that deletes everything in the shoppingList array. Include the
correct status code.
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

app.delete("/list/all", (req, res) => {
    shoppingList.length = 0
    res.status(200).json(shoppingList)
});

