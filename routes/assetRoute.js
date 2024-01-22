const express = require("express")
const {insertAss} = require("../services/assetServices")
const route = express.Router()

route.post('/assetTab',(req,res) => {
    insertAss(req,res)
})

module.exports =  route