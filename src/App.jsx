import './app.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/landing/Landing';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
