import { actionCreator } from './helpers';
const Axios = require('axios');

export const conversion = actionCreator('GET_CONVERSION');


export function getConversion(args: any = null) {
    return (dispatch: Function, getState: Function) => {
        Axios({
            method: 'GET',
            baseURL: 'https://interface-api.whenhub.com/api/General/conversionRate',
            headers: {
                'Authorization': 'Bearer ' + `${args.bearer}`,
            }
        }).then(function (response: any) {
            // console.log(response)
            dispatch(conversion(response.data))
        }).catch(function (error: any) {
            console.log(error);
        })
    };

}


