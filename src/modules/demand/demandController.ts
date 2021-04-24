import { Request, Response } from 'express';

import DemandRepo from './demandRepository'
import { OrderRequest } from './types'

export default class SupplyController {
    private readonly repo: DemandRepo;

    constructor() {
        this.repo = new DemandRepo();
    }

    public updateTruckInfo = async (req: Request, res: Response) => {
        const payload = req.body as OrderRequest;
        try {
            await this.repo.orderRequest(payload, Number(req.query.radius))
            return res.status(204)
        } catch (error) {
            return error
        }
    }
}