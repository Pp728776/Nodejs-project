const express = require("express")
const routes = require("./src/routes/router")
const errorHandler = require("./src/middlewares/errorHandlers")
const connectDB = require("./src/config/dbConfig")

connectDB()
const app = express()

const port = 8000
app.use(express.json())
app.use("/api", routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`listening port : ${port}`)
})
