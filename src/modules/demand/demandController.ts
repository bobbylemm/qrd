import { NextFunction, Request, Response } from 'express';

import DemandRepo from './demandRepository'
import { OrderRequest } from './types'

export default class SupplyController {
    private readonly repo: DemandRepo;

    constructor() {
        this.repo = new DemandRepo();
    }

    public orderRequest = async (req: Request, res: Response, next: NextFunction) => {
        const payload = req.body as OrderRequest;
        const data = await this.repo.orderRequest(payload, Number(req.query.radius)).catch((error) => {
            error.statusCode = 400;
            next(error)
        })
        return res.json({ data })
    }
}