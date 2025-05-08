import React, { useState } from 'react'

const StarRating = ({starCount = 5, defaultStar = 0}) => {
    const [currentSelectdStar, setCurrentSelectedStar] = useState(defaultStar);
    const [currentHoverStar, setCurrentHoverStar] = useState(0);

  return (
    <div>
        {
            [...Array(starCount)].map((_, i) => {
                return <span  key={i} 
                              className={`star ${(currentHoverStar == 0 &&  i < currentSelectdStar) || i < currentHoverStar ? "star_gold" : ""}`} 
                              onClick={()=> setCurrentSelectedStar(i+1)}
                              onMouseEnter={() => setCurrentHoverStar(i+1)}
                              onMouseLeave={() => setCurrentHoverStar(0)}
                              >★</span>
            })
        }
    </div>
  )
}

export default StarRating