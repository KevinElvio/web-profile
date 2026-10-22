import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { UserContextProvider } from '../features/auth/AuthProvider'
import { ThemeProvider } from '../shared/lib/theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider >
    </ThemeProvider>
  </StrictMode>
)
