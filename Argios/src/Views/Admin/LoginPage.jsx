import { useState } from "react";
import { supabase } from "../../Backend/supabase_client";
import { UserData } from "../../Controllers/AuthController";
import { User } from "lucide-react";
import { useNavigate } from "react-router";
import { RouteServices } from "../../Services/routes_services";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {setUserSession, sessionToken, saveUserProfile} = UserData();
    const navigate = useNavigate();
    

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            alert(error.message);
            saveUserProfile(null);
        } else {
            setUserSession(data.session.access_token);
            saveUserProfile(data.user);
            navigate(RouteServices.adminDashboard);
        }
        setLoading(false);
    }

    return (
        <main className="py-6 flex justify-center items-center flex-col">
            <h1 className="text-[48px] font-semibold">Welcome Back</h1>
            <p className="font-semibold mb-4 text-[14px]">Welcome back! Please enter your details.</p>
            
            <form onSubmit={handleLogin} className="bg-gray-200 px-10 py-4 w-150 rounded-xl">
                <div className="flex flex-col gap-2">
                    <p className="text-[24px] text-left">Email</p>
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full text-[#878680] bg-white rounded-2xl px-4 py-2 mb-4" 
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-[24px] text-left">Password:</p>
                    <input 
                        type="password"
                        placeholder="********"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="w-full text-[#878680] bg-white rounded-2xl px-4 py-2 mb-4" 
                        required
                    />
                </div>

                <div className="flex flex-row justify-between mb-4">
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" /> 
                        <p className="font-semibold">Remember password</p>
                    </div>
                    <span className="font-semibold cursor-pointer">Forgot Password</span>
                </div>

                <div className="flex flex-col gap-2">
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="bg-[#EEC044] text-white px-10 py-3 mb-4 rounded-2xl font-bold text-[18px] hover:bg-[#d9a93d] transition-all shadow-lg disabled:opacity-50"
                    > 
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                    <button type="button" className="bg-white px-10 py-3 mb-4 rounded-2xl font-bold text-[18px] shadow-lg">
                        Sign in with Google
                    </button>
                </div>
                <p>Don't have an account? <span className="text-blue-600 cursor-pointer">Sign up for free!</span></p>
            </form>

            <p>{sessionToken ?? "Not Available"}</p>
        </main>
    );
}