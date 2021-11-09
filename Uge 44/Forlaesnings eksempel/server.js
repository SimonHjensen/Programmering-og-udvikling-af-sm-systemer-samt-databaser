const express = require('express');

const itemsRouter = require('./routes/items');
const app = express();

app.use(express.json());

app.use('/items', itemsRouter);

app.use(`/`, function (req, res) {
    res.send('API works');
});

const port = 300;
app.listen(port, () => {
    console.log('Server listening on port' + port);
});


