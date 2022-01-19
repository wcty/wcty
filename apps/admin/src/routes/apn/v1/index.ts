import { Router } from 'express'
import pushPackages from './pushPackages'
import devices from './devices'
import log from './log'

const router = Router()

router.use("/devices", devices);
router.get("/pushPackages/:websitePushID", pushPackages);
router.post("/log", log);

export default router
