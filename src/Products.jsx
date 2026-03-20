
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

export default function Products() {
    const [cart, setCart,total, setTotal] = useContext(dataContext)

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
            <div className="flex justify-around mt-10">
                {mobile.map((value, index) => (
                    <div className="relative bg-white shadow-lg p-8 rounded-xl w-52 hover:shadow-xl transition" key={index}>

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
                    <div className="relative text-center bg-white shadow-lg p-9 rounded-xl w-52 hover:shadow-xl transition" key={index}>

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
                    <div className="relative text-center bg-white shadow-lg p-9 rounded-xl w-52 hover:shadow-xl transition" key={index}>

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


            {/* <div className="mt-12 mx-10 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">

                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Shopping Cart
                </h2>

                {cart.length == 0 ? (
                    <p className="text-gray-500 text-center py-6">
                        No Items Added to Cart
                    </p>
                ) : (
                    cart.map((value, index) => (
                        <div
                            className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 mb-3 hover:bg-gray-100 transition"
                            key={index}
                        >

                            <div className="flex items-center gap-4">
                                <img
                                    src={value.img}
                                    className="w-12 h-12 rounded-lg object-cover shadow"
                                    alt=""
                                />

                                <p className="font-semibold text-gray-700">
                                    {value.name}
                                </p>
                            </div>

                            <p className="text-indigo-600 font-bold text-lg">
                                ${value.price}
                            </p>

                        </div>
                    ))
                )}

                {/* TOTAL */}
                {/* <div className="flex justify-between items-center mt-6 pt-4 border-t">

                    <p className="text-lg font-semibold text-gray-700">
                        Total
                    </p>

                    <p className="text-2xl font-bold text-green-600">
                        ${total}
                    </p>

                </div>

            </div> */} 
        </>
    )
}