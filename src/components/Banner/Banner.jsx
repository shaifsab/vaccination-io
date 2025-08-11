import React from 'react';
import style from './Banner.module.css';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon';
import { BsClock } from 'react-icons/bs';
import image from '../../assets/images/banner-img.png';
import BannerBottom from '../BannerBottom/BannerBottom';

const Banner = () => {
  return (
    <>
      <section className={`${style.bannerPage}`}>
        <div className="container">
          <div className={`${style.bannerMain}`}>
            {/* left side text */}
            <div className={`${style.bannerText}`}>
              {/* text portion */}
              <div className={`${style.text}`}>
                <h4>Get Vaccinated. Boost your Immune System</h4>
                <h1>COVID-19 Vaccination <br /> Got Easier With, <br /> Vaccination.ng</h1>
                <p>Vaccination.ng will help you find the nearest <br /> centre for vaccination, in all 36 states in Nigeria.</p>
              </div>
              {/* button portion */}
              <div className={`${style.button}`}>
                <Button name="Get Vaccine" />
                <Button name="Help Centre" />
              </div>

              {/* schedule portion */}
              <div className={`${style.schedule}`}>
                <ButtonIcon icon={<BsClock />} />
                <p>Schedule your Vaccination</p>
              </div>
            </div>
            {/* right side image */}
            <div className={`${style.bannerImage}`}>
              <img src={image} alt="image" />
            </div>
          </div>
          {/* bottom portion */}
          <BannerBottom />
        </div>
      </section>
    </>
  );
};

export default Banner;
