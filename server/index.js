import http from 'http'
import Debug from 'debug'
import app from './app'

const PORT = 3000
const debug = new Debug('platzi-overflow:root')

app.listen(PORT, () => {
  // console.log(`Server running at port ${PORT}`)
  debug(`Server running at port ${PORT}`)
  // debug('------ node_env ' + process.env.NODE_ENV)
})
