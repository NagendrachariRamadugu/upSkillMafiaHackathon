import { GiChampions } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { CgInsights } from "react-icons/cg";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { IoMdPeople } from "react-icons/io";
import { Link } from "react-router-dom";

import './HomeMain.css';

const HomeMain = () => {
  return (
    <main>
      <section className="hero-image-section">
        <div className="hero-image-div">
          <div>Start up advice from our experts</div>
          <Link to = '/mentee' className="find-expert">Find Your Experts</Link>
        </div>
      </section>
      <br /><br /><br />
      <section className='goals'>
        <div className="focus-on-goals">Learning focused on your goals</div>
        <div className="goal"> 
          <GiChampions className="goal-icon"/>
          <div>
            <p className="goal-text">Hands-on training</p>
            <p className="goal-des">Upskill effectively 
              with AI-powered coding exercises, 
              practice tests, skills assessments, 
              labs, and workspaces.
            </p>
          </div>
        </div>
        <div className="goal"> 
          <GrCertificate className="goal-icon"/>
          <div>
            <p className="goal-text">Certification prep</p>
            <p className="goal-des"> 
              Create tailored learning 
              paths for team and organization 
              goals and even host your own content
                and resources. 
            </p>
          </div>
        </div>
        <div className="goal"> 
          <CgInsights className="goal-icon"/>
          <div>
            <p className="goal-text">Insights and analytics</p>
            <p className="goal-des">Fast-track goals with 
              advanced insights plus a dedicated 
              customer success team to help drive 
              effective learning.
            </p>
          </div>
        </div>
        <div className="goal"> 
          <FaPeopleCarry className="goal-icon"/>
          <div>
            <p className="goal-text">Customizable content</p>
            <p className="goal-des">Create tailored 
              learning paths for team and 
              organization goals and even host
               your own content and resources. 
            </p>
          </div>
        </div>
      </section>
      <br /><br />
      <section className="pricing">
        <p className="pricing-text">Accelerate growth — for you or your organization</p>
        <p className="pricing-des">Reach goals faster 
          with one of our plans or programs. 
          Try one free today or contact sales to learn more.
        </p>
        <div className="pricing-info">
          <div className="card">
            <div className="plan-type">
              <p className="plan-type-text">Personal Plan</p>
              <div className="plan-type-icon">
                <p><FaPerson style = {{
                  color: 'black',
                  fontSize:'1rem'
                }}/></p>
                Individual
              </div>
            </div>
            <br />
            <div className="card-info">
              <p className="card-price">Starting at ₹850 per month</p>
              <p>Billed monthly or annually. Cancel anytime.</p>
              <p className="releases">Releases Soon</p>
              <p className="dot-p">{<LuDot className="dot" />} Access to 11,000+ top courses</p>
              <p className="dot-p">{<LuDot className="dot" />} Certification prep</p>
              <p className="dot-p">{<LuDot className="dot" />} Goal-focused recommendations</p>
              <p className="dot-p">{<LuDot className="dot" />} AI-powered coding exercises</p>
            </div>
          </div>
          <div className="card">
            <div className="plan-type">
              <p className="plan-type-text">Team Plan</p>
              <div className="plan-type-icon">
                <p style = {{
                  color: 'black',
                  fontSize: '1rem'
                }}><IoMdPeople/></p>
                For your team
              </div>
            </div>
            <br />
            <div className="card-info">
              <p className="card-price">₹1,167 a month per user</p>
              <p>Billed annually. Cancel anytime.</p>
              <p className="releases">Releases Soon</p>
              <p className="dot-p">{<LuDot className="dot" />}Access to 11,000+ top courses</p>
              <p className="dot-p">{<LuDot className="dot" />} Certification prep</p>
              <p className="dot-p">{<LuDot className="dot" />} Goal-focused recommendations</p>
              <p className="dot-p">{<LuDot className="dot" />} AI-powered coding exercises</p>
              <p className="dot-p">{<LuDot className="dot"/>}Analytics and adoption reports</p>
            </div>
          </div>
          <div className="card">
            <div className="plan-type">
              <p className="plan-type-text">Enterprise Plan</p>
              <div className="plan-type-icon">
                  <p><IoMdPeople style = {{
                    color: 'black',
                    fontSize: '1rem'
                  }}/></p>
                  For your whole organization
              </div>
            </div>
            <br />
            <div className="card-info">
              <p className="card-price">Billing price not available</p>
              <p className="releases">Releases Soon</p>
              <p className = 'dot-p'>{<LuDot className="dot" />} Access to 25,000+ top courses</p>
              <p className = 'dot-p'>{<LuDot className="dot" />} Certification prep</p>
              <p className = 'dot-p'>{<LuDot className="dot" />} Goal-focused recommendations</p>
              <p className = 'dot-p'>{<LuDot className="dot" />} AI-powered coding exercises</p>
              <p className = 'dot-p'>{<LuDot className="dot" />} Dedicated customer success team</p>
              <p className = 'dot-p'>{<LuDot className="dot" />} International course collection featuring 15 languages</p>
              <p className = 'dot-p'>{<LuDot className="dot" />} Customizable content</p>
              <p className = 'dot-p'>{<LuDot className="dot" />} Hands-on tech training with add-on</p>
            </div>
          </div>
        </div>
      </section>
    </main> 
  )
}

export default HomeMain
