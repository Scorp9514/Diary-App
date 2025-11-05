import "./css/app.css"

import {Routes,Route,UNSAFE_DataRouterStateContext, BrowserRouter} from 'react-router-dom'
import {useState} from 'react';

import NavBar from "./components/NavBar"
import Calendars from "./components/Calendars.jsx"
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";


function App() {

  return (
    <>
      <div className="background">
        <NavBar/>
        <main>
          <Home/>
        </main>
        
      </div>
      
    </>
  )
}

export default App
