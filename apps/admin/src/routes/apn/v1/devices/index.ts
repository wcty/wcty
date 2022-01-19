import { Router } from 'express'
import nocache from 'nocache'
import postSubscription  from './postSubscription'
import deleteSubscription from './deleteSubscription'

const router = Router()

router.use(nocache())
router.post("/:deviceToken/registrations/:websitePushID", postSubscription);
router.delete("/:deviceToken/registrations/:websitePushID", deleteSubscription);

export default router
