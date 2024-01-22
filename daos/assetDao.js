const {MongoClient} = require("mongodb")

const client = new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
const database = client.db("ams")
const collection = database.collection("asset")

function insertAsset(aname,pdate,pcost,manufact,mod,sno,status,locationID,warDate){
    collection.insertOne({
        asset_Name:aname, 
        purchase_Date:pdate,
        purchase_Cost:pcost,
        manufacturer:manufact,
        model:mod,
        serial_no:sno,
        status:status,
        location_ID:locationID,
        warranty_Date:warDate
    })

}

module.exports = {insertAsset}