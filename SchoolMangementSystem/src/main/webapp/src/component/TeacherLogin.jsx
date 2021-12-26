import React, { Component } from 'react';
import './Login.css';
import './util.css'
import axios from 'axios';
export default class TeacherLogin extends Component {

  constructor(){
    super()
    this.state = {
      teacher_email:'',
      teacher_password:'',
      

    };
  

    
    this.handleChange_teacher_password = this.handleChange_teacher_password.bind(this);
    this.handleChange_teacher_email = this.handleChange_teacher_email.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleredirect=this.handleredirect.bind(this);
  }

    
    handleChange_teacher_email = (event) => {
      
      this.setState({ teacher_email: event.target.value });
    }
    handleChange_teacher_password = (event) => {
      this.setState({ teacher_password: event.target.value });

    }

    handleredirect()
    {
      this.props.history.push({pathname:'/teacherPage',state:{detail:this.state.teacher_email}});
    }

    

    handleSubmit = (event) => {
      event.preventDefault();
      const teacher = {
        teacher_email: this.state.teacher_email,
        teacher_password: this.state.teacher_password,
        
      };
      console.log("teacher =>" + JSON.stringify(teacher))
      axios.post(`http://localhost:8084/teacherLogin`, teacher )
        .then(res => {
          
          //alert(res.data);
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
                <span class="login100-form-title-1"> Teacher Login</span>
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
                    name="teacher_email"
                    placeholder="Enter email"
                    required='required'
                    value={this.state.teacher_email}
                  onChange={this. handleChange_teacher_email}
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
                    name="teacher_password"
                    placeholder="Enter password"
                    required='required'
                    value={this.state.teacher_password}
                  onChange={this. handleChange_teacher_password}

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
