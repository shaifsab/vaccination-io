import React from 'react';
import style from './BannerBottom.module.css'; // Ensure correct import
import ButtonIcon from '../ButtonIcon';
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineShield } from "react-icons/md";
import Button from '../Button/Button';

const BannerBottom = () => {
  return (
    <>
      <div className={`${style.bannerBottom}`}>
        {/* left all data */}
        <div className={`${style.icon}`}>
          <div className={`${style.iconItem}`}>
            <ButtonIcon icon={<CiLocationOn />} />
            <div className={`${style.card}`}>
              <p>Location</p>
              <h4>Ikeja Lagos, Nigeria</h4>
            </div>
          </div>

          <div className={`${style.iconItem}`}>
            <ButtonIcon icon={<CiCalendarDate />} />
            <div className={`${style.card}`}>
              <p>Date</p>
              <h4>29 February, 2022</h4>
            </div>
          </div>
          
          <div className={`${style.iconItem}`}>
            <ButtonIcon icon={<MdOutlineShield />} />
            <div className={`${style.card}`}>
              <p>Vaccine Type</p>
              <h4>Mordena</h4>
            </div>
          </div>
        </div>
        {/* Submit button */}
        <Button name="Submit" />
      </div>
    </>
  );
}

export default BannerBottom;
