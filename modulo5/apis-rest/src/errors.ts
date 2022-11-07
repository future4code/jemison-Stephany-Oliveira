import * as allTypes from './types'

export const badSyntax:allTypes.Err = {
    code: 400,
    name: 'badSyntax',
    message:"Your request is malformed. Please, check all mandatory fields like query, params or body according to the documentation."
}

export const unacceptableType:allTypes.Err = {
    code: 422,
    name: 'unacceptableType',
    message:"The 'type' provided doesn't exist. Please, choose between 'normal' and 'admin' to proceed."
}

export const dataNotFound:allTypes.Err = {
    code: 404,
    name: 'dataNotFound',
    message:"The data you're trying to fetch doesn't exist."
}

export const internalServerError:allTypes.Err = {
    code: 500,
    name: 'internalServerError',
    message:"500 Internal Server Error"
}