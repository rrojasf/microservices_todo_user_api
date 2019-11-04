const express = require("express")
const apiController = require("../controllers/apiController")

const router = express.Router()

router.get("/users/", apiController.list)
router.get("/users/:id", apiController.detail)
router.post("/users/", apiController.create)
router.put("/users/:id", apiController.update)
router.patch("/users/:id", apiController.update)
router.delete("/users/:id", apiController.delete)

module.exports = router
