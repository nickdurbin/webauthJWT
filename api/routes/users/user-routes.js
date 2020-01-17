const express = require("express")
const Users = require("./user-model")
const router = express.Router()
const { validateToken } = require('../../middleware/validation/validateToken')
const { checkDepartment } = require('../../middleware/validation/checkDepartment')

router.get("/", validateToken, async (req, res, next) => {
  try {
    console.log('decoded', req.token)
    const users = await Users.find()

    const { department } = req.token
    console.log('department', department)
    console.log(users)
    const usersInDepartment = users.map(user => {
      console.log(user.department, department)
      if (user.department === department) {
        return user
      }
    })
    console.log(usersInDepartment)
    res.json(usersInDepartment)
  } catch (err) {
    next(err)
  }
})

module.exports = router;