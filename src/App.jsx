import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FormUser from './components/formuser/FormUser'
import User from './components/user/User'
const App = () => {
  return (
    <>
{/* <User /> */}
    <FormUser />
      <Routes>
        <Route path='/user' element={<User />} />
      </Routes>

    </>
  )
}

export default App
