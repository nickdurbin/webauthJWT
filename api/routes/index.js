const authRouter = require('./auth/auth-routes')
const userRouter = require('./users/user-routes')

module.exports = server => {
  server.use("/api/auth", authRouter)
  server.use("/api/users", userRouter)
}