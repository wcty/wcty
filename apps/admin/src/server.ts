import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { json } from 'body-parser'
import morgan from 'morgan'
import router from './routes'
import { COOKIES } from '@shared/config'
const app = express()

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1)
}

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
  )
)
app.use(helmet())
app.use(json())
app.use(cors({ credentials: true, origin: true }))


if (COOKIES.SECRET) {
  app.use(cookieParser(COOKIES.SECRET))
} else {
  app.use(cookieParser())
}

app.use(router)

export { app }
