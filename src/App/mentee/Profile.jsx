import './Profile.css'
import ReadMore from './Readmore'
import BookingCard from './Book'

const Profile = () => {
  function scrollToSkills() {
    const skillsElement = document.getElementById('skills')
    skillsElement.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div className="M_Profile_Container">
        <div className="M_Profile_Inner">
          <div className="M_Profile_Title">
            <h3 className="M_Title">
              Leonhard Euler <span className="M_Avaliable">Avaliable</span>
            </h3>
            <ReadMore
              text={`Explore the wonders of mathematics with Euler, the trailblazing
              mathematician whose expertise spans numbers equations, and
              graphs. Join me on a journey of discovery and learning at Euler's
              Mathematics Academy`}
              maxLength={200}
            />
            <div className="M_General">
              <div className="M_Rating">
                <h3 className="M_Stars">5.0 ⭐⭐⭐⭐⭐</h3>
                <h3 className="M_NoStudens">232,052,582,502 students</h3>
                <button className="M_SkillsBtn" onClick={scrollToSkills}>
                  Skills
                </button>
              </div>
            </div>
          </div>
          <div className="M_Hero">
            <img src="https://plus.maths.org/issue43/features/kirk/euler.jpg" />
          </div>
        </div>
        <div className="M_DemoClass">
          <div className="M_DemoInner">
            <h3 className="M_Demotext">Demo class : </h3>
            <iframe
              src="https://www.youtube.com/embed/kEYUDWf_UpQ"
              title="A (very) Brief History of Leonhard Euler"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="M_Learn">
            <h3 className="M_Learntitle">What you'll learn: </h3>
            <h3 className="M_Learninfo">
              <bold>Problem-solving Skills: </bold> Euler's problems cultivate
              creative and analytical thinking, honing your ability to solve
              complex problems effectively. <br />
              <bold>Mathematical Concepts:</bold> Tackling Euler's challenges
              deepens understanding across various mathematical domains, from
              number theory to calculus.
              <br /> <bold> Algorithmic Thinking:</bold> Exploring Euler's
              solutions enhances your algorithmic prowess, offering diverse
              approaches applicable in computer science and beyond. Programming{' '}
              <br />
              <bold>Skills: </bold> Implementing Euler's solutions in code
              sharpens programming proficiency, bridging theory and practical
              application.
            </h3>
          </div>
        </div>
        <div className="M_Skills" id="skills">
          <h3>Skills: </h3>
          <div className="SkillsContainer">
            <span className="skillChip">Algebra</span>
            <span className="skillChip">Geometry</span>
            <span className="skillChip">Number Theory</span>
            <span className="skillChip">Calculus</span>
            <span className="skillChip">Combinatorics</span>
          </div>
        </div>
        <div className="M_Book">
          <BookingCard />
        </div>
      </div>
    </>
  )
}

export default Profile
