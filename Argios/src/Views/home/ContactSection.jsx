import farmer from "/Images/farmer.png";

export default function ContactSection() {
    return (
        <section className="w-full flex justify-center items-center py-20">
            <main className="max-w-7xl w-full flex flex-col md:flex-row relative">

                {/* LEFT SIDE */}
                <div className="w-full md:w-1/2 bg-[#E9F1EE] relative flex  items-center  lg:py-16  lg:pl-30">
                    <img
                        src={farmer}
                        alt="farmer"
                        className="hidden lg:absolute bottom-0 left-0 h-96 z-100"
                    />

                    {/* form card */}
                    <div className="bg-white p-10 text-left md:h-full shadow-md w-full max-w-xl z-10">

                        <p className="text-[24px] font-shadowsIntoLightTwo font-normal text-[#49A760]">
                            Have Questions?
                        </p>

                        <h2 className="text-[46px] font-semibold mb-6">
                            Send us a message
                        </h2>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-gray-100 p-4 rounded-xl outline-none"
                            />
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-1/2 bg-gray-100 p-4 rounded-xl outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-1/2 bg-gray-100 p-4 rounded-xl outline-none"
                                />
                            </div>

                            <textarea
                                rows="5"
                                placeholder="Tell Us About Project *"
                                className="w-full bg-gray-100 p-4 rounded-xl outline-none"
                            />

                            <button
                                type="submit"
                                className="bg-[#F7C35F] px-8 py-4 rounded-xl font-semibold hover:bg-[#e5b350] transition"
                            >
                                Get In Touch
                            </button>
                        </form>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full md:w-1/2 bg-[#4BAF47] text-[#FCFCFC] px-7 lg:px-16 py-12 lg:py-34 text-left">
                    <h1 className="text-[40px] md:text-[32px] lg:text-[50px]  font-semibold mb-6">
                        Contact Information
                    </h1>

                    <p className="mb-8 text-[20px] md:text-[16px]">
                        Plan upon yet way get cold spot its week. Almost do am or limits hearts.
                        Resolve parties but why she shewing.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <p className="font-semibold text-[20px]">Hotline</p>
                            <p className="text-[16px]">+4733378901</p>
                        </div>

                        <div>
                            <p className="font-semibold text-[20px]">Our Location</p>
                            <p className="text-[16px]">
                                55 Main Street, The Grand Avenue 2nd Block,<br />
                                New York City
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-[20px]">Official Email</p>
                            <p className="text-[16px]">info@agrol.com</p>
                        </div>
                        <img
                            src="Images/plant.png"
                            alt="farmer"
                            className="absolute bottom-0 right-0 h-74 lg:h-110 z-100"
                        />
                    </div>
                </div>

            </main>
        </section>
    );
}

