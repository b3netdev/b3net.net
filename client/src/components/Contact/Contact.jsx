import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link as ScrollLink } from "react-scroll";

import PhoneIcon from "../../assets/images/phone-icon.png";
import EmailIcon from "../../assets/images/email-icon.png";
import Address from "../../assets/images/address-icon.png";
import useContact from "../../hooks/useContact";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const navigate = useNavigate();

  const { error, loading, submitContact, success } = useContact();
  const [submitmessage, setSubmitMessage] = useState({
    type: "",
    message: "",
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    formik.handleSubmit();
    const data = await submitContact(formik.values);
    console.log("data", data);
    if (data && data.data.success) {
      setSubmitMessage({
        type: "success",
        message: data.data.message,
      });
      navigate("/thankyou");
    } else {
      setSubmitMessage({
        type: "",
        message: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="mb-3">
          Let's Create{" "}
          <span className="gradient-text-border heading-text b3net">
            Together
          </span>
        </h2>
        <p className="subheading-text">
          Have a project in mind? We'd love to hear about it. Drop us a message
          and let’s start building something amazing.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-lg-7">
          <div className="contact-box my-shadow my-shadow-1">
            <div className="row g-3">
              <div className="col-md-6 text-start fw-medium opacity-75 fromInputtext">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                )}
              </div>

              <div className="col-md-6 text-start fw-medium opacity-75 fromInputtext">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <small className="text-danger">
                    {formik.errors.lastName}
                  </small>
                )}
              </div>

              <div className="col-md-6 text-start fw-medium opacity-75 fromInputtext">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <small className="text-danger">{formik.errors.email}</small>
                )}
              </div>

              <div className="col-md-6 text-start fw-medium opacity-75 fromInputtext">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <small className="text-danger">{formik.errors.phone}</small>
                )}
              </div>

              <div className="col-12 text-start fw-medium opacity-75 fromInputtext">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <small className="text-danger">{formik.errors.subject}</small>
                )}
              </div>

              <div className="col-12 text-start fw-medium opacity-75 fromInputtext">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <small className="text-danger">{formik.errors.message}</small>
                )}
              </div>

              <div className="col-12 d-flex align-items-center justify-content-md-end mt-3 mt-md-5">
                <button
                  className="btn button-gradient-1"
                  onClick={HandleFormSubmit}
                >
                  Submit
                </button>
              </div>
              {submitmessage.message ? (
                <div className="col-12 text-center mt-3">
                  <p
                    className={
                      submitmessage.type === "success"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {submitmessage.message}
                  </p>
                </div>
              ) : error ? (
                <div className="col-12 text-center mt-3">
                  <p className="text-danger">{error}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="my-shadow contact-info-box mb-4">
            <h4 className="mb-4">
              Contact{" "}
              <span className="heading-text gradient-text-border">
                Information
              </span>
            </h4>

            <div className="d-flex mb-4 align-items-center">
              <div className="footer-contact-iocn">
                <img src={PhoneIcon} alt="Phone" />
              </div>
              <div className="text-start">
                <p>PHONE</p>
                <p className="phone-no">9883875666</p>
              </div>
            </div>

            <div className="d-flex mb-4 align-items-center">
              <div className="footer-contact-iocn">
                <img src={EmailIcon} alt="Email" />
              </div>
              <div className="text-start">
                <p>EMAIL</p>
                <p className="bold-mail">
                  info@b3net.org &nbsp; | &nbsp; hr@b3net.org
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="footer-contact-iocn">
                <img src={Address} alt="Address" />
              </div>
              <div className="text-start">
                <p>ADDRESS</p>
                <p className="bold-mail">
                  IB 151, Salt lake Sec III, Kolkata – 700106, India
                </p>
              </div>
            </div>
          </div>

          <div
            className="cta-box my-shadow"
            style={{
              background: "linear-gradient(90deg, #0d246a, #379ebe)",
            }}
          >
            <h4 className="fw-bold mb-2 text-white">Ready to Start?</h4>
            <p className="mb-4 text-white">
              Let's discuss your project and explore how we can help you achieve
              your digital goals. We're excited to hear your ideas!
            </p>
            <button className="btn button-2">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={300}
                offset={-75}
                spy={false}
              >
                Schedule A Call{" "}
              </ScrollLink>
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
