import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { UserContextProvider } from '../features/auth/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider >
  </StrictMode>
)
