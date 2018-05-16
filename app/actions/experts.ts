import { actionCreator } from './helpers';
const Axios = require('axios');

export const experts = actionCreator('GET_EXPERTS');

export function getExperts(args: any = null) {
    return (dispatch: Function, getState: Function ) => {
        Axios({
            method: 'GET',
            url: `https://interface-api.whenhub.com/api/Experts/online?query.expertise=` + `${args.search}`,
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

