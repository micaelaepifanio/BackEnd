const express = require('express')
const {Contenedor} = require ('./Back2')

const app = express()

const PORT = 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

app.get('/productos', (req, res) => {
    res.send(productos)
 })

 app.get('/productoRandom', (req, res) => {
   res.send(productos [Math.floor(Math.random() * 3)])
})
 
 const productos = new Contenedor('productos.txt').getAll ()
  