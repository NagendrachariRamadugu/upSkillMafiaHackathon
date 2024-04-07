import './mentee.css';
import {useNavigate} from 'react-router-dom';

const Mentee = ({searchValue, setSearchvalue, mentors, setMentors, id, setId}) => {

  const navigate = useNavigate();

  const handleClick = (key) => {
    setId(key)
    navigate('/mentor/profile')
  } 
  return (
    <div className='mentee-page'>
      <form className="mentor-search-input">
        <label htmlFor="mentor-search">Search</label>
        <input 
          type="text"
          id = 'mentor-search'
          value = {searchValue}
          name = 'mentor-search'
          placeholder='Search for Mentors/courses'
          onChange = {(e) => {
            setSearchvalue(e.target.value)
          }}
        />
      </form>
      <br /><br /><br />
      <div className='display-mentors'>
          {(!mentors.length)?(
            <div style = {{
              textAlign: 'center',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              Can't find what you are looking for &#128546; !!
            </div>
          ):(
            mentors.map(mentor => {
              return (
                <div className='each-mentor'>
                  <p className='each-mentor-name'>{mentor.name}</p>
                  <p>{mentor.domain}</p>
                  <p>{mentor.degree}</p>
                  <p>{mentor.skills}</p>
                  <p>******/5</p>
                  <button 
                    className='go-to-profile'
                    onClick={() => {
                      handleClick(mentor.id)
                    }}
                  >Profile</button>
                </div>
              )
            })
          )}

      </div>
    </div>
  )
}

export default Mentee;
