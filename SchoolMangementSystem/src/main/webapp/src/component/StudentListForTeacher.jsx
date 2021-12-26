import axios from "axios";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
class StudentListForTeacher extends Component {


  constructor(props) {
    super(props);

    this.state = {
      students: [],
      
  }
  this.handleSelect = this.handleSelect.bind(this);
  this.findapprovedstudent = this.findapprovedstudent.bind(this);
  this.findpendingstudents = this.findpendingstudent.bind(this);

}
handleSelect = (event) => {
  
  if(event=="pending")
  this.findpendingstudent()
  else if(event=="approved")
  this.findapprovedstudent()
  else 
  window.location.reload()
  
};

findpendingstudent()
{
  axios
  .get("http://localhost:8084/getPendingStudents")
  .then((res) => {
    this.setState({ students: res.data });
    
  });
}
findapprovedstudent()
  {
    axios
    .get("http://localhost:8084/getApprovedStudents")
    .then((res) => {
      this.setState({ students: res.data });
      
    });
  }



componentDidMount(){
    axios.get('http://localhost:8084/api/v1/students')
    .then((res)=>{
        this.setState({students:res.data});
        
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
            <h3 style={{ color: "black" }}>Student List</h3>
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
          {/* <Link to="/teacherPage"
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
        {/* <h2 className="text-center">Student List</h2> */}
            <div className="row">
          {/* <!--Table--> */}
          <table class="table table-striped table-bordered">
            {/* <!--Table head--> */}
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Student DOB</th>
                <th>Student Address</th>
                {/* <th>Student Password</th> */}
                <th>Gender</th>
                <th>Class</th>
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
                    this.state.students.map(
                        student=>
                        <tr key={student.id}>
                            {/* after student . name should same as name in database */}
                            <td>{student.student_name}</td>
                            <td>{student.student_email}</td>
                            <td>{student.student_dob}</td>
                            <td>{student.student_address}</td>
                            {/* <td>{student.student_password}</td> */}
                            <td>{student.student_gender}</td>
                            <td>{student.student_class}</td>
                            <td>{student.student_status}</td>
                            

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

export default StudentListForTeacher;
