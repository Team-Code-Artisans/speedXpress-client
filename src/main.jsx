import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from './App.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import './index.css';


// Rest of your code

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </QueryClientProvider>
  // </React.StrictMode>
)