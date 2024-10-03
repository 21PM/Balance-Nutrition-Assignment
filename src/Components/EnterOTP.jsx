import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSignIn } from '../Slice/Slice';

function EnterOTP() {
  const [otp, setOtp] = useState(new Array(4).fill('')); // Array to store OTP digits

  const isSignIn = useSelector(store=>store.userData.isSignIn)
  const dispatch = useDispatch()

  function handleSignin() {
    const otpValue = otp.join(''); // Combine the array into a single string
    console.log('OTP entered:', otpValue); 
    dispatch(setIsSignIn(true)) 

    // You can now use the `otpValue` to verify or send it to your backend
  }

  function handleChange(val, index) {
    let newOtp = [...otp];
    newOtp[index] = val; // Update the value at the current index
    setOtp(newOtp);
  }

  useEffect(() => {
    console.log('OTP state:', otp); // Logs the OTP array whenever it changes
  }, [otp]);

  return (
    <>
      <div className='md:w-[620px] 2xs:w-[335px] md:h-[386px] 2xs:h-[318px] md:gap-[64px] bg-white shadow-[0px_0px_10px_0px_#7F7F7F26] 2xs:gap-[20px] md:p-[0] 2xs:p-[20px] rounded-[15px] ' style={{ boxShadow: '0px 0px 10px 0px #7F7F7F26' }}>
        <div className='md:w-[519px] md:min-h-[306px] 2xs:w-[295px] 2xs:h-[278px] relative flex flex-col md:gap-[30px] 2xs:gap-[30px] md:top-[40px] md:left-[38px]'>
          {/* Enter OTP section */}
          <div className='md:w-[370px] md:min-h-[196px] 2xs:w-[295px] 2xs:h-[168px] gap-[40px] flex flex-col '>
            <div className='md:w-[370px] md:h-[108px] 2xs:w-[272px] 2xs:h-[80px] flex flex-col gap-[6px]'>
              <div className='md:w-[135px] md:h-[42px] 2xs:w-[111px] 2xs:h-[29px] md:text-[28px] md:leading-[42px] 2xs:text-[22px] font-bold leading-[28.8px] text-CustomeTeal flex '>
                Enter OTP
              </div>
              <div className='md:w-[370px] md:h-[45px]'>
                <div className='md:w-[370px] 2xs:w-[272px] h-[30px]'>
                  <p>We have sent an OTP on your <span className='md:inline-block 2xs:hidden'>Phone Number</span> <span className='md:hidden 2xs:inline-block'>Email</span></p>
                </div>

                <div className='flex items-center justify-center 2xs:w-[268px] 2xs:h-[15px] 2xs:gap-[10px] md:w-[178px] md:h-[30px] md:gap-[30px] '>
                  <div className='text-black 2xs:text-[14px] md:text-[18px] leading-[30px] font-semibold whitespace-nowrap'>
                    <span className='md:inline-block 2xs:hidden'>+91 8355821911</span>
                    <span className='md:hidden 2xs:inline-block'>samruddhi.shirke@balancenutrition.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text box to Enter OTP */}
            <div className='w-[237px] h-[48px] flex items-center justify-between gap-[30px]'>
              {
                otp.map((ele, i) => {
                  return (
                    <div key={i} className='w-[47.04px] h-[48px] flex items-center justify-center'>
                      <input
                        className="w-[47.04px] h-[48px] border-2 text-[24px] font-bold leading-[20px] border-black rounded-[6px] text-center"
                        type="text"
                        name="otp"
                        maxLength="1"
                        value={otp[i]}
                        onChange={(e) => handleChange(e.target.value, i)}  // Pass the value and index
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                  );
                })
              }
            </div>
          </div>

          {/* Sign and timer DIV */}
          <div className='md:w-[519px] md:h-[80px] gap-[10px] 2xs:w-[295px] 2xs:h-[80px] flex flex-col '>
            <div onClick={handleSignin} className='md:w-[519px] md:h-[48px] md:gap-[20px] 2xs:w-[295px] 2xs:h-[48px] 2xs:gap-[20px] rounded-[30px] bg-CustomeTeal flex items-center justify-center text-white cursor-pointer'>
              Sign In
            </div>

            <div className='md:w-[full] md:h-[22px] md:gap-[12px] text-CustomeTeal flex items-center justify-center font-bold leading-[22px] text-[14px]'>
              Resend OTP
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnterOTP;
