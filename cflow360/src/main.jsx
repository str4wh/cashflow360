import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="<243535724202-bin16sdu775erv8u9of4ukhnbqichu2i.apps.googleusercontent.com>">
      
    </GoogleOAuthProvider>
    <App />
  </StrictMode>,
)
