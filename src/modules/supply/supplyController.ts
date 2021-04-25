import { Request, Response, NextFunction } from 'express';

import SupplyRepo from './supplyRepository'
import { Truck } from './types'

export default class SupplyController {
    private readonly repo: SupplyRepo;

    constructor() {
        this.repo = new SupplyRepo();
    }

    public addTruckInfo = async (req: Request, res: Response, next: NextFunction) => {
        const { carrierId, trucksInfo } = req.body as { carrierId: number, trucksInfo: Truck[]};
        await this.repo.addTruckInfo(carrierId, trucksInfo).catch(next)
        return res.status(201).json({ message: "Trucks Info added successfully" })
    }
}