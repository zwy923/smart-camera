import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import Settings from './components/Settings';
import LiveView from './components/LiveView';

function App() {
  return (
    <Router>
      <div>

        <Routes> 
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/live" element={<LiveView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
