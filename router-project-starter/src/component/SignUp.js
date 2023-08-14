import React from 'react'
import Template from './Template';
import signUpImg from "../assets/signup.png"

function SignUp(props) {
  let setIsLoggedIn= props.setIsLoggedIn;

  return (
    <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build Sills for today, tomorrow and beyond."
        desc2="Education to future-proof your career."
        image={signUpImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      /> 
  )
}

export default SignUp;