import Portfolio from './pages/landingPage.jsx';
import Admin from './pages/AdminPage.jsx';
import Login from './pages/login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import { Route, Routes } from 'react-router-dom';
import { useUser } from "../src/components/context/UserContext.jsx";

function App() {
  const {user} = useUser();

  return (
    <Routes>
      <Route path='/' element={<Portfolio />} />
      <Route path='/login' element={!user ? <Login /> : <Admin />} />
      <Route element={<PrivateRoute />}>
        <Route path='/admin' element={<Admin />} />
      </Route>


    </Routes>
  );
}

export default App;