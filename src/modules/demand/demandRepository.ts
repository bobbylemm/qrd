import { QueryTypes } from 'sequelize'
import TruckModel from '../../db/models/truck'
import { OrderRequest } from './types'

export default class DemandRepo {
    async orderRequest(data: OrderRequest, radius: number ) {
      const { route: { pickupLocation } } = data
      const kmToMeters = radius * 1000
      
      const query = `
        SELECT *,
          ROUND(earth_distance (ll_to_earth (:plat, :plng), ll_to_earth (lat, lng))::NUMERIC, 2) AS distance
        FROM Trucks
        WHERE earth_box (ll_to_earth (:plat, :plng), :radius) @> ll_to_earth (lat, lng)
        AND 
        earth_distance (ll_to_earth (:plat, :plng), ll_to_earth (lat, lng)) < :radius
        ORDER BY distance ASC LIMIT 1
      `
      try {
        const result = await TruckModel.sequelize.query(query, { replacements: { plat: pickupLocation.lat, plng: pickupLocation.lng, radius: kmToMeters }, type: QueryTypes.SELECT, raw: true, plain: true })
        
        return result ? result : { message: "No nearby truck to fulfill order, expand search radius." }
      } catch(error) {
        throw error
      }
    }
}