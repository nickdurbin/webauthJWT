const express = require("express")
const Users = require("./user-model")
const router = express.Router()
const { validateToken } = require('../../middleware/validation/validateToken')

router.get("/", validateToken, async (req, res, next) => {
  try {
    const users = await Users.find()
    
    res.json(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router;