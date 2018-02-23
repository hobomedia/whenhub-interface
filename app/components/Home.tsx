import * as React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

let styles = require('./Home.scss');


// interface HomeProps {
//   number: number
// }

export default class Home extends React.Component<any, {number2?: number, sidebarOpen: boolean}>{ 
  constructor(props:any){
    super(props)
    this.state = {
      sidebarOpen: true
    }
  }

    render() {
    return (
      <div>
        <Nav 
          button={"menu"}
        />
        <div className={styles.container}>
          <div id={styles.top}>
            <Link to="/FindExpert" replace={true}><span></span></Link>
            "Find Expert"
          </div>
          <div id={styles.bottom}>
            <Link to="/BeExpert"><span></span></Link>
            "Be An Expert"
          </div>
        </div>   
      </div>    
    );
  }
}
