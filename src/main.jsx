import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LocationSearch from './LocationSearch'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/>
    <Board/> */}
    <LocationSearch/>
  </StrictMode>
)
