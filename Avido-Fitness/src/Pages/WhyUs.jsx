import React from "react";
import { Link } from "react-router-dom";
import WhyUsImg from "../assets/whyUsimg.png";
import WhyUsSection1 from "../assets/whyUs-section-1.png";
import WhyUsSection2 from "../assets/whyUs-section-2.png";
import WhyUsSection3 from "../assets/whyUs-section-3.png";
import WhyUsSection4 from "../assets/whyUs-section-4.png";
import WhyUsSection5 from "../assets/whyUs-section-5.png";
import WhyUsSection6 from "../assets/whyUs-section-6.png";

function WhyUs() {
  return (
    <>
      <div className="main text-light px-5">
        {/* whyUs banner start */}
        <div className="container-fluid">
          <div className="row p-5">
            <div className="whyUs-banner text-center">
              <ul className="whyUs-banner-text d-flex justify-content-center my-2">
                <li className="whyUs-banner-list me-2">
                  <Link className="whyUs-banner-name text-secondary" to="/">
                    Home
                  </Link>
                </li>
                <li className="whyUs-banner-list mx-1">
                  <a className="whyUs-banner-name" href="">
                    /
                  </a>
                </li>
                <li className="whyUs-banner-list ms-2">
                  <a className="whyUs-banner-name" href="">
                    Why Us
                  </a>
                </li>
              </ul>
              <p className="whyUs-banner-title ms-5">
                Transform Your Body, <br />
                Shape Your Future
              </p>
              <p>
                State-of-the-art equipment, expert trainers, and a community
                that supports your fitness journey.
              </p>
            </div>
          </div>
        </div>
        {/* whyUs banner end */}

        {/* whyUs story start */}
        <div className="container-fluid my-5">
          <div className="row">
            <p className="whyUs-story-title">Why Train With Us?</p>
            <div className="col-4">
              <div className="whyUs-story-text p-4 bg-dark">
                <p className="whyUs-story-text-title px-2">Fitness goals</p>
                <p className="whyUs-story-text-description px-2">
                  Achieve your personal best with tailored workouts designed to
                  help you build strength, endurance, and confidence. Whether
                  you aim to lose weight, gain muscle, or boost overall health,
                  we’re here to support your journey every step of the way.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="whyUs-story-text p-4 bg-dark">
                <p className="whyUs-story-text-title px-2">Dedicated team</p>
                <p className="whyUs-story-text-description px-2">
                  Our dedicated team of fitness experts is committed to guiding,
                  motivating, and supporting you every step of the way. With
                  personalized training and expert knowledge, we help you
                  achieve your goals efficiently and safely.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="whyUs-story-text p-4 bg-dark">
                <p className="whyUs-story-text-title px-2">Winning strategy</p>
                <p className="whyUs-story-text-description px-2">
                  Our winning fitness strategy combines expert coaching,
                  science-backed training, and personalized plans to help you
                  achieve lasting results. Train smarter, push further, and
                  reach your goals with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* whyUs story end */}

        {/* whyUs advantages start */}
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-6 whyUs-advantages-box bg-dark">
              <img className="whyUs-advantages-img" src={WhyUsImg} alt="" />
            </div>
            <div className="col-6 whyUs-advantages px-5 py-5">
              <p className="whyUs-advantages-title">
                Advantages of choosing us
              </p>
              <div className="ads d-flex">
                <div className="ads-box me-2 bg-dark rounded-1 px-2 py-1">
                  01
                </div>
                <div className="ads-text">
                  <p className="ads-text-title mb-0">Expertise</p>
                  <p className="ads-text-description">
                    Our fitness expertise blends years of experience, proven
                    techniques, and personalized guidance to help you train
                    effectively and safely. Trust our professionals to take your
                    fitness to the next level.
                  </p>
                </div>
              </div>
              <div className="ads d-flex my-2">
                <div className="ads-box me-2 bg-dark rounded-1 px-2 py-1 ">
                  02
                </div>
                <div className="ads-text">
                  <p className="ads-text-title mb-0">Personalized Approach</p>
                  <p className="ads-text-description">
                    Our fitness expertise blends years of experience, proven
                    techniques, and personalized guidance to help you train
                    effectively and safely. Trust our professionals to take your
                    fitness to the next level.
                  </p>
                </div>
              </div>
              <div className="ads d-flex my-2">
                <div className="ads-box me-2 bg-dark rounded-1 px-2 py-1">
                  03
                </div>
                <div className="ads-text">
                  <p className="ads-text-title mb-0">Motivation and Support</p>
                  <p className="ads-text-description">
                    Our fitness expertise blends years of experience, proven
                    techniques, and personalized guidance to help you train
                    effectively and safely. Trust our professionals to take your
                    fitness to the next level.
                  </p>
                </div>
              </div>
              <div className="ads d-flex">
                <div className="ads-box me-2 bg-dark rounded-1 px-2 py-1">
                  04
                </div>
                <div className="ads-text">
                  <p className="ads-text-title mb-0">Goal Achievement</p>
                  <p className="ads-text-description">
                    Our fitness expertise blends years of experience, proven
                    techniques, and personalized guidance to help you train
                    effectively and safely. Trust our professionals to take your
                    fitness to the next level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* whyUs advantages end */}

        {/* whyUs section start */}
        <div className="container-fluid mt-5">
          <div className="row whyUs-section d-flex justify-content-between ">
            <p className="whyUs-section-title my-4">Why We’re the Right Fit for You !!</p>
            <div className="col-4">
              <div className="whyUs-section-box bg-dark">
                <img className="whyUs-section-img" src={WhyUsSection1} alt="" />
              </div>
              <p className="whyUs-section-text-title mt-3"> Expert Trainers </p>
              <p className="whyUs-section-text-description">
                Our certified and passionate fitness coaches are dedicated to
                helping you achieve your goals safely and effectively—whether
                you're a beginner or an experienced athlete.
              </p>
            </div>
            <div className="col-4">
              <div className="whyUs-section-box bg-dark">
                <img className="whyUs-section-img" src={WhyUsSection2} alt="" />
              </div>
              <p className="whyUs-section-text-title mt-3"> Personalized Programs </p>
              <p className="whyUs-section-text-description">
                We understand every body is different. That’s why we offer
                custom workout plans and nutrition guidance tailored to your
                individual needs and fitness level.
              </p>
            </div>
            <div className="col-4">
              <div className="whyUs-section-box bg-dark">
                <img className="whyUs-section-img" src={WhyUsSection3} alt="" />
              </div>
              <p className="whyUs-section-text-title mt-3"> Modern Facilities </p>
              <p className="whyUs-section-text-description">
                Train in a clean, spacious, and fully equipped gym with
                state-of-the-art machines, free weights, group fitness studios,
                and relaxing recovery areas.
              </p>
            </div>
          </div>
          <div className="row whyUs-section d-flex justify-content-between mt-5 pb-5">
            <div className="col-4">
              <div className="whyUs-section-box bg-dark">
                <img className="whyUs-section-img" src={WhyUsSection4} alt="" />
              </div>
              <p className="whyUs-section-text-title mt-3"> Community & Support </p>
              <p className="whyUs-section-text-description">
                We’re more than a gym—we’re a family. Our welcoming environment
                and supportive fitness community will keep you motivated every
                step of the way.
              </p>
            </div>
            <div className="col-4">
              <div className="whyUs-section-box bg-dark">
                <img className="whyUs-section-img" src={WhyUsSection5} alt="" />
              </div>
              <p className="whyUs-section-text-title mt-3"> Flexible Memberships </p>
              <p className="whyUs-section-text-description">
                From day passes to monthly and annual plans, we offer flexible
                membership options to fit your lifestyle and budget—with no
                hidden fees.
              </p>
            </div>
            <div className="col-4">
              <div className="whyUs-section-box bg-dark">
                <img className="whyUs-section-img" src={WhyUsSection6} alt="" />
              </div>
              <p className="whyUs-section-text-title mt-3">
               {" "}
                24/7 Access & Online Training{" "}
              </p>
              <p className="whyUs-section-text-description">
                Can’t make it in person? No problem. Access virtual classes,
                live sessions, and digital programs anytime, anywhere. Let your
                fitness journey be the next one we celebrate.
              </p>
            </div>
          </div>
        </div>
        {/* whyUs section end */}
      </div>
    </>
  );
}

export default WhyUs;
