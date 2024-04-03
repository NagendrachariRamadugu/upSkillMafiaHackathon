import React from 'react'

const Search = () => {
  return (
    <div className="Mentee_Search_Card">
      <div className="Mentee_Search_CardInner">
        <div className="Mentee_Search_container">
          <div className="Mentee_Search_Icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="Mentee_Search_feather Mentee_Search_feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="Mentee_Search_InputContainer">
            <input
              className="Mentee_Search_Input"
              placeholder="Search For Mentors/Courses..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
