import { Router } from 'express';
import DemandController from './demandController';
import validationHandler from '../../middleware/validationHandler'
import { orderRequestSchema } from './demandValidator'

const router = Router();
const demandController = new DemandController();

router.post(
    '/',
    validationHandler(orderRequestSchema),
    demandController.orderRequest
);

export default router;