import Supertest from 'supertest'

import server from '../../../modules/app'

const request = Supertest(server)

test('Can add tractor(s) information for a carrier', async () => {
    const response = await request.post('/supply').send({
        carrierId: 1,
        trucksInfo: [{
            geolocation: {
                lat: 52.092876,
                lng: 5.104480
            },
            licensePlate: "adbg1",
            allowedWeight: 40,
            currentCargoWeight: 20,
            currentNoOfPallets: 2,
            maxNoOfPallets: 1
        },{
            geolocation: {
                lat: 52.371353,
                lng: 5.222124
            },
            licensePlate: "477ghhh",
            allowedWeight: 69,
            currentCargoWeight: 11,
            currentNoOfPallets: 2,
            maxNoOfPallets: 2
        }]
    })

    console.log(response, '-->>>response')
})