import React from 'react';
import style from './Result.module.css';

const Result = () => {
  return (
    <>
      <section className={`${style.resultPage}`}>
        <div className="container">
          {/* Result Box */}
          <div className={`${style.resultBox}`}>
            <div className={`${style.resultBoxItems}`}>
              <p>Check your COVID-19 result on our Database</p>
            </div>

            <div className={`${style.inputField}`}>
              <div className={`${style.inputItem}`}>
                <input type="text" placeholder="Enter Name" />
                <input type="text" placeholder="NIK Number" />
                <button>Check</button>
              </div>
              <h3>Need a certificate for your COVID-19 result? Please click here</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Result;
