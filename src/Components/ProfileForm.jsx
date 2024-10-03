import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useDispatch } from 'react-redux';
import { setDob,setEmail,setGender,setMobileNo,setName,setaggreementChecked } from '../Slice/Slice';

const ProfileForm = () => {

  const [gender, setGENDER] = useState("");
  const [emailid, setEMAIL] = useState("");
  const [name, setNAME] = useState("");
  const [phone, setPhoneNO] = useState("");
  const [dob, setDOB] = useState("");
  const [isAgreementChecked, setisAgreementChecked] = useState(false);

  const dispatch = useDispatch()

  function handleRegistration(){

      if(!emailid || !name || !phone || !dob || !gender || !isAgreementChecked){
        alert("Please all the details")
        return;
      }

      


      console.log(name);
      console.log(emailid);
      console.log(phone);
      console.log(dob);
      console.log(gender);
      console.log(isAgreementChecked);


      dispatch(setName(name))
      dispatch(setEmail(emailid))
      dispatch(setMobileNo(phone))
      dispatch(setDob(dob))
      dispatch(setGender(gender))
      dispatch(setaggreementChecked(isAgreementChecked))

      alert("Data saved")
      setGENDER("")
      setEMAIL("")
      setNAME("")
      setPhoneNO("")
      setDOB("")
      setisAgreementChecked(false)
      
     

  }


  return (
    // <div className="w-[620px] h-[734px] p-[38px_50.5px] border-[0.8px] bg-white  border-gray-300 rounded-tl-[15px] opacity-100">
    //   <h2 className="text-2xl font-semibold mb-2">Complete your Profile.</h2>
    //   <p className="text-gray-600 mb-4">Please enter your details below to continue.</p>
      
    //   <form className="space-y-4">
    //     {/* Full Name */}
    //     <div>
    //       <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Full Name</label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         placeholder="Full Name"
    //         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
    //         required
    //       />
    //     </div>

    //     {/* Email */}
    //     <div>
    //       <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         placeholder="Email"
    //         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
    //         required
    //       />
    //     </div>

    //     {/* Phone */}
    //     <div>
    //       <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Phone</label>
    //       <div className="flex">
    //         <span className="flex items-center px-3 bg-gray-100 border border-gray-300 rounded-l-md">+91</span>
    //         <input
    //           type="tel"
    //           id="phone"
    //           name="phone"
    //           placeholder="8355821911"
    //           className="w-full p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
    //           required
    //         />
    //       </div>
    //     </div>

    //     {/* Date of Birth */}
    //     <div>
    //       <label className="block text-gray-700 font-medium mb-1" htmlFor="dob">Date of Birth</label>
    //       <input
    //         type="date"
    //         id="dob"
    //         name="dob"
    //         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
    //         required
    //       />
    //     </div>

    //     {/* Gender */}
    //     <div>
    //       <label className="block text-gray-700 font-medium mb-1">Select your Gender</label>
    //       <div className="flex space-x-4">
    //         <label className="flex items-center">
    //           <input type="radio" name="gender" value="male" className="mr-1" /> Male
    //         </label>
    //         <label className="flex items-center">
    //           <input type="radio" name="gender" value="female" className="mr-1" /> Female
    //         </label>
    //         <label className="flex items-center">
    //           <input type="radio" name="gender" value="other" className="mr-1" /> Other
    //         </label>
    //       </div>
    //     </div>

    //     {/* Terms and Conditions */}
    //     <div>
    //       <label className="flex items-center">
    //         <input type="checkbox" className="mr-2" required />
    //         I agree to the terms and conditions.
    //       </label>
    //     </div>

    //     {/* Register Button */}
    //     <button
    //       type="submit"
    //       className="w-full bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition duration-200"
    //     >
    //       Register
    //     </button>

    //     {/* Sign In Link */}
    //     <p className="mt-4 text-center">
    //       Already have an account? <a href="#" className="text-indigo-600">Sign In</a>
    //     </p>
    //   </form>
    // </div>
    <>
        <div className='2xs:w-[335px] 2xs:m-auto 2xs:min-h-[649px] p-[20px] 2xs:top-[-12px] bg-white shadow-[0px_0px_10px_0px_#7F7F7F26]  2xs:left-[20px] 2xs:p-[20px] md:w-[620px] md:h-[734px] rounded-[15px]  md:flex md:flex-col '>
          <div className='rounded-[15px]  m-auto md:w-[519px] md:h-[658px] 2xs:w-[295px =] 2xs:h-[609px] flex flex-col md:gap-[40px] 2xs:gap-[20px]'>
                <div className='md:w-[356px] md:h-[78px] 2xs-w-[277px] 2xs:h-[49px] flex flex-col justify-between '>
                    <p className='md:font-semibold	md:text-[28px]  2xs:[24px] text-CustomeTeal md:leading-[42px]'>Complete your Profile.</p>
                    <p className='2xs:font-normal 2xs:text-[14px] leading-[30px] md:text-[18px]'>Please enter your details below to continue.</p>
                </div>

                <div className='md:w-[519px]  md:h-[40px] 2xs:w-[295px] 2xs:h-[36px] flex flex-col 2xs:gap-[20px] md:gap-[30px]'>
                      {/* // Name /? */}
                      <div className='md:w-[519px] md:h-[40px] 2xs:w-[295px] 2xs:h-[36px] 2xs:gap-[40px] flex items-center border-b-2 border-b-gray-400'>


                        <div>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5 21V19C20.5 17.9391 20.0786 16.9217 19.3284 16.1716C18.5783 15.4214 17.5609 15 16.5 15H8.5C7.43913 15 6.42172 15.4214 5.67157 16.1716C4.92143 16.9217 4.5 17.9391 4.5 19V21" stroke="url(#paint0_linear_1_21559)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11Z" stroke="url(#paint1_linear_1_21559)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_1_21559" x1="20.5" y1="15" x2="3.9905" y2="18.7671" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF8A00"/>
                        <stop offset="0.613956" stop-color="#FF9E00"/>
                        <stop offset="0.994515" stop-color="#EEBA00"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1_21559" x1="16.5" y1="3" x2="7.87859" y2="3.7377" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF8A00"/>
                        <stop offset="0.613956" stop-color="#FF9E00"/>
                        <stop offset="0.994515" stop-color="#EEBA00"/>
                        </linearGradient>
                        </defs>
                        </svg>

                        </div>
                        <div>
                              <input type='text' placeholder='Full Name' value={name} onChange={(e)=>setNAME(e.target.value)} className='h-full w-full border-none outline-none'></input>
                        </div>

                        


                      </div>
                </div>  

                  {/* //Email// */}
                  <div className='md:w-[519px] md:h-[40px] 2xs:w-[295px] 2xs:h-[36px] 2xs:gap-[40px] flex items-center  border-b-2 border-b-gray-400'>

                        <div>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 4H20.5C21.6 4 22.5 4.9 22.5 6V18C22.5 19.1 21.6 20 20.5 20H4.5C3.4 20 2.5 19.1 2.5 18V6C2.5 4.9 3.4 4 4.5 4Z" stroke="url(#paint0_linear_1_21564)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M22.5 6L12.5 13L2.5 6" stroke="url(#paint1_linear_1_21564)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <defs>
                          <linearGradient id="paint0_linear_1_21564" x1="22.5" y1="3.99999" x2="1.03424" y2="6.29592" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF8A00"/>
                          <stop offset="0.613956" stop-color="#FF9E00"/>
                          <stop offset="0.994515" stop-color="#EEBA00"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_1_21564" x1="22.5" y1="6" x2="2.01313" y2="11.0085" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FF8A00"/>
                          <stop offset="0.613956" stop-color="#FF9E00"/>
                          <stop offset="0.994515" stop-color="#EEBA00"/>
                          </linearGradient>
                          </defs>
                          </svg>


                        </div>
                        <div>
                              <input type='email' placeholder='Email' value={emailid} onChange={(e)=>setEMAIL(e.target.value)} className='h-full w-full border-none outline-none'></input>
                        </div>

                        


                      </div>



                  {/* // Number     */}

                  <div className='md:w-[519px] md:h-[40px] 2xs:w-[295px] 2xs:h-[36px] 2xs:gap-[40px] flex items-center  border-b-2 border-b-gray-400'>

                      
                  <PhoneInput
                                                    className='bg-nhaone'
                                                    country={'in'} // Default country
                                                    value={phone}  // Controlled input value
                                                    onChange={setPhoneNO}  // Update phone state
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



                  {/* // BOB  */}

                  <div className='md:w-[519px] md:h-[40px] 2xs:w-[295px] 2xs:h-[36px] 2xs:gap-[40px] flex items-center border-b-2 border-b-gray-400 '>

                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 12.5003C23 11.8751 22.7447 11.2756 22.2903 10.8335C21.8359 10.3915 21.2196 10.1432 20.5769 10.1432H13.3077V9.25926C14.001 9.08409 14.6149 8.69019 15.0534 8.13925C15.4919 7.5883 15.7301 6.91144 15.7308 6.21469C15.7308 3.46475 13.0613 1.70577 12.9483 1.63211C12.8155 1.54597 12.6596 1.5 12.5 1.5C12.3404 1.5 12.1845 1.54597 12.0517 1.63211C11.9387 1.70577 9.26923 3.46475 9.26923 6.21469C9.26991 6.91144 9.50814 7.5883 9.94662 8.13925C10.3851 8.69019 10.999 9.08409 11.6923 9.25926V10.1432H4.42308C3.78044 10.1432 3.16412 10.3915 2.7097 10.8335C2.25529 11.2756 2 11.8751 2 12.5003V14.7915C2.00083 15.6487 2.28389 16.483 2.80769 17.1722V21.1429C2.80769 21.7681 3.06298 22.3676 3.5174 22.8096C3.97181 23.2517 4.58813 23.5 5.23077 23.5H19.7692C20.4119 23.5 21.0282 23.2517 21.4826 22.8096C21.937 22.3676 22.1923 21.7681 22.1923 21.1429V17.1722C22.7161 16.483 22.9992 15.6487 23 14.7915V12.5003ZM10.8846 6.21469C10.8846 4.88195 11.8942 3.81242 12.5 3.28895C13.1058 3.81242 14.1154 4.88195 14.1154 6.21469C14.1154 6.63145 13.9452 7.03114 13.6422 7.32583C13.3393 7.62052 12.9284 7.78608 12.5 7.78608C12.0716 7.78608 11.6607 7.62052 11.3578 7.32583C11.0548 7.03114 10.8846 6.63145 10.8846 6.21469ZM3.61538 12.5003C3.61538 12.2919 3.70048 12.092 3.85195 11.9447C4.00342 11.7973 4.20886 11.7146 4.42308 11.7146H20.5769C20.7911 11.7146 20.9966 11.7973 21.148 11.9447C21.2995 12.092 21.3846 12.2919 21.3846 12.5003V14.7915C21.3846 16.0929 20.3286 17.1791 19.0302 17.2135C18.7063 17.2224 18.3839 17.168 18.0821 17.0537C17.7802 16.9393 17.5049 16.7671 17.2726 16.5475C17.0403 16.3278 16.8556 16.0651 16.7295 15.7748C16.6034 15.4845 16.5385 15.1725 16.5385 14.8573C16.5385 14.649 16.4534 14.4491 16.3019 14.3018C16.1504 14.1544 15.945 14.0716 15.7308 14.0716C15.5166 14.0716 15.3111 14.1544 15.1596 14.3018C15.0082 14.4491 14.9231 14.649 14.9231 14.8573C14.9231 15.4825 14.6678 16.082 14.2134 16.5241C13.759 16.9661 13.1426 17.2144 12.5 17.2144C11.8574 17.2144 11.241 16.9661 10.7866 16.5241C10.3322 16.082 10.0769 15.4825 10.0769 14.8573C10.0769 14.649 9.99183 14.4491 9.84035 14.3018C9.68888 14.1544 9.48344 14.0716 9.26923 14.0716C9.05502 14.0716 8.84958 14.1544 8.69811 14.3018C8.54663 14.4491 8.46154 14.649 8.46154 14.8573C8.46167 15.1726 8.39679 15.4846 8.27075 15.7751C8.14471 16.0655 7.96006 16.3283 7.72774 16.5481C7.49541 16.7679 7.22013 16.9401 6.91818 17.0545C6.61622 17.169 6.29374 17.2234 5.96981 17.2144C4.67144 17.1791 3.61538 16.0929 3.61538 14.7915V12.5003ZM19.7692 21.9286H5.23077C5.01656 21.9286 4.81112 21.8458 4.65964 21.6985C4.50817 21.5511 4.42308 21.3513 4.42308 21.1429V18.448C4.89586 18.6564 5.40654 18.7712 5.92538 18.7858C6.46518 18.8022 7.00279 18.7122 7.50594 18.5213C8.00908 18.3304 8.46737 18.0426 8.85327 17.675C9.00394 17.5322 9.14301 17.3782 9.26923 17.2144C9.6454 17.7023 10.1332 18.0983 10.6939 18.3711C11.2547 18.6438 11.873 18.7858 12.5 18.7858C13.127 18.7858 13.7453 18.6438 14.3061 18.3711C14.8668 18.0983 15.3546 17.7023 15.7308 17.2144C15.8574 17.3775 15.9968 17.5309 16.1477 17.6731C16.8991 18.389 17.9098 18.7887 18.9615 18.7858H19.0766C19.5948 18.771 20.1048 18.6561 20.5769 18.448V21.1429C20.5769 21.3513 20.4918 21.5511 20.3404 21.6985C20.1889 21.8458 19.9834 21.9286 19.7692 21.9286Z" fill="url(#paint0_linear_1_21608)"/>
                      <defs>
                      <linearGradient id="paint0_linear_1_21608" x1="23" y1="1.49999" x2="0.354181" y2="3.34963" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FF8A00"/>
                      <stop offset="0.613956" stop-color="#FF9E00"/>
                      <stop offset="0.994515" stop-color="#EEBA00"/>
                      </linearGradient>
                      </defs>
                      </svg>
 
                              <div className='flex justify-between items-start'>
                                    <input type='date' placeholder='Date of Birth' value={dob}  onChange={(e)=>setDOB(e.target.value)} className='h-full w-full border-none outline-none'></input>
                                      {/* <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect x="3.83325" y="4.16666" width="13.3333" height="13.3333" rx="2" stroke="#242221" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <rect x="3.83325" y="4.16666" width="13.3333" height="13.3333" rx="2" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M13.8334 2.5V5.83333" stroke="#242221" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M13.8334 2.5V5.83333" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M7.16667 2.5V5.83333" stroke="#242221" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M7.16667 2.5V5.83333" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M3.83325 9.16667H17.1666" stroke="#242221" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M3.83325 9.16667H17.1666" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M8.83325 13.3333H12.1666" stroke="#242221" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M8.83325 13.3333H12.1666" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M10.4999 11.6667V15" stroke="#242221" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M10.4999 11.6667V15" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg> */}

                              </div>




</div>


                  {/* // Gender //  */}

                  <div className='md:w-[519px] md:h-[40px] 2xs:w-[295px] 2xs:h-[67px] 2xs:gap-[10px] flex 2xs:flex-col md:flex-row md:items-center  2xs:items-start'>

      
                        <div>
                        Select your Gender:
                        </div>
                            <div className='flex items-center justify-center m-auto 2xs:gap-[4px]'>
                            <label className="flex items-center mr-4">
                          <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setGENDER(e.target.value)}
                            className="form-radio text-blue-500"
                          />
                          <span className="ml-2 text-gray-700">Male</span>
                        </label>
                        <label className="flex items-center mr-4">
                          <input
                            type="radio"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(e) => setGENDER(e.target.value)}
                            className="form-radio text-blue-500"
                          />
                          <span className="ml-2 text-gray-700">Female</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="Other"
                            checked={gender === "Other"}
                            onChange={(e) => setGENDER(e.target.value)}
                            className="form-radio text-blue-500"
                          />
                          <span className="ml-2 text-gray-700">Other</span>
                        </label>
                            </div>
                              
                          


                  </div>


                  {/* // Terms and conditions // */}

                  <div className='md:w-[475px] md:h-[66px] gap-[12px] 2xs:w-[295px] 2xs:h-[80px] flex '>
                              <div className='w-[18px] h-[28px] gap-[10px] px-[5px]'>
                                          <input type='checkbox' checked={isAgreementChecked} onChange={(e)=>setisAgreementChecked(e.target.checked)}></input>
                              </div>

                              <div className='md:w-[445px] md:h-[66px] 2xs:w-[265px] 2xs:h-[80px] flex items-center justify-center'>
                                          <span className='2xs:text-[14px] 2xs:leading-[20px] md:text-[16px]'>I agree to the terms and conditions of the BalanceNutrition.in and consent to follow the norms as stated.
                                          Click here to view our Terms of Use</span>
                              </div>
                  </div>





                  {/* //Registere Button // */}
                <div className='2xs:w-[295px] 2xs:h-[79px] 2xs:gap-[10px] md:w-[519px] md:h-[89px] md:gap-[20px] flex flex-col items-center justify-center'>
                  <div  onClick={handleRegistration} className='md:w-[519px] md:h-[48px] rounded-[30px] 2xs:w-[295px] 2xs:h-[48px] bg-Customgray hover:bg-CustomeTeal  2xs:gap-[10px] grid place-items-center bg cursor-pointer'>
                                        <p className='text-white'>Register</p>  
                  </div>
                  <div className='w-[269px] h-[21px]  grid place-items-center'>
                                      <span className='2xs-[16px] 2xs:leading-[21.68px]'>Already have an account? <span className='text-CustomeTeal cursor-pointer'>Sign In</span></span>
                  </div>
                </div>
          </div>  

            
        </div>
    </>
  );
};

export default ProfileForm;
