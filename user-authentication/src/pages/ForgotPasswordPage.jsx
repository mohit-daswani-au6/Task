import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/UserPageLayout.css";
import { Button, Container, Row, Col } from "reactstrap";
import UserLayout from "../components/UserLayout";
import { Link } from "react-router-dom";
const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

class ForgotPasswordPage extends Component {
  render() {
    return (
      <Container
        fluid={true}
      >
        <Row >
          <Col xs="6" className="image">
            <UserLayout />
          </Col>
          <Col className="colImg" xs="6">
            <img width="150px" src="images/intensel-dark-logo.png" alt="logo" />
            <p style={{color: "darkgray" }}>
              Enter your password and we sent you a password reset link
            </p>
            <br />
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={ForgotPasswordSchema}
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

                  <Button
                    size="lg"
                    style={{
                      background: "#4d4074",
                      alignSelf: "center",
                      width: "175px",
                    }}
                    type="submit"
                  >
                    Send Request
                  </Button>
                </Form>
              )}
            </Formik>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to="#" style={{ position: "relative", top: "200px" }}>
              Terms of use. privacy policy
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ForgotPasswordPage;
