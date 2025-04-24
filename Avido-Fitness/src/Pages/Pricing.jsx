import React from "react";
import offerImg from "../assets/offerImg.png";
import PricingImg from "../assets/pricingImg.png";
import { Link, useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate()
  return (
    <>
      <div className="main text-light">
        {/* pricing-banner start */}
        <div className="container-fluid px-5">
          <div className="row p-5">
            <div className="pricing-banner text-center">
              <ul className="pricing-banner-text d-flex justify-content-center my-2">
                <li className="pricing-banner-list mx-2">
                  <Link className="pricing-banner-name text-secondary" to="/">
                    Home
                  </Link>
                </li>
                <li className="pricing-banner-list mx-1">
                  <a className="pricing-banner-name" href="">
                    /
                  </a>
                </li>
                <li className="pricing-banner-list mx-2">
                  <a className="pricing-banner-name" href="">
                    Pricing
                  </a>
                </li>
              </ul>
              <p className="pricing-banner-title">
                Choose the offer <br /> that best suits you
              </p>
            </div>
          </div>
        </div>
        {/* pricing-banner end */}

        {/* pricing-story start*/}
        <div className="container-fluid my-3 px-5">
          <div className="row px-2">
            <div className="col-5 pricing-story-box p-2">
              <img className="pricing-story-img" src={PricingImg} alt="" />
            </div>
            <div className="col-7 pricing-story-text ps-5 pe-4 py-3">
              <p className="pricing-story-title">
                Get Strong, Stay Fit – Plans for Every Lifestyle
              </p>
              <p className="pricing-story-description">
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
        </div>
        {/* pricing-story end */}

        {/* pricing-membership start */}
        <div className="container-fluid my-5 px-5">
          <div className="row membership">
            <div className="membership-text text-center">
              <p className="col-6 membership-title my-4">
                FIND THE PERFECT PLAN <br />
                FOR YOUR FITNESS JOURNEY
              </p>
              <p className="col-11 membership-description mb-4">
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
            <div className="col-4 membership-part my-2 py-4">
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
                    onClick={() => navigate("/personalDetails")}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 membership-part my-2 py-4">
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
                    onClick={() => navigate("/personalDetails")}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 membership-part my-2 py-4">
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
                    Fitness classes and wellness workshops
                  </li>
                </ul>
                <div className="membership-btn">
                  <button
                    type="button"
                    className="btn member-btn m-2"
                    onClick={() => navigate("/personalDetails")}>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pricing-membership end */}

        {/* pricing-offer start */}
        <div className="container-fluid my-5">
          <div className="row pricing">
            <img className="offer-Img" src={offerImg} alt="" />
            <div className="pricing-offer-text">
              <p className="pricing-offer-title">Special offer</p>
              <p className="pricing-offer-description">
                Get 30% off when you buy an annual pass Buy an annual pass
              </p>
              <button type="button" className="btn btn-offer py-2 px-3" onClick={() => navigate("/MembershipDetails")}>
                Buy An Anual Pass
              </button>
            </div>
          </div>
        </div>
        {/* pricing-offer end */}

        {/* pricing-subscription start */}
        <div className="container-fluid px-5 py-5">
          <div className="row">
            <div className="col-6 p-2">
              <div className="pricing-subscription-text">
                <p className="pricing-subscription-title">
                  Choose a suitable subscription
                </p>
                <p className="pricing-subscription-description">
                  The best yoga and meditation practices, adapted at a high
                  level to the needs of the modern pace of life
                </p>
                <ul className="pricing-subscription-list-text">
                  <li className="pricing-subscription-list-list my-2">
                    lesson duration 90 minutes
                  </li>
                  <li className="pricing-subscription-list-list my-2">
                    subscription valid for 30 days
                  </li>
                  <li className="pricing-subscription-list-list my-2">
                    valid for all types of classes
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12 d-flex justify-content-between bg-light text-dark p-2 my-2">
                  <div className="pricing-subscription-list-text p-2">
                    <ul className="pricing-subscription-list">
                      <li>4 lessons</li>
                      <li>Valid for all types of classes</li>
                    </ul>
                  </div>
                  <div className="text">
                    <ul className="pricing-subscription-list p-2">
                      <li>$40</li>
                      <li>$10 per class</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-pricing-subscription px-4 my-3"onClick={()=> navigate("/personalDetails")}>
                    Buy
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-between bg-light text-dark p-2 my-2">
                  <div className="pricing-subscription-list-text p-2">
                    <ul className="pricing-subscription-list">
                      <li>8 lessons</li>
                      <li>Valid for all types of classes</li>
                    </ul>
                  </div>
                  <div className="text">
                    <ul className="pricing-subscription-list p-2">
                      <li>$72</li>
                      <li>$9 per class</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-pricing-subscription px-4 my-3"onClick={()=> navigate("/personalDetails")}>
                    Buy
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-between bg-light text-dark p-2 my-2">
                  <div className="pricing-subscription-list-text p-2">
                    <ul className="pricing-subscription-list">
                      <li>16 lessons</li>
                      <li>Valid for all types of classes</li>
                    </ul>
                  </div>
                  <div className="text">
                    <ul className="pricing-subscription-list p-2">
                      <li>$120</li>
                      <li>$7 per class</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-pricing-subscription px-4 my-3"onClick={()=> navigate("/personalDetails")}>
                    Buy
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-between bg-light text-dark p-2 my-2">
                  <div className="pricing-subscription-list-text p-2">
                    <ul className="pricing-subscription-list">
                      <li>Yoga for pregnant</li>
                      <li>Valid for all types of classes</li>
                    </ul>
                  </div>
                  <div className="text">
                    <ul className="pricing-subscription-list p-2">
                      <li>$12</li>
                      <li>per class</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-pricing-subscription px-4 my-3"onClick={()=> navigate("/personalDetails")}>
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pricing-subscription end */}
      </div>
    </>
  );
}

export default Pricing;
