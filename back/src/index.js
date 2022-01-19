import '@babel/polyfill' // This npm module import preset with a babel decorator
//import http from 'http' // This npm module import the method http
import app from '@app' // // This npm module import the method app
//import chalk from 'chalk' // This npm module import the method chalk
import { getEnv } from '@config/env' // This custom module import the method getEnv
//import { createConnection } from 'typeorm' // This npm module import the method createConnection
import { createTypeORMConnection } from '@config/connTypeORM'

/**
 * @destructuring of the getEnv() function to get enviromental variables from .env file (this only works on development mode)
 */
const { PORT_NODE } = getEnv()

/**
 * @PORT variable that choose a value of a port depending on the enviroment
 */
const PORT = process.env.PORT || PORT_NODE
// 3005

/**
 * @param  {} app
 * @param  {} PORT
 * @typeConn variable that create a connection to the typeORM Entities and Schemas (only one connection need it)
 */

export async function startServer() {
  try {
    app.listen(PORT)
    await createTypeORMConnection()
    console.log('Express server listening on port ' + PORT)
  } catch (e) {
    console.log(e)
  }
}

startServer()
