import * as React from 'react';
import { connect } from 'react-redux';
import { rateInterface } from '../actions/interface';
import { Link } from 'react-router-dom';

const rateStyles = require('./RateCall.scss');

export class RateCall extends React.Component<any, { rating: any, temp_rating: any, loading: Boolean }>{
    constructor(props: any) {
        super(props)

        this.state = {
            rating: 0,
            temp_rating: null,
            loading: false
        }

        console.log(this.props.location.state.interface)
    }

    onSubmit() {
        this.setState({loading: true})
        let that = this;
        let date = new Date();
        let args = {
            bearer: this.props.bearer,
            data: {
                rating: this.state.rating,
                dateRated: date.toISOString()
            },
            connectionId: this.props.interface.connectionId

        }
        this.props.dispatch(rateInterface(args)).then(function (response: any) {
            console.log(response)
            that.props.history.push('/')
        })
    }


    rate(rating: any): void {
        this.setState({
            rating: rating + 1,
            temp_rating: rating
        });
    }

    star_over(rating: any): void {

        this.setState({
            rating: this.state.rating,
            temp_rating: this.state.temp_rating
        });
    }

    star_out() {
        this.setState({ rating: this.state.rating });
    }

    convertDate(ISODate: any) {
        let date = new Date(ISODate);
        let hours = date.getHours();
        let minutes = date.getMinutes().toString();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = parseInt(minutes) < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;

        return strTime;
    }

    convertSeconds(seconds: any) {
        return  Math.ceil(seconds % 3600 / 60) + " mins"
    }


    render() {
        let stars = [];

        for (let i = 0; i < 5; i++) {
            let klass = `${rateStyles.star}`;
            if (this.state.rating >= i + 1 && this.state.rating != null) {
                klass += ` ${rateStyles.selected}`;
            }

            stars.push(
                <label
                    key={i}
                    className={klass}
                    onClick={this.rate.bind(this, i)}
                    onMouseOver={this.star_over.bind(this, i)}
                    onMouseOut={this.star_out.bind(this)}>
                    ★
            </label>
            );
        }
        let interfaceInfo = this.props.location.state.interface;
        return (
            <div className={rateStyles.rateContainer}>
                <div className={rateStyles.background}></div>
                <div className={rateStyles.content}>
                    <div className={rateStyles.upper}>
                        <div className={rateStyles.picContainer}>
                            <img className={rateStyles.picture} src={"../resources/expert_2.jpg"} alt="Avatar" />
                            <img className={rateStyles.picture} src={"../resources/expert.jpg"} alt="Avatar" style={{ float: "right" }} />
                        </div>
                        <div className={rateStyles.name}>Expert Name</div>
                        <div>
                            <div className={rateStyles.categoryLeft}>Start Time</div>
                            <div className={rateStyles.categoryRight}>End Time</div>
                        </div>
                        <div>
                            <div className={rateStyles.categoryLeft}>{this.convertDate(interfaceInfo.interface.accepted)}</div>
                            <div className={rateStyles.categoryRight}>{this.convertDate(interfaceInfo.interface.ended)}</div>
                        </div>

                        <div>
                            <div className={rateStyles.categoryLeft}>Interface Duration</div>
                            <div className={rateStyles.categoryRight}>Billable Duration</div>
                        </div>
                        <div>
                            <div className={rateStyles.categoryLeft}>{this.convertSeconds(interfaceInfo.interface.durationInSeconds)}</div>
                            <div className={rateStyles.categoryRight}>{this.convertSeconds(interfaceInfo.interface.billableDurationInSeconds)}</div>
                        </div>

                        <div>
                            <div className={rateStyles.categoryLeft}>Total Cost</div>
                            <div className={rateStyles.categoryRight}>USD Value</div>
                        </div>
                        <div>
                            <div className={rateStyles.categoryLeft}>(&#65510;) {(interfaceInfo.interface.contractTotal).toFixed(2)}</div>
                            <div className={rateStyles.categoryRight}>$ {(interfaceInfo.interface.contractTotalInUSD.toFixed(2))}</div>
                        </div>
                    </div>

                    <div style={{textAlign: "center", fontWeight: 100}}>
                        <div className={rateStyles.linkLeft}>
                            <Link style={{textDecoration: "underline", color: "white"}} to="">Report problem</Link>
                        </div>
                        
                        <div className={rateStyles.linkRight}>
                        <Link style={{textDecoration: "underline", color: "white"}} to="">Contact Caller</Link>

                        </div>
                    </div>

                    <div className={rateStyles.lower}>
                        <div className={rateStyles.center}>
                            Please Rate this caller
                    </div>
                        <div className={rateStyles.starRating}>
                            {stars}
                        </div>
                        <button style={{ backgroundColor: "rgb(55, 211, 180)", color: "white", width: "298px", marginTop: "30px", marginLeft: "16px", borderRadius: "20px", fontWeight: 100 }} className="btn" type="button" onClick={this.onSubmit.bind(this)}>
                            {this.state.loading? <i className="fa fa-spinner fa-spin" id={rateStyles.spinner}/>: "Ok"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (props: any, state: any) {
    return {
        profile: props.login.profile,
        token: props.login.token,
        bearer: props.login.bearer,
        wallet: props.getWalletAmount.walletAmount,
        interface: props.startInterface.start
    }

}


export default connect(mapStateToProps)(RateCall);
