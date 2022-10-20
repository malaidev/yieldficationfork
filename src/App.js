import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { MenuConnectProvider } from './context/MenuConnectContext';
import Home from './components/Home';
import Dashboard from './pages/Dashboard';
import Stake from './pages/Stake';
import Nft from './pages/Nft';
import Vest from './pages/Vest.js';
import Perpetual from './pages/Perpetual.js';
import PerpsStats from './pages/PerpsStats.js';

import './scss/global.scss';
import './App.css';

function App() {
  
  return (
    <>
      <MenuConnectProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home /> }>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="stake" element={<Stake />} />
                <Route path="nft" element={<Nft />} />
                <Route path="vesting" element={<Vest />} />
                <Route path="perpetual" element={<Perpetual />} />
                <Route path="leaderboard" element={<PerpsStats />} />
              </Route>
            </Routes>  
          </div>
        </BrowserRouter>
      </MenuConnectProvider>
    </>
  );
}

export default App;
