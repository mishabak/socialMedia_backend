 const db = require('../config/connection/mongoConnect')
 const collection = require('../config/collection/collection')
 const objectId = require('mongodb').ObjectId

module.exports = {
    createNewPost:(data)=>{
        return new Promise(async(resolve,reject)=>{
            data.userId = objectId(data.userId)
            var resolvingData = await db.get().collection(collection.POST_COLLECTION).insertOne(data)
            resolvingData?resolve():reject()
        })
    },
    fetchPost:()=>{
        return new Promise(async(resolve,reject)=>{
          var resolvingData =  db.get().collection(collection.POST_COLLECTION).find().toArray()
          resolvingData?resolve(resolvingData):reject()
        })
    }
}