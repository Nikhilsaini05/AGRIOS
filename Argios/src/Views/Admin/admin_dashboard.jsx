import { IndianRupee } from "lucide-react"
import Admin_navbar from "./Admin_navbar"
import Sidebar from "./sidebar"

import { LayoutDashboard, Image, Settings2, MapPin, Key, Share2, Contact } from 'lucide-react';


export default function AdminDashboard() {
    const orders = [
        { id: "MS-0001", customer: "Aman Sharma", product: "Banana", status: "Delivered", amount: "140.00" },
        { id: "MS-0002", customer: "Ravi Kumar", product: "Onions", status: "Processing", amount: "99.00" },
        { id: "MS-0003", customer: "Preet Singh", product: "Red Grapes", status: "Pending", amount: "299.00" },
        { id: "MS-0004", customer: "Sahil Goyal", product: "Potatos", status: "Shipped", amount: "79.00" },
    ];

    // order data
    const getStatusStyles = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-600';
            case 'Processing': return 'bg-blue-100 text-blue-600';
            case 'Pending': return 'bg-orange-100 text-orange-600';
            case 'Shipped': return 'bg-purple-100 text-purple-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };
    // inventry table data
    const inventory = [
        { name: "Apple", category: "Fruits", stock: "50 Left" },
        { name: "Onion", category: "Vegitable", stock: "50 Left" },
        { name: "Grapes", category: "Fruits", stock: "50 Left" },
    ];


    return (
            <>
                {/* dashboard cards  */}
                <main className="p-4 border-l-3 border-[#5F0D24] bg-[#F7F2EC]">
                    <h1 className="text-2xl font-bold">Welcome Back, Admin</h1>
                    <p>Here's what's happening with Agrios today.</p>

                    {/* Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 text-left">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-3xl">
                            <div className="bg-[#F7F2EC] w-10 h-10 rounded-full flex items-center justify-center  mb-8">
                                <IndianRupee size={20} className="text-[#5F0D24]" />
                            </div>
                            <p className="text-[12px] text-gray-500 font-semibold uppercase ">Total Revenue</p>
                            <p className="text-[24px] font-semibold">40,220.00</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-3xl">
                            <div className="bg-[#F7F2EC] w-10 h-10 rounded-full flex items-center justify-center  mb-8">
                                <IndianRupee size={20} className="text-[#5F0D24]" />
                            </div>
                            <p className="text-[12px] text-gray-500 font-semibold uppercase ">Total Revenue</p>
                            <p className="text-[24px] font-semibold">32,750.00</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-3xl">
                            <div className="bg-[#F7F2EC] w-10 h-10 rounded-full flex items-center justify-center  mb-8">
                                <IndianRupee size={20} className="text-[#5F0D24]" />
                            </div>
                            <p className="text-[12px] text-gray-500 font-semibold uppercase ">Total Revenue</p>
                            <p className="text-[24px] font-semibold">50,200.00</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-6 rounded-3xl">
                            <div className="bg-[#F7F2EC] w-10 h-10 rounded-full flex items-center justify-center  mb-8">
                                <IndianRupee size={20} className="text-[#5F0D24]" />
                            </div>
                            <p className="text-[12px] text-gray-500 font-semibold uppercase ">Total Revenue</p>
                            <p className="text-[24px] font-semibold">38,300.00</p>
                        </div>

                        {/* Repeat for other 3 cards... */}
                    </div>

                    <div className="flex gap-6">
                        {/* Recent Orders Table  */}
                            <div className="bg-white p-6 rounded-[30px] flex-1 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-lg">Recent Orders</h3>
                                    <button className="text-[#5F0D24] text-sm font-bold">View all</button>
                                </div>
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="text-gray-800 font-bold border-b border-gray-100">
                                            <th className="pb-4">Order ID</th>
                                            <th className="pb-4">Customer</th>
                                            <th className="pb-4">Product</th>
                                            <th className="pb-4">Status</th>
                                            <th className="pb-4 text-right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order, index) => (
                                            <tr key={index} className="border-b border-gray-50 last:border-0">
                                                <td className="py-4 text-sm text-gray-600">{order.id}</td>
                                                <td className="py-4 text-sm text-gray-700 font-medium">{order.customer}</td>
                                                <td className="py-4 text-sm text-gray-600">{order.product}</td>
                                                <td className="py-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${getStatusStyles(order.status)}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 text-sm text-gray-800 font-bold text-right">{order.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        {/* Inventory Alerts  */}
                            <div className="bg-[#F2E4D8] p-6 rounded-[30px] w-full lg:w-87 shadow-sm">
                                <h3 className="font-bold text-[16px] mb-6">Inventory Alerts</h3>
                                <div className="flex flex-col gap-4">
                                    {inventory.map((item, index) => (
                                        <div key={index} className="bg-[#F7F2EC] p-4 rounded-2xl flex flex-col gap-2 relative">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-[14px] text-gray-800">{item.name}</h4>
                                                <span className="bg-[#5F0D24] text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase">
                                                    Low Stock
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="text-[12px] text-[#000000]">Category: {item.category}</p>
                                                <p className="text-[12px] text-[#5F0D24] font-bold">{item.stock}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                </main>

       
       </>
    )

};
