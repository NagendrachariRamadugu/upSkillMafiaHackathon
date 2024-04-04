import './App.css'
import HomeLayout from './App/HomeLayout.jsx'
import MentorLayout from './App/MentorLayout.jsx';
import Mentee from './App/Mentee.jsx'
import Mentor from './App/MentorLayout/Mentor.jsx'
import HomeMain from './App/HomeMain.jsx'
import MenteeLayout from './App/mentee/MenteeLayout.jsx'
import Profile from './App/mentee/Profile.jsx'
import MentorLogin from './App/MentorLayout/MentorLogin.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  const Dummy = () => {
    return (
      <>
        Hii ra how are you 
      </>
    )
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomeMain />} />

          <Route path="/mentor" element = {<MentorLayout/>}>
            <Route index element={<Mentor />}></Route>
            <Route path = 'login'>
              <Route index element = {<MentorLogin/>}/>
            </Route>
          </Route>

          <Route path="/mentee" element={<MenteeLayout />}>
            {/* Children */}
            <Route index element={<Mentee />}></Route>
            <Route path="/mentee/profile/:id" element={<Profile />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
