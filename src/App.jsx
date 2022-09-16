import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./Context/UserContext";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import WelcomePage from "./Pages/WelcomePage";
import { getUserData } from "./Services/UserData";


function App() {
  const [login, setLogin] = useState(getUserData());

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ login, setLogin }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<WelcomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={ <Checkout /> } />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
