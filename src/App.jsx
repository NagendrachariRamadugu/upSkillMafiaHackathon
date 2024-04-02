import { useState } from 'react'
import './App.css'
import Layout from './App/Layout.jsx'
import Mentee from './App/Mentee.jsx'
import Mentor from './App/Mentor.jsx'
import HomeMain from './App/HomeMain.jsx'

import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route 
          path = '/'
          element = {<Layout/>}
        >
          <Route index element = {<HomeMain/>}/>
          <Route path = '/mentor'>
            <Route index element = {<Mentor/>}/>
          </Route>
          <Route path = '/mentee'>
            <Route index element = {<Mentee/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
