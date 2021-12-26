import React, { Component } from "react";
import './Profile.css'
import axios from 'axios'

export default class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin_profile:{
        admin_id:'',
        admin_Name:'',
        admin_password:''
      }
    };
  }

  

  componentDidMount() {
  //console.log("admin =>" + JSON.stringify(this.props.location.state.detail))
  axios.post(`http://localhost:8084/adminprofile`, this.props.location.state.detail )
        .then(res => {
          this.setState({admin_profile:res.data});
          //alert(res.data);
          
        })
  }
  render() {
    return (
      


<div className="container">
    <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                    <div className="mt-3">
                      <h4>Admin</h4>
                      </div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-8">
                      <br/><br/>
                      <h6 className="mb-0">Admin Id</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <h4>{this.state.admin_profile.admin_id}</h4> 
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Admin Username</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <h4>{this.state.admin_profile.admin_Name}</h4>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
        
    );
  }
}
