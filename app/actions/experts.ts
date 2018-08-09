import { actionCreator } from './helpers';
import { actionCreatorVoid } from './helpers';

const Axios = require('axios');

export const experts = actionCreator('GET_EXPERTS');
export const online = actionCreatorVoid('GO_ONLINE');
export const offline = actionCreatorVoid('GO_OFFLINE');


export function getExperts(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        Axios({
            method: 'GET',
            baseURL: `https://whenhub-interface-api-staging.azurewebsites.net/api/Experts?query`,
            url : args.query,
            headers: {
              'Authorization': 'Bearer ' + `${args.bearer}`
            }
          }).then(function (response: any) {
              console.log(response.data)
            dispatch(experts(response.data));
        }).catch(function (error: any) {
            console.log(error)
          })
    };
}

export function goOnline(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        return Axios({
            method: 'PUT',
            url: 'https://whenhub-interface-api-staging.azurewebsites.net/api/Experts/' + args.profile['https://interface.whenhub.com/winid'] + '/online',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`,
            },
            data: args.data
        }).then(function(response: any) {
            dispatch(online())
            return response
        })
    }
}

export function goOffline(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        return Axios({
            method: 'PUT',
            url: 'https://whenhub-interface-api-staging.azurewebsites.net/api/Experts/' + args.profile['https://interface.whenhub.com/winid'] + '/offline',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`,
            },
            data: args.data
        }).then(function(response: any) {
            dispatch(online())
            return response
        })
    }
}


export function getExpertCount(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        return Axios({
            method: 'GET',
            baseURL: `https://whenhub-interface-api-staging.azurewebsites.net/api/Experts/count`,
            headers: {
              'Authorization': 'Bearer ' + `${args.bearer}`
            }
          }).then(function (response: any) {
              console.log(response)
              return response
        }).catch(function (error: any) {
            console.log(error)
          })
    };
}
