"use strict"

const express = require("express");
const http = require('http');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true, }));
app.get("/", (req, res) => {
    res.json({
        info: 'Esta es la primera aplicación a contenerizar'
    })
})

http.createServer(app).listen(app.get('port'), '0.0.0.0', () => {
    console.log(`Running Express Server Listening on port ${app.get('port')}`)
})