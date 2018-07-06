import * as React from 'react';
import {connect} from 'react-redux';

const Axios = require('axios');
const styles = require('./Home.scss');
const goOnlineStyles = require('./GoOnline.scss');

export class GoOnline extends React.Component<any>{ 
  constructor(props:any){
    super(props)
  }

  onSubmit() {
    Axios({
        method: 'PUT',
        url: `https://interface-api.whenhub.com/api/Experts/`+ `${this.props.profile['https://interface.whenhub.com/winid']}` + `/offline`,
        headers: {
          'Authorization': 'Bearer ' + `${this.props.bearer}`
        }
      }).then(function (response: any) {
        console.log(response.data)
        history.back();
      }).catch(function (error: any) {
        console.log(error)
      })
  
  }

    render() {
        return (
        <div className={styles.container} style={{height: "600px"}}>
            <div id={goOnlineStyles.background}>
                <button style={{ backgroundColor: "#e64b4b", color: "white", marginLeft: "10px", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                    Go Offline
                </button>

                <div style={{color: "white", paddingLeft: "10px", paddingRight: "10px", paddingTop: "30px", paddingBottom: "30px", fontWeight: 100}}>
                    You are currently Online and appearing in searches on the WhenHub Interface Network
                </div>
                <div>
                    <div style={{color: "white", paddingLeft: "10px", paddingTop: "10px", fontWeight: 100, display: "inline"}}>
                        Topic
                    </div>
                    <div style={{color: "white", paddingRight: "10px", fontWeight: 100, display: "inline", float: "right"}}>
                        Hourly Rate
                    </div>
                </div>

                <div>
                    <div style={{color: "white", paddingLeft: "10px", paddingTop: "10px", fontWeight: 100, display: "inline"}}>
                        Business
                    </div>
                    
                    <div style={{color: "white", paddingRight: "10px", fontWeight: 100, display: "inline", float: "right"}}>
                        (&#65510;)20.00
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
export default connect(mapStateToProps)(GoOnline);
