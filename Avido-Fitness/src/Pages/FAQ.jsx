import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function FAQ() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main text-light">
        {/* FAQ-banner start */}
        <div className="container-fluid">
          <div className="row p-5">
            <div className="FAQ-banner text-center">
              <ul className="FAQ-banner-text d-flex justify-content-center my-2">
                <li className="FAQ-banner-list mx-2">
                  <Link className="FAQ-banner-name text-secondary" to="/">
                    Home
                  </Link>
                </li>
                <li className="FAQ-banner-list mx-1">
                  <a className="FAQ-banner-name" href="">
                    /
                  </a>
                </li>
                <li className="FAQ-banner-list mx-2">
                  <a className="FAQ-banner-name" href="">
                    FAQ
                  </a>
                </li>
              </ul>
              <p className="FAQ-banner-title">Frequently Asked Questions</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
        {/* FAQ-banner end */}

        {/* FAQ-search start */}
        <div className="container-fluid  px-5">
          <div className="row">
            <form action="" className="d-flex justify-content-between">
              <div className="col-10">
                <input
                  type="text"
                  className="form-control FAQ-form p-3"
                  id="inputEmail4"
                  placeholder="Search"
                />
              </div>
              <div className="">
                <button type="submit" className="btn btn-FAQ px-5 py-3">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* FAQ-search end */}

        {/* FAQ-Questions start */}
        <div className="container-fluid  px-5">
          <div className="row mt-5">
            <div className="col-11 m-auto">
              <p className="FAQ-question-title mt-4">General FAQ</p>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample">
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse1"
                      aria-expanded="false"
                      aria-controls="flush-collapse1">
                      What type of fitness programs do you offer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      We offer personal training, group fitness classes, yoga,
                      HIIT, strength training, weight loss programs, and more.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2"
                      aria-expanded="false"
                      aria-controls="flush-collapse2">
                      Do I need to be fit before I start?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Not at all! Our programs are designed for all fitness
                      levels, and we’ll help you progress at your own pace.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse3"
                      aria-expanded="false"
                      aria-controls="flush-collapse3">
                      How often should I work out?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      It depends on your goals, but most people benefit from 3–5
                      sessions per week with a mix of cardio and strength
                      training.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse4"
                      aria-expanded="false"
                      aria-controls="flush-collapse4">
                      What should I bring to my first session?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Wear comfortable workout clothes, supportive shoes, and
                      bring water and a towel. We'll take care of the rest!
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse5"
                      aria-expanded="false"
                      aria-controls="flush-collapse5">
                      Do you offer personal training?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Yes, we offer one-on-one and semi-private personal
                      training with certified trainers who tailor workouts to
                      your goals.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse6"
                      aria-expanded="false"
                      aria-controls="flush-collapse6">
                      What is a fitness assessment?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      It’s a baseline check of your current fitness level—like
                      body measurements, strength, and mobility—to personalize
                      your plan.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse7"
                      aria-expanded="false"
                      aria-controls="flush-collapse7">
                      Do you offer nutrition advice?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Yes, we provide customized meal guidance, meal plans, and
                      nutritional coaching.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse8"
                      aria-expanded="false"
                      aria-controls="flush-collapse8">
                      How long are the workouts?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Our classes range from 30 to 60 minutes, depending on the
                      format and your goals.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse9"
                      aria-expanded="false"
                      aria-controls="flush-collapse9">
                      What results can I expect, and how quickly?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Results vary, but with consistent effort, most clients
                      start seeing noticeable changes in 4–6 weeks.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse10"
                      aria-expanded="false"
                      aria-controls="flush-collapse10">
                      Do you have programs for beginners?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Yes! We offer beginner-friendly classes and personalized
                      plans to build confidence and consistency.
                    </div>
                  </div>
                </div>

                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse11"
                      aria-expanded="false"
                      aria-controls="flush-collapse11">
                      What safety measures do you take?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse11"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      We sanitize equipment regularly, limit class sizes, and
                      ensure all exercises are performed with proper form to
                      prevent injuries.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse12"
                      aria-expanded="false"
                      aria-controls="flush-collapse12">
                      Do you offer services for seniors or special populations?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse12"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Yes, we offer low-impact fitness options and customized
                      programs for older adults and those with specific health
                      needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse13"
                      aria-expanded="false"
                      aria-controls="flush-collapse13">
                      Do you help with weight loss goals?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse13"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Yes, we offer tailored plans including fitness training,
                      nutrition coaching, and accountability support for weight
                      loss.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse14"
                      aria-expanded="false"
                      aria-controls="flush-collapse14">
                      Do you offer group discounts or family memberships?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse14"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Yes! We have affordable packages for couples, families,
                      and groups.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse15"
                      aria-expanded="false"
                      aria-controls="flush-collapse15">
                      Do you track progress?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse15"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Yes, we use fitness assessments, goal tracking apps, and
                      trainer feedback to monitor your progress over time.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse16"
                      aria-expanded="false"
                      aria-controls="flush-collapse16">
                      Can I build muscle and lose fat at the same time?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse16"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Yes, especially for beginners or those returning after a
                      break. It requires a calorie-controlled diet, high protein
                      intake, and resistance training.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse17"
                      aria-expanded="false"
                      aria-controls="flush-collapse17">
                      What is the best time of day to work out?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse17"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      The best time is when you feel most energized and can be
                      consistent. Performance may be slightly better in the
                      afternoon, but morning workouts are great for habit
                      formation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse18"
                      aria-expanded="false"
                      aria-controls="flush-collapse18">
                      What’s the difference between strength training and
                      hypertrophy training?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse18"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Strength training focuses on increasing maximal force
                      output (e.g., lifting heavier weights), while hypertrophy
                      targets muscle size through volume and time-under-tension.
                      Strength uses lower reps/heavier weights; hypertrophy uses
                      moderate weight/higher reps.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse19"
                      aria-expanded="false"
                      aria-controls="flush-collapse19">
                      What is progressive overload and why is it important?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse19"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Progressive overload involves gradually increasing the
                      intensity of your workouts to continually challenge your
                      body, which leads to muscle growth and strength gains.
                    </div>
                  </div>
                </div>
                <div className="accordion-item my-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse20"
                      aria-expanded="false"
                      aria-controls="flush-collapse20">
                      How do I get started?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse20"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Just contact us or sign up online for a free consultation
                      or trial session. We’ll guide you from there!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ-Questions end */}

        {/* FAQ-contact start */}
        <div className="container-fluid mt-5 pb-5">
          <div className="row FAQ-contact p-5 bg-dark">
            <div className="col-8 m-auto text-center">
              <p className="FAQ-contact-title">Get in Touch With Us</p>
              <p className="FAQ-contact-text">
                Have questions, need guidance, or ready to start your fitness
                journey? We’re here to help! Whether you’re looking for
                personalized training, group classes, or just want to learn more
                about our services, our team is just a message away. Reach out
                to us today — we’d love to hear from you and help you achieve
                your health and wellness goals.
              </p>
              <button
                type="submit"
                className="btn contact-faq-btn text-light px-4 py-2 my-3"
                onClick={() => navigate("/contact")}>
                Let's Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* FAQ-contact end */}
      </div>
    </>
  );
}

export default FAQ;
