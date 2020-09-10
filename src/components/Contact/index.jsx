import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import axios from "axios";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/send", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div id="contact">
      <h1 className="title">Contact me</h1>
      {result && (
        <p className={`${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      )}
      <form className="contactform" onSubmit={sendEmail}>
        <div className="nameplusemail">
          <Form.Group id="name">
            <Form.Control
              type="text"
              name="name"
              className="form-input"
              value={state.name}
              placeholder="Name"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group id="email">
            <Form.Control
              type="text"
              name="email"
              className="form-input"
              value={state.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
        <Form.Group id="subject">
          <Form.Control
            type="text"
            name="subject"
            className="form-input"
            value={state.subject}
            placeholder="Subject"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group id="message">
          <Form.Control
            as="textarea"
            name="message"
            className="form-input"
            value={state.message}
            rows="2"
            placeholder="Message"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit" className="submitbtn">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
