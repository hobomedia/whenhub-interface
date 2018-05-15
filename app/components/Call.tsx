import * as React from 'react';

const callStyles = require('./Call.scss');

export default class Call extends React.Component<any, {}>{
  constructor(props: any) {
    super(props)
  }

  onAcceptClick() {

  }

  onDenyClick() {

  }

  render() {
    return (
      <div className={callStyles.callContainer}>
        <div className={callStyles.background}></div>
        <div className={callStyles.content}>
          <div>Caller Name</div>
          <div>Interface Audio...</div>

          <div className={callStyles.button}>

              <button style={{
                backgroundColor: "rgb(79,229,59)",
                color: "white",
                marginRight: "20px",
                marginLeft: "20px",
                width: "55px",
                height: "55px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "50%",
                fontWeight: 100
              }}
                className="btn"
                type="button"
                onClick={this.onDenyClick.bind(this)}>
                <i className="fa fa-phone" style={{ fontSize: "20pt" }}></i>
              </button>

              <div>
                Answer Call
              </div>

          </div>

        </div>
      </div>
    );
  }
}
