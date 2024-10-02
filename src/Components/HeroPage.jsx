import React from 'react'
import image from '../Images/BgImageCoverPage.jpeg'; // Adjust the image path
import SignIn from './SignIn';
import EnterOTP from './EnterOTP';
import RegistrationForm from './RegistrationForm';
import Footer from './Footer';

function HeroPage() {
  return (

        <>
            <div className='md:max-w-[100vw] 2xs:h-[429px] md:min-h-[563px] m-auto border-2 border-red-800'>
                <div className='w-full h-full flex items-center justify-center bg-cover bg-white bg-opacity-85' style={{backgroundImage:`url(${image})`,backgroundBlendMode: 'overlay'}}>
                        <EnterOTP/>
                </div>
                <div></div>
                {/* <Footer/> */}
            </div>
        </>
)
}

export default HeroPage