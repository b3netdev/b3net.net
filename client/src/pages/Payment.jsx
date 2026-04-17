import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PaymentPage() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      bankName: "",
      accountNumber: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      address: Yup.string().required("Address is required"),
      bankName: Yup.string().required("Bank name is required"),
      accountNumber: Yup.string().required("Account number is required"),
      cardNumber: Yup.string().required("Card number is required"),
      expiryDate: Yup.string().required("Expiry date is required"),
      cvc: Yup.string().required("CVC is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  const getFieldClass = (name) =>
    `form-control ${
      formik.touched[name] && formik.errors[name] ? "is-invalid" : ""
    }`;

  return (
    <div className="container py-4 paymentBox">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h4 className="mb-4 text-center">Payment Details</h4>

              <form onSubmit={formik.handleSubmit}>
                {/* Personal Info */}
                <h6 className="mb-3">Personal Information</h6>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className={getFieldClass("firstName")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.firstName}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className={getFieldClass("lastName")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.lastName}
                    </div>
                  </div>

                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={getFieldClass("email")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  </div>

                  <div className="col-12">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className={getFieldClass("phone")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.phone}
                    </div>
                  </div>

                  <div className="col-12">
                    <textarea
                      name="address"
                      placeholder="Address"
                      rows="3"
                      className={getFieldClass("address")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.address}
                    </div>
                  </div>
                </div>

                {/* Bank Info */}
                <h6 className="mt-4 mb-3">Bank Information</h6>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="bankName"
                      placeholder="Bank Name"
                      className={getFieldClass("bankName")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.bankName}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.bankName}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="accountNumber"
                      placeholder="Account Number"
                      className={getFieldClass("accountNumber")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.accountNumber}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.accountNumber}
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <h6 className="mt-4 mb-3">Card Details</h6>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      className={getFieldClass("cardNumber")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cardNumber}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.cardNumber}
                    </div>
                  </div>

                  <div className="col-6">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      className={getFieldClass("expiryDate")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.expiryDate}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.expiryDate}
                    </div>
                  </div>

                  <div className="col-6">
                    <input
                      type="password"
                      name="cvc"
                      placeholder="CVC"
                      className={getFieldClass("cvc")}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cvc}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.cvc}
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit Payment
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-muted mt-3 small">
            Your payment information is secure and encrypted.
          </p>
        </div>
      </div>
    </div>
  );
}