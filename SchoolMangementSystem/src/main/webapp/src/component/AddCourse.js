import React, { Component } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from 'axios'

export default class AddCourse extends Component {
  constructor() {
    super();
    this.state = {
      course_title: "",
      course_description: "",
      teacher_name: "",
    };

    this.handleChange_teacher_name = this.handleChange_teacher_name.bind(this);
    this.handleChange_course_title = this.handleChange_course_title.bind(this);
    this.handleChange_course_description =this.handleChange_course_description.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange_teacher_name = (event) => {
    this.setState({ teacher_name: event.target.value });
  };
  handleChange_course_title = (event) => {
    this.setState({ course_title: event.target.value });
  };
  handleChange_course_description = (event) => {
    this.setState({ course_description: event.target.value });
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    const course = {
      teacher_name: this.state.teacher_name,
      course_title: this.state.course_title,
      course_description: this.state.course_description,
    };
    //console.log("course =>" + JSON.stringify(course));
    axios
      .post(`http://localhost:8084/api/v1/addcourses`, course)
      .then((res) => {
        //console.log(res);
       // console.log(res.data);
        alert("course details added succesfully");
        this.handleClear()
      })
      .catch((error) => {
        //console.log(error);
        alert("Something went wrong pls try after sometime");
      });
  };
  handleClear() {
    var course = {
      course_title: "",
      course_description: "",
      teacher_name: "",
    };

    this.setState(course);
    //alert("Cleared");
  }

  render() {
    return (
      <div>
        <div className="container col-md-8">
          <h1 className="text-center my-3">Fill Course Details</h1>
          <Form>
            <FormGroup>
              <label htmlFor="cTitle">Course Name</label>
              <Input
                type="text"
                name="cTitle"
                placeholder="Provide Course Title here!!"
                id="cTitle"
                value={this.state.course_title}
                onChange={this.handleChange_course_title}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="cDesc">Course Description</label>
              <Input
                type="textarea"
                name="cDesc"
                placeholder="Write Course Desc. here!!"
                id="cDesc"
                style={{ height: 150 }}
                value={this.state.course_description}
                onChange={this.handleChange_course_description}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="cDesc">Teacher Name</label>
              <Input
                type="textarea"
                name="cDesc"
                placeholder="Write Teacher name here!!"
                id="cDesc"
                style={{ height: 150 }}
                value={this.state.teacher_name}
                onChange={this.handleChange_teacher_name}
              />
            </FormGroup>
            <Container className="text-center">
              <Button color="success" onClick={this.handleSubmit}>Add Course</Button>
              <Button color="warning ml-3" onClick={this.handleClear}>Clear Course</Button>
            </Container>
          </Form>
          <br />
        </div>
      </div>
    );
  }
}
