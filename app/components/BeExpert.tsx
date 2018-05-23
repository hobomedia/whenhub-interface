import * as React from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';

const Axios = require('axios');
const styles = require('../components/Home.scss');
const beExpertStyles = require('../components/BeExpert.scss')
// let FindExpertStyles = require('../components/FindExpert.scss');

interface ExpertState {rating: any, temp_rating: any, topicValue: any, rateValue: any, loading: Boolean}
export class BeExpert extends React.Component<any, ExpertState>{ 
    constructor(props:any){
      super(props)
      this.state = {
        rating: 0,
        temp_rating: null,
        topicValue: '',
        rateValue: 0,
        loading: false
      }

    }

  onSubmit() {
    const that = this; 
    this.setState({loading: true})
    Axios({
      method: 'PUT',
      url: `https://interface-api.whenhub.com/api/Experts/`+ `${this.props.profile['https://interface.whenhub.com/winid']}` + `/online`,
      headers: {
        'Authorization': 'Bearer ' + `${this.props.bearer}`
      },
      data: {
        'expertise': this.state.topicValue,
        'selfRating': this.state.rating,
        'hourlyRate': this.state.rateValue,
        'minimumDuration': 15
      }
    }).then(function (response: any) {
      console.log(response.data)
      that.props.history.push('/GoOnline')
    }).catch(function (error: any) {
      console.log(error)
    })

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
    rate(rating: any) : void {
      this.setState({
      rating: rating + 1,
      temp_rating: rating
      });
    }

    star_over(rating: any) : void {
      
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
          if (this.state.rating >= i+ 1 && this.state.rating != null) {
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
            <div id={styles.bebackground} style={{backgroundImage: 'url(' + (this.props.profile!= null? this.props.profile.picture : '') + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 560px', backgroundPosition: 'center'}}>
              <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", marginTop: "260px", paddingTop: "13px", position: "absolute", width: '338px', height: "302px"}}>
                <div style={{ color: "white", marginLeft: "10px", fontSize: "25px", fontWeight: 200}}>
                  {this.props.profile != null? this.props.profile.name: "Name"}
                </div>
                  
                    <div style={{ marginTop: "10px" }}>
                      <form className="form-horizontal">
                        <div style={{marginBottom: "10px"}}>
                          <div className={beExpertStyles.fields}>
                            Expertise Topic
                          </div>
                          <input value={this.state.topicValue} onChange={this.updateTopicValue.bind(this)} style={{ width: "320px", marginLeft: "10px" }} type="text" placeholder="Topic" className="form-control" name="title" />
                        </div>
                        <div>
                          <div className={beExpertStyles.fields}>
                            Hourly Rate(W)
                          </div>
                          <input value={this.state.rateValue} onChange={this.updateRateValue.bind(this)} style={{ width: "320px", marginLeft: "10px"}} type="text" placeholder="00.00" className="form-control" name="title" />
                        </div>
                        {/* <div style={{ color: "white", marginLeft: "10px", fontWeight: 100 }}>
                          Hourly Rate($)
                        </div> */}
                        <div style={{marginTop: "10px"}}>
                          <div style={{fontWeight: 100, marginLeft: "10px", color: "white"}}>
                            Self-rating

                            <div className="star-rating">
                              {stars}
                            </div>

                          </div>
                        </div>
                      
                      </form>
                      <button style={{ backgroundColor: "#37d3b4", color: "white", width: "320px", marginLeft: "10px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                        {this.state.loading? <i className="fa fa-spinner fa-spin" id={beExpertStyles.spinner}/>: "Go Online"}
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
        bearer: props.login.bearer
    }

}
export default connect(mapStateToProps)(BeExpert);

  