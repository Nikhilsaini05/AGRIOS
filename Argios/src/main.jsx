import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppDataProvider } from './Controllers/DataController/ProjectCardData.jsx'
import { UserLoginData } from './Controllers/AuthController.jsx'
// import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <AppDataProvider>
        <UserLoginData>

          <App />
        </UserLoginData>

        {/* </UserLoginData> */}
      </AppDataProvider>
    </BrowserRouter>
  </StrictMode>,
)
