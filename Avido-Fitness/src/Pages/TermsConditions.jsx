import React from "react";
import {Link} from "react-router-dom"

function TermsConditions() {
  return (
    <>
      <div className="main px-5 text-light py-4">
        <div class="container-fluid terms-conditions">
          <section class="row terms-conditions-text p-4">
            <div className="col-8 m-auto py-5 terms-conditions-section rounded-3 bg-dark px-5">
              <p className=" terms-conditions-heading text-center">Terms & Conditions</p>
              <div class="terms-conditions-content py-2">
                  <p>
                    Welcome to Avido Fitness, a hybrid fitness platform that
                    offers personalized training, nutrition guidance, mental
                    wellness support, and community features through both web
                    and mobile applications. By accessing or using our platform,
                    you agree to abide by the following terms and conditions.
                    These terms serve as a legally binding agreement between you
                    (the user) and Avido Fitness
                  </p>
                  <p>
                    {" "}
                    All users are required to create an account to access
                    certain features of the platform. You agree to provide
                    accurate information during registration and to keep your
                    account details secure. You are responsible for all activity
                    that occurs under your account. If you believe your account
                    has been compromised, it is your responsibility to notify us
                    immediately.
                  </p>
                  <p>
                    The services provided by Avido Fitness are intended for
                    general fitness, wellness, and lifestyle improvement
                    purposes only. Our workouts, nutrition plans, and mental
                    wellness tools are designed by professionals; however, we
                    are not a substitute for medical advice, diagnosis, or
                    treatment. You are encouraged to consult your doctor before
                    starting any new fitness or nutrition program. By using the
                    platform, you acknowledge that you are voluntarily engaging
                    in physical activity and assume full responsibility for any
                    risk or injury.
                  </p>
                  <p>
                    Access to premium features, including advanced training
                    programs, one-on-one coaching, and exclusive content, may
                    require a paid subscription. Subscription plans are billed
                    monthly or annually, depending on the user’s selection, and
                    auto-renewal is enabled by default unless canceled by the
                    user. No partial refunds are offered once a billing cycle
                    has started. Users can manage or cancel their subscription
                    at any time through the account settings.
                  </p>
                  <p>
                    Users are expected to engage respectfully with all features
                    of the platform, including the community forums and feedback
                    sections. Offensive language, harassment, abuse, or misuse
                    of services will result in account suspension or
                    termination. We reserve the right to remove any
                    user-generated content that violates our policies without
                    prior notice.
                  </p>
                  <p>
                    All intellectual property, including logos, videos, content,
                    and code, is the property of Avido Fitness and Techmicra IT
                    Solutions. Users may not copy, distribute, reproduce, or
                    resell any part of the service or its content without prior
                    written permission. Unauthorized use of our platform may
                    result in legal action.
                  </p>
                  <p>
                    While we strive to ensure consistent uptime, we do not
                    guarantee uninterrupted access to the platform. Temporary
                    service outages may occur due to maintenance, technical
                    issues, or external circumstances beyond our control. We are
                    not liable for any loss or inconvenience caused due to
                    service unavailability.
                  </p>
                  <p>
                    Avido Fitness may contain links or integrations with
                    third-party services, such as fitness trackers, payment
                    gateways, or health platforms. We are not responsible for
                    the content, privacy practices, or reliability of any
                    third-party services linked to or used within our
                    application.
                  </p>
                  <p>
                    Your personal data will be collected and processed in
                    accordance with our Privacy Policy. We are committed to
                    protecting your privacy and ensuring secure storage and
                    handling of your information in compliance with relevant
                    data protection laws.
                  </p>
                  <p>
                    These terms are governed by the laws of the Republic of
                    India, and any disputes shall fall under the exclusive
                    jurisdiction of the courts located in Ahmedabad, Gujarat. We
                    reserve the right to amend these Terms and Conditions at any
                    time. Continued use of the platform after updates signifies
                    your acceptance of the modified terms.
                  </p>
                  <p>
                    If you have any questions or concerns about these terms, you
                    may contact us at support@avidofitness.com.
                  </p>
              </div>
              <hr />
              <div class="terms-conditions-nav text-end mt-4">
                <small>
                  By clicking 'Accept' you are agreeing to our terms and
                  conditions.
                </small>
                <Link class="button px-4 py-2 ms-3" type="button" to="/">
                  Accept
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default TermsConditions;
