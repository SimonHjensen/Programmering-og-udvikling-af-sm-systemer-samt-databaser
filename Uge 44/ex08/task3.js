// Run “npm init” and install express. Start an Express server listening on port 3000. 

const express = require('express');
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port`+ PORT)
});
