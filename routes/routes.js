const express = require("express")
const router = express.Router()
const validarHora = require("../middlewares/validarHora")

router.get("/", (req, res) => {
  const mensaje = req.query.mensaje || ""
  res.send(`
    <h1>Bienvenido</h1>
    <p>Son las: ${req.horaTotal}</p>
    <p>${mensaje}</p>
    <a href="/endroute"><button>Entrar</button></a>
  `)
})

router.get("/endroute", validarHora, (req, res) => {
  res.send("Bienvenido a la ruta final")
})

module.exports = router
