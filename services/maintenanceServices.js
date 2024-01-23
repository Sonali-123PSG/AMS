const{maintainAsset} = require("../daos/maintenanceDao")

function maintainAss(req,res){
    console.log(req.body.assetId)
    maintainAsset(req.body.assetId,req.body.mdate,req.body.mtype,req.body.mstatus,req.body.cost,req.body.duration,req.body.nextMaintenance)
   // maintainAsset("chair","","steel","inuse",500,"6month","")
}
//maintainAss()
module.exports = {maintainAss}