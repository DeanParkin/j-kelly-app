import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

//import ContactForm from "../components/ContactForm";

let messageSent = false;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(data) {
    let config = {
      method: "POST",
      url: `${
        process.env.URL == "http://localhost:3000" ? process.env.URL : ""
      }/api/contactsend`,
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log("Message was sent Successfully");
        messageSent = true;
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div id="contactForm"></div>
      <section className="container pt-5 mb-3">
        <div className="text-center">
          <h2 className="h1 text-primary baskerville-font">Contact Us</h2>
          <div className="d-flex justify-content-center">
            <p className="text-dark text-container text-wrap">
              Contact us today for a free quote, calls available everyday
              between 8:00 am - 9:00pm on{" "}
              <a href="tel:+447718620226">07718620226</a>
            </p>
          </div>
        </div>
        {/* onSubmit={handleSubmit(onSubmitForm)} */}
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {/* <div className="d-flex justify-content-center"> */}
            <form
              className="text-primary mb-3 contact-form"
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className={`form-control border-primary ${
                    errors.contactName ? "border-danger" : ""
                  }`}
                  id="name"
                  placeholder="Enter name"
                  {...register("contactName", {
                    required: { value: true, message: "Your Name is required" },
                  })}
                />
                <span className="text-danger py-2">
                  {errors?.contactName?.message}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className={`form-control border-primary ${
                    errors.contactEmail ? "border-danger" : ""
                  }`}
                  id="email"
                  placeholder="Enter email"
                  {...register("contactEmail", {
                    required: {
                      value: true,
                      message: "Your Email is required",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <span className="text-danger py-2">
                  {errors?.contactEmail?.message}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className={`form-control border-primary ${
                    errors.contactMessage ? "border-danger" : ""
                  }`}
                  id="message"
                  rows="3"
                  placeholder="Let us know how we can help"
                  {...register("contactMessage", {
                    required: { value: true, message: "Message is required" },
                    minLength: {
                      value: 50,
                      message: "Message must be at least 50 characters",
                    },
                  })}
                ></textarea>
                <span className="text-danger py-2">
                  {errors?.contactMessage?.message}
                </span>
              </div>
              <div className="justify-content-end d-flex d-grid">
                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </div>
            </form>
            {/* </div> */}
          </div>
          <div className="col-md-2"></div>
        </div>
        {messageSent && (
          <div className="alert alert-success mt-2">
            <p className="text-center">Message sent successfully</p>
          </div>
        )}
      </section>
    </>
  );
}
