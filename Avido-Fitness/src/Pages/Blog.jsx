import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Blog4 from "../assets/blog4.png";
import Blog5 from "../assets/blog5.png";
import Blog6 from "../assets/blog6.jpg";
import Blog7 from "../assets/blog7.png";
import Blog8 from "../assets/blog8.png";
import Blog9 from "../assets/blog9.png";

function Blog() {
  return (
    <>
      <div className="main text-light px-5">
        {/* blog-banner start */}
        <div className="container-fluid">
          <div className="row p-5">
            <div className="blog-banner text-center">
              <ul className="blog-banner-text d-flex justify-content-center my-2">
                <li className="blog-banner-list me-2">
                  <Link className="blog-banner-name text-secondary" to="/">
                    Home
                  </Link>
                </li>
                <li className="blog-banner-list mx-1">
                  <a className="blog-banner-name" href="">
                    /
                  </a>
                </li>
                <li className="blog-banner-list ms-2">
                  <a className="blog-banner-name" href="">
                    Blog
                  </a>
                </li>
              </ul>
              <p className="blog-banner-title ms-5">Our Blog</p>
              <p>
                Want to work with some of the best global talent and build
                software used by all the companies <br /> you know and love?
                Join the team — we’re hiring
              </p>
            </div>
          </div>
        </div>
        {/* blog-banner end */}

        {/* blog section start */}
        <div className="container-fluid py-5 ">
          <p className="blog-title">Training Blogs</p>
          <div className="row">
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%" }}>
                <img src={Blog1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="blog-card-title">
                    Training Secrets of Olympians to Help You Stay Fit
                  </h5>
                  <p className="blog-card-text">
                    These training secrets of Olympians will help you stay fit,
                    from training quality over quantity and effective recovery
                    strategies to the importance of coaching. Use these tips to
                    become the best and most fit version of yourself.
                  </p>
                  <p className="learn-text d-flex align-items-center">
                    <Link to="/blogDetails">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%" }}>
                <img src={Blog2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="blog-card-title">
                    A Woman’s Guide to Gaining Muscle with Weight Training
                  </h5>
                  <p className="blog-card-text">
                    This woman’s guide to gaining muscle begins by explaining
                    key principles and concludes with a sample muscle-building
                    workout. Look no further for everything you need to know
                    about how women can gain muscle.
                  </p>
                  <p className="learn-text d-flex align-items-center">
                    <Link to="/blogDetails">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%" }}>
                <img src={Blog3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="blog-card-title">
                    Sticking to an Exercise Program: 25 Tips to Achieve Exercise
                    Success
                  </h5>
                  <p className="blog-card-text">
                    Sticking to an exercise routine is challenging for just
                    about everyone. The 25 tips and strategies provided are
                    proven effective in improving exercise adherence and
                    building long-term exercise habits...
                  </p>
                  <p className="learn-text d-flex align-items-center">
                    <Link to="/blogDetails">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%" }}>
                <img src={Blog4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="blog-card-title">
                    Training Secrets of Olympians to Help You Stay Fit
                  </h5>
                  <p className="blog-card-text">
                    These training secrets of Olympians will help you stay fit,
                    from training quality over quantity and effective recovery
                    strategies to the importance of coaching. Use these tips to
                    become the best and most fit version of yourself.
                  </p>
                  <p className="learn-text d-flex align-items-center">
                    <Link to="/blogDetails">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%" }}>
                <img src={Blog5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="blog-card-title">
                    A Woman’s Guide to Gaining Muscle with Weight Training
                  </h5>
                  <p className="blog-card-text">
                    This woman’s guide to gaining muscle begins by explaining
                    key principles and concludes with a sample muscle-building
                    workout. Look no further for everything you need to know
                    about how women can gain muscle.
                  </p>
                  <p className="learn-text d-flex align-items-center">
                    <a href="">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%" }}>
                <img src={Blog6} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="blog-card-title">
                    Sticking to an Exercise Program: 25 Tips to Achieve Exercise
                    Success
                  </h5>
                  <p className="blog-card-text">
                    Sticking to an exercise routine is challenging for just
                    about everyone. The 25 tips and strategies provided are
                    proven effective in improving exercise adherence and
                    building long-term exercise habits...
                  </p>
                  <p className="learn-text d-flex align-items-center">
                    <a href="">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%" }}>
                <img src={Blog7} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="blog-card-title">
                    Training Secrets of Olympians to Help You Stay Fit
                  </h5>
                  <p className="blog-card-text">
                    These training secrets of Olympians will help you stay fit,
                    from training quality over quantity and effective recovery
                    strategies to the importance of coaching. Use these tips to
                    become the best and most fit version of yourself.
                  </p>
                  <p className="learn-text d-flex align-items-center">
                    <a href="">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%" }}>
                <img src={Blog8} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="blog-card-title">
                    A Woman’s Guide to Gaining Muscle with Weight Training
                  </h5>
                  <p className="blog-card-text">
                    This woman’s guide to gaining muscle begins by explaining
                    key principles and concludes with a sample muscle-building
                    workout. Look no further for everything you need to know
                    about how women can gain muscle.
                  </p>
                  <p className="learn-text d-flex align-items-center">
                    <a href="">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%" }}>
                <img src={Blog9} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="blog-card-title">
                    Sticking to an Exercise Program: 25 Tips to Achieve Exercise
                    Success
                  </h5>
                  <p className="blog-card-text">
                    Sticking to an exercise routine is challenging for just
                    about everyone. The 25 tips and strategies provided are
                    proven effective in improving exercise adherence and
                    building long-term exercise habits...
                  </p>
                  <p className="learn-text d-flex align-items-center">
                    <a href="">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog section end */}
      </div>
    </>
  );
}

export default Blog;
