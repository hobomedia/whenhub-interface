import * as React from 'react';
import Nav from './Nav';
// import { Link } from 'react-router-dom';
import Expert from './Expert';
// import { actionCreatorVoid } from '../../app/actions/helpers';
const Axios = require('axios');


let styles = require('../components/Home.scss');
let FindExpertStyles = require('../components/FindExpert.scss');

export default class FindExpert extends React.Component<any, {experts: any, click: Boolean}>{ 
    constructor(props:any){
      super(props)
      this.state = {
        click: false,
        experts: []
      }
    }

  componentWillMount() {
    const that = this; 
    // actionCreatorVoid("expert").expert({type: "expert"});
    Axios({
      method: 'GET',
      url: `https://interface-api.whenhub.com/api/Experts/online`,
      headers: {
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16QkdSRUU0UVVWQ09EbEZOVVJHTVVRM1F6STRSVEEwUVRWRE5EQTROakZGUXpNeE5VRXpRZyJ9.eyJodHRwczovL2ludGVyZmFjZS53aGVuaHViLmNvbS93aW5pZCI6IjVhY2JiYTljYTZhM2M2MDYwMDAwMDAwMSIsIm5pY2tuYW1lIjoidHJhY2kraW50ZXJmYWNlIiwibmFtZSI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNDIwMDRhZGNkZDA0NTFhODM0YTk1ZThmODYyZjlhMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRyLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDE4LTA0LTA5VDE5OjE3OjQ3LjYzOFoiLCJlbWFpbCI6InRyYWNpK2ludGVyZmFjZUB3aGVuaHViLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly93aGVuaHViLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWNiYmE5Y2ZjZGMwMTZlZTllZjA1YjMiLCJhdWQiOiJ1RzZkZzV6SUJkNDVtcHQzS0FrMDVTNnFxNXBQUFJtdSIsImlhdCI6MTUyMzMwMTQ2NywiZXhwIjoxNTU0ODM3NDY3LCJhdF9oYXNoIjoiWnV0ZUtKZVNfZm9FVXVLbmNyTDZ0USIsIm5vbmNlIjoid28zSDZIYm94ZGxCVG16VlVZOEk0RmZLMGZFUmlMNlQifQ.dHk7FXNwgdeLcGGvBFgGZ15XMGTMjtgvlHWpj0nHxz7uRRtt3ingv_Ut7nPlFHCcA7HtQGRfuas3i2pOk9RecLHKskzN0hfzw_0x3nwChA4fsG11RoqI8a_7kQ5kAPppJxF2C7REPE79oCGOVdCe15IkF00CqGYAJws0kg9XeoklWlOQozkF7SIkruR38zcS557GdYjh4Uh-HQ1vZ9ka39PT22R_sM4SRmmSYx5ph2uN2Z-r_IaYuVlQ3tjV9JSBONZMhwf06CI7cpELLpMHiOH2blCbOc_88j-wLvh7SeN7UJrAk8tvxYyTfJjMM214wV6CEPIcBBLpu5EXB0gwAQ'
      }
    }).then(function (response: any) {
      console.log(response.data)
      that.setState({experts: response.data})
    }).catch(function (error: any) {
      console.log(error)

    })

  }
    onSubmit(){
      // actionCreatorVoid("expert").expert({type: "expert"});
      // this.props.history.push('/Expert')
      this.setState({click: true})
    }

    click() {
    }

    handler(e: any){
      e.preventDefault()
      this.setState({
        click: true
      })
    }
  
      render() {
        if(this.state.click == false){
          return (
            <div>
              
              <Nav
                button={"back"}
                page={"Find an Expert"}
    
              />
              <div className={styles.container}>
                <div id={FindExpertStyles.background}>
                  <div id={FindExpertStyles.enrolled}>
                    <div style={{ fontSize: "30pt", color: "white", marginLeft: "110px" }}>
                      1026
                    </div>
                    <div style={{ color: "white", marginLeft: "124px", fontWeight: 100 }}>
                      Experts Enrolled
                        </div>
                  </div>
    
                  <div id={FindExpertStyles.enrolled}>
                    <form className="form-horizontal">
                      <div style={{ color: "white", marginLeft: "10px", fontWeight: 100 }}>
                        Topic
                        </div>
                      <input style={{ width: "320px", marginLeft: "10px" }} type="text" placeholder="All" className="form-control" name="title" />
                    </form>
                    <button style={{ backgroundColor: "#37d3b4", color: "white", marginLeft: "10px", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100 }} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                      View Experts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }else {
          return (
            <Expert 
              handler={this.handler}
              experts={this.state.experts}
            />
          )
        }
    }
  }
  