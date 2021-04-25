import Joi from 'joi'

const geolocation = Joi.object({
    lat: Joi.number().required(),
    lng: Joi.number().required()
})

export const orderRequestSchema = Joi.object({
    route: Joi.object({
        pickupLocation: geolocation,
        deliveryLocation: geolocation
    }),
    cargo: Joi.object({
        totalWeight: Joi.number().required(),
        noOfPallets: Joi.number().required()
    })
});