import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Form from './pages/Form';
import Dashboard from './pages/Dashboard';
import TopPanel from './components/TopPanel';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <div className="App font-montserrat relative">
      <TopPanel />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
      {location.pathname !== '/' && <Navigation />}
    </div>
  );
}

export default App;
