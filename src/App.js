import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import LoginPage from './pages/customer/LoginPage'
import Home from './pages/customer/Home'
import Appointments from './pages/customer/Appointments'
import Messages from './pages/customer/Messages'
import HealthSummary from './pages/customer/HealthSummary'
import BillingAndInsurance from './pages/customer/BillingAndInsurance'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/Health%20Summary" element={<HealthSummary/>} />
          <Route path="/Billing%20&%20Insurance" element={<BillingAndInsurance/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;