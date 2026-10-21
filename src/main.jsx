import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './pages/css/style1.css'

import RoutesApp from './rotas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesApp />
  </StrictMode>,
)
