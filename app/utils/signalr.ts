import { message, incomingInterface } from '../actions/interface';
declare var WHENHUB: any;
declare var $: any;
export default class SignalR {

    hub: any;
    authToken: string | null = null;
    constructor(store: any) {
        $.connection.hub.url = (window as any)['WHENHUB']['SIGNALR_URL'];
        this.hub = $.connection.expertHub;
        (<any>window)['expertHubProxy'] = this.hub; // Debug stuff
        if (this.hub != null) {
            this.hub.client.message = ((data: any) => {
                console.log('Received a message');
                store.dispatch(message(data));
            });

            this.hub.client.interfaceNotification = (data: any) => {
                store.dispatch(incomingInterface({ interface: data }));
            }

        } else {
            console.log('[SignalR] Failure to load signalR interface');
        }

        store.subscribe(() => {
            let state = store.getState();
            if (state != null && state.login != null && state.login.token && state.login.token != this.authToken) {
                this.authToken = state.login.token;
                this.Connect(state.login.token);
            }
        });

    }

    GoOnline(expertise: string, amount: number) {
        this.hub.invoke('GoOnline', expertise, amount)
    }

    Message(userId: string, message: string) {
        this.hub.invoke('Message', userId, message);
    }

    Connect(accessToken: string) {
        $.connection.hub.qs = {
            'access_token': accessToken
        };
        $.connection.hub.start()
            .done(() => {
                console.log('[SignalR] Connected', this.hub.id);
            })
            .fail(() => console.log('[SignalR] Failure to connect'));

    }
}