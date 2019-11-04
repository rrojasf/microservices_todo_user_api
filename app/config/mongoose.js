// Set up mongoose connection
const mongoose = require("mongoose")

exports.connect = () => {
  const mongoDB = process.env.MONGO_DB || "mongodb://mongo/userManager"
  const uri = 'mongodb://userManager:YWHFQyLkMl2Pl6kM@' +
  'testmongo0-shard-00-00-zvbus.mongodb.net:27017,' +
  'testmongo0-shard-00-01-zvbus.mongodb.net:27017,' +
  'testmongo0-shard-00-02-zvbus.mongodb.net:27017/userManager?' +
  'ssl=true&replicaSet=testMongo0-shard-0&authSource=admin'
  const debug = process.env.MONGO_DEBUG || true

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'userManager' }).then(() => {
  console.log('Connection!')}).catch(err => {
  console.log(uri)
  console.error(err)
  })

  mongoose.Promise = global.Promise
  mongoose.set("debug", debug)

  const db = mongoose.connection

  db.on("error", console.error.bind(console, "MongoDB connection error:"))

  db.once("open", () => {
    console.log("Successfully connection to the db")
  })
}
