import { Request, Response } from 'express';

import SupplyRepo from './supplyRepository'
import { Truck } from './types'

export default class SupplyController {
    private readonly repo: SupplyRepo;

    constructor() {
        this.repo = new SupplyRepo();
    }

    public updateTruckInfo = async (req: Request, res: Response) => {
        const payload = req.body as Truck;
        try {
            await this.repo.updateTruckInfo(payload)
            return res.status(204)
        } catch (error) {
            return error
        }
    }

    public createCarrier = async (req: Request, res: Response) => {
        try {
            return res.status(201)
        } catch (error) {
            return error
        }
    }
}