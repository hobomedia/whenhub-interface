import { actionCreator } from './helpers';
import { actionCreatorVoid } from './helpers';

const Axios = require('axios');

export const history = actionCreator('GET_HISTORY');
export const language = actionCreatorVoid('UPDATE_LANGUAGES');

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

export function updateLanguages(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        return Axios({
            method: 'PUT',
            url: 'https://interface-api.whenhub.com/api/Accounts/' + args.profile['https://interface.whenhub.com/winid'] + '/profile',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`,
            },
            data: {
                languagesSpoken: args.languages
            }
        }).then(function(response: any) {
            dispatch(language())
            return response
        })
    }
}
