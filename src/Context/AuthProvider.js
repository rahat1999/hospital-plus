import { createContext } from 'react';
import useFirebase from './../hooks/useFirebase';
export const AuthContext = createContext(null)//null diley hoy diley o hoy default value
const AuthProvider = ({ children }) => {
    const allContext = useFirebase()

    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;