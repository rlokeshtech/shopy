
import { useContext, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

export default function Products() {
    const [cart, setCart, total, setTotal] = useContext(dataContext)
    let mobile = [
        { img: redmi, name: "redmi", price: 2000, quantity: 0 },
        { img: vivo, name: "Vivo", price: 4000, quantity: 0 },
        {  img: phone, name: "IQOO", price: 3000, quantity: 0 },
        { img: realme, name: "Realme", price: 2000, quantity: 0 },
    ]
    let fashion = [
        {  img: tshirt, name: "Tshirt", price: 300, quantity: 0 },
        { img: hoodie, name: "Hoodie", price: 7000, quantity: 0 },
        { img: chudi, name: "Chudi", price: 400, quantity: 0 },
        { img: joggers, name: "Pant", price: 600, quantity: 0 },
    ]
    let house = [
        { img: sofa, name: "Sofa", price: 300, quantity: 0 },
        { img: bed, name: "Bed", price: 7000, quantity: 0 },
        { img: curtain, name: "Curtain", price: 400, quantity: 0 },
        { img: decorative, name: "Decorative", price: 600, quantity: 0 },
    ]
    let handle = (item) => {
        setCart([...cart, item])
        setTotal(item.price + total)
        console.log(cart);
          
    }
    return (
        <>
            {/* MOBILE */}
            <div className="bg-[#f4f8fb] min-h-screen text-gray-800">
                {/* HEADER */}
                <div className="flex p-8 px-16 justify-between items-center">
                    <p className="text-2xl font-semibold">Smart Phones</p>
                    <Link to="/categories" className="text-[#2c8fa3] text-sm hover:underline">
                        View All Categories →
                    </Link>
                </div>
                {/* MOBILE */}
                <div className="flex flex-wrap justify-center gap-10   text-center">
                    {mobile.map((value, index) => (
                        <div key={index} className="bg-white rounded-2xl p-5 w-64 hover:shadow-lg transition duration-300">
                            {/* TAG */}
                            <p className="text-center text-[#2c8fa3] text-xs font-medium mb-2">{value.best}</p>
                            {/* IMAGE */}
                            <div className="w-full h-40 overflow-hidden rounded-xl">
                                <img src={value.img} className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" alt="" />
                            </div>
                            {/* DETAILS */}
                            <p className="mt-4 text-base font-medium">{value.name}</p>
                            <p className="text-[#2c8fa3] font-semibold text-sm">${value.price}</p>
                            <button className="mt-4 w-full border border-[#2c8fa3] text-[#2c8fa3] py-2 rounded-full text-sm hover:bg-[#2c8fa3] hover:text-white transition" onClick={() => handle(value)}>Add to Cart </button>
                        </div>
                    ))}
                </div>
                {/* FASHION */}
                <div className="flex p-8 px-16 justify-between items-center mt-7">
                    <p className="text-2xl font-semibold">Fashions</p>
                </div>
                <div className="flex flex-wrap justify-center gap-10   text-center">
                    {fashion.map((value, index) => (
                        <div key={index} className="bg-white rounded-2xl p-5 w-64 hover:shadow-lg transition duration-300">
                            <p className="text-center text-[#2c8fa3] text-xs font-medium mb-2"> {value.best} </p>
                            <div className="w-full h-40 overflow-hidden rounded-xl">
                                <img src={value.img} className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" alt="" />
                            </div>
                            <p className="mt-4 text-base font-medium">{value.name}</p>
                            <p className="text-[#2c8fa3] font-semibold text-sm"> ${value.price}</p>
                            <button className="mt-4 w-full border border-[#2c8fa3] text-[#2c8fa3] py-2 rounded-full text-sm hover:bg-[#2c8fa3] hover:text-white transition" onClick={() => handle(value)}> Add to Cart </button>
                        </div>
                    ))}
                </div>


                {/* HOUSE */}
                <div className="flex p-8 px-16 justify-between items-center mt-7 ">
                    <p className="text-2xl font-semibold">Decoratives</p>
                </div>
                <div className="flex flex-wrap justify-center gap-10  pb-16 text-center" >
                    {house.map((value, index) => (
                        <div key={index} className="bg-white rounded-2xl p-5 w-64 hover:shadow-lg transition duration-300">

                            <p className="text-center text-[#2c8fa3] text-xs font-medium mb-2"> {value.best} </p>

                            <div className="w-full h-40 overflow-hidden rounded-xl">
                                <img src={value.img} className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" alt="" />
                            </div>

                            <p className="mt-4 text-base font-medium">{value.name}</p>
                            <p className="text-[#2c8fa3] font-semibold text-sm"> ${value.price}
                            </p>

                            <button className="mt-4 w-full border border-[#2c8fa3] text-[#2c8fa3] py-2 rounded-full text-sm hover:bg-[#2c8fa3] hover:text-white transition" onClick={() => handle(value)}> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </>
    )
}