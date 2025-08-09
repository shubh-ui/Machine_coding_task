import { useState } from "react";

const Star = ({ starCount = 5 }) => {
  const [clicked, setClicked] = useState(null);
  const [hover, setHover] = useState(null);

  const starMap = new Array(starCount).fill(0);

  return (
    <div>
      {starMap.map((_, i) => {
        const starIndex = i +1;
        const isActive = hover !== null ? hover >= starIndex : clicked >= starIndex;
        return (
          <span
            style={{
              fontSize: "30px",
              cursor: "pointer ",
              color: isActive ? "gold" : "black",
            }}
            key={i}
            onClick={() => setClicked(i + 1)}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(null)}
          >
            ★
          </span>
        );
      })}
      <div style={{ marginTop: "10px" }}>
        Rating: {clicked | 0}/{starCount}
      </div>
    </div>
  );
};

export default Star;
