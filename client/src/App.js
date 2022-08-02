import React from 'react';
import './App.css';
import LandingPage from "./components/landing/LandingPage"
import JourneyView from './components/journeys/JourneyView';
import StationView from './components/stations/StationView'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <div className="app-container">
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/journeys" element={<JourneyView/>} />
            <Route path="/stations" element={<StationView/>} />
          </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
