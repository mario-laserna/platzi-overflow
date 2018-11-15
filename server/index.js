import http from 'http'
import Debug from 'debug'

const PORT = 3000
const debug = new Debug('platzi-overflow:root')

const app = http.createServer((req, res) => {
  debug('Petición recibida')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('Hola desde PlatziOverflow')
  res.end()
})

app.listen(PORT, () => {
  //console.log(`Server running at port ${PORT}`)
  debug(`Server running at port ${PORT}`)
})
