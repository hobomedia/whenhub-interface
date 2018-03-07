import * as React from 'react';
import { Link } from 'react-router-dom';

let styles = require('./Home.scss');

export default class Nav extends React.Component<any, {menuClick: string}> {
    constructor(props:any){
        super(props)

        this.state = {
            menuClick: "hidden"
        }
    }

    handleClick() {
        history.back();
    }

    walletClick() {
        console.log("click")
        console.log(history)
        console.log(this.props)
    }

    handleMenuClick() {
        if(this.state.menuClick == "hidden"){
            this.setState({menuClick: "shown"})
        }else if (this.state.menuClick == "shown") {
            this.setState({menuClick: "hidden"})
        }
    }

    display() {
        if(this.state.menuClick == "hidden"){
            return {display: "none"}
        }else if (this.state.menuClick == "shown") {
            return {display: "inline"}
        }
        return 
    }

    buttonDisplay(){
        if(this.props.button == "menu"){
            return <button style={{ backgroundColor: '#37d3b4', border: 'none', marginRight: "95px", padding: "0"  }} data-tclass="btn" onClick={this.handleMenuClick.bind(this)}><a href="#">
            <i className="fa fa-bars"></i></a>
        </button>

        }else if (this.props.button == "back"){
            return <button style={{ backgroundColor: '#37d3b4', border: 'none', marginRight: "95px", padding: "0" }} data-tclass="btn" onClick={this.handleClick.bind(this)}><a href="#">
            <i className="fa fa-angle-left"></i></a>
        </button>
        }
        return
    }
    

    render() {
        return (
            <div>
                <div className={styles.bar} style={{ top: '0px', width: '338px', height: '40px', backgroundColor: '#37d3b4', color: 'white' }}>
                    {this.buttonDisplay()}
                    Interface
                </div>
                <div className="navbar navbar-inverse navbar-fixed-left" style={this.display()}>
                    <ul className="nav navbar-nav">
                        {/* <li><a href="#"><i className="fa fa-cog"></i><span>Settings</span></a></li> */}
                        <li><Link to="/Settings"><i className="fa fa-cog"></i><span>Settings</span></Link></li>
                        <li><Link to="/Wallet"><i className="fa fa-usd"></i><span>WhenWallet</span></Link></li>
                        <li><a href="#"><i className="fa fa-history"></i><span>History</span></a></li>
                        <li><a href="#"><i className="fa fa-info"></i><span>Tour</span></a></li>
                        <li><a href="#"><i className="fa fa-envelope-o"></i><span>Support</span></a></li>
                        <li><a href="#"><i className="fa fa-question-circle"></i><span>FAQ</span></a></li>
                        <li><a href="#"><i className="fa fa-sign-out"></i><span>Log Out</span></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
  