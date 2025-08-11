/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../components/Banner/Banner'
import Ad from '../../components/Ad/ad'
import Result from '../../components/Result/Result'
import Protects from '../../components/Protects/protects'
import Registration from '../../components/Registration/Registration'
import Symptoms from '../../components/Symptoms/Symptoms'
import Feedback from '../../components/Feedback/Feedback'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <>
      <Banner/>
      <Ad/>
      <Result/>
      <Protects/>
      <Registration />
      <Symptoms/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default Home
