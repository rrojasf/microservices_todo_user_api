let User = require("../models/User")

exports.list = (req, res) => {
  console.log("try users")

  User.find({}, function(err, user) {
    if (err) res.send(err)

    res.json(user)
  })
}

exports.detail = (req, res) => {
  console.log("try user", req.params.id)

  User.find({ _id: req.params.id })
    .then(document => {
      if (document) {
        res.json(document)
      } else {
        res.status(404).json({
          code: "not_found",
          message: "user " + req.params.id + " not found."
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        code: "internal_server_error",
        message: err.message
      })
    })
}

exports.create = (req, res) => {
  console.log("try create a user", req.body)

  if (typeof req.body.name !== "undefined") {
    let user = new User(req.body)

    user
      .save()
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.status(500).json({
          code: "internal_server_error",
          message: err.message
        })
      })
  }
}

exports.update = (req, res) => {
  console.log("try update users")

  if (typeof req.body.name !== "undefined") {
    let query = {
      _id: req.params.id
    }
    let update = {}
    let options = { new: true }

    if (req.body.name) {
      update["name"] = req.body.name
    }

    User.findOneAndUpdate(query, { $set: update }, options)
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.status(500).json({
          code: "internal_server_error",
          message: err.message
        })
      })
  }
}

exports.delete = (req, res) => {
  let query = {
    _id: req.params.id
  }

  User.deleteOne(query)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).json({
        code: "internal_server_error",
        message: err.message
      })
    })
}
