import * as React from 'react';
import Nav from './Nav';
import Switch from 'material-ui/Switch';
import {connect} from 'react-redux';
import 'rc-slider/assets/index.css';
import { updateLanguages } from '../actions/account';

const styles = require('./Home.scss');
const settingsStyles = require('./Settings.scss');

export class Settings extends React.Component<any, {lang: Array<String>}>{ 
  constructor(props:any){
    super(props)
    this.state = {
      lang: [
        "English"
      ]
    }
  }

  onSwitch(event: any, checked: Boolean) {
    console.log(checked)
    if(checked == true){

      this.setState({lang: this.state.lang.concat(event.target.value)})
    }else if (checked == false ){
      let languages = this.state.lang;
      for (let i=languages.length-1; i>=0; i--) {
        if (languages[i] === event.target.value) {
            languages.splice(i, 1);
        }
      };
      this.setState({lang: languages});
    };
  }

  onSubmit() {
    let args = {
      bearer: this.props.bearer, 
      profile: this.props.profile,
      languages: this.state.lang
    }
    this.props.dispatch(updateLanguages(args)).then(function(response: any) {
      console.log(response)
    });

    
    // require('electron').shell.openExternal("https://whenhub-interface-staging.azurewebsites.net/my-account/profile?token=" + `${userIdTokenfromAuth0}`);  

  }

  render() {
    return (
      <div>
        <Nav 
          button={"back"}
          page={"Settings"}
        />
        <div className={styles.container}>
            <div className={settingsStyles.settings}>
                <div className={settingsStyles.font} style={{marginTop: '33px'}}><i className="fa fa-comment"></i> Languages Fluently Spoken</div>
                <div className={settingsStyles.row}> 
                  <div className={settingsStyles.lang}>English</div>
                    <div style={{float: "right"}}>
                    <Switch
                      onChange={this.onSwitch.bind(this)}
                      value={"English"}
                      defaultChecked={true}
                    />
                    </div>
                </div>

                <div className={settingsStyles.row}>
                  <div className={settingsStyles.lang}>Spanish</div>
                  <div style={{float: "right"}}>
                    <Switch
                        onChange={this.onSwitch.bind(this)}
                        value={"Spanish"}
                    />
                    </div>
                </div>

                <div className={settingsStyles.row}>
                  <div className={settingsStyles.lang}>French</div>
                    <div style={{float: "right"}}>
                    <Switch
                      onChange={this.onSwitch.bind(this)}
                      value={"French"}
                    />
                    </div>
                </div>

                <div className={settingsStyles.row}>
                  <div className={settingsStyles.lang}>Chinese</div>
                    <div style={{float: "right"}}>
                    <Switch
                      onChange={this.onSwitch.bind(this)}
                      value={"Chinese"}
                    
                    />
                    </div>
                </div>

                <div className={settingsStyles.font} style={{marginTop: '20px'}}><i className="fa fa-comment"></i> Subscriptions</div>
                  <div>No subscriptions</div>

                <button style={{ backgroundColor: "#37d3b4", color: "white", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100 }} type="button" className="btn" onClick={this.onSubmit.bind(this)}>
                  Update Profile
                </button>

            </div>
        </div>   

      </div>    
    );
  }
}
const mapStateToProps = function (props: any, state: any) {
  return {
      bearer: props.login.bearer,
      profile: props.login.profile,
  }

}
export default connect(mapStateToProps)(Settings);
