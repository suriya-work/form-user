import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const User = ({ users, setUsers }) => {
  const [edited, setEdited] = useState('');
  const [update, setUpdate] = useState()
  const deleteHandler = (id) => {
    const filterData = users.filter((item) => item.id !== id)
    setUsers([...filterData])
  }
  // edetHandlr
  const editSubmit = (e, id) => {
    e.preventDefault();
    const b = [...users]
    const currentCardIndex = users.findIndex(
      (item) => item.id === id
    );
    b[currentCardIndex].userName = edited
    setUpdate(b)
    users = update
  }

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between mx-5 lg:mx-0'>
        <h1 className='text-[20px] lg:text-[28px] text-orange font-bold text-center py-4'>Users List</h1>
        <Link to='/adduser'>
          <button className='bg-orange  font-medium rounded-lg mt-3  lg:mt-5 text-sm w-[95px] lg:w-[150px]  h-[40px] text-center text-[#fff]'>Add User</button>
        </Link>
      </div>
      <div className='border border-b-2 w-full'></div>
      {/* <form> */}
      {
        users.map((users) => {
          return (
            <div key={users.id} >
              <div className='flex justify-between mx-4 lg:mx-0'>
                <p className='text-[#000] text-[20px] font-bold mt-10'>{users.userName}</p>
                <form onSubmit={(e) => editSubmit(e, users.id)}>

                  <input type="text" placeholder='edit your Name' className='border w-[160px] md:w-[240px] h-[40px] mt-10 rounded-[10px] px-3' onChange={(e) => setEdited(e.target.value)} />
                  <button type='submit' className='border w-[38px] lg:w-[50px] ml-1 h-[40px] mt-10 rounded-[10px] px-3'>✔</button>
                </form>
                <div className='mt-10 flex gap-3 lg:gap-10'>

                  <button className="bg-[#dc2626]  font-medium rounded-lg text-sm w-[90px] lg:w-[150px]  h-[40px] text-center text-[#fff]" onClick={() => deleteHandler(users.id)}>Delete User</button>
                </div>
              </div>
            </div>
          )
        })
      }

      {/* </form> */}

    </div >
  )
}

export default User
