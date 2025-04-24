import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
function Footer() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [email, setEmail] = useState("");
  if (!isLoaded) {
    return <h1>Loading.....</h1>;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await emailjs.send(
      "service_nidhipatel",
      "template_twcp7qp",
      {
        to_email: user.primaryEmailAddress.emailAddress || email,
        message: "Thank You for Subscribe",
      },
      "EATMR3PxP-hNG1gK4"
    );
    alert("Thank You  for Subscribe");
  }
  return (
    <>
      <div className="main">
        <div className="container-fluid bg-dark">
          <div className="row footer mx-2 p-5">
            <div className="col-5 p-2">
              <p className="footer-title">
                Stay in the loop with our newsletter!
              </p>
              <div className="footer-text">
                <p className="footer-subscribe my-1">
                  Subscribe to our news and case studies
                </p>
                <form
                  action=""
                  className="footer-input mb-2"
                  onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="form-control footer-input-text text-dark"
                    placeholder="Enter Email Address"
                    value={
                      isSignedIn ? user.primaryEmailAddress.emailAddress : email
                    }
                    onChange={(e) => setEmail(e.target.value)}
                    id="inputEmail4"
                  />
                  <a href="">
                    <button className="btn" type="submit">
                      {" "}
                      <i className="bi bi-arrow-up-right-square right-arrow text-dark fs-4"></i>
                    </button>
                  </a>
                </form>
                <p>
                  Subscribe to our newsletter and unlock a world of exclusive
                  benefits. Be the first to know about our latest products,
                  special promotions, and exciting updates. Join our community
                  of like-minded individuals who share a passion for Flexi
                  Fitness and Gym
                </p>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-2 pt-2">
              <h4 className="footer-list-title">Product</h4>
              <ul className="footer-list">
                <li className="footer-list-name m-2">
                  <a className="footer-list-text" href="">
                    Employee database
                  </a>
                </li>
                <li className="footer-list-name m-2">
                  <a className="footer-list-text" href="">
                    Payroll
                  </a>
                </li>
                <li className="footer-list-name m-2">
                  <a className="footer-list-text" href="">
                    Absences
                  </a>
                </li>
                <li className="footer-list-name m-2">
                  <a className="footer-list-text" href="">
                    Time tracking
                  </a>
                </li>
                <li className="footer-list-name m-2">
                  <a className="footer-list-text" href="">
                    Shift planner
                  </a>
                </li>
                <li className="footer-list-name m-2">
                  <a className="footer-list-text" href="">
                    Recruiting
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-2 pt-2">
              <h4 className="footer-list-title"> Information</h4>
              <ul className="footer-list">
                <li className="footer-list-name m-2">
                  <Link className="footer-list-text" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li className="footer-list-name m-2">
                  <Link className="footer-list-text" to="blog">
                    Blog
                  </Link>
                </li>
                <li className="footer-list-name m-2">
                  <Link className="footer-list-text" to="whyUs">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2 pt-2">
              <h4 className="footer-list-title"> Company</h4>
              <ul className="footer-list">
                <li className="footer-list-name m-2">
                  <Link className="footer-list-text" to="/about">
                    About us
                  </Link>
                </li>
                <li className="footer-list-name m-2">
                  <a className="footer-list-text" href="">
                    Careers
                  </a>
                </li>
                <li className="footer-list-name m-2">
                  <Link className="footer-list-text" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="footer-list-name m-2">
                  <a className="footer-list-text" href="">
                    Lift Media
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="line" />
          <div className="row px-5">
            <div className="col-12">
              <div className="footer-link d-flex justify-content-between">
                <p className="footer-link-title text-light ms-2">
                  © 2045 All rights reserved By Enative
                </p>
                <ul className="d-flex footer-list">
                  <li>
                    <Link className="footer-list-text mx-2" to="/terms&Conditions">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-list-text mx-2" to="/privacyPolicy">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <a className="footer-list-text mx-2" href="">
                      Cookies
                    </a>
                  </li>
                </ul>
                <ul className="footer-icon-list d-flex me-2">
                  <li>
                    <i className="bi bi-facebook fs-5 icon text-light  m-2"></i>
                  </li>
                  <li>
                    <i className="bi bi-twitter fs-5 icon text-light m-2"></i>
                  </li>
                  <li>
                    <i className="bi bi-youtube fs-5 icon text-light m-2"></i>
                  </li>
                  <li>
                    <i className="bi bi-instagram fs-5 icon text-light m-2"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
