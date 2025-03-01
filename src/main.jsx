import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext'; // Add this line

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MovieProvider> {/* Add this line */}
        <App />
      </MovieProvider> {/* Add this line */}
    </BrowserRouter>
  </StrictMode>,
);
