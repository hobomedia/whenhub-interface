import * as React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import {connect} from 'react-redux';

const styles = require('./Home.scss');


export class Home extends React.Component<any, {experts: any}>{ 
  constructor(props:any){
    super(props)

    this.state = {
      experts: []
    };
  }

  showLoginMessage() {
    console.log(this.props)
    if(this.props.profile == null){
      return <div id={styles.message}>You must sign with LinkedIn to be an Expert</div>
    }
    return 
  }

  render() {
    return (
      <div>
        <Nav 
          button={"menu"}
          page={"Interface"}
          back={" "}
        />
        <div className={styles.container}>
          <div id={styles.top}>
            <Link to={`/FindExpert`}><span></span></Link>
            <div className={styles.overlay}>
              <div>Find an Expert</div>
            </div>
          </div>
          <div id={styles.bottom}>
            <Link to="/BeExpert"><span></span></Link>
            <div className={styles.overlay}>
              <div>Be an Expert</div>
              {this.showLoginMessage()}
            </div>
          </div>
        </div>   
      </div>    
    );
  };
};

const mapStateToProps = function (props: any, state: any) {
  return {
      profile: props.login.profile,
      token: props.login.token
  };

};
export default connect(mapStateToProps)(Home);
