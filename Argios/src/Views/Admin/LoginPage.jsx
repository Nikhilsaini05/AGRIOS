import LoginPageBGImage from "/Images/adminImages/LoginPage.jpg"

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
    const { setUserSession, saveUserProfile } = UserData();
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
        <section className="bg-cover w-full h-screen"
            style={{
                backgroundImage: `url(${LoginPageBGImage})`,
            }}>
            <main className="py-28 flex justify-center items-center flex-row">

                <div className="bg-[#FFFFFF5D]  w-75 h-100 rounded-l-xl py-28">
                    <h1 className="text-[30px] font-semibold text-white mb-4">Welcome Admin!</h1>
                    <p className="text-[16px] text-white">Manage products, orders, and <br /> customers from your admin panel.</p>
                </div>

                <form onSubmit={handleLogin} className="bg-[#FFFFFF30] px-10 py-4 w-150 h-100 rounded-r-xl">
                    <div className="flex flex-col gap-4 ">
                        <h1 className="text-[40px] font-bold">Sign in</h1>
                        <div className="bg-[#FFFFFF] w-full text-[#7D7D7D] text-[20px] text-left  rounded-3xl px-8 py-4">
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-transparent outline-none border-none"
                                required
                            />
                        </div>

                        <div className="bg-[#FFFFFF] w-full text-[#7D7D7D] text-[20px] text-left  rounded-3xl px-8 py-4">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-transparent outline-none border-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mb-4">
                        <div className="flex flex-row gap-2 pt-4 pl-2">
                            <input type="checkbox" />
                            <p className="font-semibold ">Remember password</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#5F0D24] text-white px-10 py-3 mb-4 rounded-2xl font-bold text-[18px] hover:bg-[#7D1230] transition-all shadow-lg disabled:opacity-50"
                        >
                            {loading ? "Continue in..." : "Continue"}
                        </button>

                    </div>
                    <p className="">Forget Password ?</p>
                </form>

            </main>
        </section>
    );
}