const express = require("express"),
  bodyParser = require("body-parser"),
  routesConfig = require("./config/routes"),
  mongoseeConfig = require("./config/mongoose")
corsConfig = require("./config/cors")

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

corsConfig(app)
routesConfig(app)
mongoseeConfig.connect()

app.get("/", function(req, res) {
  res.send("Started (user) service!!!")
})

app.listen(port, () => {
  console.log("El servicio (users) está inicializado en el puerto " + port)
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send("404 Not Found")
})

module.exports = app
