import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));

    const [user, setUser] = useState(storedUser);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('userInfo');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    const login = (userData) => {
        localStorage.setItem('userInfo', JSON.stringify(userData));
        setUser(userData);
    }

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    }

    return (
        < AuthContext.Provider value={{ user, login, logout, loading }} >
            {children}
        </AuthContext.Provider >
    );
}
