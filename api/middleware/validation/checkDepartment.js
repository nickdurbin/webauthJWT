const checkDepartment = (department) => {
    return function(req, res, next) {
    if (req.token && department === req.token.department) {
      next()
    } else {
      res.status(403).json({ message: "You do not have the power to view this."})
    }
  }
}

module.exports = {
  checkDepartment
}