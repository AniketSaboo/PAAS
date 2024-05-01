
const express = require('express');
const path = require('path');

const app = express();  //Express ka object matlab instance banaya humne
const port = 3000; //3000 pr port dala humne

app.use(express.static(path.join(__dirname, 'public')));//Serve Static Files from the 'public' folder

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



