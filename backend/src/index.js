const express = require('express');
require('./db/mongoose');
require('dotenv').config();
const UserRouter = require("./routers/user");

const app = express()

const port = process.env.PORT
const ip = process.env.IP_ADDR || '127.0.0.1'

app.use(express.json())
app.use(UserRouter)

app.listen(port, () => {
    console.log('Server is running on ', ip + ':' + port)
})

app.get('/',(req,res)=>{
    console.log(req.headers);
    res.send("TheCodeWorks backend service");
})
