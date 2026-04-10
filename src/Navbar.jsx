import { useNavigate, Link } from "react-router-dom"

export default function Navbar(){
    const navigate = useNavigate()

    return(
        <>
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm ">

            <div className="flex justify-between items-center px-16 py-5 text-[#1f5f6b]">

                {/* LOGO */}
                <div>
                    <p className="text-2xl font-semibold tracking-wide">
                        <Link to="/">The Fluid Editorial</Link>
                    </p>
                </div>

                {/* NAV LINKS */}
                <div className="flex gap-10 text-[15px] font-medium">

                    <Link to="/" className="relative group">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1f5f6b] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link to="/products" className="relative group text-gray-600 hover:text-[#1f5f6b] transition">
                        Shop
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1f5f6b] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link to="/categories" className="relative group text-gray-600 hover:text-[#1f5f6b] transition">
                        Categories
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1f5f6b] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link to="/about" className="relative group text-gray-600 hover:text-[#1f5f6b] transition">
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1f5f6b] transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                </div>

                {/* RIGHT ICONS */}
                <div className="flex items-center gap-6 text-xl text-[#1f5f6b]">

                    <span className="cursor-pointer hover:scale-110 transition">🔍</span>
                    <span className="cursor-pointer hover:scale-110 transition"><Link to="/cart">🛒</Link></span>
                    <span className="cursor-pointer hover:scale-110 transition">👤</span>

                </div>

            </div>

        </header>

        {/* SPACER (IMPORTANT for fixed navbar) */}
        <div className="h-[72px]"></div>
        </>
    )
}