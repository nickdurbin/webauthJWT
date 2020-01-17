const express = require("express")
const Users = require("./user-model")
const router = express.Router()
const { validateToken } = require('../../middleware/validation/validateToken')
const { checkDepartment } = require('../../middleware/validation/checkDepartment')

router.get("/", validateToken, async (req, res, next) => {
  try {
    const users = await Users.find()
    const { department } = req.token
    const usersInDepartment = users.filter(user => 
      user.department === department
    )
   
    res.json(usersInDepartment)
  } catch (err) {
    next(err)
  }
})

module.exports = router;