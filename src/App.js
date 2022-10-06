import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import DashboardPage from './pages/DashboardPage';
import Profile from './pages/Profile'
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signin' element={<SignIn/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path = '/dashboard' element={<DashboardPage/>}/>
          </Route>
          
          <Route path = '/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
