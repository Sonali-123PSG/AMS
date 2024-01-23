const {MongoClient} = require("mongodb")

const client = new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
const database = client.db("ams")
const collection = database.collection("maintenance")


function maintainAsset(assetId,mdate,mtype,mstatus,cost,duration,nextMaintenance){
    collection.insertOne({
        asset_Id:assetId,
        maintain_date:mdate,
        maintain_type:mtype,
        mstatus:mstatus,
        maintain_cost:cost,
        duration:duration,
        next_maintenance:nextMaintenance
    })

}

module.exports={maintainAsset}