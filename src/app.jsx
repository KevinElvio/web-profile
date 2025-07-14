import LandingPage from './pages/landingPage.jsx'
import PageAdmin from './pages/admin/appAdmin.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/admin' element={<PageAdmin />} />
    </Routes>
  );
}

export default App;