import { GeoLocation } from '../../shared/types'

export interface Truck {
    id?: number;
    geolocation: GeoLocation;
    licensePlate: string;
    allowedWeight: number;
    currentCargoWeight: number;
    currentNoOfPallets: number
    maxNoOfPallets: number;
}