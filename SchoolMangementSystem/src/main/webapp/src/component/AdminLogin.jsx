import React, { Component } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";
import { Link,withRouter } from "react-router-dom";
import './Login.css';
import './util.css';


class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin_id:'',
      admin_name:'',
      admin_password:'',
      data:''
    };
    this.handleChange_admin_password = this.handleChange_admin_password.bind(this);
    this.handleChange_admin_name = this.handleChange_admin_name.bind(this);
    this.handleChange_admin_id = this.handleChange_admin_id.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleredirect=this.handleredirect.bind(this);
  }

  handleChange_admin_id = (event) => {
      
    this.setState({ admin_id: event.target.value });
  }
    handleChange_admin_name = (event) => {
      
      this.setState({ admin_name: event.target.value });
    }
    handleChange_admin_password = (event) => {
      this.setState({ admin_password: event.target.value });

    }

    handleredirect()
    {
      this.props.history.push({
        pathname:'/adminPage',
      state:{detail:this.state.admin_id}})
    }

  handleSubmit(event) {
     event.preventDefault();
      const admin = {
        admin_id: this.state.admin_id,
        admin_name: this.state.admin_name,
        admin_password: this.state.admin_password,
        
      };
     // console.log("admin =>" + JSON.stringify(admin))
      axios.post(`http://localhost:8084/adminLogin`, admin )
        .then(res=> {
          //console.log(res.data)
          //alert(res.data)
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
                <span class="login100-form-title-1"> Admin Login</span>
              </div>

              <form class="login100-form validate-form" onSubmit={this.handleSubmit}>
              <div
                  class="wrap-input100 validate-input m-b-26"
                  data-validate="Username is required"
                >
                  <span class="label-input100">Userid</span>
                  <input
                    class="input100"
                    type="number"
                    name="admin_id"
                    placeholder="Enter id"
                    required='required'
                    value={this.state.admin_id}
                    onChange={this. handleChange_admin_id}
                  />
                  <span class="focus-input100"></span>
                </div>
                <div
                  class="wrap-input100 validate-input m-b-26"
                  data-validate="Username is required"
                >
                  <span class="label-input100">Username</span>
                  <input
                    class="input100"
                    type="text"
                    name="admin_name"
                    placeholder="Enter User Name"
                    required='required'
                    value={this.state.admin_name}
                    onChange={this. handleChange_admin_name}
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
                    name="admin_password"
                    placeholder="Enter password"
                    required='required'
                    value={this.state.admin_password}
                    onChange={this. handleChange_admin_password}

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
    );
  }
}


export default withRouter(AdminLogin);