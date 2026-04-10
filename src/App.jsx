import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Products from "./Products"
import { createContext, useState } from "react"
import Cart from "./Cart"
import Navbar from "./Navbar"
import { Categories } from "./Categories"
import About from "./About"



export const dataContext = createContext()
export default function App() {
  const [cart, setCart] = useState([])
  let [total, setTotal] = useState(0)

  return (
    <dataContext.Provider value={[cart, setCart, total, setTotal]}>
       <Navbar/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </dataContext.Provider>
  )
}