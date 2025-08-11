import React from 'react';
import style from './Protects.module.css';
import { MdOutlineShield } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { LuThermometer } from "react-icons/lu";

const Protects = () => {
  return (
    <>
      <section className={`${style.protectsPage}`}>
        <div className="container">
          {/* Text upper portion */}
          <div className={`${style.protectsText}`}>
            <h1>Why get vaccinated <br /> today?</h1>
            <p>
              Magna adipiscing at elit at ornare lectus nibh lorem. <br />
              Ac, sed ac lorem pellentesque vestibulum risus matti. <br />
              In molestie condimentum malesuada non.
            </p>
          </div>

          {/* Bottom portion with cards */}
          <div className={`${style.readPortion}`}>
            {/* Card One */}
            <div className={`${style.card}`}>
              <div className={`${style.iconContainer}`}>
                <MdOutlineShield />
              </div>
              <h1>Protects your immune <br /> system against viruses</h1>
              <p>Velit ut consectetur mauris, orci amet, <br /> faucibus. <br /> Sit turpis fringilla ipsum pretium, <br /> dictum. Dolor eget vel nulla lorem ac.</p>
              <div className={`${style.readmore}`}>
                <h2>Read More</h2>
                <LuArrowRight className={`${style.readmoreIcon}`} />
              </div>
            </div>

            {/* Card Two */}
            <div className={`${style.card}`}>
              <div className={`${style.iconContainer}`}>
                <GoPeople />
              </div>
              <h1>Minimize the spread <br /> of the Virus</h1>
              <div className={`${style.readmore}`}>
                <h2>Read More</h2>
                <LuArrowRight className={`${style.readmoreIcon}`} />
              </div>
            </div>

            {/* Card Three */}
            <div className={`${style.card}`}>
              <div className={`${style.iconContainer}`}>
                <LuThermometer />
              </div>
              <h1>Protect yourself</h1>
              <div className={`${style.readmore}`}>
                <h2>Read More</h2>
                <LuArrowRight className={`${style.readmoreIcon}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Protects;
