
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from "./pages/login/Login";
import UserPage from "./pages/userpage/UserPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/lendsqr" element={ <Login />} />
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/userPage" element={ <UserPage />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
