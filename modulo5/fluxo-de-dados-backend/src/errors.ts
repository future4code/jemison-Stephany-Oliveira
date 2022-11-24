import * as typeAliases from './types'

export const internalServerError:typeAliases.Err = {
    code: 500,
    name:'internalServerError',
    message:'500 Internal Server Error'
}

export const noID:typeAliases.Err = {
    code:400,
    name:'noID',
    message:"You must provide a Product ID to apply the price change."
}

export const missingProductData:typeAliases.Err = {
    code:400,
    name:'missingProductData',
    message:'You must fill all mandatory fields in your body request: name and price.'
}

export const wrongTypeProvided:typeAliases.Err = {
    code:422,
    name:'wrongTypeProvided',
    message:"'name' must always be a string and 'price' always must be a number. Please, try again."
}

export const unacceptableValue:typeAliases.Err = {
    code:422,
    name:'unacceptableValue',
    message:"You provided a Unacceptable Value. Please, try again."
}

export const missingPriceData:typeAliases.Err = {
    code: 400,
    name:'missingPriceData',
    message:'You must fill all mandatory fields in your body request: price.'
}

export const productNotFound:typeAliases.Err = {
    code: 404,
    name:'productNotFound',
    message:"This Product ID doesn't exist. Please, add a valid Product ID."
}

export const productsEndpointNotFound:typeAliases.Err = {
    code: 404,
    name:'productsEndpointNotFound',
    message:'This endpoint has no data yet. Please, add new products using /new endpoint and then try again.'
}
