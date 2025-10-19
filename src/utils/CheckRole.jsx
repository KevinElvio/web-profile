import Cookies from 'cookie-universal';

export const checkRole = () => {
    const cookies = Cookies();
    const auth = cookies.get('Auth');
    if (!auth) {
        
    }
};