import './Mentor.css'
import { Link } from 'react-router-dom'
import { GiTeacher } from "react-icons/gi";
import { FaPersonDrowning } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";

const Mentor = () => {
    return (
        <div className="mentor-main">
            <div className="hero-image">
                <div className="hero-image-content">
                    <p className='teach-us-text'>
                        Come teach with us
                    </p>
                    <p className='become-ins-text'>
                        Become an instructor and change lives — including your own
                    </p>
                    <Link to ='/mentor/login' className='get-started-button'>Get Started</Link>
                </div>
            </div>    
            <br /><br /><br />
            <div className="reasons">
                <div className='start-text'>So many reasons to start</div>
                <div className="list-reasons">
                    <div className="reason" style = {{
                            borderRight: '0.5px solid lightgray'
                    }}>
                        <GiTeacher className='reason-image'/>
                        <div className="reason-text">
                            <p className='small-text'>Teach your way</p>
                            <p className="large-text">Publish the course you want,
                                in the way you want, and always have 
                                control of your own content.
                            </p>
                        </div>
                    </div>
                    <div className="reason" style = {{
                        borderLeft: '1px solid lightGray',
                        borderRight: '0.5px solid lightgray'
                    }}>
                        <FaPersonDrowning className='reason-image'/>
                        <div className="reason-text">
                            <p className='small-text'>Inspire learners</p>
                            <p className="large-text">Teach what you know and 
                                help learners explore their interests,
                                gain new skills, and advance their careers.
                            </p>
                        </div>
                    </div>
                    <div className="reason" style = {{
                        borderLeft: '1px solid lightGray'
                    }}>
                        <FaGift className='reason-image'/>
                        <div className="reason-text">
                            <p className='small-text'>Get rewarded</p>
                            <p className="large-text">Expand your professional network,
                                build your expertise, and earn money 
                                on each paid enrollment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="become-mentor">
                <div className='make-mentor-text'>Become an instructor today</div>
                <div className='join-teach-community'>
                    Join the Teaching community of byteBenders
                </div>
                <Link  to = '/mentor/login' className='get-started-button'>Get Started</Link>
            </div>
        </div>
    )
}
export default Mentor



