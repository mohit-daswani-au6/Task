import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/UserPageLayout.css";
import { Button, Container, Row, Col } from "reactstrap";
import UserLayout from "../components/UserLayout";
import { Link } from "react-router-dom";
const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastname: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be minimum length 0f 8!")
    .matches(/[a-z]/, "Must have lowercase!")
    .matches(/[A-Z]/, "Must have uppercase!")
    .matches(/[0-9]/, "Must have number!")
    .required("Required"),
  confirmpassword: Yup.string().required("Required"),
});

class SignUpPage extends Component {
  state = {
    errPassword: "",
  };
  handleSubmit = (data) => {
    if (data.password !== data.confirmpassword) {
      this.setState({ errPassword: "Confirm password doesn't match" });
      setTimeout(() => {
        this.setState({ errPassword: "" });
      }, 3000);
    }
  };
  render() {
    return (
      <Container
        fluid={true}
      >
        <Row  >
          <Col xs="6" className="image">
            <UserLayout />
          </Col>
          <Col className="colImg" xs="6">
            <img width="150px" src="images/intensel-dark-logo.png" alt="logo" />
            <p style={{color: "darkgray" }}>
              please complete to create your account
            </p>
            <br />
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={this.handleSubmit}
            >
              {({ errors, touched }) => (
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                  className="name"
                    // style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div  style={{ display: "flex", flexDirection: "column" }}>
                      <Field
                        className="input"
                        placeholder="First Name"
                        style={{
                          fontSize: "20px",
                        }}
                        name="firstname"
                      />
                      {errors.firstname && touched.firstname ? (
                        <p>{errors.firstname}</p>
                      ) : (
                        <br />
                      )}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Field
                        className="input"
                        placeholder="Last Name"
                        style={{
                          fontSize: "20px",
                        }}
                        name="lastname"
                      />
                      {errors.lastname && touched.lastname ? (
                        <p>{errors.lastname}</p>
                      ) : (
                        <br />
                      )}
                    </div>
                  </div>
                  <Field
                    className="input"
                    placeholder=" Username"
                    style={{
                      fontSize: "18px",
                      marginTop: "15px",
                    }}
                    name="username"
                  />
                  {errors.username && touched.username ? (
                    <p>{errors.username}</p>
                  ) : (
                    <br />
                  )}

                  <Field
                    className="input"
                    placeholder="Email"
                    style={{ fontSize: "18px" }}
                    name="email"
                    type="email"
                  />

                  {errors.email && touched.email ? (
                    <p>{errors.email}</p>
                  ) : (
                    <br />
                  )}
                  <Field
                    className="input"
                    placeholder="Password"
                    style={{ fontSize: "18px" }}
                    name="password"
                    type="password"
                  />
                  {errors.password && touched.password ? (
                    <p>{errors.password}</p>
                  ) : (
                    <br />
                  )}
                  <Field
                    className="input"
                    placeholder="Confirm Password"
                    style={{ fontSize: "18px" }}
                    name="confirmpassword"
                    type="password"
                  />
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <p>{errors.confirmpassword}</p>
                  ) : (
                    <br />
                  )}
                  {this.state.errPassword !== "" ? (
                    <p>{this.state.errPassword}</p>
                  ) : null}
                  <div className="form-group form-check">
                    <Field
                      type="checkbox"
                      name="acceptTerms"
                      className={
                        "form-check-input " 
                      }
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I agree with terms and condition
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <Button
                    size="lg"
                    color="danger"
                    style={{
                      background: "#4d4074",
                      alignSelf: "center",
                      width: "150px",
                    }}
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>
            <br />
            <p style={{ color: "black" }}>
              Already a user?
              <Link to="/signin"> Sign In</Link>
            </p>
       
            <Link to="#" style={{ position: "relative", top: "21px" }}>Terms of use. privacy policy</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUpPage;
