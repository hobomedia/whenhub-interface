import { actionCreator } from './helpers';
import { actionCreatorVoid } from './helpers';

const Axios = require('axios');

export const call = actionCreator('START_INTERFACE');
export const join = actionCreatorVoid('JOIN_INTERFACE');
export const check = actionCreatorVoid('CHECK_INTERFACE')
export const rate = actionCreatorVoid('RATE_INTERFACE');
export const end = actionCreatorVoid('END_INTERFACE');



export function startInterface(args: any = null) {
    return (dispatch: Function, getState: Function) => {
            //start infterface
            return Axios({
                method: 'POST',
                url: `https://interface-api.whenhub.com/api/Interfaces`,
                headers: {
                    'Authorization': 'Bearer ' + `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16QkdSRUU0UVVWQ09EbEZOVVJHTVVRM1F6STRSVEEwUVRWRE5EQTROakZGUXpNeE5VRXpRZyJ9.eyJodHRwczovL2ludGVyZmFjZS53aGVuaHViLmNvbS93aW5pZCI6IjVhY2JiYTljYTZhM2M2MDYwMDAwMDAwMSIsIm5pY2tuYW1lIjoidHJhY2kraW50ZXJmYWNlIiwibmFtZSI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNDIwMDRhZGNkZDA0NTFhODM0YTk1ZThmODYyZjlhMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDE4LTA0LTA5VDE5OjE3OjQ3LjYzOFoiLCJlbWFpbCI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly93aGVuaHViLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWNiYmE5Y2ZjZGMwMTZlZTllZjA1YjMiLCJhdWQiOiJ1RzZkZzV6SUJkNDVtcHQzS0FrMDVTNnFxNXBQUFJtdSIsImlhdCI6MTUyMzMwMTQ2NywiZXhwIjoxNTU0ODM3NDY3LCJhdF9oYXNoIjoiWnV0ZUtKZVNfZm9FVXVLbmNyTDZ0USIsIm5vbmNlIjoid28zSDZIYm94ZGxCVG16VlVZOEk0RmZLMGZFUmlMNlQifQ.dHk7FXNwgdeLcGGvBFgGZ15XMGTMjtgvlHWpj0nHxz7uRRtt3ingv_Ut7nPlFHCcA7HtQGRfuas3i2pOk9RecLHKskzN0hfzw_0x3nwChA4fsG11RoqI8a_7kQ5kAPppJxF2C7REPE79oCGOVdCe15IkF00CqGYAJws0kg9XeoklWlOQozkF7SIkruR38zcS557GdYjh4Uh-HQ1vZ9ka39PT22R_sM4SRmmSYx5ph2uN2Z-r_IaYuVlQ3tjV9JSBONZMhwf06CI7cpELLpMHiOH2blCbOc_88j-wLvh7SeN7UJrAk8tvxYyTfJjMM214wV6CEPIcBBLpu5EXB0gwAQ`,
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
                'Authorization': 'Bearer ' + `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16QkdSRUU0UVVWQ09EbEZOVVJHTVVRM1F6STRSVEEwUVRWRE5EQTROakZGUXpNeE5VRXpRZyJ9.eyJodHRwczovL2ludGVyZmFjZS53aGVuaHViLmNvbS93aW5pZCI6IjVhY2JiYTljYTZhM2M2MDYwMDAwMDAwMSIsIm5pY2tuYW1lIjoidHJhY2kraW50ZXJmYWNlIiwibmFtZSI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNDIwMDRhZGNkZDA0NTFhODM0YTk1ZThmODYyZjlhMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDE4LTA0LTA5VDE5OjE3OjQ3LjYzOFoiLCJlbWFpbCI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly93aGVuaHViLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWNiYmE5Y2ZjZGMwMTZlZTllZjA1YjMiLCJhdWQiOiJ1RzZkZzV6SUJkNDVtcHQzS0FrMDVTNnFxNXBQUFJtdSIsImlhdCI6MTUyMzMwMTQ2NywiZXhwIjoxNTU0ODM3NDY3LCJhdF9oYXNoIjoiWnV0ZUtKZVNfZm9FVXVLbmNyTDZ0USIsIm5vbmNlIjoid28zSDZIYm94ZGxCVG16VlVZOEk0RmZLMGZFUmlMNlQifQ.dHk7FXNwgdeLcGGvBFgGZ15XMGTMjtgvlHWpj0nHxz7uRRtt3ingv_Ut7nPlFHCcA7HtQGRfuas3i2pOk9RecLHKskzN0hfzw_0x3nwChA4fsG11RoqI8a_7kQ5kAPppJxF2C7REPE79oCGOVdCe15IkF00CqGYAJws0kg9XeoklWlOQozkF7SIkruR38zcS557GdYjh4Uh-HQ1vZ9ka39PT22R_sM4SRmmSYx5ph2uN2Z-r_IaYuVlQ3tjV9JSBONZMhwf06CI7cpELLpMHiOH2blCbOc_88j-wLvh7SeN7UJrAk8tvxYyTfJjMM214wV6CEPIcBBLpu5EXB0gwAQ`,
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
                'Authorization': 'Bearer ' + `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16QkdSRUU0UVVWQ09EbEZOVVJHTVVRM1F6STRSVEEwUVRWRE5EQTROakZGUXpNeE5VRXpRZyJ9.eyJodHRwczovL2ludGVyZmFjZS53aGVuaHViLmNvbS93aW5pZCI6IjVhY2JiYTljYTZhM2M2MDYwMDAwMDAwMSIsIm5pY2tuYW1lIjoidHJhY2kraW50ZXJmYWNlIiwibmFtZSI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNDIwMDRhZGNkZDA0NTFhODM0YTk1ZThmODYyZjlhMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDE4LTA0LTA5VDE5OjE3OjQ3LjYzOFoiLCJlbWFpbCI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly93aGVuaHViLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWNiYmE5Y2ZjZGMwMTZlZTllZjA1YjMiLCJhdWQiOiJ1RzZkZzV6SUJkNDVtcHQzS0FrMDVTNnFxNXBQUFJtdSIsImlhdCI6MTUyMzMwMTQ2NywiZXhwIjoxNTU0ODM3NDY3LCJhdF9oYXNoIjoiWnV0ZUtKZVNfZm9FVXVLbmNyTDZ0USIsIm5vbmNlIjoid28zSDZIYm94ZGxCVG16VlVZOEk0RmZLMGZFUmlMNlQifQ.dHk7FXNwgdeLcGGvBFgGZ15XMGTMjtgvlHWpj0nHxz7uRRtt3ingv_Ut7nPlFHCcA7HtQGRfuas3i2pOk9RecLHKskzN0hfzw_0x3nwChA4fsG11RoqI8a_7kQ5kAPppJxF2C7REPE79oCGOVdCe15IkF00CqGYAJws0kg9XeoklWlOQozkF7SIkruR38zcS557GdYjh4Uh-HQ1vZ9ka39PT22R_sM4SRmmSYx5ph2uN2Z-r_IaYuVlQ3tjV9JSBONZMhwf06CI7cpELLpMHiOH2blCbOc_88j-wLvh7SeN7UJrAk8tvxYyTfJjMM214wV6CEPIcBBLpu5EXB0gwAQ`,
            }
        }).then(function(response: any) {
            dispatch(join());
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
                'Authorization': 'Bearer ' + `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16QkdSRUU0UVVWQ09EbEZOVVJHTVVRM1F6STRSVEEwUVRWRE5EQTROakZGUXpNeE5VRXpRZyJ9.eyJodHRwczovL2ludGVyZmFjZS53aGVuaHViLmNvbS93aW5pZCI6IjVhY2JiYTljYTZhM2M2MDYwMDAwMDAwMSIsIm5pY2tuYW1lIjoidHJhY2kraW50ZXJmYWNlIiwibmFtZSI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNDIwMDRhZGNkZDA0NTFhODM0YTk1ZThmODYyZjlhMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDE4LTA0LTA5VDE5OjE3OjQ3LjYzOFoiLCJlbWFpbCI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly93aGVuaHViLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWNiYmE5Y2ZjZGMwMTZlZTllZjA1YjMiLCJhdWQiOiJ1RzZkZzV6SUJkNDVtcHQzS0FrMDVTNnFxNXBQUFJtdSIsImlhdCI6MTUyMzMwMTQ2NywiZXhwIjoxNTU0ODM3NDY3LCJhdF9oYXNoIjoiWnV0ZUtKZVNfZm9FVXVLbmNyTDZ0USIsIm5vbmNlIjoid28zSDZIYm94ZGxCVG16VlVZOEk0RmZLMGZFUmlMNlQifQ.dHk7FXNwgdeLcGGvBFgGZ15XMGTMjtgvlHWpj0nHxz7uRRtt3ingv_Ut7nPlFHCcA7HtQGRfuas3i2pOk9RecLHKskzN0hfzw_0x3nwChA4fsG11RoqI8a_7kQ5kAPppJxF2C7REPE79oCGOVdCe15IkF00CqGYAJws0kg9XeoklWlOQozkF7SIkruR38zcS557GdYjh4Uh-HQ1vZ9ka39PT22R_sM4SRmmSYx5ph2uN2Z-r_IaYuVlQ3tjV9JSBONZMhwf06CI7cpELLpMHiOH2blCbOc_88j-wLvh7SeN7UJrAk8tvxYyTfJjMM214wV6CEPIcBBLpu5EXB0gwAQ`,
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
                'Authorization': 'Bearer ' + `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16QkdSRUU0UVVWQ09EbEZOVVJHTVVRM1F6STRSVEEwUVRWRE5EQTROakZGUXpNeE5VRXpRZyJ9.eyJodHRwczovL2ludGVyZmFjZS53aGVuaHViLmNvbS93aW5pZCI6IjVhY2JiYTljYTZhM2M2MDYwMDAwMDAwMSIsIm5pY2tuYW1lIjoidHJhY2kraW50ZXJmYWNlIiwibmFtZSI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNDIwMDRhZGNkZDA0NTFhODM0YTk1ZThmODYyZjlhMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDE4LTA0LTA5VDE5OjE3OjQ3LjYzOFoiLCJlbWFpbCI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly93aGVuaHViLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWNiYmE5Y2ZjZGMwMTZlZTllZjA1YjMiLCJhdWQiOiJ1RzZkZzV6SUJkNDVtcHQzS0FrMDVTNnFxNXBQUFJtdSIsImlhdCI6MTUyMzMwMTQ2NywiZXhwIjoxNTU0ODM3NDY3LCJhdF9oYXNoIjoiWnV0ZUtKZVNfZm9FVXVLbmNyTDZ0USIsIm5vbmNlIjoid28zSDZIYm94ZGxCVG16VlVZOEk0RmZLMGZFUmlMNlQifQ.dHk7FXNwgdeLcGGvBFgGZ15XMGTMjtgvlHWpj0nHxz7uRRtt3ingv_Ut7nPlFHCcA7HtQGRfuas3i2pOk9RecLHKskzN0hfzw_0x3nwChA4fsG11RoqI8a_7kQ5kAPppJxF2C7REPE79oCGOVdCe15IkF00CqGYAJws0kg9XeoklWlOQozkF7SIkruR38zcS557GdYjh4Uh-HQ1vZ9ka39PT22R_sM4SRmmSYx5ph2uN2Z-r_IaYuVlQ3tjV9JSBONZMhwf06CI7cpELLpMHiOH2blCbOc_88j-wLvh7SeN7UJrAk8tvxYyTfJjMM214wV6CEPIcBBLpu5EXB0gwAQ`,
            },
            data: args.data
        }).then(function(response: any) {
            dispatch(end())
            return response
        })
    }
}
