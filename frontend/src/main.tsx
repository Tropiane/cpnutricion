import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Cpnutricion } from './Cpnutricion'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cpnutricion />
  </StrictMode>,
)
