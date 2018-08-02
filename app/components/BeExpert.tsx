import * as React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { goOnline } from '../actions/experts';

const styles = require('../components/Home.scss');
const beExpertStyles = require('../components/BeExpert.scss')

interface ExpertState { tokenCheck: boolean, dollarCheck: boolean, rating: any, temp_rating: any, topicValue: any, rateValue: any, loading: Boolean }
export class BeExpert extends React.Component<any, ExpertState>{
  constructor(props: any) {
    super(props)
    this.state = {
      rating: 0,
      temp_rating: null,
      topicValue: '',
      rateValue: 0,
      loading: false,
      tokenCheck: false,
      dollarCheck: false,
    }
  }

  onSubmit() {
    const that = this;
    this.setState({ loading: true })
    let args = {
      data: {
        'expertise': this.state.topicValue,
        'selfRating': this.state.rating,
        'hourlyRate': this.state.rateValue,
        'minimumDuration': 15
      },
      bearer: this.props.bearer,
      profile: this.props.profile
    }

    this.props.dispatch(goOnline(args)).then(function(response: any){
      that.props.history.push({
        pathname: 'GoOnline',
        state: {
          acceptedCurrencies: {
            token: that.state.tokenCheck,
            dollar: that.state.dollarCheck
          }
        }
      })
    }).catch(function (error: any) {
      console.log(error)
    })
  }

  handleTokenChange(e: any, checked: any) {
    if (this.state.tokenCheck == false) {
      this.setState({ tokenCheck: true })
    } else {
      this.setState({ tokenCheck: false })
    }
  }

  handleDollarsChange(e: any, checked: any) {
    if (this.state.dollarCheck == false) {
      this.setState({ dollarCheck: true })
    } else {
      this.setState({ dollarCheck: false })
    }

  }

  updateTopicValue(event: any) {
    this.setState({
      topicValue: event.target.value
    })
  }

  updateRateValue(event: any) {
    this.setState({
      rateValue: event.target.value
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



  render() {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      let klass = `${beExpertStyles.star}`;
      `${styles.appTab} ${styles.active}`
      if (this.state.rating >= i + 1 && this.state.rating != null) {
        klass += ` ${beExpertStyles.selected}`;
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
    return (
      <div>
        <Nav
          button={"back"}
          page={"Interface Expert"}
        />
        <div className={styles.container}>
          <div id={styles.bebackground} style={{ backgroundImage: 'url(' + (this.props.profile != null ? this.props.profile.picture : '') + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 560px', backgroundPosition: 'center' }}>
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", marginTop: "228px", paddingTop: "5px", position: "absolute", width: '338px', height: "332px" }}>
              <div style={{ color: "white", marginLeft: "10px", fontSize: "25px", fontWeight: 200 }}>
                {this.props.profile != null ? this.props.profile.name : "Name"}
              </div>

              <div style={{ marginTop: "10px" }}>
                <form className="form-horizontal">
                  <div style={{ marginBottom: "10px" }}>
                    <div className={beExpertStyles.fields}>
                      Expertise Topic (separated with commas)
                          </div>
                    <input value={this.state.topicValue} onChange={this.updateTopicValue.bind(this)} style={{ width: "320px", marginLeft: "10px" }} type="text" placeholder="Topic" className="form-control" name="title" />
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <div style={{ fontWeight: 100, marginLeft: "10px", color: "white" }}>
                      Self-rating
                      <div className="star-rating">
                        {stars}
                      </div>
                    </div>
                  </div>

                  <div className={beExpertStyles.fields}>
                    Accepted Currencies
                  </div>

                  <Checkbox
                    color="primary"
                    checked={this.state.tokenCheck}
                    onChange={(e: any, checked: any) => this.handleTokenChange(e, checked)}
                  />
                  WHEN tokens (&#65510;)

                  <Checkbox
                    color="primary"
                    checked={this.state.dollarCheck}
                    onChange={(e: any, checked: any) => this.handleDollarsChange(e, checked)}
                  />
                  US Dollars ($)

                    <div className={beExpertStyles.fields}>
                    Hourly Rate
                    </div>
                  <input value={this.state.rateValue} onChange={this.updateRateValue.bind(this)} style={{ width: "120px", marginLeft: "50px", display: "inline-block", marginRight: "30px" }} type="text" placeholder="00.00" className="form-control" name="title" />
                  <div style={{ display: "inline-block" }}>
                    (&#65510;) {this.props.conversion != null ? (this.state.rateValue * this.props.conversion.value).toFixed(2) : 0}
                  </div>
                </form>
                <button style={{ backgroundColor: "#37d3b4", color: "white", width: "320px", marginLeft: "10px", marginTop: "10px", borderRadius: "20px", fontWeight: 100 }} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                  {this.state.loading ? <i className="fa fa-spinner fa-spin" id={beExpertStyles.spinner} /> : "Continue"}
                </button>
              </div>
            </div>
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
    conversion: props.getConversion.conversion

  }

}
export default connect(mapStateToProps)(BeExpert);

