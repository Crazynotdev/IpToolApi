import router from "express"
import getIpinfo from "../controllers/ipController"

const router = router()
router.get("/", getIpinfo)
export default router
