import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import DashboardPage from './pages/DashboardPage';
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Carts from './pages/Carts'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path = '/dashboard' element={<DashboardPage/>}/>
          <Route path = '/profile' element={<Profile/>}/>
          <Route path = '/orders' element={<Orders/>}/>
          <Route path = '/carts' element={<Carts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
