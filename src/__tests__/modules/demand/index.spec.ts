import Supertest from 'supertest'

import server from '../../../modules/app'

const request = Supertest(server)

describe('Demand Module', () => {
    test('Can make an order request for closest trucks', async () => {
        const response = await request.post('/demand?radius=50').send({
            route: {
                pickupLocation: {
                    lat: 52.020447,
                    lng: 4.715517
                }
            },
            cargo: {
                totalWeight: 100,
                noOfPallets: 2
            }
        })
    
        expect(response.status).toEqual(200)
        expect(response.body.data).toEqual(
            expect.objectContaining({
                id: 1,
                lat: 52.011112,
                lng: 4.711111,
                licensePlate: 'adbg1',
                allowedWeight: 10,
                currentCargoWeight: 10,
                currentNoOfPallets: 2,
                maxNoOfPallets: 3,
                carrierId: 1,
                distance: '1082.13'
            })
        )
    })
    
    test('Should fail validation when payload is incomplete', async () => {
        const response = await request.post('/demand?radius=50').send({
            route: {
                pickupLocation: {
                    lat: 52.020447,
                    lng: 4.715517
                }
            },
            cargo: {
                noOfPallets: 2
            }
        })
    
        expect(response.status).toEqual(422)
        expect(response.body).toEqual({ error: '"cargo.totalWeight" is required' })
    })
})