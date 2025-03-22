import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Board from './Board.jsx'
import LocationSearch from './locationSearch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/>
    <Board/> */}
    <LocationSearch/>
  </StrictMode>,
)
