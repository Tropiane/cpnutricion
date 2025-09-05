import express from "express";

import Mongo from "./src/utils/mongo";

import formRouter from "./src/modules/form/form.router";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connection = new Mongo();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/form', formRouter);

//Connect to DB
connection.connect();

app.listen(3000, () => console.log('Server running on port 3000'));