import React, { Component } from "react";
import './Profile.css'
import axios from 'axios'

export default class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_profile:{
        student_id:'',
        student_name:'',
        student_email:'',
        student_dob:'',
        student_address:'',
        student_password:'',
        student_status:'',
        student_gender:'',
        student_class:''
      }
  
    };
  }

  componentDidMount() {
    //console.log("student =>" + JSON.stringify(this.props.location.state.detail))
    const student={student_email:this.props.location.state.detail};
  axios.post(`http://localhost:8084/studentprofile`, student )
        .then(res => {
          this.setState({student_profile:res.data});
          //alert(res.data);
          
        })
  }
  render() {
    return (
<div>
<div className="container">
    <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                    <div className="mt-3">
                    <h4>ID:{this.state.student_profile.id}</h4>
                      
                      <p className="text-secondary mb-1">Student</p>
                      <p className="text-muted font-size-sm">{this.state.student_profile.student_address}</p>

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
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <h5>{this.state.student_profile.student_name}</h5>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h5>{this.state.student_profile.student_email}</h5>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">DOB</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h5>{this.state.student_profile.student_dob}</h5>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Class</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h5>{this.state.student_profile.student_class}</h5>
                    </div>
                  </div>
                  <hr/>
                  
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h6>{this.state.student_profile.student_address}</h6>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Status</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h6>{this.state.student_profile.student_status}</h6>
                    </div>
                  </div>
                  <hr/>
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
