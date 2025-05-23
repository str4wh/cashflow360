import React, { useState } from "react";
import MyLogo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google';

function Signup() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    // Test to make sure component is rendering
    console.log("Signup component is rendering");
    
    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="bg-green-500 text-white">
                <div className="flex items-center justify-between p-2">
                    {/* Logo */}
                    <div className="w-full max-w-14 pl-2">
                        <img src={MyLogo} alt="CashFlow Logo" className="h-auto" />
                    </div>

                    {/* Desktop Navigation */}
                    <div>
                        <ul className="hidden md:flex space-x-5 pr-7">
                            <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="/">Home</Link>
                            <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="/signup">Sign Up</Link>
                            <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="/login">Log in</Link>
                            <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="/howtogetstarted">How to get started</Link>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex items-center md:hidden ml-auto pr-4"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <ul className="md:hidden flex flex-col space-y-2 px-4 pb-4">
                        <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="/">Home</Link>
                        <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="/signup">Sign Up</Link>
                        <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="/login">Log in</Link>
                        <Link className="hover:bg-green-400 px-3 py-2 rounded transition duration-200" to="/howtogetstarted">How to get started</Link>
                    </ul>
                )}
            </nav>

            {/* Main Content */}
            <div className="bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-400 flex items-center justify-center px-4 py-8 min-h-[calc(100vh-80px)]">
                <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 sm:p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                        <p className="text-gray-600 text-sm sm:text-base">Join CashFlow360 to manage your finances</p>
                    </div>

                    {/* Sign Up Form */}
                    <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                                    placeholder="Create a password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <FaEyeSlash className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <FaEye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <FaEye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 font-medium"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6">
                        <div className="flex items-center">
                            <div className="flex-1 border-t border-gray-300"></div>
                            <span className="px-4 text-gray-500 text-sm">or</span>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>
                    </div>

                    {/* Google Login - Made optional in case it's causing issues */}
                    <div className="flex justify-center">
                        {/* Temporarily comment out GoogleLogin if it's causing issues */}
                        <div className="w-full">
                            <button 
                                type="button"
                                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                        
                        {/* Uncomment this when GoogleLogin is properly configured */}
                        {/*
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log('Google login success:', credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            theme="outline"
                            size="large"
                            width="300"
                        />
                        */}
                    </div>

                    {/* Login Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-green-500 hover:text-green-600 font-medium">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;