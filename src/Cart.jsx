import { useContext } from "react"
import { dataContext } from "./App";
export default function Cart() {
    const [cart, setCart, total, setTotal] = useContext(dataContext)

    return (
        <>
            <div className="bg-[#f4f8fb] min-h-screen py-12 px-16 text-gray-800">

    <div className="flex gap-12">

        {/* CART ITEMS */}
        <div className="flex-1 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-sm">

            <h2 className="text-2xl font-semibold mb-8 border-b border-gray-200 pb-4">
                Shopping Cart
            </h2>

            {cart.length == 0 ? (
                <p className="text-gray-400 text-center py-12 text-base">
                    Your cart is currently empty.
                </p>
            ) : (
                cart.map((value, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-white rounded-xl px-5 py-4 mb-4 hover:shadow-md transition border border-gray-100">

                        {/* LEFT */}
                        <div className="flex items-center gap-4">

                            {/* IMAGE ZOOM CONTAINER */}
                            <div className="w-16 h-16 overflow-hidden rounded-lg">
                                <img
                                    src={value.img}
                                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                    alt=""
                                />
                            </div>

                            <p className="font-medium text-gray-700">
                                {value.name}
                            </p>

                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-8">

                            {/* QUANTITY */}
                            <div className="flex items-center gap-4 border border-gray-200 rounded-full px-3 py-1">

                                <button className="text-lg text-gray-500 hover:text-[#2c8fa3] transition">
                                    −
                                </button>

                                <p className="text-sm font-medium">1</p>

                                <button className="text-lg text-gray-500 hover:text-[#2c8fa3] transition">
                                    +
                                </button>

                            </div>

                            {/* PRICE */}
                            <p className="text-[#2c8fa3] font-semibold">
                                ${value.price}
                            </p>

                        </div>

                    </div>
                ))
            )}

        </div>


        {/* ORDER SUMMARY */}
        <div className="w-80 h-fit bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl p-6 sticky top-24 shadow-sm">

            <h3 className="text-lg font-medium mb-6 border-b border-gray-200 pb-3">
                Order Summary
            </h3>

            <div className="flex justify-between text-sm mb-6 text-gray-600">
                <p>Total</p>
                <p className="font-semibold text-[#2c8fa3] text-base">
                    ${total}
                </p>
            </div>

            <button className="w-full bg-[#2c8fa3] text-white py-2.5 rounded-full text-sm hover:bg-[#247685] transition">
                Proceed to Checkout
            </button>

        </div>

    </div>

</div>
        </>
    )
}