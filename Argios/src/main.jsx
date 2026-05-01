import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppDataProvider } from './Controllers/DataController/ProjectCardData.jsx'
import { UserLoginData } from './Controllers/AuthController.jsx'
import { CategoryDataProvider } from './Controllers/DataController/Add_Category.jsx'
// import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <AppDataProvider>
        <UserLoginData>
          <CategoryDataProvider>

            <App />
          </CategoryDataProvider>
        </UserLoginData>

        {/* </UserLoginData> */}
      </AppDataProvider>
    </BrowserRouter>
  </StrictMode>,
)
