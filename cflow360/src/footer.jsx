import React from 'react'
import MyLogo from './assets/logo.png'

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
            <div className="pl-12">
                <h3 class="font-bold text-4xl">Quick Links</h3>
                <ul className="py-8">
                        <li className="py-2 hover:bg-green-400 px-3 rounded transition duration-200 font-semibold"><a  href="#">Home</a></li>
                        <li className="py-2 hover:bg-green-400 px-3 rounded transition duration-200 font-semibold"><a  href="#">Sign up</a></li>
                        <li className="py-2 hover:bg-green-400 px-3 rounded transition duration-200 font-semibold"><a  href="#">Log In</a></li>
                        <li className="py-2 hover:bg-green-400 px-3 rounded transition duration-200 font-semibold"><a  href="#">How to get started</a></li>
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