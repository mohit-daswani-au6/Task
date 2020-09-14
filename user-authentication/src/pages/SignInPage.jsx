import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/UserPageLayout.css";
import { Button, Container, Row, Col } from "reactstrap";
import UserLayout from "../components/UserLayout";
import { Link } from "react-router-dom";
const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be minimum length 0f 8!")
    .matches(/[a-z]/, "Must have lowercase!")
    .matches(/[A-Z]/, "Must have uppercase!")
    .matches(/[0-9]/, "Must have number!")
    .required("Required"),
  companyCode: Yup.string().required("Required"),
});

class SignInPage extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row style={{ width: "100%" }}>
          <Col xs="6" className="image">
            <UserLayout />
          </Col>
          <Col className="colImg" xs="6">
            <img width="150px" src="images/intensel-dark-logo.png" alt="logo" />
            <p style={{ color: "darkgray" }}>
              Welcome back! Please login to your account
            </p>
            <br />
            <Formik
              initialValues={{
                username: "",
                password: "",
                companyCode: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={this.handleSubmit}
            >
              {({ errors, touched }) => (
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Field
                    className="input"
                    placeholder="Username"
                    style={{
                      fontSize: "18px",
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
                    placeholder="Company Code"
                    style={{
                      fontSize: "18px",
                    }}
                    name="companyCode"
                  />
                  {errors.companyCode && touched.companyCode ? (
                    <p>{errors.companyCode}</p>
                  ) : (
                    <br />
                  )}
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div className="form-group form-check">
                      <Field
                        type="checkbox"
                        name="acceptTerms"
                        className={"form-check-input"}
                      />
                      <label className="form-check-label">Remember me</label>
                      <ErrorMessage
                        name="acceptTerms"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <Link to="/forgotPassword">Forgot Password</Link>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Button
                      size="lg"
                      style={{
                        background: "#4d4074",
                        alignSelf: "center",
                        width: "120px",
                      }}
                      type="submit"
                    >
                      Sign In
                    </Button>
                    <Link to="/signup">
                      <Button
                        size="lg"
                        style={{
                          background: "white",
                          alignSelf: "center",
                          width: "120px",
                          color: "black",
                        }}
                        type="submit"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
            <br />
            <Link to="#" style={{ position: "relative", top: "145px" }}>
              Terms of use. privacy policy
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SignInPage;
