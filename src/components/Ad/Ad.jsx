import React from 'react';
import style from './Ad.module.css';
import image1 from '../../assets/images/p1.png';
import image2 from '../../assets/images/p2.png';
import image3 from '../../assets/images/p3.png';
import image4 from '../../assets/images/p4.png';

const Ad = () => {
  return (
    <>
      <section className={`${style.ad}`}>
        <div className="container">
          <div className={`${style.adImages}`}>
            <img src={image1} alt="ad image" />
            <img src={image2} alt="ad image" />
            <img src={image3} alt="ad image" />
            <img src={image4} alt="ad image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ad;
