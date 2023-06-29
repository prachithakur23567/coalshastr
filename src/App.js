import React from 'react'
import Form from './Form'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact';


const App = () => {
  return (
    <>
      {/* <h1>hii</h1> */}
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/form' element={<Form />} />
      </Routes>

    </>
  )
}

export default App

