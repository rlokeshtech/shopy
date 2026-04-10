export default function Footer(){
    return(
        <>
        {/* FOOTER */}
        <footer className="bg-[#eef3f6] text-gray-600 border-t border-gray-200">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-16 py-16">

                {/* BRAND */}
                <div>
                    <h2 className="text-2xl font-semibold text-[#1f5f6b] mb-4">
                        The Fluid Editorial
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-500">
                        Curating a movement of intentional living through high-fidelity
                        design and sustainable production.
                    </p>
                </div>

                {/* PRODUCTS */}
                <div>
                    <h3 className="text-[#1f5f6b] font-medium mb-4">Products</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-[#1f5f6b] cursor-pointer transition">New Arrivals</li>
                        <li className="hover:text-[#1f5f6b] cursor-pointer transition">Best Sellers</li>
                        <li className="hover:text-[#1f5f6b] cursor-pointer transition">Limited Edition</li>
                        <li className="hover:text-[#1f5f6b] cursor-pointer transition">Archives</li>
                    </ul>
                </div>

                {/* COMPANY */}
                <div>
                    <h3 className="text-[#1f5f6b] font-medium mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-[#1f5f6b] cursor-pointer transition">Our Story</li>
                        <li className="hover:text-[#1f5f6b] cursor-pointer transition">Shipping</li>
                        <li className="hover:text-[#1f5f6b] cursor-pointer transition">Contact</li>
                        <li className="hover:text-[#1f5f6b] cursor-pointer transition">Privacy</li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h3 className="text-[#1f5f6b] font-medium mb-4">Newsletter</h3>

                    <p className="text-sm text-gray-500 mb-4">
                        Join our monthly digest of art, design, and culture.
                    </p>

                    <div className="flex items-center bg-white rounded-xl overflow-hidden border border-gray-200">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="px-4 py-2 w-full text-sm outline-none bg-transparent"
                        />
                        <button className="bg-[#1f5f6b] text-white px-4 py-2 hover:bg-[#174e57] transition">
                            →
                        </button>
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="flex flex-col md:flex-row justify-between items-center px-16 py-6 border-t border-gray-200 text-sm text-gray-500">

                <p>© 2024 The Fluid Editorial. Inspired by the Ocean.</p>

                <div className="flex gap-6 mt-4 md:mt-0 text-lg">
                    <span className="cursor-pointer hover:text-[#1f5f6b] transition">⤴</span>
                    <span className="cursor-pointer hover:text-[#1f5f6b] transition">🌐</span>
                    <span className="cursor-pointer hover:text-[#1f5f6b] transition">◯</span>
                </div>

            </div>

        </footer>
        </>
    )
}