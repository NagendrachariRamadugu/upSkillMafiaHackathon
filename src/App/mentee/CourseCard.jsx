import ReadMoreP from './ReadmoreP'
import { Link } from 'react-router-dom'

const CourseCard = () => {
  return (
    <div className="M_CourseCard">
      <div className="M_ImageSection">
        <img src="https://imgs.search.brave.com/lhywHX7cYa_OH-8TsplmD1AqlZ3jQeZnMQIOpynG5TY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q3L0xlb25oYXJk/X0V1bGVyLmpwZw" />
        <Link to={'/mentee/profile/euler'} className="M_View_Profile">
          View Profile
        </Link>
      </div>
      <div className="M_InfoSection">
        <div className="M_Title">
          <h3 className="M_Title_h">Leonhard Euler</h3>
          <h3 className="M_Star">( 5⭐ )</h3>
        </div>
        <ReadMoreP
          text=" I am a mathematician and physicist from the 18th century. I have dedicated my life to exploring the intricate beauty of mathematics and its applications to the natural world."
          maxLength={200}
        />
        <div className="M_Skills_Container">
          <h1 className="skillChip_Small">Geometry</h1>
          <h1 className="skillChip_Small">Legendary</h1>
          <h1 className="skillChip_Small">Calculus</h1>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
