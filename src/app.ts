import * as express from 'express'
import * as bodyParser from 'body-parser'
import router from './routes'

const appPort = process.env.APP_PORT
const ntest1app = express()

ntest1app.use(bodyParser.json())
ntest1app.use(router)

ntest1app.listen(appPort, () => {
  console.log(`Starting ntest1 on port: ${appPort}`)
})
