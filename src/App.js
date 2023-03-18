import React, { useState } from 'react'
import UserManagement from './pages/UserManagement';
import Dashboard from './pages/Dashboard';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Database from './pages/Database';

function App() {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div className="App dashboard w-full min-h-screen h-fit bg-gradient-to-t to-[#161520] from-[#06040c] text-[#00b38a]">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout setShowSidebar={setShowSidebar} showSidebar={showSidebar} />}>
            <Route index element={<Dashboard showSidebar={showSidebar}/>} />
            <Route path="/dashboard" element={<Dashboard showSidebar={showSidebar}/>} />
            <Route path="/database" element={<Database showSidebar={showSidebar}/>} />
            <Route path="/user-manage" element={<UserManagement showSidebar={showSidebar}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
