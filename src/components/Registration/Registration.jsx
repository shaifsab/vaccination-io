import React from 'react';
import style from './Registration.module.css';
import dropdown from '../../assets/images/dropdown.png';
import verify from '../../assets/images/verify-img.png';

const Registration = () => {
  return (
    <>
      <section className={`${style.registrationPage}`}>
        <div className="container">

          <div className={`${style.items}`}>
            {/* Left Side Items */}
            <div className={`${style.feedbackCard}`}>
              <h1>Get your vaccine <br /> registration today</h1>

              <form className={`${style.form}`}>
                <div className={`${style.formPatient}`}>
                  <h4>Patient's Full Name</h4>
                  <input type="text" placeholder="Full name" />
                </div>

                {/* Mobile Number Section */}
                <div className={`${style.mobileNumber}`}>
                  <h4>Mobile Number</h4>
                  <p>Notifications for appointment and reminders will be sent to this <br /> provided number</p>
                  {/* Select Country */}
                  <div className={`${style.dropdown}`}>
                    <img src={dropdown} alt="dropdown" />
                    <button type="button">Verify</button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className={`${style.submitBtn}`}>
                  <button type="submit">Submit</button>
                </div>

                {/* Link */}
                <div className={`${style.linkBtn}`}>
                  <span>Already registered?</span>
                  <span>Check your status</span>
                </div>
              </form>
            </div>

            {/* Right Side Items */}
            <div className={`${style.imageLeft}`}>
              <img src={verify} alt="verify" />
              <button className={`${style.verifyBtn}`}>Verify Status</button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
