import "../App.css";
import React from "react";
import Aboutimg from "../assets/AboutImage.png";
import AboutMision from "../assets/AboutMision.png";
import AboutVision from "../assets/AboutVision.png";
import AboutRelated1 from "../assets/aboutRelated1.png";
import AboutRelated2 from "../assets/aboutRelated2.png";
import AboutRelated3 from "../assets/aboutRelated3.png";
import AboutRelated4 from "../assets/aboutRelated4.png";
import AboutRelated5 from "../assets/aboutRelated5.png";
import AboutRelated6 from "../assets/aboutRelated6.png";
import AboutRelated7 from "../assets/aboutRelated7.png";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="main text-light">
      {/* about Us-banner start */}
      <div className="container-fluid px-5">
        <div className="row p-5">
          <div className="aboutUs-banner text-center">
            <ul className="aboutUs-banner-text d-flex justify-content-center my-2">
              <li className="aboutUs-banner-list mx-2">
                <Link className="aboutUs-banner-name text-secondary" to="/">
                  Home
                </Link>
              </li>
              <li className="aboutUs-banner-list mx-1">
                <a className="aboutUs-banner-name" href="">
                  /
                </a>
              </li>
              <li className="aboutUs-banner-list mx-2">
                <a className="aboutUs-banner-name" href="">
                  About Us
                </a>
              </li>
            </ul>
            <p className="aboutUs-banner-title">
              Unleash Your Potential – <br /> Train with the Best
            </p>
          </div>
        </div>
      </div>
      {/* about Us-banner end */}

      {/* about Us-stroy start*/}
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-7 m-auto text-center">
            <p className="aboutUs-story-title">Our story</p>
            <p className="aboutUs-story-description">
              “We Don't Just Train Bodies — We Fuel Ambition.” <br /> At Avido
              Fitness, we believe that fitness isn't just about lifting weights
              or breaking a sweat — it's about building a lifestyle that
              empowers you inside and out. Every rep, every drop of sweat, every
              moment of challenge brings you closer to the strongest version of
              yourself — not just physically, but mentally and emotionally.
              <br /> Our journey began with a simple mission: make fitness
              accessible, motivating, and deeply personal for everyone. Whether
              you're stepping into a gym for the first time or you're an
              experienced athlete aiming to level up, our expert team is here to
              guide, challenge, and uplift you at every stage. <br /> Avido was
              built by athletes, trainers, and wellness leaders who know the
              power of transformation. We've been where you are — uncertain,
              driven, ready for change — and we created this space to be the
              launchpad for your evolution. It’s more than a gym. <br /> It's a
              place where goals are realized, self-doubt is conquered, and
              limits are shattered. Inside our walls, you’ll find more than
              equipment — you’ll find a community that lifts you up, motivates
              you daily, and celebrates every victory with you. From world-class
              trainers to customized programs, we personalize your fitness
              journey to suit your goals, your pace, your life. <br /> Whether
              you're here to lose weight, gain muscle, boost your confidence, or
              just feel better day to day, you’ll find everything you need at
              Avido — state-of-the-art facilities, dedicated professionals, and
              a culture of relentless support. We’ve helped thousands reclaim
              their health, rediscover their strength, and redefine what’s
              possible. Now it’s your turn. Because at Avido, fitness isn’t the
              end goal — it’s the beginning of everything.
            </p>
          </div>
        </div>
      </div>
      {/* about Us-stroy end */}

      {/* about Us-vision-Mission start */}
      <div className="container-fluid px-5 my-5">
        <div className="row px-3 d-flex justify-content-between align-items-center">
          <div className="col-6 aboutUs-vision-Mission bg-dark">
            <div className="aboutUs-vision-text m-auto p-3 my-4">
              <p className="aboutUs-vision-Mission-title">Vision</p>
              <p className="aboutUs-vision-Mission-description">
                At Avido Fitness, our vision is to redefine what fitness means
                for every individual — creating a world where health,
                confidence, and strength are accessible to all. We strive to
                empower people of all backgrounds and fitness levels to live
                healthier, more fulfilling lives — not just through physical
                transformation, but by nurturing a strong, motivated, and
                resilient mindset. We envision a global fitness community where
                every individual feels seen, supported, and unstoppable.
              </p>
            </div>
          </div>
          <div className="col-6 aboutUs-vision-Mission-box">
            <img
              className="aboutUs-vision-Mission-box-img"
              src={AboutVision}
              alt=""
            />
          </div>
        </div>
        <div className="row px-3 mt-5 d-flex justify-content-between align-items-center">
          <div className="col-6 aboutUs-vision-Mission-box">
            <img
              className="aboutUs-vision-Mission-box-img"
              src={AboutMision}
              alt=""
            />
          </div>
          <div className="col-6  aboutUs-vision-Mission bg-dark">
            <div className="aboutUs-vision-text m-auto p-2 my-2">
              <p className="aboutUs-vision-Mission-title">Mission</p>
              <p className="aboutUs-vision-Mission-description">
                To inspire and equip individuals to become the strongest version
                of themselves:- physically, mentally, and emotionally. We do
                this by:
                <ul>
                  <li>
                    Offering personalized, science-based fitness programs guided
                    by elite trainers
                  </li>
                  <li>
                    Fostering a safe, inclusive, and motivating environment
                  </li>
                  <li>
                    Building a tight-knit community where support and
                    accountability thrive
                  </li>
                  <li>
                    Promoting holistic wellness through training, nutrition, and
                    mindset coaching
                  </li>
                  <li>
                    Helping members unlock their full potential and fuel their
                    ambition every step of the way
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* about Us-vision-Mission end */}

      {/* about Us project start */}
      <div className="container-fluid px-5 py-5 my-5">
        <div className="row aboutUs-project">
          <div className="aboutUs-project-box px-3">
            <img className="aboutUs-project-img" src={Aboutimg} alt="" />
          </div>
          <div className=" row aboutUs-project-text-box d-flex justify-content-between m-auto text-center">
            <div className="col-4 aboutUs-project-text py-3">
              <div className="aboutUs-project-text-text border-end border-2 border-danger">
                <p className="fs-3 mt-2 m-0">
                  10 <i className="bi bi-plus"></i>
                </p>
                <p>Trainers</p>
              </div>
            </div>
            <div className="col-4 aboutUs-project-text py-3 ">
              <div className="aboutUs-project-text-text border-end border-2 border-danger">
                <p className="fs-3 mt-2 m-0">
                  200<i className="bi bi-plus"></i>
                </p>
                <p>Members</p>
              </div>
            </div>
            <div className="col-4 aboutUs-project-text py-3">
              <p className="fs-3 mt-2 m-0">
                8 <i className="bi bi-plus"></i>
              </p>
              <p>years</p>
            </div>
          </div>
        </div>
      </div>
      {/* about Us project end */}

      {/* about-Us Related-img start */}
      <div className="container-fluid px-5 pb-5">
        <div className="row aboutUs-related px-3 d-flex justify-content-between">
          <p className="aboutUs-related-title">Related...</p>
          <div className="col-4 aboutUs-related-box bg-dark">
            <img className="aboutUs-related-img" src={AboutRelated1} alt="" />
          </div>
          <div className="col-4 aboutUs-related-box bg-dark">
            <img className="aboutUs-related-img" src={AboutRelated2} alt="" />
          </div>
          <div className="col-4 aboutUs-related-box bg-dark">
            <img className="aboutUs-related-img" src={AboutRelated3} alt="" />
          </div>
          <div className="col-3 aboutUs-related-box1 bg-dark my-5">
            <img className="aboutUs-related-img" src={AboutRelated4} alt="" />
          </div>
          <div className="col-3 aboutUs-related-box1 bg-dark my-5">
            <img className="aboutUs-related-img" src={AboutRelated5} alt="" />
          </div>
          <div className="col-3 aboutUs-related-box1 bg-dark my-5">
            <img className="aboutUs-related-img" src={AboutRelated6} alt="" />
          </div>
          <div className="col-3 aboutUs-related-box1 bg-dark my-5">
            <img className="aboutUs-related-img" src={AboutRelated7} alt="" />
          </div>
        </div>
      </div>
      {/* about-Us Related-img end */}

      {/* about-Us reviews start */}
      <div className="container-fluid px-5 pb-5">
        <div className="row">
          <div className="col-12 aboutUs-review p-5">
            <div className="row m-auto d-flex justify-content-evenly ">
              <p className="about-review-title">Lorem ipsum dolor sit amet</p>
              <div className="col-3  aboutUs-reviews bg-dark p-4">
                <div className="aboutUs-title d-flex justify-content-between my-2 px-2">
                  <p>Lorem Ipsum</p>
                  <i className="bi bi-chat-right-dots fs-4 mt-2"></i>
                </div>
                <i className="bi bi-quote fs-1 mx-1"></i>
                <p className="aboutUs-reviews-text px-3 my-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="aboutUs-profile d-flex align-items-center px-2 my-3">
                  <div className="aboutUs-profile-box bg-light me-3"></div>
                  <p>lorem</p>
                </div>
              </div>

              <div className="col-3  aboutUs-reviews bg-dark p-4">
                <div className="aboutUs-title d-flex justify-content-between my-2 px-2">
                  <p>Lorem Ipsum</p>
                  <i className="bi bi-chat-right-dots fs-4 mt-2"></i>
                </div>
                <i className="bi bi-quote fs-1 mx-1"></i>
                <p className="aboutUs-reviews-text px-3 my-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="aboutUs-profile d-flex align-items-center px-2 my-3">
                  <div className="aboutUs-profile-box bg-light me-3"></div>
                  <p>lorem</p>
                </div>
              </div>

              <div className="col-3  aboutUs-reviews bg-dark p-4">
                <div className="aboutUs-title d-flex justify-content-between my-2 px-2">
                  <p>Lorem Ipsum</p>
                  <i className="bi bi-chat-right-dots fs-4 mt-2"></i>
                </div>
                <i className="bi bi-quote fs-1 mx-1"></i>
                <p className="aboutUs-reviews-text px-3 my-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="aboutUs-profile d-flex align-items-center px-2 my-3">
                  <div className="aboutUs-profile-box bg-light me-3"></div>
                  <p>lorem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about-Us reviews end */}
    </div>
  );
}

export default AboutUs;
