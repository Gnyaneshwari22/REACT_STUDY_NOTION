import React from 'react'
import Template from './Template';
import loginImg from "../assets/login.png"

function Login(props) {
  let setIsLoggedIn=props.setIsLoggedIn
  return (
    <Template
       title="WelCome Back"
       desc1="Build Sills for today, tomorrow and beyond."
       desc2="Education to future-proof your career."
       image={loginImg}
       formtype="login"
       setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login;