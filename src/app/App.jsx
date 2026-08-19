import Portfolio from '../features/profile/ProfilePage.jsx';
import Admin from '../pages/AdminPage.jsx';
import Login from '../features/auth/LoginPage.jsx';
import PrivateRoute from '../features/auth/RequireAuth.jsx';
import { Route, Routes } from 'react-router-dom';
import { useUser } from '../features/auth/AuthProvider.jsx';

function App() {
  const { user } = useUser();

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