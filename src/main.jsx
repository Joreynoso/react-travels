import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// --> import provider
import { TravelProvider } from './context/TravelContext.jsx'

createRoot(document.getElementById('root')).render(
  <TravelProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </TravelProvider>
)
