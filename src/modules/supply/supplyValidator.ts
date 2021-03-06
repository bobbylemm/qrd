import Joi from 'joi'

export const addTruckInfoSchema = Joi.object({
    carrierId: Joi.number().required(),
    trucksInfo: Joi.array().items(Joi.object().keys({
        geolocation: Joi.object().keys({
            lat: Joi.number().required(),
            lng: Joi.number().required()
        }),
        licensePlate: Joi.string().required(),
        allowedWeight: Joi.number().required(),
        currentCargoWeight: Joi.number().required(),
        currentNoOfPallets: Joi.number().required(),
        maxNoOfPallets: Joi.number().required()
    }))
});