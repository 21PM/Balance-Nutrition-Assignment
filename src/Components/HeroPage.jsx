import React, { useContext, useEffect, useState } from 'react'
import image from '../Images/BgImageCoverPage.jpeg'; // Adjust the image path
import SignIn from './SignIn';
import EnterOTP from './EnterOTP';
import RegistrationForm from './RegistrationForm';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import ProfileForm from './ProfileForm';

function HeroPage() {

    const [features,setFeatures] = useState([
        {
            id:1,
            content:"Get your own personal account, secured with confidential log in ID and password."
        },
        {
            id:2,
            content:"Stay updated with our special schemes and offers."
        },
        {
            id:3,
            content:"Get access to thousands of relishing yet healthy recipes for weight loss. Create your recipe book"
        },
        {
            id:4,
            content:"Stay informed about our trending blogs on health and lifestyle management."
        }
    ])

    const isSendOTP = useSelector((store) => store.userData.isSendOTP); // Ensure store.user exists
    const isSignIn = useSelector((store) => store.userData.isSignIn); // Ensure store.user exists

    useEffect(()=>{
        console.log(isSendOTP);
    
    },[isSendOTP])



  return (

        <>
            <div className='md:max-w-[100vw] 2xs:h-[429px] md:min-h-[563px] m-auto '>
               {
                 !isSignIn && <div className='w-full h-full  flex items-center justify-center bg-cover bg-white bg-opacity-85' style={{backgroundImage:`url(${image})`,backgroundBlendMode: 'overlay'}}>
                        {/* <EnterOTP/> */}
                     {
                        !isSendOTP ?  <SignIn/> : <EnterOTP/>
                     } 
                   
                </div>
               }
                { isSignIn &&
                  <>
                        <div className='mdw-full md:min-h-[846px]  flex items-center justify-center bg-cover  bg-white bg-opacity-85' style={{backgroundImage:`url(${image})`,backgroundBlendMode: 'overlay'}}>
                        {/* <EnterOTP/> */}
                        <div className='md:w-[1217px] 2xs:w-[375px]  2xs:h-[1110px] md:h-[734px] md:gap-[64px] md:top-[56px] md:flex 2xs:items-center 2xs:justify-center  md:flex-row-reverse   md:left-[111px]'>
                              

                                <ProfileForm/>


                                <div className='md:w-[533px] 2xs:w-[335px] 2xs:h-[393px] md:min-h-[490px] md:gap-[40px] flex flex-col justify-between 2xs:m-auto md:px-5 '>


                                            <div className='md:w-[505px] 2xs:w-[335px] 2xs:h-[129px] md:h-[194px] '>
                                                    <span className='font-medium md:text-[30px] md:leading-[48px] 2xs:text-[24px] 2xs:leading-[34px] '>Here is where the journey to a Healthier you begins.</span> <br className='2xs:block md:hidden'></br>
                                                    <span className='font-bold md:text-[30px] md:leading-[48px] 2xs:text-[20px] leading-[34px] text-CustomeTeal'>REGISTER & GET FOLLOWING EXCITING FEATURES</span>
                                            </div>

                                            <div className='md:w-[533px] md:min-h-[256px] md:gap-[20px]2xs:gap-[20px] flex flex-col'>
                                                    {features.map((ele,i)=>{
                                                        console.log(ele);
                                                        
                                                        return(
                                                            <div className='w-fit h-full flex items-start  justify-center 2xs:gap-[14px] md:gap-[14px]'>
                                                                <div className='w-[24px] h-[24px] flex-start'>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="#05545F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    <path d="M22 4L12 14.01L9 11.01" stroke="#05545F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>
                                                                </div>    

                                                                    <p className='md:font-medium 2xs:text-[14px] 2xs:leading-[20px] md:text-[18px] md:leading-[28px]'>{ele.content}</p>
                                                            </div>
                                                        )
                                                    })}
                                            </div>              
                                </div>


                        </div>
                        </div>
                    </>
                }
                <div></div>
                <Footer/>
            </div>
        </>
)
}

export default HeroPage