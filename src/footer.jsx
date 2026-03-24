export default function Footer(){
    return(
        <>
        {/* FOOTER */}
            <footer className="bg-black text-gray-400  border-t border-gray-800">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 py-14">

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Shopy</h2>
                        <p>
                            Discover the latest fashion, electronics, and home essentials.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Home</li>
                            <li className="hover:text-white cursor-pointer">Products</li>
                            <li className="hover:text-white cursor-pointer">About</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>Fashion</li>
                            <li>Electronics</li>
                            <li>Home Items</li>
                            <li>Accessories</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Subscribe</h3>

                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="px-3 py-2 rounded-l-lg w-full text-white border"
                            />
                            <button className="text-white bg-cyan-500 px-4 py-2 rounded-r-lg hover:bg-cyan-600">
                                Join
                            </button>
                        </div>
                    </div>

                </div>

                <div className="text-center py-4 border-t border-gray-800">
                    © 2026 Shopy. All Rights Reserved.
                </div>

            </footer>
        </>
    )
}