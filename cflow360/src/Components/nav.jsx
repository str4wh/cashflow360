import React, { useState } from 'react'
import MyLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-green-500 text-white w-full">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={MyLogo} alt="CashFlow Logo" className="h-10 w-auto" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <ul className="flex items-center space-x-6">
                        <li>
                            <Link 
                                className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" 
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" 
                                to="/signup"
                            >
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" 
                                to="/login"
                            >
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" 
                                to="/howtogetstarted"
                            >
                                How to get started
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-green-400">
                    <ul className="flex flex-col space-y-1 px-4 py-4">
                        <li>
                            <Link 
                                className="block hover:bg-green-400 px-3 py-2 rounded transition duration-200" 
                                to="/"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="block hover:bg-green-400 px-3 py-2 rounded transition duration-200" 
                                to="/signup"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="block hover:bg-green-400 px-3 py-2 rounded transition duration-200" 
                                to="/login"
                                onClick={() => setIsOpen(false)}
                            >
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="block hover:bg-green-400 px-3 py-2 rounded transition duration-200" 
                                to="/howtogetstarted"
                                onClick={() => setIsOpen(false)}
                            >
                                How to get started
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Nav;