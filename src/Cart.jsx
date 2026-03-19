import { useContext } from "react"
import { dataContext } from "./App";
import Navbar from "./Navbar";

export default function Cart() {
    const [cart,setCart, total, setTotal] = useContext(dataContext)

    return (
        <>
            <Navbar />

            <div className="bg-gray-100 min-h-screen py-10 px-10">

                <div className="flex gap-10">

                    {/* CART ITEMS */}
                    <div className="flex-1 bg-white shadow-xl rounded-2xl p-8">

                        <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
                            Shopping Cart
                        </h2>

                        {cart.length == 0 ? (
                            <p className="text-gray-500 text-center py-10 text-lg">
                                No Items Added to Cart
                            </p>
                        ) : (
                            cart.map((value, index) => (
                                <div
                                    className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 mb-4 hover:bg-gray-100 transition shadow-sm"
                                    key={index}
                                >

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={value.img}
                                            className="w-14 h-14 rounded-lg object-cover shadow"
                                            alt=""
                                        />

                                        <p className="font-semibold text-gray-700 text-lg">
                                            {value.name}
                                        </p>
                                    </div>

                                    <p className="text-indigo-600 font-bold text-lg">
                                        ${value.price}
                                    </p>

                                </div>
                            ))
                        )}

                    </div>


                    {/* TOTAL PANEL */}
                    <div className="w-80 h-fit bg-white shadow-xl rounded-2xl p-6 sticky top-24">

                        <h3 className="text-xl font-semibold mb-4 border-b pb-3">
                            Order Summary
                        </h3>

                        <div className="flex justify-between text-lg mb-4">
                            <p>Total</p>
                            <p className="font-bold text-green-600">
                                ${total}
                            </p>
                        </div>

                        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
                            Checkout
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}