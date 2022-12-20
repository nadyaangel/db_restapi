const express = require('express');
const bodyParser = require('body-parser');
const { listen } = require('express/lib/application');
const app = express();


//parse application/jsonbody
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server started on port`);
});