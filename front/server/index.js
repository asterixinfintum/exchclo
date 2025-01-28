if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.use(express.urlencoded({
    extended: false
}));

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8081;

server.listen(PORT, async (error) => {
    if (error) {
        return error;
    }

    return console.log(`server started on port here now ${PORT}`);
});