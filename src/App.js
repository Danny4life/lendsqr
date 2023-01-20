
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from "./pages/login/Login";
import UserDetails from './pages/userdetails/UserDetails';
import UserPage from "./pages/userpage/UserPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={ <Login />} />
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/userPage" element={ <UserPage />} />
          <Route path="/userDetail" element={ <UserDetails />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
