import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));

    const [user, setUser] = useState(storedUser);

    const login = (userData) => {
        localStorage.setItem('userInfo', JSON.stringify(userData));
        setUser(userData);
    }

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    }

    return (
        < AuthContext.Provider value={{ user, login, logout }} >
            {children}
        </AuthContext.Provider >
    );
}
