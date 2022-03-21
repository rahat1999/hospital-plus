import { useContext } from 'react';
import { AuthContext } from './../Context/AuthProvider';


const useAuth = () => {
    /*  -------return useContext(AuthContext) ------- evabey o lekha jay*/
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;