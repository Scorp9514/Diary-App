import "./css/app.css"

import {Routes,Route,UNSAFE_DataRouterStateContext} from 'react-router-dom'
import {useState} from 'react';

import NavBar from "./components/NavBar"
import Calendars from "./components/calendars"
import Home from "./pages/Home";

function App() {

  return (
    <>

      <div className="background">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
