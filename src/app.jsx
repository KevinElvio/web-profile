import Portfolio from './pages/landingPage.jsx';
import Admin from './pages/AdminPage.jsx';
import Login from './pages/login.jsx';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Portfolio />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;