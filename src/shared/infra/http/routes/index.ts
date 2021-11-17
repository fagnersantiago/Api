import { Router } from "express";

import cityRoutes from "./city.routes";

const router = Router();
router.use("/city", cityRoutes);
router.use("/client", cityRoutes);

export default router;
