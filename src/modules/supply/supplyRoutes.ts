import { Router } from 'express';
import SupplyController from './supplyController';

const router = Router();
const supplyController = new SupplyController();

router.post(
    '/',
    supplyController.updateTruckInfo
);

export default router;