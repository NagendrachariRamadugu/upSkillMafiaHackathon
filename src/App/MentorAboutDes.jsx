import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const MentorAboutDes = ({
    about, setAbout, des, setDes, id, setId, mentors, setMentors, addEdit, setAddEdit
}) => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        setMentors(mentors.map((mentor) => (
            (id !== mentor.id)?(mentor):({...mentor, description:des, about})
        )))
        setAddEdit('Edit')
        setAbout('')
        setDes('')
        navigate('/mentor/profile')
    }
    return (
        <div className = {(!id)? ('about-update-not-specific'): ("contains-about-des-form")}>
            {
                (!id)? (
                    <>
                    <p>Whoops &#128546;</p>
                    <p>You are not specific about, where you would like to have the changes reflected in.</p>
                    <p>Try visiting out mentor page to acknowledge us.</p>
                    <Link style = {{
                        textDecoration: 'none',
                        color: 'white',
                        padding: '1rem',
                        backgroundColor: 'black'
                    }}to = '/mentee'>Click here</Link>
                    </>
                ):
                (
                    <form className="about-des-form">
                <label htmlFor="mentor-about">About</label>
                <textarea 
                    type="text" 
                    name = 'mentor-about'
                    id = 'mentor-about'
                    value = {about}
                    required
                    onChange={(e) => {
                        setAbout(e.target.value)
                    }}
                />
                <label htmlFor="mentor-des">Description</label>
                <textarea 
                    type="text" 
                    name = 'mentor-des'
                    id = 'mentor-des'
                    value = {des}
                    onChange={(e) => {
                        setDes(e.target.value)
                    }}
                    required
                />
                <input 
                    className="about-des-submit"
                    type="submit"
                    value = 'Add' 
                    onClick = {(e) => {
                        e.preventDefault()
                        if(des && about) {
                            handleSubmit()
                        }
                        else{
                            alert('Please enter the required fields')
                        }
                    }} 
                />
            </form>
                )
            }
        </div>
    )
}

export default MentorAboutDes