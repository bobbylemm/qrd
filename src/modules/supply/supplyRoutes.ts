import { Router } from 'express';
import SupplyController from './supplyController';
import validationHandler from '../../middleware/validationHandler'
import { addTruckInfoSchema } from './supplyValidator'

const router = Router();
const supplyController = new SupplyController();

router.post(
    '/',
    validationHandler(addTruckInfoSchema),
    supplyController.addTruckInfo
);

export default router;