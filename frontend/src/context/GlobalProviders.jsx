import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './userContext';


export default function GlobalProviders({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </UserProvider>
  );
}