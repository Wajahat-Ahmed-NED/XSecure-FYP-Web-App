import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import { GetStarted } from './index'
import { Button } from '@mui/material'
const handleGithub = () => {
  window.open("https://github.com/Wajahat-Ahmed-NED/X-Secure_Raccine")
}
const handleURLGithub = () => {
  window.open("https://github.com/RehanMumtaz123/X-Secure-ChromeExtension")
}
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className='flex flex-row items-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discont" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 uppercase`}>   
            <span className="text-white">20%</span> Discount For {" "} 
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Raccine - <br className="sm:block hidden" /> {" "}
            <span className="text-gradient">Next Level</span> {" "}

          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"> Ransomware Solution.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ textAlign: "justify" }}>
          Our team of experts uses a methodology to prevent and detect the possibility of most likely any Ransomware
          to secure our system and environment. It is a complete open source product which target specific ransomware family. Especially designed for indiviuals and start up companies.
          This product uses prevention and detection techniques to identify the Ransomware.
        </p>
        <br />
        <span style={{ display: 'inline' }}>

          <Button variant='outlined' color='primary' onClick={handleGithub} >Raccine Github</Button> &nbsp;&nbsp;&nbsp;
          <Button variant='outlined' color='primary' onClick={handleURLGithub} >URL Detector Github</Button>
        </span>
      </div>


      <div className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}>
        <img src="https://templatekit.jegtheme.com/cryptiva/wp-content/uploads/sites/53/2021/03/security.png" className="w-[100%] h-[100%] relative z-[5]" alt="" srcset="" style={{ marginRight: "20px" }} />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section >
  )
}

export default Hero