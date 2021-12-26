import React, { Component } from 'react';
import './Login.css';
import './util.css'
import axios from 'axios';
export default class TeacherLogin extends Component {

  constructor(){
    super()
    this.state = {
      student_email:'',
      student_password:'',
      

    };
  

    
    this.handleChange_student_password = this.handleChange_student_password.bind(this);
    this.handleChange_student_email = this.handleChange_student_email.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleredirect=this.handleredirect.bind(this);
  }

    
    handleChange_student_email = (event) => {
      
      this.setState({ student_email: event.target.value });
    }
    handleChange_student_password = (event) => {
      this.setState({ student_password: event.target.value });

    }
    handleredirect()
    {
      this.props.history.push({pathname:'/studentPage',state:{detail:this.state.student_email}});
    }
    handleSubmit = (event) => {
      event.preventDefault();
      const student = {
        student_email: this.state.student_email,
        student_password: this.state.student_password,
        
      };
      console.log("student =>" + JSON.stringify(student))
      axios.post(`http://localhost:8084/studentLogin`, student )
        .then(res => {
          
          if(res.data)
          {
          this.handleredirect();
          }
          else
          alert("Wrong username or password")
          })
        .catch(error=>{
          alert("wrong username or password")
        })
        
    }

  render() {
    return (
      <div>
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100">
              <div
                class="login100-form-title"
                style={{backgroundImage:'url(bg-01.jpg)'}}
              >
                <span class="login100-form-title-1"> Student Login</span>
              </div>

              <form class="login100-form validate-form" onSubmit={this.handleSubmit}>
                <div
                  class="wrap-input100 validate-input m-b-26"
                  data-validate="Username is required"
                >
                  <span class="label-input100">Email</span>
                  <input
                    class="input100"
                    type="email"
                    name="student_email"
                    placeholder="Enter email"
                    required='required'
                    value={this.state.student_email}
                  onChange={this. handleChange_student_email}
                  />
                  <span class="focus-input100"></span>
                </div>

                <div
                  class="wrap-input100 validate-input m-b-18"
                  data-validate="Password is required"
                >
                  <span class="label-input100">Password</span>
                  <input
                    class="input100"
                    type="password"
                    name="student_password"
                    placeholder="Enter password"
                    required='required'
                    value={this.state.student_password}
                  onChange={this. handleChange_student_password}

                  />
                  <span class="focus-input100"></span>
                </div>



                <div class="container-login100-form-btn">
                  <button class="login100-form-btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
