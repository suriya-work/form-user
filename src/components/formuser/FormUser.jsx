import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import back from '../../../public/image/back.jpg'
const FormUser = () => {
    // state and useEffect
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    //submit
    const login = async (e) => {
        e.preventDefault();
        // console.log('me error')
        const response = await fetch('http://185.8.172.145:88/api/Account/login', {
            method: "POST",
            body: JSON.stringify({
                userName,
                password
            }),
            headers: { "content-Type": "application/json" },
        })
        if (response.ok) {
            response.json().then(res => {
                const { refreshToken } = res.resultViewModel;
                localStorage.setItem('token', refreshToken);
                setRedirect(true)

                console.log(refreshToken)
            })
        } else {
            alert('error')
        }

    }
    if (redirect) {
        return <Navigate to={'/user'} />
    }
    // onchange
    const changeUserName = (e) => {
        const userName = e.target.value;
        setUserName(userName)
    }
    const changePassword = (e) => {
        const password = e.target.value;
        setPassword(password)
    }


    return (
        <div className='container mx-auto lg:ml-12 lg:fixed lg:bottom-0 flex justify-center items-center lg:justify-between mt-20'>
            {/* image */}
            <div className='hidden lg:inline'>
                <img className='w-full h-[600px]' src={back} alt="background" />
            </div>
            {/* form submit */}
            <div className="w-full max-w-sm mt-4">
                <h1 className='text-[20px] text-orange font-bold text-center'>Welcome</h1>
                <form onSubmit={login} className="bg-white h-auto px-8 pt-14">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-8">
                            UserName
                        </label>
                        <input className="shadow-md  rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="UserName..." value={userName} onChange={changeUserName} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-8">
                            Password
                        </label>
                        <input className="shadow-md appearance-none border-red-500 rounded w-full py-3 px-3 text-gray-700 mb-8 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="**********" value={password} onChange={changePassword} />
                        <p className="text-orange text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        {/* <Link to='/user' className='w-full'> */}
                        <button className="bg-orange text-white font-bold py-3 w-full px-2 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Log In
                        </button>
                        {/* </Link> */}

                    </div>
                    {/* OR and Icons */}
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

        </div>
    )
}

export default FormUser
