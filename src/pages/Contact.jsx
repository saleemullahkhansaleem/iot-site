import React from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <Heading>Contact Us</Heading>
      <div className="container py-4">
        <div className="row">
          {/* <form className="col-4">
          <Input type="text" name="fname" label="First Name" />
        </form> */}
          <div className="col-8"></div>
          <Form className="col-4">
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" required placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Website URL</Form.Label>
              <Form.Control type="text" placeholder="Website URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label htmlFor="lookingFor">
                What are you looking for?
              </Form.Label>
              <Form.Check
                name="lookingFor"
                type="checkbox"
                label="Remote Monitoring and Control Solution"
              />
              <Form.Check
                name="lookingFor"
                type="checkbox"
                label="ICT Cooling Solution"
              />
              <Form.Check
                name="lookingFor"
                type="checkbox"
                label="Actionable Intelligence Platform (AxIn)"
              />
              <Form.Check
                name="lookingFor"
                type="checkbox"
                label="Hardware ( Energy Meter/Gateway/Controllers)"
              />
              <Form.Check name="lookingFor" type="checkbox" label="Others" />
            </Form.Group>
            <Button className="" type="submit">
              Request for a Demo
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
