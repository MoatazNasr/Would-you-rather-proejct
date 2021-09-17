export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export function logIN(payload){

    return {

        type: LOG_IN,
        payload
    }

}

export function logOUT(payload){

    return {
        type: LOG_OUT,
        payload
    }
}
