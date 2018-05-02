import * as React from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';

let styles = require('../components/Home.scss');
let beExpertStyles = require('../components/BeExpert.scss')
// let FindExpertStyles = require('../components/FindExpert.scss');

interface ExpertState {rating: any, temp_rating: any}
export class BeExpert extends React.Component<any, ExpertState>{ 
    constructor(props:any){
      super(props)
      this.state = {
        rating: 0,
        temp_rating: null
      }
      console.log(this.props)

    }

    onSubmit() {
      this.props.history.push('/GoOnline')
    }

    rate(rating: any) : void {
      this.setState({
      rating: rating,
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
          if (this.state.rating >= i && this.state.rating != null) {
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
            <div id={styles.bebackground} style={{backgroundImage: 'url(' + this.props.profile.picture + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 560px', backgroundPosition: 'center'}}>
              {/* <Link to="/">back</Link> */}
              <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", marginTop: "260px", paddingTop: "13px", position: "absolute", width: '338px', height: "302px"}}>
                <div style={{ color: "white", marginLeft: "10px", fontSize: "25px", fontWeight: 200}}>
                  {this.props.profile.name}
                </div>
                  
                    <div style={{ marginTop: "10px" }}>
                      <form className="form-horizontal">
                        <div style={{marginBottom: "10px"}}>
                          <div className={beExpertStyles.fields}>
                            Expertise Topic
                          </div>
                          <input style={{ width: "320px", marginLeft: "10px" }} type="text" placeholder="Topic" className="form-control" name="title" />
                        </div>
                        <div>
                          <div className={beExpertStyles.fields}>
                            Hourly Rate($)
                          </div>
                          <input style={{ width: "320px", marginLeft: "10px"}} type="text" placeholder="00.00" className="form-control" name="title" />
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
                      <button style={{ backgroundColor: "#37d3b4", color: "white", width: "320px", marginLeft: "10px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit.bind(this)} className="btn">Go Online</button>
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
        token: props.login.token
    }

}
export default connect(mapStateToProps)(BeExpert);

  