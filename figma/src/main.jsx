import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { ThemeContexProvider } from './context/theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContexProvider>
    <App />
    </ThemeContexProvider>
    
  
  </React.StrictMode>
)
