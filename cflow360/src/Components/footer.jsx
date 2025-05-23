import React from 'react'
import MyLogo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-green-500 text-white rounded-4xl">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

            {/* Logo & Description */}
            <div className="sm:justify-center items-center">
                <img className="max-w-36" src={MyLogo} alt="Logo" />
                <p className="mt-4"><span className="font-extrabold text-4xl font-Poetsen-One">CASHFLOW360</span></p>
                <p className="mt-4"><span className="font-semibold">Track it. Stack it. Relax—CashFlow360's got your back.</span></p>
            </div>

            {/* quick links*/}
            <div>
                <h3 class="font-bold text-4xl">Quick Links</h3>
                <ul className="py-8 flex flex-col space-y-2 font-semibold">
                    <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="/">Home</Link>
                    <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="../signup">Sign Up</Link>
                    <Link  className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="../login">Log in</Link>
                    <Link  className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="../howtogetstarted">How to get started</Link>
                </ul>
            </div>

            {/* contact info*/}
            <div>
                <h3 class="font-bold text-4xl">Contact us</h3>
                 <div className="py-8">
                    <p class="font-semibold">Email: info@skillmaster.com</p>
                    <p class="font-semibold">Phone: +254123456</p>
                    <p class="font-semibold">Location: Nairobi, Kenya </p>
                 </div>
            </div>
        </div>

        <div className="text-center mt-24 py-4 border-t">
                © {new Date().getFullYear()} cashflow360. All rights reserved.
            </div>
    </div>
  )
}

export default Footer