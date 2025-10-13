// import LandingPage from './pages/landingPage.jsx'
// import PageAdmin from './pages/admin/appAdmin.jsx'
// import Login from './pages/auth/login.jsx';
// import ProjectAdmin from './pages/admin/projectAdmin.jsx';
import Portfolio from './pages/landingPage.jsx';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Portfolio />} />
      {/* <Route path='/admin' element={<PageAdmin />} />
      <Route path='/login' element={<Login />} />
      <Route path='/projects' element={<ProjectAdmin />} /> */}
    </Routes>
  );
}

export default App;