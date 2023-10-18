import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import back from '../../../public/image/back.jpg'
const FormUser = () => {
    return (
        <div className='container mx-auto lg:ml-12 lg:fixed lg:bottom-0 flex justify-center items-center lg:justify-between mt-20'>

            <div class="w-full max-w-sm mt-4">
                <h1 className='text-[20px] text-orange font-bold text-center'>Welcome</h1>
                <form className="bg-white h-auto px-8 pt-14">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-8" for="username">
                            UserName
                        </label>
                        <input className="shadow-md  rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username..." />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-8" for="password">
                            Password
                        </label>
                        <input className="shadow-md appearance-none border-red-500 rounded w-full py-3 px-3 text-gray-700 mb-8 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********" />
                        <p className="text-orange text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-orange text-white font-bold py-3 w-full px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                            Log In
                        </button>

                    </div>
                    <div className='flex items-center justify-center mt-5'>

                        <div className='bg-[#eee] w-[40%] h-[2px]'></div>
                        <h1 className='text-[16px] text-orange font-bold text-center px-5'>OR</h1>
                        <div className='bg-[#eee] w-[40%] h-[2px]'></div>
                    </div>
                    <div className='flex justify-center items-center ml-3 gap-16'>
                        <BsFacebook color='blue' />
                        <FcGoogle />
                    </div>
                </form>
            </div>
            <div className='hidden lg:inline'>
                <img className='w-full h-[600px]' src={back} alt="" />
            </div>
        </div>
    )
}

export default FormUser
