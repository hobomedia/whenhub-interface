import * as React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import 'rc-slider/assets/index.css';
import { startInterface } from '../actions/interface';
import { checkInterface } from '../actions/interface';

// const Axios = require('axios');
const Slider = require('rc-slider/lib/Slider');
let styles = require('./Home.scss');
let contractStyles = require('./Contract.scss');

export class Contract extends React.Component<any, { loading: Boolean, localMedia: any, layoutManager: any, remoteMedia: any, client: any, muteButtonClick: any, value: string, section: string, duration: number, contractAmount: number, connect: Boolean }>{
    constructor(props: any) {
        super(props)
        this.state = {
            section: "deposit",
            value: "",
            duration: 0,
            contractAmount: 0,
            connect: false,
            localMedia: null,
            layoutManager: null,
            remoteMedia: null,
            client: null,
            muteButtonClick: false,
            loading: false
        }
        console.log(this.props.location.state)
    }

    componentWillMount() {
    }

    slider(value: any) {
        console.log(value)
        this.setState({ duration: value })
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value })
    }

    contractAmount() {
        let fraction = this.state.duration / 60;
        return this.props.location.state.expert.expertise.hourlyRate * fraction
    }


    check(data: any) {
        let that = this;
        console.log("check")
        this.props.dispatch(checkInterface(data)).then(function (response: any) {
            console.log(response.data.interface)
            if (response.data.interface.active == true) {
                console.log("active", response.data.interface.active)
                that.props.history.push({
                    pathname: '/Interface',
                    state: { expertInfo: that.props.location.state.expert }
                });
            } else {
                that.check(data)
            }
        })
    }

    onSubmit() {
        // this.props.history.push('/Interface');
        console.log(this.props.location.state.expert.id)
        this.setState({ loading: true });
        let args = {
            bearer: this.props.bearer,
            data: {
                // expertId: '5a44083472d2a50700bcf791',
                expertId: `${this.props.location.state.expert.id}`,
                callerId: '5acbba9ca6a3c60600000001',
                estimatedInitialMaxDuration: 0,
                purposeOfInterface: this.state.value
            }
        }

        let that = this;
        this.props.dispatch(startInterface(args)).then(function (response: any) {
            console.log(response)
            that.check(response)
        })
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

        this.props.history.push('/RateCall')

        this.state.layoutManager.removeRemoteView(this.state.remoteMedia)


    }


    onMute() {
        let Audio = this.state.localMedia.getAudioTrack();
        Audio.setMuted(!Audio.getMuted());
        this.setState({ muteButtonClick: true })
    }

    onUnMute() {
        let Audio = this.state.localMedia.getAudioTrack();
        Audio.setMuted(!Audio.getMuted());
        this.setState({ muteButtonClick: false })

    }

    muteButton() {
        if (this.state.muteButtonClick == false) {
            return <button className={contractStyles.Button + ` btn`} type="button" onClick={this.onMute.bind(this)}>
                <i className="fa fa-microphone-slash"></i>
            </button>
        } else if (this.state.muteButtonClick == true) {
            return <button className={contractStyles.Button + ` btn`} type="button" onClick={this.onUnMute.bind(this)}>
                <i className="fa fa-microphone"></i>
            </button>
        }
        return
    }


    render() {
        let expert = this.props.location.state.expert;
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <Nav
                    button={"back"}
                    page={"Interface Contract"}
                />
                <div className={styles.container}>
                    <div id={contractStyles.header}>
                        <img className={contractStyles.picture} src={expert.picture} alt="Avatar" />
                        <div>
                            {expert.name}
                        </div>

                        <div>
                            Contract for (&#65510;){this.contractAmount()}
                        </div>
                    </div>
                    <div className={contractStyles.body}>
                        <div>
                            Estimated Interface Duration
                        </div>
                        <div className={contractStyles.slider}>
                            <Slider
                                dots step={15}
                                min={15}
                                max={75}
                                marks={
                                    {
                                        15: "15",
                                        30: "30",
                                        45: "45",
                                        60: "60",
                                        75: "75"
                                    }
                                }
                                defaultValue={0}
                                onChange={this.slider.bind(this)}
                                TrackStyle={{ backgroundColor: '#37d3b4' }}
                                dotStyle={{
                                    borderColor: '#37d3b4',
                                    backgroundColor: '#37d3b4'
                                }}
                                handleStyle={{
                                    borderColor: '#37d3b4',
                                    backgroundColor: '#37d3b4'
                                }}
                            />
                        </div>

                        <div style={{ textAlign: "center", fontSize: "8pt", marginBottom: "10pt" }}>
                            This is the maximum billable duration of the call
                        </div>

                        <div style={{ display: "inline" }}>
                            Purpose of Interface
                        </div>
                        <div style={{ display: "inline", fontSize: "8pt" }}>
                            {" "}(minimum three words, 25 characters)
                        </div>

                        <form className="form-horizontal">
                            <textarea value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control" name="title"></textarea>
                        </form>

                        <button className='btn' disabled={(this.state.value.length >= 25 || this.state.value.split(" ").length >= 3) ? false : true} style={{ backgroundColor: "rgb(55, 211, 180)", color: "white", width: "300px", marginTop: "30px", borderRadius: "20px", fontWeight: 100 }} type="button" onClick={this.onSubmit.bind(this)}>
                            {this.state.loading? <i className="fa fa-spinner fa-spin" id={contractStyles.spinner}/>: "Invite to Interface"}
                        </button>


                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function (props: any, state: any) {
    console.log(props)
    return {
        profile: props.login.profile,
        token: props.login.token,
        bearer: props.login.bearer,
        wallet: props.getWalletAmount.walletAmount,
        interface: props.startInterface.start
    }

}
export default connect(mapStateToProps)(Contract);
