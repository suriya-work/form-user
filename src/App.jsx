import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FormUser from './components/formuser/FormUser'
import User from './components/user/User'
import AddUser from './components/adduser/AddUser'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<FormUser />} />
        <Route path='/user' element={<User />} />
        <Route path='/adduser' element={<AddUser />} />
      </Routes>
    </>
  )
}

export default App
