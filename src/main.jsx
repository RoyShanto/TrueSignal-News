import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import BreakingNewsTicker from './components/BreakingNewsTicker/BreakingNewsTicker.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { RouterProvider } from 'react-router'
import Routes from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />,
  </StrictMode>,
)
