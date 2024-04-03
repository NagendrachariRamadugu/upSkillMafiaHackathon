import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'

const HomeHeader = () => {
  const [closed, setClosed] = useState(false)

  const handleHamClick = () => {
    setClosed((s) => {
      return !s
    })
  }

  return (
    <header>
      <div className="innerContainer">
        <div className="logo">Byte Benders</div>
        <div className="navbar">
          <Link to="/mentor" className="button">
            Become mentor
          </Link>
          <Link to="/mentee" className="button">
            Search Mentor
          </Link>
          <Link to="#" className="button">
            Sign Up
          </Link>
        </div>
        {!closed && (
          <div className="ham-fill">
            <div className="ham-inner">
              <Link to="/mentor" className="button">
                Become mentor
              </Link>
              <Link to="/mentee" className="button">
                Search Mentor
              </Link>
              <Link to="#" className="button">
                Sign Up
              </Link>
            </div>
          </div>
        )}
        <RxHamburgerMenu onClick={handleHamClick} className="ham" />
      </div>
    </header>
  )
}
export default HomeHeader
