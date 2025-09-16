const express = require("express");
const dotenv = require("dotenv");

dotenv.config();


const app = express();
const PORT = process.env.PORT



app.get('/', (req, res) => {
    console.log("", req.headers['x-forwarded-for'])
    res.json({
        message: "Home Page",
        forward_ip: req.headers['x-forwarded-for'],
        ip: req.ip,
    })
})

app.get('/users', (req, res) => {
    res.json({
        message: "Users Page",
        forward_ip: req.headers['x-forwarded-for'],
        ip: req.ip,
    })
})


app.get('/messages', (req, res) => {
    res.json({
        message: "Messages Page",
        forward_ip: req.headers['x-forwarded-for'],
        ip: req.ip,
    })
})

app.get('/xy', (req, res) => {
    res.json({
        message: "XY Page",
        forward_ip: req.headers['x-forwarded-for'],
        ip: req.ip,
    })
})

app.get('/ab', (req, res) => {
    res.json({
        message: "AB Page",
        forward_ip: req.headers['x-forwarded-for'],
        ip: req.ip,
    })
})


app.listen(PORT, () => {
    console.log("Server Started On Port: ", PORT);
})