const express = require('express');
require('./db/mongoose');


const app = express()
const port = process.env.PORT || 3000
const ip = process.env.IP_ADDR || '127.0.0.1'
app.use(express.json())


app.listen(port, () => {
    console.log('Server is running on ', ip + ':' + port)
})

app.get('/',(req,res)=>{
    console.log(req.headers);
    res.send("TheCodeWorks");
})
