import { actionCreator } from './helpers';
import { actionCreatorVoid } from './helpers';

const Axios = require('axios');

export const call = actionCreator('START_INTERFACE');
export const join = actionCreatorVoid('JOIN_INTERFACE');
export const reject = actionCreatorVoid('REJECT_INTERFACE');
export const check = actionCreatorVoid('CHECK_INTERFACE')
export const rate = actionCreatorVoid('RATE_INTERFACE');
export const end = actionCreatorVoid('END_INTERFACE');
export const message = actionCreator('MESSAGE_RECEIVED');



export function startInterface(args: any = null) {
    return (dispatch: Function, getState: Function) => {
            return Axios({
                method: 'POST',
                url: `https://interface-api.whenhub.com/api/Interfaces`,
                headers: {
                    'Authorization': 'Bearer ' + `${args.bearer}`
                },
                data: args.data
            }).then(function (response: any) {
                
                dispatch(call(response.data));
                return response.data
            })
    }
};


export function checkInterface(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        return Axios({
            method: 'GET',
            url: 'https://interface-api.whenhub.com/api/Interfaces/' + args.connectionId + '/status',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`
            }
        }).then(function(response: any) {
            dispatch(check());
            return response
        })
    }
}


export function joinInterface(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        return Axios({
            method: 'POST',
            url: 'https://interface-api.whenhub.com/api/Interfaces/' + args.connectionId + '/join',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`
            }
        }).then(function(response: any) {
            dispatch(join());
            return response
        })
    }
}

export function rejectInterface(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        return Axios({
            method: 'POST',
            url: 'https://interface-api.whenhub.com/api/Interfaces/' + args.connectionId + '/reject',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`
            }
        }).then(function(response: any) {
            dispatch(reject());
            return response
        })
    }
}

export function rateInterface(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        return Axios({
            method: 'POST',
            url: 'https://interface-api.whenhub.com/api/Interfaces/' + args.connectionId + '/rating',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`
            },
            data: args.data
        }).then(function(response: any) {
            dispatch(rate());
            return response
        })
    }
}

export function endInterface(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        return Axios({
            method: 'POST',
            url: 'https://interface-api.whenhub.com/api/Interfaces/' + args.connectionId + '/end',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`
            },
            data: args.data
        }).then(function(response: any) {
            dispatch(end())
            return response
        })
    }
}

