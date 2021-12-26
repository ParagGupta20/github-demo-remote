import React, { Component } from 'react'
import './AdminPage.css';
import {Link} from 'react-router-dom'
 
class AdminPage extends Component {
  constructor(props){
    super(props)
    this.state={
      admin_id:this.props.location.state.detail,
    };
 
  }
  handleLogout=()=>{
    localStorage.clear()

    this.props.history.replace('/adminLogin','urlHistory')
  }
 
  render() {
    return (
      <div>
         <div className='admin'>
         <br/>
 
      <nav class="navbar navbar-light bg-light container">
        <a class="navbar-brand">
          <h3 style={{color:'black'}}>Admin Page</h3>
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
              <Link to="/schoolDetails" ><img src="BG.jpg" style={{ width: "15rem" }} /></Link>
            </div>
          </div>
        </div>
        
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header"><b>View Profile</b></div>
            <div class="card-body">
            <Link to={{pathname:"/adminProfile",state:{detail:this.state.admin_id}}} ><img src="BG.jpg" style={{ width: "15rem" }} /></Link>
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
            <Link to="/teacherList" ><img src="BG.jpg" style={{ width: "15rem" }} /></Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header"><b>Show Student</b></div>
            <div class="card-body">
            <Link to="/studentList" ><img src="BG.jpg" style={{ width: "15rem" }} /></Link>
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

export default AdminPage;