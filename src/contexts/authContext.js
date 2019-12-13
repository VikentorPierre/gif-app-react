import React, { useEffect, useState } from 'react';
import app from '../firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [appTitle, setAppTitle] = useState('ImageGal');

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        appTitle
      }}>
      {children}
    </AuthContext.Provider>
  );
};
