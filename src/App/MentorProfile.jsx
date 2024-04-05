import { FaRegFaceSadTear } from "react-icons/fa6";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

const MentorProfile = ({
    id, setId, mentors, addEdit, setAddEdit
}) => {
    const mentor = (id)?(mentors.find((mentor) => (mentor.id === id))): (0)
    return (
       <div className="mentor-profile">
            <div className= {(!id)?('no-mentors'): ('mentors-are-there')}>
                {
                    (!id)?(
                        <>
                            <p className="unavailable">Are you specific whom you are searching for &#128546; ?</p>
                            <Link className = "sad-home" to = '/'>Home</Link>
                        </>
                    ):
                    (
                        <>
                            <div className="mentor-basic-info">
                                <div className="mentor-bio"> 
                                    <h1 style = {{
                                        color: 'black',
                                        marginBottom: '1rem'
                                    }}>{mentor.name} <span>{(mentor.gender === 'male')? '/ M': '/ F'}</span></h1>
                                    <p>{mentor.degree}</p>
                                    <p>{mentor.domain}</p>
                                    <p>{mentor.skills}</p>
                                </div>
                                <div 
                                    className= 'mentor-avatar'
                                    id = {(mentor.gender == 'male')?
                                            ('male-mentor'):
                                            ('female-mentor')
                                    }
                                    ></div>
                            </div>
                            <div className="mentor-about-des">
                                <Link to = '/mentor/profile/about' style = {{
                                        textDecoration: 'none'
                                    }}><p style = {{
                                        backgroundColor: 'black',
                                        textAlign: 'center',
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.9rem',
                                        borderRadius: '1rem',
                                        color: 'white',
                                    }}>{addEdit}</p></Link>
                                <div className="about-its-info">
                                    <p className="about-its-label">About</p>
                                    <p className="about-its-matter">{mentor.description}</p>
                                </div>
                                <div className="des-its-info">
                                    <p className="des-its-label">Description</p>
                                    <p className="des-its-matter">{mentor.about}</p>
                                </div>
                            </div>
                            <div className="mentor-videos-grid">
                                <div className="mentor-videos">
                                    <iframe
                                    className="menvdo-frame"
                                    src="https://www.youtube.com/embed/kEYUDWf_UpQ"
                                    title="A (very) Brief History of Leonhard Euler"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    ></iframe>
                                </div>
                                <div className="mentor-videos">
                                    <iframe
                                    className="menvdo-frame"
                                    src="https://www.youtube.com/embed/kEYUDWf_UpQ"
                                    title="A (very) Brief History of Leonhard Euler"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    ></iframe>
                                </div>
                                <div className="mentor-videos">
                                    <iframe
                                    className="menvdo-frame"
                                    src="https://www.youtube.com/embed/kEYUDWf_UpQ"
                                    title="A (very) Brief History of Leonhard Euler"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    ></iframe>
                                </div>
                                <div className="mentor-videos">
                                    <iframe
                                    className="menvdo-frame"
                                    src="https://www.youtube.com/embed/kEYUDWf_UpQ"
                                    title="A (very) Brief History of Leonhard Euler"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    ></iframe>
                                </div>
                                <div className="mentor-videos">
                                    <iframe
                                    className="menvdo-frame"
                                    src="https://www.youtube.com/embed/kEYUDWf_UpQ"
                                    title="A (very) Brief History of Leonhard Euler"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    ></iframe>
                                </div>
                                <div className="mentor-videos">
                                    <iframe
                                    className="menvdo-frame"
                                    src="https://www.youtube.com/embed/kEYUDWf_UpQ"
                                    title="A (very) Brief History of Leonhard Euler"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
       </div>
    )
}
export default MentorProfile