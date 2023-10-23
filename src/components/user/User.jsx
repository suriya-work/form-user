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
    console.log(b)
    setUpdate(b)
    users = update

    // console.log(currentCardIndex)

    // const filterEdit = users.filter((item) => item.id === id)
    // const filtered = users.filter((item) => item.id !== id)
    // filterEdit.userName
    // console.log(filterEdit)


    // const editedTaskList = filterEdit.map((item) => {
    //   if (id === item.id) {
    //   }
    //   return {...item , userName:edited};
    //   return task;
    // });
    // setUpdate(editedTaskList);
    // console.log(update)
    // filtered.push([...update])
    // console.log(filtered)
    // setUsers([...filterData])

  }

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between mx-5 lg:mx-0'>
        <h1 className='text-[20px] lg:text-[28px] text-orange font-bold text-center py-4'>Users List</h1>
        <Link to='/adduser'>
          <button className='bg-orange  font-medium rounded-lg mt-3  lg:mt-5 text-sm w-[85px] lg:w-[150px]  h-[40px] text-center text-[#fff]'>Add User</button>
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

                  <input type="text" placeholder='edit your Name' className='border w-[85px] lg:w-[190px] h-[40px] mt-10 rounded-[10px] px-3'  onChange={(e) => setEdited(e.target.value)} />

                  <button type='submit' className='border w-[85px] lg:w-[50px] ml-1 h-[40px] mt-10 rounded-[10px] px-3'>✔</button>
                </form>

                <div className='mt-10 flex gap-3 lg:gap-10'>

                  {/* <button className='bg-blue-700  font-medium rounded-lg text-sm w-[85px] lg:w-[150px] h-[40px] text-center text-[#fff]'>Edit User</button> */}
                  {/* modal for button delete */}
                  <button className="bg-[#dc2626]  font-medium rounded-lg text-sm w-[85px] lg:w-[150px]  h-[40px] text-center text-[#fff]" onClick={() => deleteHandler(users.id)}>Delete User</button>
                  {/* <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <div className='text-center'>
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <p className="py-4 text-center">Are you sure you want to delete this User?</p>
                      <div className="modal-action flex justify-center">
                        <form method="dialog">
                          <button className="text-white bg-orange focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">Yes i'm sure</button>
                          <button className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </form>
                      </div>
                    </div>
                  </dialog> */}
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
