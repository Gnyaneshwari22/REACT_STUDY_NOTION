import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';


function  NavBar(props) {
   let isLoggedIn=props.isLoggedIn;
   let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
           <Link to="/">
              <img src={logo}  alt='logo' height={32} width={160} loading='lazy' ></img>
           </Link>

           <nav>
              <ul className='flex text-white gap-x-6 '>
                  <li  className='ml-3 mr-3'>
                      <Link to="/">Home</Link>
                  </li>
                  <li  className='ml-3 mr-3'>
                      <Link to="#">About</Link>
                  </li>
                  <li>
                      <Link to="#">Contact</Link>
                  </li>
              </ul>
           </nav>

           {/* Login-signup-Logout-Dashboard */}

              <div className='flex items-center gap-x-4'>
                  { !isLoggedIn &&
                    <Link to="/login" >
                        <button className='bg-richblack-800 text-white 
                        py-[8px] px-[12px] rounded-[8px] border-richblack-700 '>
                            Login
                        </button>
                    </Link>
                  } 
                  { !isLoggedIn &&
                    <Link to="/signup" >
                        <button className='bg-richblack-800 text-white 
                         py-[8px] px-[12px] rounded-[8px] border-richblack-700 '>
                            SignUp
                        </button>
                    </Link>
                  }
              
                  { isLoggedIn &&
                    <Link to="/" >
                      <button className='bg-richblack-800 text-white 
                         py-[8px] px-[12px] rounded-[8px] border-richblack-700' onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged out successfully");
                        }}>
                            Log Out
                        </button>
                    </Link>
                  }            
                  { isLoggedIn &&
                    <Link to="/dashboard" >
                        <button className='bg-richblack-800 text-white 
                        py-[8px] px-[12px] rounded-[8px] border-richblack-700 '>
                            Dashboard
                        </button>
                    </Link>
                  }
              </div>

    </div>
  )
}

export default  NavBar;