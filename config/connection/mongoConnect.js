
const mongoClient = require('mongodb').MongoClient
const state = {
    db: null
}
module.exports.connect = (callback) => {
    const url = "mongodb://localhost:27017"
    const dbname = "social_media"
    mongoClient.connect(url,(err, data) => {
        // {useUnifiedTopology: true},
        if (err) return callback(err)
        state.db = data.db(dbname)
        callback()
    })

}
module.exports.get = () => state.db
