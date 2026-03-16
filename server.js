require("dotenv").config()

const express = require("express")
const movieRoutes = require("./routes/movieRoutes")

const app = express()

app.use(express.static("public"))

app.use("/api", movieRoutes)

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})