import { useState } from "react";
import Login from "./Login";
import Users from "./Users";


export const Introduction=({setModalIsOpen})=>{
  
  const openModal = () =>{
    setModalIsOpen(true)

  }
  return(
    <>
    <h1>Welcome</h1>
    <button className="login" onClick={openModal}>Login</button>

    
    </>

  )
}
const App =()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <Login setIsLoggedIn={setIsLoggedIn}/>
      <Users isLoggedIn={isLoggedIn}/>
    </div>
  )
}
export default App;