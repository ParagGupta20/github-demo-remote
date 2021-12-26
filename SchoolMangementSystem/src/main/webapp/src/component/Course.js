import React, { Component } from "react";
import { Card, Button, CardBody, CardTitle, CardText } from "reactstrap";

class Course extends Component {
  constructor(props){
    super(props)
    
  }
  
  render() {
    return (
      <div>
          
        <div className="text-center container col-md-7">
          <div className="grid">
            <Card style={{ width: "45em" }}>
              <CardBody>
                <CardTitle tag="h5" className="font-weight-bold">
                  {this.props.course.course_title}
                </CardTitle>
                <CardText>{this.props.course.course_description}</CardText>
                <br/>
                <CardText><h5>Teacher Name:<span> </span>{this.props.course.teacher_name}</h5></CardText>
                <br />
                {/* <div className="btn-group">
                  <button className="btn btn-danger del">Delete</button>
                  &nbsp;
                  <button className="btn btn-info">Update</button>
                </div> */}
              </CardBody>
            </Card>
          </div>

          <br />
        </div>
      </div>
    );
  }
}
export default Course;

