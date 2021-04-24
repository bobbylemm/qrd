import { Router } from "express";
import demandRoutes from "./demand/demandRoutes";
import supplyRoutes from "./supply/supplyRoutes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "welcome to an order mini matching platform" });
});

router.use("/demand", demandRoutes);
router.use("/supply", supplyRoutes);

export default router;