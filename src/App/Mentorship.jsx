import { format } from "date-fns"
import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom';

 
const Mentorship = ({
    mentors, setMentors, id, setId, mentees, setMentees
}) => {
    const currentDate = new Date ()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState(format(currentDate, 'yyyy-MM-dd'))
    const [gender, setGender] = useState('male')
    const [degree, setDegree] = useState('Intermediate/diploma')
    const [domain, setDomain] = useState('Machine Learning')
    const [skills, setSkills] = useState('')
    const [password, setPassword] = useState('')
    const [conPassword, setConPassword] = useState('')
    const navigate = useNavigate()
    const [checked, setChecked] = useState(true)
    
    const handleSubmit = () => {
        const mentorId = (mentors.length)? (mentors[mentors.length -1].id + 1): (1)
        const mentor = {
            id: mentorId, name, email, dob, gender, degree, domain, skills, password,
            about: '', descripton: ''
        }
        setMentors([...mentors, mentor])
        setId(mentorId)
        setName('')
        setEmail('')
        setSkills('')
        setPassword('')
        setConPassword('')

        navigate('/mentor/profile')
    }
    return (
        <div className="mentorship-main">
            <div className="enter-details-text">Please enter your details</div>
            <form className="mentorship-form">
                <label htmlFor="name-input">Enter Name</label>
                <input onChange = {(e) => {
                    setName(e.target.value)
                }}  
                    type="text"
                    name = 'name-input' 
                    id = 'name-input' 
                    value = {name}
                    required
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name = 'email' 
                    id = 'email'
                    value = {email}
                    onChange = {(e) => {
                        setEmail(e.target.value)
                    }}
                    required
                />
                <label htmlFor="dob">Date of Birth</label>
                <input 
                    type="date" 
                    name = 'dob' 
                    id = 'dob'
                    value = {dob}
                    onChange = {(e) => {
                        setDob(e.target.value)
                    }}
                    required
                />
                <label htmlFor="male">Gender</label>
                <div className="gender">
                    <div>
                        <label className = 'gender-label' htmlFor="male">Male</label>
                        <input 
                            type = 'radio' 
                            id = 'male' 
                            name = 'gender' 
                            value = 'male'
                            checked = {checked}
                            onChange = {(e) => {
                                setGender(e.target.value)   
                                setChecked(true)                       
                            }}
                        />
                    </div>
                    <div>
                        <label className = 'gender-label' htmlFor="female">Female</label>
                        <input 
                            type = 'radio' 
                            id = 'female' 
                            name = 'gender'
                            checked = {!checked}
                            value = 'female'
                            onChange = {(e) => {
                                setGender(e.target.value)
                                setChecked(false)
                            }}
                        />
                    </div>
                </div>
                <label htmlFor="degree">Degree</label>
                <select 
                    name="degree" 
                    id="degree"
                    onChange = {(e) => {
                        setDegree(e.target.value)
                    }}
                >
                    <option value="Intermediate/diploma">Intermediate/diploma</option>
                    <option value="Under Graduate">Under Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                </select>
                <label htmlFor="domain">Domain</label>
                <select 
                    name="domain"
                    id="domain"
                    onChange = {(e) => {
                        setDomain(e.target.value)
                        console.log(e.target.value)
                    }}
                >
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Full Stack development">Full Stack development</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                </select>
                <label htmlFor="skills">Skills</label>
                <textarea 
                    name="skills" 
                    id="skills"
                    value = {skills}
                    onChange = {(e) => {
                        setSkills(e.target.value)
                    }}
                    required
                ></textarea>
                <label htmlFor="password">Create password</label>
                <input 
                    type="password" 
                    id = 'password' 
                    name = 'password' 
                    value = {password}
                    onChange = {(e) => {
                        setPassword(e.target.value);
                    } }
                    required
                />
                <label htmlFor="password">Confirm password</label>
                <input 
                    type="password"
                    id = 'confirm-password' 
                    name = 'confirm-password' 
                    value = {conPassword}
                    onChange = {(e) => {
                        setConPassword(e.target.value);
                    }}
                    required
                />
                <input 
                    type = 'submit'
                    id = 'submit'
                    onClick={(e) => {
                        e.preventDefault()
                        if(conPassword != password) {
                            alert("Passwords do not match");
                        }
                        else if (
                            mentors.find((mentor) => (
                                mentor.email === email
                            )) ||
                            mentees.find((mentee) => (
                                mentee.email == email
                            ))
                        ) {
                            alert('User already exists')
                        }
                        else if (name && email && password && conPassword && skills && email.includes('@')) {
                            handleSubmit()
                        } 
                        else {
                            alert('Please provide all the feilds' )
                        }
                    }}
                />
            </form>
        </div>
    )
}
export default Mentorship