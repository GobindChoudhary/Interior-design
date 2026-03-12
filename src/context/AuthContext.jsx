import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    useEffect(() => {
        // Check local storage for existing session
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mocking an API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const userData = { email, name: email.split('@')[0], id: '123' };
                    setUser(userData);
                    localStorage.setItem('user', JSON.stringify(userData));
                    resolve(userData);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    };

    const signup = async (data) => {
        // Mocking an API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const userData = { 
                    email: data.email, 
                    name: data.name, 
                    mobile: data.mobile,
                    id: Date.now().toString() 
                };
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                resolve(userData);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const openAuthModal = () => setIsAuthModalOpen(true);
    const closeAuthModal = () => setIsAuthModalOpen(false);

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            login, 
            signup, 
            logout, 
            isAuthModalOpen, 
            openAuthModal, 
            closeAuthModal 
        }}>
            {children}
        </AuthContext.Provider>
    );
};
