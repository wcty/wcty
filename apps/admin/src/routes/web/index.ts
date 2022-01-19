import { Router } from 'express'
import nocache from 'nocache'
import subscription from './subscription'

const router = Router()

router.use(nocache())
router.post("/subscription", subscription);

export default router
