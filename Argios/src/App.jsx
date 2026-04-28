import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeMain from './Views/home/HomeMain'
import AboutMain from './Views/About/AboutMain'
import ServicesMain from './Views/service/ServicesMain'
import ProjectMain from './Views/Project/ProjectMain'
import { AdminRoute, PublicRoute, RouteServices } from './Services/routes_services'
import HealthFoodMain from './Views/health-food/HealthFoodMain'
import NewsMain from './Views/News/NewsMain'
import ContactMain from './Views/Contact/ContactMain'
import ShopMain from './Views/Shop/ShopMain'
import PublicLayout from './Views/layout'
import LoginPage from './Views/Admin/LoginPage'
import AdminMain from './Views/Admin/AdminMain'
import AdminDashboard from './Views/Admin/admin_dashboard'



function App() {

  return (
    <>
      <Routes>
        <Route path={RouteServices.home} element={
          <PublicRoute>
            <PublicLayout />
          </PublicRoute>
        }>

          <Route index element={<HomeMain />}></Route>
          <Route path={RouteServices.about} element={<AboutMain />}></Route>
          <Route path={RouteServices.service} element={<ServicesMain />}></Route>
          <Route path={RouteServices.project} element={<ProjectMain />}>
          </Route>
          <Route path={`${RouteServices.projectDetails}/:id`} element={<HealthFoodMain />}></Route>
          <Route path={RouteServices.news} element={<NewsMain />}></Route>
          <Route path={RouteServices.shop} element={<ShopMain />}></Route>
          <Route path={RouteServices.contact} element={<ContactMain />}></Route>

        </Route>
        <Route path={RouteServices.admin} element={<AdminMain />}></Route>
        <Route path={RouteServices.adminDashboard} element={<AdminRoute>
          <AdminDashboard />
        </AdminRoute>}>



        </Route>
        
      </Routes>
    </>
  )
}


export default App
