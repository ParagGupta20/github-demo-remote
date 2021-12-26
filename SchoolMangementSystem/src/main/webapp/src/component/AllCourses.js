import React, { Component } from 'react'
import Course from "./Course";
import axios from 'axios'
import { withRouter } from 'react-router-dom';

class AllCourses extends Component {
  constructor(props){
    super(props);
    this.state={
      courses:[]     
        
    }
  }
   
  

  componentDidMount(){
    axios.get('http://localhost:8084/api/v1/courses')
      .then((res)=>{
          this.setState({courses:res.data});
          //console.log(res.data)
          //console.log(this.state.courses)
              })
            }
           
  render() {
    return (
      <div>
          <div>
       <br />
       <nav className=" row navbar navbar-light bg-light container" style={{marginLeft:'5em'}}>
         <div className="navbar-brand col-md-1">
           <h3 className="" style={{ color: "black" }}>All Course List</h3>
         </div>
         <div className="col-md-4" style={{ marginLeft: "2em" }}>
           {/* <button
             className="btn btn-danger"
             type="submit"
             style={{ marginLeft: "15rem" }}
             onClick={this.handleback} 
           >
             Back
           </button> */}
         </div>
       </nav>
       <br />

       {this.state.courses.length > 0
         ? this.state.courses.map((item) => <Course course={item} />)
         : "No course available!!"}
         
     </div>
      </div>
    )
  }
}
export default withRouter(AllCourses);

