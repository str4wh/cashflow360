import React, { useState } from 'react'
import MyLogo from './assets/logo.png'
import MyPic from './assets/homepage1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaTimes } from "react-icons/fa"; 
import { faChartSimple, faListCheck, faThumbsUp, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Diagonalsplit from './diagonalsplit';
import Footer from './footer';

function Homepage() {

    const[isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <nav className="bg-green-500 text-white">
            <div class="flex items-center justify-between p-2">

                {/*logo */}
                <div className="w-full max-w-14 pl-2">
                    <img src={MyLogo} alt="CashFlow Logo" />

                </div>

                 {/*web-view */}
                <div>
                    <ul class="hidden md:flex space-x-5 pr-7">
                        <li><a className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" href="#">Home</a></li>
                        <li><a className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" href="#">Sign-up</a></li>
                        <li><a className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" href="#">log-in</a></li>
                        <li><a className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" href="#">How To Get Started</a></li>
                    </ul>
                </div>

                {/*button for mobile preferences */}
                <button class="flex items-center md:hidden ml-auto pr-4"
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

            </div>

            {/*mobile-view */}
            {isOpen && (
                <ul className="md:hidden flex flex-col space-y-2 px-4 pb-4">
                    <li><a className="hover:bg-green-400 px-3 py-2 rounded transition duration-200 block" href="#">Home</a></li>
                    <li><a className="hover:bg-green-400 px-3 py-2 rounded transition duration-200 block" href="#">Sign-up</a></li>
                    <li><a className="hover:bg-green-400 px-3 py-2 rounded transition duration-200 block" href="#">Sign-in</a></li>
                    <li><a className="hover:bg-green-400 px-3 py-2 rounded transition duration-200 block" href="#">How To Get Started</a></li>
                </ul>
            )}
        </nav>

        {/*home section */}  
        <div className="min-h-screen bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-400 text-white px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="mt-10 text-center md:text-left">
                    <p className="text-3xl md:text-5xl font-bold">Stay on Top of Your Business with <span class="text-green-400 font-Poetsen-One">CashFlow360</span></p>
                    <p className="mt-4 text-base md:text-lg">
                        Track money, sales, payments, and deposits — all in one smart, organized place
                    </p>
                </div>

                <div className="mt-6 flex justify-center md:justify-end">
                    <img className="rounded-3xl w-4/5 md:w-full"src={MyPic} alt="Graph" />
                </div>
            </div>

            {/*home section 2 */}
            <div> 
                <div className="mt-10">
                    <p className="text-center font-bold text-3xl sm:text-4xl md:text-5xl">With <span class="italic">CashFlow360 </span>you are able to:</p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
                    {/* Track Sales & Finances - Full width on mobile */}
                    <div className="col-span-2 border-0 shadow-xl/30 rounded-4xl p-4 mt-4 bg-green-400 hover:bg-green-600 transition duration-500 md:col-span-4 md:col-start-2">
                        <p className="text-center font-extrabold text-[20px] mb-2 md:text-[20px]">
                            <FontAwesomeIcon className="text-2xl text-white" icon={faChartSimple} /> Track Sales & Finances
                        </p>
                        <p className="text-center text-[13px] md:text-[16px]">Monitor daily sales, customer payments, and overall cash flow in one place.</p>
                    </div>

                    {/* Manage Accounts & Debts - Left Card (50% width on mobile) */}
                    <div className="col-span-1 border-0 shadow-xl/30 rounded-4xl p-4 mt-4 bg-green-400 hover:bg-green-600 transition duration-500 md:col-span-2 md:col-start-1">
                        <p className="text-center font-extrabold text-[20px] mb-2 break-words md:text-[20px]">
                            <FontAwesomeIcon className="text-xl text-white" icon={faListCheck} /> Manage Accounts & Debts
                        </p>
                        <p className="text-center text-[13px] px-1 md:text-[16px]">
                            Keep accurate records of customer balances, outstanding debts, and transactions.
                        </p>
                    </div>

                    {/* Simplify Deposits & Transactions - Right Card (50% width on mobile) */}
                    <div className="col-span-1 border-0 shadow-xl/30 rounded-4xl p-4 mt-4 bg-green-400 hover:bg-green-600 transition duration-500 md:col-span-2 md:col-start-5">
                        <p className="text-center font-extrabold text-[20px] mb-2 break-words md:text-[20px]">
                            <FontAwesomeIcon className="text-xl text-white" icon={faThumbsUp} /> Simplify Deposits & Transactions
                        </p>
                        <p className="text-center text-[13px] px-1 md:text-[16px]">Log cash, bank, and Mpesa transactions for clean, organized financial tracking.</p>
                    </div>

                    {/* Make Smarter Decisions - Full width */}
                    <div className="col-span-2 border-0 shadow-xl/30 rounded-4xl p-4 mt-4 bg-green-400 hover:bg-green-600 transition duration-500">
                        <p className="text-center font-extrabold text-[20px] mb-2 md:text-[20px]">
                            <FontAwesomeIcon className="text-2xl text-white" icon={faLightbulb} /> Make Smarter Business Decisions
                        </p>
                        <p className="text-center text-[14px] md:text-[16px]">Use real-time data and reports to guide budgeting, planning, and growth.</p>
                    </div>
                </div>
            </div>

            {/*home section 3*/}
            <div>
                <div className="mt-10">
                    <p className="text-center font-bold text-3xl sm:text-4xl md:text-5xl">How To Get Started With <span class="italic">CashFlow360!!</span></p>
                </div >
            </div>
             <div>
                <Diagonalsplit />
             </div>
             
            {/*FOOTER*/}
            <div>
                <Footer />
            </div>
        </div>
    </div>
  )
}
export default Homepage