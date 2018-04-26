import * as React from 'react';
import { Link } from 'react-router-dom';

// const styles = require('./Home.scss');
const navStyles = require('./Nav.scss');

export default class Nav extends React.Component<any, {menuClick: string}> {
    constructor(props:any){
        super(props)
        this.state = {
            menuClick: "hidden",
        }
        this.lock.on("authenticated", (authResult: any) => {
            console.log(authResult);
        });
        
    }
    lock = new (window as any).Auth0Lock('uG6dg5zIBd45mpt3KAk05S6qq5pPPRmu', 'whenhub.auth0.com', {
        auth: {
            responseType: 'id_token token',
            params: {
                scope: 'openid roles email profile https://interface.whenhub.com/winid',
                audience: 'https://whenhub.auth0.com/userinfo'
            }
        },
        rememberLastLogin: false,
        languageDictionary: {
            title: 'WhenHub Interface'
        },
        popup: true,
        allowLogin: true,
        theme: {
            logo: 'https://interface.whenhub.com/img/favicon/Interface-Logo-Mark-150.png',
            primaryColor: '#0096A9'
        },
        redirect: false,
        sso: false
    });

    showLogin(e: any) {
        console.log("login click");
        console.log(window.location.href)
        e.preventDefault();

        this.lock.show();
    }

    handleClick(e: any) {
        if(this.props.current == "Expert"){
            this.props.handler(e)
        }else {
            history.back();
        }
    }

    walletClick() {
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
            return <button id={navStyles.menuBtn} data-tclass="btn" onClick={this.handleMenuClick.bind(this)}><a href="#">
            <i className="fa fa-bars"></i></a>
        </button>

        }else if (this.props.button == "back"){
            return <button id={navStyles.backBtn} data-tclass="btn" onClick={this.handleClick.bind(this)}><a href="#">
            <i className="fa fa-angle-left"></i></a>
        </button>
        }
        return
    }
    

    render() {
        return (
            <div>
                <div id={navStyles.topBar}>
                    {this.buttonDisplay()}
                        <div style={{display: "inline", fontWeight: 100}}>
                            {this.props.back? this.props.back : "Interface"}
                        </div>
                        <div id={navStyles.page}>
                            {this.props.page}
                        </div>
                </div>
                <div className="navbar navbar-inverse navbar-fixed-left" style={this.display()}>
                    <ul className="nav navbar-nav">
                        <li><Link to="/Settings"><i className="fa fa-cog"></i><span>Settings</span></Link></li>
                        <li><Link to="/Wallet"><i className="fa fa-usd"></i><span>WhenWallet</span></Link></li>
                        <li><Link to="/History"><i className="fa fa-history"></i><span>History</span></Link></li>
                        <li><Link to="/Refer"><i className="fa fa-share-alt"></i><span>Refer a Friend</span></Link></li>
                        <li><Link to="/Tour"><i className="fa fa-globe"></i><span>Tour</span></Link></li>
                        <li><a href="#"><i className="fa fa-users"></i><span>Support</span></a></li>
                        <li><a href="https://interface.whenhub.com/pages/faq.html"><i className="fa fa-question-circle"></i><span>FAQ</span></a></li>
                        <li><a href="#" onClick={this.showLogin.bind(this)}><i className="fa fa-lock" id="btn-login"></i><span>Log In</span></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
  