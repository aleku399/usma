'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (loginId: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginId = localStorage.getItem('loginId');
    const loginTime = localStorage.getItem('loginTime');
    const oneDayInMs = 24 * 60 * 60 * 1000;

    if (loginId && loginTime) {
      const now = new Date().getTime();
      if (now - parseInt(loginTime, 10) > oneDayInMs) {
        // Auto-logout if more than a day has passed
        localStorage.removeItem('loginId');
        localStorage.removeItem('loginTime');
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const login = (loginId: string) => {
    const now = new Date().getTime();
    localStorage.setItem('loginId', loginId);
    localStorage.setItem('loginTime', now.toString());
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('loginId');
    localStorage.removeItem('loginTime');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
