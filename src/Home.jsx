import { useNavigate, Link } from "react-router-dom"
import headphone from './assets/headphone.jpg'
import phone from './assets/phone.jpg'
import tshirt from './assets/tshirt.jpg'
import shoe from './assets/shoe.webp'
import coat from './assets/coat.jpg'
import joggers from './assets/joggers.jpg'
import mac from './assets/mac.jpg'
import tablet from './assets/tablet.jpg'
import bed from './assets/bed.jpg'
import sofa from './assets/sofa.jpg'
import Navbar from "./Navbar"
export default function Home() {
    const navigate = useNavigate()

    let items = [{
        image: headphone,
        name: "headphone",
        price: "$200",
        Rating: "4+"
    },
    {
        image: shoe,
        name: "Shoe",
        price: "$250",
        Rating: "3.5+"
    },
    {
        image: tshirt,
        name: "TShirt",
        price: "$100",
        Rating: "4.5+"
    },
    {
        image: phone,
        name: "Smart Phone",
        price: "$1000",
        Rating: "5"
    },
    ]

    let catego = [{
        category: "Fasion",
        fimg: coat,
        fname: "Premium Coat",
        fprice: "$2500",
        fimg2: joggers,
        fname1: "Joggers",
        fprice1: "$500",
    }, {
        category: "Electronics",
        fimg: tablet,
        fname: "Tablet",
        fprice: "$500",
        fimg2: mac,
        fname1: "Mac Book",
        fprice1: "$22500",
    }, {
        category: "House Items",
        fimg: sofa,
        fname: "Sofa",
        fprice: "$3500",
        fimg2: bed,
        fname1: "Bed",
        fprice1: "$7500",
    },
    ]

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar/>
            {/* HERO SECTION */}
            <section>
                <div className="h-[500px] mt-6 mx-15 rounded-xl bg-[url(./assets/bgimage.jpg)] bg-no-repeat bg-cover flex flex-col justify-center px-36 text-white shadow-lg">

                    <h3 className="text-lg font-semibold mb-2">New Collection</h3>

                    <h1 className="text-5xl font-bold mb-4">
                        Upgrade your Lifestyle
                    </h1>

                    <h2 className="max-w-xl text-gray-200 mb-6">
                        Discover exclusive deals on the latest high-end electronics
                        and designer fashion. Limited time offers only.
                    </h2>

                    <div className="flex gap-4">
                        <button onClick={()=>navigate("/products ")} className="rounded-xl w-30 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-3 py-1 text-center leading-5">
                            Shop Now
                        </button>

                        <button onClick={()=>navigate("/products ")} className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                            View Deals
                        </button>
                    </div>

                </div>
            </section>

            {/* DEAL HEADER */}
            <section className="flex justify-between items-center mx-10 mt-12">
                <div className="news">
                    <p className="text-2xl font-bold">Deals of the Day</p>
                    <p className="text-gray-500">Hurry Up! Offers Close Soon</p>
                </div>

                <div className="time bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow cursor-pointer">
                    <p >Limited Time</p>
                </div>
            </section>

            {/* PRODUCT LIST */}
            <section className="flex justify-around flex-wrap gap-6 mt-8 px-10">

                {items.map((value, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-4 text-center w-52 hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={value.image}
                            className="w-full h-44 object-cover rounded-lg mb-3"
                            alt=""
                        />

                        <p className="font-semibold text-lg">{value.name}</p>

                        <p className="text-indigo-600 font-bold">
                            {value.price}
                        </p>

                        <p className="text-yellow-500">
                            ⭐ {value.Rating}
                        </p>
                    </div>
                ))}

            </section>
            <section className="mt-16">
                <div className="mx-10 flex justify-between items-center">
                    <h3 className="text-3xl font-bold text-gray-800">
                        Explore Categories
                    </h3>
                    <h4 className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                        <Link to="/products">View All Categories</Link>
                    </h4>
                </div>
                <div className="flex justify-around flex-wrap gap-8 mt-10 px-10">
                    {catego.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white w-80 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100">
                            {/* Category Title */}
                            <p className="text-xl font-semibold text-gray-800 mb-4">
                                {value.category}</p>
                            <hr className="mb-6" />
                            {/* Product 1 */}
                            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
                                <img
                                    src={value.fimg}
                                    className="w-16 h-16 object-cover rounded-lg shadow"
                                    alt=""/>
                                <div className="flex flex-col">
                                    <p className="font-medium text-gray-700">
                                        {value.fname}
                                    </p>
                                    <p className="text-indigo-600 font-semibold">
                                        {value.fprice}
                                    </p>
                                </div>
                            </div>
                            {/* Product 2 */}
                            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition mt-4">
                                <img
                                    src={value.fimg2}
                                    className="w-16 h-16 object-cover rounded-lg shadow"
                                    alt=""/>
                                <div className="flex flex-col">
                                    <p className="font-medium text-gray-700">
                                        {value.fname1}
                                    </p>
                                    <p className="text-indigo-600 font-semibold">
                                        {value.fprice1}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </section>
            <footer className="bg-gray-900 text-gray-300 mt-20">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 py-12">

        {/* Brand */}
        <div>
            <h2 className="text-2xl font-bold text-white mb-4">Shopy</h2>
            <p className="text-gray-400">
                Discover the latest fashion, electronics, and home essentials.
                Shop premium quality products at the best prices.
            </p>
        </div>

        {/* Quick Links */}
        <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">Products</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
        </div>

        {/* Categories */}
        <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Fashion</li>
                <li className="hover:text-white cursor-pointer">Electronics</li>
                <li className="hover:text-white cursor-pointer">Home Items</li>
                <li className="hover:text-white cursor-pointer">Accessories</li>
            </ul>
        </div>

        {/* Newsletter */}
        <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-3">
                Get updates on new products and special offers.
            </p>

            <div className="flex">
                <input
                    type="email"
                    placeholder="Your Email"
                    className="px-3 py-2 border text-white rounded-l-lg w-full text-black"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700">
                    Join
                </button>
            </div>
        </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 Shopy. All Rights Reserved.
    </div>

</footer>

        </div>
    )
}