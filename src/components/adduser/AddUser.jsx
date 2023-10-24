import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
const AddUser = ({ users }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    // this is for online mode

    // const AddUsers = async (e) => {
    //     e.preventDefault();
    //     if (userName || password) {
    //         const response = await fetch('http://185.8.172.145:88/api/User/createUser', {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 'userName': userName,
    //                 'password': password
    //             }),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //                 'Authorization': `Bearer ${localStorage.getItem('token')}`
    //             },
    //         })
    //         if (response.ok) {
    //             response.json().then(res => console.log(res))
    //             users.push({
    //                 'userName': userName,
    //                 'password': password
    //             })
    //             setRedirect(true)


    //         } else {
    //             alert('error')
    //         }
    //     }
    // }

    // this is for offline mode

    const pushData = () => {
        users.push({
            'id': Math.floor(Math.random() * 100),
            'userName': userName,
            'password': password
        })
        setRedirect(true)
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
        <div className='container mx-auto flex justify-center items-center mt-16'>
            <div className='w-full max-w-sm mt-4'>
                <h1 className='text-[28px] text-orange font-bold text-center py-4'>Add User</h1>

                <form onSubmit={pushData} className="bg-white h-auto px-8 pt-14">
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

                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-orange text-white font-bold py-3 w-full px-2 rounded focus:outline-none focus:shadow-outline disabled:bg-[#c0c2c0ee]" type="submit" disabled={!userName || !password}>
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
