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
import image from "./assets/homeimg.png"
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
        <div className="bg-[#f4f8fb] min-h-screen text-gray-800 font-sans">

            {/* HERO SECTION */}
            <section>
                <div className="h-[560px] bg-gradient-to-r from-[#2c8fa3] to-[#6ec6d9] flex flex-col justify-center px-16">
                    <div className="flex justify-around">
                        <div className="pt-30">
                            <h3 className="text-white/80 text-sm font-medium tracking-wide mb-3">
                                Curated for Clarity
                            </h3>

                            <h1 className="text-5xl font-semibold text-white leading-tight mb-4">
                                Elegance in <span className="italic font-light">Fluidity.</span>
                            </h1>

                            <h2 className="max-w-lg text-white/80 mb-8 text-base leading-relaxed">
                                Discover refined products designed to bring calm, balance,
                                and sophistication into your daily lifestyle.
                            </h2>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => navigate("/products ")}
                                    className="px-6 py-2.5 rounded-full bg-white text-[#2c8fa3] font-medium hover:bg-gray-100 transition">
                                    Shop Collection
                                </button>

                                <button
                                    onClick={() => navigate("/products ")}
                                    className="px-6 py-2.5 rounded-full border border-white/60 text-white hover:bg-white hover:text-[#2c8fa3] transition">
                                    Our Story
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <img className="rounded-tl-[80px] rounded-br-[80px] rounded-tr-xl rounded-bl-xl rotate-3" src={image} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* DEAL HEADER */}
            <section className="flex justify-between items-center mx-16 mt-16">
                <div>
                    <p className="text-2xl font-semibold">Editorial Picks</p>
                    <p className="text-gray-500 text-sm">Timeless pieces curated for you</p>
                </div>

                <div className="text-sm px-4 py-1 rounded-full bg-[#e0f4f8] text-[#2c8fa3]">
                    Featured
                </div>
            </section>

            {/* PRODUCT LIST */}
            <section className="flex justify-center flex-wrap gap-10 mt-12 px-10">
                {items.map((value, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-4 w-64 hover:shadow-lg transition duration-300">

                        {/* IMAGE CONTAINER (IMPORTANT FOR ZOOM) */}
                        <div className="w-full h-40 overflow-hidden rounded-xl">
                            <img
                                src={value.image}
                                className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                                alt=""
                            />
                        </div>
                        <p className="font-medium text-base mt-4 mb-1">
                            {value.name}
                        </p>
                        <p className="text-[#2c8fa3] font-semibold text-sm mb-1">
                            {value.price}
                        </p>
                        <p className="text-gray-400 text-xs">
                            ⭐ {value.Rating}
                        </p>
                    </div>
                ))}
            </section>
            {/* CATEGORY SECTION */}
            <section className="mt-24">
                <div className="mx-16 flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">
                        Curated Categories
                    </h3>
                    <h4 className="text-[#2c8fa3] text-sm cursor-pointer hover:underline">
                        <Link to="/products">View All</Link>
                    </h4>
                </div>
                <div className="flex justify-center flex-wrap gap-8 mt-10 mb-16 px-16">
                    {catego.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white w-80 rounded-2xl p-5 hover:shadow-lg transition">
                            <p className="text-lg font-medium mb-4 text-[#2c8fa3]">
                                {value.category}
                            </p>
                            <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition">
                                <div className="w-14 h-14 overflow-hidden rounded-md">
                                    <img
                                        src={value.fimg}
                                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="text-sm">{value.fname}</p>
                                    <p className="text-[#2c8fa3] text-sm font-medium">
                                        {value.fprice}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition mt-3">
                                <div className="w-14 h-14 overflow-hidden rounded-md">
                                    <img
                                        src={value.fimg2}
                                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="text-sm">{value.fname1}</p>
                                    <p className="text-[#2c8fa3] text-sm font-medium">
                                        {value.fprice1}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </section>

            <Footer />

        </div>
    )
}