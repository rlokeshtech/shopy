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
import Footer from "./footer"

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
        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black min-h-screen text-white">
            <Navbar/>

            {/* HERO SECTION */}
            <section>
                <div className="h-[520px]   bg-[url(./assets/bgimage.jpg)] bg-cover bg-center flex flex-col justify-center px-15 shadow-2xl border border-gray-800 backdrop-blur">

                    <h3 className="text-gray-900 text-lg font-semibold mb-2 tracking-wide">New Collection</h3>

                    <h1 className="text-6xl font-extrabold mb-4 leading-tight">
                        Upgrade your Lifestyle
                    </h1>

                    <h2 className="max-w-xl text-gray-900 mb-6 text-lg">
                        Discover exclusive deals on the latest high-end electronics
                        and designer fashion. Limited time offers only.
                    </h2>

                    <div className="flex gap-4">
                        <button
                            onClick={()=>navigate("/products ")}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition transform shadow-lg font-semibold">
                            Shop Now
                        </button>

                        <button
                            onClick={()=>navigate("/products ")}
                            className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-white hover:text-black transition">
                            View Deals
                        </button>
                    </div>

                </div>
            </section>

            {/* DEAL HEADER */}
            <section className="flex justify-between items-center mx-10 mt-14">
                <div>
                    <p className="text-3xl font-bold">Deals of the Day</p>
                    <p className="text-gray-400">Hurry Up! Offers Close Soon</p>
                </div>

                <div className="rounded-xl w-30 h-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-3 py-1.5 text-center leading-5">
                    Limited Time
                </div>
            </section>

            {/* PRODUCT LIST */}
            <section className="flex justify-center flex-wrap gap-8 mt-10 px-10">

                {items.map((value, index) => (
                    <div
                        key={index}
                        className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 text-center w-56 hover:scale-105 transition duration-300 shadow-xl border border-gray-700 inset-shadow-sm inset-shadow-indigo-500 ">

                        <img
                            src={value.image}
                            className="w-full h-44 object-cover rounded-xl mb-3"
                            alt=""
                        />

                        <p className="font-semibold text-lg capitalize">{value.name}</p>

                        <p className="text-cyan-400 font-bold text-lg">
                            {value.price}
                        </p>

                        <p className="text-yellow-400 text-sm">
                            ⭐ {value.Rating}
                        </p>
                    </div>
                ))}

            </section>

            {/* CATEGORY SECTION */}
            <section className="mt-20">
                <div className="mx-10 flex justify-between items-center ">
                    <h3 className="text-3xl font-bold">
                        Explore Categories
                    </h3>
                    <h4 className="text-cyan-400 font-semibold cursor-pointer hover:underline">
                        <Link to="/products">View All Categories</Link>
                    </h4>
                </div>

                <div className="flex justify-center flex-wrap gap-10 mt-10 mb-10 px-10 ">
                    {catego.map((value, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/70 backdrop-blur-lg w-80 rounded-2xl shadow-xl p-6 border border-gray-700 hover:scale-105 transition inset-shadow-sm inset-shadow-indigo-500">

                            <p className="text-xl font-semibold mb-4 text-cyan-400">
                                {value.category}
                            </p>

                            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-700 transition">
                                <img
                                    src={value.fimg}
                                    className="w-16 h-16 object-cover rounded-lg"
                                    alt=""/>
                                <div>
                                    <p className="font-medium">
                                        {value.fname}
                                    </p>
                                    <p className="text-cyan-400 font-semibold">
                                        {value.fprice}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-700 transition mt-4">
                                <img
                                    src={value.fimg2}
                                    className="w-16 h-16 object-cover rounded-lg"
                                    alt=""/>
                                <div>
                                    <p className="font-medium">
                                        {value.fname1}
                                    </p>
                                    <p className="text-cyan-400 font-semibold">
                                        {value.fprice1}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </section>

            <Footer/>

        </div>
    )
}