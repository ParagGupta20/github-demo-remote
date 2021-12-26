import React, { Component } from 'react'
//import { useHistory } from 'react-router-dom'
import './AdminPage.css';
import {Link} from 'react-router-dom'

class TeacherPage extends Component {
  constructor(props){
    super(props)
    this.state={
      teacher_id:this.props.location.state.detail,
    };

  }
  handleLogout=()=>{
    localStorage.clear()

    this.props.history.replace('/teacherLogin','urlHistory')
  }


  render() {
    return (
      <div>
         <div className='admin'>
         <br/>

      <nav class="navbar navbar-light bg-light container">
        <a class="navbar-brand">
          <h3 style={{color:'black'}}>Teacher Page</h3>
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
      <div class="row container" style={{ marginLeft: "5rem",marginBottom:"5rem" }}>
       <div class="col-sm-6">
          <div class="card">
            <div class="card-header"><b>View Profile</b></div>
            <div class="card-body">
              <Link to={{pathname:"/teacherProfile",state:{detail:this.state.teacher_id}}}><img src="BG.jpg" style={{ width: "13rem" }} /></Link>
            </div>
          </div>
        </div>
        
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header"><b>Student List</b></div>
            <div class="card-body">
            <Link to="/studentListForTeacher" ><img src="BG.jpg" style={{ width: "13rem" }} /></Link>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="row container" style={{ marginLeft: "5rem" }}>
        
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header">
              <b>Add Courses</b>
            </div>
            <div class="card-body">
            <Link to="/coursePage" ><img src="BG.jpg" style={{ width: "13rem" }} /></Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header"><b>View Courses</b></div>
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
export default TeacherPage;