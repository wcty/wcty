import { Router } from 'express'
import nocache from 'nocache'
import deleteFile from './delete-file'


const router = Router()

router.use(nocache())
router.get("/delete-file", deleteFile);

export default router
