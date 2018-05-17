import { actionCreator } from './helpers';
const Axios = require('axios');

export const walletAmount = actionCreator('GET_WALLET_AMOUNT');

export function getWalletAmount(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        console.log("hit")
        Axios({
            method: 'GET',
            baseURL: 'https://interface-api.whenhub.com/api/Accounts/',
            url: args.profile['https://interface.whenhub.com/winid'] + '/balance',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`
            }
        }).then(function (response: any) {
            console.log(response.data);
            dispatch(walletAmount(response.data))
        }).catch(function (error: any) {
            console.log(error);
        })
    };

}

