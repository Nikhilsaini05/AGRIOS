import { Outlet } from "react-router";
import Admin_navbar from "./Admin_navbar";
import Sidebar from "./sidebar";

export default function AdminLayout(){
    return <>
    <div className="grid grid-cols-[300px_1fr]">
        <Sidebar/>
        <div className="h-screen">
            <Admin_navbar/>
            <div className="h-[calc(100vh-80px)] overflow-y-auto">
                <Outlet/>
            </div>
        </div>
    </div>
    </>
}