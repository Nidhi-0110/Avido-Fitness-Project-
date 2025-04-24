import React from "react";
import BlogdetailsImg from "../assets/image.png";
import Blog4 from "../assets/blog4.png";
import Blog5 from "../assets/blog5.png";
import Blog6 from "../assets/blog6.jpg";
import { Link } from "react-router-dom";

function BlogDetails() {
  return (
    <>
      <div className="main text-light px-5">
        {/* blog-banner start */}
        <div className="container-fluid">
          <div className="row p-5">
            <div className="blog-banner text-center">
              <ul className="blog-banner-text d-flex justify-content-center my-2">
                <li className="blog-banner-list me-2">
                  <Link className="blog-banner-name text-secondary" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="blog-banner-list mx-1">
                  <a className="blog-banner-name" href="">
                    /
                  </a>
                </li>
                <li className="blog-banner-list ms-2">
                  <Link className="blog-banner-name" href="">
                    BlogDetails
                  </Link>
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

        {/* blog-details start */}
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-11 m-auto">
              <div className="blog-details-box bg-dark">
                <img className="blog-details-img" src={BlogdetailsImg} alt="" />
              </div>
              <div className="blog-details-text px-2">
                <div className="blog-details-title">
                  <p className="blog-details-title-text my-3">
                    How to Make Exercise a Regular Habit in 6 Steps
                  </p>
                </div>
                <div className="blog-details-description">
                  <p className="blog-details-description-text">
                    Use the following six steps to help shift your focus so that
                    you approach exercise as a means to a healthier life, which
                    is essential for making it a daily habit. like,
                  </p>
                  <ol>
                    <li className="blog-details-list mt-2">
                      Treat yourself. Give yourself a small nonfood-related
                      reward after completing a workout, doing all of the
                      workouts you scheduled for yourself in a week or when you
                      hit a goal. You could purchase a new piece of exercise
                      clothing or a formal work outfit, enjoy a treatment at a
                      spa or invest in new headphones for your workouts.
                      Whatever it is, treating yourself to a reward activates
                      the pleasure centers in your brain, which helps to
                      establish a positive outlook toward the role that exercise
                      plays in your life.
                    </li>
                    <li className="blog-details-list mt-2">
                      Schedule your workouts. If you live by your appointment
                      calendar, it may sometimes feel as though your schedule
                      takes over your life and limits the amount of time
                      available for a workout. However, if you take the time to
                      plan your schedule and include time for exercise, it is
                      more likely to become a regular habit. Take a few minutes
                      over the weekend to plan when and where you will exercise
                      and put it in your schedule. Then, if someone tries to
                      make demands for your time, you can say, “Sorry, but I’ve
                      already got plans.”
                    </li>
                    <li className="blog-details-list mt-2">
                      Set a learning goal. There are two primary types of goals:
                      outcome and learning. Outcome goals focus on the end
                      result of performing a task, such as completing a
                      marathon. Learning goals, however, focus on the process or
                      steps required to achieve an outcome, such as learning how
                      to exercise with a kettlebell. Focusing on the process of
                      learning a new exercise technique or format could help
                      release more dopamine, which is released in response to
                      positive learning experiences, so that your brain
                      associates exercise with pleasure.
                    </li>
                    <li className="blog-details-list mt-2">
                      Change your mindset. Refocus your outcome goals to focus
                      on quality of life rather than trying to achieve some
                      media-defined appearance. Instead of focusing on using
                      exercise to change how you look, think of exercise as a
                      means for improving your health and enhancing your quality
                      of life. If you shift your focus toward using exercise as
                      a means for achieving and maintaining better health, you
                      might be surprised at how motivated you will become to
                      maintain a more consistent workout schedule.
                    </li>
                    <li className="blog-details-list mt-2">
                      Develop a journaling practice. Use a journal to track your
                      progress and record how you feel after you exercise. This
                      doesn’t require lugging a journal with you to the gym for
                      every workout—you could simply use the notes app on your
                      phone to record a few brief statements about how the
                      workout made you feel. Did you feel a sense of
                      accomplishment? Were you able to do an exercise or
                      complete a certain distance for the first time? Did you
                      try a new class and enjoy the experience? Writing down the
                      positive aspects of each exercise session and how it makes
                      you feel could help you to shift your mindset so that you
                      focus on the process, not necessarily the outcome.
                    </li>
                    <li className="blog-details-list mt-2">
                      Find a workout buddy. Taking the steps to initiate
                      behavior change by yourself can be tough, so having a
                      friend along with you for the journey could help make the
                      process a little easier. Enlisting a friend or family
                      member to be a workout partner can give you someone to
                      exercise with, which helps the time pass more quickly. It
                      also makes you and your partner accountable to each other,
                      which means you’re less likely to skip your workout if you
                      know someone is counting on you. If you and a workout
                      partner commit to exercising together, chances are greater
                      that you will enjoy the experience, which is essential for
                      establishing a long-term habit.
                    </li>
                  </ol>
                  <p className="blog-details-description-text">
                    Taking these steps to focus on the positive aspects of
                    working out could help change your perception of the
                    benefits of exercise so that it becomes easier to make it a
                    consistent habit. It is only when exercise becomes a regular
                    habit that you will experience lasting and long-term results
                    from your efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog-details end */}

        {/* blog-related-blog start */}
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-4 blog-text">
              <div className="card py-2" style={{ width: "100%" }}>
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
                    <a href="">
                      Learn more
                      <i className="bi bi-chevron-double-right fs-6 mx-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 blog-text">
              <div className="card py-2" style={{ width: "100%" }}>
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
              <div className="card py-2" style={{ width: "100%" }}>
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
        </div>
        {/* blog-related-blog end */}
      </div>
    </>
  );
}

export default BlogDetails;
