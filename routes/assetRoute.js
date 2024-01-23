const express = require("express")
const {insertAss, maintainAss} = require("../services/assetServices")
const route = express.Router()
const path = require("path")

route.post('/assetTab',(req,res) => {
    //res.send("hello")
     insertAss(req,res)

})
route.get("/",(req,res)=>res.sendFile(path.join(__dirname,"../public","asset.html")))


module.exports =  route