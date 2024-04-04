import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
            <div className='info-byte-benders'>
              <div className='head'>Who we are..</div>
              <div className='info'>
                We, the aspiring minds, 
                consistently strive to persist our tech career and 
                being insisted, to add real time projects to our feed, throughout the journey.
              </div>
            </div>
            <div className='touch'>
              <div className="social-media">
                  <div className="collab">Collaborators</div>
                  <div className="person">
                    <div className="name">Nagendra Chari Ramadugu</div>
                    <div className="link-to">
                      <Link to = 'https://www.linkedin.com/in/ramadugu-nagendra-chari-60199b225/'><FaLinkedin className = 'linkedin'/></Link>
                      <Link to = 'https://github.com/NagendrachariRamadugu'><FaGithub className = 'git-hub'/></Link>
                    </div>
                  </div>
                  <div className="person">
                    <div className="name">Krishna Pedakolimi</div>
                    <div className="link-to">
                      <Link to = 'https://www.linkedin.com/in/krishna-pedakolimi-581639287/'><FaLinkedin className = 'linkedin'git-hub/></Link>
                      <Link to = 'https://github.com/PhyG0'><FaGithub className = 'git-hub'/></Link>
                    </div>
                  </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-text">Contact Info</div>
                <div className="shake-hand">
                  <FaHandshake />
                  <div>byteBenders</div>
                </div>
                <div className="email">
                  <div className="email-image-text">
                    <IoMdMail />
                    <div>Email us</div>
                  </div>
                  <div className="gmail">
                    <div>nagendrachariramadugu@gmail.com</div>
                    <div>chaitanyasiva30@gmail.com</div>
                  </div>
                </div>
              </div>

            </div>
            <div className="copy-right-section">© 2024 byteBenders (Teach and Tech community) | Terms of Service | Privacy Policy | All Rights Reserved</div>
    </footer>

  )
}


export default Footer
