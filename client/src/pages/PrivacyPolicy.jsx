import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="blog-details-content content-page-section">
      <div className="blog-content container">

        {/* Header */}
        <section className="privacy-header text-center">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p className="mb-0">B3 NET Technologies Pvt Ltd</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-4 py-md-5">
          <div className="container">
            <div className="privacy-content">

              <h3>
                <i className="fa-solid fa-user-shield icon-box"></i>{" "}
                Privacy Statement
              </h3>

              <p>
                B3 NET Technologies Pvt Ltd respects the privacy of its website
                visitors and is committed to protecting personal information.
                We do not request or collect any data related to sensitive
                personal matters, including but not limited to sexual
                orientation, political beliefs, religious affiliations, or
                medical information.
              </p>

              <p>
                If a visitor voluntarily provides personally identifiable
                information and explicitly opts in to allow its use for
                marketing, sales, or prospecting purposes, such information is
                handled with the highest level of confidentiality. This data is
                treated with the same care and discretion as our proprietary
                business information and trade secrets.
              </p>

              <p>
                B3 NET Technologies Pvt Ltd does not sell, rent, exchange, or
                disclose any personally identifiable information to third
                parties for monetary gain or for marketing purposes.
              </p>

              <h3>
                <i className="fa-solid fa-lock icon-box"></i>{" "}
                Security Precautions
              </h3>

              <p>
                We take reasonable and appropriate measures to safeguard our
                network and any data collected through our website. Information
                stored on our servers is considered proprietary and
                confidential and is not accessible to the public.
              </p>

              <p>
                B3 NET Technologies Pvt Ltd enforces strict internal security
                policies to ensure the confidentiality of customer and business
                data. Access to such information is limited strictly to
                authorized personnel who require it to effectively perform
                their job responsibilities.
              </p>

              <h3>
                <i className="fa-solid fa-cookie-bite icon-box"></i>{" "}
                Cookies
              </h3>

              <p>
                This website uses cookies to enhance user experience. Cookies
                are small data files stored on a visitor’s device that help us
                understand site usage and recognize returning visitors.
              </p>

              <p>
                Cookies allow us to streamline user interactions, such as
                reducing the need to repeatedly enter login information, and
                help us analyze user preferences to improve website
                performance. The use of cookies is not linked to any personally
                identifiable information on this site.
              </p>

            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
