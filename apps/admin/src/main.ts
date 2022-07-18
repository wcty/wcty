import axios from 'axios'
import { APPLICATION } from '@shared/config'
import { app } from './server'
import { gql } from 'graphql-tag'

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const isHasuraReady = async () => {
  try {
    await axios.get(`${APPLICATION.HASURA_ENDPOINT.replace('/v1/graphql', '/healthz')}`)
  } catch (err) {
    console.log(`Couldn't find an hasura instance running on ${APPLICATION.HASURA_ENDPOINT}`)
    console.log('wait 10 seconds')
    await delay(10000)
    console.log('exit 1')
    process.exit(1)
    console.log('exit 1 completed')
  }
}

const start = async (): Promise<void> => {
  await isHasuraReady()

  app.listen(APPLICATION.PORT, APPLICATION.HOST, () => {
    if (APPLICATION.HOST) {
      console.log(`Running on http://${APPLICATION.HOST}:${APPLICATION.PORT}`)
    } else {
      console.log(`Running on port ${APPLICATION.PORT}`)
    }
  })
}

start()
