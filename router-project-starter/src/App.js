import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from './component/NavBar';
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';
import DashBoard from './component/DashBoard';
import {  useState } from "react";
import PrivateRoute from "./component/PrivateRoute";


function App() {


   const [isLoggedIn, setIsLoggedIn]  = useState(false);

  //  useEffect( () => {
  //   console.log("hello in app");
  //   setIsLoggedIn(false);
  //  })
    
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <NavBar   
          isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>  

        <Routes>
             <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
             <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
             <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />}/>
             <Route path="/dashboard" element={
                   <PrivateRoute isLoggedIn={isLoggedIn} >
                       <DashBoard />
                   </PrivateRoute>
                }/>   
        </Routes>
        
    </div>
  )
}

export default App; 