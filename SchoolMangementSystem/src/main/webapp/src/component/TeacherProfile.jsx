import React, { Component } from "react";
import './Profile.css'
import axios from 'axios'

export default class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher_profile:{
        teacher_id:'',
        teacher_name:'',
        teacher_email:'',
        teacher_dob:'',
        teacher_address:'',
        teacher_password:'',
        teacher_status:'',
        teacher_gender:'',
        teacher_class:''
      }
  
    };
  }

  componentDidMount() {
    //console.log("teacher =>" + JSON.stringify(this.props.location.state.detail))
    const teacher={teacher_email:this.props.location.state.detail};
  axios.post(`http://localhost:8084/teacherprofile`, teacher )
        .then(res => {
          this.setState({teacher_profile:res.data});
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
                    <h4>ID:{this.state.teacher_profile.teacher_id}</h4>
                      
                      <p className="text-secondary mb-1">Teacher</p>
                      <p className="text-muted font-size-sm">{this.state.teacher_profile.teacher_address}</p>

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
                      <h5>{this.state.teacher_profile.teacher_name}</h5>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h5>{this.state.teacher_profile.teacher_email}</h5>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">DOB</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h5>{this.state.teacher_profile.teacher_dob}</h5>
                    </div>
                  </div>
                  <hr/>
                  
                  
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h6>{this.state.teacher_profile.teacher_address}</h6>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Status</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h6>{this.state.teacher_profile.teacher_status}</h6>
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
