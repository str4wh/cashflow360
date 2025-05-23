import React from 'react'
import { FaBars, } from "react-icons/fa";
function Diagonalsplit() {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
        
        <div className="flex-1 min-h-[50vh] sm:min-h-[80vh] border-r-2 flex flex-col justify-center items-center">
            
            {/*RIGHT SIDE */}
            {/*STEP 1 */}
            <div className="max-w-[90%] sm:max-w-full mb-2 ml-4 mr-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-center">Step 1</p>
                <div className="border-0 shadow-xl/30 bg-green-400 hover:bg-green-600 transition duration-200 rounded-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:p-9">
                    <div className="flex items-center justify-center">
                        <FaBars size={80} sm:size={140} />
                    </div>

                    <div>
                        <p className="font-extrabold">FOR PHONES</p>
                        <p className="break-words text-sm sm:text-base">Head Over to the menu button and click sign-up</p>
                        <p className="font-extrabold">FOR WEB-VIEW</p>
                        <p className="break-words text-sm sm:text-base">Head over to the Navigation bar and click sign-up</p>
                    </div>
                </div>
            </div>


            {/*STEP 3 */}
            <div className="max-w-[90%] sm:max-w-full mt-4 ml-4 mr-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-center">Step 3</p>
                <div className="border-0 shadow-xl/30 bg-green-400 hover:bg-green-600 transition duration-200 rounded-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:p-9">
                    <div className="flex items-center justify-center">
                        <FaBars size={80} sm:size={140} />
                    </div>

                    <div>
                        <p className="font-extrabold">FOR PHONES</p>
                        <p className="break-words text-sm sm:text-base">Head Over to the menu button and click sign-up</p>
                        <p className="font-extrabold">FOR WEB-VIEW</p>
                        <p className="break-words text-sm sm:text-base">Head over to the Navigation bar and click sign-up</p>
                    </div>
                </div>
            </div>

        </div>

        {/*RIGHT SIDE */}
        <div className="flex-1 min-h-[50vh] sm:min-h-[80vh]  flex flex-col justify-center items-center">

            {/*STEP 2 */}
            <div className="max-w-[90%] sm:max-w-full mt-14 mb-2 ml-4 mr-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-center">Step 2</p>
                <div className="border-0 shadow-xl/30 bg-green-400 hover:bg-green-600 transition duration-200 rounded-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:p-9">
                    <div className="flex items-center justify-center">
                        <FaBars size={80} sm:size={140} />
                    </div>

                    <div>
                        <p className="font-extrabold">FOR PHONES</p>
                        <p className="break-words text-sm sm:text-base">Head Over to the menu button and click sign-up</p>
                        <p className="font-extrabold">FOR WEB-VIEW</p>
                        <p className="break-words text-sm sm:text-base">Head over to the Navigation bar and click sign-up</p>
                    </div>
                </div>
            </div>

             {/*STEP 4 */}
            <div className="max-w-[90%] sm:max-w-full mt-4 ml-4 mr-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-center">Step 4</p>
                <div className="border-0 shadow-xl/30 bg-green-400 hover:bg-green-600 transition duration-200 rounded-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:p-9">
                    <div className="flex items-center justify-center">
                        <FaBars size={80} sm:size={140} />
                    </div>

                    <div>
                        <p className="font-extrabold">FOR PHONES</p>
                        <p className="break-words text-sm sm:text-base">Head Over to the menu button and click sign-up</p>
                        <p className="font-extrabold">FOR WEB-VIEW</p>
                        <p className="break-words text-sm sm:text-base">Head over to the Navigation bar and click sign-up</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Diagonalsplit