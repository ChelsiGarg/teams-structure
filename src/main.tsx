// React libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'

// React Components
import App from './App.tsx'
import Header from './components/Header.tsx'

// Styling
import './index.css'
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
