import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Register from './pages/Register'
import LoginPage from './pages/LoginPage';
import PrayerPage from './pages/PrayerPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/prayerpage' element={<PrayerPage />} />
      </Routes>
    </>
  );
}

export default App;
