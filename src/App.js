import { useState } from "react";
import Login from "./Login";
import Users from "./Users";
import About from "./About"
import "./App.css"


export const Introduction=({setModalIsOpen})=>{
  
  const openModal = () =>{
    setModalIsOpen(true)

  }
  return(
    <>
    <button className="login" onClick={openModal}>Login</button>
    <h1 className="welcome">Welcome</h1>
    

    
    </>

  )
}
const App =()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <About/>
      <Login setIsLoggedIn={setIsLoggedIn}/>
      <Users isLoggedIn={isLoggedIn}/>
    </div>
  )
}
export default App;