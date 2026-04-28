import { UserData } from "../../Controllers/AuthController"

export default function AdminDashboard(){
    const {user} = UserData();
    return <>
    <h1>Welcome Admin!</h1>
    <h2>Welcome {user.email}</h2>
    </>
}