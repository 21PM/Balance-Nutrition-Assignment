import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css';
import { FcGoogle } from "react-icons/fc";

function SignIn() {

  const [phone, setPhone] = useState('');


  return (
    <>
        <div className='md:w-[579px] md:h-[438px] 2xs:w-[335px] w-fit rounded-[15px] flex flex-col items-center justify-center md:gap-[64px] md:p-[30px] 2xs:p-[20px] 2xs:gap-[20px] 2xs:h-[349px] bg-white'>

                    {/* //SignIn Form upper Div */}
                    <div className='md:w-[519px] md:min-h-[266px] 2xs:w-[300px] 2xs:h-[349px] flex flex-col justify-between'>
                            {/* // Welcome div */}
                            <div className='md:w-[346px] md:-h[70px] 2xs:w-[269px] 2xs:h-[49px] flex flex-col md:gap-[6px]'>
                                <span className='font-bold md:text-[28px] 2xs:text-[24px]  leading-[33.6px]' style={{color:"#05545F"}}>Hello, Welcome!</span>
                                <span className='font-normal md:text-[18px] 2xs:text-[14px] leading-[30px]'>Please enter your details below for Sign In.  </span>
                          </div>

                               {/* // Mobile No or Connect with google Div */}
                            <div className='md:w-[519px] 2xs:w-[295px] md:h-[166px] 2xs:h-[162px] flex flex-col gap-[30px] '>
                                          {/* //Mobile   */}
                                          <div className='md:block 2xs:hidden md:w-[full] h-[36px]'>
                                          <div className="flex justify-center items-center h-full"> {/* Changed to h-full */}
                                                <div className="w-full max-w-full border-b-2">
                                                  <PhoneInput
                                                    className='bg-none'
                                                    country={'in'} // Default country
                                                    value={phone}  // Controlled input value
                                                    onChange={setPhone}  // Update phone state
                                                    placeholder='Please enter your mobile number'
                                                    inputStyle={{
                                                      width: '100%',
                                                      border:"none",
                                                      borderBottom:'4px',
                                                      fontSize: '16px',
                                                      outline: 'none', 
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                          </div>


                                          {/* //Email   */}

                                          <div className='2xs:flex items-center md:hidden md:w-[295px] h-[40px] border-b-2  gap-[15px]'>
                                              <div className='w-[24px] h-[24px]'>
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="url(#paint0_linear_1_22196)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M22 6L12 13L2 6" stroke="url(#paint1_linear_1_22196)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_1_22196" x1="22" y1="3.99999" x2="0.534242" y2="6.29592" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF8A00"/>
                                                    <stop offset="0.613956" stop-color="#FF9E00"/>
                                                    <stop offset="0.994515" stop-color="#EEBA00"/>
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_1_22196" x1="22" y1="6" x2="1.51313" y2="11.0085" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF8A00"/>
                                                    <stop offset="0.613956" stop-color="#FF9E00"/>
                                                    <stop offset="0.994515" stop-color="#EEBA00"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>

                                              </div>
                                                <div className='w-[244px] h-[18px] text-[15px] leading-[18px]'> 
                                                <input className='w-full' type="email" placeholder='Please Enter your Email Address here' />

                                                </div>

                                          </div>

                                          {/* // OR DASHED LINE Div */}
                                          <div className='md:h-[22px] 2xs:h-[14px]  flex items-center justify-center'>
                                              <div class="border-b-2 border-dashed border-gray-500 w-full"></div>
                                                   <span className='mx-3 text-gray-500'>OR</span>
                                              <div class="border-b-2 border-dashed border-gray-500 w-full"></div>
                                          </div>

                                          {/* // Connect Google DIV */}
                                          <div className='h-[48px] flex items-center justify-center rounded-[10px] border-CustomeTeal' style={{border:'1px solid',}}>
                                                    <FcGoogle className='w-[28px] h-[28px]'/>
                                                    <div className='2xs:w-[169px] 2xs:h-[21px] 2xs:gap-[14px] 2xs:py-[10px] 2xs:px-[8px] flex items-center'>
                                                      <span>Connect with Google</span>
                                                    </div>
                                          </div>
                            </div>

                    </div>


                     {/* //Send OTP Button */}
                     <div className='md:w-[519px] md:h-[48px] 2xs:w-[295px] 2xs:-h-[48px] border-2 border-black rounded-[30px]' >
                            <button className='md:w-full md:h-full 2xs:w-full 2xs:h-[48px] font-normal rounded-[30px] text-[17px] leading-[22px]' style={{backgroundColor:"#B9B9B9",color:"#FFFFFF"}}>
                            Send OTP
                            </button>
                     </div>


        </div>
    </>
  )
}

export default SignIn