import React, { useState } from 'react';
import { Plus, X, Upload, FolderTree } from 'lucide-react';

export default function Add_products() {
    const [inventory, setInventory] = useState({});
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ 
        categoryName: '', 
        productName: '', 
        preview: '' 
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { categoryName, productName, preview } = formData;

        if (!categoryName || !productName || !preview) {
            return alert("Please provide Category, Product Name, and Image");
        }

        const newProduct = {
            id: Date.now(),
            name: productName,
            image: preview
        };

        setInventory(prev => {
            const currentCategoryProducts = prev[categoryName] || [];
            return { 
                ...prev, 
                [categoryName]: [...currentCategoryProducts, newProduct] 
            };
        });

        setIsFormOpen(false);
        setFormData({ categoryName: '', productName: '', preview: '' });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setFormData({ ...formData, preview: URL.createObjectURL(file) });
    };

    return (
        <div className="p-4 bg-[#F7F2EC] min-h-screen">
            {/* Top Bar */}
            <div className='flex justify-between mx-8 py-4 items-center border-b border-[#F2E4D8]'>
                <div>
                    <h1 className='text-xl font-bold text-[#5F0D24] text-left'>Inventory Manager</h1>
                    <p className='text-xs text-gray-500'>Organize your products in categories</p>
                </div>
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className='bg-[#5F0D24] text-[15px] py-2 px-5 rounded-full text-white flex items-center gap-2 hover:opacity-90 transition-all'
                >
                    <Plus size={18} /> Add Category & Product
                </button>
            </div>

            {/* Modal Form */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-[#5F0D24]">New Entry</h2>
                            <X className="cursor-pointer text-gray-400" onClick={() => setIsFormOpen(false)} />
                        </div>
                        
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Category</label>
                                <input 
                                    type="text" placeholder="e.g., Enter Product Type"
                                    className="p-3 rounded-xl border border-[#F2E4D8] bg-[#F7F2EC]/30 outline-none focus:ring-1 focus:ring-[#5F0D24]"
                                    value={formData.categoryName}
                                    onChange={(e) => setFormData({...formData, categoryName: e.target.value})}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Product Name</label>
                                <input 
                                    type="text" placeholder="e.g., Enter Product Name"
                                    className="p-3 rounded-xl border border-[#F2E4D8] bg-[#F7F2EC]/30 outline-none focus:ring-1 focus:ring-[#5F0D24]"
                                    value={formData.productName}
                                    onChange={(e) => setFormData({...formData, productName: e.target.value})}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-600 uppercase">Product Image</label>
                                <div className="border-2 border-dashed border-[#F2E4D8] rounded-xl p-6 text-center relative hover:bg-gray-50 transition-all">
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageChange} />
                                    {formData.preview ? (
                                        <img src={formData.preview} className="h-24 mx-auto rounded-lg shadow-sm" alt="Preview" />
                                    ) : (
                                        <div className="flex flex-col items-center gap-2">
                                            <Upload className="text-[#5F0D24] opacity-50" />
                                            <span className="text-xs text-gray-400">Click to upload image</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button type="submit" className="w-full py-3 bg-[#5F0D24] text-white rounded-xl cursor-pointer font-bold shadow-lg mt-2">
                                Save to Inventory
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Dynamic Rows Section */}
            <div className="mx-8 mt-6 space-y-4">
                {Object.keys(inventory).length === 0 ? (
                    <div className="text-center py-20 opacity-30">
                        <FolderTree size={48} className="mx-auto mb-4" />
                        <p className="text-[16px]">No categories created yet.</p>
                    </div>
                ) : (
                    Object.keys(inventory).map((category) => (
                        <div key={category} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <div className="flex items-center justify-between mb-4 border-l-4 border-[#5F0D24] pl-4">
                                <h2 className="text-lg font-extrabold text-[#5F0D24] uppercase tracking-wider">
                                    {category} 
                                    <span className="ml-3 text-xs font-normal text-gray-400 bg-white px-2 py-1 rounded-full border border-[#F2E4D8]">
                                        {inventory[category].length} Items
                                    </span>
                                </h2>
                            </div>
                            
                            {/* The row of products for this category */}
                            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                                {inventory[category].map((product) => (
                                    <div key={product.id} className="min-w-50 bg-white p-4 rounded-2xl shadow-sm border border-[#F2E4D8] hover:shadow-md transition-shadow">
                                        <div className="h-40 w-full overflow-hidden rounded-xl mb-3 bg-[#F7F2EC]">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-center font-bold text-gray-800">{product.name}</p>
                                    </div>
                                ))}
                                
                                {/* Quick-add button at end of row */}
                                <button 
                                    onClick={() => {
                                        setFormData({...formData, categoryName: category});
                                        setIsFormOpen(true);
                                    }}
                                    className="min-w-25 border-2 border-dashed border-[#F2E4D8] rounded-2xl flex flex-col items-center justify-center text-gray-300 hover:text-[#5F0D24] hover:border-[#5F0D24] transition-all"
                                >
                                    <Plus size={24} />
                                    <span className="text-[10px] font-bold uppercase mt-1">Add to row</span>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}