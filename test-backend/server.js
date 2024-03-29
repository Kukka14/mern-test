const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const montgoose = require('mongoose');

const router = require('./router');


app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://kukka14:kukka14@mern-test.4kgpfjo.mongodb.net/?retryWrites=true&w=majority'

const connect = async () => {
    try{
        await montgoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch {
        console.log('MongoDB Error', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node Server is listening to ${server.address().port}`)
});

app.use('/api', router);