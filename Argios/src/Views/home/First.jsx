import { Heart } from "lucide-react";
import { useState } from "react";

export default function ShowFavrateCard() {
    const [data, setData] = useState({
        studentName: "",
        className: "",
        rollNo: "",
    });

    const [cards, setCards] = useState([]);

    const favoriteCount = cards.filter(card => card.favorite).length;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.studentName || !data.className || !data.rollNo) return;

        setCards([...cards, { ...data, id: Date.now(), favorite: false }]);
        setData({ studentName: "", className: "", rollNo: "" });
    };

    const toggleFavorite = (id) => {
        setCards(
            cards.map((card) =>
                card.id === id ? { ...card, favorite: !card.favorite } : card
            )
        );
    };

    return (
        <div className="p-4">
            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded shadow-md max-w-md mx-auto">
                <h1 className="text-xl font-bold text-red-600 mb-2">
                    Total Favorite: {favoriteCount}</h1>
                
                <h1 className="text-2xl font-bold mb-4 border-t pt-2">Student Form</h1>
                <input type="text" name="studentName" placeholder="Name" value={data.studentName} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
                <input type="text" name="className" placeholder="Class" value={data.className} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
                <input type="text" name="rollNo" placeholder="Roll No" value={data.rollNo} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
                
                <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-green-500 transition">
                    Submit Form</button>
            </form>

            {/* Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card) => (
                    <div key={card.id} className="relative bg-white p-4 rounded-lg shadow-md border">
                        <span 
                            className="absolute top-2 right-4 cursor-pointer"
                            onClick={() => toggleFavorite(card.id)}
                        >
                            <Heart 
                                className="text-red-500 transition-colors" 
                                size={24} 
                                fill={card.favorite ? "red" : "none"} 
                            />
                        </span>
                        <h3 className="text-lg font-semibold">{card.studentName}</h3>
                        <p className="text-gray-600">Class: {card.className}</p>
                        <p className="text-gray-600">Roll No: {card.rollNo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}