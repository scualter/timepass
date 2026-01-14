const express = require("express")
const app = express()
const routes = require("./routes/routes")
const horaMiddleware = require("./middlewares/horaMiddleware")
const PORT = 3000

console.log("horaMiddleware:", horaMiddleware)
console.log("tipo:", typeof horaMiddleware)

app.use(horaMiddleware)

app.use("/", routes)

app.use((req, res) => {
  res.status(404).send("<h1>404 Not found</h1><p>La página no existe</p>")
})

app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
