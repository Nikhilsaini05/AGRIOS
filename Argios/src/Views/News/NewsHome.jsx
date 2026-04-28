export default function NewsHome() {
    const newsData = [
        {
            image: "/Images/news1.png", 
            date: "05 July 2022",
            author: "Kevin Martin",
            comments: "0 Comments",
            title: "Bringing Food Production Back To Cities"
        },
        {
            image: "/Images/news2.png",
            date: "05 July 2022",
            author: "Kevin Martin",
            comments: "0 Comments",
            title: "The Future of Farming, Smart Irrigation Solutions"
        },
        {
            image: "/Images/news3.png",
            date: "05 July 2022",
            author: "Kevin Martin",
            comments: "1 Comment",
            title: "Agronomy and relation to Other Sciences"
        },
        {
            image: "/Images/news4.png",
            date: "05 July 2022",
            author: "Kevin Martin",
            comments: "0 Comments",
            title: "We grow products with the organic farming"
        },
        {
            image: "/Images/news5.png",
            date: "05 July 2022",
            author: "Kevin Martin",
            comments: "0 Comments",
            title: "A Quick Solution to Low Milk Production in Zimbabwe"
        },
        {
            image: "/Images/news6.png",
            date: "05 July 2022",
            author: "Kevin Martin",
            comments: "0 Comments",
            title: "Winter wheat harvest organic gather nice moment"
        }
    ];

    return (
        <section className='w-full h-auto flex justify-center items-center py-16 bg-white'>
            <main className='w-full max-w-7xl px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {newsData.map((item, index) => (
                        <div key={index} className='group cursor-pointer'>
                            <div className='relative overflow-hidden rounded-lg'>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className='w-full h-75 object-cover transform group-hover:scale-105 transition-transform duration-500' 
                                />
                                <div className='relative w-28 h-10 bottom-0  left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4BAF47] text-white text-[14px] font-bold px-1 py-2 rounded-md '>
                                    {item.date}
                                </div>
                            </div>

                            <div className='pt-2 pb-2 text-center px-4'>
                                <div className='flex justify-center items-center gap-4 text-[#878680] text-[14px] mb-3'>
                                    <div className='flex items-center gap-1'>
                                        <img src="/Images/profile.png" alt="" />
                                        <span>by {item.author}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img src="/Images/comment.png" alt="" />
                                        <span>{item.comments}</span>
                                    </div>
                                </div>

                                <h3 className='text-[20px] font-extrabold text-[#1F1E17] leading-7 hover:text-[#4BAF47] transition-colors'>
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
}