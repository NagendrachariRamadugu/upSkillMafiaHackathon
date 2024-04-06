import './MenteeSignup.css';
import { Link, useNavigate } from 'react-router-dom';

const MenteeSignup= ({
    mentees, setMentees, menteeName, setMenteeName, menteeEmail, setMenteeEmail, 
    menteePwd, setMenteePwd, menteeConPwd, setMenteeConPwd, mentors, setMentors,
    signUpText, setSignUpText
}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        const menteeId= (mentees.length)?(mentees[mentees.length-1].id)+1: (1)
        const newMentee = {id: menteeId, name: menteeName, email: menteeEmail, password: menteePwd}
        setSignUpText(newMentee.name)
        setMentees([...mentees, newMentee])
        setMenteeName('')
        setMenteeEmail('')
        setMenteePwd('')
        setMenteeConPwd('')
        navigate('/')
    }

    return (
        <div style = {{
            padding: '5rem'
        }}className="mentee-sign-up-div">
            <form className="mentee-sign-up-form">
                <p className='mentee-sign-up-text'>Sign Up as Mentee</p>
                <label htmlFor="mentee-name">Enter name</label>
                <input 
                    type="text"
                    name = 'mentee-name'
                    id = 'mentee-name'
                    value = {menteeName}
                    onChange={(e) => {
                        setMenteeName(e.target.value)
                    }}
                    required
                />
                <label htmlFor="mentee-email">Enter email address</label>
                <input 
                    type="email"
                    name = 'mentee-email'
                    id = 'mentee-email'
                    value = {menteeEmail}
                    onChange={(e) => {
                        setMenteeEmail(e.target.value)
                    }}
                />
                <label htmlFor="mentee-pwd">Enter password</label>
                <input 
                    type="password" 
                    name = 'mentee-pwd'
                    id = 'mentee-pwd'
                    value = {menteePwd}
                    onChange={(e) => {
                        setMenteePwd(e.target.value)
                    }}
                    required
                />
                <label htmlFor="mentee-con-pwd">Confirm password</label>
                <input 
                    type="password"
                    name = 'mentee-con-pwd'
                    id = 'mentee-con-pwd'
                    value = {menteeConPwd}
                    onChange={(e) => {
                        setMenteeConPwd(e.target.value)
                    }}
                    required
                />
                <Link 
                    className='mentee-sign-up-link-button'
                    onClick={(e) => {
                        e.preventDefault();
                        if(menteePwd != menteeConPwd) {
                            alert("Passwords didn't match")
                        }
                        else if (!menteeName || !menteeEmail || !menteePwd || !menteeConPwd) {
                            alert("Please fill the required fields")
                        }
                        else if (
                            (mentors.find((mentor) => (
                                mentor.email === menteeEmail
                            ))) ||
                            (mentees.find((mentee) => (
                                mentee.email === menteeEmail
                            )))
                        ) {
                            alert('User already exists')
                        }

                        else if (!menteeEmail.includes('@')) {
                            alert('Please enter valid email address')
                        }
                        else {
                            handleClick();
                        }
                    }}
                >
                    Sign up
                </Link>
            </form>
        </div>
    )   
}

export default MenteeSignup;