const express = require("express")
const app = express()
const assetR = require("./routes/assetRoute")
const maintainA = require("./routes/maintenanceRoute")
const bodyParser = require("body-parser");
const port = 8085
const path = require('path')
const cors = require("cors")

app.use(bodyParser.json());
app.use(cors({ origin: 'http://127.0.0.1:8085' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.use('/assetTable',assetR)
app.use('/maintainTable',maintainA)
app.listen(port,()=>console.log('Server is running on port 8085'))
