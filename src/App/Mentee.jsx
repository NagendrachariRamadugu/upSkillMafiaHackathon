import { Routes, Route, useNavigate } from 'react-router-dom'

import './Mentee.css'
import MenteeSearch from './mentee/Filter'
import Search from './mentee/Search'
import CourseCard from './mentee/CourseCard'

const Mentee = () => {
  return (
    <div className="MenteeMain">
      <div className="Mentee_Inner">
        <div className="border_bottom">
          <Search />
          <div className="Test">
            <MenteeSearch />
            <MenteeSearch />
          </div>
        </div>
        <div className="MenteeCourses">
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  )
}
export default Mentee
