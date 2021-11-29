import { NextFunction, Request, Response } from "express";

const express = require('express');
const app = express();
const path = require('path')
const port = process.env.port || 5000

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Here comes a request for " + req.url + " with method " + req.method + ".")  
    next()
})

//app.use(express.static(path.join(__dirname, '../public')))

app.get('/express-backend', (req, res) => {
    res.send({ message: "Your express backend is connected!" })
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})
