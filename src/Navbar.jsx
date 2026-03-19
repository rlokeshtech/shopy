import { useNavigate, Link } from "react-router-dom"
export default function Navbar(){
    const navigate = useNavigate()
    return(
        <>
        <header className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
                        <div>
                            <p className="text-2xl font-bold text-indigo-600"><Link to="/">Shopy</Link></p>
                        </div>
        
                        <div className="flex gap-8 font-medium text-gray-700">
                            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
                            <Link to="/products" className="hover:text-indigo-600 transition">Products</Link>
                            <Link to="/about" className="hover:text-indigo-600 transition">Cart</Link>
                        </div>
        
                        <div className="login">
                            <button onClick={()=>navigate("/Login")} className="rounded-xl w-20 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-3 py-1.5 text-center leading-5">
                                Login
                            </button>
                        </div>
                    </header>
        </>
    )
}