import React from 'react'
import Nav from '../Components/nav'
import { GoogleLogin } from '@react-oauth/google'
import Footer from '../Components/footer'

function Login() {

  return (
    <div>
        <Nav />
    
        {/*main content */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-400 flex items-center justify-center px-4 py-8 min-h-[calc(100vh-80px)]">
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md bg-white rounded-lg p-8">
                  {/*Header */}
                    <div className="text-center mb-6">
                       <h1 className="font-semibold text-2xl mb-8">Log-in to your account</h1>
                       <h3 className="text-gray-600 font-normal">Track your finances all in one-smart-organised place, <span className="font-bold">LOG-IN NOW!!</span></h3>
                    </div>

                    {/*form */}
                    <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>

                      {/*email */}
                      <div>
                        <label htmlFor="email" className="block text-[16px] font-medium text-gray-700 mb-2"> Email Address</label>
                        <input 
                        type="email" 
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 block border border-gray-300 p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your email"
                        required/>
                      </div>

                      {/*password*/}
                      <div>
                        <label htmlFor="password" className="block text-[16px] font-medium text-gray-700 mb-2">Password</label>
                        <input 
                        type="password" 
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your password"
                        required/>
                      </div>

                      {/* log in Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 font-medium">
                            Log in
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

                    {/* Google Login */}
                    <div className="flex justify-center">
                        <div className="w-full">
                            <div className="w-full flex items-center justify-center">
                                <GoogleLogin   
                                onSuccess={(credentialResponse) => {
                                console.log(credentialResponse)
                                }} 
                                onError={() => console.log("Login Failed")}
                                theme="outline"
                                size="large"
                                width="200"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
} // Added missing closing brace for Login function

export default Login