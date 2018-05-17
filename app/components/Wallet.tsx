import * as React from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';
import { getWalletAmount } from '../actions/wallet';

// const Axios = require('axios');
let styles = require('./Home.scss');
let walletStyles = require('./Wallet.scss');

export class Wallet extends React.Component<any, {sidebarOpen: boolean, section: string}>{ 
  constructor(props:any){
    super(props)
    this.state = {
      sidebarOpen: true,
      section: "deposit",
    }
  }

  componentWillMount() {
    if(this.props.profile != null){
        let args = {
            bearer: this.props.bearer,
            profile: this.props.profile
        }
      this.props.dispatch(getWalletAmount(args))
    }
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

  showAmount(wallet: any) {
    if(wallet == null) {
        return
    }else if (wallet != null){
        return wallet.amount
    }
  }

  showAddress(wallet: any) {
    if(wallet == null) {
        return
    }else if (wallet != null){
        return wallet.address
    }

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

  selectSection(section: any, wallet: any) {
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
                <div id={walletStyles.walletAddress}>{this.showAddress(wallet)}</div>
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
                            <div style={{ fontSize: "25pt", fontWeight: 100 }}>(W){this.showAmount(this.props.wallet)}</div>
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
                    {this.selectSection(this.state.section, this.props.wallet)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = function (props: any, state: any) {
    return {
        profile: props.login.profile,
        token: props.login.token,
        bearer: props.login.bearer,
        wallet: props.getWalletAmount.walletAmount
    }
  
  }
  export default connect(mapStateToProps)(Wallet);
  