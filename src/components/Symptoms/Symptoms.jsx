import React from 'react'
import style from './Symptoms.module.css'
import symptoms from '../../assets/images/symptoms.png'

const Symptoms = () => {
  return (
    <>
      <section className={`${style.symptomsPage}`}>
        <div className="container">

          <div className={`${style.symptomsItems}`}>
            <h3>Covid-19 Prevention</h3>
            <h1>COVID-19 <span>Symptoms</span> </h1>
            <p>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. <br />
            Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
            <img src={symptoms} alt="symptoms"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Symptoms
