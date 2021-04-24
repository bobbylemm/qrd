import TruckModel from '../../db/models/truck'
import { Truck } from './types'

export default class SupplyRepo {
  async addTruckInfo(carrierId: number, data: Truck[]) {
    const payload = data.map(item => {
      let { geolocation, ...rest } = item
      return {
        ...rest,
        lat: geolocation.lat,
        lng: geolocation.lng,
        carrierId
      }
    })
    try {
      return await TruckModel.bulkCreate(payload)
    } catch(error) {
      console.log(error)
      throw error
    }
  }
}