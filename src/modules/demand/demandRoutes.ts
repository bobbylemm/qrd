import { Router } from 'express';
import DemandController from './demandController';

const router = Router();
const demandController = new DemandController();

router.post(
    '/',
    demandController.updateTruckInfo
);

export default router;