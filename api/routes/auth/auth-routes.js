const express = require("express")
const bcrypt = require('bcryptjs')
const { generateToken } = require('../../middleware/validation/generateToken')
const Users = require("../users/user-model")
const router = express.Router()

router.post("/register", async (req, res, next) => {
  try {
    const saved = await Users.add(req.body)
    
    res.status(201).json(saved)
  } catch (err) {
    next(err)
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await Users.findBy({ username }).first()
    const passwordValid = await bcrypt.compare(password, user.password)

    if (user && passwordValid) {
      const token = generateToken(user);
      res.status(200).json({
        token,
        message: `Welcome ${user.username}!`,
      })
    } else {
      res.status(401).json({ 
        message: "Invalid Credentials",
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router