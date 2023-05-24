import React from "react";

const ContactSection = () => {
  return (
    <div class="contact container">
      <div className="row no-gutters">
        <div className="col-md-7">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <h2 className="mb-4">Contact Us</h2>
            <div id="form-message-warning" className="mb-4"></div>

            <form
              method="POST"
              id="contactForm"
              name="contactForm"
              className="contactForm"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" for="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" for="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" for="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" for="#">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="form-group"
                    style={{
                      marginTop: "30px",
                    }}
                  >
                    <input
                      type="button"
                      value="Send Message"
                      className="btn btn-dark"
                      style={{ background: "black", borderColor: "black" }}
                    />
                    <div className="submitting"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5 ">
          <h2 style={{ paddingRight: "100px", marginTop: "45px" }}>
            Let's talk about everything.
          </h2>
          <p style={{ paddingRight: "100px", marginTop: "20px" }}>
            Contact us today to learn more about our services and how we can
            help your business thrive. Let's work together to achieve your goals
            and take your organization to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
