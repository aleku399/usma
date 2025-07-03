'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (loginId: string) => void;
  logout: () => void;
  clientId: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientId, setClientId] = useState<string | null>(null);

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
        setClientId(null);
      } else {
        setIsLoggedIn(true);
        setClientId(loginId);
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
    <AuthContext.Provider value={{ isLoggedIn, login, logout, clientId }}>
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
