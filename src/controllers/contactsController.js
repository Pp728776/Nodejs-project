const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
class contactsController {
  getAllContacts() {
    return asyncHandler(async (req, res) => {
      const contacts = await Contact.find()
      return res.status(200).json(contacts)
    })
  }

  getContact() {
    return asyncHandler(async (req, res) => {
      const contact = await Contact.findById(req.params.id)

      if (!contact) {
        res.status(400)
        throw new Error("Contact not found")
      }
      return res.status(200).json(contact)
    })
  }

  updateContact() {
    return asyncHandler(async (req, res) => {
      const contact = await Contact.findById(req.params.id)

      if (!contact) {
        res.status(400)
        throw new Error("Contact not found")
      }

      const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )
      return res.status(200).json(updatedContact)
    })
  }
  deleteContact() {
    return asyncHandler(async (req, res) => {
      const contact = await Contact.findById(req.params.id)

      if (!contact) {
        res.status(400)
        throw new Error("Contact not found")
      }
      await Contact.remove()
      return res.status(200).json(contact)
    })
  }
  createContact() {
    return asyncHandler(async (req, res) => {
      const { name, email, phone } = req.body
      console.log("req", req.body)

      if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory!")
      }

      const contact = await Contact.create({
        name,
        email,
        phone,
      })

      return res.status(201).json(contact)
    })
  }
}

module.exports = new contactsController()
