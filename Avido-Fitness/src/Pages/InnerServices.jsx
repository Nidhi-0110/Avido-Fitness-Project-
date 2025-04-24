import React from "react";
import { Link } from "react-router-dom";
import RelatedImg1 from "../assets/relatedImg1.jpg";
import RelatedImg2 from "../assets/relatedImg2.png";
import RelatedImg3 from "../assets/relatedImg3.png";
import InnerServices1 from "../assets/inner-services1.png";
import InnerServices2 from "../assets/inner-services2.png";
import InnerServices3 from "../assets/inner-services3.png";

function InnerServices() {
  return (
    <>
      <div className="main px-5 text-light">
        {/* inner-Services-banner start */}
        <div className="container-fluid">
          <div className="row p-5">
            <div className="inner-Services-banner text-center p-4">
              <ul className="inner-Services-banner-text d-flex justify-content-center my-2">
                <li className="inner-Services-banner-list mx-2">
                  <Link
                    className="inner-Services-banner-name text-secondary"
                    to="/services">
                    Services
                  </Link>
                </li>
                <li className="inner-Services-banner-list mx-1">
                  <a className="inner-Services-banner-name" href="">
                    /
                  </a>
                </li>
                <li className="inner-Services-banner-list mx-2">
                  <a className="inner-Services-banner-name" href="">
                    Inner-Services
                  </a>
                </li>
              </ul>
              <p className="inner-Services-banner-title">
                Train Smarter, Get Stronger <br /> Personalized Fitness
                Solutions!
              </p>
            </div>
          </div>
        </div>
        {/* inner-Services-banner end */}

        {/* inner-Services-service start */}
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-8">
              <div className="row pe-4">
                <div className="col-12 mt-3">
                  <img
                    className="inner-services-service-img mb-2"
                    src={InnerServices1}
                    alt=""
                  />
                  <div className="inner-services-service-text p-2">
                    <p className="inner-services-service-title1">
                      Essential Equipment for Effective Individual Workouts
                    </p>
                    <p className="inner-services-service-description">
                      Engaging in individual workouts requires the right
                      equipment to ensure efficiency, safety, and effectiveness
                      in achieving fitness goals. Whether working out at home,
                      in a gym, or outdoors, having suitable tools can enhance
                      strength, endurance, flexibility, and overall physical
                      health. Below is a detailed breakdown of essential workout
                      equipment categorized based on different fitness needs,
                      including their benefits, uses, and key features.
                    </p>
                    <ul className="inner-services-service-list">
                      <li className="inner-services-service-list-text my-2">
                        {" "}
                        <i className="bi bi-arrow-right-circle-fill text-light fs-5 icon-right me-3"></i>{" "}
                        Strength Training Equipment
                      </li>
                      <li className="inner-services-service-list-text my-2">
                        {" "}
                        <i className="bi bi-arrow-right-circle-fill text-light fs-5 icon-right me-3"></i>{" "}
                        Cardiovascular Fitness Equipment
                      </li>
                      <li className="inner-services-service-list-text my-2">
                        {" "}
                        <i className="bi bi-arrow-right-circle-fill text-light fs-5 icon-right me-3"></i>{" "}
                        Flexibility & Recovery Equipment
                      </li>
                      <li className="inner-services-service-list-text my-2">
                        {" "}
                        <i className="bi bi-arrow-right-circle-fill text-light fs-5 icon-right me-3"></i>{" "}
                        Smart Fitness Technology & Accessories
                      </li>
                      <li className="inner-services-service-list-text my-2">
                        {" "}
                        <i className="bi bi-arrow-right-circle-fill text-light fs-5 icon-right me-3"></i>{" "}
                        Functional & High-Intensity Training Equipment
                      </li>
                    </ul>
                    <p className="inner-services-service-description">
                      Having the right workout equipment plays a significant
                      role in maintaining a consistent and effective fitness
                      routine. Whether aiming for strength building,
                      cardiovascular endurance, flexibility, or overall
                      well-being, selecting appropriate tools ensures progress
                      and keeps workouts engaging. Investing in quality fitness
                      equipment tailored to individual goals will enhance
                      performance and contribute to long-term health benefits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-between pe-4 mt-4">
                <div className="col-6 inner-Services-service-box ps-2">
                  <img
                    className="inner-services-service-img1"
                    src={InnerServices3}
                    alt=""
                  />
                </div>
                <div className="col-6 inner-Services-service-box pe-2">
                  <img
                    className="inner-services-service-img1"
                    src={InnerServices2}
                    alt=""
                  />
                </div>
                <p className="inner-services-service-description mt-2">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
              </div>
              <div className="row d-flex justify-content-between mt-3 pe-4">
                <div className="col-4">
                  <div className="inner-services-service-box2 bg-dark">
                    <img
                      className="inner-services-service-img2"
                      src={RelatedImg1}
                      alt=""
                    />
                  </div>
                  <p className="inner-services-service-title1 my-3">
                    Must-Have Equipment for Effective Solo Workouts
                  </p>
                  <p className="inner-services-service-description">
                    Whether you're building a home gym or taking your fitness
                    routine on the go, the right gear can make all the
                    difference. Discover the essential equipment—from resistance
                    bands to adjustable dumbbells—that can help you maximize
                    results, stay motivated, and achieve your fitness goals
                    during individual workouts.
                  </p>
                </div>
                <div className="col-4">
                  <div className="inner-services-service-box2 bg-dark">
                    <img
                      className="inner-services-service-img2"
                      src={RelatedImg2}
                      alt=""
                    />
                  </div>
                  <p className="inner-services-service-title1 my-3">
                    Smart Fitness Gadgets That Level Up Your Solo Workout
                    Sessions
                  </p>
                  <p className="inner-services-service-description">
                    Uncover how technology is revolutionizing individual
                    workouts. This post dives into smartwatches, fitness
                    trackers, connected weights, and fitness apps that track
                    progress, guide routines, and keep you motivated during your
                    personal fitness journey.
                  </p>
                </div>
                <div className="col-4">
                  <div className="inner-services-service-box2 bg-dark">
                    <img
                      className="inner-services-service-img2"
                      src={RelatedImg3}
                      alt=""
                    />
                  </div>
                  <p className="inner-services-service-title1 my-3">
                    Portable Workout Gear That Packs a Punch: Fitness on the
                    Go...
                  </p>
                  <p className="inner-services-service-description">
                    For those who train while traveling or prefer working out
                    outdoors, discover compact and travel-friendly workout
                    equipment. Learn how tools like suspension trainers, jump
                    ropes, and resistance loops can keep your fitness goals on
                    track, anywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row bg-dark text-light my-3">
                <div className="col-12 p-2">
                  <p className="other-services-title mt-2 px-2">
                    Special Services...
                  </p>
                </div>
                <div className="row my-3 p-2">
                  <div className="col-8">
                    <div className="text px-2">
                      <p className="other-services-text-title">
                        Yoga & Mindfulness Classes
                      </p>
                      <p className="other-services-text-description">
                        Enhance your flexibility, strength, and inner peace
                        through guided yoga and meditation sessions. Perfect for
                        stress relief, balance, and overall wellness.
                      </p>
                      <p className="learn-text d-flex align-items-center">
                        <a href="">
                          Learn more
                          <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 other-services-text-box bg-light">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="row my-3 p-2">
                  <div className="col-8">
                    <div className="text px-2">
                      <p className="other-services-text-title">
                        HIIT & Bootcamp Programs
                      </p>
                      <p className="other-services-text-description">
                        High-Intensity Interval Training and bootcamp workouts
                        designed to push your limits and torch calories. Ideal
                        for those looking to build endurance and lose fat fast.
                      </p>
                      <p className="learn-text d-flex align-items-center">
                        <a href="">
                          Learn more
                          <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 other-services-text-box bg-light">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="row my-3 p-2">
                  <div className="col-8">
                    <div className="text px-2">
                      <p className="other-services-text-title">
                        Strength & Conditioning
                      </p>
                      <p className="other-services-text-description">
                        Build lean muscle, improve performance, and boost
                        metabolism with structured weightlifting and strength
                        programs, suitable for all experience levels.
                      </p>
                      <p className="learn-text d-flex align-items-center">
                        <a href="">
                          Learn more
                          <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 other-services-text-box bg-light">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="row my-3 p-2">
                  <div className="col-8">
                    <div className="text px-2">
                      <p className="other-services-text-title">
                        Body Composition Analysis
                      </p>
                      <p className="other-services-text-description">
                        Track your progress with in-depth body assessments,
                        including fat percentage, muscle mass, and metabolic
                        rate. Get a clear picture of your transformation
                        journey.
                      </p>
                      <p className="learn-text d-flex align-items-center">
                        <a href="">
                          Learn more
                          <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 other-services-text-box bg-light">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="row my-3 p-2">
                  <div className="col-8">
                    <div className="text px-2">
                      <p className="other-services-text-title">
                        {" "}
                        Nutritional Coaching
                      </p>
                      <p className="other-services-text-description">
                        Fuel your body right with customized meal plans and
                        nutrition advice from certified experts. Learn how to
                        eat for energy, recovery, and long-term health.
                      </p>
                      <p className="learn-text d-flex align-items-center">
                        <a href="">
                          Learn more
                          <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 other-services-text-box bg-light">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="row my-3 p-2">
                  <div className="col-8">
                    <div className="text px-2">
                      <p className="other-services-text-title">
                        {" "}
                        Transformation Challenges
                      </p>
                      <p className="other-services-text-description">
                        Join our 4, 6, or 12-week fitness challenges designed to
                        kickstart your journey and keep you motivated. Includes
                        group support, progress tracking, and prizes!
                      </p>
                      <p className="learn-text d-flex align-items-center">
                        <a href="">
                          Learn more
                          <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 other-services-text-box bg-light">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="row my-3 p-2">
                  <div className="col-8">
                    <div className="text px-2">
                      <p className="other-services-text-title">
                        Prenatal & Postnatal Fitness
                      </p>
                      <p className="other-services-text-description">
                        Specially designed workouts to support moms before and
                        after pregnancy, focusing on mobility, strength, and
                        core recovery.
                      </p>
                      <p className="learn-text d-flex align-items-center">
                        <a href="">
                          Learn more
                          <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 other-services-text-box bg-light">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* inner-Services-service  end */}

        {/* inner-Services-otherRelatedService  start */}
        <div className="container-fluid">
          <div className="row">
            <p className="inner-services-otherRelated-service">
              Related Other Services
            </p>
            <div className="col-4 mb-4">
              <div className="inner-services-otherRelated-service-box bg-dark">
                <img
                  className="inner-services-otherRelated-service-img"
                  src=""
                  alt=""
                />
              </div>
              <div className="inner-services-otherRelated-service-text">
                <p className="inner-services-otherRelated-service-title my-2">
                  Nutrition Coaching
                </p>
                <p className="inner-services-otherRelated-service-description">
                  Fuel your fitness journey with expert guidance. Our nutrition
                  coaches provide personalized meal plans, ongoing support, and
                  practical advice to help you build sustainable habits and
                  achieve your health goals.
                </p>
                <p className="learn-text">
                  <a href="">
                   Learn More
                    <i className="bi bi-chevron-double-right ms-1"></i>{" "}
                  </a>
                </p>{" "}
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="inner-services-otherRelated-service-box bg-dark">
                <img
                  className="inner-services-otherRelated-service-img"
                  src=""
                  alt=""
                />
              </div>
              <div className="inner-services-otherRelated-service-text">
                <p className="inner-services-otherRelated-service-title my-2">
                  Wellness & Recovery
                </p>
                <p className="inner-services-otherRelated-service-description">
                  Enhance your performance and recovery with our wellness
                  services. Enjoy massage therapy, guided meditation, and
                  recovery tools designed to reduce stress, prevent injuries,
                  and keep your body in top shape.
                </p>
                <p className="learn-text">
                  <a href="">
                   Learn More
                    <i className="bi bi-chevron-double-right ms-1"></i>{" "}
                  </a>
                </p>{" "}
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="inner-services-otherRelated-service-box bg-dark">
                <img
                  className="inner-services-otherRelated-service-img"
                  src=""
                  alt=""
                />
              </div>
              <div className="inner-services-otherRelated-service-text">
                <p className="inner-services-otherRelated-service-title my-2">
                  Group Fitness Classes
                </p>
                <p className="inner-services-otherRelated-service-description">
                  Join the energy of the group and stay motivated with our wide
                  range of classes including HIIT, yoga, Zumba, strength
                  training, and more. All fitness levels are welcome, and every
                  class is led by experienced instructors.
                </p>
                <p className="learn-text">
                  <a href="">
                   Learn More
                    <i className="bi bi-chevron-double-right ms-1"></i>{" "}
                  </a>
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* inner-Services-otherRelatedService end */}
      </div>
    </>
  );
}

export default InnerServices;
