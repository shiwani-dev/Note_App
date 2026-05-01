// import { useState } from "react";
// import{Link}from "react-router-dom"
import p1 from "../assets/p1.jpg";

function Login () {

    // const[user,setUser] = useState("");

    return (

        <div
        style={{ backgroundImage: `url(${p1})` }}
         className="flex min-h-screen items-center justify-center bg-cover bg-center">
            <div>

                <form className="bg-white/20 backdrop-blur-md border-white/30 shadow-lg transition   hover:scale-105 hover:bg-white rounded-2xl p-15" >

                <div className="text-center">
                <h1 className="mb-2 font-bold text-2xl text-purple-700">Login</h1>
            <p className="mb-5 ">Please enter your details to Login.</p>
            </div>
            <div>
                <button className="  bg-gray-100 transition duration-300 hover:scale-105 hover:bg-violet-500 rounded-1xl p-1 w-25 ">Google</button>
                <button className=" bg-gray-100 transition duration-300 hover:scale-105 hover:bg-violet-500 rounded-1xl p-1 w-25 ml-30">Facebook</button>
            </div>
            <p className="text-gray-300">_______________________or ______________________</p>
            <div className="mt-4">
                <p>Email</p>
                <input 
                type="text"
                placeholder="Enter your Email"
                className="  bg-gray-100 mt-2 p-1 w-80 "
                 />
            </div>
             <div className="mt-3">
                <p>Password</p>
                <input 
                type="password"
                placeholder="Enter your password"
                className="  bg-gray-100 mt-2 p-1 w-80"
                 />
            </div>
            
            <div className="flex mt-4">
             <input type="checkbox"
                  />
            <p className="ml-1">Remember </p>
            <p className="ml-28">Forget Password</p>
            </div>
            

            <div className="mt-4">
                <div>
                    <button className="bg-violet-500 hover:bg-gray-200  transition duration-300 hover:scale-105 p-1 w-80 rounded-1xl">Login</button>
                </div>
                <div>
                    <p className="text-sm text-center mt-2">Don't have an account Yet? 
                        {/* <Link >Sign Up</Link> */}
                        <span>Sign Up</span>
                    </p>
                </div>
                
            </div>

            </form>

            </div>
        </div>



    );
};
export default Login;