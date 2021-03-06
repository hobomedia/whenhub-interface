import * as React from 'react';
import { Link } from 'react-router-dom';

const tourStyles = require('./Tour.scss');


export default class Tour extends React.Component<any, {}>{ 
  constructor(props:any){
    super(props)
  }

  onSubmit() {
      this.props.history.push('/Tour2')
  }

    render() {
    return (
        <div className={tourStyles.newContainer}>
          <div className={tourStyles.tour}>
            <div className={tourStyles.exit}>
                <Link to="/" style={{color: "#FFF"}}>X</Link>
            </div>
            <div id={tourStyles.tourImg}>
                <img src={'../resources/tour1.png'} alt="tour1" />
            </div>
            <div className={tourStyles.nextContainer}>
                <button style={{ backgroundColor: "#5f7dd3", color: "white", marginLeft: "22px", width: "293px", marginTop: "10px", borderRadius: "20px", fontWeight: 100 }} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                    Next
                </button>
            </div>
          </div>
        </div>   
    );
  }
}
