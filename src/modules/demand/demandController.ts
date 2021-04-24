import { NextFunction, Request, Response } from 'express';

import DemandRepo from './demandRepository'
import { OrderRequest } from './types'

export default class SupplyController {
    private readonly repo: DemandRepo;

    constructor() {
        this.repo = new DemandRepo();
    }

    public updateTruckInfo = async (req: Request, res: Response, next: NextFunction) => {
        const payload = req.body as OrderRequest;
        try {
            const data = await this.repo.orderRequest(payload, Number(req.query.radius)).catch(next)
            return res.status(204).json({ data })
        } catch (error) {
            return error
        }
    }
}