import { Link } from "react-router-dom"
import './SignInSignUp.css';
import {useNavigate} from 'react-router-dom'

const SignInSignUp = ({
    userEmail, setUserEmail, userPwd, setUserPwd, mentees, mentors, signUpText, setSignUpText
}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        const user = (mentors.find((mentor) => (
            mentor.email === userEmail
        ))) || (mentees.find((mentee) => (
            mentee.email === userEmail
        )))
        setSignUpText(user.name)
        setUserEmail('')
        setUserPwd('')
        navigate('/')
    }
    return (
        <div style = {{
            padding: '5rem'
        }}>
            <div className="user-login-page">
                <p className="login-text">
                    Login 
                </p>
                <form className="user-login-page-form">
                    <label htmlFor="login-username">Enter username</label>
                    <input 
                        type="text"
                        name="login-useremail" 
                        id="login-user-email" 
                        value = {userEmail}
                        onChange={(e) => {
                            setUserEmail(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="login-pwd">Enter password</label>
                    <input 
                        type="password" 
                        name = 'login-pwd'
                        id ='login-pwd'
                        value = {userPwd}
                        onChange={(e) => {
                            setUserPwd(e.target.value)
                        }}
                    />
                    <Link 
                        className="login-page-signIn-button"
                        onClick = {(e) => {
                            e.preventDefault();
                            if(!userEmail || !userPwd) {
                                alert('Please enter required fields')
                            } 
                            else if (
                                (mentors.find((mentor) => {
                                    mentor.email === userEmail
                                })) ||
                                (
                                    mentees.find((mentee) => {
                                        mentee.email === userEmail
                                    })
                                )
                            ) {
                                alert('The email is not registered with us')
                            }
                            else if (
                                (mentors.find((mentor) => {
                                    mentor.password === userPwd
                                })) ||
                                (
                                    mentees.find((mentee) => {
                                        mentee.password === userPwd
                                    })
                                )
                            ) {
                                alert('Wrong Password')
                            }
                            else {
                                handleClick();
                            }
                            
                        }}
                    >Sign In</Link>
                </form>
                <br />
                <div className="not-reg-user">
                    <p className="not-reg-user-text">Not a registered user yet</p>
                    <div className="not-reg-user-links">
                        <Link to = '/mentor/signup' className="signup-as-mentor-link">Mentor</Link>
                        <Link to = '/mentee/signup' className="signup-as-mentee-link">Mentee</Link>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default SignInSignUp