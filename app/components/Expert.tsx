import * as React from 'react';
import Nav from './Nav';

const styles = require('../components/Home.scss');
const beExpertStyles = require('../components/BeExpert.scss')
const expertStyles = require('../components/Expert.scss')


// interface ExpertState {rating: any, temp_rating: any}
export default class BeExpert extends React.Component<any, { connect: Boolean, localMedia: any, layoutManager: any, remoteMedia: any, client: any, num: number }>{
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

    componentWillMount() {

    }

    connection(error: any) {
        if (error){
            return error.getException();
            
        }else {
            return undefined
        }

    }

    onSubmit() {
        console.log("connect");
        this.props.history.push({
            pathname: '/Contract',
            state: { expert: this.props.experts[this.state.num]}
          })     

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
    }

    onMute() {
        let Audio = this.state.localMedia.getAudioTrack();
        Audio.setMuted(!Audio.getMuted());
    }

    onUnMute() {
        let Audio = this.state.localMedia.getAudioTrack();
        Audio.setMuted(!Audio.getMuted());
    }

    createId() {
        function S4() {  
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
         }  
         return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    }


    render() {
        if (this.state.connect == false) {
            let stars = [];
            if (this.props.experts.length > 0) {
                for (let i = 0; i < 5; i++) {
                    if (this.props.experts[this.state.num].expertise.selfRating > 0) {
                        if (i + 1 <= this.props.experts[this.state.num].expertise.selfRating) {
                            let klass = `${beExpertStyles.star}` + ` ${beExpertStyles.selected}`;
                            `${styles.appTab} ${styles.active}`
                            stars.push(
                                <label
                                    key={i}
                                    className={klass}
                                >
                                    ★
                                </label>
                            );
                        } else if (i + 1 > this.props.experts[this.state.num].expertise.selfRating) {
                            let klass = `${expertStyles.star}`;
                            `${styles.appTab} ${styles.active}`

                            stars.push(
                                <label
                                    key={i}
                                    className={klass}
                                >
                                    ★
                                </label>
                            );

                        }

                    } else {
                        let klass = `${expertStyles.star}`;
                        `${styles.appTab} ${styles.active}`

                        stars.push(
                            <label
                                key={i}
                                className={klass}
                            >
                                ★
                            </label>
                        );

                    }
                }
            }
            return (
                <div>
                    <Nav
                        button={"back"}
                        page={"Interface"}
                        back={"Find an Expert"}
                        current={"Expert"}
                        handler={this.props.handler}
                        next={this.next.bind(this)}
                        expertLength={this.props.experts.length}
                        expertNum={this.state.num}
                    />
                    <div className={styles.container} style={{ position: "relative" }}>
                        <div id={styles.bebackground} style={{ backgroundImage: 'url(' + this.props.experts[this.state.num].picture + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 560px', backgroundPosition: 'center' }}>
                            <div id="container" style={{width: "100%", height: "50%", position: "absolute"}}></div>
                            <div style={{top: 0, position: "relative"}}>
                                {this.showBack()}
                                {this.showNext()}
                            </div>
                            <div className={expertStyles.info}>
                                <div id={expertStyles.name}>
                                    {this.props.experts[this.state.num].name}
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                    <div>
                                        <div className={expertStyles.fields}>
                                            Expertise
                            </div>
                                    </div>

                                    <div style={{ marginBottom: "10px" }}>
                                        <div className={expertStyles.fields}>
                                            {this.props.experts[this.state.num].expertise.expertise.length > 50 ? this.props.experts[this.state.num].expertise.expertise.substring(0, 50) + "..." : this.props.experts[this.state.num].expertise.expertise}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={expertStyles.fields}>
                                            W{this.props.experts[this.state.num].expertise.hourlyRate + '.00 '}({'$' + this.props.experts[this.state.num].expertise.hourlyRate * .25 + '.00'}) per hour - Minimum {this.props.experts[this.state.num].expertise.minimumDuration} mins.
                            </div>
                                    </div>
                                    <div className={expertStyles.ratings}>
                                        <div style={{ fontWeight: 100, marginLeft: "10px", color: "#FFF" }}>
                                            Self-rating for Topic
                
                            <div className="star-rating">
                                                {stars}
                                            </div>

                                        </div>
                                    </div>
                                    <button style={{ backgroundColor: "white", marginLeft: "10px", width: "320px", marginTop: "10px", fontWeight: 100 }} className="btn" type="button" onClick={this.onSubmit.bind(this)}>
                                        <img style={{height: "20px", width: "auto"}} src={'../resources/Interface-Logo-btn.png'} alt="Avatar"/>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={expertStyles.container}>
                    <div className={expertStyles.video} id="container">
                    </div>
                </div>
            )
        }
    }
}
