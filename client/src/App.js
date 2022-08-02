import React from 'react';
import './App.css';
import LandingPage from "./components/landing/LandingPage"
import JourneyView from './components/journeys/JourneyView';
import StationView from './components/stations/StationView'
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <NavBar/>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/journeys" element={<JourneyView/>} />
            <Route path="/stations" element={<StationView/>} />
          </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
