import { GeoLocation } from '../../shared/types'

export interface OrderRequest {
    route: {
        pickupLocation: GeoLocation,
        deliveryLocation: GeoLocation
    };
    cargo: {
        totalWeight: number;
        noOfPallets: number;
    }
}