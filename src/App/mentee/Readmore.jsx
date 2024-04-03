import PropTypes from 'prop-types'
import { useState } from 'react'

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true)

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated)
  }

  return (
    <div>
      <h3 className="M_Subtitle">
        {isTruncated ? text.slice(0, maxLength) : text}
        {text.length > maxLength && (
          <button onClick={toggleTruncate} className="M_ReadMore">
            {isTruncated ? 'Read more' : 'Read less'}
          </button>
        )}
      </h3>
    </div>
  )
}

ReadMore.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
}

export default ReadMore
