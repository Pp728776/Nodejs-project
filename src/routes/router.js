const express = require("express")
const router = express.Router()

const contactRoutes = require("./contactRoutes")

router.use("/contacts", contactRoutes)

module.exports = router
