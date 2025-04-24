import "../App.css";
import bannerHero from "../assets/bannerHero.jpg";
import PersonalTraining from "../assets/about1.png";
import StrengthTraining from "../assets/about2.png";
import FunctionalTraining from "../assets/about3.png";
import HomeAbout1 from "../assets/home-about-1.png";
import HomeAbout2 from "../assets/home-about-2.png";
import HomeAbout3 from "../assets/home-about-3.png";
import Us1 from "../assets/us1.png";
import Us2 from "../assets/us2.png";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main text-light">
        {/* hero-section start */}
        <div className="container-fluid">
          <div className="row d-flex d-flex justify-content-between align-items-center">
            <div className="banner-img">
              <img className="banner-hero-img" src={bannerHero} alt="" />
            </div>
            <div className="banner-text px-5">
              <p className="banner-title mb-4">
                ACHIEVE PEAK PERFORMANCE WITH EXPERT TRAINING
              </p>
              <p>
                Tailored workouts, nutritional guidance, and motivational
                support – everything you need to excel in your fitness goals.
                Join ou gym today and transform your body and mind with our
                professional trainers. Tailored workouts, nutritional guidance,
                and motivational support – everything you need to excel in your
                fitness goals. Join our gym today and transform your body and
                mind.
              </p>
              <button type="button" className="btn btn1 me-3 my-3 text-light  px-4 py-2" onClick={()=> navigate("/about")}>
                Discover More
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn2 me-3 my-3 text-light px-4 py-2">
                Gallery
              </button>
            </div>
          </div>
        </div>
        {/* hero-section end */}

        {/* about section Start */}
        <div className="container-fluid my-5 px-5">
          <div className="row about">
            <div className="col-8 m-auto text-center about-text">
              <p className="about-sublitle">ABOUT US</p>
              <p className="about-title">
                "More than a gym — we’re your second home for fitness, growth,
                and community."
              </p>
              <p className="about-description mt-2">
                At Avido Fitness, we believe that fitness isn’t just about
                lifting weights or breaking a sweat — it’s about building a
                lifestyle you’re proud of. <br />
                Our journey began with a simple idea: make fitness accessible,
                motivating, and deeply personal for everyone. Whether you're
                just starting out or looking to push past your limits, our team
                is here to guide, challenge, and inspire you every step of the
                way. <br /> Founded by athletes, trainers, and wellness experts
                who were once in your shoes, Avido Fitness was created as a
                safe, empowering space where real transformations happen — not
                just in body, but in mindset and spirit...
                <Link className="learn-text ms-1" to="/about">
                  Learn more
                  <i className="bi bi-chevron-double-right fs-6 ms-1"></i>
                </Link>
              </p>
            </div>
          </div>
          <div className="row about-bgImg text-center px-3 py-5">
            <div className="about-bgText">
              <span>Gallery</span>
              <p>Our Portfolio</p>
            </div>
            <div className="about-img-Group d-flex justify-content-evenly my-3">
              <div className="col-3 about-img-box bg-dark">
                <img className="about-box-img" src={HomeAbout1} alt="" />
              </div>
              <div className="col-3 about-img-box">
                <img className="about-box-img" src={HomeAbout2} alt="" />
              </div>
              <div className="col-3 about-img-box bg-dark">
                <img className="about-box-img" src={HomeAbout3} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* about section end */}

        {/* services section start */}
        <div className="container-fluid my-5 px-5">
          <div className="row service">
            <div className="service-text d-flex d-flex justify-content-between">
              <p className="col-6 service-title mt-4">
                TRANSFORM LIFE WITH OUR ELITE FITNESS{" "}
              </p>
            </div>
          </div>
          <div className="row service-img-group d-flex d-flex justify-content-between align-items-end mx-2 pb-3">
            <div className="col-4 service-img-box">
              <img className="service-img" src={PersonalTraining} alt="" />
              <div className="service-inner-text">
                <h3>Personal Training</h3>
                <p>
                  One-on-one training sessions with certified trainers create
                  customized workout plans to meet individual fitn
                  goalsOne-on-one training sessions with certified trainers.
                </p>
              </div>
            </div>
            <div className="col-4 service-img1-box">
              <img className="service-img" src={StrengthTraining} alt="" />
              <div className="service-inner-text">
                <h3>Strength Training</h3>
                <p>
                  One-on-one training sessions with certified trainers create
                  customized workout plans to meet individual fitn
                  goalsOne-on-one training sessions with certified trainers.
                </p>
              </div>
            </div>
            <div className="col-4 service-img1-box">
              <img className="service-img" src={FunctionalTraining} alt="" />
              <div className="service-inner-text">
                <h3>Functional Training</h3>
                <p>
                  One-on-one training sessions with certified trainers create
                  customized workout plans to meet individual fitn
                  goalsOne-on-one training sessions with certified trainers.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn service-btn1 text-light"
              onClick={() => navigate("/services")}>
              More <i className="bi bi-chevron-double-right ms-1"></i>
            </button>
          </div>
        </div>
        {/* services section end */}

        {/* choose us section start */}
        <div className="container-fluid my-5 px-5">
          <div className="row why-us">
            <p className=" why-us-title mt-4">
              SHAPE YOUR FUTURE COMPREHENSIVE WHETHER FITNESS PLAN
            </p>
          </div>
          <div className="row py-2 px-3 d-flex d-flex justify-content-between align-items-end">
            <div className="col-4 us-img-box pt-3 px-3">
              <div className="why-us-text">
                <div className="row">
                  <div className="col-12 us-text1">
                    <h4 className="us-title">
                      Fitness technology and high-quality
                    </h4>
                    <p>
                      Our gym is equipped with the latest fitness techn
                      high-quality equipment to ensure you have everything you
                      need effective workout. From cardio machines to free
                      weights
                    </p>
                    <p className="learn-text d-flex align-items-center">
                      <Link to="/whyUs">
                        Learn more
                        <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                      </Link>
                    </p>
                  </div>
                  <div className="col-12 us-text1 mt-2">
                    <h4 className="us-title">
                      Our certified personal trainers
                    </h4>
                    <p>
                      Our certified personal trainers are here to guide you ever
                      step of the way. With years of experience and specializ
                      knowledge, they create personalized fitness plans tailored
                    </p>
                    <p className="learn-text d-flex align-items-center">
                      <Link to="/whyUs">
                        Learn more
                        <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                      </Link>
                    </p>
                  </div>
                  <div className="col-12 us-text1 mt-2">
                    <h4 className="us-title">
                      Selection of group fitness classes
                    </h4>
                    <p>
                      Our gym is equipped with the latest fitness techn
                      high-quality equipment to ensure you have everything you
                      need effective workout. From cardio machines to free
                      weights
                    </p>
                    <p className="learn-text d-flex align-items-center">
                      <Link to="/whyUs">
                        Learn more
                        <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 us-img-box">
              <img className="us-img" src={Us1} alt="" />
            </div>
            <div className="col-4 us-img1-box">
              <img className="us-img" src={Us2} alt="" />
            </div>
          </div>
        </div>
        {/* choose us section end */}

        {/* membership section start */}
        <div className="container-fluid my-5 px-5">
          <div className="row membership">
            <div className="membership-text text-center">
              <p className="col-6 membership-title my-4">
                FIND THE PERFECT PLAN <br />
                FOR YOUR FITNESS JOURNEY
              </p>
              <p className="col-11 memebership-description mb-4">
                At our gym, we understand that everyone’s fitness needs and
                schedules are different. That’s why we offer a variety of
                membership plans to suit your lifestyle and help you achieve
                your heal goals. Explore our membership options and find the one
                that's right for you!At our gym, we understand that everyone’s
                fitness needs and schedules are different. That’s why we offer a
                variety of membership plans to suit your lifestyle and help you
                achieve your health goals. Explore our membership options and
                find the one that's right for you!
              </p>
            </div>
          </div>
          <div className="row d-flex d-flex justify-content-between mx-3">
            <div className="col-4 membership-part my-2 py-5">
              <div className="membership-membership-text p-2">
                <p className="membership-membership-title my-3">
                  Basic Membership
                </p>
                <h2 className="membership-price">$30/month</h2>
                <p>Perfect for Beginners and Casual Users</p>
                <ul>
                  <li className="membership-list my-2">
                    Full use of all cardio and strength train equipment
                  </li>
                  <li className="membership-list my-2">
                    Secure locker rooms and shower facilities
                  </li>
                  <li className="membership-list my-2">
                    Access during regular hours of operation
                  </li>
                  <li className="membership-list my-2">
                    assessment with a personal trainer if fitness goals
                  </li>
                  <li className="membership-list my-2">
                    Basic Membership Benefits
                  </li>
                  <li className="membership-list my-2">
                    Bring a friend to the gym once a month for free
                  </li>
                </ul>
                <div className="membership-btn">
                  <button
                    type="button"
                    className="btn member-btn m-2"
                    onClick={() => navigate("/pricing")}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 membership-part my-2 py-5">
              <div className="membership-membership-text p-2">
                <p className="membership-membership-title my-3">
                  Premium Membership
                </p>
                <h2 className="membership-price">$80/month</h2>
                <p>For the Fitness Enthusiast</p>
                <ul>
                  <li className="membership-list my-2">
                    All Standard Membership Benefits
                  </li>
                  <li className="membership-list my-2">
                    4 personal training sessions per certified trainers
                  </li>
                  <li className="membership-list my-2">
                    Monthly sessions with nutritionist to help achieve
                  </li>
                  <li className="membership-list my-2">
                    Early access to class reservations and personal
                  </li>
                  <li className="membership-list my-2">
                    Complimentary access to our sauna steam room
                  </li>
                  <li className="membership-list my-2">
                    Invitations to special member-only
                  </li>
                </ul>
                <div className="membership-btn">
                  <button
                    type="button"
                    className="btn member-btn m-2"
                    onClick={() => navigate("/pricing")}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 membership-part my-2 py-5">
              <div className="membership-membership-text p-2">
                <p className="membership-membership-title my-3">
                  Family Membership
                </p>
                <h2 className="membership-price">$120/month</h2>
                <p>Perfect for Beginners and Casual Users</p>
                <ul>
                  <li className="membership-list my-2">
                    perfect for students with changing schedules
                  </li>
                  <li className="membership-list my-2">
                    Special pricing personal training wellness services
                  </li>
                  <li className="membership-list my-2">
                    Access to low-impact fitness classes seniors
                  </li>
                  <li className="membership-list my-2">
                    Specialized programs focusing on mobility
                  </li>
                  <li className="membership-list my-2">
                    Reduced rates for employees
                  </li>
                  <li className="membership-list my-2">
                    itness classes and wellness workshops
                  </li>
                </ul>
                <div className="membership-btn">
                  <button
                    type="button"
                    className="btn member-btn m-2"
                    onClick={() => navigate("/pricing")}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* membership section end */}

        {/* blog section start */}
        <div className="container-fluid  px-5">
          <div className="row">
            <p className="blog-title">Training Blogs</p>
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%;" }}>
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
                    <Link to="/blog">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 blog-text">
              <div className="card px-2 py-2" style={{ width: "100%;" }}>
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
                    <Link to="/blog">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 blog">
              <div className="card px-2 py-2" style={{ width: "100%;" }}>
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
                    <Link to="/blog">
                      Learn more{" "}
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </Link>
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

export default Home;
