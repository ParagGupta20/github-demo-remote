import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className="container-fluid">
      <br />
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="10000"
            style={{ marginBottom: "12px" }}
          >
            <img src="BG.jpg" className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ marginBottom: "10em" }}
            >
              <h1>Quote of the Day</h1>
              <h3 style={{ color: "blue" }}>
                <b>
                  If you fail,never give up because F.A.I.L means
                </b>
              </h3>
              <h3 style={{ color: "red" }}>
                <b>
                  " First Attempt in Learning"
                </b>
              </h3>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="BG.jpg" className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ marginBottom: "10em" }}
            >
              <h1>Notice</h1>
              <h3 style={{ color: "blue" }}>
                <b>
                  -Invitation: 'Tech-Talk' on "Space for Everyone" on Wednesday,
                  15th January, 2021 at 8:00 PM
                </b>
              </h3>
              <h3 style={{ color: "blue" }}>
                <b>
                  -National Conference on Sustainable Development and Circular
                  Economy
                </b>
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src="BG.jpg" className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ marginBottom: "12em" }}
            >
              <h1>Notice</h1>
              <h3 style={{ color: "blue" }}>
                <b>
                  -Invitation to attend the 2021 IEEE SIGHT Week Celebration!
                </b>
              </h3>
              <h3 style={{ color: "blue" }}>
                <b>-Webinar on “Generation of Electricity using Solar Power”</b>
              </h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />
      <div className="container text-center">
        <br />
        <br />

        <div className="row">
          <div className="col-sm-4">
            <h4>
              <b>For Admin</b>
            </h4>

            <img
              src="Ad.jpg"
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
            <div className="card-body">
              <Link
                to="/adminLogin"
                className="card-link btn btn-dark"
                style={{ marginLeft: "10px" }}
              >
                Login
              </Link>
            </div>
          </div>

          <div className="col-sm-4">
            <h4>
              <b>For Teacher</b>
            </h4>

            <img
              src="te.jpg"
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
            <div className="card-body">
              <Link
                to="/teacherLogin"
                className="card-link btn btn-dark"
                style={{ marginLeft: "10px" }}
              >
                Login
              </Link>
              <Link
                to="/teacherRegister"
                className="card-link btn btn-dark"
                style={{}}
              >
                Register
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <h4>
              <b>For Student</b>
            </h4>

            <img
              src="st.jpg"
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
            <div className="card-body">
              <Link
                to="/studentLogin"
                className="card-link btn btn-dark"
                style={{ marginLeft: "10px" }}
              >
                Login
              </Link>
              <Link
                to="/studentRegister"
                className="card-link btn btn-dark"
                style={{}}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
