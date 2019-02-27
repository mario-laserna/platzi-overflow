import express from 'express'
import bodyParse from 'body-parser'
import { question } from "./routes"

const app = express()

// Configuracion de body parse
app.use(bodyParse.json()) // body como json
app.use(bodyParse.urlencoded({ extended: true })) // para hacer uso de la url en utf8

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE')
    next()
  })
}

app.use('/api/questions', question)

export default app
