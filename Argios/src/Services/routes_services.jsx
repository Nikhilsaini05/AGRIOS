import { Navigate } from "react-router";
import { UserData } from "../Controllers/AuthController"
import { Route } from "lucide-react";

export const RouteServices = {
    home : "/",
    about : "/about",
    service: "/service",
    project: "/project",
    projectDetails: "/project-details",
    news: "/news-grid",
    shop: "/shop",
    contact: "/contact",
    admin: "/Admin",
    adminDashboard: "/dashboard"
}





export function AdminRoute({children}){
    const {user} = UserData();

    if(!user){
        return <Navigate to={RouteServices.admin} replace/>
    }

    return children;
}

export function PublicRoute({children}){
    const {user} = UserData();

    if(user){
        return <Navigate to={RouteServices.adminDashboard} replace/>
    }
    return children;
}
