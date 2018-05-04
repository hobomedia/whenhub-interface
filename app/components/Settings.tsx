import * as React from 'react';
import Nav from './Nav';
import Switch from 'material-ui/Switch';
import 'rc-slider/assets/index.css';

const Slider = require('rc-slider/lib/Slider');
const styles = require('./Home.scss');
const settingsStyles = require('./Settings.scss');

export class Settings extends React.Component<any, {}>{ 
  constructor(props:any){
    super(props)
  }

  slider(value: any) {
    console.log(value)
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
                <div className={settingsStyles.font}><i className="fa fa-hourglass"></i> Minimum Interface duration when you are the expert</div>
                  <div className={settingsStyles.slider}>
                  <Slider
                    dots step={15} 
                    min={15}
                    max={75}
                    marks={
                      {
                        15: "15",
                        30: "30",
                        45: "45",
                        60: "60",
                        75: "75"
                      }
                    }
                    defaultValue={0} 
                    onChange={this.slider}
                    TrackStyle={{backgroundColor: '#37d3b4'}}
                    dotStyle={{
                      borderColor: '#37d3b4',
                      backgroundColor: '#37d3b4'
                    }}
                    handleStyle={{
                      borderColor: '#37d3b4',
                      backgroundColor: '#37d3b4'
                    }}
                  />
                  </div>
                <div className={settingsStyles.font} style={{marginTop: '20px'}}><i className="fa fa-comment"></i> Languages Fluently Spoken</div>
                <div className={settingsStyles.row}> 
                  <div className={settingsStyles.lang}>English</div>
                    <div style={{float: "right"}}>
                    <Switch
                      color={'default'}
                    />
                    </div>
                </div>

                <div className={settingsStyles.row}>
                  <div className={settingsStyles.lang}>Spanish</div>
                  <div style={{float: "right"}}>
                    <Switch/>
                    </div>
                </div>

                <div className={settingsStyles.row}>
                  <div className={settingsStyles.lang}>French</div>
                    <div style={{float: "right"}}>
                    <Switch/>
                    </div>
                </div>

                <div className={settingsStyles.row}>
                  <div className={settingsStyles.lang}>Spanish</div>
                    <div style={{float: "right"}}>
                    <Switch/>
                    </div>
                </div>

                <div className={settingsStyles.font} style={{marginTop: '20px'}}><i className="fa fa-comment"></i> Subscriptions</div>


            </div>
        </div>   

      </div>    
    );
  }
}
export default Settings;