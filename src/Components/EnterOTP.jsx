import React from 'react'

function EnterOTP() {
  return (

        <>
            <div className='md:w-[620px] 2xs:w-[335px] md:h-[386px] 2xs:h-[318px]  md:gap-[64px] bg-white  2xs:gap-[20px] md:p-[0] 2xs:p-[20px] rounded-[15px] border-2 border-red-400' style={{ boxShadow: '0px 0px 10px 0px #7F7F7F26' }}>

            <div className='md:w-[519px] md:min-h-[306px] 2xs:w-[295px] 2xs:h-[278px] border-2 border-black relative flex flex-col md:gap-[30px] 2xs:gap-[30px] md:top-[40px] md:left-[38px]'>
                

                {/* // Enter OTP scetion */}
                <div className='md:w-[370px] md:min-h-[196px] 2xs:w-[295px] 2xs:h-[168px] gap-[40px] border-2 flex flex-col  border-red-400'>
                        {/* //Text and Mobile No/ */}
                        <div className='md:w-[370px] md:h-[108px] 2xs:w-[272px] 2xs:h-[80px] flex flex-col gap-[6px]'>
                                    <div className='md:w-[135px] md:h-[42px] 2xs:w-[111px] 2xs:h-[29px] md:text-[28px] md:leading-[42px] 2xs:text-[22px] font-bold leading-[28.8px] text-CustomeTeal flex border-2 border-red-700'>
                                    Enter OTP
                                    </div>

                                    <div className='md:w-[370px] md:h-[45px]'>
                                            <div className='md:w-[370px] 2xs:w-[272px] h-[30px]'>
                                                <p>We have sent an OTP on your <span className='md:inline-block 2xs:hidden'> Phone Number</span> <span className='md:hidden 2xs:inline-block'> Email</span></p>
                                            </div>

                                            <div className='flex items-center justify-center 2xs:w-[268px] 2xs:h-[15px] 2xs:gap-[10px] md:w-[178px] md:h-[30px] md:gap-[30px] border-2 border-green-200'>
                                                <div className='text-black 2xs:text-[14px] md:text-[18px] leading-[30px] font-semibold	 whitespace-nowrap'>
                                                <span className='md:inline-block 2xs:hidden'>+91 8355821911</span>
                                                <span className='md:hidden 2xs:inline-block'>samruddhi.shirke@balancenutrition.in</span>
                                                </div>
                                                   <div className='md:block 2xs:hidden'>
                                                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 19.5H22.5V21H1.5V19.5ZM19.05 6.75C19.65 6.15 19.65 5.25 19.05 4.65L16.35 1.95C15.75 1.35 14.85 1.35 14.25 1.95L3 13.2V18H7.8L19.05 6.75ZM15.3 3L18 5.7L15.75 7.95L13.05 5.25L15.3 3ZM4.5 16.5V13.8L12 6.3L14.7 9L7.2 16.5H4.5Z" fill="#00B5C0"/>
                                                    </svg>
                                                   </div>

                                                    <div className='md:hidden 2xs:block'>
                                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.0625 13.8125H15.9375V14.875H1.0625V13.8125ZM13.4937 4.78125C13.9187 4.35625 13.9187 3.71875 13.4937 3.29375L11.5812 1.38125C11.1562 0.95625 10.5188 0.95625 10.0938 1.38125L2.125 9.35V12.75H5.525L13.4937 4.78125ZM10.8375 2.125L12.75 4.0375L11.1562 5.63125L9.24375 3.71875L10.8375 2.125ZM3.1875 11.6875V9.775L8.5 4.4625L10.4125 6.375L5.1 11.6875H3.1875Z" fill="#00B5C0"/>
                                                    </svg>
                                                    </div>

                                            </div>
                                    </div>
                        </div>

                        {/* // Text box to Enter OTP // */}
                        <div className='w-[237px] h-[48px] flex items-center justify-between gap-[30px] '>
                                {
                                     [1,2,3,4].map((ele,i)=>{
                                        return(
                                            <div key={i} className='w-[47.04px] h-[48px] flex items-center justify-center'>
                                             <input
                                                    className="w-[47.04px] h-[48px] border-2 text-[24px] font-bold leading-[20px] border-black rounded-[6px] text-center"
                                                    type="text"
                                                    name="otp"
                                                    maxLength="1"
                                                    key={i}
                                                    // value={data}
                                                    // onChange={(e) => handleChange(e.target, index)}
                                                    onFocus={(e) => e.target.select()}
                                                />
                                            </div>
                                        )
                                     })
                                }
                        </div>
                </div>

                {/* // Sign and timer DIV */}
                <div className='md:w-[519px] md:h-[80px] gap-[10px] 2xs:w-[295px] 2xs:h-[80px] flex flex-col border-2 border-black'>

                                {/* //Sign Button */}
                                <div className='md:w-[519px] md:h-[48px] md:gap-[20px] 2xs:w-[295px] 2xs:h-[48px] 2xs:gap-[20px] rounded-[30px] bg-CustomeTeal flex items-center justify-center text-white cursor-pointer'>
                                    Sign In
                                </div>

                                 {/* //Timer Div */}
                                 {/* <div className='md:w-[full] md:h-[32px] md:gap-[12px] flex items-center justify-center'>
                                        <p>0:28 sec</p>
                                </div> */}

                                <div className='md:w-[full] md:h-[22px] md:gap-[12px] text-CustomeTeal flex items-center justify-center font-bold leading-[22px] text-[14px]'>
                                Resend OTP
                                </div>
                </div>      

            </div>  ``

            </div>
        </>
)
}

export default EnterOTP