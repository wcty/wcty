import { Router } from 'express'
import notifications from './notifications'
import apn from './apn'
import web from './web'

import boom = require('express-boom')

const router = Router()

router.use(boom())
router.use('/notifications', notifications)
router.use('/apn', apn)
router.use('/web', web)

router.get('/healthz', (_req, res) => res.send('OK'))
router.use('*', (rwq, res) => {
  return res.boom.notFound()
})

export default router
