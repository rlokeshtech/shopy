import { useContext, useState } from 'react'
import img1 from './assets/bgimage.jpg'
import { dataContext } from "./App";
export const Categories = () => {
    let categorie = ["Electronics", "Fashion", "Footwear", "Furniture", "Gadgets", "assesories", "Toys & More", "Books", "Beauty", "Auto Accesories"]
    const [cart, setCart, total, setTotal] = useContext(dataContext)
    let electronics = [
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
    ]
    let fashion = [
        { name: "dress", price: 19000, img: img1 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
    ]
    let footwear = [
        { name: "sneakers", price: 19000, img: img1 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
    ]
    let Furniture = [
        { name: "furniture", price: 19000, img: img1 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
    ]
    let Gadgets = [
        { name: "gadgets", price: 19000, img: img1 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
        { name: "Air Conditioner", price: 19000, img: img1, quantity: 0 },
    ]
    let assesories = [
        { name: "assesories", price: 19000, img: img1 },
        { name: "Air Conditioner", price: 19000, img: img1 },
        { name: "Air Conditioner", price: 19000, img: img1 },
        { name: "Air Conditioner", price: 19000, img: img1 },
    ]
    const data = {
        Electronics: electronics,
        Fashion: fashion,
        Footwear: footwear,
        Furniture: Furniture,
        Gadgets: Gadgets,
        assesories: assesories
    }
    const [show, setShow] = useState(false)
    let [item, setItem] = useState([])
    function handle(category) {
        setShow(true)
        setItem(data[category])
    }
    let itemhandle = (item) => {
        setCart([...cart, item])
        setTotal(item.price + total)
    }

    return (
        <>
            <div className="bg-[#f4f8fb] min-h-screen text-gray-800">

                {/* CATEGORY BAR */}
                <div className="sticky top-[72px] z-40 flex gap-6 px-6 py-3 bg-white/60 backdrop-blur-md border border-gray-200 rounded-full w-fit mx-auto  shadow-sm">

                    {categorie.map((value, index) => (
                        <button
                            onClick={() => handle(value, index)}
                            key={index}
                            className="relative px-4 py-1 text-sm font-medium text-gray-500 hover:text-[#2c8fa3] transition group">

                            {value}

                            {/* UNDERLINE ANIMATION */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2c8fa3] transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}

                </div>


                {/* CONTENT */}
                <div className="mt-10 px-14">

                    {show ? (
                        <div className="flex flex-wrap justify-center gap-10">

                            {item.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-5 w-64 hover:shadow-lg transition duration-300">

                                    {/* IMAGE */}
                                    <div className="w-full h-40 overflow-hidden rounded-xl">
                                        <img
                                            src={value.img}
                                            className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                            alt=""
                                        />
                                    </div>

                                    {/* DETAILS */}
                                    <p className="mt-4 text-base font-medium">{value.name}</p>
                                    <p className="text-[#2c8fa3] font-semibold text-sm">
                                        ${value.price}
                                    </p>

                                    <button
                                        className="mt-4 w-full border border-[#2c8fa3] text-[#2c8fa3] py-2 rounded-full text-sm hover:bg-[#2c8fa3] hover:text-white transition"
                                        onClick={() => console.log("Added:", value)}>
                                        Add to Cart
                                    </button>
                                </div>
                            ))}

                        </div>
                    ) : (
                        <div className="space-y-12">

                            {/* FASHION */}
                            <div className="flex flex-wrap justify-center gap-10">
                                {fashion.map((value, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-5 w-64 hover:shadow-lg transition">

                                        <div className="w-full h-40 overflow-hidden rounded-xl">
                                            <img
                                                src={value.img}
                                                className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                                alt=""
                                            />
                                        </div>

                                        <p className="mt-4 text-base font-medium">{value.name}</p>
                                        <p className="text-[#2c8fa3] font-semibold text-sm">
                                            ${value.price}
                                        </p>

                                        <button
                                            className="mt-4 w-full border border-[#2c8fa3] text-[#2c8fa3] py-2 rounded-full text-sm hover:bg-[#2c8fa3] hover:text-white transition"
                                            onClick={() => handle(value)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* ELECTRONICS */}
                            <div className="flex flex-wrap justify-center gap-10">
                                {electronics.map((value, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-5 w-64 hover:shadow-lg transition">

                                        <div className="w-full h-40 overflow-hidden rounded-xl">
                                            <img
                                                src={value.img}
                                                className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                                alt=""
                                            />
                                        </div>

                                        <p className="mt-4 text-base font-medium">{value.name}</p>
                                        <p className="text-[#2c8fa3] font-semibold text-sm">
                                            ${value.price}
                                        </p>

                                        <button
                                            className="mt-4 w-full border border-[#2c8fa3] text-[#2c8fa3] py-2 rounded-full text-sm hover:bg-[#2c8fa3] hover:text-white transition"
                                            onClick={() => itemhandle(value)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* FOOTWEAR */}
                            <div className="flex flex-wrap justify-center gap-10 pb-16">
                                {footwear.map((value, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-5 w-64 hover:shadow-lg transition">

                                        <div className="w-full h-40 overflow-hidden rounded-xl">
                                            <img
                                                src={value.img}
                                                className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                                alt=""
                                            />
                                        </div>

                                        <p className="mt-4 text-base font-medium">{value.name}</p>
                                        <p className="text-[#2c8fa3] font-semibold text-sm">
                                            ${value.price}
                                        </p>

                                        <button
                                            className="mt-4 w-full border border-[#2c8fa3] text-[#2c8fa3] py-2 rounded-full text-sm hover:bg-[#2c8fa3] hover:text-white transition"
                                            onClick={() => handle(value)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}

                </div>

            </div>

        </>
    )
}
