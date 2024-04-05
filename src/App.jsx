import './App.css'
import HomeLayout from './App/HomeLayout.jsx'
import Mentee from './App/Mentee.jsx'
import Mentor from './App/Mentor.jsx'
import HomeMain from './App/HomeMain.jsx'
import Mentorship from './App/Mentorship.jsx'
import MentorProfile from './App/MentorProfile.jsx'
import { Routes, Route } from 'react-router-dom'
import MentorAboutDes from './App/MentorAboutDes.jsx'
import Missing from './App/Missing.jsx';
import { useState } from 'react'

function App() {
  const [mentors, setMentors] = useState([
    { id: 1,
      name: 'Ramadugu Nagendra Chari',
      email: 'nagendrachariramadugu@gmail.com',
      gender: 'male',
      dob: '2002-08-02',  
      degree: 'B-Tech',
      domain: 'Full Stack Development',
      skills: 'Problem Solving',
      password: 'chari@2002',
      about: '',
      description: ''
    },
    { id: 2,
      name: 'Ramadugu Nagendra Chari',
      email: 'nagendrachariramadugu@gmail.com',
      gender: 'male',
      dob: '2002-08-02',  
      degree: 'B-Tech',
      domain: 'Full Stack Development',
      skills: 'Problem Solving',
      password: 'chari@2002',
      about: '',
      description: ''
    },
    { id: 3,
      name: 'Ramadugu Nagendra Chari',
      email: 'nagendrachariramadugu@gmail.com',
      gender: 'male',
      dob: '2002-08-02',  
      degree: 'B-Tech',
      domain: 'Full Stack Development',
      skills: 'Problem Solving',
      password: 'chari@2002',
      about: '',
      description: ''
    }
  ])
  const [id, setId] = useState(0)
  const [about, setAbout] = useState('')
  const [des, setDes] = useState('')
  const [addEdit, setAddEdit] = useState('Add More Info')
  const [searchValue, setSearchvalue] = useState('')

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomeMain />} />
        <Route path = '/mentor' element = {<Mentor/>}/>
        <Route path = '/mentor/login' element = {<Mentorship
          mentors = {mentors}
          setMentors = {setMentors}
          id = {id}
          setId = {setId}
        />}/>
        <Route path = 'mentor/profile' element = {<MentorProfile
          id = {id}
          setId = {setId}
          mentors = {mentors}
          addEdit = {addEdit}
          setAddEdit = {setAddEdit}
        />}/>
        <Route path = 'mentor/profile/about' element = {<MentorAboutDes
          about = {about}
          setAbout = {setAbout}
          des = {des}
          setDes = {setDes}
          id = {id}
          setId = {setId}
          mentors = {mentors}
          setMentors = {setMentors}
          addEdit = {addEdit}
          setAddEdit = {setAddEdit}
        />}/>
        <Route path = '/mentee' element = {<Mentee
          searchValue={searchValue}
          setSearchvalue={setSearchvalue}
          mentors = {(searchValue)?
            (
              mentors.filter((mentor) => (
                mentor.name.toLowerCase().includes(searchValue.toLowerCase()) 
                || (mentor.domain.toLowerCase().includes(searchValue.toLowerCase()))
                || (mentor.degree.toLowerCase().includes(searchValue.toLowerCase()))
                ||(mentor.skills.toLowerCase().includes(searchValue.toLowerCase()))
              ))
            ):
            (mentors)
          }
          id = {id}
          setId = {setId}
        />}/>
        <Route path = '/*' element = {<Missing/>}/>
      </Route>
    </Routes>
  </>
  
  

  )
}

export default App
