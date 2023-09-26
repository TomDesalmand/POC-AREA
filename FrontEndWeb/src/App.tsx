import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Login from './components/LoginForm'; // Corrected import path
import Signup from './components/SignupForm'; // Corrected import path
import Signin from './components/SigninFormGoogle'; // Corrected import path
import Navigation from './components/Navigation'; // Corrected import path

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;