const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const DB_USERNAME = "remessa";
const DB_PASSWORD = "remessa";

const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@remessaestudos.8hfozh9.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);