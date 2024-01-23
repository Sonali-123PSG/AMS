const {insertAsset} = require("../daos/assetDao")

function insertAss(req,res){
    insertAsset(req.body.aname,req.body.pdate,req.body.pcost,req.body.manufact,req.body.mod,req.body.sno,req.body.status,req.body.locationID,req.body.warDate)
}


module.exports = {insertAss}
 