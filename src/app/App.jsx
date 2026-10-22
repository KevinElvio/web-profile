import { lazy, Suspense } from 'react';
import Portfolio from '../features/profile/ProfilePage.jsx';
import { Route, Routes } from 'react-router-dom';
import { useUser } from '../features/auth/AuthProvider.jsx';

const Admin = lazy(() => import('../pages/AdminPage.jsx'));
const Login = lazy(() => import('../features/auth/LoginPage.jsx'));
const PrivateRoute = lazy(() => import('../features/auth/RequireAuth.jsx'));

function RouteFallback() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#fff8e7] font-black text-[#17120d]">
            Loading...
        </div>
    );
}

function App() {
    const { user } = useUser();

    return (
        <Suspense fallback={<RouteFallback />}>
            <Routes>
                <Route path='/' element={<Portfolio />} />
                <Route path='/login' element={!user ? <Login /> : <Admin />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/admin' element={<Admin />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;