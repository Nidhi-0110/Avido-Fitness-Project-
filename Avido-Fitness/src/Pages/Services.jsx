import React from "react";
// import Service1 from "../assets/image1.png";
// import Service2 from "../assets/image2.png";
// import Service3 from "../assets/image3.png";
import PersonalTraining from "../assets/about1.png";
import StrengthTraining from "../assets/about2.png";
import FunctionalTraining from "../assets/about3.png";
import CardioHiitTraining from "../assets/about4.png";
import GroupCycling from "../assets/about5.png";
import { Link, useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return (
    <div className="main px-5 text-light">
      {/* services-banner start */}
      <div className="container-fluid">
        <div className="row p-5">
          <div className="services-banner text-center py-4/">
            <ul className="services-banner-text d-flex justify-content-center my-2">
              <li className="services-banner-list mx-2">
                <Link className="services-banner-name text-secondary" to="/">
                  Home
                </Link>
              </li>
              <li className="services-banner-list mx-1">
                <a className="services-banner-name" href="">
                  /
                </a>
              </li>
              <li className="services-banner-list mx-2">
                <a className="services-banner-name" href="">
                  Services
                </a>
              </li>
            </ul>
            <p className="services-banner-title">
              Train Smarter, Get Stronger <br /> Personalized Fitness Solutions!
            </p>
            <ul className="services-banner-text d-flex justify-content-center mt-4">
              <li className="services-banner-list mx-2">
                <a className="services-banner-training-name" href="">
                  <i className="bi bi-check2 mx-1"></i> FUNCTIONAL TRAINING
                </a>
              </li>
              <li className="services-banner-list mx-3">
                <a className="services-banner-training-name" href="">
                  <i className="bi bi-check2 mx-1"></i> GROUP CYCLING
                </a>
              </li>
              <li className="services-banner-list mx-3">
                <a className="services-banner-training-name" href="">
                  <i className="bi bi-check2 mx-1"></i> PERSONAL TRAINING
                </a>
              </li>
              <li className="services-banner-list mx-3">
                <a className="services-banner-training-name" href="">
                  <i className="bi bi-check2 mx-1"></i> STRENGTH TRAINING
                </a>
              </li>
              <li className="services-banner-list mx-3">
                <a className="services-banner-training-name" href="">
                  <i className="bi bi-check2 mx-1"></i> CARDIO / HIIT TRAINING
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* services-banner end */}

      {/* services training start */}
      <div className="container-fluid">
        <div className="services-training-text">
          <p className="services-training-title mb-3 mt-5">
            TRANSFORM LIFE WITH OUR ELITE FITNESS
          </p>
          <p className="services-training-description">
            Unlock your full potential with expert training, science-backed
            programs, and a results-driven approach. Our elite fitness system is
            designed to build strength, endurance, and confidence—helping you
            achieve a healthier, stronger, and more resilient version of
            yourself. Join us today and start your transformation!
          </p>
        </div>
        <div className="row px-3">
          <div className="col-5 services-training-list bg-dark my-3">
            <img
              className="services-training-img"
              src={PersonalTraining}
              alt=""
            />
          </div>
          <div className="col-7 services-training-list-text ps-5 py-2 my-5">
            <div className="text">
              <h4>Personal Training</h4>
              <p>
                The scope of practice for a personal trainer has a primary focus
                on prevention and involves enhancing components of health and
                fitness for the general, healthy population or those cleared for
                exercise. Proper exercise prescription may result in improved
                body composition, physical performance, heart condition, and
                health outcomes. The decision to hire a personal trainer may be
                related to a perceived health threat, a lack of knowledge, a
                personal belief in one's ability to begin and adhere to an
                exercise program, or some sort of psychological effect. Often
                clients will seek the guidance of a personal trainer for factors
                related to motivation and adherence. A personal trainer pays
                close attention to the client's exercise technique, workout
                routine, goals, values, and nutrition. Personal training in men
                and women has been shown to improve the benefit-to-concern ratio
                for exercise (decisional balance), and increase confidence to
                choose exercise in the face of other time demands (scheduling
                self-efficacy). Personal training results in higher strength,
                higher workout intensities, and higher perceived exertion during
                exercise.
              </p>
            </div>
          </div>

          <div className="col-7 services-training-list-text pe-5 py-2 my-5">
            <div className="text">
              <h4>Strength Training</h4>
              <p>
                Strength training, also known as weight training or resistance
                training, is exercise designed to improve physical strength. It
                is often associated with the lifting of weights. It can also
                incorporate techniques such as bodyweight exercises (e.g.,
                push-ups, pull-ups, and squats), isometrics (holding a position
                under tension, like planks), and plyometrics (explosive
                movements like jump squats and box jumps). Training works by
                progressively increasing the force output of the muscles and
                uses a variety of exercises and types of equipment. Strength
                training is primarily an anaerobic activity, although circuit
                training also is a form of aerobic exercise. Strength training
                can increase muscle, tendon, and ligament strength as well as
                bone density, metabolism, and the lactate threshold; improve
                joint and cardiac function; and reduce the risk of injury in
                athletes and the elderly. For many sports and physical
                activities, strength training is central or is used as part of
                their training regimen. This article will cover many topics
                including principles and training methods, comparisons of
                different exercises, nutrition, history, and safety concerns.
              </p>
            </div>
          </div>
          <div className="col-5 services-training-list bg-dark my-5">
            <img
              className="services-training-img"
              src={StrengthTraining}
              alt=""
            />
          </div>

          <div className="col-5 services-training-list bg-dark my-5">
            <img
              className="services-training-img"
              src={FunctionalTraining}
              alt=""
            />
          </div>
          <div className="col-7 services-training-list-text ps-5 py-2 my-5">
            <div className="text">
              <h4>Functional Training</h4>
              <p>
                Functional Strength Training is a fitness approach designed to
                enhance the body's ability to perform everyday movements with
                ease and efficiency. Unlike traditional strength training that
                isolates specific muscle groups, functional training focuses on
                exercises that mimic real-life activities, such as lifting,
                squatting, and climbing. By engaging multiple muscles and joints
                simultaneously, functional strength training aims to improve
                overall body coordination, stability, and strength. Core
                exercises like squats, lunges, push-ups, and planks are commonly
                used, as well as tools like kettlebells, resistance bands, and
                medicine balls. Functional strength training is highly
                beneficial for improving daily life performance, reducing the
                risk of injury, and increasing flexibility and balance. It also
                provides a time-efficient workout by targeting multiple muscle
                groups at once, making it ideal for individuals seeking
                practical fitness solutions. This form of training is accessible
                to all fitness levels, from beginners to athletes, and can be
                adapted with bodyweight or added resistance, offering a
                comprehensive way to enhance functional fitness and overall
                health.
              </p>
            </div>
          </div>

          <div className="col-7 services-training-list-text pe-5 py-2 my-5">
            <div className="text">
              <h4>CARDIO / HIIT TRAINING</h4>
              <p>
                Some form of cardiovascular (cardio) or aerobic exercise is
                necessary to condition your heart and lungs and build-up stamina
                for long days on the route. If you already enjoy swimming,
                cycling, running, or rowing, then increasing your time or
                intensity in these activities will be worthwhile training.
                Nevertheless, the most appropriate cardio preparation is to head
                outdoors on your bike as often as possible, progressively
                extending the time and distance. It is important to vary your
                training rides as the terrain on your trip can also change,
                especially on adventures with high Activity Level gradings, so
                incorporate interval training (see Fitness Plans) and include
                some hills in your routes.
              </p>
            </div>
          </div>
          <div className="col-5 services-training-list bg-dark my-5">
            <img
              className="services-training-img"
              src={CardioHiitTraining}
              alt=""
            />
          </div>

          <div className="col-5 services-training-list bg-dark my-5">
            <img className="services-training-img" src={GroupCycling} alt="" />
          </div>
          <div className="col-7 services-training-list-text ps-5 py-2 my-5">
            <div className="text">
              <h4>GROUP CYCLING</h4>
              <p>
                Strength exercises will help to prepare the main muscles used
                during cycling. On a bike, your core, legs and glutes (buttock
                muscles) work the hardest but with just a few, simple bodyweight
                exercises you can condition these muscle groups so they help you
                to maintain a better riding position, thereby keeping you
                comfortable on the ride for longer. Each Fitness Plan's strength
                exercises progress in difficulty, but if you find that your
                training plan's strength exercises are too challenging, try the
                options to make them easier (alternatively, try the progressions
                to make them harder) or simply follow the exercises on an easier
                plan. Slow and steady. Try to keep exercise movements controlled
                and steady, aiming to complete the recommended number of
                repetitions followed by a one to two-minute rest before moving
                onto the next set of repetitions of the same or different
                exercise. For all exercises, please take care not to flex the
                spine or round the shoulders. Maintain a good posture by
                focusing on the horizon, keeping shoulders back and chin and
                chest proud. Many of the exercises specifically work on
                strengthening core muscles; however, hold your core strong to
                help maintain your posture during other exercises.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* services training end */}

      {/* services-service start */}
      <div className="container-fluid pb-5">
        <div className="row services-service">
          <div className="services-service-text">
            <p className="services-service-title my-4">
              UNLEASH YOUR POTENTIAL <br /> OUR ADVANCED GYM CENTER
            </p>
            <p className="col-12 services-service-description mb-3">
              Tailored workouts, nutritional guidance, and motivational support
              – everything you need to excel in your fitness goals. Join ou gym
              today and transform your body and mind with our professional
              trainers. Tailored workouts, nutritional guidance, and
              motivational support – everything you need to excel in your
              fitness goals. Join our gym today and transform your body and mind
            </p>
          </div>
        </div>
        <div className="row d-flex d-flex justify-content-between mx-2 mt-5">
          <div className="col-4 services-service-part my-3 py-4">
            <div className="services-service-service-text p-3">
              <p className="services-service-service-title my-3">
                Group exercise classes
              </p>
              <p>
                Experience a fitness journey like no other at o gym. With
                cutting-edge equipment, diverse classes, and a supportive
                community, we help you push yi limits and reach new heights in
                your fijourney.Experience a fitness journey like no other at our
                gym
              </p>
              <ul>
                <li className="services-service-list my-2">
                  Cardiovascular Training
                </li>
                <li className="services-service-list my-2">
                  Flexibility and Balance
                </li>
                <li className="services-service-list my-2">
                  Mind-Body Practices
                </li>
                <li className="services-service-list my-2">
                  Strength Training
                </li>
              </ul>
              <p className="learn-text d-flex align-items-center">
                <Link to="/innerServices">
                  Learn more
                  <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                </Link>
              </p>
              <div className="services-service-box"></div>
            </div>
          </div>
          <div className="col-4 services-service-part my-3 py-4">
            <div className="services-service-service-text p-3">
              <p className="services-service-service-title my-3">
                Equipment for individual workouts
              </p>
              <p>
                Experience a fitness journey like no other at o gym. With
                cutting-edge equipment, diverse classes, and a supportive
                community, we help you push yi limits and reach new heights in
                your fijourney.Experience a fitness journey like no other at our
                gym
              </p>
              <ul>
                <li className="services-service-list mt-2">
                  Personal Training
                </li>
                <li className="services-service-list my-2">
                  Weight Management Programs
                </li>
                <li className="services-service-list my-2">
                  High-Intensity Interval Training (HIIT)
                </li>
                <li className="services-service-list my-2">
                  Fitness Challenges and Events
                </li>
              </ul>
              <p className="learn-text d-flex align-items-center">
                <Link to="/innerServices">
                  Learn more{" "}
                  <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                </Link>
              </p>
              <div className="services-service-box"></div>
            </div>
          </div>
          <div className="col-4 services-service-part my-3 py-4">
            <div className="services-service-service-text p-3">
              <p className="services-service-service-title my-3">
                Wellness Program
              </p>
              <p>
                Experience a fitness journey like no other at o gym. With
                cutting-edge equipment, diverse classes, and a supportive
                community, we help you push yi limits and reach new heights in
                your fijourney.Experience a fitness journey like no other at our
                gym
              </p>
              <ul>
                <li className="services-service-list my-2">
                  Physical Activity
                </li>
                <li className="services-service-list my-2">
                  Fitness Boot Camps
                </li>
                <li className="services-service-list my-2">Health Education</li>
                <li className="services-service-list my-2">Body Composition</li>
              </ul>
              <p className="learn-text d-flex align-items-center">
                <Link to="/innerServices">
                  Learn more
                  <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                </Link>
              </p>
              <div className="services-service-box"></div>
            </div>
            <button
              type="button"
              className="btn services-service-btn1 text-light"
              onClick={() => navigate("/innerServices")}>
              More <i className="bi bi-chevron-double-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
      {/* services-service end */}
    </div>
  );
}

export default Services;
