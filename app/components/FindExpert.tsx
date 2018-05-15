import * as React from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';

// import { Link } from 'react-router-dom';
import Expert from './Expert';
// import { actionCreatorVoid } from '../../app/actions/helpers';
const Axios = require('axios');


let styles = require('../components/Home.scss');
let FindExpertStyles = require('../components/FindExpert.scss');

export class FindExpert extends React.Component<any, {experts: any, click: Boolean, value: string, loading: Boolean}>{ 
    constructor(props:any){
      super(props)
      this.state = {
        click: false,
        experts: [],
        value: "",
        loading: false
      }
    }


    handleChange(event: any) {
      this.setState({value: event.target.value});
    }

    onSubmit(){
      // actionCreatorVoid("expert").expert({type: "expert"});
      // this.props.history.push('/Expert')
      this.setState({loading: true})
      const that = this; 

      Axios({
        method: 'GET',
        url: `https://interface-api.whenhub.com/api/Experts/online?query.expertise=` + `${this.state.value}`,
        headers: {
          'Authorization': 'Bearer ' + `${this.props.bearer}`
        }
      }).then(function (response: any) {
        console.log(response.data)
        that.setState({experts: response.data, click: true, loading: false,  value: ""})
      }).catch(function (error: any) {
        console.log(error)
  
      })
  
    }

    click() {

    }

    handler(e: any){
      e.preventDefault()
      console.log(this.state)
      if(this.state.click == true){
        this.setState({
          click: false
        })

      }
    }
  
      render() {
        if(this.state.click == false){
          return (
            <div>
              
              <Nav
                button={"back"}
                page={"Find an Expert"}
              />
              <div className={styles.container}>
                <div id={FindExpertStyles.background}>
                  <div id={FindExpertStyles.enrolled}>
                    <div id={FindExpertStyles.number}>
                      10264
                    </div>
                    <div id={FindExpertStyles.enrolledText}>
                      Experts Enrolled
                    </div>
                  </div>
    
                  <div id={FindExpertStyles.enrolled}>
                    <form className="form-horizontal">
                      <div id={FindExpertStyles.topic}>
                        Topic
                        </div>
                      <input id={FindExpertStyles.input} value={this.state.value} onChange={this.handleChange.bind(this)} type="text" placeholder="All" className="form-control" name="title" />
                    </form>
                    <button className='btn' style={{backgroundColor: "rgb(55, 211, 180)", color: "white",marginLeft: "10px",width: "318px", marginTop: "10px",borderRadius: "20px", fontWeight: 100}}type="button" onClick={this.onSubmit.bind(this)}>
                      {this.state.loading? <i className="fa fa-spinner fa-spin" id={FindExpertStyles.spinner}/>: "View Experts"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }else {
            if(this.state.experts.length > 0){
              return (
                <Expert 
                  experts={this.state.experts}
                  handler={this.handler.bind(this)}
                />
              )

            }else {
              return (
                <div>
                  <Nav
                    button={"back"}
                    page={"No Experts Available"}
                    back={"Find An Expert"}
                    handler={this.handler.bind(this)}
                    current={"Expert"}
                  />

                  <div className={styles.container}>
                    <div id={FindExpertStyles.background}>
                        <div id={FindExpertStyles.toptext}>
                          No Experts Currently Available
                        </div>
                        <div id={FindExpertStyles.bottomtext}>
                          Would you like to be notified when an expert on {this.state.value} comes online?
                        </div>

                        <div style={{paddingLeft: "25px"}}>
                          <button id={FindExpertStyles.no} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                            No
                          </button>
                          <button id={FindExpertStyles.yes} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                            Yes
                          </button>

                        </div>
                    </div>

                  </div>
                </div>
              )
            }
        }
    }
  }

  const mapStateToProps = function (props: any, state: any) {
    return {
        bearer: props.login.bearer
    }
  
  }
  export default connect(mapStateToProps)(FindExpert);

  