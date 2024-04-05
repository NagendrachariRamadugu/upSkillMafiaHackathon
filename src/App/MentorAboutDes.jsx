import {useNavigate} from 'react-router-dom';

const MentorAboutDes = ({
    about, setAbout, des, setDes, id, setId, mentors, setMentors, addEdit, setAddEdit
}) => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        setMentors(mentors.map((mentor) => (
            (id !== mentor.id)?(mentor):({...mentor, description:des, about})
        )))
        setAddEdit('Edit')
        navigate('/mentor/profile')
    }
    return (
        <div className="contains-about-des-form">
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
        </div>
    )
}

export default MentorAboutDes