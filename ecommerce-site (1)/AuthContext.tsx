import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const savedToken = Cookies.get('token');
    if (savedToken) setToken(savedToken);
  }, []);

  const login = (newToken) => {
    Cookies.set('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    Cookies.remove('token');
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
