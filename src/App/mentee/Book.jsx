import { FaClock } from 'react-icons/fa'
import { IoIosChatbubbles } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa'
import { FaFireAlt } from 'react-icons/fa'

const BookingCard = () => {
  return (
    <div className="M_Profile_booking-card">
      <div className="M_Profile_price">$240 / month</div>
      <div className="M_Profile_description">
        Best suited for shorter sprints, frequent meets and fast-track growth.
        <br />
        <br />
        <IoCall />
        <strong>2 calls per month (30min/call)</strong>
        <br />
        <IoIosChatbubbles />
        Unlimited Q&A via chat
        <br />
        <FaClock /> Expect responses in 2 days
      </div>
      <button className="M_Profile_apply-btn">Book now</button>
      <div className="M_Profile_details">
        <h3>
          <FaCheck /> Flat fee, no hidden costs
        </h3>{' '}
        <br />
        <h3>
          <FaCheck /> 7 day free trial! Cancel anytime.{' '}
        </h3>
        <br />
        <h3>
          {' '}
          <FaFireAlt /> Only 2 spots left!{' '}
        </h3>
      </div>
    </div>
  )
}

export default BookingCard
