export default function AboutFarmSection() {
    return (
        <section className="w-full h-auto flex justify-center py-10 lg:py-24 overflow-hidden">
            <main className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start px-6 gap-12 lg:gap-0">

                {/* LEFT COLUMN: Image and Leaf */}
                <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <div className="relative">
                        <img
                            className="w-full max-w-md lg:max-w-lg h-auto object-cover"
                            src="Images/about-page.png"
                            alt="Farm Worker"
                        />
                        {/* Leaf stays anchored to image */}
                        <img
                            src="Images/about-leaf.png"
                            className="absolute -left-12 -bottom-10 w-32 md:w-48 lg:w-56 object-contain z-10"
                            alt="Leaf"
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: Text stays right, Cards overlap */}
                <div className="w-full lg:w-1/2 flex flex-col text-left">

                    {/* Header & Paragraph - NO OVERLAP HERE */}
                    <h1 className="text-4xl md:text-[40px] lg:text-[50px] font-bold text-gray-900 leading-tight mb-6">
                        Agriculture & Organic <br className="hidden lg:block" /> Product Farm
                    </h1>

                    <p className="text-gray-600 text-[16px] md:text-[17px] lg:max-w-xl mb-8">
                        There are many variations of passages of ipsum available but the
                        majority have suffered alteration in some form by injected humor or
                        random word which don't look even. Comparison new ham melancholy.
                    </p>

                    {/* 25M Stat - NO OVERLAP HERE */}
                    <div className="flex md:justify-center items-center gap-6 mb-10">
                        <h2 className="text-7xl lg:text-[100px] font-bold text-[#49A760]">25M</h2>
                        <div className="h-14 w-px bg-gray-300"></div>
                        <p className="text-lg font-bold text-gray-800 leading-tight">
                            Growth Tonns <br /> of Harvest
                        </p>
                    </div>

                    {/* THE CARDS - ONLY THESE OVERLAP THE IMAGE */}
                    <div className="flex flex-col md:justify-center sm:flex-row gap-6 lg:-ml-32 z-20">
                        {/* Yellow Card */}
                        <div className="bg-[#F7C35F] p-8 flex flex-col items-start gap-4 shadow-xl w-full sm:w-72">
                            <div className="bg-white/20 p-3 rounded-full border border-black/5">
                                <img src="Images/about-orange.png" className="w-8 h-8" alt="Icon" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900">100% Guaranteed Organic Product</h3>
                            <p className="text-sm text-gray-800">Always parties but trying she shewing of moment.</p>
                        </div>

                        {/* Green Card */}
                        <div className="bg-[#49A760] p-8 flex flex-col items-start gap-4 shadow-xl w-full sm:w-72 text-white">
                            <div className="bg-white/20 p-3 rounded-full border border-white/20">
                                <img src="Images/about-green.png" className="w-8 h-8" alt="Icon" />
                            </div>
                            <h3 className="font-bold text-lg">Top-Quality Healthy Foods Production</h3>
                            <p className="text-sm text-white/90">Majority have suffered alteration in some form by injected humor.</p>
                        </div>
                    </div>

                </div>
            </main>
        </section>
    );
}


