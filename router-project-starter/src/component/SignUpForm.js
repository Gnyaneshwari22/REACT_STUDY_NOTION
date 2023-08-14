import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

function SignUpForm(props) {

    let setIsLoggedIn=props.setIsLoggedIn;

    const navigate= useNavigate();
    const [formData, setFormData] =useState({
        firstName:"", lastName:"",
        emailAdd:"",
        password:"",confirmPassword:""
    })

    const [showPassowrd,setShowPassword] =useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");



    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        // else{
        //     toast.success("Account created successfully");
        //     navigate('/');
        // }

        setIsLoggedIn(true);
        toast.success("Account Created..");
        const accountData={
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("printing Sign In Deatils......");
        console.log(finalData);

        navigate("/dashboard");
     }

  return (
    <div >
         {/* student-Instructor tab */}
            <div  className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType === "student"?
                   "bg-richblack-900 text-richblack-5"
                   :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                      onClick={()=> setAccountType("student")}>
                         student
                </button>

                <button  className={`${accountType === "instructor"  ?
                   "bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                     onClick={() => setAccountType("instructor")}>
                      Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} >
                 {/* frst and last name */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <lable className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>

                        <input
                            required
                            name="firstName"
                            onChange={changeHandler}
                            type='text'
                            placeholder='Enter your First Name'
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] hover:border-b-2'
                        />
                    </lable>
                    
                    <lable>
                        <p>Last Name <sup>*</sup></p>

                        <input
                            required
                            name="lastName"
                            onChange={changeHandler}
                            type='text'
                            placeholder='Enter your Last Name'
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] hover:border-b-2 '
                        />
                    </lable>
                </div>
                
                {/* email address */}
                <div className='mt-[20px]'>
                    <lable className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>

                        <input
                            required
                            name="emailAdd"
                            onChange={changeHandler}
                            type='email address'
                            placeholder='Enter your Email Id'
                            value={formData.emailAdd}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] hover:border-b-2'
                        />
                    </lable>
                </div>

                 {/* Create Password and confirm password */}

                <div className='w-full flex gap-x-4 mt-[20px]'>
                    <lable className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>

                        <input
                            required
                            name="password"
                            onChange={changeHandler}
                            type={showPassowrd ?("text"):("password")}
                            placeholder='Enter your password'
                            value={formData.createPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] hover:border-b-2'
                        />
                        {/* eye wali button */}
                         <span className='absolute right-3 top-[38px] cursor-pointer' onClick={ () => setShowPassword( (prev) => !prev)}>
                             {showPassowrd? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                         </span>

                    </lable>
                     
                    <lable className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Passowrd <sup>*</sup></p>

                        <input
                            required
                            name="confirmPassword"
                            onChange={changeHandler}
                            type=  {showConfirmPassword ?("text"):("password")}
                            placeholder='Enter your password'
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  hover:border-b-2'
                        />
                        {/* eye wali button */}
                          <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)} >
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}   
                         </span>
                    </lable>
                </div>

                 <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                 </button>             
            </form>

    </div>
  )
}

export default SignUpForm