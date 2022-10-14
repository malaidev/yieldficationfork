import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { MenuConnectProvider } from './context/MenuConnectContext';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

import './scss/global.scss';
import './App.css';

function App() {
  return (
    <>
      <MenuConnectProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home/>}>
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
            </Routes>  
          </div>
        </BrowserRouter>
      </MenuConnectProvider>
    </>
  );
}

export default App;
