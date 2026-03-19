import { useState } from "react"

export default function Login() {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let numberRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/
    let [email,setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [number, setNumber] = useState("")

    function submit(e) {
        e.preventDefault()
        if (!emailRegex.test(email)){
            alert('Enter the correct Email')
            return
        }
        if (!passRegex.test(password)){
            alert('inccorect password')
            return
        }
        
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100">

            <form className="bg-white shadow-xl rounded-2xl w-96 p-8 flex flex-col gap-6">

                <h2 className="text-2xl font-semibold text-center">Registration Form</h2>

                <div>
                    <label className="font-medium text-gray-700">Email</label>
                    <input 
                        type="text"
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="font-medium text-gray-700">Password</label>
                    <input 
                        type="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div>
                    <label className="font-medium text-gray-700">Number</label>
                    <input 
                        type="text"
                        onChange={(e)=>setNumber(e.target.value)}
                        className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <p className="font-medium text-gray-700 mb-2">Gender</p>
                    <div className="flex gap-4 items-center">
                        <input type="radio" name="Gender"/>
                        <span>Male</span>

                        <input type="radio" name="Gender"/>
                        <span>Female</span>
                    </div>
                </div>
                <button 
                    type="submit"
                    onClick={(e)=>submit(e)}
                    className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>

            </form>

        </div>
    )
}