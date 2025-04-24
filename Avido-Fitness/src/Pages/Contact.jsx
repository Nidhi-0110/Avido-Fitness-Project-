import { useState } from "react";
import Follow1 from "../assets/follow1.png";
import Follow2 from "../assets/follow2.png";
import Follow3 from "../assets/follow3.png";
import Follow4 from "../assets/follow4.png";
import Follow5 from "../assets/follow5.png";
import Follow6 from "../assets/follow6.png";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { postContactUser } from "../server";

function Contact() {
  const [formdata, setFormData] = useState({
    userName: "",
    mobile: "",
    email: "",
    message: "",
  });
  const { user, isSignedIn} = useUser();

  // if (!isLoaded) {
  //   return <h1>Lodding...</h1>;
  // }

  function handleChange(e) {
    setFormData((preval) => ({ ...preval, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await postContactUser(formdata);
    setFormData({
      userName: "",
      mobile: "",
      email: "",
      message: "",
    });
    alert("Your replay sent");
  }

  return (
    <>
      <div className="main px-5 text-light">
        {/* contact-banner start */}
        <div className="container-fluid">
          <div className="row p-5">
            <div className="contact-banner text-center p-5">
              <ul className="contact-banner-text d-flex justify-content-center my-2">
                <li className="contact-banner-list mx-2">
                  <Link className="contact-banner-name text-secondary" to="/">
                    Home
                  </Link>
                </li>
                <li className="contact-banner-list mx-1">
                  <a className="contact-banner-name" href="">
                    /
                  </a>
                </li>
                <li className="contact-banner-list mx-2">
                  <a className="contact-banner-name" href="">
                    Contact
                  </a>
                </li>
              </ul>
              <p className="contact-banner-title ms-4">Contact Us</p>
            </div>
          </div>
        </div>
        {/* contact-banner end */}

        {/* contact-details start */}
        <div className="container-fluid my-5">
          <div className="row text-center d-flex justify-content-between">
            <div className="col-4 contact-details bg-dark p-5 border rounded">
              <i className="bi bi-geo-alt-fill fs-3"></i>
              <p className="contact-details-title mt-2">Location</p>
              <p className="contact-details-text mt-0">Lorem, ipsum</p>
            </div>
            <div className="col-4 contact-details bg-dark p-5 border rounded">
              <i className="bi bi-telephone-fill fs-3"></i>
              <p className="contact-details-title mt-2">Call</p>
              <p className="contact-details-text mt-0">+91 8748395482</p>
            </div>
            <div className="col-4 contact-details bg-dark p-5 border rounded">
              <i className="bi bi-envelope fs-3"></i>
              <p className="contact-details-title mt-2">Email</p>
              <p className="contact-details-text mt-0">hello11@gmail.com</p>
            </div>
          </div>
        </div>
        {/* contact-details end */}

        {/* contact-form start */}
        <div className="container-fluid my-5">
          <div className="row contact-form m-auto mt-5">
            <div className="text">
              <p className="contact-form-title">Let's Contact Us</p>
            </div>
            <form action="" className="" onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className=" col-6 User-name">
                  <input
                    type="text"
                    className="form-control p-3 rounded-0"
                    placeholder="userName"
                    aria-label="userName"
                    name="userName"
                    value={isSignedIn ? user.username : formdata.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className=" col-6 Mobile">
                  <input
                    type="text"
                    className="form-control p-3 rounded-0"
                    placeholder="mobile"
                    aria-label="mobile"
                    name="mobile"
                    value={formdata.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="email my-4">
                <input
                  type="email"
                  className="form-control p-3 rounded-0"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={
                    isSignedIn
                      ? user.primaryEmailAddress.emailAddress
                      : formdata.email
                  }
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="description my-4">
                <textarea
                  className="form-control p-3 rounded-0"
                  id="exampleFormControlTextarea1"
                  placeholder="textarea"
                  name="message"
                  value={formdata.message}
                  onChange={handleChange}
                  required
                  rows="9"></textarea>
              </div>
              <button
                type="submit"
                className="btn contact-form-btn text-light px-5 py-3 mb-4 rounded-pill">
                Get's Start
              </button>
            </form>
          </div>
        </div>
        {/* contact-form end */}

        {/* contact-followUs start */}
        <div className="container-fluid p-1">
          <div className="row d-flex justify-content-between my-5">
            <div className="col-4 contact-follow-box bg-dark">
              <img className="follow-img" src={Follow1} alt="" />
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <p className="contact-follow-text">Follow Us</p>
            </div>
            <div className="col-4 contact-follow-box bg-dark">
              <img className="follow-img" src={Follow2} alt="" />
            </div>
            <div className="col-3 contact-follow-box1 bg-dark mt-3">
              <img className="follow-img" src={Follow3} alt="" />
            </div>
            <div className="col-3 contact-follow-box1 bg-dark mt-3">
              <img className="follow-img" src={Follow4} alt="" />
            </div>
            <div className="col-3 contact-follow-box1 bg-dark mt-3">
              <img className="follow-img" src={Follow5} alt="" />
            </div>
            <div className="col-3 contact-follow-box1 bg-dark mt-3">
              <img className="follow-img" src={Follow6} alt="" />
            </div>
          </div>
        </div>
        {/* contact-followUs end */}
      </div>
    </>
  );
}

export default Contact;
