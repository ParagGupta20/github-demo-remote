import React, { Component } from 'react'
//import { useHistory } from 'react-router-dom'
import './AdminPage.css';
import {Link} from 'react-router-dom'

class StudentPage extends Component {
  constructor(props){
    super(props)
    this.state={
      student_id:this.props.location.state.detail,
    };

  }
  handleLogout=()=>{
    localStorage.clear()

    this.props.history.replace('/studentLogin','urlHistory')
  }


  render() {
    return (
      <div>
         <div className='admin'>
         <br/>

      <nav class="navbar navbar-light bg-light container">
        <a class="navbar-brand">
          <h3 style={{color:'black'}}>Student Page</h3>
        </a>
        <form class="form-inline">
          <button 
            class="btn btn-danger my-2 my-sm-0"
            type="submit"
            style={{ marginLeft: "33.5rem" }}
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </form>
      </nav>
      <br/>
      <div class="row container" style={{ marginLeft: "5rem" ,marginBottom:"5rem"}}>
       <div class="col-sm-6">
          <div class="card">
            <div class="card-header"><b>School Details</b></div>
            <div class="card-body">
              <Link to="/schoolDetails" ><img src="BG.jpg" style={{ width: "13rem"}} /></Link>
            </div>
          </div>
        </div>
        
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header"><b>View Profile</b></div>
            <div class="card-body">
            <Link to={{pathname:"/studentProfile",state:{detail:this.state.student_id}}} ><img src="BG.jpg" style={{ width: "13rem" }} /></Link>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="row container" style={{ marginLeft: "5rem" }}>
        
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header">
              <b>Show Teacher</b>
            </div>
            <div class="card-body">
            <Link to="/teacherListForStudent" ><img src="BG.jpg" style={{ width: "13rem" }} /></Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header"><b>Show Course</b></div>
            <div class="card-body">
            <Link to="/courseList" ><img src="BG.jpg" style={{ width: "13rem" }} /></Link>
            </div>
          </div>
        </div>
      </div>
      <br/>

    </div>
      </div>
    )
  }
}
export default StudentPage;