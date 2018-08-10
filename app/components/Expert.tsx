import * as React from 'react';
import Nav from './Nav';

const styles = require('../components/Home.scss');
const beExpertStyles = require('../components/BeExpert.scss')
const expertStyles = require('../components/Expert.scss')


// interface ExpertState {rating: any, temp_rating: any}
export default class BeExpert extends React.Component<any, { show: Boolean, num: number}>{
    constructor(props: any) {
        super(props)
        this.state = {
            num: 0,
            show: false,
        }

    }

    positions() {
        let expert  = this.props.experts[this.state.num];
        console.log(expert.profile.positions)
        if (this.props.experts.length > 0 && expert.profile.positions != null){
            console.log(expert.profile)
            {return expert.profile.positions.values.map((position: any) => 
                <li>{position.title} at {position.company.name}</li>
            )}
        }else {
            return 
        }
    }

    expertise() {
        if (this.props.experts[this.state.num].expertise.expertise == null){
            return ""
        }else if (this.props.experts[this.state.num].expertise.expertise.length < 50){
            return this.props.experts[this.state.num].expertise.expertise
        }else if (this.props.experts[this.state.num].expertise.expertise.length > 50){
            return this.props.experts[this.state.num].expertise.expertise.substring(0, 50) + "..."
        }
        
    }

    onSubmit() {
        console.log("connect");
        this.props.history.push({
            pathname: '/Contract',
            state: { expert: this.props.experts[this.state.num] }
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
        if(this.props.experts.length - this.state.num == 10){
            this.props.pagingHandler()
        }

        this.setState({ num: this.state.num + 1 })
    }

    back() {
        this.setState({ num: this.state.num - 1 })

    }

    showProfile(){
        console.log("show profile click")
        if (this.state.show == false){
            this.setState({show: true})
        }else {
            this.setState({show: false})
        }
    }

    showMoreInfo(stars: any) {
        console.log(this.props.experts[this.state.num])
        let expert = this.props.experts[this.state.num];
        if (this.state.show){
            return <div className={expertStyles.moreInfo}>
                <div className={expertStyles.Arrow}>
                    <button onClick={this.showProfile.bind(this)}><i className="fa fa-chevron-up"></i></button>
                </div>

                <div className={expertStyles.fields}>
                    <i className="fa fa-map-marker"></i> {expert.profile.location != null? expert.profile.location.name : ""}
                </div>

                <div className={expertStyles.fields}>
                    <i className="fa fa-area-chart"></i> {expert.profile.industry != null? expert.profile.industry : ""}
                </div>

                <div className={expertStyles.fields}>
                    {expert.profile.summary != null? expert.profile.summary : ""}
                </div>

                <div className={expertStyles.fields}>
                    Positions
                </div>

                <div className={expertStyles.fields}>
                    {this.positions()}
                </div>

            </div>
        }else {
            return  <div className={expertStyles.info}>
                <div id={expertStyles.name}>
                    {this.props.experts[this.state.num].name}
                </div>
                <div>
                    <div className={expertStyles.fields}>
                        Expertise
                    </div>

                    <div className={expertStyles.fields} id={expertStyles.expertise}>
                        {this.expertise()}
                    </div>

                    <div className={expertStyles.fields}>
                        W{this.props.experts[this.state.num].expertise.hourlyRate + '.00 '}({'$' + this.props.experts[this.state.num].expertise.hourlyRate * .25 + '.00'}) per hour - Minimum {this.props.experts[this.state.num].expertise.minimumDuration} mins.
                    </div>

                    <div className={expertStyles.ratings}>
                        Self-rating for Topic
                        <div className="star-rating">
                            {stars}
                        </div>
                    </div>

                    <button style={{ backgroundColor: "white", marginLeft: "10px", width: "320px", fontWeight: 100 }} className="btn" type="button" onClick={this.onSubmit.bind(this)}>
                        <img style={{ height: "20px", width: "auto" }} src={'../resources/Interface-Logo-btn.png'} alt="Avatar" />
                    </button>

                    <div className={expertStyles.connectFont}>CONNECT WITH INTERFACE</div>

                    <div className={expertStyles.Arrow}>
                        <button onClick={this.showProfile.bind(this)}><i className="fa fa-chevron-down"></i></button>
                    </div>
                </div>
            </div>

        }
    }


    render() {
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
                        <div style={{ top: 0, position: "relative" }}>
                            {this.showBack()}
                            {this.showNext()}
                        </div>
                        {this.showMoreInfo(stars)}
                    </div>
                </div>
            </div>
        )
    }
}
