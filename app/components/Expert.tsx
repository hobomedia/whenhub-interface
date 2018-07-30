import * as React from 'react';
// import Nav from './Nav';
// import { actionCreatorVoid } from '../../app/actions/helpers';
// / <reference path="'../../libraries/fm.icelink.d.ts" />

const styles = require('../components/Home.scss');
// const beExpertStyles = require('../components/BeExpert.scss')
const expertStyles = require('../components/Expert.scss')
// const iceLinkApp = require('./IceLinkApp');

import IceLinkApp from './IceLinkApp';

// interface ExpertState {rating: any, temp_rating: any}
export default class Expert extends React.Component<any, { connect: Boolean, localMedia: any, layoutManager: any, remoteMedia: any, client: any, num: number }>{




    app = new IceLinkApp();

    constructor(props: any) {
        super(props)
        this.state = {
            connect: false,
            localMedia: null,
            layoutManager: null,
            remoteMedia: null,
            client: null,
            num: 0
        }
    }




    componentDidMount() {
        console.log("connect");
        this.setState({ connect: true });

        this.app.sessionId = '617585670';
        this.app.name = 'Jonathan';


        this.app.startLocalMedia(this.refs.container as HTMLElement, false).then((localMedia: fm.icelink.LocalMedia) => {
            // Update the UI context.



            // Join the session.
            return this.app.joinAsync();
        }, (ex: any) => {
            console.error('Could not start local media.', ex);
            alert('Could not start local media.\n' + ex.message);
            stop();
        }).then((o: any) => {
            // Enable the leave button.
            console.log('I joined');
        }, (ex: any) => {
            console.error('Could not join session.', ex);
        });

    }

    showBack() {
        if (this.props.experts.length > 0 && this.state.num > 0) {
            return <button className={expertStyles.back} onClick={this.back.bind(this)}>
                <i className="fa fa-chevron-circle-left"></i>
            </button>
        }
        return
    }

    showNext() {
        if (this.props.experts.length > 0 && this.props.experts.length >= this.state.num + 2) {
            return <button className={expertStyles.next} onClick={this.next.bind(this)}>
                <i className="fa fa-chevron-circle-right"></i>
            </button>
        }
        return
    }


    next() {
        this.setState({ num: this.state.num + 1 })
    }

    back() {
        this.setState({ num: this.state.num - 1 })

    }
    onStopSubmit() {
        const that = this;
        this.state.localMedia.stop().then(function (lm: any) {
            console.log("media capture stopped");
        })

        this.state.client.disconnect({
            onComplete: function (e: any) {
                console.log("disconnected");
                that.setState({ connect: false })
            }
        });

        // this.props.history.push('/RateCall')

        // this.state.layoutManager.removeRemoteView(this.state.remoteMedia.getId())


    }

    createId() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    }


    render() {
        return (<div className={styles.container}>
            <div className={expertStyles.video} id="container" ref="container">

                <button className={expertStyles.button + ` btn`} type="button" onClick={this.onStopSubmit.bind(this)}>
                    End Interface
                    </button>
            </div>
        </div>);
    }
}
