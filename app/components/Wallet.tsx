import * as React from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';

const Axios = require('axios');
let styles = require('./Home.scss');
let walletStyles = require('./Wallet.scss');

export class Wallet extends React.Component<any, {sidebarOpen: boolean, section: string, balance: any}>{ 
  constructor(props:any){
    super(props)
    this.state = {
      sidebarOpen: true,
      section: "deposit",
      balance: {}
    }
  }

  componentWillMount() {
    if(this.props.profile != null){
        const that = this;
        Axios({
          method: 'GET',
          baseURL: 'https://interface-api.whenhub.com/api/Accounts/',
          url:  this.props.profile['https://interface.whenhub.com/winid'] + '/balance',
          headers: {
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16QkdSRUU0UVVWQ09EbEZOVVJHTVVRM1F6STRSVEEwUVRWRE5EQTROakZGUXpNeE5VRXpRZyJ9.eyJodHRwczovL2ludGVyZmFjZS53aGVuaHViLmNvbS93aW5pZCI6IjVhNDQwODM0NzJkMmE1MDcwMGJjZjc5MSIsImdpdmVuX25hbWUiOiJUcmFjaSIsImZhbWlseV9uYW1lIjoiRm9uZyIsIm5pY2tuYW1lIjoidHJlLmZvbmcxIiwibmFtZSI6IlRyYWNpIEZvbmciLCJwaWN0dXJlIjoiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0M0RTAzQVFGaDFNZFVjNXlQMFEvcHJvZmlsZS1kaXNwbGF5cGhvdG8tc2hyaW5rXzEwMF8xMDAvMD9lPTE1MjYzNDI0MDAmdj1hbHBoYSZ0PVUxcHlxNGYzRGZyYUhkbVU4dzY2ZzhwaDBwLWk3dm9mTUNnX2dJMFVDaUkiLCJ1cGRhdGVkX2F0IjoiMjAxOC0wMy0xNVQyMzoxNzowNy45NjJaIiwiZW1haWwiOiJ0cmUuZm9uZzFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vd2hlbmh1Yi5hdXRoMC5jb20vIiwic3ViIjoibGlua2VkaW58VDlFcGxrazB2WCIsImF1ZCI6InVHNmRnNXpJQmQ0NW1wdDNLQWswNVM2cXE1cFBQUm11IiwiaWF0IjoxNTIxMTU1ODI4LCJleHAiOjE1NTI2OTE4MjgsImF0X2hhc2giOiJvcGRHQlVzNEYzUHRuOHRUc1gySHpnIiwibm9uY2UiOiJfN1VGNloyTERYfjloYzU2X01DdjZHdVAxeUd5SUNUNCJ9.u95ButOaH7OEkiUXWPT89u9wu3Y6A-g2H96xS0mzOsgNshVwMm103xtnG6bUYmH3Ab_LYuOGEAyjsoItmRApJxwoSntc_A46iPo6PlK5OEFgxpn7B0rxuhLxJAD8vr6rGhxncUlqTmdWP61YZQQcYVRcaOPvj0XDHG1ei4SO9Bw5uC8CwZG2lKQNbTr42od3hoEjcLrToTyqnNrXCc3kBpSSo_1TuDlubk40oleeAPtFIjP5yMTjlPimYS1iUv-5KVqR3fCSeIJntXeI0Ek3nBXYHJcK9l39msjEzc7eoR5uNzkf53Kqr4zT7iufXodoQkRXWzZ4_qr6XUzg5Qnhlw'
          }
        }).then(function (response: any) {
          console.log(response.data);
          that.setState({balance: response.data});
  
        }).catch(function (error: any) {
          console.log(error);    
        })
      };
  
  }

  onSubmit() {
      console.log("hit")
  }

  onGuideSubmit() {
      console.log("click")
  }

  depositClick() {
      this.setState({section: "deposit"})
  }

  transferClick() {
      this.setState({section: "transfer"})

  }

