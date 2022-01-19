import { Router } from 'express'
import nocache from 'nocache'
import newPost from './new-post'
import apn from 'apn'
import { PUSH } from '@shared/config'

const apn_options = {
  token: {
    key: Buffer.from(PUSH.AUTH_KEY, 'utf8'),
    keyId: "CFYVGN984G",
    teamId: "82829UT44S"
  },
  production: true
};

export const apnProvider = new apn.Provider(apn_options);

const router = Router()

router.use(nocache())
router.get('/new-post', newPost)
router.post('/new-post', newPost)

export default router
