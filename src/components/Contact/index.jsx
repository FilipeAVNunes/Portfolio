import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import "./style.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_3se0pyl",
        e.target,
        "user_FyXQZXeW6ianehc8nxge4"
      )
      .then(
        (result) => {
          alert(
            "Your message was sent successfully. Will get back to you shortly."
          );
          console.log(result.text);
        },
        (error) => {
          alert("There has been an error. Try again later.");
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="contact">
      <h1 className="title">Contact me</h1>
      <form className="contactform" onSubmit={sendEmail}>
        <div className="nameplusemail">
          <Form.Group id="name">
            <Form.Control
              type="text"
              name="name"
              className="form-input"
              data-aos="fade-up"
              placeholder="Name"
              required
            />
          </Form.Group>
          <Form.Group id="email">
            <Form.Control
              type="text"
              name="email"
              className="form-input"
              data-aos="fade-up"
              placeholder="Email"
              required
            />
          </Form.Group>
        </div>
        <Form.Group id="subject">
          <Form.Control
            type="text"
            name="subject"
            className="form-input"
            data-aos="fade-up"
            placeholder="Subject"
            required
          />
        </Form.Group>
        <Form.Group id="message">
          <Form.Control
            as="textarea"
            name="message"
            className="form-input"
            data-aos="fade-up"
            rows="2"
            placeholder="Message"
            required
          />
        </Form.Group>
        <Button
          variant="outline-dark"
          type="submit"
          data-aos="fade-up"
          className="submitbtn"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
