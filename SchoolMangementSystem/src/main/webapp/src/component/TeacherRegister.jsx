import React from "react";
import { Link,withRouter} from "react-router-dom";
import './style.css'
import axios from "axios";

class TeacherRegister extends React.Component{

  constructor(){
    super()
    this.state = {
      teacher_name: '',
      teacher_email:'',
      teacher_password:'',
      teacher_address:'',
      teacher_dob:'',
      teacher_gender:'',
      teacher_repassword:'',
      flag:true

    };
  

    this.handleChange_teacher_name = this.handleChange_teacher_name.bind(this);
    this.handleChange_teacher_password = this.handleChange_teacher_password.bind(this);
    this.handleChange_teacher_repassword = this.handleChange_teacher_repassword.bind(this);
    this.handleChange_teacher_email = this.handleChange_teacher_email.bind(this);
    this.handleChange_teacher_dob = this.handleChange_teacher_dob.bind(this);
    this.handleChange_teacher_address = this.handleChange_teacher_address.bind(this);
    this.handleChange_teacher_gender = this.handleChange_teacher_gender.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleredirect=this.handleredirect.bind(this);
    this.validate_password = this.validate_password.bind(this);
    this.validate_confirm_password = this.validate_confirm_password.bind(this);
  }
  validate_confirm_password(teacher_password,confirm_password)
  {
    if(teacher_password!=confirm_password){
      alert("Password and confirm password does not match")
      this.state.flag=false

    }
  }
  validate_password(teacher_password) {
    if (teacher_password.length < 6) {
      alert("Password length must be greater than 6 characters");
      this.state.flag=false
      
    }
    else
    {
      this.validate_confirm_password(this.state.teacher_password,this.state.teacher_repassword)
      
    }
  }

    handleChange_teacher_name = (event) => {
      this.setState({ teacher_name: event.target.value });

    }
    handleChange_teacher_email = (event) => {
      
      this.setState({ teacher_email: event.target.value });
    }
    handleChange_teacher_password = (event) => {
      this.setState({ teacher_password: event.target.value });

    }
    handleChange_teacher_repassword = (event) => {
      this.setState({ teacher_repassword: event.target.value });

    }

    handleChange_teacher_dob = (event) => {
      this.setState({ teacher_dob: event.target.value });

    }
    handleChange_teacher_address = (event) => {
      this.setState({ teacher_address: event.target.value });

    }
    handleChange_teacher_gender = (event) => {
      this.setState({ teacher_gender: event.target.value });

    }
    handleredirect()
    {
      this.props.history.push('/teacherLogin')
    }
    

    handleSubmit = (event) => {
      this.validate_password(this.state.teacher_password);
    if(this.state.flag)
    {
      event.preventDefault();
      const teacher = {
        teacher_name: this.state.teacher_name,
        teacher_dob: this.state.teacher_dob,
        teacher_email: this.state.teacher_email,
        teacher_address: this.state.teacher_address,
        teacher_password: this.state.teacher_password,
        teacher_gender: this.state.teacher_gender,
      };
      console.log("teacher =>" + JSON.stringify(teacher))
      axios.post(`http://localhost:8084/api/v1/TeachersignUp`, teacher )
        .then(res => {
         
          
          if(res.data)
          {
            alert("registeration done succesfully");
          this.handleredirect()
          }
          else{
            alert("Email already exist")
          }
        })
        .catch(error=>{
         // console.log(error);
         // alert(error.data)
          alert("Sorry something went wrong pls try after sometime");
        })
    }
    
    }


  render(){
  return (
    <div>
      <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src="TeacherReg.png" alt="" />
          </div>
          <form action="" onSubmit={this.handleSubmit}>
            <h3>Registration Form For Teacher</h3>
            
            <div className="form-group">
            
              <input type="text" placeholder="Name" className="form-control1" value={this.state.teacher_name}
                  onChange={this.handleChange_teacher_name}
                  required='required'/>
              {/* <select name="" id="" className="form-control1">
                <option value="" disabled selected>
                  Class
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="other">Other</option>
              </select> */}
              {/* <i
                class="fa fa-caret-down"
                aria-hidden="true"
                style={{ marginTop: "10px" }}
              ></i> */}
            </div>

            <div className="form-wrapper">
           
              <input
                type="text"
                placeholder="Email Address"
                className="form-control1"
                value={this.state.teacher_email}
                  onChange={this. handleChange_teacher_email}
                  required='required'
              />
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="form-wrapper">
            
              <input
                type="text"
                placeholder="Date of Birth(DD/MM/YYYY)"
                className="form-control1"
                value={this.state.teacher_dob}
                  onChange={this. handleChange_teacher_dob}
                  required='required'
              />
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </div>
            <div className="form-wrapper"onChange={this.handleChange_teacher_gender} value={this.state.teacher_gender}>
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
                value={this.state.teacher_address}
                  onChange={this. handleChange_teacher_address}
                  required='required'
              />
              <i class="fa fa-address-book" aria-hidden="true"></i>
            </div>
            <div className="form-wrapper">
            
              <input
                type="password"
                placeholder="Password"
                className="form-control1"
                value={this.state.teacher_password}
                  onChange={this. handleChange_teacher_password}
                  required='required'
                  
              />
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control1"
                value={this.state.teacher_repassword}
                  onChange={this.handleChange_teacher_repassword}
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

export default TeacherRegister;