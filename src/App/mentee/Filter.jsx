import React, { useState } from 'react'

const MenteeSearch = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const filterOptions = (e) => {
    setSearchValue(e.target.value.toLowerCase())
  }

  const handleSliderChange = (e) => {
    // You can add logic here to filter content based on slider value
  }

  const handleClickOutside = (e) => {
    if (!e.target.closest('.MenteeSearch_dropdown')) {
      setDropdownVisible(false)
    }
  }

  document.addEventListener('click', handleClickOutside)

  return (
    <div className="MenteeSearch_dropdown">
      <button className="MenteeSearch_dropbtn" onClick={toggleDropdown}>
        Filters
      </button>
      {dropdownVisible && (
        <div className="MenteeSearch_dropdown-content">
          <input
            type="text"
            className="MenteeSearch_search-box"
            placeholder="Search filters..."
            value={searchValue}
            onChange={filterOptions}
          />
          <div className="MenteeSearch_option">
            <label className="MenteeSearch_checkbox-label">
              <input type="checkbox" id="option1" /> Option 1
            </label>
          </div>
          <div className="MenteeSearch_option">
            <label className="MenteeSearch_checkbox-label">
              <input type="checkbox" id="option2" /> Option 2
            </label>
          </div>
          <div className="MenteeSearch_option">
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              className="MenteeSearch_slider"
              onChange={handleSliderChange}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default MenteeSearch
