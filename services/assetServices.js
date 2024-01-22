const {insertAsset} = require("../daos/assetDao")

function insertAss(req,res){
    insertAsset(req.body.aname,req.body.pdate,req.body.pcost,req.body.manufact,req.body.mod,req.body.sno,req.body.status,req.body.locationID,req.body.warDate)
}
module.exports = {insertAss}

//insertAss("computer","12-12-2002",200,"usha","advance","s123","damaged","l123","12-02-2004")

//insertAsset(aname,pdate,pcost,manufact,mod,sno,status,locationID,warDate)
/*
const express = require("express")
const {insertAss} = require("../services/assetServices")
const route = express.Router()

route.post('/assetTab',(req,res) => {
})

module.exports =  route
*/