  transactionClick(){
      this.setState({section: "transaction"})

  }

  border() {

    const style = {borderBottomWidth: 'initial',borderBottomStyle: 'solid',borderBottomColor: '#37d3b4'}
      if (this.state.section == "deposit") {
        return style; 
      }else if (this.state.section == "transfer") {
        return style;

      }else if (this.state.section == "transaction") {
        return style;

      }
      return 
  }

  selectSection(section: any) {
    if (section == "deposit") {
        return <div className={walletStyles.section}>
            <div className={walletStyles.sectionHeader}>
                Deposit In Account
            </div>
            <div className={walletStyles.sectionInfo}>
                To add WHEN tokens to your Account, use yourWallet's "Send" feature and send them to the address below.
            </div>
            <div>
                WHEN Wallet Adress
            </div>
            <div>
                <button style={{ backgroundColor: "#37d3b4", color: "white", marginLeft: "10px", width: "293px", marginTop: "10px", borderRadius: "20px", fontWeight: 100 }} type="button" onClick={this.onSubmit} className="btn">
                    Copy Wallet Address to clipboard
                </button>
                <div id={walletStyles.walletAddress}>{this.state.balance.address}</div>
            </div>
        </div>

    } else if (section == "transfer") {
        return <div className={walletStyles.section}>
            <div className={walletStyles.sectionHeader}>
                Transfer from Account
            </div>
            <div className={walletStyles.sectionInfo}>
                To transfer WHEN tokens from your Account, use a wallet such as MetaMask or My EtherWallet. Free signup tokens are included in your balance, but cannot be transferred. They can only be used for payig Experts for Interface transactions.
            </div>
            <div>
                <button style={{ backgroundColor: "#776cf0", color: "white", marginLeft: "10px", width: "293px", marginTop: "10px", borderRadius: "20px", fontWeight: 100 , position: "absolute", bottom: "63px"}} type="button" onClick={this.onSubmit} className="btn">
                    WhenWallet Guide
                </button>
            </div>


        </div>
    } else if (section == "transaction"){
        return <div className={walletStyles.section}>
            <div className={walletStyles.sectionHeader}>
                Transactions History
            </div>
            <div className={walletStyles.sectionInfo}>
                To view your transaction history on the blockchain, select the Etherscan logo.
            </div>

        </div>

    }
    return
  }

    render() {
        return (
            <div>
                <Nav
                    button={"back"}
                    page={"WHEN Wallet"}
                />
                <div className={styles.container}>
                    <div>
                        <div id={walletStyles.amount}>
                            <div style={{ fontSize: "25pt", fontWeight: 100 }}>(W){this.state.balance.amount}</div>
                            <div>Wallet Amount</div>
                        </div>
                    </div>
                    <div id={walletStyles.buttonWell}>
                        <div className={walletStyles.buttons} style={this.state.section == "deposit"? {borderBottomWidth: 'initial',borderBottomStyle: 'solid',borderBottomColor: '#37d3b4'} : {}} onClick={this.depositClick.bind(this)}>
                            <img src='../resources/white_inbox.png' />
                            <div>Deposit</div>
                        </div>
                        <div className={walletStyles.buttons} style={this.state.section == "transfer"? {borderBottomWidth: 'initial',borderBottomStyle: 'solid',borderBottomColor: '#37d3b4'} : {}} onClick={this.transferClick.bind(this)}>
                            <img src='../resources/white_outbox.png' />
                            <div>Transfer</div>
                        </div>
                        <div className={walletStyles.buttons} style={this.state.section == "transaction"? {borderBottomWidth: 'initial',borderBottomStyle: 'solid',borderBottomColor: '#37d3b4'} : {}} onClick={this.transactionClick.bind(this)}>
                            <img src='../resources/white_transaction.png' />
                            <div>Transactions</div>

                        </div>
                    </div>
                    {this.selectSection(this.state.section)}
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
  export default connect(mapStateToProps)(Wallet);
  