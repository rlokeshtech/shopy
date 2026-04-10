import Footer from "./footer";

export default function About() {
    return (
        <>
            <div className="bg-[#f4f8fb] text-gray-800 py-16 px-10">

                {/* CONTAINER */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6">

                        <p className="text-[#2c8fa3] text-sm font-medium tracking-wide">
                            ABOUT US
                        </p>

                        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                            Redefining Online Shopping Experience
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed">
                            We bring together fashion, electronics, and lifestyle products
                            into one seamless platform. Our goal is to deliver quality,
                            affordability, and a smooth shopping journey for every user.
                        </p>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            With a focus on modern design and performance, Shopy ensures
                            a fast, responsive, and visually engaging experience across all devices.
                        </p>

                        <button className="mt-4 px-6 py-2.5 rounded-full bg-[#2c8fa3] text-white text-sm hover:bg-[#247685] transition">
                            Learn More
                        </button>

                    </div>


                    {/* RIGHT VISUAL CARD */}
                    <div className="relative">

                        <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm">

                            <div className="grid grid-cols-2 gap-6 text-center">

                                <div>
                                    <p className="text-2xl font-semibold text-[#2c8fa3]">10K+</p>
                                    <p className="text-sm text-gray-500">Products</p>
                                </div>

                                <div>
                                    <p className="text-2xl font-semibold text-[#2c8fa3]">5K+</p>
                                    <p className="text-sm text-gray-500">Customers</p>
                                </div>

                                <div>
                                    <p className="text-2xl font-semibold text-[#2c8fa3]">4.8</p>
                                    <p className="text-sm text-gray-500">Ratings</p>
                                </div>

                                <div>
                                    <p className="text-2xl font-semibold text-[#2c8fa3]">24/7</p>
                                    <p className="text-sm text-gray-500">Support</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <Footer />

        </>
    )
}