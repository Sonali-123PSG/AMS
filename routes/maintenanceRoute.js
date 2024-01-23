const express = require("express")
const {maintainAss} = require("../services/maintenanceServices")
const route = express.Router()
const path = require("path")

route.post('/maintainTab',(req,res) => {
    console.log(req.body)
    maintainAss(req,res)
})
route.get('/',(req,res)=>res.sendFile(path.join(__dirname,"../public/maintenance.html")))
module.exports =  route