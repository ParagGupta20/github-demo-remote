import axios from "axios";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
class TeacherListForStudent extends Component {


  constructor(props) {
    super(props);

    this.state = {
      teachers: [],
      
  }
  this.handleSelect = this.handleSelect.bind(this);
    this.findapprovedteacher = this.findapprovedteacher.bind(this);
    this.findpendingteacher = this.findpendingteacher.bind(this);

}
handleSelect = (event) => {
  //console.log(event);
  if(event=="pending")
  this.findpendingteacher()
  else if(event=="approved")
  this.findapprovedteacher()
  else
  window.location.reload()
  
};
findpendingteacher()
{
  axios.get('http://localhost:8084/getPendingTeachers')
       .then((res)=>{
        this.setState({teachers:res.data});
        //console.log(res.data);
            })
}
findapprovedteacher()
{
  axios.get('http://localhost:8084/getApprovedTeachers')
         .then((res)=>{
          this.setState({teachers:res.data});
          //console.log(res.data);
              })
}
  



componentDidMount(){
  console.log(this.state.teacher_status);
    axios.get('http://localhost:8084/api/v1/teacher')
    .then((res)=>{
        this.setState({teachers:res.data});
        //console.log(res.data);
            })
}


toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
        
      <div className="container">
      <br />
        <nav className=" row navbar navbar-light bg-light container">
          <div className="navbar-brand col-md-1">
            <h3 style={{ color: "black" }}>Teacher List</h3>
          </div>
          <div className="col-md-5" style={{ marginLeft: "6rem" }}>
            <DropdownButton
              title="Status"
              id="dropdown-menu-align-right"
              onSelect={this.handleSelect}
            >
              <Dropdown.Item eventKey="select">Select</Dropdown.Item>
              <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
              <Dropdown.Item eventKey="approved">Approved</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-md-4" style={{marginLeft:'2em'}}>
          {/* <Link to="/studentPage"
            className="btn btn-danger"
            type="submit"
            style={{marginLeft:'15rem' }}
            onClick={this.handleLogout}
          >
            BACK
          </Link> */}
          </div>
        </nav>
        <br />       
            <div className="row">
          {/* <!--Table--> */}
          <table class="table table-striped table-bordered">
            {/* <!--Table head--> */}
            <thead>
              <tr>
                <th>Teacher Name</th>
                <th>Teacher Email</th>
                <th>Teacher DOB</th>
                <th>Teacher Gender</th>
                <th>Teacher Address</th>
                {/* <th>Teacher Password</th> */}
                

                <th>Status</th>

                {/* <th>Nation</th>
                <th> Year</th>
                <th>Population</th>
                <th>Actions</th> */}
          </tr>
            </thead>
            {/* <!--Table head-->

            <!--Table body--> */}
            <tbody>
                {
                    this.state.teachers.map(
                        teacher=>
                        <tr key={teacher.teacher_id}>
                            {/* after teacher . name should same as name in database */}
                            <td>{teacher.teacher_name}</td>
                            <td>{teacher.teacher_email}</td>
                            <td>{teacher.teacher_dob}</td>
                            <td>{teacher.teacher_gender}</td>
                            {/* <td>{teacher.teacher_password}</td> */}
                            <td>{teacher.teacher_address}</td>
                            <td>{teacher.teacher_status}</td>

                        </tr>
                    )
                }
            </tbody>
            {/* <!--Table body--> */}
          </table>
          {/* <!--Table--> */}
        </div>
      </div>
    );
  }
}

export default TeacherListForStudent;
