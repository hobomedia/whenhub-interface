import * as React from 'react';
import Nav from './Nav';

let styles = require('./Home.scss');
let walletStyles = require('./Wallet.scss');

export default class Wallet extends React.Component<any, {sidebarOpen: boolean}>{ 
  constructor(props:any){
    super(props)
    this.state = {
      sidebarOpen: true
    }
  }

  onSubmit() {
      console.log("hit")
  }

  onGuideSubmit() {
      console.log("click")
  }
    render() {
    return (
      <div>
        <Nav 
          button={"back"}
        />
        <div className={styles.container}>
          <div>
            <div id={walletStyles.amount}>
                <div style={{fontSize: "25pt", fontWeight: 100}}>(W))0.00</div>
                <div>Wallet Amount</div>
                <div>
                    <button style={{ backgroundColor: "#776cf0", color: "white", paddingTop: "0", marginLeft: "10px", height: "20px", width: "220px", marginTop: "10px", borderRadius: "20px", fontWeight: 100, fontSize: ""}} type="button" onClick={this.onGuideSubmit} className="btn">
                        WHENWallet Guide
                    </button>
                </div>
            </div>
          </div>
          <div id={walletStyles.buttonWell}>
              <div className={walletStyles.buttons}>
                <img src='../resources/white_inbox.png'/>
                <div>Deposit</div>
              </div>
              <div className={walletStyles.buttons}>
                <img src='../resources/white_outbox.png'/>
                <div>Transfer</div>

              </div>
              <div className={walletStyles.buttons}>
              <img src='../resources/white_transaction.png'/>
              <div>Transactions</div>

              </div>
          </div>
          <div>
            <div className={walletStyles.deposit}>
                <div>
                    Deposit In Account
                </div>
                <div>
                    To add WHEN tokens to your Account, use yourWallet's "Send" feature and send them to the address below.
                </div>
                <div>
                    WHEN Wallet Adress
                </div>
                <div>
                    <button style={{ backgroundColor: "#37d3b4", color: "white", marginLeft: "10px", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit} className="btn">
                        Copy Wallet Address to clipboard
                    </button>

                </div>
            </div>
          </div>

        </div>   
      </div>    
    );
  }
}
