import PropTypes from 'prop-types'

const ReadMoreP = ({ text, maxLength }) => {
  return (
    <div>
      <p className="M_Subtitle_P">{text.slice(0, maxLength) + '....'}</p>
    </div>
  )
}

ReadMoreP.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
}

export default ReadMoreP
