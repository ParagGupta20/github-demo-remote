import React, { Component } from "react";
import axios from "axios";
import "./style.css";
export default class StudentRegister extends Component {
  constructor() {
    super();
    this.state = {
      student_name: "",
      student_email: "",
      student_password: "",
      student_address: "",
      student_class: "",
      student_dob: "",
      student_gender: "",
      student_repassword: "",
      flag:true
    };

    this.handleChange_student_name = this.handleChange_student_name.bind(this);
    this.handleChange_student_password =this.handleChange_student_password.bind(this);
    this.handleChange_student_repassword =this.handleChange_student_repassword.bind(this);
    this.handleChange_student_email = this.handleChange_student_email.bind(this);
    this.handleChange_student_dob = this.handleChange_student_dob.bind(this);
    this.handleChange_student_address =this.handleChange_student_address.bind(this);
    this.handleChange_student_gender =this.handleChange_student_gender.bind(this);
    this.handleChange_student_class = this.handleChange_student_class.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleredirect = this.handleredirect.bind(this);
    this.validate_password = this.validate_password.bind(this);
    this.validate_confirm_password = this.validate_confirm_password.bind(this);
  }
  validate_confirm_password(student_password,confirm_password)
  {
    if(student_password!=confirm_password){
      alert("Password and confirm password does not match")
      this.state.flag=false

    }
  }

  validate_password(student_password) {
    if (student_password.length < 6) {
      alert("Password length must be greater than 6 characters");
      this.state.flag=false
      
    }
    else
    {
      this.validate_confirm_password(this.state.student_password,this.state.student_repassword)
      
    }
  }

  handleChange_student_name = (event) => {
    this.setState({ student_name: event.target.value });
  };
  handleChange_student_email = (event) => {
    this.setState({ student_email: event.target.value });
  };
  handleChange_student_password = (event) => {
    this.setState({ student_password: event.target.value });
  };
  handleChange_student_repassword = (event) => {
    this.setState({ student_repassword: event.target.value });
    
  };

  handleChange_student_dob = (event) => {
    this.setState({ student_dob: event.target.value });
  };
  handleChange_student_address = (event) => {
    this.setState({ student_address: event.target.value });
  };
  handleChange_student_gender = (event) => {
    this.setState({ student_gender: event.target.value });
  };

  handleChange_student_class = (event) => {
    this.setState({ student_class: event.target.value });
  };
  handleredirect() {
    this.props.history.push("/studentLogin");
  }

  handleSubmit = (event) => {
    this.validate_password(this.state.student_password);
    if(this.state.flag)
    {
    event.preventDefault();
    const student = {
      student_name: this.state.student_name,
      student_dob: this.state.student_dob,
      student_email: this.state.student_email,
      student_address: this.state.student_address,
      student_password: this.state.student_password,
      student_gender: this.state.student_gender,
      student_class: this.state.student_class,
    };
    console.log("student =>" + JSON.stringify(student));
    axios
      .post(`http://localhost:8084/api/v1/StudentsignUp`, student)
      .then((res) => {
        if(res.data)
          {
            alert("registeration done succesfully");
          this.handleredirect()
          }
          else{
            alert("Email already exist")
          }
      })
      .catch((error) => {
        //console.log(error);
        alert("Sorry something went wrong pls try after sometime");
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="inner">
            <div className="image-holder">
              <img src="Register.png" alt="" />
            </div>
            <form action="" onSubmit={this.handleSubmit}>
              <h3>Registration Form For Student</h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control1"
                  value={this.state.student_name}
                  onChange={this.handleChange_student_name}
                  required="required"
                />
                <select
                  name=""
                  id=""
                  className="form-control1"
                  value={this.state.student_class}
                  onChange={this.handleChange_student_class}
                  required="required"
                >
                  <option value="" disabled selected>
                    Class
                  </option>
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3">III</option>
                  <option value="4">IV</option>
                  <option value="5">V</option>
                  <option value="6">VI</option>
                  <option value="7">VII</option>
                  <option value="8">VIII</option>
                  <option value="9">IX</option>
                  <option value="10">X</option>
                  <option value="11">XI</option>
                  <option value="12">XII</option>
                </select>
                <i
                  class="fa fa-caret-down"
                  aria-hidden="true"
                  style={{ marginTop: "10px" }}
                ></i>
              </div>

              <div className="form-wrapper">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control1"
                  value={this.state.student_email}
                  onChange={this.handleChange_student_email}
                  required="required"
                />
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="form-wrapper">
                <input
                  type="text"
                  placeholder="Date of Birth(DD/MM/YYYY)"
                  className="form-control1"
                  value={this.state.student_dob}
                  onChange={this.handleChange_student_dob}
                  required="required"
                />
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <div
                className="form-wrapper"
                onChange={this.handleChange_student_gender}
                value={this.state.student_gender}
              >
                <select name="" id="" className="form-control1">
                  <option value="" disabled selected>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <div className="form-wrapper">
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control1"
                  value={this.state.student_address}
                  onChange={this.handleChange_student_address}
                  required="required"
                />
                <i class="fa fa-address-book" aria-hidden="true"></i>
              </div>
              <div className="form-wrapper">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control1"
                  value={this.state.student_password}
                  onChange={this.handleChange_student_password}
                  required="required"
                />
                <i class="fa fa-key" aria-hidden="true"></i>
              </div>
              <div className="form-wrapper">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control1"
                  value={this.state.student_repassword}
                  onChange={this.handleChange_student_repassword}
                  required="required"

                />
                <i class="fa fa-key" aria-hidden="true"></i>
              </div>
              <button className="btn1">
                Register
                <i className="zmdi zmdi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
