import "./css/app.css"

import {Routes,Route,UNSAFE_DataRouterStateContext, BrowserRouter} from 'react-router-dom'
import {useState} from 'react';

import NavBar from "./components/NavBar"
import Calendars from "./components/calendars"
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";


function App() {

  return (
    <>
      <div className="background">
        <NavBar/>
        <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Favorites" element={<Favorites/>}/>
        </Routes>
        
        </main>
        
      </div>
      
    </>
  )
}

export default App
