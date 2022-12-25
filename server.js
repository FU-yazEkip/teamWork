require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pathHtml = __dirname + "\\public";

app.use(express.static(pathHtml));

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/myDB", { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


app.get("/frontEnd.html", (req, res) => {
    res.status(200);
});

app.get("news.html", (req, res) => {
    res.status(404);
    res.send("Site is not available right now.");
    res.end();
});




app.listen(PORT, () => {console.log(`listening of port ${PORT}`);});