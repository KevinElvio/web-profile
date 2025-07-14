import LandingPage from './pages/landingPage.jsx'
import PageAdmin from './pages/admin/appAdmin.jsx'
import Login from './pages/auth/login.jsx';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/admin' element={<PageAdmin />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;