const express = require("express")
const router = express.Router()
const contactsController = require("../controllers/contactsController")

router.get("/:id", contactsController.getContact())
router.post("/", contactsController.createContact())
router.put("/:id", contactsController.updateContact())
router.delete("/:id", contactsController.deleteContact)
router.get("/", contactsController.getAllContacts())

module.exports = router
