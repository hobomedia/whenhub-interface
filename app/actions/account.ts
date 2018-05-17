import { actionCreator } from './helpers';
const Axios = require('axios');

export const history = actionCreator('GET_HISTORY');

export function getHistory(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        Axios({
            method: 'GET',
            baseURL: 'https://interface-api.whenhub.com/api/Accounts/',
            url: args.profile['https://interface.whenhub.com/winid'] + '/interfaceHistory',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`
            }
        }).then(function (response: any) {
            dispatch(history(response.data))
        }).catch(function (error: any) {
            console.log(error);
        })
    };
}

