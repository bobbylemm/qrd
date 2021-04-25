import Supertest from 'supertest'

import server from '../../../modules/app'

const request = Supertest(server)

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

    console.log(response, '-->>>response')
})