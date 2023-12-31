import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FormUser from './components/formuser/FormUser'
import User from './components/user/User'
import AddUser from './components/adduser/AddUser'
// data
import { userData } from './api/userData'
const App = () => {
  const [users, setUsers] = useState(userData)
  return (
    // used routes
    <>
      <Routes>
        <Route path='/' element={<FormUser />} />
        <Route path='/user' element={<User users={users} setUsers={setUsers} />} />
        <Route path='/adduser' element={<AddUser users={users} />} />
      </Routes>
    </>
  )
}

export default App
