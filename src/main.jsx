import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Analytics />
  </StrictMode>,
)

AOS.init({
  duration: 700,
  once: true,
  // disable: 'mobile'
})