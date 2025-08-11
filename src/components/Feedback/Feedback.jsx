import React from 'react';
import style from './Feedback.module.css';
import feedback from '../../assets/images/feedback-img.png';
import image1 from '../../assets/images/feedback1.png';
import image2 from '../../assets/images/feedback2.png';
import image3 from '../../assets/images/feedback3.png';

const Feedback = () => {
  return (
    <>
      <section className={`${style.feedbackPage}`}>
        <div className="container">
          <div className={`${style.feedbackItems}`}>
            <h3>FEEDBACK</h3>
            <h1>What our Patients Think</h1>
            <p>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. <br />
              Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>

            <div className={`${style.cardAll}`}>
              {/* Card One */}
              <div className={`${style.feedbackCard}`}>
                <div className={`${style.cardUpper}`}>
                  <img src={image1} alt="image1" />
                  <span>
                    <h2>Oyindamola Maja</h2>
                    <p>Badagry, Lagos</p>
                  </span>
                </div>

                <div className={`${style.cardLowerr}`}>
                  <p>“Been stressing about a close centre <br />
                    to get the <span>covid-19 </span> vaccine, until <br />
                    i tried Vaccination.ng”</p>
                </div>
              </div>

              {/* Card Two */}
              <div className={`${style.feedbackCard}`}>
                <div className={`${style.cardUpper}`}>
                  <img src={image2} alt="image1" />
                  <span>
                    <h2>Okeowo Lekan</h2>
                    <p>Ikeja, Lagos</p>
                  </span>
                </div>

                <div className={`${style.cardLowerr}`}>
                  <p>“Got my vaccine very close to my house. <br />
                    Was very easy scheduling <br />
                    an appointment.”</p>
                </div>
              </div>

              {/* Card Three */}
              <div className={`${style.feedbackCard}`}>
                <div className={`${style.cardUpper}`}>
                  <img src={image3} alt="image1" />
                  <span>
                    <h2>Kafaru Temitope</h2>
                    <p>Obanikoro, Lagos</p>
                  </span>
                </div>

                <div className={`${style.cardLowerr}`}>
                  <p>“Been stressing about a close centre <br />
                    to get the <span>covid-19 </span> vaccine, until <br />
                    i tried Vaccination.ng”</p>
                </div>
              </div>
            </div>

            <img className={`${style.covidImg}`} src={feedback} alt="feedback" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
