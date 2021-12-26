import React, { Component } from "react";
import './Profile.css';
import axios from "axios";
export default class SchoolDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school_details:[]
      
  }
}


componentDidMount(){
  axios.get('http://localhost:8084/schooldetails')
  .then((res)=>{
      this.setState({school_details:res.data});
      //console.log(res.data);
          })
          
    }
  render() {
    return (
      <div>{this.state.school_details.map(
        school=>(
        
        <div className="container">
    <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="school.jpg" alt="Admin" className="rounded-circle" width="150"/>
                    <div className="mt-3">
                      <h4 id="school_name" name="school_name">{school.school_name}</h4>
                      <p className="text-muted font-size-sm">{school.school_address}</p>

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
                      <h6 className="mb-0">School Code</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     <h4>{school.school_id} </h4>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <h6>{school.school_contact_number}</h6> 
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">School Medium</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     <h5>{school.school_medium_of_study}</h5> 
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-8">
                      <h6 className="mb-0">Affliated By</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     <h4>{school.school_affiliated_by}</h4> 
                    </div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
        ))}</div>
    );
  }
}
