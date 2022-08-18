
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(require('./routes/index'));
app.use(require('./routes/albums'));


app.listen(port, ()=>{
    console.log("Site is running");
})