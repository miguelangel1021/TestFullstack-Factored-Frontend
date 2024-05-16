import React from 'react';
import './App.css';
import { useState } from 'react';
import Login from './components/login';
import Employee from './components/employee';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)}/>} />
          <Route
            path="/employee"
            element={isLoggedIn ? <Employee onLogout = {() =>setIsLoggedIn(false)} /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
