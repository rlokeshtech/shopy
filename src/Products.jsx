
import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import img1 from './assets/bgimage.jpg'
import phone from './assets/phone.jpg'
import redmi from './assets/redmi.png'
import vivo from './assets/vivo.jpg'
import realme from './assets/realme.webp'
import tshirt from './assets/tshirt.jpg'
import hoodie from './assets/hoodie.jpg'
import chudi from './assets/chudi.jpg'
import joggers from './assets/joggers.jpg'
import sofa from './assets/sofa.jpg'
import bed from './assets/bed.jpg'
import curtain from './assets/curtain.jpg'
import decorative from './assets/decorative.jpg'
import { dataContext } from "./App";
import Footer from "./footer";

export default function Products() {
    const [cart, setCart, total, setTotal] = useContext(dataContext)

    let mobile = [{
        best: "Best Seller",
        img: redmi,
        name: "redmi",
        price: 2000
    }, {
        img: vivo,
        name: "Vivo",
        price: 4000
    }, {
        best: "Best Seller",
        img: phone,
        name: "IQOO",
        price: 3000
    }, {
        img: realme,
        name: "Realme",
        price: 2000
    },
    ]

    let fashion = [{
        best: "Best Seller",
        img: tshirt,
        name: "Tshirt",
        price: 300
    }, {
        img: hoodie,
        name: "Hoodie",
        price: 7000
    }, {
        best: "Best Seller",
        img: chudi,
        name: "Chudi",
        price: 400
    }, {
        img: joggers,
        name: "Pant",
        price: 600
    },
    ]

    let house = [{
        best: "Best Seller",
        img: sofa,
        name: "Sofa",
        price: 300
    }, {
        img: bed,
        name: "Bed",
        price: 7000
    }, {
        best: "Best Seller",
        img: curtain,
        name: "Curtain",
        price: 400
    }, {
        img: decorative,
        name: "Decorative",
        price: 600
    },
    ]

    let handle = (item) => {
        setCart([...cart, item])
        setTotal(item.price + total)
    };

    return (
        <>
            <Navbar />

            {/* MOBILE */}
            <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black min-h-screen text-white pt-10">
                <div className="flex justify-around ">
                    {mobile.map((value, index) => (
                        <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 text-center w-56 hover:scale-105 transition duration-300 shadow-xl border border-gray-700 inset-shadow-sm inset-shadow-indigo-500" key={index}>

                            <p className="absolute top-4 left-1/2 -translate-x-1/2 text-red-500 font-semibold text-sm">
                                {value.best}
                            </p>

                            <img src={value.img} className="w-40 h-40 mx-auto rounded-lg" alt="" />

                            <p className="mt-3 text-lg font-semibold">{value.name}</p>

                            <p className="text-indigo-600 font-bold">${value.price}</p>

                            <button
                                className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                                onClick={() => handle(value)}
                            >
                                Add to Cart
                            </button>

                        </div>
                    ))}
                </div>


                {/* FASHION */}
                <div className="flex justify-around mt-12">
                    {fashion.map((value, index) => (
                        <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 text-center w-56 hover:scale-105 transition duration-300 shadow-xl border border-gray-700 inset-shadow-sm inset-shadow-indigo-500" key={index}>

                            <p className="absolute top-4 left-1/2 -translate-x-1/2 text-red-500 font-semibold text-sm">
                                {value.best}
                            </p>

                            <img src={value.img} className="w-40 h-50 mx-auto rounded-lg" alt="" />

                            <p className="mt-3 text-lg font-semibold">{value.name}</p>

                            <p className="text-indigo-600 font-bold">${value.price}</p>

                            <button
                                className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                                onClick={() => handle(value)}
                            >
                                Add to Cart
                            </button>

                        </div>
                    ))}
                </div>


                {/* HOUSE */}
                <div className="flex justify-around mt-12">
                    {house.map((value, index) => (
                        <div className="mb-10 bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 text-center w-56 hover:scale-105 transition duration-300 shadow-xl border border-gray-700 inset-shadow-sm inset-shadow-indigo-500" key={index}>

                            <p className="absolute top-4 left-1/2 -translate-x-1/2 text-red-500 font-semibold text-sm">
                                {value.best}
                            </p>

                            <img src={value.img} className="w-40 h-50 mx-auto rounded-lg" alt="" />

                            <p className="mt-3 text-lg font-semibold">{value.name}</p>

                            <p className="text-indigo-600 font-bold">${value.price}</p>

                            <button
                                className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                                onClick={() => handle(value)}
                            >
                                Add to Cart
                            </button>

                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}