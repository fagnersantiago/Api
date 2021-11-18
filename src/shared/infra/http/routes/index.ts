import { Router } from "express";

import cityRoutes from "./city.routes";
import clientRoutes from "./client.routes";

const router = Router();
router.use("/city", cityRoutes);
router.use("/client", clientRoutes);
router.use("/", cityRoutes);

export default router;
